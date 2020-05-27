const products = [];
const mongoConnect = require('../util/database');

class Product{

    constructor(id, title, price, imageUrl, description){
        this.id = id;
        this.title = title;
        this.price = new Number(price);
        this.imageUrl = imageUrl;
        this.description = description;
    }

    save(){
        //this.id = Math.floor(Math.random() * 1000000);
       // products.push(this);
        mongoConnect((client) => {
            client.db('onlineshopping')
            .collection('products')
            .insertOne(this)
            .then(result => {
                console.log(result.result);
                client.close();
            })
            .catch(err => console.log(err));
        })
    }

    static findAll(){
        return products;
    }

    static findById(prodId){
        return products.filter(p => p.id == prodId);
    }

    update(){
        const editProdIndex = products.findIndex(p => p.id == this.id);
        products[editProdIndex] = this;
    }

    static deleteById(prodId){
        const deleteProdIndex = products.findIndex(p => p.id == prodId);
        products.splice(deleteProdIndex, 1);
    }
    
}

module.exports = Product;