export type SkillOrLanguage = {
  name: string;
  level: string;
};

export type SoftSkill = {
  name: string;
  description: string;
  certificates?: {
    name: string;
    institution: string;
    date: string;
    image: string;
  }[];
};

export const skills: SkillOrLanguage[] = [
  { name: "Power BI", level: "expert" },
  { name: "Data Visualization", level: "advanced" },
  { name: "Data Cleansing", level: "advanced" },
  { name: "Data Cleansing", level: "advanced" },
  { name: "Data Analysis", level: "advanced" },
  { name: "Data Modeling", level: "advanced" },
  { name: "Python", level: "advanced" },
  { name: "Panda", level: "expert" },
  { name: "NumPy", level: "advanced" },
  { name: "Matplotlib", level: "advanced" },
  { name: "SQL", level: "advanced" },
  { name: "Agile", level: "advanced" },
  { name: "Business Entrepreneurs Consulting", level: "advanced" },

];

export const languages: SkillOrLanguage[] = [
  { name: "Arabic", level: "native" },
  { name: "English", level: "advanced" },
  { name: "German", level: "basic" },
];

export const softSkills: SoftSkill[] = [
  { 
    name: "Data Analysis", 
    description: "Expertise in gathering, cleaning, and preprocessing data",
    certificates: [
      {
        name: "Data Analysis with SPSS",
        institution: "Ain Shams University",
        date: "June 2009",
        image: "/lovable-uploads/7369b8dd-7b33-41b0-9e51-4d4dd5b26fee.png"
      },
      {
        name: "BSRC Certificate",
        institution: "Ain Shams University",
        date: "December 2010",
        image: "/lovable-uploads/a7564736-c35e-4778-91db-6d4895983d4c.png"
      },
    ]
  },
  { 
    name: "Project Management", 
    description: "Experience with Agile methodologies and freelancing projects",
    certificates: [
      {
        name: "Electronic Management",
        institution: "ASI-EGYPT",
        date: "December 2008 - January 2009",
        image: "/lovable-uploads/56535ad7-88bf-4549-84db-8b01c6e3f0da.png"
      },
      {
        name: "Electronic Planning",
        institution: "The American University in Cairo",
        date: "May 2010",
        image: "/lovable-uploads/ed6529f6-27aa-463f-969b-6d44fa68f316.png"
      },
      {
        name: "Change Management and Career Development",
        institution: "ESLSCA Business School",
        date: "January 2019",
        image: "/lovable-uploads/b6b51ff1-7f24-4a5e-a75f-37b5afeb1809.png"
      },
    ]
  },
  { 
    name: "Computer Skills", 
    description: "Proficient in various computer applications and systems",
    certificates: [
      {
        name: "ICDL Certificate",
        institution: "European Computer Driving Licence Foundation",
        date: "March 2006",
        image: "/lovable-uploads/c334ef08-8213-490d-a6ab-9e832c266cdb.png"
      },
      {
        name: "MS Access",
        institution: "SLCC",
        date: "July 2008",
        image: "/lovable-uploads/4f7a9098-4d5d-46a9-8c79-a37f1df342aa.png"
      },
    ]
  },
  { 
    name: "Business Applications", 
    description: "Experience with enterprise software and business applications",
    certificates: [
      {
        name: "Oracle Financial Applications",
        institution: "Oracle University",
        date: "May 2009",
        image: "/lovable-uploads/cad52907-ccef-4b1f-8d2d-6ff94811394f.png"
      },
      {
        name: "E-Commerce Basics",
        institution: "The American University in Cairo",
        date: "Summer 2004/05",
        image: "/lovable-uploads/8d75844c-a5bd-48f7-aab0-d99addd1470d.png"
      },
    ]
  },
  { 
    name: "Language Training", 
    description: "Language proficiency and communication skills",
    certificates: [
      {
        name: "English Studies - ETLS Level 1",
        institution: "The American University in Cairo",
        date: "Spring 2006",
        image: "/lovable-uploads/33a8947c-f5ec-4874-baac-f03a0d8ac4aa.png"
      },
    ]
  }
];

export const getProgressValue = (level: string): number => {
  const levels: { [key: string]: number } = {
    beginner: 25,
    basic: 25,
    intermediate: 50,
    advanced: 75,
    expert: 100,
    native: 100,
  };
  return levels[level] || 0;
};
