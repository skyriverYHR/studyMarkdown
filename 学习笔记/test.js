var people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

function checkpeople(usre,age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let person of people) {
                if (person.name === usre && person.age === age) {
                    resolve("User found: " + JSON.stringify(person));
                    return;
                }
            }
            reject("User not found");
        }, 1000);
    });
}

function registerUser(usre, age) {
    return new Promise((resolve) => {
        setTimeout(() => {
            people.push({ name: usre, age: age });
            resolve("User registered: " + JSON.stringify({ name: usre, age: age }));
        }, 1000);
    });
}


let userName = "David";
let userAge = 28;
checkpeople(userName, userAge)
    .then((message) => {
        console.log(message);
    })
    .then((registrationMessage) => {
        console.log(registrationMessage);
    })
    .catch((error) => {
        console.log(error);
        return registerUser(userName, userAge);
    })
    .finally(() => {
        console.log("Operation completed.");
    });

    
