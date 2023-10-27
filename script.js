function pedir() {
    var opcao = prompt("Escolha uma opção de 1 a 4")

    switch(Number(opcao)){
        case 1: 
            alert("Você pediu um bolo")
            break;

        case 2:
            alert("Você pediu um brigadeiro")
            break;
            
        case 3: 
            alert("Você pediu um chocolate quente")
            break;

        case 4: 
            alert("Você pediu um sorvete")
            break;

    }
}