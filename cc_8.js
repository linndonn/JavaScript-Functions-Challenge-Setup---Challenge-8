//Task 1 - Employee Salary Calculation.
//Write a function calculateSalary(baseSalary, bonus, taxRate) that computes the net salary.
function calculateSalary(baseSalary, bonus, taxRate) 
    //Formula: 
    {netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
 //Produce the result as a string in the format "Net Salary: $X.XX".
    return `Net Salary: $${netSalary.toFixed(2)}`; };

//Test Data:
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

//Task 2 - Product Price After Discount
//Declare a function expression calculateDiscount(price, discountRate) to determine the final price.
function calculateDiscount(price, discountRate) {
    //Formula: 
    finalPrice = price - (price * discountRate)
    //Produce the result as a string in the format "Final Price: $X.XX".
    return `Final Price: $${finalPrice.toFixed(2)}` };

//Test Data:
console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"