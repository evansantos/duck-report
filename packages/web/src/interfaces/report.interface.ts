interface Report {
  _id?: string;
  datetime: string;
  foodType: string;
  food: string;
  location: string;
  quantity: number;
  amount: number;
  repeatSchedule?: boolean;
}

export default Report;
