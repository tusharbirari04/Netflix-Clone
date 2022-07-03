import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Row  
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow></Row>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}></Row>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
