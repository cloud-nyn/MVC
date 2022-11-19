var express = require("express");
var router = express.Router();
const product = require("../module/product");
const path = require("path");

router.use("views",express.static(path.join(__dirname,"views")));

let cartItems=[];
let items = [
  new product("001", "Temu's Jacket", 25, "Get your free Jacket!"),
  new product("002", "Gaming Headset", 160, "Awesome headset for cheap Price!"),
  new product("003", "Pen", 1, "Try me and excel"),
  new product(
    "004",
    "iPhone 14",
    999,
    "Still the same but why not buying new phone"
  ),
  new product("005", "Bag", 80, "get your lady a gift"),
];

router.get("/", (req, res) => {
  res.render("product", {
    itemList: items,
  });
});

router.get("/addToCart", (req,res) => {
  let value = req.query.pId;
  let itemInCart = items.filter(item=>item.id==value)[0];
  cartItems.push(itemInCart);
  res.redirect("/")
});

router.post("/shoppingCart", (req, res) => {
  res.render("shoppingcart",{
      itemsInCart:cartItems
  })
});
module.exports = router;