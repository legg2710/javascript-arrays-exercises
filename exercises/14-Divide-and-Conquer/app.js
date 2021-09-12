let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

function mergeTwoList (list) {
    let odd = [];
    let even = [];
    let newList = [];
    for (let i=0; i<list.length; i++) {
        if (list[i]%2 === 0) {
            even.push(list[i]);
        } else {
            odd.push(list[i]);
        }
    }
    for (let i=0; i<odd.length; i++) {
        newList.push(odd[i]);
    }
    for (let i=0; i<even.length; i++) {
        newList.push(even[i]);
    }
    return newList;
}

console.log(mergeTwoList(list_of_numbers))