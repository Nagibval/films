import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const HomePage = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // Pour indiquer si une recherche est en cours
  const Access_key = "9ba41e18ff6ca772c212278b33d6d33e";

  const fetchTrending = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${Access_key}`
      );
      const data = await response.json();
      setMovies(data.results);
      setIsSearching(false); // Pas en mode recherche pour les tendances
    } catch (error) {
      console.error("Erreur lors de la récupération des films :", error);
    }
  };

  const searchMovies = async (query) => {
    try {
      if (!query) {
        fetchTrending(); // Si pas de recherche, afficher les films tendances
        return;
      }
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${Access_key}&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();
      setMovies(data.results);
      setIsSearching(true); // En mode recherche
    } catch (error) {
      console.error("Erreur lors de la recherche de films :", error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery); // Recherche si une requête est fournie
    } else {
      fetchTrending(); // Sinon, afficher les films tendances
    }
  }, );

  return (
    <div className="container py-4">
      <div className="row g-4">
        <h3 className="text-light text-center">A l&apos;affiche en ce moment !</h3>
        {movies.map((film) => (
          <div
            className="col-6 col-sm-4 col-md-3 py-3 d-flex justify-content-center g-4"
            key={film.id}
          >
            <div className="card bg-dark">
              {film.poster_path ? (
                <Link to={`/movie/${film.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                    className="card-img-top"
                    alt={film.title}
                  />
                </Link>
              ) : (
                <p className="card-text text-center">Aucune image disponible</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {movies.length === 0 && (
        <p className="text-center text-white">
          {isSearching ? "Aucun film trouvé" : "Chargement..."}
        </p>
      )}
    </div>
  );
};

export default HomePage;
















































// import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   const [state, setState] = useState([]);

//   const Access_key = "9ba41e18ff6ca772c212278b33d6d33e";

//   const fetchTrending = async () => {
//     try {
//       const data = await fetch(
//         `https://api.themoviedb.org/3/trending/movie/week?api_key=${Access_key}`
//       );
//       const dataJ = await data.json();
//       setState(dataJ.results);
//     } catch (error) {
//       console.error("Erreur lors de la récupération des films :", error);
//     }
//   };

//   useEffect(() => {
//     fetchTrending();
//   }, []);

//   return (
//     <div className="container py-4">
//       <div className="row g-4">
//         {state.map((film) => (
//           <div className="col-6 col-sm-4 col-md-3 py-3 d-flex justify-content-center g-4" key={film.id}>
//             <div className="card bg-dark">
//               {film.poster_path  ? (
//                 <Link to={`/movie/${film.id}`}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
//                   className="card-img-top"
//                 />
//                 </Link>
//               ) : (
//                 <p className="card-text text-center">Aucune image disponible</p>
//               )}
              
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default HomePage;

