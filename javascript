
// // // // // // // // // // // // // // // // // // // // // let str = "harsha"
// // // // // // // // // // // // // // // // // // // // // let str2 = "aryan"
// // // // // // // // // // // // // // // // // // // // // console.log(str.length);
// // // // // // // // // // // // // // // // // // // // // console.log(str.charAt(0));
// // // // // // // // // // // // // // // // // // // // // console.log(str.toUpperCase());
// // // // // // // // // // // // // // // // // // // // // console.log(str.toLocaleLowerCase());
// // // // // // // // // // // // // // // // // // // // // console.log(str.concat(str2));
// // // // // // // // // // // // // // // // // // // // // console.log(str.includes);
// // // // // // // // // // // // // // // // // // // // // console.log(str.startsWith('h'));
// // // // // // // // // // // // // // // // // // // // // console.log(str.padStart(10,"rolex"));
// // // // // // // // // // // // // // // // // // // // // console.log(str.repeat(4));
// // // // // // // // // // // // // // // // // // // // // console.log(str.slice(0,2));
// // // // // // // // // // // // // // // // // // // // // console.log(str2.trim());
// // // // // // // // // // // // // // // // // // // // // console.log(str2.trimStart());
// // // // // // // // // // // // // // // // // // // // // console.log(str2.replace('a','z'));

// // // // // // // // // // // // // // // // // // // // // console.log(str2.replaceAll('a','z'));



// // // // // // // // // // // // // // // // // // // // let person = {
// // // // // // // // // // // // // // // // // // // //     fname : "surya",
// // // // // // // // // // // // // // // // // // // //     age : "47",
// // // // // // // // // // // // // // // // // // // //     movies : {
// // // // // // // // // // // // // // // // // // // //         anjaan : 'super hit',
// // // // // // // // // // // // // // // // // // // //         karuppa : 'blockbuster'
// // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // console.log(person);
// // // // // // // // // // // // // // // // // // // // console.log(Object.keys(person));
// // // // // // // // // // // // // // // // // // // // console.log(Object.values(person));
// // // // // // // // // // // // // // // // // // // // console.log(Object.entries(person));
// // // // // // // // // // // // // // // // // // // // console.log(Object.freeze(person));
// // // // // // // // // // // // // // // // // // // // console.log(Object.isFrozen(person));
// // // // // // // // // // // // // // // // // // // // console.log(Object.seal(person));
// // // // // // // // // // // // // // // // // // // // console.log(Object.isSealed(person));



// // // // // // // // // // // // // // // // // // // let movies = [
// // // // // // // // // // // // // // // // // // //     'kantara','rolex','vikram','om','katera'
// // // // // // // // // // // // // // // // // // // ]
// // // // // // // // // // // // // // // // // // // console.log(movies);
// // // // // // // // // // // // // // // // // // // console.log(movies.length);
// // // // // // // // // // // // // // // // // // // console.log(movies.unshift("kantara"));
// // // // // // // // // // // // // // // // // // // console.log(movies);
// // // // // // // // // // // // // // // // // // // console.log(movies.shift(),"shift");
// // // // // // // // // // // // // // // // // // // console.log(movies);
// // // // // // // // // // // // // // // // // // // console.log(movies.push("kgf"));
// // // // // // // // // // // // // // // // // // // console.log(movies);
// // // // // // // // // // // // // // // // // // // console.log(movies.pop());
// // // // // // // // // // // // // // // // // // // console.log(movies.slice(1,3));
// // // // // // // // // // // // // // // // // // // console.log(movies.splice(3,0,"jeeva"));
// // // // // // // // // // // // // // // // // // // console.log(movies);


// // // // // // // // // // // // // // // // // // let str = [
// // // // // // // // // // // // // // // // // //     'my' , 'name' , 'is' , 'khan'
// // // // // // // // // // // // // // // // // // ]
// // // // // // // // // // // // // // // // // // console.log(str.toString());
// // // // // // // // // // // // // // // // // // console.log(str.join(" "));



