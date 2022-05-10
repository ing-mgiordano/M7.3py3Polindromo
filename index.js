function checkPalindromo(){
    const stringUser = document.getElementById('palindromo-input').value
    let userPalindromo = ''
    userPalindromo = stringUser

    let lowerCasePalindromo = userPalindromo.toLowerCase()
    let palindromo = lowerCasePalindromo.replace(/[\W_]/g,'')
    let palindromoRevert = palindromo.split('').reverse().join('')
   
    console.log(`${userPalindromo} / ${palindromo} / ${palindromoRevert}`)

    const result = document.getElementById('result')
    const isPalindromo = palindromo == palindromoRevert
    
    isPalindromo ? 
    result.innerHTML = `${stringUser} [Es palindromo]` :
    result.innerHTML = `${stringUser} [No es palindromo]`
}
