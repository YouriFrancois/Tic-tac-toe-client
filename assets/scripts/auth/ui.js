const store = require('../store')

const signUpSuccess =function(data){
$('#message').text('signed up succesfully')
$('#first-page').removeClass()
$('#first-page').addClass('notShow')
console.log("sign up data is"+data)
}

const signUpFailure =function(error){
$('#message').text('signed up fail')
$('#message').removeClass()
$('#message').addClass('failure')
console.log("sign up data is"+error)
}

const signInSuccess = function(data){
$('#message').text('signed in succesfully')
$('#first-page').removeClass()
$('#first-page').addClass('notShow')
$('#sec-page').removeClass()
console.log("sign up data is "+data)
store.user=data.user
}

const signInFailure =function(error){
$('#message').text('signed in fail')
$('#message').removeClass()
$('#message').addClass('failure')
console.log("sign in data is"+error)
}


module.exports = {
signUpFailure,
signUpSuccess,
signInSuccess,
signInFailure,
}
