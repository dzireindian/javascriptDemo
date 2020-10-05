function countBs(str)
{
 var letter = 'B'
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(countBs('Books of BaBylonia'));

function countBs_custom(str,letter)
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
console.log(countBs_custom('Books of BaBylonia','o'));

var equality = function (x, y) {
  if (x === y) {
    return true;
  }
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var property in x) {
      if (y.hasOwnProperty(property))
      {
        if (! equality(x[property], y[property]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else
    return false;
}

console.log(equality({firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}))
