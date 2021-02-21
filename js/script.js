let outputTag = document.getElementById('output')
date.max = new Date().toISOString().split('T')[0];


function getName(event) {
    event.preventDefault()
    let date = document.getElementById('date').value
    let dateOfBirth = new Date(date).toDateString()
    let day = dateOfBirth.split(' ')[0]
    let gender = document.getElementById('gender').value
    
    let akanName;

    let maleAkanNames = [
        "Kwasi",
        "kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame"
    ];
    let femaleAkanNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama" 
    ];
    
    
    if ( day === "Sun" && gender === "female") {
        akanName = femaleAkanNames[0];
    } else if (day === "Sun" && gender === "male") {
        akanName = maleAkanNames[0];


    } else if (day ==="Mon" && gender === "female") {
        akanName = femaleAkanNames[1];
    } else if (day === "Mon" && gender === "male") {
        akanName = maleAkanNames[1];


    } else if (day === "Tue" && gender === "female") {
        akanName = femaleAkanNames[2];
    } else if (day === "Tue" && gender === "male") {
        akanName = maleAkanNames[2];


    } else if (day === "Wed" && gender === "female") {
        akanName = femaleAkanNames[3];
    } else if (day === "Wed" && gender === "male") {   
        akanName = maleAkanNames[3];


    } else if (day === "Thu" && gender === "female") {
        akanName = femaleAkanNames[4];
    } else if (day === "Thu" && gender === "male") {
        akanName = maleAkanNames[4];


    } else if (day === "Fri" && gender === "female") {
        akanName = femaleAkanNames[5];
    } else if (day === "Fri" && gender === "male") {  
        akanName = maleAkanNames[5];
   
   
    } else if (day === "Sat" && gender === "female") {
            akanName = femaleAkanNames[6];
    } else if (day === "Sat" && gender === "male") {
            akanName = maleAkanNames[6]
    }

    let message = `you were born on a ${day}; your name is ${akanName}`
    outputTag.innerHTML = message
    
}