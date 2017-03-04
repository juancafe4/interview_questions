function sortChars(a, b) {
  if ( a < b )
    return -1;
  if (a > b)
    return 1;
  return 0;
}

function sortString(a, b) {
  if ( a.word < b.word)
    return -1;
  if (a.word > b.word)
    return 1;
  return 0;
}

function group_anagrams(str) {
  let list = str.split(' ');
  let temp = str.split(' ');
  // Create a an array within hash map
  for (let i = 0; i < list.length; i++) {
    list[i] = {
      index: i,
      word: list[i],
    }; 
  }

 
  //We first split into individual characters
  // O(MN) M length of array
  list = list.map( (val, index) => {
    return {
      index,
      word: val.word.split('')
    };
  });
  
  // We sort each character individually
  // O(MNlogN)
  list.forEach((val, index) => {
    return {
      index,
      word: val.word.sort(sortChars),
    };
  });

  // We put all the character together
  // O(MN)
  list = list.map((val, index) => {
    let word = val.word.join('');
    return {
      index,
      word,
    };
  });

  // We sort each word 
  // O(NlogN)
  list.sort(sortString);
  let result = [];
  for (let i in list) {

    result.push(temp[list[i].index]);
  }

  console.log(result.join(' '));

  // Total runtime O(MNlogN) space O(N)
}

let str1 = 'cat dog tac god act';

group_anagrams(str1);

let str2 = 'abcd abc abce acd abdc';
group_anagrams(str2);


