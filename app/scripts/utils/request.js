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
		request.open('GET', 'data.json', true);


		request.onload = function(){
			if (request.status >= 200 && request.status < 400){

				let data = JSON.parse(request.responseText);

				deferred.resolve(data);
			}
		};


		request.onerror = function(err){
			deferred.reject(err);
		};


		request.send();



		return deferred.promise;


	}

};


module.exports = Request;