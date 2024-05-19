import { Outlet } from "react-router-dom";
import { Link,useNavigate } from 'react-router-dom';

function NavBar() {
  const navegate = useNavigate();
  const clearToken = () => {
    navegate("/sesion");
    localStorage.removeItem('token'); // Eliminar el token de localStorage
    console.log('Token eliminado');
  }
return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid ">
      <Link className="nav-link navbar-brand" to="/">Shopping Time</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">StartPage</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/sesion">Login</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/admin">Edit</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={clearToken}>logOut</a>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-row-reverse">
        <ul className="navbar-nav">
            <li className="nav-item me-5 ">
                <a className="nav-link ms-auto bd-highlight" href="/shop">Carrito</a>
            </li>
        </ul>
       </div>
    </div>
    
  </nav>
  <div id="detail">
        <Outlet />
  </div>
  </>

    );
}

export default NavBar;