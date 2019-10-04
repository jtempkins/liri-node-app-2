# liri-node-app-2
This repository replaces the original depository that was corrupt.
Liri
This app has no browser interface, it is strictly command line input The idea is that the user inputs a command to spotify-this-song <name of song>, movie-this <movie name>, concert-this <artist or band name> or do-what-says.
Installation
This app uses node.js, node-spotify-API, axios, moment and dotenv packages and separate key.js and random.txt files.
Usage
Liri returns a response for each input. I created a set of functions, one for each input.
Spotify input searches the Spotify API, returns: Artist, Song Name, Link to a preview of song, If no song input it defaults to "The Sign" by Ace of Base.
![spotify-this-song](https://user-images.githubusercontent.com/52681642/66181145-54b03500-e635-11e9-8c9f-9ef5e718646b.jpeg)
  
Movie input searches imbd API, returns: Title of movie, year movie came out, IMDB rating, country produced in, language, plot and actors.
 
Concert input searches Bands in Town Artist Events API, returns: venue name, venue location and date of event returned, using moment.js, date as format MM/DD/YYYY.
 
Do-what-it-says pulls the text from random.txt file and executes the spotify, movie or concert instruction and name to run the appropriate function.
 
Issues
Since this is a Bash command line only app it is not added to my portfolio.

