let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  printDevelopersByMap(arr);
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee => {
      if (employee === "developer") {
          console.log(employee);
      }
  });
 }
 PrintDeveloperbyForEach(arr);
  
  function addData() {
    //Write your code here, just console.log
    const newArr2 = arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
    console.log(newArr2);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const newArr = arr.pop();
    console.log(newArr);
  }
  let arr2 = [
    { id: 4, name: "Aman", age: "28", profession: "HR" },
    { id: 5, name: "Jay", age: "21", profession: "Receptionist" },
    { id: 6, name: "Shiva", age: "49", profession: "Product Manager" },
  ];
  
  function concatenateArray() {
    //Write your code here, just console.log
    const arr3 = arr.concat(arr2);
    console.log(arr3);

  }