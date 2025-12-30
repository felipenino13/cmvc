import Image from "next/image";

export default function program(){
    return(
        <>

        {
            //Menu
        }
        <div className="bg-[#013765] py-2 px-2">
            <div className="max-w-5xl mx-auto grid grid-cols-2">
                <div>
                    <Image 
                        src="/logos/logo-cmvc-white.svg"
                        alt="Logo CMVC"
                        width={120} 
                        height={80}
                    />
                </div>
                <div className="justify-end m-auto gap-8 sm:flex hidden ">
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
        <div className="bg-[#324E81] px-2">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 py-20">
                <div>
                    <p>
                        CMVC - Your School of Progress
                    </p>
                    <h1 className="text-5xl">
                        Medical Assistant Diploma
                    </h1>
                    <p>
                        Start your career in healthcare as a Medical Assistant
                    </p>
                    <div className="grid grid-cols-3">
                        <div>
                            <p>
                                Program Length<br></br>
                                11 monts
                            </p>
                        </div>
                        <div>
                            <p>
                                Total Credits<br></br>
                                32.5
                            </p>
                        </div>
                        <div>
                            <p>
                                Total Courses <br></br>
                                14
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[#F3F3F3] p-10">
                        <h2 className="text-black text-2xl text-center">
                            Start Now
                        </h2>
                    </div>
                </div>
            </div>
        </div>

        {
            //Objective program
        }
        <div className="bg-[#FAFAFA] px-2">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 py-10 gap-8">
                <div>           
                    <h2 className="text-3xl text-black">
                        Medical Assistant Program
                    </h2>
                    <p className="text-black">
                        Objective: In this program, students are prepared with the 
                        technical skills and practical training necessary for entry-level 
                        positions as a Medical Assistant. Students will gain proficiency 
                        in performing a variety of clinical and administrative duties 
                        to assist physicians and ensure efficient healthcare delivery.
                    </p>
                </div>
                <div className="content-center">
                    <p className="text-black">
                        Graduate without federal student loan debt
                    </p>
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
                <div className="grid content-center">
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
                </div>
            </div>
        </div>

        {
            //Real Experience
        }
        <div className="bg-[#013765] px-2">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-8 py-10 content-center">
                <div className="grid content-center">
                    <h2 className="text-white text-3xl">
                        Real Experience as a Medical Assistant
                    </h2>
                    <p className="text-white">
                        At CompuMed, you’ll gain hands-on experience as part of the program, 
                        preparing you for a real-world career. Through our onsite externship, 
                        you’ll work in hospitals and medical centers to gain practical 
                        experience before you graduate.
                    </p>
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
                        What You Will Learn in this Program
                    </h2>
                    <p className="text-black">
                        The Medical Assistant program offers students an externship opportunity 
                        where you will gain valuable insight into career options and develop 
                        foundational relationships with healthcare professionals. Some of the 
                        key topics covered include:
                    </p>
                    <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                        <li>
                            Introductory Lab Courses: Learn about urinalysis, microbiology, 
                            radiology, and their relevance to medical assistant tasks, such 
                            as specimen collection and blood drawing.
                        </li>
                        <li>
                            Medication Administration: Understand procedural requirements, 
                            electronic healthcare records, professionalism, and cultural 
                            sensitivity.
                        </li>
                        <li>
                            Laws and Ethics: Learn about legal and ethical considerations 
                            in medical assistant practices, along with the pre-employment 
                            skills and work maturity necessary for success.
                        </li>
                        <li>
                            Laws and Ethics: Learn about legal and ethical considerations 
                            in medical assistant practices, along with the pre-employment 
                            skills and work maturity necessary for success.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {
            //Additional Certifications
        }
        <div className="bg-[#FAFAFA] px-2">
            <div className="max-w-5xl mx-auto gap-8 grid sm:grid-cols-2 grid-cols-1 py-10">
                <div className="content-center">
                    <h2 className="text-3xl text-black">
                        Expand Your Opportunities with Additional Certifications
                    </h2>
                    <p className="text-black">
                        In addition to the Medical Assistant Diploma, you will get knowledge 
                        of Phlebotomy and Electrocardiogram. These broaden your job prospects 
                        in hospitals, clinics, and medical offices, making you a more 
                        competitive candidate in the healthcare industry.
                    </p>
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
        //Ready to Get Started
        //(esta seccion tiene la misma informacion que "Learn in this program" y que "Hero")
        }

        <div className="bg-[#FFFFFF] px-2">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 py-10">
                <div>
                    <Image 
                        src="/programs/medical-assistant-dallas-05.jpg"
                        alt="Medical Assistant Dallas Program"
                        width={1400}
                        height={600}
                    />
                </div>
                <div className="content-center gap-4 grid">
                    <h2 className="text-black text-3xl">
                        Ready to Get Started?
                    </h2>
                    <p className="text-black">
                        The program duration is approximately 45 weeks, requiring 915 clock hours. 
                        The program allows students to prepare for real-world medical assistant tasks 
                        while gaining insight into the healthcare field. Some of the topics 
                        covered include:
                    </p>
                    <ul className="pl-5 text-black text-sm list-image-[url(/icons/check-icon.svg)]">
                        <li>
                            Introductory Courses and Labs: Learn about lab testing, drawing blood, 
                            and specimen handling.
                        </li>
                        <li>
                            Administrative Skills: Gain knowledge in medical office procedures, 
                            medication administration, and EHR management.
                        </li>
                        <li>
                            Clinical Skills: Learn wound care, injections, assisting with exams, 
                            and more.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {
            //Admissions Requirements
        }
        <div className="bg-[#FEB319] px-2">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-8 py-10">
                <div className="content-center">
                    <div className="bg-[#FFFFFF] p-10">
                        <h2 className="text-3xl text-black">
                            Admissions Requirements
                        </h2>
                        <p className="text-black">
                            We consider your prior academic experience during the admissions process. 
                            If you have a passion for healthcare and a desire to succeed, you're 
                            a perfect fit for this program.
                        </p>
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
            <div className="max-w-5xl mx-auto grid grid-cols-1 pt-10 gap-8">
                <h2 className="text-black text-center text-3xl">
                    After Completing the Medical Assistant Program, You Will Be Able to
                </h2>
            </div>
            <div className="max-w-5xl mx-auto grid sm:grid-cols-4 grid-cols-1 gap-8">
                <div className="p-5 bg-[#FFFFFF]">
                    <p className="text-4xl text-black">
                        01
                    </p>
                    <p className="text-black">
                        Perform effectively as an entry-level medical assistant.
                    </p>
                </div>
                <div className="p-5 bg-[#FFFFFF]">
                    <p className="text-4xl text-black">
                        02
                    </p>
                    <p className="text-black">
                        Conduct medical assistant administrative and laboratory 
                        procedures safely and competently.
                    </p>
                </div>
                <div className="p-5 bg-[#FFFFFF]">
                    <p className="text-4xl text-black">
                        03
                    </p>
                    <p className="text-black">
                        Practice within the legal and ethical boundaries 
                        for medical assistants.
                    </p>
                </div>
                <div className="p-5 bg-[#FFFFFF]">
                    <p className="text-4xl text-black">
                        04
                    </p>
                    <p className="text-black">
                        Communicate effectively with patients and 
                        healthcare teams.
                    </p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 pb-10 gap-8">
                <p className="text-black text-center">
                    Let CMVC help you prepare for your new career in healthcare!
                </p>
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
                <div className="content-center">
                    <h2 className="text-3xl text-white">
                        Medical Assistant Program Tuition and Fees
                    </h2>
                    <p className="text-white">
                         Tuition and fees vary. Contact the CMVC bursar’s office for 
                         more details on payment plans and available financial aid options.
                    </p>
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
        <div className="bg-[#FAFAFA]">
            <div className="max-w-2xl mx-auto py-10 gap-8 grid">
                <div>
                    <h2 className="text-black text-center text-3xl">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="grid gap-4">
                    <div>
                        <p className="text-1xl text-black">
                            Is the Medical Assisting program difficult?
                        </p>
                        <p className="text-black">
                            The coursework can be challenging, but our instructors are here 
                            to help you succeed. They are experienced professionals in the field.
                        </p>    
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-[#013765]">
            Contact Campus
        </div>

        </>
    )
}