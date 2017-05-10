"use strict"; //currently don't care about using function form of use strict

//IIFE
//Main module.
var mainModule=(function(modules){ 
    
    var riotAPIKey="19787c7d-896d-4b70-b611-9505242f66d3"; //api key for riot games
    
    //TO-DO: See if ajax is actually needed here, or if I can do something different here
    function init()
    {
        document.querySelector("#testSearchLaunch").onclick=(function(){return getInfo("#testSearchInput");});
    };
    
    function getInfo(target)
    {
        var champName=prepareInput(target);
        if(champName.length < 1) return;
        
        champName=encodeURI(champName);  
        
        prepChampInfoRequest(champName);
    };
    
    //Trims input parameters for a request
    function prepareInput(target)
    {
       // console.log(document.querySelector(target).value);
        var searchedID=document.querySelector(target).value;
        searchedID=searchedID.trim();
        //console.log(searchedID);
        return searchedID;
    };
    
    function prepChampInfoRequest(champName)
    {
        var request_url="https://na1.api.riotgames.com/lol/static-data/v3/champions/420?locale=en_US&champData=all&api_key=19787c7d-896d-4b70-b611-9505242f66d3";
        
        $.ajax({
		  dataType: "json", //jsonp seems to be nonfunctional at the moment; will use later.
		  url: request_url,
		  data: null,
		  success: getChampInfo
		});
    };
    
    function getChampInfo(obj)
    {
        if(obj.error){
			var status = obj.status;
			var description = obj.description;
            console.log("Error! Status: "+status+". Description: "+description);
			return; // Bail out
		}
        //console.log("League Info Loaded!");
        
        // if there are no results, print a message and return
		if(obj.total_items == 0){
			var status = "No results found";
            //console.log("Status: "+status);
			return; // Bail out
		}
        
        document.querySelector("#resultBar").innerHTML=JSON.stringify(obj);
        
    };
    
    
    
    
    
    window.addEventListener("load",init);
    
    
    
    
    return modules; })(mainModule || {});