interface IMenu {
  id: string;
  name: string;
  icon: string;
  url: string;
  children?: IMenu[];
}

export class NavMenu implements IMenu {
  constructor(
    public id: string,
    public name: string,
    public icon: string,
    public url: string,
    public children?: IMenu[]
  ) {}
}
