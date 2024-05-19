
import { useState } from 'react';
import Axios from "axios";
import Swal from 'sweetalert2'


function Shop() {

  const [listUsers, setUsers] = useState([]);
  let total = 0;
  let tokenjwt=''



  const getUsers = () => {
    Axios.get("http://localhost:3001/shopping").then((res) => {
      setUsers(res.data);
    }).catch((error) => {
      console.error('Error al obtener usuarios:', error);
      return;
    });
  }
  getUsers();

  return (
    <>
      {listUsers.map((val, index) => {
        return (

          <div className="col" key={index}>
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <image href={val.image} width="100%" height="100%" />
              </svg>

              <div className="card-body ">
                <p className="card-text  fw-bolder">{val.description}</p>
                <p className="card-text fs-3 ms-3" >$ {val.price} </p>
                <h2 class="visually-hidden">{total = total + val.price}</h2>
              </div>
            </div>
          </div>


        )
      })}
      <div className="d-flex justify-content-center mt-5">
        <div className='d-flex flex-column mt-5' >
          <h1> El Total a pagar es ${total}</h1>
          <button type="button" className="btn btn-outline-success mt-5 mb-5" onClick={function toast() {
            Swal.fire({
              title: "<strong>Lamentablemente esta opcion no se encuentra disponible</strong>",
              icon: "info",
              showCloseButton: true,
              focusConfirm: false,
              confirmButtonText: `ok`,
              confirmButtonAriaLabel: "Thumbs up, great!",

            })
          }}>Comprar</button>
        </div>
      </div>
    </>
  );

}

export default Shop;