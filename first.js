const student = {
    fullname : "nishant",
    age : 10,
    cgpa : 7.2,

};
student['age'] = student['age'] +1;


const example = {
    name : "Parker pen",
    rating : 5,
    price : "$45",
    offer : ' 5% off',
};

console.log(example);

// let name = prompt("hello");
// console.log(name);

// alert("fuck");



//for of loop
let str = "nishanttt";

for (let i of str){
    console.log("i =" , i);
}

let obj = {
    item : "car",
    price : 56,
};
//template literal
console.log(` The cost of ${obj.item} is ${obj.price} rupees`);


arr = ["bloomberg","microsoft","uber","google","ibm","netflix"];
console.log(arr);

arr.shift();  // to remove from start
arr.splice(1,1,"ola"); // to replace uber to ola 
arr.push("amazon"); // to add at end

//normal function
function countVowels(str){
    cnt = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char==='o'||char==='u'){
            cnt++;
        }
    }
    return cnt;
}

//arrow function 
const countVOwels = (str)=>{
    cnt = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char==='o'||char==='u'){
            cnt++;
        }
    }
    return cnt;
}


//for each loop 
arr2 = [2,4,6,3];

arr2.forEach((val) => {
    console.log(val*val);
});

let calcSquare=(arr)=>{
    console.log(arr*arr);
}

arr2.forEach(calcSquare);
