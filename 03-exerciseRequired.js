const { r } = require("tar")

class ProductManager {
    
    #products
    constructor (){
        this.#products = []
    }

    #generateID(){
        if(this.#products.length === 0) return 1
        return this.#products[this.#products.length - 1].id + 1 
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        const id = this.#generateID()
        const product = { id, title, description, price, thumbnail, code, stock }

        if( !title || !description || !price || !thumbnail || !code || !stock ){
            return console.log("Missing data!")}        
        
        if(this.#products.some((p) => {return p.code === code})){
            return console.log("This code has been registered")
        }

        this.#products.push(product)
    }

    //It deletes a product 
    deleteProductByCode = (code) => {

        if(this.#products.some((p) => { return p.code === code })){            
            this.#products.splice(this.#products.findIndex(p => p.code === code) , 1)
            console.log("Product ("+ code +") has been deleted")
        }

    }

    //It returns all the products 
    getProducts = () => {
        return this.#products
    }

    //It returns an specific product by the code  
    getProduct = (code) => {
        if(this.#products.some((p) => { return p.code === code })){
            return this.#products[this.#products.findIndex(p => p.code === code)]
        }
            return "Error"
    }

    //Getters and Setters
    setTitle = (code, title) => {        
        this.getProduct(code).title = title
        if(this.#products.some((p) => { return p.code === code })){            
            this.#products[this.#products.findIndex(p => p.code === code)].title = title
            console.log("Title has been updated")
        }
    }

    getTitle = (code) => {
        if(this.#products.some((p) => { return p.code === code })){
            return this.#products[this.#products.findIndex(p => p.code === code)].title
        }
            return "Product has not found"
    }

    setDescription = (code, description) => {
        if(this.#products.some((p) => { return p.code === code })){            
            this.#products[this.#products.findIndex(p => p.code === code)].description = description
            console.log("Description has been updated")
        }
        
    }
    getDescription = (code) => {
        if(this.#products.some((p) => { return p.code === code })){
            return this.#products[this.#products.findIndex(p => p.code === code)].description
        }
            return "Product has not found"
    }

    setPrice = (code, price) => {
        this.getProduct(code).title = title
        if(this.#products.some((p) => { return p.code === code })){            
            this.#products[this.#products.findIndex(p => p.code === code)].price = price
            console.log("Price has been updated")
        }
    }

    getPrice = (code) => {
        if(this.#products.some((p) => { return p.code === code })){
            return this.#products[this.#products.findIndex(p => p.code === code)].price
        }
            return "Product has not found"
    }

    setThumbnail = (code, thumbnail) => {
        this.getProduct(code).title = title
        if(this.#products.some((p) => { return p.code === code })){            
            this.#products[this.#products.findIndex(p => p.code === code)].thumbnail = thumbnail
            console.log("Thumbnail has been updated")
        }
    }

    getThumbnail = (code) => {
        if(this.#products.some((p) => { return p.code === code })){
            return this.#products[this.#products.findIndex(p => p.code === code)].thumbnail
        }
            return "Product has not found"
    }

    setStock = (code, stock) => {
        this.getProduct(code).title = title
        if(this.#products.some((p) => { return p.code === code })){            
            this.#products[this.#products.findIndex(p => p.code === code)].stock = stock
            console.log("Stock has been updated")
        }
    }

    getStock = (code) => {
        if(this.#products.some((p) => { return p.code === code })){
            return this.#products[this.#products.findIndex(p => p.code === code)].stock
        }
            return "Product has not found"   
    }



}



//const manager = new ProductManager()
//manager.addProduct("Tshirt", "Black tshirt", 25, "./thumbnails/thumbnail1.png", 2400, 20)
//console.log(manager.getProducts())
//manager.addProduct("Tshirt", "Black tshirt", 40, "./thumbnails/thumbnail2.png", 2401, 20)
//console.log(manager.getProducts())
//manager.setDescription(2401, "White Tshirt")
//console.log(manager.getProducts())
//manager.deleteProductByCode(2400)
//console.log(manager.getProduct(2400))
//console.log(manager.getDescription(2401))
//console.log(manager.getPrice(2403))
//console.log(manager.getProducts())