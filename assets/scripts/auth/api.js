const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  console.log('In api.js')

  return $.ajax({
    url: config.apiUrl +`/sign-up`,
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  console.log('In api.js')

  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

module.exports = {
signUp,
  signIn,
}
