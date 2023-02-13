export interface IItem {
  name: string;
}

export interface IResult {
  items: {
    [name: number]: {
      name: string;
      link: string;
    };
  };
}
