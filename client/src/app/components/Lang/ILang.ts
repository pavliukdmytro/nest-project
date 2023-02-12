export interface IItem {
  name: string;
}

export interface IProps {
  result: {
    items: {
      [name: number]: {
        name: string;
      };
    };
  };
}
