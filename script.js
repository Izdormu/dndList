const character = {
    about: {
        charName: '',
        class: '',
        lvl: 0,
        charHistory: '',
        personName: '',
        race: '',
        charNature: '',
        exp: '',
        proficiencyBonus: 2,
        inspiration: ''
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
        strengthThrow: '0',
        dexterityThrow: '0',
        constitutionThrow: '0',
        intelligenceThrow: '0',
        wisdomThrow: '0',
        charismaThrow: '0',
    },
    skills: {
        acrobatics: { mod: '0', modifier: 'dexterityMod' },
        animalHandling: { mod: '0', modifier: 'wisdomMod' },
        arcana: { mod: '0', modifier: 'intelligenceMod' },
        athletics: { mod: '0', modifier: 'strengthMod' },
        deception: { mod: '0', modifier: 'charismaMod' },
        history: { mod: '0', modifier: 'intelligenceMod' },
        insight: { mod: '0', modifier: 'wisdomMod' },
        intimidation: { mod: '0', modifier: 'charismaMod' },
        investigation: { mod: '0', modifier: 'intelligenceMod' },
        medicine: { mod: '0', modifier: 'wisdomMod' },
        nature: { mod: '0', modifier: 'intelligenceMod' },
        perception: { mod: '0', modifier: 'wisdomMod' },
        performance: { mod: '0', modifier: 'charismaMod' },
        persuasion: { mod: '0', modifier: 'charismaMod' },
        religion: { mod: '0', modifier: 'intelligenceMod' },
        sleightOfHand: { mod: '0', modifier: 'dexterityMod' },
        stealth: { mod: '0', modifier: 'dexterityMod' },
        survival: { mod: '0', modifier: 'wisdomMod' }
    },
    points: {
        hp: '',
        maxHp: '',
        tempHp: '',
        init: '',
        speed: '',
        passivePerception: '',
        diceCount: '',
        diceSides: '',
        armorClass: '',
        deathSaves: {
            deathSaveSuccess: '',
            deathSaveFailure: '',
            deathSaveSuccess2: '',
            deathSaveFailure2: '',
            deathSaveSuccess3: '',
            deathSaveFailure3: '',
        },
        passiveWisdom: '',
        vision: '',
    }
}
//write values what we have in local storage to input values
function displayLocal() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => { 
        if (localStorage.getItem(input.name) != '') {
            input.value = localStorage.getItem(input.name)
        }
    })
    const textareas = document.querySelectorAll('textarea')
    textareas.forEach(textarea => {
        if (localStorage.getItem(textarea.name) != '') {
            textarea.value = localStorage.getItem(textarea.name)
        }
    })
    localStorage.getItem('class') != '' ? document.getElementById('class').value = localStorage.getItem('class') : ''

    //write modifiers
    const strengthMod = document.getElementById('strengthMod')
    const dexterityMod = document.getElementById('dexterityMod')
    const constitutionMod = document.getElementById('constitutionMod')
    const intelligenceMod = document.getElementById('intelligenceMod')
    const wisdomMod = document.getElementById('wisdomMod')
    const charismaMod = document.getElementById('charismaMod')
    strengthMod.textContent = localStorage.getItem('strengthMod')
    dexterityMod.textContent = localStorage.getItem('dexterityMod')
    constitutionMod.textContent = localStorage.getItem('constitutionMod')
    intelligenceMod.textContent = localStorage.getItem('intelligenceMod')
    wisdomMod.textContent = localStorage.getItem('wisdomMod')
    charismaMod.textContent = localStorage.getItem('charismaMod')
}



    displayLocal()

//if we have name in local === name in character object write it in character object


console.log(character)


// maxlengtn for input type number
function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

const heroName = document.getElementById('name')
heroName.addEventListener("blur", updateValue)
heroName.addEventListener("blur", saveLocal)

const select = document.getElementById('class')
select.addEventListener("blur", updateValue)
select.addEventListener("blur", saveLocal)

const personName = document.getElementById('personName')
personName.addEventListener("blur", updateValue)
personName.addEventListener("blur", saveLocal)

const lvl = document.getElementById('lvl')
lvl.addEventListener("blur", updateValue, calcProficiencyBonus)
lvl.addEventListener("blur", saveLocal)
lvl.addEventListener("input", calcProficiencyBonus)
lvl.addEventListener("change", calcProficiencyBonus)

const charHistory = document.getElementById('charHistory')
charHistory.addEventListener("blur", updateValue)
charHistory.addEventListener("blur", saveLocal)

const race = document.getElementById('race')
race.addEventListener("blur", updateValue)
race.addEventListener("blur", saveLocal)

const charNature = document.getElementById('charNature')
charNature.addEventListener("blur", updateValue)
charNature.addEventListener("blur", saveLocal)

const exp = document.getElementById('exp')
exp.addEventListener("blur", updateValue)
exp.addEventListener("blur", saveLocal)

