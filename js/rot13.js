
function rot13(str) { // LBH QVQ VG!
  var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  /* First convert the letter into it's converted letter. To do that, I have to figure out a
  way of getting the letters to match up to their 13th letter, backwards and forwards.
  */
  
  /* So, if any number greater than 13 will actually start from the beginning, then I just have to come up with a 
  formula that can find it's corresponding number the opposite way. So, essentially, it could just be - 13. 
  */  
  var decodedCipher = [];
  var strArr = str.split("");
  
  
  for (var i = 0; i < strArr.length; i++) {
    
    var letterIndex = arr.indexOf(strArr[i]);
    
    if (letterIndex !== -1) {
      if (letterIndex < 13) {
        decodedCipher.push(arr[letterIndex + 13]);
      } else {
        decodedCipher.push(arr[letterIndex - 13]);
      }
    } else {
      decodedCipher.push(strArr[i]);
    }
  }
  
  console.log(decodedCipher);
  
  return decodedCipher.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
