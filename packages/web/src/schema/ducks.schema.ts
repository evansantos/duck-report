import * as Yup from 'yup';

const DucksSchema = Yup.object().shape({
  datetime: Yup.date().required(),
  food: Yup.string().min(3).max(120).required(),
  location: Yup.string().min(3).max(255).required(),
  quantity: Yup.number().min(1).required(),
  foodType: Yup.string().min(3).max(120).required(),
  amount: Yup.number().min(1).required(),
});

export default DucksSchema;
