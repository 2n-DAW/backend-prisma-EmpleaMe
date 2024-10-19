export interface Job {
  id: string;
  v: number;
  author: string;
  comments: string[];
  createdAt: Date;
  description: string;
  favouritesCount?: number;
  id_cat: string;
  id_contract: string;
  id_province: string;
  id_workingDay: string;
  images: string[];
  img: string;
  name: string;
  salary: number;
  slug: string;
  updatedAt: Date;
}