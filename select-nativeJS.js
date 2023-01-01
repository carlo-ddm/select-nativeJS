const data = [
    { name: 'carlo', lastname: 'del monte', interests: ['musica', 'informatica', 'calcio', 'boxe', 'running','cinema', 'filosofia'] },
    { name: 'alessandro', lastname: 'd\'amato', interests: ['calcio', 'boxe'] },
    { name: 'danilo', lastname: 'vachez', interests: ['cucina', 'boxe', 'snowboard'] },
    { name: 'alessandro', lastname: 'costa', interests: ['architettura', 'kick-boxing', 'crossfit'] },
    { name: 'gabriele', lastname: 'merlonghi', interests: ['crescita personale', 'cinema', 'musica'] },
    { name: 'alessandra', lastname: 'paesani', interests: ['informatica', 'moda'] },
    { name: 'nicole', lastname: 'casavola', interests: ['enogastronima', 'moda'] },
    { name: 'fabio massimo', lastname: 'comini', interests: ['calcio', 'boxe'] },
];


const interestsList = [
    'Stampa 3D',
    'Recitazione',
    'Radioamatore',
    'Twirling',
    'Giochi da tavolo',
    'Restauro di libri',
    'Cabaret',
    'Calligrafia',
    'Fabbricazione di candele',
    'Tostare il caffè',
    'Libri da colorare',
    'Programmazione al computer',
    'Cucina',
    'Cosplay',
    'Raccolta di buoni d\'acquisto',
    'Scrittura creativa',
    'Uncinetto',
    'Punto croce',
    'Parole crociate',
    'Crittografia',
    'Danza',
    'Arte digitali',
    'Dramma',
    'Disegno',
    'Elettronica',
    'Ricamo',
    'Fantasy sport',
    'Moda',
    'Acquariofilia',
    'Flowerdesigning',
    'Apprendimento delle lingue straniere',
    'Gioco (giochi da tavolo e giochi di ruolo)',
    'Genealogia',
    'Vetro soffiato',
    'Birra fatta in casa',
    'Pattinaggio sul ghiaccio',
    'Creazione di gioielli',
    'Puzzle',
    'Giocoleria',
    'Scheggiatura',
    'Fabbricazione di coltelli',
    'Maglieria',
    'Merletto',
    'Lapidario',
    'Lavorazione del cuoio',
    'Lego',
    'Ascoltare musica',
    'Lavorazione a macchina',
    'Macramé',
    'Lavorazione dei metalli',
    'Modellismo',
    'Origami',
    'Pittura',
    'Animali domestici',
    'Filatelia',
    'Fotografia',
    'Suonare strumenti musicali',
    'Ceramica',
    'Puzzle',
    'Quilling',
    'Quilting',
    'Lettura',
    'Scrapbooking',
    'Scultura',
    'Cucito',
    'Canto',
    'Stand-up comedy',
    'Ping-pong',
    'Videogiochi',
    'Guardare dei film',
    'Navigare sul web',
    'Intaglio del legno',
    'Lavorazione del legno',
    'Scrittura',
    'Yo-yo',
    'Yoga'
]
   

// Logiche relative alla gestione del tag select
const interests = getInterests();
setSelect(interests);
let newUserInt = [];
getBadge(interestsList);

function getInterests(){

    let allIntersts = [];

    data.map((obj) => { return obj.interests.forEach((i) => { !allIntersts.includes(i) ? allIntersts.push(i) : '' }) })
    return allIntersts;
}


function setSelect(interests){

    const select = document.getElementById('select');

    interests.sort().forEach(int => {
        const option = new Option(int.charAt(0).toUpperCase() + int.slice(1), int);
        select.append(option);
    })
}


function getNameAndRemoveIt(value){

    const div = document.getElementById('container');

    let arrayRemover = Array.from(document.getElementsByClassName('result'));

    arrayRemover.forEach(p => {
        p.remove();
    });

    let filteredData = data.filter((person) => { return person ? person.interests.includes(value) : '' });
    let result = filteredData.map((person) => { return twoWords(person.name) + ' ' + twoWords(person.lastname) });

    result.sort().forEach(n => {

        const p = document.createElement('p');
        p.classList.add('result');
        p.innerHTML = n;
        div.append(p);

    });
}


function twoWords(word){

    const splitSpace = word.split(' ');
    const splitApostrophe = word.split('\'');

    for (let i = 0; i <= word.length; i++) {

        if (word.includes(' ')) {

            return splitSpace[0].charAt(0).toUpperCase() + splitSpace[0].slice(1) + ' ' + splitSpace[1].charAt(0).toUpperCase() + splitSpace[1].slice(1);

        } else if (word.includes('\'')) {

            return splitApostrophe[0].charAt(0).toUpperCase() + splitApostrophe[0].slice(1) + '\'' + splitApostrophe[1].charAt(0).toUpperCase() + splitApostrophe[1].slice(1);

        } else {

            return word.charAt(0).toUpperCase() + word.slice(1);

        }
    }
}


// Badges
function getBadge(intsList) {
    
    const div =  document.getElementById('badges');

    for (let i = 0; i < intsList.length; i++) {
        const span = document.createElement('span');
        span.className = 'badge badge-pill';
        span.value = intsList[i];
        span.innerHTML = intsList[i];

        // Event
        span.addEventListener('click', () => {
            span.style.display = 'none';
            newUserInt.push(span.value);
        })

        div.append(span);
    }
}


// New User
function add() {

    let user = {
        name: document.getElementById('inputName').value,
        lastName: document.getElementById('inputLastname').value,
        interests: newUserInt
    }

    data.push(user);

    // Reset
    newUserInt = []
}