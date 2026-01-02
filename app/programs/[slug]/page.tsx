//data
import { INFO_GENERAL } from "@/data/general";
import { PROGRAMS } from "@/data/programs";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import ScrollToFormButton from "@/components/ScrollToFormButton";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Smartphone } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { Star } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Shield } from "lucide-react";

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
    title: `${program.title} | TecMD`,
    description: program.description,
    openGraph: {
      title: `${program.title} | TecMD`,
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

  return (
    <>
        {
            //Menu
        }
        <div className="py-2 px-2 absolute w-full">
            <div className="max-w-5xl mx-auto grid grid-cols-2">
                <div>
                    <Image 
                        src={INFO_GENERAL.logoWhite}
                        //"/logos/logo-cmvc-white.svg"
                        alt="Logo CMVC"
                        width={120} 
                        height={80}
                    />
                </div>
                <div className="justify-end m-auto gap-8 sm:flex hidden text-sm text-white">
                    <p>Program</p>
                    <p>Adavance Skills</p>
                    <p>Admissions & Tuition</p>
                    <p>FAQ</p>
                </div>
            </div>
        </div>
        
        {
            //Banner Hero
        }
        <div className="bg-[url(/programs/medical-assistant-dallas-00.jpg)] bg-cover bg-center px-2">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 pt-30 pb-20 gap-10">
                <div className="content-center grid">

                    <h1 className="text-6xl text-white">
                        Medical Assistant Diploma
                    </h1>
                    <p className="text-lg text-white">
                        Start your career in healthcare as a Medical Assistant
                    </p>
                </div>
                <div className="" id="formContact">
                    <div className="bg-[#FFFFFF]/50 backdrop-blur-lg p-10">
                        <h2 className="text-black text-2xl text-center">
                            Start Now
                        </h2>
                        <FormLanding />
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
                    <h2 className="text-3xl text-black">
                        Medical Assistant Program
                    </h2>
                    <p className="text-black">
                        In this program, students are prepared with the 
                        technical skills and practical training necessary for entry-level 
                        positions as a Medical Assistant. Students will gain proficiency 
                        in performing a variety of clinical and administrative duties 
                        to assist physicians and ensure efficient healthcare delivery.
                    </p>
                    <p className="text-black">
                        Graduate without federal student loan debt
                    </p>
                    <div>
                        <ScrollToFormButton className="bg-[#013765] min-h-[44px]">
                            More Info
                        </ScrollToFormButton>
                    </div>
                </div>
                <div className="content-center">
                    <div className="bg-[#FFFFFF]">
                        <div>
                            <Image 
                                src="/programs/medical-assistant-dallas-08.jpg"
                                alt="Medical Assistant Dallas Program"
                                width={1200}
                                height={600}
                            />
                        </div>
                        <div className="grid grid-cols-3 text-black p-4 text-sm">
                            <div>
                                <p>
                                    Program Length<br></br>
                                    <span className="text-2xl">11 monts</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Total Credits<br></br>
                                    <span className="text-2xl">32.5</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Total Courses <br></br>
                                    <span className="text-2xl">14</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {
            //Overview program
        }
        <div className="bg-[#FFFFFF] px-2">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 py-10 gap-8">
                <div>
                    <Image 
                        src="/programs/medical-assistant-dallas-01.jpg"
                        alt="Medical Assistant Dallas Program"
                        width={1200}
                        height={600}
                    />
                </div>
                <div className="grid content-center gap-4">
                    <h2 className="text-3xl text-black">
                        Medical Assistant Program Overview
                    </h2>
                    <p className="text-black">
                        Our Medical Assistant Program is designed to help you advance 
                        your career and open doors to employment in the medical field. 
                        The program combines medical assistant coursework with general 
                        education classes to provide you with an Associate of Science 
                        in Medical Assisting. Some of the key courses include medical 
                        terminology, physical examination techniques, vital signs, 
                        law and ethics, human anatomy, and more.
                    </p>
                    <div>
                        <ScrollToFormButton className="bg-[#013765] min-h-[44px]">
                            Get More Information
                        </ScrollToFormButton>
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
                    <h2 className="text-white text-3xl">
                        Real Experience as a Medical Assistant
                    </h2>
                    <p className="text-white">
                        At CompuMed, you’ll gain hands-on experience as part of the program, 
                        preparing you for a real-world career. Through our onsite externship, 
                        you’ll work in hospitals and medical centers to gain practical 
                        experience before you graduate.
                    </p>
                    <div>
                        <ScrollToFormButton className="bg-[#F8B132] min-h-[44px] text-black">
                            Kickstart your career with us
                        </ScrollToFormButton>
                    </div>
                </div>
                <div>
                    <Image 
                        src="/programs/medical-assistant-dallas-02.jpg"
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
                <div className="m-auto">
                    <Image 
                        src="/programs/medical-assistant-dallas-03.jpg"
                        alt="Medical Assistant Dallas Program"
                        width={400}
                        height={600}
                    />
                </div>
                <div className="content-center grid gap-4">
                    <h2 className="text-3xl text-black">
                        Ready to Get Started? Here’s What You’ll Learn
                    </h2>
                    <p className="text-black">
                        This Medical Assistant program is designed to prepare you for real-world 
                        healthcare environments.<br></br>
                        <strong>In approximately 45 weeks (915 clock hours),</strong> you’ll gain hands-on experience, 
                        foundational medical knowledge, and the professional skills needed to 
                        confidently enter the healthcare field.
                    </p>
                    <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                        <li>
                            Clinical & Lab Skills – Blood draws, specimen handling, wound 
                            care, injections, and patient assistance.
                        </li>
                        <li>
                            Medical Office & Administrative Skills – EHR management, medical 
                            documentation, scheduling, and office procedures.
                        </li>
                        <li>
                            Medication & Patient Care – Safe medication administration, 
                            patient interaction, and exam support.
                        </li>
                        <li>
                            Professional & Ethical Foundations – Medical laws, ethics, 
                            professionalism, and cultural sensitivity.
                        </li>
                        <li>
                            Career-Focused Experience – Externship opportunities that 
                            connect you with real healthcare professionals.
                        </li>
                    </ul>
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
                    <h2 className="text-3xl text-black">
                        Expand Your Opportunities with Additional Certifications
                    </h2>
                    <p className="text-black">
                        In addition to the Medical Assistant Diploma, you will get knowledge 
                        of Phlebotomy and Electrocardiogram. These broaden your job prospects 
                        in hospitals, clinics, and medical offices, making you a more 
                        competitive candidate in the healthcare industry.
                    </p>
                    <div>
                        <ScrollToFormButton className="bg-[#013765] min-h-[44px]">
                            Start Your Career in Only 1 Year
                        </ScrollToFormButton>
                    </div>
                </div>
                <div>
                    <Image 
                        src="/programs/medical-assistant-dallas-04.jpg"
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
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-8 py-10">
                <div className="content-center">
                    <div className="bg-[#FFFFFF] p-10 gap-4 grid">
                        <h2 className="text-3xl text-black">
                            Admissions Requirements
                        </h2>
                        <p className="text-black">
                            We consider your prior academic experience during the admissions process. 
                            If you have a passion for healthcare and a desire to succeed, you' re 
                            a perfect fit for this program.
                        </p>
                        <div>
                            <ScrollToFormButton className="bg-[#013765] min-h-[44px]">
                                Kickstart Your Career With Us
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
        <div className="bg-[#FAFAFA] px-2  grid gap-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 pt-10 gap-1">
                <h2 className="text-black text-center text-3xl">
                    After Completing the Medical Assistant Program, You Will Be Able to
                </h2>
                <p className="text-black text-center">
                    Let CMVC help you prepare for your new career in healthcare!
                </p>
            </div>
            <div className="max-w-5xl mx-auto grid sm:grid-cols-4 grid-cols-1 gap-8">
                <div className="p-5 bg-[#FFFFFF] gap-1 grid content-start">
                    <BadgeCheck size={50} className="py-1" color="#646464"/>
                    <p className="text-black font-bold">
                        Perform as an Entry-Level Medical Assistant
                    </p>
                    <p className="text-sm text-black">
                        Confidently support clinical and administrative healthcare tasks.
                    </p>
                </div>
                <div className="p-5 bg-[#FFFFFF] gap-1 grid content-start">
                    <Star size={50} className="py-1" color="#646464"/>
                    <p className="text-black font-bold">
                        Execute Administrative & Laboratory Procedures
                    </p>
                    <p className="text-sm text-black">
                        Safely and competently handle medical office and lab responsibilities.
                    </p>
                </div>
                <div className="p-5 bg-[#FFFFFF] gap-1 grid content-start">
                    <BriefcaseBusiness size={50} className="py-1" color="#646464"/>
                    <p className="text-black font-bold">
                        Practice Within Legal & Ethical Guidelines
                    </p>
                    <p className="text-sm text-black">
                        Apply professional standards, laws, and ethical principles in healthcare settings.
                    </p>
                </div>
                <div className="p-5 bg-[#FFFFFF] gap-1 grid content-start">
                    <Shield size={50} className="py-1" color="#646464"/>
                    <p className="text-black font-bold">
                        Communicate Effectively in Healthcare Environments
                    </p>
                    <p className="text-sm text-black">
                        Collaborate with patients, providers, and healthcare teams.
                    </p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 pb-10 gap-8">
                
            </div>
        </div>

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
                        Medical Assistant Program Tuition and Fees
                    </h2>
                    <p className="text-white">
                         Tuition and fees vary. Contact the CMVC bursar’s office for 
                         more details on payment plans and available financial aid options.
                    </p>
                    <div>
                        <ScrollToFormButton className="bg-[#F8B132] min-h-[44px] text-black">
                            Get More Information
                        </ScrollToFormButton>
                    </div>
                </div>
            </div>
        </div>

        {
            //Employment Assistance
        }
        <div className="bg-[#FFFFFF] px-2">
            <div className="max-w-2xl mx-auto py-10">
                <h2 className="text-3xl text-black text-center">
                    Employment Assistance
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
        <div className="bg-[#FAFAFA] px-2">
            <div className="max-w-2xl mx-auto py-10 gap-8 grid">
                <div>
                    <h2 className="text-black text-center text-3xl">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="grid gap-4">
                    <Accordion type="single" collapsible className="w-full text-black">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is the Medical Assisting program difficult?</AccordionTrigger>
                            <AccordionContent>
                                The coursework can be challenging, but our instructors are here 
                                to help you succeed. They are experienced professionals in the field.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can a medical assistant be a health coach?</AccordionTrigger>
                            <AccordionContent>
                                While medical assistants provide some health guidance, becoming a health 
                                coach requires separate certification. Our program covers many of the foundational topics.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Should I become a medical assistant?</AccordionTrigger>
                            <AccordionContent>
                                Yes! The healthcare industry is growing, and medical assistants are in high demand. You will 
                                have job opportunities in hospitals, clinics, and doctors' offices.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>How long does it take to become a medical assistant?</AccordionTrigger>
                            <AccordionContent>
                                It takes about 11 months to complete this program.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger>What are the qualifications to be a medical assistant?</AccordionTrigger>
                            <AccordionContent>
                                You must be at least 18 years old, have a high school diploma or equivalent, and 
                                complete an accredited medical assistant program.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger>What are the duties of a medical assistant?</AccordionTrigger>
                            <AccordionContent>
                                Medical assistants perform clinical tasks like taking vital signs, preparing 
                                patients for exams, assisting physicians, and handling administrative tasks such 
                                as scheduling appointments and maintaining patient records.
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>

                    <div>
                        <p className="text-1xl text-black">
                            
                        </p>
                        <p className="text-black">
                            
                        </p>    
                    </div>
                </div>
            </div>
        </div>

        {
            //Contact Campus
        }
        <div className="bg-[#013765] px-2 py-10 grid gap-8">
            <div className="max-w-5xl mx-auto gap-8 grid grid-cols-1">
                <h2 className="text-center text-3xl text-white">
                    CMVC Dallas Campus
                </h2>
            </div>
            <div className="max-w-5xl mx-auto gap-8 grid sm:grid-cols-3 grid-cols-1 ">
                <div className="text-center">
                    <p className="flex justify-center items-center text-white">
                        <MapPin size={40} className="px-2"/> Location
                    </p>
                    <p className="text-white">
                        8131 Lyndon B. Johnson, Suite 300, <br></br>
                        Dallas, Texas
                    </p>
                </div>
                <div className="text-center">
                    <p className="flex justify-center items-center text-white">
                        <Mail size={40} className="px-2"/> Email
                    </p>
                    <p className="text-white">
                       dleonard@compumed.edu
                    </p>
                </div>
                <div className="text-center">
                    <p className="flex justify-center items-center text-white">
                        <Smartphone size={40} className="px-2"/> Phone
                    </p>
                    <p className="text-white">
                       972-301-8459
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}