"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Field, FieldLabel } from "@/components/ui/field";

type LandingFormProps = { 
    programaTitle: string; 
    campus: string;
};
type UTMParams = Record<string, string>;

type LeadData = Record<string, any>;

function validateEmail(email: string) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(String(email).toLowerCase());
}

function alphabeticFormat(input: string) {
  // deja letras + espacios + acentos
  return input.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function phoneFormat(input: string) {
  const digits = input.replace(/\D/g, "").slice(0, 10);
  const size = digits.length;

  if (size === 0) return "";
  if (size < 4) return "(" + digits;
  if (size < 7) return "(" + digits.slice(0, 3) + ") " + digits.slice(3);
  return "(" + digits.slice(0, 3) + ") " + digits.slice(3, 6) + "-" + digits.slice(6);
}

function zipFormat(input: string) {
  return input.replace(/\D/g, "").slice(0, 5);
}

function generateRandom() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function getUTMParamsFromURL(): UTMParams {
  const urlParams = new URLSearchParams(window.location.search);
  const utm: UTMParams = {};
  urlParams.forEach((value, key) => (utm[key] = value));
  return utm;
}

function getLeadSourceFromUTM(utm: UTMParams) {
  const raw = (utm.utm_source || "").trim().toLowerCase();

  if (raw === "qrcode") return "QR Code";
  if (raw === "bussinescard") return "Bussines Card";
  if (raw !== "") return "Google Ads";
  return "Bunji SEO";
}

async function fetchIpAndInfo() {
  // IP pública
  const ipRes = await fetch("https://api64.ipify.org?format=json");
  const ipData = await ipRes.json();
  const userIP = ipData.ip as string;

  // info de ip
  const infoRes = await fetch(`https://ipinfo.io/${userIP}/json`);
  const infoData = await infoRes.json();

  return {
    userIP,
    countryIP: infoData.country || "",
    stateIP: infoData.region || "",
    ciudadIP: infoData.city || "",
    ispIP: infoData.org || "",
    userAgent: navigator.userAgent,
  };
}

export default function FormLanding({ programaTitle, campus }: LandingFormProps) {
  // endpoints
  const verityLeadpostUrl = "https://api.verityiq.com/api/leadpost";
  const domainUrl = "https://www.compumed.edu/wp-content/";
  const contactEmailUrl = domainUrl + "uploads/2023/11/send_contact_email_1.php";
  const schoolname = "Compu-Med Vocational Careers";

  // refs a inputs
  const fnameRef = useRef<HTMLInputElement | null>(null);
  const lnameRef = useRef<HTMLInputElement | null>(null);
  const campusRef = useRef<HTMLInputElement | null>(null);
  const programRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const zipRef = useRef<HTMLInputElement | null>(null);

  // datos extra
  const [utmParams, setUtmParams] = useState<UTMParams>({});
  const [ipInfo, setIpInfo] = useState({
    userIP: "",
    countryIP: "",
    stateIP: "",
    ciudadIP: "",
    ispIP: "",
    userAgent: "",
  });

  const leadSource = useMemo(() => getLeadSourceFromUTM(utmParams), [utmParams]);

  // init: utm + ipinfo + sessionStorage lead source
  useEffect(() => {
    const utm = getUTMParamsFromURL();
    setUtmParams(utm);

    // session storage
    const usuarioStr = sessionStorage.getItem("usuario");
    if (!usuarioStr) {
      sessionStorage.setItem("usuario", JSON.stringify({ leadSourceMemory: getLeadSourceFromUTM(utm) }));
    } else {
      // asegura que exista leadSourceMemory
      const usuario = JSON.parse(usuarioStr);
      if (!usuario?.leadSourceMemory) {
        sessionStorage.setItem("usuario", JSON.stringify({ ...usuario, leadSourceMemory: getLeadSourceFromUTM(utm) }));
      }
    }

    // ipinfo
    fetchIpAndInfo()
      .then(setIpInfo)
      .catch((e) => console.error("IP info error:", e));
  }, []);

  // base leadData (igual que tu script)
  const baseLeadData: LeadData = useMemo(
    () => ({
      veritySysKey: "M2dX9rB1",
      tenantid: 52,
      campus: {campus},
      schoolname,
      campaigntype: {campus},
      campaigncode: {campus},
      language: "English",
      channel: "Website",
      leadsource: leadSource, // 👈 aquí
    }),
    [leadSource]
  );

  async function insertVerity(leadData: LeadData) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const formData = new URLSearchParams();
    Object.keys(leadData).forEach((key) => formData.append(key, String(leadData[key] ?? "")));

    // query params
    const urlParams = new URLSearchParams(window.location.search);
    for (const [k, v] of urlParams.entries()) formData.append(k, v);

    // hash params
    const fragment = window.location.hash.substring(1);
    if (fragment) {
      fragment.split("&").forEach((pair) => {
        const [k, v] = pair.split("=");
        if (k) formData.append(k, v ?? "");
      });
    }

    const res = await fetch(verityLeadpostUrl, { method: "POST", headers, body: formData });
    const data = await res.json().catch(() => ({}));
    console.log("Respuesta Verity:", data);
    return data;
  }

  async function sendContactEmail(payload: {
    firstname: string;
    lastname: string;
    campus: string;
    program: string;
    phone: string;
    email: string;
    zip: string;
  }) {
    const formData = new FormData();
    formData.append("firstname", payload.firstname);
    formData.append("lastname", payload.lastname);
    formData.append("campus", payload.campus);
    formData.append("program", payload.program);
    formData.append("phone", payload.phone);
    formData.append("email", payload.email);
    formData.append("zip", payload.zip);

    console.log("email sended");
    return fetch(contactEmailUrl, { method: "POST", body: formData });
  }

  function createLead(values: {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    zip: string;
    campus: string;
    program: string;
  }) {
    const phoneNumber = values.phone.replace(/\D/g, "").slice(0, 10);

    const leadid = (generateRandom() + generateRandom()).toLowerCase();

    const leadData: LeadData = {
      ...baseLeadData,
      fname: values.fname,
      lname: values.lname,
      email: values.email,
      phone: phoneNumber,
      zip: values.zip,
      campus: values.campus,
      campaigncode: values.campus,
      program: values.program,
      leadid,
      // UTMs (mismo mapeo que tu script)
      utm_campaign: utmParams.utm_campaign || "",
      utm_content: utmParams.utm_content || "",
      utm_device: utmParams.utm_device || "",
      utm_matchtype: utmParams.utm_matchtype || "",
      utm_medium: utmParams.utm_medium || "",
      utm_source: utmParams.utm_source || "",
      utm_term: utmParams.utm_term || "",
      Code_Id: utmParams.Code_Id || "",
      adposition: utmParams.adposition || "",
      creative_id: utmParams.creative_id || "",
      network: utmParams.network || "",
    };

    return leadData;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fname = fnameRef.current?.value?.trim() ?? "";
    const lname = lnameRef.current?.value?.trim() ?? "";
    const campus = campusRef.current?.value?.trim() ?? "";
    const program = programRef.current?.value?.trim() ?? "";
    const phone = phoneRef.current?.value?.trim() ?? "";
    const email = emailRef.current?.value?.trim() ?? "";
    const zip = zipRef.current?.value?.trim() ?? "";

    // validación (similar a tu script)
    if (!fname || !lname || !campus || !program || !phone || !email || !zip || !validateEmail(email)) {
      console.log("Validation failed:", { fname, lname, campus, program, phone, email, zip });
      return;
    }

    const leadData = createLead({ fname, lname, email, phone, zip, campus, program });

    // Verity
    await insertVerity(leadData).catch((err) => console.error("Verity error:", err));

    // dataLayer
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "formSubmission",
        formName: "formHomeHealthAideProgram",
        formFname: fname,
        formLname: lname,
        formEmail: email,
        formPhone: phone,
        formZipcode: zip,
        formCampus: campus,
        formProgram: program,
        formIp: ipInfo.userIP,
        formNavegador: ipInfo.userAgent,
        formCountryIP: ipInfo.countryIP,
        formStateIP: ipInfo.stateIP,
        formCiudadIP: ipInfo.ciudadIP,
        formIspIP: ipInfo.ispIP,
        ...utmParams,
      });
    }

    // Email
    await sendContactEmail({
      firstname: fname,
      lastname: lname,
      campus,
      program,
      phone,
      email,
      zip,
    }).catch((err) => console.error("Email error:", err));

    // reset (ojo: yo NO limpiaría campus/program si son hidden fijos)
    if (fnameRef.current) fnameRef.current.value = "";
    if (lnameRef.current) lnameRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (zipRef.current) zipRef.current.value = "";

    setTimeout(() => {
      window.location.href = "https://www.compumed.edu/la-thank-you-page/";
    }, 800);
  }

    return(
        <>
        <form name="Lead Form Home" id="contactUs-verity-form">
            <div className="grid grid-cols-2 gap-2">
                <input 
                    type="hidden" 
                    name="queried_id" 
                    value="134"
                />
                <input 
                    type="hidden" 
                    name="campus" 
                    id="campus" 
                    value={campus}
                />
                <Field className="gap-1 mt-2">
                <FieldLabel className="text-white" htmlFor="name">
                    Name*
                </FieldLabel>
                <input
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="First Name" 
                    required
                    title="The name field should only contain letters and accented characters"
                    className="text-black border-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                />
                </Field>
        
                <Field className="gap-1 mt-2">
                <FieldLabel className="text-white" htmlFor="lastname">
                    Lastname*
                </FieldLabel>
                <input
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    placeholder="Last Name" 
                    required
                    title="The name field should only contain letters and accented characters"
                    className="text-black border-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                />
                </Field>
            </div>
                                    
            <div className="grid grid-cols-1 gap-x-4">
                <Field className="gap-1 mt-2">
                <FieldLabel className="text-white" htmlFor="phone">
                    Phone*
                </FieldLabel>
                <div className="h-9 flex items-stretch w-full rounded-md border border-input bg-white overflow-hidden">
                    <div className="flex items-center gap-2 px-3 border-r border-input bg-white">
                    <img src="/icons/flag-UE.jpg" alt="Colombia" width={18} height={18} loading="lazy" />
                    <span className="text-sm font-medium text-black">+1</span>
                    </div>
                <input
                    type="tel" 
                    name="phone" 
                    id="phone"
                    title="Please enter a valid phone number"
                    placeholder="5551234567"
                    required
                    maxLength={10}
                    inputMode="numeric"
                    autoComplete="tel-national"
                    pattern="^[0-9]{10}$"
                    className="text-black border-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-md px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                    onInput={(e) => {
                        const el = e.currentTarget;
                        el.value = el.value.replace(/\D/g, "").slice(0, 10);
                    }}
                />
                </div>
                
                </Field>
            </div>
        
            <div className="grid grid-cols-1 gap-x-4">
                <Field className="gap-1 mt-2">
                <FieldLabel className="text-white" htmlFor="email">
                    Email*
                </FieldLabel>
                <input
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    title="Please enter a valid email address"
                    className="text-black border-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                    placeholder="email@dominio.com"
                />
                </Field>
            </div>
        
            <div className="grid grid-cols-1 gap-x-4">
                <Field className="gap-1 mt-2">
                <FieldLabel className="text-white" htmlFor="zip">
                    Zipcode*
                </FieldLabel>
                <input
                    name="zip" 
                    id="zip" 
                    required 
                    title="Please enter a ZIP Code"
                    placeholder="12345"
                    type="text"
                    maxLength={5}
                    inputMode="numeric"
                    pattern="^[0-9]{5}$"
                    className="text-black border-none file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-md px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#FFFFFF]"
                    onInput={(e) => {
                        const el = e.currentTarget;
                        el.value = el.value.replace(/\D/g, "").slice(0, 5);
                    }}
                />
                </Field>
            </div>
        
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <Field className="gap-1 mt-2 hidden">
                <FieldLabel className="text-white" htmlFor="form-field-programa">
                    Program
                </FieldLabel>
                <input
                    name="program" 
                    id="program"
                    type="hidden"
                    value={programaTitle}
                />
                </Field>
            </div>
        
            <div>
                <p className="text-center text-xs text-[#C8C8C8] py-2">
                    Clicking the <strong>&quot;Send Request&quot;</strong> button below constitutes your 
                    express written consent to be called and/or texted by CMVC 
                    at the number(s) provided.
                </p>
            </div>
        
            <div className="mx-auto text-center">
                    <button
                        id="submit" 
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 has-[>svg]:px-3 min-h-[44px] px-4 py-3 text-lg my-1 bg-[#ffc316] hover:bg-[#ffcf45] text-black hover:text-black"
                    >
                        Send Request
                    </button>
            </div>
        </form>
        </>
    )
}