import { Link, useNavigate } from 'react-router-dom'; 
import Axios from "axios";


function token(name, password, history) {
  Axios.post("http://localhost:3001/verifyUser", {

  name:name,
  password:password
 
  }).then((res) => {
      Axios.post("http://localhost:3001/login")
      .then((res) => {
        const tokenjwt = res.data.token; // Asegúrate de que la propiedad del token sea correcta
        localStorage.setItem('token', tokenjwt); // Guardar el token en localStorage
        history("/")
      })
      .catch((error) => {
        console.error('Error al obtener token:', error);
      });
    })
    .catch((error) => {
      console.error('Error al obtener token:', error);
    });

}


function Sesion() {
  const history = useNavigate();
  const handleLogin = () => {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    token(name, password, history);

  };

  return (

    <div className=" d-flex justify-content-center align-items-center vh-100">
      <div
        className="bg-white p-5 rounded-5 text-secondary shadow"
      >

        <div className="text-center fs-1 fw-bold">Login</div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-info">
          </div>
          <input
            className="form-control bg-light"
            type="text"
            id='name'
            placeholder="Username"
          />
        </div>
        <div className="input-group mt-1">
          <div className="input-group-text bg-info">
          </div>
          <input
            className="form-control bg-light"
            type="password"
            id='password'
            placeholder="Password"
          />
        </div>
        <div className="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm" onClick={handleLogin}>
          Login
        </div>
        <div className="d-flex gap-1 justify-content-center mt-1">
          <div>Don't have an account?</div>
          <Link className="nav-link text-decoration-none text-info fw-semibold" to="/sesion/create">Register</Link>
        </div>
      </div>
    </div>


  );
}

export default Sesion;