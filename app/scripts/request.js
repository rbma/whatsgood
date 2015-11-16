'use strict';


// -------------------------------------------------
//
// All AJAX requests
// 
// -------------------------------------------------
const q = require('q');
const $ = require('jquery');


const Request = {

	index: function(){

		let deferred = q.defer();

		$.ajax({
			url: 'data.json',
			type: 'GET',
			success: function(data){
				deferred.resolve(data);
			},
			error: function(res, status, err){
				console.log('DATA ERROR', status, err);
				deferred.reject(err);
			}
		});


		return deferred.promise;


	}

};


module.exports = Request;