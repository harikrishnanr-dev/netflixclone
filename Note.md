  const APIKEY="47de2b9e8b2462b53975d18185ac40bf";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
}

  baseURL: "https://api.themoviedb.org/3",


//images
  const base_url = "https://image.tmdb.org/t/p/original/";

 fetchNetflixOriginals: https://api.themoviedb.org/3/discover/tv?api_key=47de2b9e8b2462b53975d18185ac40bf&with_networks=213


Pure function 
-------------
pure function always producesw the same output
-that means no matter how many times we call the function with same arguments
it always return the same result

function add(a,b){
return a+b;}
add(3,4)


- content inside the pure function doesnot change based on any external data that is coming  from API or state changes
-it has no side effects
eg: od side effects Api call read or write file IO operations
pure functions cannot be affected by any side effects




Use effect Hook