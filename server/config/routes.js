// this is our routes.js file located at /server/config/routes.js
// this file processes get and post requests from the factories
// routes will then call on the server controller functions

// this file will be called on by the main server.js file and it will be passed the app variable. 

// the routes.js file must require all of the server controllers("the exact route from the base file") in order to call upon their functions

/*

var users = require(./../controllers/usersAngCtrl.js)

module.exports = function(app){
	app.get('/getUsers', function(request, response){
		users.show(request,response);
	})
}


*/