// update information in about section
function updateValue(e, name) {
    name = e.target.name
    character.about[name] = e.target.value
    console.log(character.about)

}
//save value in local storage
function saveLocal(e,name) {
    name = e.target.name
    const value = e.target.value
    localStorage.setItem(name, value)
    console.log(localStorage)
    //save modidiers in local storage
    if (name == 'strength' || name == 'dexterity' || name == 'constitution' || name == 'intelligence' || name == 'wisdom' || name == 'charisma' && value != '') {
        const mod = document.getElementById(name + 'Mod')
        localStorage.setItem(name + 'Mod', mod.textContent)
    }
      
    
    
    
}

const inspiration = document.getElementById('inspiration')
inspiration.addEventListener("blur", updateValue)
inspiration.addEventListener("blur", saveLocal)

//update ability in abilities section
const strength = document.getElementById('strength')
strength.addEventListener("input", updateAbility)
strength.addEventListener("blur", saveLocal)
strength.addEventListener("input", updateSavingThrows)

const dexterity = document.getElementById('dexterity')
dexterity.addEventListener("input", updateAbility)
dexterity.addEventListener("blur", saveLocal)
dexterity.addEventListener("input", updateSavingThrows)
dexterity.addEventListener("input", calculateArmorClass)

const constitution = document.getElementById('constitution')
constitution.addEventListener("input", updateAbility)
constitution.addEventListener("blur", saveLocal)
constitution.addEventListener("input", updateSavingThrows)

const intelligence = document.getElementById('intelligence')
intelligence.addEventListener("input", updateAbility)
intelligence.addEventListener("blur", saveLocal)
intelligence.addEventListener("input", updateSavingThrows)

const wisdom = document.getElementById('wisdom')
wisdom.addEventListener("input", updateAbility)
wisdom.addEventListener("blur", saveLocal)
wisdom.addEventListener("input", updateSavingThrows)

const charisma = document.getElementById('charisma')
charisma.addEventListener("input", updateAbility)
charisma.addEventListener("blur", saveLocal)
charisma.addEventListener("input", updateSavingThrows)

//update stats in abilities section
function updateAbility(e) {
    const name = e.target.name
    character.abilities[name] = e.target.value
    character.modifiers[name + 'Mod'] = calcAbilityModifier(character.abilities[name])
    if (character.abilities[name] === '') {
        character.modifiers[name + 'Mod'] = ''
    }
    writeModifiers(name + 'Mod')
    updateSkills()






    console.log(character)
}
function calcAbilityModifier(num) {
//calculate ability modifier
    return Math.floor((+num - 10) / 2)
}
//update stats in modifiers section
function writeModifiers(name) {
    const mod = document.getElementById(name)
    mod.innerHTML = character.modifiers[name]
    
}
//save modifiers in local storage
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

    writeSavingThrows()


    console.log(character.savingThrows)


}


//addEventListener to checkbox in save throws section
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
//update saving throws to html
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


function updateSkills() {

    //if skill.acrobatics.modifier name = modifiers name => skill.acrobatics.mod = modifiers.name 
    for (let skill in character.skills) {
        for (let modifier in character.modifiers) {
            if (character.skills[skill].modifier === modifier) {
                character.skills[skill].mod = character.modifiers[modifier]
            }


        }
    }
    console.log(character.skills)
    writeSkills()

}




//write skills to hltm Mod
function writeSkills() {
    for (let skill in character.skills) {
        if (character.skills[skill].mod === '') {
            character.skills[skill].mod = '0'
        }
    }
    const athletics = document.getElementById('athleticsMod')
    athletics.innerHTML = character.skills.athletics.mod
    const stealth = document.getElementById('stealthMod')
    stealth.innerHTML = character.skills.stealth.mod
    const survival = document.getElementById('survivalMod')
    survival.innerHTML = character.skills.survival.mod
    const acrobatics = document.getElementById('acrobaticsMod')
    acrobatics.innerHTML = character.skills.acrobatics.mod
    const animalHandling = document.getElementById('animalHandlingMod')
    animalHandling.innerHTML = character.skills.animalHandling.mod
    const arcana = document.getElementById('arcanaMod')
    arcana.innerHTML = character.skills.arcana.mod
    const deception = document.getElementById('deceptionMod')
    deception.innerHTML = character.skills.deception.mod
    const history = document.getElementById('historyMod')
    history.innerHTML = character.skills.history.mod
    const insight = document.getElementById('insightMod')
    insight.innerHTML = character.skills.insight.mod
    const intimidation = document.getElementById('intimidationMod')
    intimidation.innerHTML = character.skills.intimidation.mod
    const investigation = document.getElementById('investigationMod')
    investigation.innerHTML = character.skills.investigation.mod
    const medicine = document.getElementById('medicineMod')
    medicine.innerHTML = character.skills.medicine.mod
    const nature = document.getElementById('natureMod')
    nature.innerHTML = character.skills.nature.mod
    const perception = document.getElementById('perceptionMod')
    perception.innerHTML = character.skills.perception.mod
    const performance = document.getElementById('performanceMod')
    performance.innerHTML = character.skills.performance.mod
    const persuasion = document.getElementById('persuasionMod')
    persuasion.innerHTML = character.skills.persuasion.mod
    const religion = document.getElementById('religionMod')
    religion.innerHTML = character.skills.religion.mod
    const sleightOfHand = document.getElementById('sleightOfHandMod')
    sleightOfHand.innerHTML = character.skills.sleightOfHand.mod





}

