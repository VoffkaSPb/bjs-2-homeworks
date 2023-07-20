"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        arr.push(root1, root2);
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        arr.push(root);
    }

    return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (
        typeof percent !== "number" ||
        typeof contribution !== "number" ||
        typeof amount !== "number" ||
        typeof countMonths !== "number"
    ) {
        return false;
    }

    const monthlyInterestRate = percent / (12 * 100);
    const loanBody = amount - contribution;

    const monthlyPayment =
        loanBody *
        (monthlyInterestRate +
            monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));

    const totalPayment = monthlyPayment * countMonths;

    return +totalPayment.toFixed(2); 
}