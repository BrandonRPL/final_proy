import { Link } from 'react-router-dom';

function Sesion() {

    return (
    
<body class=" d-flex justify-content-center align-items-center vh-100">
    <div
      class="bg-white p-5 rounded-5 text-secondary shadow"
    >

      <div class="text-center fs-1 fw-bold">Login</div>
      <div class="input-group mt-4">
        <div class="input-group-text bg-info">
        </div>
        <input
          class="form-control bg-light"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="input-group mt-1">
        <div class="input-group-text bg-info">
        </div>
        <input
          class="form-control bg-light"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm">
        Login
      </div>
      <div class="d-flex gap-1 justify-content-center mt-1">
        <div>Don't have an account?</div>
        <Link className="nav-link text-decoration-none text-info fw-semibold" to="/sesion/create">Register</Link>
      </div>
    </div>
  </body>
    
    
        );
    }
    
    export default Sesion;