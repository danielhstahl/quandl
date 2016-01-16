Meteor.methods({
	quandl_auth: function(key){
		quandl.api_key = key;
		return 'success';
	}
});