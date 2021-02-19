const maleAkanNames = [
    "Kwasi",
    "kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
];
const femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua"
    "Ama",
];

let output = document.getElementById('output')

function getName(event){
    event.preventDefault()
    let date = document.getElementById('date').value

    let dateOfBirth = new Date(date)
    let message = `${dateOfBirth}`
    output.innerHTML = message
    
}

