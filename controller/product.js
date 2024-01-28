// const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");

const model = require("../Model/product");
const Product = model.Product;

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

exports.getAllProducts = (req, res) => {
  res.json(product);
};

exports.getOneProduct = (req, res) => {
  const id1 = +req.params.id;
  const prod = product.find((p) => p.id === id1);
  res.json(prod);
};

exports.replaceProduct = (req, res) => {
  const id1 = +req.params.id;
  const prodIndex = product.findIndex((p) => p.id === id1);
  product.splice(prodIndex, 1, { ...req.body, id: id1 });
  res.status(201).json();
};

exports.updateProduct = (req, res) => {
  const id1 = +req.params.id;
  const prodIndex = product.findIndex((p) => p.id === id1);
  const prods = product[prodIndex];
  product.splice(prodIndex, 1, { ...prods, ...req.body });
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  const id1 = +req.params.id;
  const prodIndex = product.findIndex((p) => p.id === id1);
  product.splice(prodIndex, 1);
  res.status(201).json();
  res.json({ type: "DELETE" });
};
