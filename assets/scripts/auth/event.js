
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require ('./api')



const onSignUp = function (event) {
  event.preventDefault()

  console.log('Signing up')
  const data = getFormFields(event.target)
    console.log('after the data is = '+ data)
    
  api.signUp(data)

  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure)
  console.log('after end')
}


const onSignIn = function (event) {
  event.preventDefault()

  console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)


}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password')
  //console.log("change Passwor data is "+data.user.token)
  const data = getFormFields(event.target)
  api.changePassword(data)
.then(ui.changePasswordSuccess)
.catch(ui.changePasswordFailure)
}

const onCancelPwd = function(){
  ui.cancelPwd()
}

const onchangePwd = function(){
  ui.divPwd()
}

const onSignOut = function (event) {
  event.preventDefault()

  console.log('on Sign Out')
  const data = getFormFields(event.target)
  api.signOut(data)
  .then(ui.signOutSuccess)
 .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
onChangePassword,
onCancelPwd,
onchangePwd,
onSignOut
}
