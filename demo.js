"use strict";
// 1. BASIC TYPES
let username = "John";
let age = 25;
let isActive = true;
let scores = [10, 20, 30];
let userTuple = ["John", 25];
let flexible = "hello"; // disables type checking
flexible = 42;
let unknownValue = "hello"; // safer than any
if (typeof unknownValue === "string") {
    unknownValue.toUpperCase(); // must narrow before use
}
// 2. INFERENCE VS EXPLICIT TYPING
let city = "Dhaka"; // inferred as string, no annotation needed
function add(a, b) {
    // params always explicit, return type optional but clear
    return a + b;
}
const exampleUser = { id: 1, name: "John", email: "john@example.com" };
const exampleStatus = "active";
// 4. FUNCTIONS — optional, default, rest params, function types
function createUser(name, age) {
    return { name, age };
}
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}`;
}
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
const multiply = (a, b) => a * b;
// 5. UNION & INTERSECTION TYPES
function formatValue(value) {
    return String(value);
}
const entityExample = { id: 1, timestamp: new Date() };
// 6. TYPE NARROWING (incl. discriminated unions)
function process(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return shape.radius * shape.radius * 3.14;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.width * shape.height;
    }
}
// 7. ENUMS & LITERAL TYPES
let direction = "up"; // literal type, zero runtime cost
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Viewer"] = 2] = "Viewer";
})(Role || (Role = {}));
let userRole = Role.Admin;
// 8. GENERICS
function wrapInArray(value) {
    return [value];
}
const numberBox = { contents: 42 };
function getProperty(obj, key) {
    return obj[key];
}
const productResponse = {
    success: true,
    data: { title: "Laptop", price: 999 },
};
function logLength(item) {
    console.log(item.length);
}
// 10. OBJECTS / ARRAYS OF OBJECTS / CLASSES
const products = [
    { id: 1, name: "Laptop", price: 999, description: "Fast laptop", inStock: true },
    { id: 2, name: "Mouse", price: 25, description: "Wireless mouse", inStock: false },
];
class UserAccount {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}`;
    }
}
const acc = new UserAccount(1, "John");
console.log(add(2, 3));
console.log(greet("John"));
console.log(sum(1, 2, 3, 4));
console.log(formatValue(42));
console.log(process("hello"));
console.log(getArea({ kind: "circle", radius: 4 }));
console.log(wrapInArray("test"));
console.log(getProperty(exampleUser, "name"));
console.log(acc.greet());
