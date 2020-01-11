function groupAnimals(animals) {
    // you can only write your code here!
    for(i=0; i<animals.length; i++) {
        for(j=0; j<animals.length; j++) {
            if(animals[j] > animals[j+1]) {
                var result = animals[j]
                animals[j] = animals[j+1]
                animals[j+1] = result
            }
        }
    }
    var result = [[]];
    var firstAnimals = animals[0]; 
    var index = 0;       
    for (var i=0; i<animals.length; i++) {
        var otherAnimals = animals[i]; 
        if (firstAnimals[0] === otherAnimals[0]) {    
            result[index].push(otherAnimals);
        } else if (firstAnimals[0] !== otherAnimals[0]) {
            index++                 
            result.push([]);
            result [index].push(otherAnimals);    
        }
        firstAnimals = otherAnimals;
    }
    return result;  
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]