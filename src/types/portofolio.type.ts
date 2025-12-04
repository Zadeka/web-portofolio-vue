export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  image: string;
  desc: string;
  tech: string[];
  link_github?: string;
  link_demo?: string;
}

export interface NavLink {
  name: string;
  href: string;
}
