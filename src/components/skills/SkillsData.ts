export type SkillOrLanguage = {
  name: string;
  level: string;
  category: string;
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
  { name: "Microsoft Power BI", level: "expert", category: "Data Analysis & Visualization" },
  { name: "Data Analysis", level: "expert", category: "Data Analysis & Visualization" },
  { name: "Statistical Analysis", level: "advanced", category: "Data Analysis & Visualization" },
  { name: "Data Visualization", level: "expert", category: "Data Analysis & Visualization" },
  { name: "Exploratory Data Analysis (EDA)", level: "advanced", category: "Data Analysis & Visualization" },
  { name: "Business Intelligence", level: "expert", category: "Data Analysis & Visualization" },
  { name: "Quantitative Analytics", level: "advanced", category: "Data Analysis & Visualization" },
  { name: "Data Manipulation", level: "expert", category: "Data Analysis & Visualization" },
  { name: "Data Cleansing", level: "expert", category: "Data Analysis & Visualization" },
  { name: "Presentations", level: "advanced", category: "Data Analysis & Visualization" },
  
  { name: "SQL", level: "advanced", category: "Programming & Databases" },
  { name: "Python", level: "advanced", category: "Programming & Databases" },
  { name: "Pandas", level: "advanced", category: "Programming & Databases" },
  { name: "NumPy", level: "advanced", category: "Programming & Databases" },
  { name: "Matplotlib", level: "advanced", category: "Programming & Databases" },
  { name: "Access VBA", level: "advanced", category: "Programming & Databases" },
  { name: "HTML", level: "intermediate", category: "Programming & Databases" },
  { name: "CSS", level: "intermediate", category: "Programming & Databases" },
  { name: "PhpMyAdmin", level: "intermediate", category: "Programming & Databases" },
  { name: "Jupyter Notebook", level: "advanced", category: "Programming & Databases" },
  { name: "Oracle ERP", level: "advanced", category: "Programming & Databases" },
  { name: "SPSS", level: "advanced", category: "Programming & Databases" },
  
  { name: "Project Management", level: "expert", category: "Project Management & Business" },
  { name: "Strategic Thinking", level: "advanced", category: "Project Management & Business" },
  { name: "Change Management", level: "advanced", category: "Project Management & Business" },
  { name: "Agile Methodologies", level: "advanced", category: "Project Management & Business" },
  { name: "Project Planning", level: "expert", category: "Project Management & Business" },
  { name: "Financial Analysis", level: "expert", category: "Project Management & Business" },
  { name: "Policy & Economics", level: "advanced", category: "Project Management & Business" },
  { name: "Accounting Standards", level: "advanced", category: "Project Management & Business" },
  
  { name: "Microsoft Excel", level: "expert", category: "Technical & Software" },
  { name: "VBA", level: "advanced", category: "Technical & Software" },
  { name: "Pivot Tables", level: "expert", category: "Technical & Software" },
  { name: "Advanced Formulas", level: "expert", category: "Technical & Software" },
  
  { name: "Analytical Skills", level: "expert", category: "Soft Skills & Leadership" },
  { name: "Problem-Solving", level: "expert", category: "Soft Skills & Leadership" },
  { name: "Collaboration", level: "expert", category: "Soft Skills & Leadership" },
  { name: "Team Leadership", level: "advanced", category: "Soft Skills & Leadership" },
  { name: "Attention to Detail", level: "expert", category: "Soft Skills & Leadership" },
  { name: "Time Management", level: "advanced", category: "Soft Skills & Leadership" },
  { name: "Communication", level: "advanced", category: "Soft Skills & Leadership" },
  { name: "Multitasking", level: "expert", category: "Soft Skills & Leadership" },
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
