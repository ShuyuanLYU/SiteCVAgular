export interface Message {
  _id: number;
  title: string;
  message: string;
  creatTime: Date;
  editTime: Date;
  timeDiff: string;
  like: number;
}
