export interface MyCVData {
  name: string;
  firstname: string;
  jobTitle: string;
  objectives: string;
  contacts?: { href: string; text: string; icon: string }[];
  personalDetails: {
    age: number;
  };
  skills?: string[];
}
