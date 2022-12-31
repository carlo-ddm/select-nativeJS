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

const interests = getInterests();
setSelect(interests);

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


