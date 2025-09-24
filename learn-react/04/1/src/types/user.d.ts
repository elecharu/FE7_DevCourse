type UserObj = {
  name: string;
  age: number;
};

type UserProps = {
  userObj: UserObj;
  event: () => void;
};