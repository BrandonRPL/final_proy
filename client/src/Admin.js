import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

function Admin() {



  const history = useNavigate();
  const [allUsersLoaded, setAllUsersLoaded] = useState(false);
  const [listUsers, setUsers] = useState([])
  let image = '';
  let description = '';
  let price = '';
  let imageC = '';
  let descriptionC = '';
  let priceC = '';

  const getUsers = () => {

    const storedToken = localStorage.getItem('token');
    Axios.get("http://localhost:3001/employes", {
      headers: {
        Authorization: `Bearer ${storedToken}` // Agregar el token en el encabezado de autorización
      }
    }).then((res) => {
      if (res.data.length === 0) {
        setAllUsersLoaded(true);
      } else {
        setUsers(res.data);
      }
    }).catch((error) => {
      history('/sesion');
      console.error('Error al obtener usuarios:', error);
      return;

    });
  }
  useEffect(() => {
    if (!allUsersLoaded) {
      getUsers();
    }
  }, [allUsersLoaded]);

  const updateProduct = (id, image, description, price) => {
    Axios.put("http://localhost:3001/admin/update", {
      id: id,
      image: image,
      description: description,
      price: price
    }).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "<strong>Modificated</strong>",
        showConfirmButton: true
        //timer: 1500
      });
    })
  }
  const createProduct = (image, description, price) => {
    console.log(image,price,description, "asdasd  ")
    Axios.post("http://localhost:3001/createProduct", {
      image: image,
      description: description,
      price: price
    }).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "<strong>Created</strong>",
        showConfirmButton: true
        //timer: 1500
      });
    })
  }
  const deleteProduct = (val) => {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure to delete " + val.description + "?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      history("/")
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/delete/${val.id}`).then(() => {
          swalWithBootstrapButtons.fire({
            title: "Deleted! ",
            text: "Your file has been deleted.",
            icon: "success"
          });
        });

      } else {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          icon: "error",
          showConfirmButton: true
        });
      }
    });

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
            <div className='d-grid'>
              <button className='btn btn-outline-dark' onClick={function createPro() {
                Swal.fire({
                  title: "<strong>¿Deseas comprar?</strong>",
                  icon: "info",
                  html: `
                  <p  className="card-text  fw-bolder">image</p>
                  <input id="image" type="text" class="form-control mt-2" placeholder=" image link's">
                  <p className="card-text  fw-bolder">Description</p>
                  <input type="text" id="description" class="form-control"  placeholder="description">
                  <p className="card-text  fw-bolder">Price</p>
                  <input type="text" id="price" class="form-control" placeholder="price"> `,
                  preConfirm: () => {
                    return [
                      imageC = document.getElementById('image').value,
                      descriptionC = document.getElementById('description').value,
                      priceC = document.getElementById('price').value,
                    ]
                  },
                  showCloseButton: true,
                  showCancelButton: true,
                  focusConfirm: false,
                  confirmButtonText: `created`,
                  confirmButtonAriaLabel: "Thumbs up, great!",
                  cancelButtonText: `Cancelated`,
                  cancelButtonAriaLabel: "Thumbs down"
                })
                  .then((result) => {
                    if (result.isConfirmed) {
                      createProduct(imageC, descriptionC, priceC)
                      Swal.fire("created!", "", "success");
                    } else if (result.isDenied) {
                      Swal.fire("not created", "", "info");
                    }
                  })
                  ;
              }}><h1>Click to Create a new product</h1></button>
            </div>
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
                            <button type="button" className="btn btn-sm btn-outline-primary" onClick={function show() {
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
                                confirmButtonText: `Comprar`,
                                confirmButtonAriaLabel: "Thumbs up, great!",
                                cancelButtonText: `Cancel`,
                                cancelButtonAriaLabel: "Thumbs down"
                              });
                            }}>Buy</button>
                            <button type="button" className="btn btn-sm btn-outline-success" onClick={function edit() {
                              Swal.fire({
                                title: "<strong>¿Deseas comprar?</strong>",
                                icon: "info",
                                html: `
                                <img className="w-75" src="${val.image}" alt="Descripción de la imagen" />
                                 <p  className="card-text  fw-bolder">image</p>
                                 <input id="image" type="text" class="form-control mt-2" value="${val.image}">
                                 <p className="card-text  fw-bolder">Description</p>
                                 <input type="text" id="description" class="form-control" value="${val.description}">
                                 <p className="card-text  fw-bolder">Price</p>
                                 <input type="text" id="price" class="form-control" value="${val.price}"> `,
                                preConfirm: () => {
                                  return [
                                    image = document.getElementById('image').value,
                                    description = document.getElementById('description').value,
                                    price = document.getElementById('price').value,
                                  ]
                                },
                                showCloseButton: true,
                                showCancelButton: true,
                                focusConfirm: false,
                                confirmButtonText: `Modify`,
                                confirmButtonAriaLabel: "Thumbs up, great!",
                                cancelButtonText: `Cancelated`,
                                cancelButtonAriaLabel: "Thumbs down"
                              })
                                .then((result) => {
                                  if (result.isConfirmed) {
                                    updateProduct(val.id, image, description, price)
                                    Swal.fire("Saved!", "", "success");
                                  } else if (result.isDenied) {
                                    Swal.fire("Changes are not saved", "", "info");
                                  }
                                })
                                ;
                            }}>Edit</button>
                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => { deleteProduct(val); }}>Delete</button>
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

export default Admin;