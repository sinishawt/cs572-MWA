let cart = null;

module.exports = class Cart {

    static save(product){
        if(cart === null){
            cart = {products: [], totalPrice: 0};
        }
           const existProdIdIndex = cart.products.findIndex(p => p.id == product.id); //check if product is there
           if(existProdIdIndex >= 0){//exist in cart
                const existingProduct = cart.products[existProdIdIndex];
                existingProduct.qty += 1;
           }else { 
                product.qty = 1;
                cart.products.push(product);
           }
        
        cart.totalPrice += product.price;
    }

    static getCart(){
        return cart;
    }

    static delete(productId){
  
        const isExisting = cart.products.findIndex(p => p.id == productId);
        if(isExisting >= 0){
            cart.products.splice(isExisting, 1);
        }
    }
}