
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



module.exports = {
  onSignUp,
  onSignIn,
}
