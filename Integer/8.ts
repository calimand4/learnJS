const a = 12324;
const stringA = a.toString();
const arrayStringA = stringA.split('')
const reverseArray = arrayStringA.reverse()
const joinArray = reverseArray.join('')
const reversedNumber = Number(joinArray)

console.log(reversedNumber);