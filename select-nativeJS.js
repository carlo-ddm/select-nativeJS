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
    let result = filteredData.map((person) => {return person.name.charAt(0).toUpperCase() + person.name.slice(1) + ' ' + person.lastname.charAt(0).toUpperCase() + person.lastname.slice(1)});
    

    result.sort().forEach(n => {
        const p = document.createElement('p');
        p.classList.add('result')
        p.innerHTML = n
        div.append(p)
    });
}