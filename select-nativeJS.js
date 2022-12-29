const data = [
    { name: 'Carlo', lastname: 'Del Monte', interests: ['musica', 'informatica', 'calcio', 'boxe', 'running','cinema', 'filosofia'] },
    { name: 'Alessandro', lastname: 'D\'Amato', interests: ['calcio', 'boxe'] },
    { name: 'Danilo', lastname: 'Vachezez', interests: ['cucina', 'boxe', 'snowboard'] },
    { name: 'Alessandro', lastname: 'Costa', interests: ['architettura', 'kick-boxing', 'crossfit'] },
    { name: 'Gabriele', lastname: 'Merlonghi', interests: ['crescita personale', 'cinema', 'musica'] },
    { name: 'Alessandra', lastname: 'Paesani', interests: ['coding', 'moda'] },
    { name: 'Nicole', lastname: 'Casavola', interests: ['enogastronima', 'moda'] },
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
    let result = filteredData.map((person) => {return person.name + ' ' + person.lastname});

    result.sort().forEach(n => {
        const p = document.createElement('p');
        p.classList.add('result')
        p.innerHTML = n
        div.append(p)
    });
}