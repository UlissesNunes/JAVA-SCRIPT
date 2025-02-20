class Dev {
    constructor (language , years) {
        this._language = language
        this._years = years
    }

    get language() {
        return `Você programa em ${this._language}`
    }

    get years() {
        return ` - Você estuda programação a ${this._years} anos! parabens`
    }



}

const dev = new Dev ('javascript' , 2)
//console.log(dev.language , dev.years)



class Ti extends Dev {
    constructor(language, years , name) {
        super(language , years)
        this._name = name
    }

    get name() {
        return ` Seu nome é ${this._name}`
    }
}


const ti = new Ti ( 'C++' , 3 , 'josé')
////console.log(`${ti.name}. ${ti.language}. ${ti.years}.`



  







    
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
   
    console.log (`${product.name} ${product.price} `)
     
     setTimeout(() => {
         console.log(`${product.discountt}`)}, 1400  )
