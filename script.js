const character  = {
    about : { charName : '',
            class : '',
            lvl : '',
            history : '',
            personName : '',
            race : '',
            nature : '',
            exp : ''            }
    
    
}


const input = document.getElementById('name')
    input.addEventListener("input",updateValue)

const select = document.getElementById('class')
    select.addEventListener("change",updateValue)

const personName = document.getElementById('personName')
    personName.addEventListener("input",updateValue)

const lvl = document.getElementById('lvl')
    lvl.addEventListener("input",updateValue)

const history = document.getElementById('history')
    history.addEventListener("input",updateValue)

 function updateValue(e,name) {
    name = e.target.name
    character.about[name] = e.target.value
    console.log(character.about)
    
}















