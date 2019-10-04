require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var moment = require("moment")

var spotify = new Spotify(keys.spotify);



var command = process.argv[2];
console.log(command);

var artistSongMovie = process.argv.slice(3).join(" ") ;

switch (command) {
  case "spotify-this-song":
    mySpotify();
    break;

  case "movie-this":
    myMovie();
    break;

  case "concert-this":
    myConcert();
    break;

  case "do-what-it-says":
    doFromInput();
    break;

  default:
    console.log("Invalid Command");

};

function mySpotify(data) {

  var thisSearch = data;

  var searchTerm = artistSongMovie || "ace of base The Sign";

  spotify.search({ type: 'track', query: searchTerm }, function (err, data) {
    console.log(data.tracks.items[0].name);
    console.log(data.tracks.items[3].preview_url);
    console.log(data.tracks.items[0].album.name);
    });
  }
  

function myMovie() {
  
  var searchTerm = artistSongMovie || "Mr. Nobody";
    
  axios.get('http://www.omdbapi.com/?t=' + searchTerm + '&apikey=6e8b6a0').then
    (function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("Rating: " + response.data.imdbRating);
        console.log("Rotten: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        });
      }
    

  function myConcert(){
    
    var searchTerm = artistSongMovie;
      console.log(searchTerm, "What did we get?"); 
      axios.get('http://rest.bandsintown.com/artists/' + searchTerm + '/events?app_id=codingbootcamp')
      .then(function(response) {
            
        console.log(response.data[0].venue.name || "info not available");
          console.log(response.data[0].venue.city || "info not available");
            console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));
      });
    }
        
      function doFromInput(){
    fs.readFile("random.txt", "utf8", function(error, data) {    
      if(error) {  
        return console.log(error);
      }

      var dataArr = data.split(",");
      console.log(dataArr);
            
      if(dataArr[0] == "spotify-this-song")
            {  artistSongMovie = dataArr[1].trim();
              mySpotify();
            }
              
            
    else if(dataArr[0] == "movie-this") {
              artistSongMovie = dataArr[1].trim();
              console.log(artistSongMovie, "show me the movie");
              myMovie();
    } 
            
    else if(dataArr[0] == "concert-this") {
              artistSongMovie = dataArr[1].trim();
              //
              console.log(artistSongMovie, "show me the artist");
              myConcert();
    }          
            
  
  });
}