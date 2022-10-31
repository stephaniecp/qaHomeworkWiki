//2.2 homework part 1
// Completed by SCP for homework

//to run the tests
//npx jest newFunction

export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return 'true'
    } else if(myNum < 5 && myNum >=0) {
        return 'false'
    }else if (myNum > 5){
        return 'big'
    }else {
        return 'negative'
    }
}

