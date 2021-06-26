import { ICategory } from './category.model';

export interface ICourse {
  id?: string;
  title: string;
  slug?: string;
  category: ICategory;
  image: string;
  description: string;
  status?: string;
  price?: Number;
  startDate?: Date;
  endDate?: Date;
  isPublish?: boolean;
  isFree?: boolean;
  duration?: string;
  offer?: Number;
  active?: boolean;
  insertAt?: Date;
  updatedAt?: Date;
}
