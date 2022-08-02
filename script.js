const character = {
    about: {
        charName: '',
        class: '',
        lvl: 0,
        history: '',
        personName: '',
        race: '',
        nature: '',
        exp: ''
    },
    abilities: {
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
    },
    modifiers: {
        strengthMod: '',
        dexterityMod: '',
        constitutionMod: '',
        intelligenceMod: '',
        wisdomMod: '',
        charismaMod: '',
    }



}
// maxlengtn for input type number
function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
} 

const input = document.getElementById('name')
input.addEventListener("input", updateValue)

const select = document.getElementById('class')
select.addEventListener("change", updateValue)

const personName = document.getElementById('personName')
personName.addEventListener("input", updateValue)

const lvl = document.getElementById('lvl')
lvl.addEventListener("input", updateValue,calcProficiencyBonus)
lvl.addEventListener("input",calcProficiencyBonus)

const history = document.getElementById('history')
history.addEventListener("input", updateValue)

const race = document.getElementById('race')
race.addEventListener("input", updateValue)

const nature = document.getElementById('nature')
nature.addEventListener("input", updateValue)

const exp = document.getElementById('exp')
exp.addEventListener("input", updateValue)

// update information in about section
function updateValue(e, name) {
    name = e.target.name
    character.about[name] = e.target.value
    console.log(character.about)

}

const strength = document.getElementById('strength')
strength.addEventListener("input", updateStats)

const dexterity = document.getElementById('dexterity')
dexterity.addEventListener("input", updateStats)

const constitution = document.getElementById('constitution')
constitution.addEventListener("input", updateStats)

const intelligence = document.getElementById('intelligence')
intelligence.addEventListener("input", updateStats)

const wisdom = document.getElementById('wisdom')
wisdom.addEventListener("input", updateStats)

const charisma = document.getElementById('charisma')
charisma.addEventListener("input", updateStats)

//update stats in abilities section
function updateStats(e) {
    const name = e.target.name
    character.abilities[name] = e.target.value
    character.modifiers[name + 'Mod'] = calcAbilityModifier(character.abilities[name])
    if (character.abilities[name] === '') {
        character.modifiers[name + 'Mod'] = ''
    }
    writeModifiers()
    console.log(character)
}
//calculate ability modifier
function calcAbilityModifier(num) {
    return Math.floor((num - 10) / 2)
}

//update stats in modifiers section
function writeModifiers() {
    const strengthMod = document.getElementById('strengthMod')
    strengthMod.innerHTML = character.modifiers.strengthMod
    const dexterityMod = document.getElementById('dexterityMod')
    dexterityMod.innerHTML = character.modifiers.dexterityMod
    const constitutionMod = document.getElementById('constitutionMod')
    constitutionMod.innerHTML = character.modifiers.constitutionMod
    const intelligenceMod = document.getElementById('intelligenceMod')
    intelligenceMod.innerHTML = character.modifiers.intelligenceMod
    const wisdomMod = document.getElementById('wisdomMod')
    wisdomMod.innerHTML = character.modifiers.wisdomMod
    const charismaMod = document.getElementById('charismaMod')
    charismaMod.innerHTML = character.modifiers.charismaMod

}

/*calculate proficiency bonus if lvl 1-4 -> 2
5-8 -> 3
9-12 -> 4
13-16 -> 5
17-20 -> 6 and write to page*/ 

function calcProficiencyBonus() {
    const proficiencyBonus = document.getElementById('proficiencyBonus')
    if (character.about.lvl < 5) {
        proficiencyBonus.innerHTML = 2
    } else if (character.about.lvl < 9) {
        proficiencyBonus.innerHTML = 3
    } else if (character.about.lvl < 13) {
        proficiencyBonus.innerHTML = 4
    } else if (character.about.lvl < 17) {
        proficiencyBonus.innerHTML = 5
    } else {
        proficiencyBonus.innerHTML = 6
    }
}

























