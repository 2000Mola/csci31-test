// 2.0 create an array with no elements inside of it, log the array

const array = [5, 8]


// I CANT GET THIS TO WORK FOR ME??????????????????????
// console.log('array: ${JSON.stringify(array, null, 2)}')


// 2.1 use array.push to add a number to the array, log the array

array.push(1)
console.log(array)


// 2.2 create a new array with a number already inside of it, log the array

const newarray = [2]
console.log(newarray)


// 2.3 use array.pop to remove an element from the back of the array

newarray.pop()
console.log(newarray)


// 2.4 push two more numbers into your array

newarray.push(2,3)
console.log(newarray)

// 2.5 use spread syntax to combine arrays from above problems, log the results

const thirdarray = [...array, ...newarray]
console.log(thirdarray)


// 2.6 use array.find to locate one of the elements in your array, log the located result

const found = thirdarray.find((number) => number === 2)
console.log("found", found)


// 2.7 use array.every to determine if every single number is above "5", log the result

const areallnumbersabovefive = thirdarray.every((number) => number > 5)
console.log("areallnumbersabovefive", areallnumbersabovefive)


// 2.8 use array.filter to remove any numbers smaller than 5, log the result

const numbersgreaterthan5 = thirdarray.filter((number) => number > 5)
console.log("numbersgreaterthan5", numbersgreaterthan5)


// 2.9 use array.sort to sort the items from smallest to largest

const sortedarray = thirdarray.sort()
console.log("sortedarray", sortedarray)

// 2.91 use array.reverse to reverse the items so that they are now largest to smallest

const reversesortedarray = sortedarray.reverse()
console.log("reversesortedarray", reversesortedarray)

// 2.92 use array.reduce to sum up the entire list of numbers in the array

const sum = thirdarray.reduce((sum, currentnumber) => (sum += currentnumber), 0)
console.log("sum", sum)

// 2.93 use array.map to scale each number in the array up by a factor of 10

const scaledarray = thirdarray.map((number) => number * 10)
console.log("scaledarray", scaledarray)

// 2.92

const firstitem = thirdarray[0]
console.log(firstitem)