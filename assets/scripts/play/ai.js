

const aiMove = function(arr){
let ran =''

if(arr[4]===''){return 4}
else if(arr[0]===''){return 0}
else if(arr[2]===''){return 2}
else if(arr[6]===''){return 6}
else if(arr[8]===''){return 8}
else {
const ar1 =  arr.findIndex(num=> num==="")
console.log(" ar1 "+ar1)
 return ar1

}


}


module.exports = {
aiMove

}
