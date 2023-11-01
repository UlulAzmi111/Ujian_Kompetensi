import React from "react";
import logo from "../../assets/logoooo.png";
import profil from "../../assets/profilwa.png";

const Beranda = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4" style={{ background: "#8086FF", height: "90px" }}>
          <img src={logo} alt="" width={130} style={{ paddingTop: "15px", paddingLeft: "15px" }} />
        </div>
        <div className="col-8" style={{ background: "#8086FF", height: "90px" }}>
        </div>
      </div>

      <div className="row">
        <div className="col-4" style={{ background: "white", height: "430px" }}>
          <div className="row mt-4 mb-3">
            <input type="text" class="col-10 ms-5 form-control" placeholder="Another User" style={{ width: "300px" }} />
            <button type="button" class="col-2 ms-2 btn btn-outline-secondary" style={{ borderRadius: "25px" }}>
              Submit
            </button>
          </div>

          <div style={{ cursor:'pointer' }}>
            <a href="/chat" style={{ textDecoration:'none', color:'black'}}>
            <img className="ms-2" src={profil} alt="" width={73} height={75} style={{ float: "left" }} />
            <h5 className="pt-3 border-bottom border-secondary" style={{ fontFamily: "Poppins", fontWeight: "600" }}>
              Perusahaan ChatIn <br />{" "}
              <p className="mt-2" style={{ fontFamily: "Poppins", fontWeight: "300", fontSize: "16px" }}>
                Baik pak, terima kasih. Saya akan datang tepat waktu.
              </p>
            </h5>
            </a>
          </div>

          <div style={{ cursor:'pointer' }}>
            <img className="ms-2" src={profil} alt="" width={73} height={75} style={{ float: "left" }} />
            <h5 className="pt-3 border-bottom border-secondary" style={{ fontFamily: "Poppins", fontWeight: "600" }}>
              Feysa
              <br />{" "}
              <p className="mt-2" style={{ fontFamily: "Poppins", fontWeight: "300", fontSize: "16px" }}>
                Ikut ta ke rumahku?
              </p>
            </h5>
          </div>

          <div style={{ cursor:'pointer' }}>
            <img className="ms-2" src={profil} alt="" width={73} height={75} style={{ float: "left" }} />
            <h5 className="pt-3 border-bottom border-secondary" style={{ fontFamily: "Poppins", fontWeight: "600" }}>
              Alfath <br />{" "}
              <p className="mt-2" style={{ fontFamily: "Poppins", fontWeight: "300", fontSize: "16px" }}>
                Nitip buku di meja kamu tadi
              </p>
            </h5>
          </div>

          <div style={{ cursor:'pointer' }}>
            <img className="ms-2" src={profil} alt="" width={73} height={75} style={{ float: "left" }} />
            <h5 className="pt-3 border-bottom border-secondary" style={{ fontFamily: "Poppins", fontWeight: "600" }}>
              Ulul <br />{" "}
              <p className="mt-2" style={{ fontFamily: "Poppins", fontWeight: "300", fontSize: "16px" }}>
                Bentar, tunggu! Aku dateng.
              </p>
            </h5>
          </div>
        </div>
        <div className="col-8" style={{ background: "#DBDDFF", height: "630px" }}>
          <input type="text" class="form-control border border-secondary" placeholder="Message" style={{ marginTop: "550px", width: "500px", borderRadius: "15px" }} />
          <div style={{ position: "relative", bottom: "33px", left: "510px", cursor: "pointer" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
