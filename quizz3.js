const form = document.querySelector('form');
let question = document.querySelectorAll('#question');
let title = document.querySelector('.result h3');
let aide = document.querySelector('.aide');
let note = document.querySelector('.note');
let tab = [];
let tabVerif = [];
let answers = ['c', 'b', 'c', 'a', 'c','a', 'b', 'b', 'c', 'a','c', 'b', 'c', 'a', 'a'];
let emojis = ['✅️', '💯️', '😥️', '😱️', '✨','👀','😭','👎🏾','👍🏽', '👏️', '😀️', '😇️']
// let message = prompt("Veilez entrez votre prenom");

form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    
    for(let i = 1; i < 16; i++){
        tab.push(document.querySelector(`input[name = "q${i}"]:checked`).value);
    }
    VerifQuizz(tab);
    tab = [];
})

function VerifQuizz(tab){
    for(let a = 0; a < 15; a++){
        if(tab[a] === answers[a]){
            tabVerif.push(true);
        }
        else{
            tabVerif.push(false);
        }
    }
    AffficheResult(tabVerif);
    Colors(tabVerif);
    tabVerif = [];
}

function AffficheResult(tabVerif){
    const ReponseVraie = tabVerif.filter(el => el === true).length;
    switch(ReponseVraie){
        case 0 :
                note.innerHTML = `0/15 ${emojis[6]}`;
                title.innerHTML = `${emojis[3]} Désolé vous ne connaissez rien sur le Togo ${emojis[3]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
        case 1 :
                note.innerHTML = `1/15 ${emojis[7]}`;
                title.innerHTML = `${emojis[2]} Vous pouvez mieux faire ${emojis[2]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge"; 
        break;
        case 2 :
                note.innerHTML = `2/15 ${emojis[7]}`;
                title.innerHTML = `${emojis[5]} Il reste encore des erreurs à éviter ${emojis[5]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
        case 3 : 
                note.innerHTML = `3/15 ${emojis[7]}`;
                title.innerHTML = `${emojis[11]} Courage Il vous reste 12 reponses à trouver ${emojis[11]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
        case 4:
                note.innerHTML = `4/15 ${emojis[7]}`;
                title.innerHTML = `${emojis[11]} Courage Il vous reste 11 reponses à trouver ${emojis[10]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
        case 5:
                note.innerHTML = `5/15 ${emojis[7]}`;
                title.innerHTML = `${emojis[4]} Encore 10 reponses à trouver ${emojis[10]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
         case 6:
                note.innerHTML = `6/15 ${emojis[7]}`;
                title.innerHTML = `${emojis[11]} Il vous reste encore 9 reponses à trouver ${emojis[11]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
        case 7:
                note.innerHTML = `7/15 ${emojis[7]}`;
                title.innerHTML = `${emojis[11]} Il vous reste encore 8 reponses à trouver ${emojis[5]}`;
                aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
        case 8:
            note.innerHTML = `8/15 ${emojis[8]}`;
            title.innerHTML = `${emojis[10]} Pas mal, 7 reponses restantes ${emojis[10]}`;
            aide.innerHTML = "Retentez encore une fois en choisissant les cases en rouge";
        break;
        case 9:
            note.innerHTML = `9/15 ${emojis[8]}`;
            title.innerHTML = `${emojis[10] + emojis[4]} Encore 6 reponses restantes ${emojis[10] + emojis[4]}`;
            aide.innerHTML = "Retentez encore une fois en choisissant les case en rouge";
        break;
        case 10:
            note.innerHTML = `10/15 ${emojis[8]}`;
            title.innerHTML = `${emojis[4] + emojis[4]} Il vous reste 5 réponses à trouver ${emojis[10] + emojis[4]}`;
            aide.innerHTML = "Retentez encore une fois en choisissant les case en rouge";
        break;
        case 11:
            note.innerHTML = `11/15 ${emojis[8]}`;
            title.innerHTML = `${emojis[4] + emojis[4]} Il vous reste 4 réponses à trouver ${emojis[10] + emojis[10]}`;
            aide.innerHTML = "Retentez encore une fois en choisissant les case en rouge";
        break;
        case 12:
            note.innerHTML = `12/15 ${emojis[8]}`;
            title.innerHTML = `${emojis[10] + emojis[4]}  Rien que 3 réponses restantes ${emojis[4] + emojis[10]}`;
            aide.innerHTML = "Retentez encore une fois en choisissant les case en rouge";
        break;
        case 13:
            note.innerHTML = `13/15 ${emojis[8]}`;
            title.innerHTML = `${emojis[4] + emojis[4]} Juste 2 réponses à trouver ${emojis[4] + emojis[4]}`;
            aide.innerHTML = "Retentez encore une fois en choisissant les case en rouge";
        break;
        case 14:
            note.innerHTML = `14/15 ${emojis[8]}`;
            title.innerHTML = `${emojis[10] + emojis[4]}  Vous y êtes presque ${emojis[10] + emojis[4]}`;
            aide.innerHTML = "Retentez encore une fois en choisissant la case en rouge";
        break;
        case 15:
                note.innerHTML = `15/15 ${emojis[0]}`;
                title.innerHTML = `${emojis[9] + emojis[1]} Félicitaiton vous avez tout trouvé ${emojis[1] + emojis[9]}`;
                 aide.innerHTML = "🥳 Bravo! Vous êtes 👍🏽 🥰";
        break;
        
    }
}

function Colors(tabVerif){
    for(let x = 0; x < tabVerif.length; x++){
        if(tabVerif[x] === true){
            question[x].style.background = '#4efa7b';
        }
        else{
            question[x].style.backgroundColor = '#f15b5e';
            question[x].classList.add('echec');
        }
        setTimeout(() => {
            question[x].classList.remove('echec');
            
        }, 500);
    }
}

    question.forEach(el => {
        el.addEventListener('click', ()=>{
            el.style.backgroundColor = '#8E24B426';
        })
        
    });
