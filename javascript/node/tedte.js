class Product {
    constructor ( name , price ) {
        this._name = name
        this._price = price

        
    }

    get name() {
        return `O produto selecionado em nossa loja é ${this._name}.`
    }

    get price() {
        return ` O preço desse produto é de R$ ${this._price.toFixed(2)} porém posso consegui um desconto apenas hoje pra você.`
    }

    get discountt() {
        const discountedPrice = (this._price * 0.8).toFixed(2);
        return `O preço final com 10% de desconto fica de R$ ${discountedPrice} (parcelamos sem juros).`
    }

    /** 
      @param {number} value
     */
    set discount( value) {
        if (value > 0 && value <  this._price) {
         this._price -= value
            
        }
    
    }

   
}

const product = new Product ('Landpage complete' , 100.98)

console.log (`${product.name}`)
console.log (`${product.price} `)
 setTimeout(() => {
     console.log(`${product.discountt}`)}, 2700  )

     