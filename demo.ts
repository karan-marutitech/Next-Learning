
// 1. BASIC TYPES

let username: string = "John";
let age: number = 25;
let isActive: boolean = true;
let scores: number[] = [10, 20, 30];
let userTuple: [string, number] = ["John", 25];

let flexible: any = "hello"; // disables type checking
flexible = 42; 

let unknownValue: unknown = "hello"; // safer than any
if (typeof unknownValue === "string") {
  unknownValue.toUpperCase(); // must narrow before use
}

// 2. INFERENCE VS EXPLICIT TYPING

let city = "Dhaka"; // inferred as string, no annotation needed

function add(a: number, b: number): number {
  // params always explicit, return type optional but clear
  return a + b;
}

// 3. INTERFACES VS TYPE ALIASES

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // optional property
}

type Status = "active" | "inactive" | "banned"; // interfaces can't do unions

const exampleUser: User = { id: 1, name: "John", email: "john@example.com" };
const exampleStatus: Status = "active";

// 4. FUNCTIONS — optional, default, rest params, function types

function createUser(name: string, age?: number) {
  return { name, age };
}

function greet(name: string, greeting: string = "Hello") {
  return `${greeting}, ${name}`;
}

function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

type MathOp = (a: number, b: number) => number;
const multiply: MathOp = (a, b) => a * b;

// 5. UNION & INTERSECTION TYPES

function formatValue(value: number | boolean | string): string {
  return String(value);
}

type WithId = { id: number };
type WithTimestamp = { timestamp: Date };
type Entity = WithId & WithTimestamp; // intersection — must satisfy both

const entityExample: Entity = { id: 1, timestamp: new Date() };

// 6. TYPE NARROWING (incl. discriminated unions)

function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
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

let direction: "up" | "down" | "left" | "right" = "up"; // literal type, zero runtime cost

enum Role {
  Admin,
  Editor,
  Viewer,
}
let userRole: Role = Role.Admin;

// 8. GENERICS

function wrapInArray<T>(value: T): T[] {
  return [value];
}

interface Box<T> {
  contents: T;
}
const numberBox: Box<number> = { contents: 42 };

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}
const productResponse: ApiResponse<{ title: string; price: number }> = {
  success: true,
  data: { title: "Laptop", price: 999 },
};

function logLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}

// 9. UTILITY TYPES

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

type ProductPreview = Pick<Product, "id" | "name" | "price">;
type ProductUpdate = Partial<Product>;
type ProductWithoutDescription = Omit<Product, "description">;
type ProductRoles = Record<string, "admin" | "editor" | "viewer">;
type LockedProduct = Readonly<Product>;

// 10. OBJECTS / ARRAYS OF OBJECTS / CLASSES

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999, description: "Fast laptop", inStock: true },
  { id: 2, name: "Mouse", price: 25, description: "Wireless mouse", inStock: false },
];

interface Order {
  id: number;
  items: Product[];
  customer: {
    name: string;
    email: string;
  };
}

class UserAccount {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  greet(): string {
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