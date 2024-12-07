import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const Access_key = "9ba41e18ff6ca772c212278b33d6d33e";

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${Access_key}`
                );

                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails du film :", error);
            }
        };

        const fetchMovieCast = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Access_key}`
                );
                const data = await response.json();
                setCast(data.cast);
            } catch (error) {
                console.error("Erreur lors de la récupération du casting :", error);
            }
        };


        fetchMovieDetails();
        fetchMovieCast();

    }, [id]);

    if (!movie) {
        return <p className="text-center text-white">Chargement...</p>;
    }

    return (
        <div className="container my-5 text-white">
            
            <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid rounded mx-auto d-block"
                
            />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p><strong>Note :</strong> {movie.vote_average} / 10</p>
            <p><strong>Date de sortie :</strong> {movie.release_date}</p>
            <p><strong>Popularité : </strong>{movie.popularity}</p>

            <h2 className="mt-5">Casting</h2>
            <div className="row">
                {cast.slice(0, 15).map((actor) => ( // Limiter à 10 acteurs (modifiable)
                    <div className="col-md-3 col-sm-4 py-3 text-center" key={actor.id}>
                        <img
                            src={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                                    : "https://via.placeholder.com/150?text=Aucune+Image"
                            }
                            alt={actor.name}
                            className="img-fluid rounded-circle mb-2"
                        />
                        <p><strong>{actor.name}</strong></p>
                        <p className="">{actor.character}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Details;