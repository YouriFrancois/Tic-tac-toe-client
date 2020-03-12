

const sendData= function( ind,val,over){

return {
  "game": {
    "cell": {
      "index": ind,
      "value": val
    },
    "over":over
  }
}

}

module.exports = {
  sendData,
}
