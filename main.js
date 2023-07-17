// 6kyu
// KATA 1 //
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string){
  return string.split(' ').map(ele => {
    return ele.length > 4 ? ele.split('').reverse().join('') : ele;
  }).join(' ');
}

console.log(spinWords('Welcome'));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Seriously this is the last one"));

// KATA 2 
// https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd1(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
function findOdd(arr) {
  const occurrences = {};

  // Count the occurrences of each element in the array
  for (const item of arr) {
    occurrences[item] = (occurrences[item] || 0) + 1;
  }

  // Find the element with an odd number of occurrences
  for (const [item, count] of Object.entries(occurrences)) {
    if (count % 2 === 1) {
      return Number(item); // Convert the key back to a number (assuming the array contains numbers)
    }
  }

  return undefined; // Return undefined if no element has an odd number of occurrences
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));

// KATA 3
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  switch(names.length) {
    case 0: return `no one likes this`; break;
    case 1: return `${names[0]} likes this`; break;
    case 2: return `${names[0]} and ${names[1]} like this`; break;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`; break;
  }
  
  }

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

// KATA 4
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return `(${numbers.substring(0,3)}) ${numbers.substring(3,6)}-${numbers.substring(6)}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// KATA 5
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
  let occ = {};
  let tally = 0;
  let arr = text.split('');
  for (let item of arr) {
    item = item.toLowerCase();
    occ[item] = (occ[item] || 0) + 1;
  }

  for (const [item, count] of Object.entries(occ)) {
    if (count >= 2) {
      tally++;
    }  
  }
  return tally;
}
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibilities"));