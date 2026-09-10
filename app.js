//method of objact[keys,valus,assign]
let arr1=[1,2,33,4,9,[6,9,8]]
let arr2=JSON.stringify(arr1)
arr2.push(7)
arr2[5][0]=88;
console.log(arr1)
console.log(arr2)