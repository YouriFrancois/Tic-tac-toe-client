
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require ('./api')



const onSignUp = function (event) {
  event.preventDefault()


  const data = getFormFields(event.target)

  api.signUp(data)

  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure)

}


const onSignIn = function (event) {
  event.preventDefault()


  const data = getFormFields(event.target)
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)


}

const onChangePassword = function (event) {
  event.preventDefault()


  const data = getFormFields(event.target)
  api.changePassword(data)
.then(ui.changePasswordSuccess)
.catch(ui.changePasswordFailure)
}



const onchangePwd = function(){
  ui.divPwd()
}

const onSignOut = function (event) {
  event.preventDefault()


  const data = getFormFields(event.target)
  api.signOut(data)
  .then(ui.signOutSuccess)
 .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
onChangePassword,

onchangePwd,
onSignOut
}
