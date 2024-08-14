export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string;
}

export interface Education {
  title: string;
  duration: string;
  place?: string;
}

export interface CVData {
  profile: {
    name: string;
    firstname: string;
    jobTitle: string;
  };
  objectives: string;
  contacts?: {
    href: string;
    text: string;
    icon: { prefix: string; name: string };
  }[];
  personalDetails: {
    age: number;
    nationality: string;
    language: string;
  };
  skills?: string[];
  workExperiences: WorkExperience[];
  educations: Education[];
}
