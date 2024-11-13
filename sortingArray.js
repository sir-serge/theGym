// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
number=[2,-4,6,8,-3,11,-78]
//[78,4,3,-2,-6,-8,-11]
// convert a postive to negative vice virser
//sorting in decendind order
let covertArray=number.map((convert)=>convert*-1);
let SortedArray=covertArray.sort(sorting);
function sorting(a,b){
    return b-a
}
console.log(SortedArray);
