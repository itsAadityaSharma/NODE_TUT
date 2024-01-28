const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const user = data.users;

exports.createProduct = (req, res) => {
  console.log(req.body);
  user.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProducts = (req, res) => {
  res.json(user);
};

exports.getOneProduct = (req, res) => {
  const id1 = +req.params.id;
  const prod = user.find((p) => p.id === id1);
  res.json(prod);
};

exports.replaceProduct = (req, res) => {
  const id1 = +req.params.id;
  const prodIndex = user.findIndex((p) => p.id === id1);
  user.splice(prodIndex, 1, { ...req.body, id: id1 });
  res.status(201).json();
};

exports.updateProduct = (req, res) => {
  const id1 = +req.params.id;
  const prodIndex = user.findIndex((p) => p.id === id1);
  const prods = user[prodIndex];
  user.splice(prodIndex, 1, { ...prods, ...req.body });
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  const id1 = +req.params.id;
  const prodIndex = user.findIndex((p) => p.id === id1);
  user.splice(prodIndex, 1);
  res.status(201).json();
  res.json({ type: "DELETE" });
};
