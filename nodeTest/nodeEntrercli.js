const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Quel est ton nom ? `, name => {
    console.log(`Salut ${name} , ça roule!`)
    readline.close()
})
