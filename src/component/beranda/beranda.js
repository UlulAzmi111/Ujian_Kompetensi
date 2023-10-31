import React from "react";
import logo from "../../assets/logoooo.png";
import profil from '../../assets/profilwa.png';

const Beranda = () => {
  return (
    <div>

      <div className="row">
        <div className="col-4" style={{ background: "#8086FF", height: "90px" }}>
          <img src={logo} alt="" width={130} style={{ paddingTop: "10px", paddingLeft: "10px" }} />
        </div>
      <div className="pt-2 col-8 d-flex justify-content-start" style={{ background: "#8086FF", height: "90px" }}>
        <img src={profil} alt="" width={73}  height={75}/>
        <h5 className="pt-3" style={{ fontFamily:'Poppins', fontWeight:'600'}}>WA ChatIn <br /> <p style={{ fontFamily:'Poppins',fontWeight:'300', fontSize:'17px'}}>Last seen today at 9.10 PM</p></h5>
      </div>
      </div>

      <div className="row">
        <div className="col-4" style={{ background: "white", height: "617px" }}></div>
        <div className="col-8" style={{ background: "#DBDDFF", height: "617px" }}>
          <input type="text" class="form-control border border-secondary" placeholder="Message" style={{ marginTop:'560px', width:'500px', borderRadius:'15px'}}/>
        </div>
      </div>

    </div>
  );
};

export default Beranda;
