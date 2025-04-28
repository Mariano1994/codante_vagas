export interface Job {
  id: string;
  title: string;
  company: string;
  salary: string;
  city: string;
}

export interface JobRole {
  id: number;
  title: string;
  company: string;
  company_website: string;
  number_of_positions: number;
  schedule: string;
  salary: number;
  description: string;
  requirements: string;
  city: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
}
