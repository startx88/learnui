import { ICourse } from './course.model';
import { ILession } from './lession.model';

export interface ILessionCategory {
  course: ICourse;
  id?: string;
  title: string;
  description?: string;
  slug?: string;
  active?: boolean;
  insertAt?: Date;
  lessions?: ILession[];
}
