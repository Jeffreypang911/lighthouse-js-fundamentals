 var repeatNumbers = function(data) {


 for (var j = 0; j < (data.length); j++) {
    for (var i = 0; i < ((data[j])[1]); i++) {
      console.log (((data[j])[0]))

    }

  }
}
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
