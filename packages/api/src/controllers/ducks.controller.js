const db = require('../config/db');
const duckSchema = require('../schemas/duck.schema');
const ducks = db.get('ducks');

exports.getAll = async (req, res, next) => {
  try {
    const ducksList = await ducks.find();

    return res.json(ducksList);
  } catch (error) {
    return next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { value, error } = duckSchema.validate(req.params);

    if (error) {
      throw new Error(error);
    }

    const ducksList = await ducks.findOne(value.id);

    return res.json(ducksList);
  } catch (error) {
    return next(error);
  }
};

exports.insert = async (req, res, next) => {
  try {
    const { value, error } = duckSchema.validate(req.body);

    if (error) {
      throw new Error(error);
    }

    const duck = await ducks.insert(value);

    return res.json(duck);
  } catch (error) {
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { value, error } = duckSchema.validate({ ...req.params, ...req.body });

    if (error) {
      throw new Error(error);
    }

    const { id, ...rest } = value;
    const duck = await ducks.findOneAndUpdate(id, { $set: { ...rest } });

    return res.json(duck);
  } catch (error) {
    return next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { value, error } = duckSchema.validate(req.params);

    if (error) {
      throw new Error(error);
    }

    const duck = await ducks.findOneAndDelete(value.id);

    return res.json(duck);
  } catch (error) {
    return next(error);
  }
};
