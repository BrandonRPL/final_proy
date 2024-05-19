import { useState } from 'react';
import Axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


function Create() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useNavigate();

  const addNew = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: name,
      password: password,
    }).then(() => {
      history('/sesion');
      Swal.fire({
        position: "center",
        icon: "success",
        title: "the employe " + name + " has been registed",
        showConfirmButton: true
        //timer: 1500
      });
    })
  }

    return (
    
<div className=" d-flex justify-content-center align-items-center vh-100">
    <div
      className="bg-white p-5 rounded-5 text-secondary shadow"
    >

      <div className="text-center fs-1 fw-bold">Create Account</div>
      <div className="input-group mt-4">
        <div className="input-group-text bg-info">
        </div>
        <input
          value={name}
          onChange={(event) => { setName(event.target.value) }}
          className="form-control bg-light"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="input-group mt-1">
        <div className="input-group-text bg-info">
        </div>
        <input
          value={password}
          onChange={(event) => { setPassword(event.target.value) }}
          className="form-control bg-light"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm" onClick={addNew}>
        Create
      </div>
    </div>
  </div>
    
    
        );
    }
    
    export default Create;