// // // // // // // // // // // // // // // // // let str = 'my name is peter'
// // // // // // // // // // // // // // // // // let splitarray = str.split()
// // // // // // // // // // // // // // // // // console.log(str.split(" ").reverse().join(" "));
// // // // // // // // // // // // // // // // // console.log(splitarray);
// // // // // // // // // // // // // // // // // for(let i = splitarray.length ; i>0 ; i--){
// // // // // // // // // // // // // // // // //     console.log(splitarray[i]);
// // // // // // // // // // // // // // // // // }



// // // // // // // // // // // // // // // // let arr1 = [10,20,30,40,50]
// // // // // // // // // // // // // // // // let result = arr1.forEach((arr,index)=>{
// // // // // // // // // // // // // // // //     console.log(arr+10);
// // // // // // // // // // // // // // // //     return arr+10
// // // // // // // // // // // // // // // // })
// // // // // // // // // // // // // // // // let result1 = arr1.map((arr,ind)=>{
// // // // // // // // // // // // // // // //     return arr+10;
// // // // // // // // // // // // // // // // })


// // // // // // // // // // // // // // // // console.log(result);
// // // // // // // // // // // // // // // // console.log(result1);
// // // // // // // // // // // // // // // // console.log(arr1);
// // // // // // // // // // // // // // // // console.log(arr1.concat());


// // // // // // // // // // // // // // // // console.log(arr1.reduce((accuval,curval) => accuval+curval));



// // // // // // // // // // // // // // // let str = 'abaa'
// // // // // // // // // // // // // // // function find(text){
// // // // // // // // // // // // // // // for(let char of text){
// // // // // // // // // // // // // // //     if(str.indexOf(char) === str.lastIndexOf(char)){
// // // // // // // // // // // // // // //         return char
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // console.log(find('abaa'));


// // // // // // // // // // // // // // // let arr = [1, 2, 4, 5, 6];

// // // // // // // // // // // // // // // for (let i = 0; i < arr.length - 1; i++) {
// // // // // // // // // // // // // // //   // Check if the next number is not equal to current number + 1
// // // // // // // // // // // // // // //   if (arr[i] + 1 !== arr[i + 1]) {
// // // // // // // // // // // // // // //     console.log("There is a missing number:", arr[i] + 1);
// // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // let set = new Set()
// // // // // // // // // // // // // // set.add(10)
// // // // // // // // // // // // // // set.add(20)
// // // // // // // // // // // // // // set.add(30)
// // // // // // // // // // // // // // set.add(40)
// // // // // // // // // // // // // // set.add(50)


// // // // // // // // // // // // // // console.log(set.has(10));
// // // // // // // // // // // // // // console.log(set.delete(10));
// // // // // // // // // // // // // // console.log(set.size);
// // // // // // // // // // // // // // console.log(set.clear());
// // // // // // // // // // // // // // console.log(set);

// // // // // // // // // // // // // let person = new Map()
// // // // // // // // // // // // // person.set("name","aryan")
// // // // // // // // // // // // // person.set("age",20)


// // // // // // // // // // // // // console.log(person.get("name"));
// // // // // // // // // // // // // console.log(person.get("age"));
// // // // // // // // // // // // // console.log(person.has("name"));
// // // // // // // // // // // // // // console.log(person.delete("name"));
// // // // // // // // // // // // // console.log(person.size);

// // // // // // // // // // // // // for(let [name,age] of person){
// // // // // // // // // // // // //     console.log(name,age);
// // // // // // // // // // // // // }
// // // // // // // // // // // // // console.log(person);



// // // // // // // // // // // // console.log('1');
// // // // // // // // // // // // setTimeout(()=>{
// // // // // // // // // // // //     console.log('2');
// // // // // // // // // // // // },5000)
// // // // // // // // // // // // console.log('3');


// // // // // // // // // // // for(let i = 0 ; i<=100 ; i++){
// // // // // // // // // // //     setTimeout(() => {
// // // // // // // // // // //         console.log(i);
        
// // // // // // // // // // //     }, 3000);
// // // // // // // // // // // }


