export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")                    // separa acentos
    .replace(/[\u0300-\u036f]/g, "")     // elimina acentos
    .replace(/[^a-z0-9\s-]/g, "")        // elimina símbolos
    .trim()
    .replace(/\s+/g, "-")                // espacios → guiones
    .replace(/-+/g, "-");                // evita --
}

export type Program = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  campus: string;
  imgHero: string;
  programLength: string;
  totalCredits: string;
  totalCourses: string;
  descriptionProgram: DescriptionProgram;
  realExperience: RealExperience;
  learnProgram: LearnProgram;
  additionalCertifications: AdditionalCertifications;
  outcomesSection: OutcomesSection;
  faqSection: FAQSection;

};

export type DescriptionProgram = {
  descriptionTitle: string;
  description: string;
  bulletsDescription: string[];
  descriptionImg: string;
};

export type RealExperience = {
  experienceTitle: string;
  experienceDescription: string;
  experienceImg: string;
}

export type LearnProgram = {
  learnTitle: string;
  learnDescription: string;
  learnBullets: string[];
  learnImg: string;
};

export type AdditionalCertifications = {
  certificationsTitle: string;
  certificationsDescription: string;
  certificationsImg: string;
};

export type ProgramOutcome = {
  title: string;
  description: string;
  icon: "badge" | "star" | "briefcase" | "shield";
};

