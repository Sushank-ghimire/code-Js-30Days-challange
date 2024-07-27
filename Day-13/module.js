
export function addition(num1, num2) {
    return num1 + num2;
}

export function subtract(num1, num2) {
    return num1 - num2;
}

export function multiply(num1, num2) {
    return num1 * num2;
}

export function divide(num1, num2) {
    return (num1/num2).toFixed(2);
}

export const myDetails = {
    name: "Sushank Ghimre",
    work: "Student",
    intrest: "Programming",
    getDetails: function() {
        console.log(`Name: ${this.name}, Work: ${this.work}, Intrest: ${this.intrest}`)
    }
};