// // // // // // // // // // let count = 0;

// // // // // // // // // // let interval = setInterval(() => {
// // // // // // // // // //   console.log("John");

// // // // // // // // // //   count++;

// // // // // // // // // //   if (count === 100) {
// // // // // // // // // //     clearInterval(interval);
// // // // // // // // // //   }
// // // // // // // // // // }, 2000);



// // // // // // // // // // const prom = new Promise((res,rej)=>{
// // // // // // // // // //     const success = false
// // // // // // // // // //     if(success){
// // // // // // // // // //         res("ur approved")
// // // // // // // // // //     }
// // // // // // // // // //     else{
// // // // // // // // // //         rej("ur not approved")
// // // // // // // // // //     }
// // // // // // // // // // })

// // // // // // // // // // prom.catch((err)=>{
// // // // // // // // // //     console.log(err);
// // // // // // // // // // })

// // // // // // // // // // prom.finally(()=>{

// // // // // // // // // //      console.log("what ever happens i will come");
// // // // // // // // // // })

// // // // // // // // // // Promise.all([
// // // // // // // // // //     Promise.resolve("🍕 Pizza"),
// // // // // // // // // //     Promise.resolve("🥤 Coke"),
// // // // // // // // // //     Promise.resolve("🍟 Fries")
// // // // // // // // // //   ])
// // // // // // // // // //   .then((result) => {
// // // // // // // // // //     console.log(result);
// // // // // // // // // //   });
  

// // // // // // // // // let promise = new Promise((res,rej)=>{
// // // // // // // // //     let age = 1
// // // // // // // // //     if(age>=18){
// // // // // // // // //         res("u can vote")
// // // // // // // // //     }
// // // // // // // // //     else{
// // // // // // // // //         rej("u cannot vote")
// // // // // // // // //     }
// // // // // // // // // })

// // // // // // // // // promise.then((res)=>{
// // // // // // // // //     console.log(res);
// // // // // // // // // }).catch((rej)=>{
// // // // // // // // //     console.log(rej);
// // // // // // // // // }).finally(()=>{
// // // // // // // // //     console.log("this is will happens pakka");
// // // // // // // // // })


// // // // // // // // // let url = "https://jsonplaceholder.typicode.com/posts"
// // // // // // // // // let p = new Promise((res,rej)=>{
// // // // // // // // //      let response = fetch(url)
// // // // // // // // //      if(response){
// // // // // // // // //         res(response)
// // // // // // // // //      }
// // // // // // // // //      else{
// // // // // // // // //         rej(response)
// // // // // // // // //      }

// // // // // // // // // })

// // // // // // // // // p.then((response)=>{
// // // // // // // // //     console.log(response);
// // // // // // // // //     return response.json()
// // // // // // // // // })
// // // // // // // // // .then((data)=>{
// // // // // // // // //         console.log(data);
// // // // // // // // // })
// // // // // // // // // .catch((rej)=>{
// // // // // // // // //     console.log(rej);
// // // // // // // // // })



// // // // // // // // fetch("https://jsonplaceholder.typicode.com/users")
// // // // // // // //   .then(res => res.json())
// // // // // // // //   .then(data => console.log("Users:", data));

// // // // // // // // fetch("https://jsonplaceholder.typicode.com/posts")
// // // // // // // //   .then(res => res.json())
// // // // // // // //   .then(data => console.log("Posts:", data));

// // // // // // // // fetch("https://jsonplaceholder.typicode.com/todos")
// // // // // // // //   .then(res => res.json())
// // // // // // // //   .then(data => console.log("Todos:", data));


// // // // // // // const usersPromise = fetch(
// // // // // // //     "https://jsonplaceholder.typicode.com/users"
// // // // // // //   );
  
// // // // // // //   const postsPromise = fetch(
// // // // // // //     "https://jsonplaceholder.typicode.com/posts"
// // // // // // //   );
  
// // // // // // //   const todosPromise = fetch(
// // // // // // //     "https://jsonplaceholder.typicode.com/todos"
// // // // // // //   );
  
