//This is a (switch/cas) function code along
// Section below was writen by SCP while following the 10/26 2.2 class

//Getting eexpected results when running (in the terminal) command
// npx ts-node 2.2/specialPicker

function getSpecial(weekday:string):string {
    switch(weekday) {
        case "Monday":
            return "Family night, kids eat free (under 12 or 12 passing)"
            break;
        case "Tuesday":
            return "Taco Tuesday 50% off all Tacos"
            break;
        case "Wednesday":
            return "Waffle Wednesday 25% off all Waffles"
        case "Thursday":
            return "Boneless Thursday 50% off all boneess wings"
            break;
        case "Friday":
            return "Fajita Friday 30% off all Fajitas"
            break;
        default:
            return "Enjoy your weekend with 30% off all Ice Cream"
    }
}

console.log(getSpecial("Monday"))
console.log(getSpecial("Tuesday"))
console.log(getSpecial("Wednesday"))
console.log(getSpecial("Thursday"))
console.log(getSpecial("Friday"))
console.log(getSpecial("Sunday"))