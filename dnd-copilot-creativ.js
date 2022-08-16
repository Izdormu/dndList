/* 
1 -> -5
2-3 -> -4
4-5 -> -3
6-7 -> -2
8-9 -> -1
10-11 -> 0
12-13 -> 1
14-15 -> 2
16-17 -> 3
18-19 -> 4
20 -> 5 
*/
function calcAbilityModifier(num) {
    return Math.floor((num - 10) / 2)
}

/* 
1-4 -> 2
5-8 -> 3
9-12 -> 4
13-16 -> 5
17-20 -> 6
*/
function calcProficiencyBonus(num) {
    return Math.floor((num - 5) / 2)
}

const level = 11

const stats = {
    strength: 8,
    dexterity: 10,
    constitution: 10,
    intelligence: 18,
    wisdom: 18,
    charisma: 12,
}

const skills = {
    acrobatics: {ability: 'dexterity'},
    animalHandling: {ability: 'wisdom'},
    arcana: {ability: 'intelligence'},
    athletics: {ability: 'strength'},
    deception: {ability: 'charisma'},
    history: {ability: 'intelligence'},
    insight: {ability: 'wisdom'},
    intimidation: {ability: 'charisma'},
    investigation: {ability: 'intelligence'},
    medicine: {ability: 'wisdom'},
    nature: {ability: 'intelligence'},
    perception: {ability: 'wisdom'},
    performance: {ability: 'charisma'},
    persuasion: {ability: 'charisma'},
    religion: {ability: 'intelligence'},
    sleightOfHand: {ability: 'dexterity'},
    stealth: {ability: 'dexterity'},
    survival: {ability: 'wisdom'},
}

const trainedSkills = ['animalHandling', 'athletics', 'insight', 'perception', 'stealth']

function updateSkillValues() {
    for (const skill in skills) {
        const ability = skills[skill].ability
        const abilityModifier = calcAbilityModifier(stats[ability])
        const proficiencyBonus = calcProficiencyBonus(level)
        skills[skill].value = abilityModifier + proficiencyBonus
    }
}

updateSkillValues() 
