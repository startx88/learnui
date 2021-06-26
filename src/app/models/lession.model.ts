import { ICourse } from './course.model';
import { ILessionCategory } from './lession-category.model';

export interface ILessionContent {
  id?: string;
  title: string;
  description: string;
  image: string;
  order: number;
  code: string | object;
}

export interface ILession {
  id?: string;
  category: ILessionCategory;
  course: ICourse;
  title: string;
  slug: string;
  description: string;
  video?: string;
  image?: string;
  duration?: string;
  notes?: string;
  document?: string;
  isFinish?: string;
  prevUrl?: string;
  nextUrl?: string;
  content?: ILessionContent[];
  status?: string;
  active?: boolean;
  insertAt?: Date;
  updatedAt?: Date;
}
