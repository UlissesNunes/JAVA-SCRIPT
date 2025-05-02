class Media {
    constructor(sem1 , sem2) {
        this.sem1 = sem1
        this.sem2 = sem2
    }

    get notaM() {
        return this.#calcularM()
    }
    #calcularM() {
        return (this.sem1 + this.sem2) / 2
    }
}


let media = new Media(7,5)
//console.log(media.notaM)






class Ti {
    constructor(area, salario, curso) {
        this.area = area; 
        this.salario = salario;
        this.curso = curso;
    }

    get detalhes() {
        return `Área: ${this.area}, Salário: R$${this.salario}, Curso: ${this.curso}`;
    }
}

let dev = new Ti("dev front-end", 6000, "Análise e Desenvolvimento de Sistemas");

//console.log(dev.detalhes);






class Produto {
    constructor(nome , preco) {
        this.nome = nome
        this.preco = preco
       
    }

     Desconto() {
        return (this.preco * 0.77) //33% de desconto
    }

    get operacao() {
        return ` ${this.nome} , com preço de R$ ${this.preco.toFixed(2)} teve 20% de desconto e ficou pelo valor de ${this.Desconto().toFixed(2)}`
    }
}


let mercado = new Produto ("chuteira" , 599)
/* console.log(mercado.operacao) */









class Urna {
    constructor(nome, idade) {
        this._nome = nome
        this._idade = idade
    }

    get nome() {
        return 'Seu nome é ' + this._nome
    }

    get idade() {
        if (this._idade < 16) {
            return 'Você não vota ainda';
        } else {
            return `Você tem ${this._idade} anos, pode votar`;
        }
    }

    set idade(Votaidade) {
        if (Votaidade >= 16) {
            this._idade = Votaidade;
        } else {
            console.log('Você não pode votar ainda.');
        }
    }
     
}

        const urna = new Urna("Michele" , 15)
        console.log(urna.nome)
        console.log(urna.idade)

        