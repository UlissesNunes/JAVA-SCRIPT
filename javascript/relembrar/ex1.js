
class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    get name() {
        return `O produto selecionado em nossa loja é ${this._name}.`;
    }

    get price() {
        return `O preço desse produto é de R$ ${this._price}, porém posso conseguir um desconto apenas hoje.`;
    }

    set discount(value) {
        if (value > 0 && value < this._price) {
            this._price -= value; // Aplica o desconto ao preço
        }
    }
}

// Criação do objeto product
const product = new Product('Landpage complete', 67.98);

// Aplicar um desconto
product.discount = 10; // Aplica um desconto de R$10

// Agora exibe o nome e o preço atualizado
console.log(`${product.name} ${product.price}`);