// // // // // // //   Promise.all([
// // // // // // //     usersPromise,
// // // // // // //     postsPromise,
// // // // // // //     todosPromise
// // // // // // //   ])
// // // // // // //   .then((responses) => {
// // // // // // //     console.log(responses);
// // // // // // //   });
  

// // // // // // Promise.all([
// // // // // //     fetch("https://jsonplaceholder.typicode.com/users")
// // // // // //       .then(res => res.json()),
  
// // // // // //     fetch("https://jsonplaceholder.typicode.com/posts")
// // // // // //       .then(res => res.json()),
  
// // // // // //     fetch("https://jsonplaceholder.typicode.com/todos")
// // // // // //       .then(res => res.json())
// // // // // //   ])
// // // // // //   .then(([users, posts, todos]) => {
  
// // // // // //     console.log("Users:", users);
// // // // // //     console.log("Posts:", posts);
// // // // // //     console.log("Todos:", todos);
  
// // // // // //   })
// // // // // //   .catch(error => {
// // // // // //     console.log("Error:", error);
// // // // // //   });
  


// // // // // let url= "https://jsonplaceholder.typicode.com/albums"
// // // // // let url2 = "https://jsonplaceholder.typicode.com/posts"
// // // // // async function fetching(){
// // // // //     try {
// // // // //         let response = await fetch(url)
// // // // //     let data = await response.json()
// // // // //     console.log(data);
        
// // // // //     } catch (error) {
// // // // //         console.log(error);
        
// // // // //     }
// // // // //     finally{
// // // // //         console.log("thank u");

// // // // //     }
// // // // // }
// // // // // async function fetching2(){
// // // // //     try {
// // // // //         let response2 = await fetch(url2)
// // // // //     let data2 = await response2.json()
// // // // //     console.log(data2);
// // // // //     } catch (error) {
        
// // // // //     }
// // // // //     finally{
// // // // //         console.log("completed with all ");
// // // // //     }
// // // // // }
// // // // // fetching(url)
// // // // // fetching2(url2)


// // // // //----------------------------------------------------------------------
// // // // let rand = Math.floor(Math.random()*25)
// // // // console.log(rand);

// // // let weight = 80
// // // let height = 1.70688
// // // let bmi = Math.floor(weight/(height*height))

// // // console.log(bmi);

// // // if (bmi<18.5) {
// // //     console.log("ur fit");
    
// // // }
// // // else if(bmi>=20 && bmi <= 25){
// // //     console.log("ur fit and healthy");
// // // }
// // // else{
// // //     console.log("ur fat try be slim");
// // // }

// // function isprime(n){
// //     if(n<=1){
// //         console.log(n + "not a prime number");
// //     }
// //     for(let i = 2 ; i<n ; i++){
// //         if(n%i === 0 ){
// //             return false
// //         }
// //     }
// //     return true
// // }

// // console.log(isprime(3));



// let arr = [5,4,3,2,1];

// function bubbleSort(array) {
//   // Loop through the entire array
//   for (let i = 0; i < array.length; i++) {
//     // Inner loop stops before the already sorted elements
//     for (let j = 0; j < array.length - i - 1; j++) {
//       // Swap if the current element is greater than the next
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   // Return the array AFTER both loops finish
//   return array;
// }

// console.log(bubbleSort(arr)); // Output: [1, 2, 4, 5, 6]


// function strrev(str){
//     let result = ''
//     for(let i = str.length-1 ; i>=0 ; i--){
//         result = result+str[i]
//     }
//     return result
// }
// console.log(strrev("pawan"));


// let strrev = function(str){
//     let result = ''
//     for(let i = str.length-1 ; i>=0 ; i--){
//         result = result+str[i]
//     }
//     return result
// }
// console.log(strrev("bca"));



let str = "I love JavaScript programming";

let words = str.split(" ");
let longest = "";

for (let word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log(longest);





let arr = ["apple", "banana", "apple", "orange", "apple"];
let element = "apple";

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
        count++;
    }
}

console.log("Element occurs", count, arr[i],"times");


