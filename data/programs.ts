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
};

export type DescriptionProgram = {
  descriptionTitle: string;
  description: string;
  bulletsDescription: string[];
  descriptionImg: string;
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
            "Their responsibilities include assisting the dentist during treatments",
            "Preparing and sterilizing instruments",
            "Taking dental impressions",
            "Educating patients on oral hygiene",
            "Managing medical records and appointments.",
          ],
          descriptionImg : "/programs/dental-assistant-diploma-dallas-01.gif",
        },
    }),
]