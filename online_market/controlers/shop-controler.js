const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getAllProducts = (req, res, next) => {
    //res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
    const products = Product.findAll();
    res.render('index', {name: 'Test', prods: products, path: '/', pageTitle: 'Home'});
}

exports.getProductDetail = (req, res, next) => {
    //render product detail
    const product = Product.findById(req.params.prodId);

    res.render('product-detail', {prod: product[0], pageTitle: 'Product Title', path: '/', name: 'test'});
}

exports.addToCart = (req, res, next) => {
    const addedProduct = Product.findById(req.body.id)[0];

    Cart.save(addedProduct);
    //console.log(Cart.getCart());
   // res.end('saved sucessfully');
   res.redirect('/cart');
}

exports.getCart = (req, res, next) => {
    //const cart = Cart.getCart();

    res.render('cart', {cart: Cart.getCart(), pageTitle: 'Shoping Cart Detail', path: '/cart', name: 'test'})
}

exports.deleteFromCart = (req, res, next) => {
    Cart.delete(req.body.prodId);
    res.redirect('/cart');
}