let matrix = [];
function matrixBuilder(integer){
    for (let i = 0; i<integer; i++){
        let ar = new Array(integer);
        matrix.push(ar);
        for(let e=0; e<integer;e++){
            let binary = Math.floor(Math.random()*2+1);
         
            if (binary === 2){
                ar[e]=1;
            } else {
                ar[e]=1;
            }
        }
    }
    console.log(matrix);
}
// do not change anything from this line down
console.log(matrixBuilder(5));