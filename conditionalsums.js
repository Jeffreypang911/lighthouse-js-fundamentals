
var total = 0

var conditionalSum = function(values, condition) {




  if (condition == "even") {
    i = 0
      if ((i < values.length) && (values[i] % 2 == 0)) {
        total + values[i]
          i++
      }
    else {
      i++
      }
    }




  else if (condition == "odd") {
    j = 0
      if ((j < values.length) && (values[i] % 2 ==1))  {
        total + values[i]
          i++
      }
    else {
      i++
      }
    }



  }

console.log(total)







console.log(conditionalSum([1, 2, 3, 4, 5], "even"))





