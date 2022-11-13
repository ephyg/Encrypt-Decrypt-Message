var number = document.querySelector(".input-number")
var plaintext = document.querySelector(".plain-text")
var encrypted = document.querySelector(".encrypted")

var inputtext=document.querySelector('.plain-text-msg')
var outputtext=document.querySelector('.plain-text-opt')

document.querySelector(".Encrypt").addEventListener('click', function () {
    var x = plaintext.value
    var length = x.length
    console.log(length)
    var EncryptedString = ""
    var EncryptNum = Number(number.value)
    console.log(EncryptNum)
    for (i = 0; i < length; i++) {
        var encrypt = x.charCodeAt(i) + EncryptNum
        var encryptChar = String.fromCharCode(encrypt)
        EncryptedString += encryptChar
    }
    console.log(EncryptedString)
    encrypted.value = EncryptedString
    inputtext.innerHTML="Plaintext"
    outputtext.innerHTML="Encrypted Text"

    inputtext.style.width="75px"
    outputtext.style.width="120px"

})


document.querySelector('.Decrypt').addEventListener('click', function () {
    console.log("hello")
    var x = plaintext.value
    var length = x.length
    var DecryptNum = Number(number.value)
    var DecryptedString = ""
    for (i = 0; i < length; i++) {
        var decrypt = x.charCodeAt(i) - DecryptNum
        var DecryptChar = String.fromCharCode(decrypt)
        DecryptedString += DecryptChar
    }
    console.log(DecryptedString)
    encrypted.value = DecryptedString
    inputtext.innerHTML= "Encrypted Text"
    outputtext.innerHTML="Plaintext"
    
    inputtext.style.width="120px"
    outputtext.style.width="75px"

})



document.querySelector(".encrypted").addEventListener('click',function(){
    encrypted.select()
    navigator.clipboard.writeText(encrypted.value)
})