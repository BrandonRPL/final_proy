import { useState } from 'react';
import Axios from "axios";
import Swal from 'sweetalert2'


function Create() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const addNew = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      password: password,
    }).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "the employe " + name + " has been registed",
        showConfirmButton: true
        //timer: 1500
      });
    })
  }

    return (
    
<body class=" d-flex justify-content-center align-items-center vh-100">
    <div
      class="bg-white p-5 rounded-5 text-secondary shadow"
    >

      <div class="text-center fs-1 fw-bold">Create Account</div>
      <div class="input-group mt-4">
        <div class="input-group-text bg-info">
        </div>
        <input
          value={name}
          onChange={(event) => { setName(event.target.value) }}
          class="form-control bg-light"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="input-group mt-1">
        <div class="input-group-text bg-info">
        </div>
        <input
          value={password}
          onChange={(event) => { setPassword(event.target.value) }}
          class="form-control bg-light"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm" onClick={addNew}>
        Create
      </div>
    </div>
  </body>
    
    
        );
    }
    
    export default Create;