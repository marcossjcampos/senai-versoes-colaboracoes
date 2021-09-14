const nota = 5.0
const faltas = 0
if ((nota > 7) && (faltas < 5)){
    console.log('Aprovado');
    return;
    } 
if ((nota >= 5) && (faltas < 5)){
    console.log('Recuperação')
}
    else {
    console.log('Reprovado')
}