let arrName = [123, 456, 789];

let studentsArray = ["abc", "xyz", "lkj", 123, true, ]

console.log(studentsArray)

console.log(studentsArray[8]) //undefined

console.log(studentsArray.length)

studentsArray[2] = 28;

console.log(studentsArray)

//refers memory location so change in new Array reflects in original array
let newArr = studentsArray;
console.log(newArr);
newArr[0] = "Students"
console.log(newArr);
console.log(studentsArray);

console.log(studentsArray.indexOf("xyz"))
console.log(studentsArray.includes(123))

studentsArray.push("Laptop")
studentsArray.unshift("Queen")
console.log(studentsArray);

studentsArray.pop("Laptop")
studentsArray.shift("Queen")
console.log(studentsArray);


let marks = [98, 78, 65, 34, 66, 34, 22, 92]
console.log(marks);

marks.sort();
console.log(marks);

let subMarks = marks.slice(1, 5);

console.log(subMarks)

