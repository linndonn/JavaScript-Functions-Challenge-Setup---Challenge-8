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

//Task 3 - Service Fee Calculation
//Write an arrow function calculateServiceFee(amount, serviceType) that applies a fee:
const calculateServiceFee = (amount, serviceType) => {
    let discount = 0;
    //"Premium" → 15% of the amount.
    if (serviceType === "Premium") discount = amount * 0.15;
    //"Standard" → 10% of the amount.
    else if (serviceType === "Standard") discount = amount * 0.10;
    //"Basic" → 5% of the amount
    else discount = amount * 0.05;// Determines the service fee based on the service type
    console.log(`Service Fee: $${discount.toFixed(2)} ^_^`);};
    //Test Data:
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"

//Task 4 - Car Rental Cost Calculation
//Write a function calculateRentalCost(days, carType, insurance = false) that calculates rental costs:
function calculateRentalCost(days, carType, insurance = false) {
const cargroup = {
    //"Economy" = $40/day
    "Economy": 40,
    //"Standard" = $60/day
    "Standard": 60,
    //"Luxury" = $100/day
    "Luxury": 100};
    //Insurance costs an extra $20 per day.
    const insuranceCharge = insurance ? 20 : 0;
    //Calculate the total cost.
    let totalCost = (cargroup[carType] * days) + insuranceCharge;
    //Produce the result as a string in the format "Rental Cost: $X.XX".
    return `Total Rental Cost: $${totalCost}`;
};
//Test Data:
console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"

//Task 5 - Loan Payment Calculation.
//Write a function calculateLoanPayment(principal, rate, time) that returns total loan payment.
function calculateLoanPayment(principal, rate, time) {
    //Formula:
    totalPayment = principal + (principal * rate * time);
    //Produce the result as a string in the format "Total Payment: $X.XX".
    return `Total Payment: $${totalPayment.toFixed(2)}`;}
//Test Data:
console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"

//Task 6: Higher-Order Functions
//Declare an array transactions with at least five values.
let transactions = [200, 1500, 3200, 800, 2500];
//Write a higher-order function filterLargeTransactions(transactions, filterFunction) to find transactions above $1000.
function filterLargeTransactions(transactions, filterFunction) {
let filterTransactions = transactions.filter(filterFunction)
//Logging into console
console.log(`Expected Output: ${filterTransactions}`);// Expected output: [1500, 3200, 2500]
};
//Test Data:
filterLargeTransactions(transactions, amount => amount > 1000);

//Task 7 - Shopping Cart Tracker
//Write a function createCartTracker() that returns another function to add items and maintain a running total.
function createCartTracker() {
    let value =0;
    return function (price) { value += price;
        return `Total Cart Value: $${value.toFixed(2)}`;};}
//Test Data:
let cart = createCartTracker();
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

//Task 8 - Recursion in JavaScript
//Write a recursive function calculateSavings(years, amount) that projects savings growth.
function calculateSavings(years, amount) {
 if (years >= 10) {
 return amount;};
    //Each year increases savings by 5% until reaching year 10. 
    const interestRate = 0.05;
    const totalSavings = amount * (1 + interestRate)
    return calculateSavings(years + 1, totalSavings, interestRate);
};
//Test Data:
console.log(`Projected Savings: $${calculateSavings(8, 1000).toFixed(2)}`); // Expected output: "Projected Savings: $1102.50"
console.log(`Projected Savings: $${calculateSavings(5, 5000).toFixed(2)}`); // Expected output: "Projected Savings: $6381.41"



//End of Assignment 8..... had to rewrite test code for task 8