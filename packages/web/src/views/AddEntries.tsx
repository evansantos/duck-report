import React from 'react';
import { useFormik } from 'formik';
import { Checkbox, Form, Grid, Dropdown } from 'semantic-ui-react';
import DucksSchema from '../schema/ducks.schema';
import foodTypeList from '../utils/food-type-list';
import foodList from '../utils/food-list';
import Report from '../interfaces/report.interface';
import { addDuckReport } from '../services/ducks.services';

const initialValues: Report = {
  datetime: '',
  food: '',
  location: '',
  quantity: 0,
  foodType: '',
  amount: 0,
};

const AddEntries = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: DucksSchema,
    onSubmit: (values, { resetForm }) => {
      addDuckReport(values).then(() => {
        resetForm();
      });
    },
  });

  return (
    <Grid padded="vertically">
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Form.Input
                id="datetime"
                name="datetime"
                type="datetime-local"
                label="Date & time"
                onChange={formik.handleChange}
                value={formik.values.datetime}
                error={!!formik.touched.datetime && formik.errors.datetime}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="foodType">Type of food</label>
              <Dropdown
                placeholder="Select a type of food"
                selection
                options={foodTypeList}
                id="foodType"
                name="foodType"
                onChange={(_, data) => {
                  formik.setFieldValue('foodType', data.value);
                }}
                value={formik.values.foodType}
                error={!!formik.touched.foodType && !!formik.errors.foodType}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="food">Food</label>
              <Dropdown
                placeholder="Select a food"
                selection
                disabled={!formik.values.foodType}
                options={foodList(formik.values.foodType)}
                id="food"
                name="food"
                onChange={(_, data) => {
                  formik.setFieldValue('food', data.value);
                }}
                value={formik.values.food}
                error={!!formik.touched.food && !!formik.errors.food}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                id="location"
                name="location"
                type="text"
                label="Location"
                onChange={formik.handleChange}
                value={formik.values.location}
                error={!!formik.touched.location && formik.errors.location}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                id="quantity"
                name="quantity"
                type="number"
                label="How many ducks were fed?"
                onChange={formik.handleChange}
                value={formik.values.quantity}
                error={!!formik.touched.quantity && formik.errors.quantity}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                id="amount"
                name="amount"
                type="number"
                label="Amount of food (in grams)"
                onChange={formik.handleChange}
                value={formik.values.amount}
                error={!!formik.touched.amount && formik.errors.amount}
              />
            </Form.Field>
            <Form.Button content="Submit" />
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AddEntries;
