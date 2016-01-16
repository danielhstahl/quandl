// Write your package code here!
Quandl=function(){
    var self=this;
    self.api_key="";
    self.url = "https://www.quandl.com/api/v3/datasets";
    self.getData=function(url){
        var headers = {
			'X-BFX-APIKEY': self.api_key
		};
        return HTTP.get(self.url+url, {headers:headers}); //does this work async?
    }
}
quandl=new Quandl();
console.log("quanld is now available");

