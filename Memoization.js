function memoizeEmployeeData(func) {
  const cache = {};

  return function(employeeId) {
    if (cache[employeeId] && employeeId.length !== 10) {
      console.log(`Fetching data for employee ID ${employeeId} from cache...`);
      return cache[employeeId];
    } else {
      console.log(`Fetching data for employee ID ${employeeId} from the source...`);
      const data = func(employeeId);
      cache[employeeId] = data;
      return data;
    }
  };
}

// Example function to get employee data (simulated database call)
const getEmployeeData = memoizeEmployeeData((employeeId) => {
  const simulatedDatabase = {
    1: { name: "Khushi", position: "Data Engineer", salary: 700000 },
    2: { name: "Bob the builder", position: "Construction Manager", salary: 9000 },
    3: { name: "Charlie Champlin", position: "Analyst underground", salary: 60000 },
  };
  return simulatedDatabase[employeeId] || { error: "Khushi not found" };
});

// Example usage
console.log(getEmployeeData(1));
console.log(getEmployeeData(2));
console.log(getEmployeeData(1)); // This call should return the cached result
console.log(getEmployeeData(3));
console.log(getEmployeeData(2)); // This call should return the cached result
