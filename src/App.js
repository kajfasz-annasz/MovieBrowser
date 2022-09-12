import './App.css';
import {useState, useEffect} from 'react';
import MoviesPostersList from './components/MoviesPostersList';

function App() {

  const [searchValue, setMessage] = useState('');
  const handleChange = event => setMessage(event.target.value);
  const [moviesList, setMoviesList] = useState([]);

  const movieRequest = async (searchValue) => {

    const apiKey = '145a9f78';
    const searchFixed = searchValue.split(' ').join('+');
		const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchFixed}`;

    const response = await fetch(url);
    const responseJSON = await response.json();

      if(responseJSON.Search)
      {
        setMoviesList(responseJSON.Search);
      }
      else {
        setMoviesList(null);
      }
	};

  useEffect(() => {
    const timer = setTimeout(() => {
      movieRequest(searchValue);
    }, 500);

    return () => clearTimeout(timer)
  }, [searchValue])

  return (
    <div className="d-flex flex-column min-vh-100 mainApp">

      <nav className="navbar navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <label className="navbar-brand ms-2">Movie Browser</label>
          <form className="d-flex w-50">
            <input className="form-control form-control-lg me-3" type="text" placeholder="Enter movie title..." onChange={handleChange} value={searchValue}/>
          </form>
        </div>
      </nav>

			<MoviesPostersList movies={moviesList}/>

      <div className='mb-3'/>

      <footer className="bg-dark mt-auto">
        <p className="text-center my-3">© 2022 Krzysztof Mazepa</p>
      </footer>

    </div>
  );
}

export default App;
