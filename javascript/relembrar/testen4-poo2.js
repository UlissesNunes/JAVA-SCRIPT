
/* F I N A N C E I R O   C O N T A    B A N C A R I A */


class ContaBancaria {
    constructor(titular, dinheiroD) {
        this._titular = titular
        this._dinheiroD = dinheiroD
    }

    get titular() {
        return 'Olá '+ this._titular + '! seja bem vindo ao seu aplicativo financeiro. Aqui você é o PROTAGONISTA'
    }

    get dinheiroD() {
        return this._dinheiroD
    }

    set dinheiroD(saldo) {
        if(saldo >= 1) {
         this._dinheiroD = saldo

        }
    }

    deposito(saldo) {
        if (saldo === undefined || saldo <= 0) {
            console.log(`Você não forneceu um valor válido para o depósito. Seu saldo total é R$${this.dinheiroD}.`)
        } else {
            this._dinheiroD += saldo;
            console.log(`Você depositou R$${saldo}. Seu saldo total agora é R$${this.dinheiroD}.`)
        }
    }


    saque(saldo) {
        if (saldo === undefined || saldo <= 0) {
            console.log(`Você não forneceu um valor válido para o saque. Seu saldo total é R$${this.dinheiroD}.`);
        } else if (saldo > this._dinheiroD) {
            console.log(`Saldo insuficiente para saque. Seu saldo total é : R$${this.dinheiroD}.`);
        } else {
            this._dinheiroD -= saldo;
            console.log(`Você sacou R$${saldo}. Agora você possui : R$${this.dinheiroD}.`)
        }
    }

}

 const conta = new ContaBancaria ( "jonan" , 10000)

console.log(conta.titular)
console.log('Atualmente você tem R$' + conta.dinheiroD )

conta.saque(1)

conta.deposito(1)