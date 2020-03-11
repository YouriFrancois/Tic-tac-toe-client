

const isOver = function(arr){

console.log('this is arr '+arr)

    if ((arr[0] === 'X'||arr[0] === 'O' )&&  arr[0] === arr[1]  &&  arr[1] === arr[2]  ) { console.log('this is 1 '); return  true }
else if( (arr[3] === 'X'||arr[3] === 'O' )&& arr[3] === arr[4]  &&   arr[4] === arr[5]  ) {console.log('this is 2 '); return true }
else if((arr[6] === 'X'||arr[6] === 'O' )&&  arr[6] === arr[7]  &&   arr[7] === arr[8]  ) { console.log('this is 3 '); return true }
       	//	   ---------------------------------------------------
  		//	Vertical

else if ( (arr[0] === 'X'||arr[0] === 'O' )&&  arr[0] === arr[3]  &&   arr[3] === arr[6]  ) {console.log('this is 4 '); return  true }
else if ( (arr[1] === 'X'||arr[1] === 'O' )&& arr[1] === arr[4]  &&   arr[4] === arr[7]  ) {console.log('this is 5 ');return true }
else if ( (arr[2] === 'X'||arr[2] === 'O' )&& arr[2] === arr[5]  &&   arr[5] === arr[8]  ) {console.log('this is 6 ');return true }
//  -----------------------------
//  Oblick

else if ( (arr[0] === 'X'||arr[0] === 'O' )&& arr[0] === arr[4]  &&   arr[4] === arr[8]  ) {console.log('this is 7 '); return true }
else if ( (arr[2] === 'X'||arr[2] === 'O' )&& arr[2] === arr[4]  &&   arr[4] === arr[6]  ) {return console.log('this is 8 ');  true }

return false

}

const erase= function(arr){
  for (let i = 0; arr.length>i;i++){arr[i]=''}
}

module.exports = {
isOver,
erase

}