export type OutcomesSection = {
  outcomesTitle: string;
  outcomesSubtitle: string;
  outcomes: ProgramOutcome[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSection = {
  faqTitle: string;
  faqs: FAQItem[];
};


type ProgramInput = Omit<Program, "slug"> & { slug?: string };

function makeProgram(data: ProgramInput): Program {
  return {
    ...data,
    slug: data.slug ?? slugify(data.title + "-"+ data.campus),
  };
};

export const PROGRAMS: Program [] = [
    makeProgram({
        title: "Medical Assistant Diploma",
        description: "In this program, students are prepared with the technical skills and practical training necessary for entry-level positions as a Medical Assistant. Students will gain proficiency in performing a variety of clinical and administrative duties to assist physicians and ensure efficient healthcare delivery.",
        campus: "Dallas",
        subtitle: "Start your career in healthcare as a Medical Assistant",
        imgHero:"/programs/medical-assistant-dallas-hero.jpg",
        programLength:"11 monts",
        totalCredits:"32.5",
        totalCourses: "14",
        descriptionProgram: {
          descriptionTitle: "What the Medical Assistant Program Prepares You For",
          description:
            "The Medical Assistant Program prepares students with the technical and hands-on skills needed for entry-level positions in healthcare. Through a combination of clinical training and administrative coursework, students gain real-world experience to confidently support physicians and healthcare teams.",
          bulletsDescription: [
            "Hands-on clinical and laboratory training",
            "Medical office & administrative procedures",
            "Preparation for entry-level employment in healthcare",
          ],
          descriptionImg : "/programs/medical-assistant-dallas-08.jpg",
        },
        realExperience: {
          experienceTitle: "Gain Real-World Experience Before You Graduate",
          experienceDescription: "At CompuMed, you’ll gain hands-on experience as part of the program, preparing you for a real-world career. Through our onsite externship, you’ll work in hospitals and medical centers to gain practical experience before you graduate.",
          experienceImg : "/programs/medical-assistant-dallas-02.jpg",
        },
        learnProgram:  {
          learnTitle: "What You’ll Actually Learn and Practice in This Program",
          learnDescription: "This Medical Assistant program is designed to prepare you for real-world healthcare environments. In approximately 45 weeks (915 clock hours), you’ll gain hands-on experience, foundational medical knowledge, and the professional skills needed to confidently enter the healthcare field.",
          learnBullets: [
            "Clinical & Lab Skills – Blood draws, specimen handling, wound care, injections, and patient assistance.",
            "Medical Office & Administrative Skills – EHR management, medical documentation, scheduling, and office procedures.",
            "Medication & Patient Care – Safe medication administration, patient interaction, and exam support.",
            "Professional & Ethical Foundations – Medical laws, ethics, professionalism, and cultural sensitivity.",
            "Career-Focused Experience – Externship opportunities that connect you with real healthcare professionals.",
          ],
          learnImg: "/programs/medical-assistant-dallas-03.jpg",
        },

        additionalCertifications: {
          certificationsTitle: "Expand Your Career Opportunities with Additional Certifications",
          certificationsDescription: "In addition to the Medical Assistant Diploma, you will get knowledge of Phlebotomy and Electrocardiogram. These broaden your job prospects in hospitals, clinics, and medical offices, making you a more competitive candidate in the healthcare industry.",
          certificationsImg: "/programs/medical-assistant-dallas-04.jpg",
        },

        outcomesSection: {
          outcomesTitle: "What You’ll Be Ready to Do After Completing the Program",
          outcomesSubtitle: "Let CMVC help you prepare for your new career in healthcare!",
          outcomes: [
            {
              icon: "badge",
              title: "Perform as an Entry-Level Medical Assistant",
              description: "Confidently support clinical and administrative healthcare tasks.",
            },
            {
              icon: "badge",
              title: "Execute Administrative & Laboratory Procedures",
              description: "Safely and competently handle medical office and lab responsibilities.",
            },
            {
              icon: "badge",
              title: "Practice Within Legal & Ethical Guidelines",
              description: "Apply professional standards, laws, and ethical principles in healthcare settings.",
            },
            {
              icon: "badge",
              title: "Communicate Effectively in Healthcare Environments",
              description: "Collaborate with patients, providers, and healthcare teams.",
            },
          ]
        },

        faqSection:{
          faqTitle: "Frequently Asked Questions",
          faqs:[
            {
              question: "Is the Medical Assisting program difficult?",
              answer: "The coursework can be challenging, but our instructors are here to help you succeed. They are experienced professionals in the field.", 
            },
            {
              question: "Can a medical assistant be a health coach?",
              answer: "While medical assistants provide some health guidance, becoming a health coach requires separate certification. Our program covers many of the foundational topics.", 
            },
            {
              question: "Should I become a medical assistant?",
              answer: "Yes! The healthcare industry is growing, and medical assistants are in high demand. You will have job opportunities in hospitals, clinics, and doctors' offices.", 
            },
            {
              question: "How long does it take to become a medical assistant?",
              answer: "It takes about 11 months to complete this program.", 
            },
            {
              question: "What are the qualifications to be a medical assistant?",
              answer: "You must be at least 18 years old, have a high school diploma or equivalent, and complete an accredited medical assistant program.", 
            },
            {
              question: "What are the duties of a medical assistant?",
              answer: "Medical assistants perform clinical tasks like taking vital signs, preparing patients for exams, assisting physicians, and handling administrative tasks such as scheduling appointments and maintaining patient records.", 
            },
          ]
        }
    }),

    makeProgram({
        title: "Dental Assistant Diploma",
        description: "The field of dental health offers a stable and rewarding career with direct impact on people’s lives. At CMVC’s Dallas campus, our Dental Assistant program is designed to provide you with an education that combines theory and hands-on practice in a dynamic and accessible learning environment.",
        campus: "Dallas",
        subtitle: "",
        imgHero:"/programs/dental-assistant-diploma-dallas-hero.jpg",
        programLength:"11 monts",
        totalCredits:"30.5",
        totalCourses: "16",
        descriptionProgram: {
          descriptionTitle: "Discover a Career in Dental Assisting at CMVC – Dallas",
          description:
            "The field of dental health offers a stable and rewarding career with direct impact on people’s lives. At CMVC’s Dallas campus, our Dental Assistant program is designed to provide you with an education that combines theory and hands-on practice in a dynamic and accessible learning environment.",
          bulletsDescription: [
            
          ],
          descriptionImg : "/programs/dental-assistant-diploma-dallas-01.gif",
        },

        realExperience: {
          experienceTitle: "What Does a Dental Assistant Do?",
          experienceDescription: "Dental Assistants play a crucial role in any dental office. They assist dentists with both clinical and administrative procedures, ensuring that patients receive efficient and quality care. Their responsibilities include assisting the dentist during treatments, preparing and sterilizing instruments, taking dental impressions, educating patients on oral hygiene, and managing medical records and appointments.",
          experienceImg : "/programs/dental-assistant-diploma-dallas-05.jpg",
        },

        learnProgram:  {
          learnTitle: "Program Details",
          learnDescription: "This program is designed to equip students with the technical skills and hands-on training needed for an entry-level position as a Dental Assistant in a dental office or assisting with dental assisting. Students must complete a minimum of 30.5 semester credit hours (915 clock hours) and 180 hours of externship to graduate. The program can be completed in 11 months (10 months).",
          learnBullets: [
            "Assisting the dentist during treatments",
            "Preparing and sterilizing instruments",
            "Taking dental impressions",
            "Educating patients on oral hygiene",
            "Managing medical records and appointments.",
          ],
          learnImg: "/programs/dental-assistant-diploma-dallas-03.jpg",
        },

        additionalCertifications: {
          certificationsTitle: "Career Opportunities",
          certificationsDescription: "Graduates of CMVC’s Dental Assistant program can work in a variety of settings, including private and group dental offices, specialty clinics in orthodontics, endodontics, and oral surgery, hospitals, public health centers, insurance companies, and dental laboratories.",
          certificationsImg: "/programs/dental-assistant-diploma-dallas-04.jpg",
        },
        
        outcomesSection: {
          outcomesTitle: "What You’ll Be Ready to Do After Completing the Program",
          outcomesSubtitle: "Let CMVC help you prepare for your new career in healthcare!",
          outcomes: [
            
          ]
        },

        faqSection:{
          faqTitle: "",
          faqs:[
            {
              question: "",
              answer: "", 
            }
          ]
        },

    }),

  makeProgram({
    title: "Home Health Aide",
    description:
      "Caring for others is more than just a job—it’s a meaningful career. At CMVC, our Home Health Aide program prepares you for a rewarding role in the healthcare field, providing essential care and support to patients in their homes.",
    campus: "Dallas",
    subtitle: "Make a Difference Every Day with a Rewarding Career in Healthcare!",
    imgHero: "/programs/home-health-aide-dallas-hero.jpg",
    programLength: "4 weeks",
    totalCredits: "",
    totalCourses: "",

    // Block 1 (white section: “Start Your Career in Home Healthcare with CMVC”)
    descriptionProgram: {
      descriptionTitle: "Start Your Career in Home Healthcare with CMVC",
      description:
        "Caring for others is more than just a job—it’s a meaningful career. At CMVC, our Home Health Aide program prepares you for a rewarding role in the healthcare field, providing essential care and support to patients in their homes.",
      bulletsDescription: [
        "Graduate without federal student loan debt",
        "Short program you can complete quickly",
        "Training focused on real home healthcare tasks",
      ],
      descriptionImg: "/programs/home-health-aide-dallas-01.jpg",
    },

    // Block 2 (white section with checklist: “What Does a Home Health Aide Do?”)
    realExperience: {
      experienceTitle: "What Does a Home Health Aide Do?",
      experienceDescription:
        "Home Health Aides (HHAs) work under the supervision of a licensed nurse to assist patients with daily living activities, offering both physical and emotional support. Their responsibilities include:",
      experienceImg: "/programs/home-health-aide-dallas-02.jpg",
    },

    // Block 3 (navy section: “Career Opportunities”)
    learnProgram: {
      learnTitle: "Career Opportunities",
      learnDescription:
        "Graduates of our Home Health Aide program can work in various settings, including:",
      learnBullets: [
        "Private homes providing one-on-one care",
        "Home healthcare agencies",
        "Assisted living facilities",
        "Hospice and palliative care settings",
        "With growing demand for home healthcare services, HHAs can have strong job stability and multiple employment opportunities.",
      ],
      learnImg: "/programs/home-health-aide-dallas-03.jpg",
    },

    // Block 4 (white section: “Program Description and Objective”)
    additionalCertifications: {
      certificationsTitle: "Program Description and Objective",
      certificationsDescription:
        "The Home Health Aide program at CMVC prepares students with the essential knowledge and hands-on skills needed to provide quality home healthcare, including patient care, communication, and ethical practices, in a program completed in approximately 4 weeks.",
      certificationsImg: "/programs/home-health-aide-dallas-04.jpg",
    },

    // Block 5 (white section: “Additional Training at No Extra Cost”)
    outcomesSection: {
      outcomesTitle: "Additional Training at No Extra Cost",
      outcomesSubtitle:
        "To enhance your skills and employa11bility, CMVC provides 10 additional in-service trainings for free, covering key topics such as:",
      outcomes: [
        {
          icon: "badge",
          title: "Infection Control and Safety",
          description:
            "Learn essential safety practices to protect patients and reduce risk in home care settings.",
        },
        {
          icon: "badge",
          title: "Specialized Care Techniques",
          description:
            "Build skills for supporting elderly and disabled patients with confidence and compassion.",
        },
        {
          icon: "badge",
          title: "Patient Rights and Ethics",
          description:
            "Understand responsibilities, patient rights, and ethical guidelines in home healthcare.",
        },
        {
          icon: "badge",
          title: "Job-Ready Support Skills",
          description:
            "Strengthen practical skills that help you succeed on day one in real-world care environments.",
        },
      ],
    },

    // FAQ (no accordion visible on this landing capture; filled with sensible defaults for the program)
    faqSection: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "How long is the Home Health Aide program?",
          answer:
            "The program is approximately 4 weeks and includes a minimum of 75 clock hours.",
        },
        {
          question: "What does a Home Health Aide do?",
          answer:
            "HHAs assist patients with daily living activities and provide physical and emotional support under the supervision of a licensed nurse.",
        },
        {
          question: "Where can I work after completing the program?",
          answer:
            "Graduates may work in private homes, home healthcare agencies, assisted living facilities, or hospice and palliative care settings.",
        },
        {
          question: "Is there additional training included?",
          answer:
            "Yes. CMVC provides additional in-service trainings at no extra cost to enhance your skills and employability.",
        },
        {
          question: "Do I need prior healthcare experience to apply?",
          answer:
            "Many students start without prior experience. If you’re motivated and ready to start, CMVC can help you take the first step.",
        },
        {
          question: "How do I get more information or start?",
          answer:
            "Fill out the form on this page and our admissions team will contact you with next steps.",
        },
      ],
    },
  }),

]