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