'use strict';


// -------------------------------------------------
//
// All AJAX requests
// 
// -------------------------------------------------
const q = require('q');


const Request = {

	index: function(){

		let deferred = q.defer();
		let request = new XMLHttpRequest();


		// ------------------------------------------------
		// Set request
		//
		request.open('GET', 'data.json', true);


		// ------------------------------------------------
		// Onload
		//
		request.onload = function(){
			if (request.status >= 200 && request.status < 400){

				let data = JSON.parse(request.responseText);

				deferred.resolve(data);
			}
		};

		// ------------------------------------------------
		// OnError
		//
		request.onerror = function(err){
			deferred.reject(err);
		};

		// ------------------------------------------------
		// Send request
		//
		request.send();


		// ------------------------------------------------
		// Return promise
		//
		return deferred.promise;


	}

};


module.exports = Request;