function calculateTax(income, expenses) {
    let totalIncome = income - expenses;
    let payableTax = totalIncome * 20 / 100;
    return payableTax;
}
let totalIncome = calculateTax(5000, 1500);
console.log(totalIncome);