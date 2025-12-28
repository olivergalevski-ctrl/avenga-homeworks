function concateArrays(arr1, arr2){
   const result = [];
   for (let i = 0; i < arr1.length; i++){
    result[i] = `${i + 1}. ${arr1[i]} ${arr2[i]}`;    
}
return result;
}

const arr1 = ["Bob", "Jill"];
const arr2 = ["Gregory", "Wurtz"];
console.log(concateArrays(arr1, arr2));



