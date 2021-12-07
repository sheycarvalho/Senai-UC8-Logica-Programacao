//data do evento não pode ser anterior a data atual
//participante precisa ser maior de 18 anos
//listar participantes e palestrantes do evento
//quantidade máxima de particpantes até 100 pessoas 

// Cadastro da data do evento
let dataAtual = new Date (2021,05,12)
let dataEvento = new Date (2021,10,12)

if (dataEvento > dataAtual){
    console.log ( "É possível cadastrar evento, data permitida!" )
    //evento cadastrado

} else {
    console.log ( "Não é possível cadastrar o evento") 
    //data inválida, cadastro não permitido
}

//Verificando a idade do participante
let idade = 18

if (idade >= 18){
    console.log ( "Idade Permitida, Cadastro realizado!" )

} else {
    console.log ( "Idade mínima não permitida, Cadastro não realizado" )

}

//Verificando a quantidade de participantes
let ListaParticipantes = 85
if ( ListaParticipantes < 100) {
    console.log ( "Cadastro do Participante Permitido!")

} else {
    console.log ( "Cadastro não será permitido por ter excedido limite de participantes")
}

let palestrantes = [ "Rosana", "Mário", "Camila" ];
    console.log ( " Palestrantes do evento: "+palestrantes )
