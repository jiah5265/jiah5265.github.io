const employees = [ //1. create JSON for each employee
    {firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true},
    {firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true},
    {firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false}
];

console.log(employees);

const company = { //2. create JSON for the company
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

console.log(company);

const newEmployee = { //3. new employee
    firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false 
};
company.employees.push(newEmployee);

console.log(employees);

let salary = 0; //4. calculate the total salary
for (const employee of company.employees) {
    salary += employee.salary;
}

console.log(salary);

function applyRaises(raise) { //5. increase their salary
    for (const employee of raise.employees) {
        if (employee.raiseEligible) {
        employee.salary *= 1.10;
        employee.raiseEligible = false;
        }
    }
}
applyRaises(company);

console.log(company);

const homeworker = ['Anna', 'Sam']; //6. work from home
for (const employee of company.employees) {
    employee.homeworker = homeworker.includes(employee.firstName);
}

console.log(company);