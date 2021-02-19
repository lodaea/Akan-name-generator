let outputTag = document.getElementById('output')

function getName(event){
    event.preventDefault()
    let date = document.getElementById('date').value
    let dateOfBirth = new Date(date).toDateString()
    let message = `${dateOfBirth}`
    outputTag.innerHTML = message
}

