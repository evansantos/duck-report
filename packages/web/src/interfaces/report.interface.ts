interface Report {
  _id?: string;
  datetime: string;
  food: string;
  location: string;
  quantity: number;
  foodType: string;
  amount: number;
  repeatSchedule?: boolean;
}

export default Report;
