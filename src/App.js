import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './request'; 

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row  title= "Trending" fetchUrl={requests.fetchTrending}/>    
      <Row  title= "Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>    
      <Row  title= "Top Rated" fetchUrl={requests.fetchTopRated}/>    
      <Row  title= "Action" fetchUrl={requests.fetchActionMovies}/>    
      <Row  title= "Romance" fetchUrl={requests.fetchRomanceMovies}/>    
      <Row  title= "Comedy" fetchUrl={requests.fetchComedyMovies}/>    
      <Row  title= "Documentaries" fetchUrl={requests.fetchDocumentaries}/>    
      <Row  title= "Horror" fetchUrl={requests.fetchHorrorMovies}/>          
    </div>
  );
}

export default App;
