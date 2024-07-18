// Conditional Statements

{
    let age = 18;

    if(age >= 18) {
        console.log("Eligible to vote");
    }
    else {
        console.log("Not eligible to vote");
    }

    // To check the given number is -ve, +ve or zero using if else
    let num = 10;
    if(num > 0) {
        console.log("Number is greater than zero");
    }
    else if(num < 0) {
        console.log("Number is less than zero");
    }
    else {
        console.log("The given number is zero");
    }
}

{
const func = () => {
    const a = 9, b = 77, c = 218;
    if(a > b && a>c) return a;
    else if (b>a && b>c) return b;
    else return c;
}
}

{
    // Switch Case
    let days = 6;
    switch(days) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        default:
            if(day>7 || day < 1){
                console.log("Invalid Day");
                return;
            }
            else {
                console.log("Saturday");
                return
            }
            break;
    }

}

{
    // Finding Leap Year
    let year = 4009;
    if(year.length == 4) {
        if(year % 4 === 0) {
            console.log("Leap Year");
        }
        else {
            console.log("Not a leap year");
        }
    }
    else {
        return new Error("Wrong Year Found");
    }
}

