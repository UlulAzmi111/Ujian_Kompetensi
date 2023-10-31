import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import IconLogin from "../../assets/iconlogin.png";
import IconTelepon from "../../assets/telepooon.png";
import './DaftarForm.css';
import logo from '../../assets/logoooo.png';

const DaftarForm = () => {
  return (
    <div className="screen" style={{ paddingTop:'70px', paddingBottom: "130px"}}>
      <div>
      <h1 className="text-center" style={{ fontFamily:'Poppins', fontWeight:'900', color:'#31059A'}}> Register Form</h1>
      <hr className="mx-auto" style={{ width: "300px", marginTop: "1px", marginBottom: "5px", borderWidth:'3px'}} />
      <p className="text-center" style={{ fontSize: "19px", fontFamily:'Poppins'}}>
         Sign up now to continue
      </p>
      <div className="row mx-auto justify-content-center pb-5" >
        <div className="col-6 border border-white bg-white shadow-lg p-3 mb-5 bg-body rounded" style={{ borderRadius: "17px" }}>
          <div className="row">
            <div className="col mt-5 ms-5 pb-5 pe-4 shadow p-3 mb-5 bg-body rounded">
              <h3 className="mt-4 text-center" style={{ fontFamily:"Roboto", fontWeight:"700"}}>SIGN UP</h3>
              <img src={IconLogin} width={120} className="mt-3 mx-auto d-block"/>
              <form action="">
                <div className="ms-3 mt-4">
                  <label class="form-label">Nama</label>
                  <input type="text" class="form-control"/>
                </div>
                <div className="ms-3 mt-4">
                  <label for="inputPassword4" class="form-label">Password</label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
              </form>
            </div>
            <div className="col ms-3" style={{ marginTop:'60px' }}>
            <img className="mx-auto d-block" src={logo} alt="" width={130} style={{ paddingBottom:'10px' }}/>
              <img src={IconTelepon} alt="" width={330} height={370}/>
            </div>
          </div>
          <div className="mt-1 mb-4 text-center" style={{ fontFamily:'Poppins' }}>
              <p>Already a member? <a href="/login" style={{ textDecoration:'none' }}>Login Here</a> </p>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DaftarForm;

// background: "#E7E6FF"

