/*
 CONSEGNA:
    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
    Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    # MILESTONE 0:
    Creare l’array di oggetti con le informazioni fornite.
    # MILESTONE 1:
    Stampare su console le informazioni di nome, ruolo e la stringa della foto
    # MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
    # BONUS 1:
    Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
    # BONUS 2:
    Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato.
 ESECUZIONE: 
    1- creo un array.
    2- inserisco nomi, ruoli e foto e le stampo su console.
    3- porto in DOM 
    4- stile
*/

// creo array
const teamMembers= 
[
{
    name: 'Wayne Barnett',
    position: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
},
{
    name: 'Angela Caroll',
    position: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
},
{
    name: 'Walter Gordon',
    position: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
},
{
    name: 'Angela Lopez',
    position: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
},
{
    name: 'Scott Estrada',
    position: 'Developer',
    photo: 'scott-estrada-developer.jpg'
},
{
    name: 'Barbara Ramos',
    position: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
}
]

// stampo in console
for ( i = 0 ; i < teamMembers.length; i++) {
    // stampo in DOM
    // prendo elementi dal DOM
    const container = document.getElementById('container');
    // creo stringa
    let team = `
    <div class="card">
        <img src="img/${teamMembers[i]['photo']}" alt="member${[i]}">
        <div class="names"> ${teamMembers[i]['name']} 
            <span class="position"> ${teamMembers[i]['position']}</span> 
        </div>
    </div>`;
    container.innerHTML += team;
    //stampo in console
    console.log('__________________________________________________')
    console.log(teamMembers[i]['name'])
    console.log(teamMembers[i]['position'])
    console.log(teamMembers[i]['photo'])
   
}


