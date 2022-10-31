//This is a function code along
// Section below was writen by SCP while following the 10/26 2.2 class

// Getting error (line 9:24) when running command
// npx ts-node 2.2/discountCalculator

function discountCalc (
    senior: boolean, 
    vetOrRes: boolean, 
    members: boolean): number {
        if (senior && vetOrRes && members) return 0.25
        if ((senior && members) || (vetOrRes && members)) return 0.15
        if (senior || vetOrRes || members) return 0.10
        return 0 // Will return 0 if none of the above (if) conditions are true
    }

function jonDiscountCalc (
    senior: boolean, 
    vetOrRes: boolean, 
    members: boolean): number {
        let resultDiscount = 0  
        if (senior && vetOrRes && members) {
            resultDiscount = 0.25
        } else if ((senior && members) || (vetOrRes && members)) {
            resultDiscount = 0.15
        } else if (senior || vetOrRes || members) {
            resultDiscount = 0.10
        }
        return resultDiscount // Will return 0 if none of the above (if) conditions are true
    }
        
        
console.log("all three discount work", )
console.log("senior and member ", discountCalc(true, false, true))
console.log("VetOrRes works", discountCalc(false, true, true))
console.log("Mmbers work", discountCalc(false, false, true))
console.log("No discount works", discountCalc(false, false, false))