function stringRotation(s1, s2) {
  if (s1.length !== s2.length || s1.length <= 0) {
    return false;
  }
  bigStr = s1 + s1

  return isSubstring (bigStr, s2);
}

function isSubstring (s1, s2) {
  return s1.indexOf(s2) >= 0 ? true: false
}


console.log(stringRotation("waterbottle", "erbottlewat"))
console.log(stringRotation("camera", "macera"))
console.log(stringRotation("apple", "pleap"))