//if skill is checked add proficiency bonus to skill
function addProficiencyBonusToSkills(e) {
    const name = e.target.name
    if (e.target.checked) {
        character.skills[name].mod = parseInt(character.skills[name].mod) + parseInt(character.about.proficiencyBonus)
    } else {
        character.skills[name].mod -= character.about.proficiencyBonus
    }
    console.log(character.skills)
    writeSkills()
}

//add eventListener to checkbox in skills section
const athleticsCheck = document.getElementById('athleticsCheck')
athleticsCheck.addEventListener("change", addProficiencyBonusToSkills)
const stealthCheck = document.getElementById('stealthCheck')
stealthCheck.addEventListener("change", addProficiencyBonusToSkills)
const survivalCheck = document.getElementById('survivalCheck')
survivalCheck.addEventListener("change", addProficiencyBonusToSkills)
const acrobaticsCheck = document.getElementById('acrobaticsCheck')
acrobaticsCheck.addEventListener("change", addProficiencyBonusToSkills)
const animalHandlingCheck = document.getElementById('animalHandlingCheck')
animalHandlingCheck.addEventListener("change", addProficiencyBonusToSkills)
const arcanaCheck = document.getElementById('arcanaCheck')
arcanaCheck.addEventListener("change", addProficiencyBonusToSkills)
const deceptionCheck = document.getElementById('deceptionCheck')
deceptionCheck.addEventListener("change", addProficiencyBonusToSkills)
const historyCheck = document.getElementById('historyCheck')
historyCheck.addEventListener("change", addProficiencyBonusToSkills)
const insightCheck = document.getElementById('insightCheck')
insightCheck.addEventListener("change", addProficiencyBonusToSkills)
const intimidationCheck = document.getElementById('intimidationCheck')
intimidationCheck.addEventListener("change", addProficiencyBonusToSkills)
const investigationCheck = document.getElementById('investigationCheck')
investigationCheck.addEventListener("change", addProficiencyBonusToSkills)
const medicineCheck = document.getElementById('medicineCheck')
medicineCheck.addEventListener("change", addProficiencyBonusToSkills)
const natureCheck = document.getElementById('natureCheck')
natureCheck.addEventListener("change", addProficiencyBonusToSkills)
const perceptionCheck = document.getElementById('perceptionCheck')
perceptionCheck.addEventListener("change", addProficiencyBonusToSkills)
const performanceCheck = document.getElementById('performanceCheck')
performanceCheck.addEventListener("change", addProficiencyBonusToSkills)
const persuasionCheck = document.getElementById('persuasionCheck')
persuasionCheck.addEventListener("change", addProficiencyBonusToSkills)
const religionCheck = document.getElementById('religionCheck')
religionCheck.addEventListener("change", addProficiencyBonusToSkills)
const sleightOfHandCheck = document.getElementById('sleightOfHandCheck')
sleightOfHandCheck.addEventListener("change", addProficiencyBonusToSkills)


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//armor class = 10 + dext + input value 
function calculateArmorClass(e) {
    const dex = character.modifiers.dexterityMod
    const armorClass = 10 + dex
    const armorClassInput = document.getElementById('armorClassInput')
    armorClassInput.value = armorClass
    //write armorclass to database
    character.points.armorClass = armorClass
    // if armorClass.value changed with user write to database
    //why is returned 2 times?
    armorClassInput.addEventListener("input", function (e) {
        if (e.target.value !== armorClass) {
            character.points.armorClass = e.target.value
            console.log(character.points.armorClass)
        }

    }

    )
    
}
calculateArmorClass()

function updatePoints(e,name) {
    const value = e.target.value
    character.points[name] = value
    console.log(character.points[name])
}

const speed = document.getElementById('speedInput')
speed.addEventListener("input", updatePoints)


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const initiative = document.getElementById('initiativeInput')
initiative.addEventListener("input", updatePoints)

const currHealth = document.getElementById('currHealth')
currHealth.addEventListener("input", updatePoints)

const maxHealth = document.getElementById('maxHealth')
maxHealth.addEventListener("input", updatePoints)

const tempHealth = document.getElementById('tempHealth')
tempHealth.addEventListener("input", updatePoints)

const passiveperception = document.getElementById('perceptionInput')
passiveperception.addEventListener("input", updatePoints)

const vision = document.getElementById('visionInput')
vision.addEventListener("input", updatePoints)

const diceCount = document.getElementById('diceCountInput')
diceCount.addEventListener("input", updatePoints)


//when diceNumber1 and diceNumber2 = number -> diceSides = diceNumber1 + "d" + diceNumber2















