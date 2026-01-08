//data
import { INFO_GENERAL } from "@/data/general";
import { PROGRAMS } from "@/data/programs";
import { CAMPUSES } from "@/data/campuses";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import ScrollToFormButton from "@/components/ScrollToFormButton";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Smartphone } from "lucide-react";
import { BadgeCheck } from "lucide-react";

//components
import FormLanding from "@/components/FromLanding";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    return {
      title: "Program not found | CMVC",
      description: "The program you're looking for doesn't exist.",
    };
  }

  return {
    title: `${program.title} | CMVC`,
    description: program.description,
    openGraph: {
      title: `${program.title} | CMVC`,
      description: program.description,
      url: `/programs/${program.slug}`,
      images: [
        {
          url: "program.heroImage",
          width: 1200,
          height: 630,
          alt: program.title,
        },
      ],
      type: "website",
      siteName: "CMVC",
      locale: "en_EU",
    },
  };
}

export default async function ProgramPage({ params }: Props) {
    const { slug } = await params;

    const program = PROGRAMS.find((p) => p.slug === slug);
    if (!program) notFound();

    const campusData = CAMPUSES.find((c) => c.id === program.campus);  

    const campusInfoCount = [
        campusData?.address,
        campusData?.email,
        campusData?.phone,
    ].filter(Boolean).length;


  return (
    <>
        {
            //Banner Hero
        }
        <div className="px-2 py-10">
            <Image
                src={program.imgHero}
                alt={program.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover z-[-1]"
                fetchPriority="high"
                quality={65}
            />
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="content-center grid gap-2">
                    <div className="flex gap-8">
                        <Image 
                            src={INFO_GENERAL.logoWhite}
                            //"/logos/logo-cmvc-white.svg"
                            alt="Logo CMVC"
                            width={120} 
                            height={80}
                            className="pb-4"
                        />
                        {campusData?.label && (
                        <Image
                            src={campusData.label}
                            alt={program.title}
                            width={100} 
                            height={80}
                            className="pb-4"                            
                        />  
                        )}
                    </div>
                    <h1 className="text-6xl text-white">
                        {program.title}
                    </h1>
                    {program.subtitle && (
                        <p className="text-lg text-white">
                            {program.subtitle}
                        </p>
                    )}
                    <div className="flex">
                        <p className="text-[#000000] bg-[#FFC316] px-2">Graduate without federal student loan debt</p>
                    </div>
                    
                </div>
                <div className="" id="formContact">
                    <div className="bg-[#013765]/50 backdrop-blur-lg p-10">
                        <h2 className="text-white text-2xl text-center">
                            Start Now
                        </h2>
                        <FormLanding 
                            programaTitle={program.title} 
                            campus={program.campus}
                        />
                    </div>
                </div>
            </div>
        </div>

        {
            //Objective program
        }
        <div className="bg-[#FAFAFA] px-2">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 py-10 gap-8">
                <div className="gap-4 grid content-center"> 
                    {program.descriptionProgram.descriptionTitle && (
                    <h2 className="text-3xl text-black">
                        {program.descriptionProgram.descriptionTitle}    
                    </h2>
                    )}          
                    {program.descriptionProgram.description && (
                        <p className="text-black">
                            {program.descriptionProgram.description}
                        </p>  
                    )}
                    {program.descriptionProgram.description.length > 0 &&(
                        <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                            {program.descriptionProgram.bulletsDescription.map((bullet, index) =>(
                                <li key={index}>
                                    {bullet}
                                </li>
                            )) }
                        </ul>
                    )}
                    
                    <div>
                        <ScrollToFormButton className="bg-[#013765] min-h-[44px]">
                            Get More Information
                        </ScrollToFormButton>
                    </div>
                </div>
                <div className="content-center">
                    <div className="bg-[#FFFFFF]">
                        <div>
                            <Image 
                                src={program.descriptionProgram.descriptionImg}
                                alt="Medical Assistant Dallas Program"
                                width={1200}
                                height={600}
                            />
                        </div>
                        <div className="grid grid-cols-3 text-black p-4 text-sm">
                            {program.programLength && (
                                <div>
                                    <p>
                                        Program Length<br></br>
                                        <span className="text-2xl">{program.programLength}</span>
                                    </p>
                                </div>
                            )}
                            {program.totalCredits && (
                                <div>
                                    <p>
                                        Total Credits<br></br>
                                        <span className="text-2xl">{program.totalCredits}</span>
                                    </p>
                                </div>
                            )}
                            {program.totalCourses && (
                                <div>
                                    <p>
                                        Total Courses <br></br>
                                        <span className="text-2xl">{program.totalCourses}</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {
            //Real Experience
        }
        <div className="bg-[#013765] px-2">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-8 py-10 content-center">
                <div className="grid content-center gap-4">
                    {program.realExperience.experienceTitle && (
                        <h2 className="text-white text-3xl">
                        {program.realExperience.experienceTitle}
                        </h2>
                    )}
                    {program.realExperience.experienceDescription && (
                        <p className="text-white">
                        {program.realExperience.experienceDescription}
                        </p>
                    )}
                    <div>
                        <ScrollToFormButton className="bg-[#F8B132] hover:bg-[#F8B132] min-h-[44px] text-black">
                            Start Your Career Today
                        </ScrollToFormButton>
                    </div>
                </div>
                <div>
                    <Image 
                        src={program.realExperience.experienceImg}
                        alt="Medical Assistant Dallas Program"
                        width={1200}
                        height={600}
                    />
                </div>
            </div>
        </div>

        {
            //Learn in this program
        }
        <div className="bg-[#FFFFFF] px-2">
            <div className="max-w-5xl mx-auto gap-8 py-10 grid sm:grid-cols-2 grid-cols-1">
                <div className="m-auto relative bg-[url(/programs/rombo-cmvc.svg)] bg-left bg-contain bg-no-repeat p-10">
                    <Image 
                        src={program.learnProgram.learnImg}
                        alt={program.title}
                        width={400}
                        height={600}
                        className="z-10"
                    />
                </div>
                <div className="content-center grid gap-4">
                    {program.learnProgram.learnTitle && (
                        <h2 className="text-3xl text-black">
                        {program.learnProgram.learnTitle}
                        </h2>
                    )}
                    {program.learnProgram.learnDescription && (
                        <p className="text-black">
                            {program.learnProgram.learnDescription}
                        </p>
                    )}
                    
                    {program.learnProgram.learnDescription.length > 0 && (
                         <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                        {program.learnProgram.learnBullets.map((bullet, index) =>(
                                <li key={index}>
                                    {bullet}
                                </li>
                            )) }
                        </ul>
                    )}
                    
                    <div>
                        <ScrollToFormButton className="bg-[#013765] min-h-[44px]">
                            Get More Information
                        </ScrollToFormButton>
                    </div>
                </div>
            </div>
        </div>

        {
            //Additional Certifications
        }
        <div className="bg-[#FAFAFA] px-2">
            <div className="max-w-5xl mx-auto gap-8 grid sm:grid-cols-2 grid-cols-1 py-10">
                <div className="content-center gap-4 grid">
                    {program.additionalCertifications.certificationsTitle && (
                        <h2 className="text-3xl text-black">
                            {program.additionalCertifications.certificationsTitle}
                        </h2>
                    )}
                    {program.additionalCertifications.certificationsDescription && (
                        <p className="text-black">
                            {program.additionalCertifications.certificationsDescription}
                        </p>
                    )}
                    
                    <div>
                        <ScrollToFormButton className="bg-[#013765] min-h-[44px]">
                            Get More Information
                        </ScrollToFormButton>
                    </div>
                </div>
                <div>
                    <Image 
                        src={program.additionalCertifications.certificationsImg}
                        alt="Medical Assistant Dallas Program"
                        width={1400}
                        height={600}
                    />
                </div>
            </div>
        </div>

        {
            //Admissions Requirements
        }
        <div className="bg-[#FEB319] px-2">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-8">
                <div className="content-center">
                    <div className="bg-[#FFFFFF] p-10 gap-4 grid">
                        <h2 className="text-3xl text-black">
                            If you’re motivated and ready to start, you may already qualify.
                        </h2>
                        <p className="text-black">
                            We consider your prior academic experience during the admissions process. 
                            If you have a passion for healthcare and a desire to succeed, you’ re 
                            a perfect fit for this program.
                        </p>
                        <div>
                            <ScrollToFormButton className="bg-[#013765] min-h-[44px]">
                                Get More Information
                            </ScrollToFormButton>
                        </div>
                    </div>
                </div>
                <div>
                    <Image 
                        src="/programs/medical-assistant-dallas-06.jpg"
                        alt="Medical Assistant Dallas Program"
                        width={1400}
                        height={600}
                    />
                </div>
            </div>
        </div>

        {
            //You Will Be Able to
        }
        {program.outcomesSection.outcomes.length > 0 && (

        <div className="bg-[#FAFAFA] px-2  grid gap-4 py-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-1">
                <h2 className="text-black text-center text-3xl">
                    What You’ll Be Ready to Do After Completing the Program
                </h2>
                <p className="text-black text-center">
                    Let CMVC help you prepare for your new career in healthcare!
                </p>
            </div>
            
            
                <div className="max-w-5xl mx-auto grid sm:grid-cols-4 grid-cols-1 gap-8">
                    {program.outcomesSection.outcomes.map((outcome, index) => (
                        <div 
                            key={index}
                            className="p-5 bg-[#FFFFFF] gap-1 grid content-start">
                            <BadgeCheck size={50} className="py-1" color="#646464"/>
                            <p className="text-black font-bold">
                            {outcome.title}
                            </p>
                            <p className="text-sm text-black">
                            {outcome.description}
                            </p>
                        </div>
                    ))}
                </div>
            
            
        </div>
        )}

        {
            //Tuition and Fees
        }
        <div className="bg-[#013765] px-2">
            <div className="max-w-5xl mx-auto gap-8 py-10 grid sm:grid-cols-2 grid-cols-1">
                <div>
                    <Image 
                        src="/programs/medical-assistant-dallas-07.jpg"
                        alt="Medical Assistant Dallas Program"
                        width={1400}
                        height={600}
                    />
                </div>
                <div className="content-center gap-4 grid">
                    <h2 className="text-3xl text-white">
                        Tuition, Fees, and Financial Options
                    </h2>
                    <p className="text-white">
                         Tuition and fees vary. Contact the CMVC bursar’s office for 
                         more details on payment plans and available financial aid options.
                    </p>
                    <div>
                        <ScrollToFormButton className="bg-[#F8B132] hover:bg-[#F8B132] min-h-[44px] text-black">
                            Talk to admissions about tuition options
                        </ScrollToFormButton>
                    </div>
                </div>
            </div>
        </div>

        {
            //Employment Assistance
        }
        <div className="bg-[#FFFFFF] px-2">
            <div className="max-w-2xl mx-auto py-20 gap-4 grid">
                <h2 className="text-3xl text-black text-center">
                    Career Support After Graduation
                </h2>
                <p className="text-black text-center">
                    While employment is not guaranteed, our Job Placement Department provides 
                    guidance and resources to help you find a job in the medical field 
                    after graduation.
                </p>
            </div>
        </div>

        {
            //FAQ
        }
        {program.faqSection.faqTitle && (
            <div className="bg-[#FAFAFA] px-2">
                <div className="max-w-2xl mx-auto py-10 gap-8 grid">
                    <div>
                        <h2 className="text-black text-center text-3xl">
                            {program.faqSection.faqTitle}
                        </h2>
                    </div>

                    
                    <div className="grid gap-4">
                        <Accordion type="single" collapsible className="w-full text-black">
                            {program.faqSection.faqs
                            .map((faq, index) => (
                                <AccordionItem 
                                    key={`${faq.question}-${index}`}   // ✅ key aquí
                                    value={`value-${index}`}
                                >
                                    <AccordionTrigger key={index}>{faq.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    
                </div>
            </div>
        )}

        {
            //Contact Campus
        }
        <div className="bg-[#013765] px-2 py-10 grid gap-8">
            <div className="max-w-5xl mx-auto gap-8 grid grid-cols-1">
                <h2 className="text-center text-3xl text-white">
                    {campusData?.id === "National"
                    ? "Contact CMVC National Admissions"
                    : `Visit or Contact the ${campusData?.name}`}
                </h2>
            </div>
            <div className={`max-w-5xl mx-auto gap-8 grid ${
                campusInfoCount === 3
                ? "sm:grid-cols-3"
                : campusInfoCount === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-1"
            } grid-cols-1`}
            >
                {campusData?.address && (
                    <div className="text-center">
                            <p className="flex justify-center items-center text-white">
                                <MapPin size={40} className="px-2"/> Location
                            </p>
                            <p className="text-white">
                                {campusData?.address}
                            </p>    
                    </div>
                )}
                {campusData?.email && (
                    <div className="text-center">
                        <p className="flex justify-center items-center text-white">
                            <Mail size={40} className="px-2"/> Email
                        </p>
                        <a
                        href={`mailto:${campusData.email}`}
                        className="text-white underline hover:text-[#FFC316]"
                        aria-label={`Send email to ${campusData.email}`}
                        >
                        {campusData.email}
                        </a>
                    </div>
                )}
                {campusData?.phone && (
                    <div className="text-center">
                        <p className="flex justify-center items-center text-white">
                            <Smartphone size={40} className="px-2"/> Phone
                        </p>
                        <a
                            href={`tel:${campusData.phone.replace(/\D/g, "")}`}
                            className="text-white underline hover:text-[#FFC316]"
                            aria-label={`Call ${campusData.phone}`}
                        >
                        {campusData.phone}
                        </a>
                    </div>
                )}
            </div>
        </div>
    </>
  );
}