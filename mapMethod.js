let mainArray=[1,2,3,4,5,6,7,8,9,90,80,70,60,50,40,30,20,20,10]
let MappedArray=mainArray.map(callbackFunction);
function callbackFunction(value,index,arr){
    return value.toString()
}
console.log(MappedArray);
