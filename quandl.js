// Write your package code here!
QuandlDB=new Mongo.Collection("quandl");
QuandlDB.rawCollection().ensureIndex({Date:1, DataSet:1}, {unique:true}, function(err){});
Quandl=function(){
    
    var self=this;
    self.api_key="";
    self.url = "https://www.quandl.com/api/v3/datasets";
    //self.column_names=[];
    self.getData=function(url){
        var headers = {
			'X-BFX-APIKEY': self.api_key
		};
        var data=HTTP.get(self.url+url, {headers:headers}); //does this work async?
        var column_names=data.column_names;
        var dataset=data.dataset.dataset_code;
        data=data.data;
        var n=data.length;
        var m=column_names.length;
        for(var i=0; i<n; i++){
            var obj={};
            for(var j=0; j<m;j++){
                obj[column_names[j]]=data[i][j];
            }
            obj.DataSet=dataset;
            quandlData.insert(obj);
        }
    }
}
quandl=new Quandl();
console.log("quanld is now available");