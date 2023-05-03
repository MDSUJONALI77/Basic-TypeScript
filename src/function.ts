//normal function
function add(num1: number, num2: number): number {
	return (num1 + num2);
};

add(2, 3);

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

//call back function
const arr = [1, 3, 4, 5, 6, 8, 7];
const newArr = arr.map((elem: number) => elem * elem);

//using those function in a object
const person: {
	name: string;
	balance: number;
	addBalance(money: number): void;
} = {
	name: "Mofij",
	balance: 5,
	addBalance(money: number) {
		return this.balance + money;
	}
}

//spread operator
const myFriends = ["a", "b", "c"];
const newFriends = ['x', 'y', 'z'];

myFriends.push(...newFriends);
console.log(myFriends);

//rest operator
const greetFriends = (...friends: string[]): void => friends.forEach((friend) => console.log(`Hi ${friend}`))

greetFriends("abul", "babul", "kobul", "Dabul")