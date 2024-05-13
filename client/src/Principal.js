import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Axios from "axios";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'; 

function Principal() {

    const [listUsers, setUsers] = useState([])

    const getUsers = () => {
        Axios.get("http://localhost:3001/employes").then((res) => {
            setUsers(res.data);
        }).catch((error) => {
            console.error('Error al obtener usuarios:', error);
            return;
        });
    }
    getUsers();
    
    const createPurchase = (id) => {
        Axios.post("http://localhost:3001/shop/create", {
          id: id
        }).then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "<strong>Has been created, plis verify the shopping card or if you want continue shopping and verify later</strong>",
              showConfirmButton: true
              //timer: 1500
            });
          })
      }


    return (


        <section>
            <div className="row py-lg-5">
                <div className="d-flex justify-content-center">
                    <h1 className="fw-light h1 fw-bolder">Shopping Time</h1>
                </div>
                <div className="d-flex justify-content-around">

                    <div className=" mt-5 d-flex  justify-content-center ms-5" >
                        <div className="ms-5 d-flex flex-column bd-highlight justify-content-center">
                            <img className="w-75" src="https://http2.mlstatic.com/D_NQ_NP_943603-MLA73950797940_012024-O.webp" alt="Descripción de la imagen" />
                            <h3 className="ms-4">Xiaomi Pocophone M6</h3>
                        </div>
                        <div>
                            <img className="w-75" src="https://http2.mlstatic.com/D_NQ_NP_801591-MLA74802964793_022024-O.webp" alt="Descripción de la imagen" />
                            <h3 className="ms-5 ">Honor Magic5 Lite</h3>
                        </div>
                        <div>
                            <img className="w-75" src="https://http2.mlstatic.com/D_NQ_NP_618019-MLA74954296789_032024-O.webp" alt="Descripción de la imagen" />
                            <h3 className="ms-5">Infinix Hot 40</h3>
                        </div>
                    </div>
                </div>
            </div>


            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            listUsers.map((val, key) => {
                                return (
                                    <div className="col" key={val.id}>
                                        <div className="card shadow-sm">
                                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                <title>Placeholder</title>
                                                <image href={val.image} width="100%" height="100%" />
                                            </svg>

                                            <div className="card-body">
                                                <p className="card-text  fw-bolder">{val.description}</p>
                                                <p className="card-text fs-3 ms-3" >$ {val.price} </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex justify-content-around btn-group w-100">
                                                        <button type="button" className="btn btn-sm btn-outline-danger" onClick={function toast() {
                                                            Swal.fire({
                                                                title: "<strong>¿Deseas comprar?</strong>",
                                                                icon: "info",
                                                                html: `
                                                                    <img className="w-75" src="${val.image}" alt="Descripción de la imagen" />         
                                                                    <p className="card-text  fw-bolder">${val.description}</p>
                                                                    <p className="card-text fs-3 ms-3" >$ ${val.price} </p>
        
                                                                         `,
                                                                showCloseButton: true,
                                                                showCancelButton: true,
                                                                focusConfirm: false,
                                                                confirmButtonText: `
                                                                      Comprar
                                                                    `,
                                                                confirmButtonAriaLabel: "Thumbs up, great!",
                                                                cancelButtonText: `
                                                                      Cancel
                                                                    `,
                                                                cancelButtonAriaLabel: "Thumbs down"
                                                                
                                                            }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                    createPurchase(val.id)
                                                                  } else if (result.isDenied) {
                                                                    Swal.fire("Changes are not saved", "", "info");
                                                                  }
                                                            });
                                                        }}>Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Principal;