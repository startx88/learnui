import { Color } from '../utility';
import { Size } from '../utility';

export interface IAlert {
  message: string;
  color?: Color;
  visible?: boolean;
  size?: Size;
  direction?: string;
}
