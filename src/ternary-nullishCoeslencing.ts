const age: number = 17;

const isAdult = age >=18 ? 'you are adult' : 'you are a child';
console.log(isAdult);


//nullish coeslencing
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? 'guest';
console.log(userName);