function calculateTax(income, expenses) {
    const difference = income - expenses;
    const payableTax = difference * 20 / 100;
    console.log(payableTax);
    return payableTax;
}
calculateTax(10000, 3000);
calculateTax(34000, 1753);
calculateTax(5000, 1500);
calculateTax(7000, 7000);
