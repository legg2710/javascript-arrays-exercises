
let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

var myFunction = function(num){
    if (num == 0){
        return "woko";
    } else if (num ==1) {
        return "wiki"
    }
}
 var newArray = theBools.map(myFunction);
 console.log(newArray);