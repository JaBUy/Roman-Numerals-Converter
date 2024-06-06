function convertToRoman(num) {

  const romanNumeralsObject = {"M" : 1000, "CM" : 900, "D" : 500, "CD" : 400, "C" : 100, "XC" : 90, "L" : 50, "XL" : 40, "X" : 10, "IX" : 9, "V" : 5, "IV" : 4, "I" : 1}

  let result = "";
  let romanEntries = Object.entries(romanNumeralsObject);

  for (let i = 0; i < romanEntries.length; i++) {
    while (num >= romanEntries[i][1]) {
      result += romanEntries[i][0];
      num -= romanEntries[i][1];
    }
  }

  return result;

}
