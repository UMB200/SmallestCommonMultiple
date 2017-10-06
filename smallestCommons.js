function smallestCommons(arr) {
  var placeHolderArray =[];
  arr.sort(function (a, b){ //sort given array in descending order
    return b-a;
  } );
  //loop through all possible values of the given array 
  //starting from the 1st element and limiting till the last value of the given array
  for (var i =arr[0]; i >=arr[arr.length-1]; i--){
    //add found values to placeHolderArray which will be  sorted array of initially given values
    placeHolderArray.push(i);
  }
  var foundValuetoHold =1;  //variable for placeHolderArray to loop through possible values till  LCM is found
  var lowestCM= 0; //lowest common multplier
  //loop through values to find lcm
  var tempV; // temp value for loop, declared outside since loop is 2 level
  do{
    //multiply the 1st element of sorted array to the interim value of the LCM to the 2nd element og the sotted array. Then we loop through aray till LC is found
    lowestCM = placeHolderArray[0] * foundValuetoHold * placeHolderArray[1];
    for (tempV = 2; tempV < placeHolderArray.length; tempV++){
      if(lowestCM % placeHolderArray[tempV] !==0){
        break;
      }
    }
    foundValuetoHold++; //increcmentin while LCM is not found
  }
  while (tempV !== placeHolderArray.length); // tempV should not increase length of the sorted array
  return lowestCM;
}
smallestCommons([1,5]);