//Task 1 - Employee Salary Calculation.
//Write a function calculateSalary(baseSalary, bonus, taxRate) that computes the net salary.
function calculateSalary(baseSalary, bonus, taxRate) 
    //Formula: 
    {netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`; };

//Test Data:
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"