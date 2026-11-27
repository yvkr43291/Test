let fruits = ["Apple", "Banana", "Mango", 10, 20];
let found = false;

function searchFruit(searchfruit) {
    
   for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === searchfruit) {
      found = true;
      break;
    }
}
    if(found === true){
        console.log(searchfruit + " is found in the array.");
      } 
      else{
        console.log(searchfruit + " is not found in the array.");
      }
}

searchFruit("sahoo");