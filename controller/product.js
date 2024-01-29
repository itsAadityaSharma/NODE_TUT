// const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// 7:22
const model = require("../Model/product");
const Product = model.Product;

//CREATE
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then(() => {
      res.status(201).json(product);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//GET ALL
exports.getAllProducts = async (_req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json(err);
  }
};

//GET ONE API
exports.getOneProduct = async (req, res) => {
  const id1 = req.params.id;
  try {
    const products = await Product.findById(id1);
    if (products === null) {
      res.status(404).send({ message: "No data found with this Id." });
    }
    res.json(products);
  } catch (err) {
    res.json(err);
  }
};

//PUT  API
exports.replaceProduct = async (req, res) => {
  const id1 = req.params.id;
  try {
    const products = await Product.findOneAndReplace({ _id: id1 }, req.body, {
      new: true,
    });
    res.status(201).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

//PATCH API
exports.updateProduct = async (req, res) => {
  const id1 = req.params.id;
  try {
    const products = await Product.findOneAndUpdate({ _id: id1 }, req.body, {
      new: true,
    });
    res.status(201).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

//DELETE
exports.deleteProduct = async (req, res) => {
  const id1 = req.params.id;
  try {
    await Product.findOneAndDelete({ _id: id1 }, req.body, {
      new: true,
    });
    res.status(200).json({ delete: true });
  } catch (err) {
    res.status(400).json(err);
  }
};
