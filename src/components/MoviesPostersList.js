
import React from 'react';

const MoviesPostersList = (props) => {

    if (!props.movies)
    {
        return;
    }

    const actionBuy = "buy";
    const actionInfo ="info";

	return (
		<>
			{props.movies.map((movie, key) => (
				<div key={key} className='rowContainer d-flex flex-row align-items-center mx-4 mt-3'>
                    <div>
                        <img className="imageContainer" src={movie.Poster} alt=""/>
                    </div>
                    <div className="infoContainer me-3">
                        <div>Title: {movie.Title}</div>
                        <div>Release date: {movie.Year}</div>
                        <div>Type: {movie.Type}</div>
                        <div>
                            <button id="buy" onClick={() => { redirect(movie.Title, movie.Year, actionBuy) }} type="button" className="btn btn-success mt-2">Buy now!</button>
                        </div>
                        <div>
                            <button id="info" onClick={() => { redirect(movie.Title, movie.Year, actionInfo) }} type="button" className="btn btn-info mt-2">More information!</button>
                        </div>
                    </div>
				</div>
                
			))}
		</>
	);
};

function redirect(title, year, action) {

    var titleFix = title.split(' ').join('+').split('?').join('');
    var url = null;

    if(action === "buy")
    {
        url = `https://www.amazon.pl/s?k=${titleFix}+${year}&i=movies-tv`; 
    } 
    else {
        url = `https://www.google.pl/search?q=${titleFix}+${year}&i=movies-tv`;
    }

    console.log(url);

    window.open(url, '_blank');
}

export default MoviesPostersList;