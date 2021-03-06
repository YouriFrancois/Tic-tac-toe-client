'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/event')
const playEvents = require('./play/event')



$(() => {
  $("#sign-up").on('submit',authEvents.onSignUp)
  $("#sign-in").on('submit',authEvents.onSignIn)
  $("#play-div").on('click',playEvents.clickOn)
  $("#new-game").on('click',playEvents.restart)
  $("#change-password").on('submit',authEvents.onChangePassword)

  $("#change-pwd").on('click',authEvents.onchangePwd)
$("#sign-out").on('click',authEvents.onSignOut)
  $("#report").on('click',playEvents.report)
  

    $("#game-cpu").on('click',playEvents.vsCpu)
})
