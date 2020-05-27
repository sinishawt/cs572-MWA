const Product = require('../models/product');

exports.getProductForm = (req, res, next) => {
    res.render('add-product', {name: 'Test', path: '/admin/add-product', pageTitle: 'Add Product'});
 }

 exports.postProducts = (req, res, next) => {
    console.log('save product...');
    //console.log(req.body);
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;

    const prod = new Product(null, title, price, imageUrl, description);
    prod.save();

    console.log(Product.findAll());
    console.log(prod);
    res.redirect('/');
   // res.send('Save Successfully');
}

exports.editProductPage = (req, res, next) => {
    const product = Product.findById(req.params.prodId);
    res.render('edit-product', {product: product[0], name: 'Test', path: '/admin/edit-product', pageTitle: 'Edit Product'});
 }

 exports.editProductPost = (req, res, next) => {
    const updatedProduct = new Product(req.body.id, req.body.title, req.body.price, req.body.imageUrl, req.body.description);
    updatedProduct.update();
    res.redirect('/products/' + updatedProduct.id);
}

exports.deleteProduct = (req, res, next) => {
    Product.deleteById(req.body.id);
    res.redirect('/');
   // fs.createReadStream(path.join(__dirname, '..', 'views', 'add-product.html')).pipe(res);
}