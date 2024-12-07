import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.searchInput.value.trim();
    if (onSearch) {
      onSearch(query);
    }
    navigate("/");
  };

  const handleHomeClick = () => {
    if (onSearch) {
      onSearch("");
    }
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3 fixed-top">
      <div className="container-fluid">
        {/* Logo Netflix-like */}
        <div className="d-flex align-items-center">
          <Link to="/" onClick={handleHomeClick} className="navbar">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Logo"
              style={{ height: "30px" }}
            />
          </Link>
        </div>



        {/* Search Form */}
        <form
          className="d-flex"
          onSubmit={handleSearch}
          style={{ maxWidth: "300px", marginLeft: "auto" }}
        >
          <input
            type="text"
            name="searchInput"
            className="form-control form-control-sm"
            placeholder="Rechercher"
            aria-label="Rechercher"
          />
          <button
            type="submit"
            className="btn btn-outline-light btn- ms-2 d-flex align-items-center"
          >
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;






























































// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';



// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//       <div className="container-fluid d-flex justify-content-between align-items-center">

//       <Link to="/">
//           <button className="btn btn-success">Accueil</button>
//         </Link>

//         <form className="d-flex mx-auto" style={{ flex: 1, justifyContent: 'center' }}>
//           <input
//             type="text"
//             className="form-control w-25"
//             placeholder="Rechercher"
//           />
//         </form>

//         <button className="btn btn-success">Favoris</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



