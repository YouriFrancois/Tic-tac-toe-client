

const isOver = function(arr){



    if ((arr[0] === 'X'||arr[0] === 'O' ) &&  arr[0] === arr[1]  &&  arr[1] === arr[2]  ) {  return  true }
else if( (arr[3] === 'X'||arr[3] === 'O')&& arr[3] === arr[4]  &&   arr[4] === arr[5]  ) { return true }
else if((arr[6] === 'X'||arr[6] === 'O' )&&  arr[6] === arr[7]  &&   arr[7] === arr[8]  ) {  return true }
       	//	   ---------------------------------------------------
  		//	Vertical
else if ( (arr[0] === 'X'||arr[0] === 'O' )&& arr[0] === arr[3]  &&   arr[3] === arr[6]  ) { return  true }
else if ( (arr[1] === 'X'||arr[1] === 'O' )&& arr[1] === arr[4]  &&   arr[4] === arr[7]  ) {return true }
else if ( (arr[2] === 'X'||arr[2] === 'O' )&& arr[2] === arr[5]  &&   arr[5] === arr[8]  ) {return true }
//  -----------------------------
//  Oblick
else if ( (arr[0] === 'X'||arr[0] === 'O' )&& arr[0] === arr[4]  &&   arr[4] === arr[8]  ) { return true }
else if ( (arr[2] === 'X'||arr[2] === 'O' )&& arr[2] === arr[4]  &&   arr[4] === arr[6]  ) { return   true }

return false

}

const draw = function(arr){
  for (let i = 0; arr.length>i;i++){
if (arr[i]==='') return false
  }

  return true

}
const erase= function(arr){
  for (let i = 0; arr.length>i;i++){arr[i]=''}
}

module.exports = {
isOver,
erase,
draw

}
