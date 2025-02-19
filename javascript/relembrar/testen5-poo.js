class Developer {
    constructor(language ,name ,years , nascimento , yearsOfStudy) {
        this._language = language
        this._yearsOfStudy = yearsOfStudy
        this._name = name
        this._years = years
        this._nascimento = nascimento
    }
    nascimento() {
        this._nascimento 
    }
    get language() {
        return `a SUA linguagem favorita é ${this._language} e de fato é exelente pela sua portibilidade e flexibilidade`
    } 
    get name() {
        return `Bem vindo ${this._name} ao seu site de codar!`
    }
    get years() {
        return `Você nasceu em ${this._nascimento} portanto , possui ${this._years} anos`
    }
    get yearsOfStudy() {
        return `Você tem ${this._yearsOfStudy} anos estudando essa linguagem, parabéns! isso só mostra o quão dedicado você é!`
    }
}
const joão = new Developer('javascript' ,'João' , 19 , 2005 , 2)

console.log (joão.language)
console.log(joão.name)
console.log(joão.years)
console.log(joão.yearsOfStudy)

const gilmar = new Developer('java' ,'Gilmar' , 29 , 1995 , 10)

console.log (gilmar.language)
console.log(gilmar.name)
console.log(gilmar.years)
console.log(gilmar.yearsOfStudy)

class Marcos extends Developer {
    constructor( name , language, moradia) {
        super(language)
       this._moradia = moradia
       this._nick = name
    
    }

    code() {
        return `O ${this._nick} está codando em ${this._language} e trabalha no grande centro de ${this._moradia}!`
    }
}


const marcos = new Marcos( 'Marcos' ,'c#' , 'Salvador')
console.log(marcos.code())