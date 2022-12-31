const data = [
    { name: 'carlo', lastname: 'del monte', interests: ['musica', 'informatica', 'calcio', 'boxe', 'running','cinema', 'filosofia'] },
    { name: 'alessandro', lastname: 'd\'amato', interests: ['calcio', 'boxe'] },
    { name: 'danilo', lastname: 'vachez', interests: ['cucina', 'boxe', 'snowboard'] },
    { name: 'alessandro', lastname: 'costa', interests: ['architettura', 'kick-boxing', 'crossfit'] },
    { name: 'gabriele', lastname: 'merlonghi', interests: ['crescita personale', 'cinema', 'musica'] },
    { name: 'alessandra', lastname: 'paesani', interests: ['informatica', 'moda'] },
    { name: 'nicole', lastname: 'casavola', interests: ['enogastronima', 'moda'] },
];

const interests = getInterests();
setSelect(interests)

function getInterests(){
    let allIntersts = [];
    data.map((obj) => { return obj.interests.forEach((i) => { !allIntersts.includes(i) ? allIntersts.push(i) : '' }) })
    return allIntersts
}

function setSelect(interests){
    const select = document.getElementById('select');
    interests.sort().forEach(int => {
        const option = new Option(int,int)
        select.append(option)
    })
}

function getNameAndRemoveIt(value){

    const div = document.getElementById('container')

    // Metodo per trasformare una collection in un array
    let arrayRemover = Array.from(document.getElementsByClassName('result'))

    arrayRemover.forEach(p => {
        p.remove()
    });

    let filteredData = data.filter((person) => { return person ? person.interests.includes(value) : '' });
    let result = filteredData.map((person) => {return person.name.charAt(0).toUpperCase() + person.name.slice(1) + ' ' + twoWordsLastName(person.lastname)});

    result.sort().forEach(n => {
        const p = document.createElement('p');
        p.classList.add('result')
        p.innerHTML = n
        div.append(p)
    });
}

function twoWordsLastName(lastname){
    const splitted = lastname.split(' ');

    for (let i = 0; i <= lastname.length; i++) {
        if (lastname.includes(' ')) {
            return splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1) + ' ' + splitted[1].charAt(0).toUpperCase() + splitted[1].slice(1)
        } else {
            return lastname.charAt(0).toUpperCase() + lastname.slice(1)
        }
    }
}


