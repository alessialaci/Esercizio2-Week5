function scrivi() {
    let budget = document.getElementById('budget').value;
    let limite = document.getElementById('limite').value;
    let spese = 0;

    while(budget > 0) {
        let numeroRandom = Math.floor(Math.random() * 100);
        
        if (numeroRandom <= budget) {
            spese += 1;
            budget -= numeroRandom;

            document.getElementById('mioBudget').innerHTML += `<li>Ammontare della spesa: €${numeroRandom}</li>`;
            document.getElementById('mioBudget').innerHTML += `<li>Nuovo budget aggiornato: €${budget}</li>`;
        }
        if (budget < limite) {
            break;
        }
    }

    document.getElementById('oggetti').innerHTML = `Hai acquistato: ${spese} oggetti`;
    document.getElementById('frase').innerHTML = `Hai meno di €${limite}. Ora basta, stai spendendo troppo!`
}