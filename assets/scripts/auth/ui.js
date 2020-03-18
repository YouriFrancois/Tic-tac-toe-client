const store = require('../store')

const signUpSuccess =function(data){
$('#message').text('signed up succesfully')
$('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')

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

store.user=data.user

$('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
}

const signInFailure =function(error){
$('#message').text('signed in fail')
$('#message').removeClass()
$('#message').addClass('failure')
console.log("sign in data is"+error)
}

const changePasswordSuccess = function(data){
$('#message').text('password chnage succesfully')
$('#message').removeClass()
$('#message').addClass('Otil')
$('#sec-page').removeClass()
$('#div-password').removeClass()
$('#div-password').addClass('notShow')


$('#change-password').closest('form').find('input[type=password], textarea').val('')

}

 const changePasswordFailure  =function(error){

$('#message').html('<h2> ** change password fail **</h2>')
$('#message').removeClass()
$('#message').addClass('Xtil')

console.log("sign in data is"+error)
}


const divPwd = function (){
  $('#message').html('<h3> ** change password  **</h3>')
  $('#div-password').removeClass()
  $('#sec-page').removeClass()
$('#play-div').addClass('notShow')
  $('#first-page').addClass('notShow')
  $('#div-report').addClass('notShow')

}

const signOutSuccess = function (){
  $('#message').text('sign out succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
$('#div-report').addClass('notShow')
$('#div-password').addClass('notShow')
  $('#sec-page').addClass('notShow')
  $('#first-page').removeClass()
}

const signOutFailure = function(){
  $('#message').html('<h2>sign out fail</h2>')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
signUpFailure,
signUpSuccess,
signInSuccess,
signInFailure,
changePasswordSuccess,
changePasswordFailure,

divPwd,
signOutSuccess,
signOutFailure,
}
