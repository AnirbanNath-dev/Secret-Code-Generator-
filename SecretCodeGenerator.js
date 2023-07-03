let text = 'This is a sample text' // write the text which u want to code

// Function to code the word

const code = (message)=>{
    if(message.length <4){
        return message.split('').reverse().join('')
    }
    else{
        let arr = message.split('')
        let shiftedWord = arr.shift()
        arr.push(shiftedWord);
        alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
        for(let i=0; i<6 ; i++){
            let randomWords = Math.floor(Math.random()*(alphabet.length))
            if(i<3){
                arr.push(alphabet[randomWords])
                randomWords = ''
            }
            
            else{
                arr.unshift(alphabet[randomWords])
                randomWords = ''
            }
            
        }
        return arr.join('')
    }
}

// Function to decode the word

const decode = (text) =>{
    if(text.length <4){
        return text.split('').reverse().join('')
    }
    else{
        let arr = text.split('')
        for(let i = 0 ; i<6 ; i++){
            
            if(i<3){
                arr.shift();
            }
            else{
                arr.pop()
            }
        }
        let popedWord  = arr.pop();
        arr.unshift(popedWord)
        return arr.join('')
    }

}





let array1 = [];
let codedWord
let decodedWord
let array2 = []



const codedarray = text.trim().replace(/\s+/g, ' ').split(' ').map((value)=>{
    return array1.concat(code(value))
})

codedWord = codedarray.join(' ')
const decodedarray = codedWord.trim().replace(/\s+/g, ' ').split(' ').map((value)=>{
    return array2.concat(decode(value))
})

decodedWord = decodedarray.join(' ')


console.log(`The coded word is "\x1b[1m${codedWord}\x1b[0m" and the decoded word is "\x1b[1m${decodedWord}\x1b[0m"`)






