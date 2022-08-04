const character = {
    about: {
        charName: '',
        class: '',
        lvl: 0,
        history: '',
        personName: '',
        race: '',
        nature: '',
        exp: '',
        proficiencyBonus: 2,
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
    },
    savingThrows: {  
        strengthThrow: '',
        dexterityThrow: '',
        constitutionThrow: '',
        intelligenceThrow: '',
        wisdomThrow: '',
        charismaThrow: '',
    }



}
// maxlengtn for input type number
function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
} 

const heroName = document.getElementById('name')
heroName.addEventListener("input", updateValue)

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
strength.addEventListener("input", updateSavingThrows)

const dexterity = document.getElementById('dexterity')
dexterity.addEventListener("input", updateStats)
dexterity.addEventListener("input", updateSavingThrows)

const constitution = document.getElementById('constitution')
constitution.addEventListener("input", updateStats)
constitution.addEventListener("input", updateSavingThrows)

const intelligence = document.getElementById('intelligence')
intelligence.addEventListener("input", updateStats)
intelligence.addEventListener("input", updateSavingThrows)

const wisdom = document.getElementById('wisdom')
wisdom.addEventListener("input", updateStats)
wisdom.addEventListener("input", updateSavingThrows)

const charisma = document.getElementById('charisma')
charisma.addEventListener("input", updateStats)
charisma.addEventListener("input", updateSavingThrows)

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

//calculate proficiency bonus
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
    character.about.proficiencyBonus = proficiencyBonus.innerHTML
    console.log(character.about.proficiencyBonus)
}

//saving throws = modifier 
function updateSavingThrows(e) {
    const name = e.target.name
    character.savingThrows[name + "Throw"] = character.modifiers[name + 'Mod']
    console.log(character.savingThrows)
    writeSavingThrows()   
   
}


//addEventListener to checkbox  
const strengthCheck = document.getElementById('strengthCheck')
strengthCheck.addEventListener("change", addProficiencyBonus)
const dexterityCheck = document.getElementById('dexterityCheck')
dexterityCheck.addEventListener("change", addProficiencyBonus)
const constitutionCheck = document.getElementById('constitutionCheck')
constitutionCheck.addEventListener("change", addProficiencyBonus)
const intelligenceCheck = document.getElementById('intelligenceCheck')
intelligenceCheck.addEventListener("change", addProficiencyBonus)
const wisdomCheck = document.getElementById('wisdomCheck')
wisdomCheck.addEventListener("change", addProficiencyBonus)
const charismaCheck = document.getElementById('charismaCheck')
charismaCheck.addEventListener("change", addProficiencyBonus)


//if savingCheck is checked add proficiency bonus to  saving throw
function addProficiencyBonus(e) {
   const name = e.target.name
    if (e.target.checked) {
        //transform savingThrow to number
        character.savingThrows[name] = parseInt(character.savingThrows[name]) + parseInt(character.about.proficiencyBonus)

    } else {
        character.savingThrows[name] -= character.about.proficiencyBonus
    }
    console.log(character.savingThrows)
    writeSavingThrows()
    
}
 //write saving throws to html
function writeSavingThrows() {
    const strengthThrow = document.getElementById('strengthSave')
    strengthThrow.innerHTML = character.savingThrows.strengthThrow
    const dexterityThrow = document.getElementById('dexteritySave')
    dexterityThrow.innerHTML = character.savingThrows.dexterityThrow
    const constitutionThrow = document.getElementById('constitutionSave')
    constitutionThrow.innerHTML = character.savingThrows.constitutionThrow
    const intelligenceThrow = document.getElementById('intelligenceSave')
    intelligenceThrow.innerHTML = character.savingThrows.intelligenceThrow
    const wisdomThrow = document.getElementById('wisdomSave')
    wisdomThrow.innerHTML = character.savingThrows.wisdomThrow
    const charismaThrow = document.getElementById('charismaSave')
    charismaThrow.innerHTML = character.savingThrows.charismaThrow
} 
























