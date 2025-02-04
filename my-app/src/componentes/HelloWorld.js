const HelloWorld = (a,b) => {

    
    let Person = {
        nome: 'Ulisses',
        idade: 18 ,
        maiorDeIdade : true ,
    }

   
     return {Person} 
    
}

const Result = HelloWorld(4,2)


console.log(Result.Person.name)


export default HelloWorld
