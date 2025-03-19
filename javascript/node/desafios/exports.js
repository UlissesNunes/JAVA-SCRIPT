module.exports.getFlag = string => { 
    const index = process.argv.indexOf(string)
    if (index === -1 || index + 1 >= process.argv.length) {
        return null;
    }
    return process.argv[index + 1] 
    
}
console.log(process.argv)