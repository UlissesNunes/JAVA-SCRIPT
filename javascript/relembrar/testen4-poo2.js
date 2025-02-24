
/* F I N A N C E I R O   C O N T A    B A N C A R I A */


class ContaBancaria {
    constructor(titular, saldoAtual) {
        this._titular = titular
        this._saldoAtual = saldoAtual >= 0 ? saldoAtual : 0
    }

    get titular() {
        return 'Olá '+ this._titular + '! seja bem vindo ao seu aplicativo financeiro. Aqui você é o PROTAGONISTA'
    }

    get saldoAtual() {
        return this._saldoAtual
    }

    set saldoAtual(saldo) {
        if(saldo >= 0) {
         this._saldoAtual = saldo

        }
    }

    deposito(saldo) {
        if (saldo === undefined || saldo <= 0) {
            console.log(`Você não forneceu um valor válido para o depósito. Seu saldo total é R$${this.saldoAtual}.`)
        } else {
            this._saldoAtual += saldo;
            console.log(`Você depositou R$${saldo}. Seu saldo total agora é R$${this.saldoAtual}.`)
        }
    }


    saque(saldo) {
        if (saldo === undefined || saldo <= 0) {
            console.log(`Você não forneceu um valor válido para o saque. Seu saldo total é R$${this.saldoAtual}.`);
        } else if (saldo > this.saldoAtual) {
            console.log(`Saldo insuficiente para saque. Seu saldo total é : R$${this.saldoAtual}.`);
        } else {
            this._saldoAtual -= saldo;
            console.log(`Você sacou R$${saldo}. Agora você possui : R$${this.saldoAtual}.`)
        }
    }

}

 const conta = new ContaBancaria ( "jonan" , 10000)

console.log(conta.titular)
console.log('Atualmente você tem R$' + conta.saldoAtual )

conta.saque(1)

conta.deposito(1)