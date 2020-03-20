
//**************************************************************

the user will be able to sign up after they register with their email and pasword
the user will be able to sign in after the sign up
once the user sign in they can play new game with an other person
or they can click game-cpu where they will play against a bot
they can click report button to see how many game they play and total game over
they can click change password to change their password
the last button is log out button it will return you to the login screen

//******************************************************************
I used
JavaScript
jQuery
game API
HTML
SCSS (Sass)
AJAX
Bootstrap
// ****************************************************************


for my tic tac toe project i start with the html i create two form one for sign up
the other is for sign in which will get you inside the game the way it work is
as long you have an account is you will be connected to the api the api keep
track of the user
for the game i use bootstrap  to create a grid of div  that is 3X3 and give them
an id from o to 8
with the id i create an array the represent the html grid so each div match
with the array from there i have a boolean that when is true it return x
when it is false it return o and i just store those value in the array
so when i create a new game it send a request game api and the game api just
save the object from
