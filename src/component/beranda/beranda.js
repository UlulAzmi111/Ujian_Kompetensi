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
        <div className="pt-2 col-8 d-flex justify-content-start" style={{ background: "#8086FF", height: "90px" }}>
          <img src={profil} alt="" width={73} height={75} />
          <h5 className="pt-3" style={{ fontFamily: "Poppins", fontWeight: "600" }}>
            Perusahaan ChatIn <br /> <p style={{ fontFamily: "Poppins", fontWeight: "300", fontSize: "17px" }}>Last seen today at 9.10 PM</p>
          </h5>
        </div>
      </div>

      <div className="row">
        <div className="col-4 mt-4" style={{ background: "white", height: "610px" }}>
          <img src={profil} alt="" width={73} height={75} style={{ float: "left" }} />
          <h5 className="pt-3 border-bottom border-secondary" style={{ fontFamily: "Poppins", fontWeight: "600" }}>
            Perusahaan ChatIn <br /> <p className="mt-2" style={{ fontFamily: "Poppins", fontWeight: "300", fontSize: "16px" }}>Iya, nanti interview ya, saya tunggu jam 1 siang.</p>
          </h5>
          <img src={profil} alt="" width={73} height={75} style={{ float: "left" }} />
          <h5 className="pt-3 border-bottom border-secondary" style={{ fontFamily: "Poppins", fontWeight: "600" }}>
            Feysa
            <br /> <p className="mt-2" style={{ fontFamily: "Poppins", fontWeight: "300", fontSize: "16px" }}>Ikut ta ke rumahku?</p>
          </h5>
          <img src={profil} alt="" width={73} height={75} style={{ float: "left" }} />
          <h5 className="pt-3 border-bottom border-secondary" style={{ fontFamily: "Poppins", fontWeight: "600" }}>
            Alfath <br /> <p className="mt-2" style={{ fontFamily: "Poppins", fontWeight: "300", fontSize: "16px" }}>Nitip buku di meja kamu tadi</p>
          </h5>
          <img src={profil} alt="" width={73} height={75} style={{ float: "left" }} />
          <h5 className="pt-3 border-bottom border-secondary" style={{ fontFamily: "Poppins", fontWeight: "600" }}>
            Ulul <br /> <p className="mt-2" style={{ fontFamily: "Poppins", fontWeight: "300", fontSize: "16px" }}>Tunggu di depan ya lin!</p>
          </h5>
        </div>
        <div className="col-8" style={{ background: "#DBDDFF", height: "670px" }}>
          <div className="row me-2">
            <div className="col-6">
              <p className="bg-primary border border-primary text-white m-5 p-3" style={{ borderRadius: "9px", fontFamily: "Roboto" }}>
                Selamat Pagi. Mohon maaf mengganggu waktunya pak. Apakah saya mendapat kesempatan untuk interview dengan Bapak?
              </p>
            </div>
            <div className="col-6" style={{ marginTop: "180px", position: "relative"}}>
              <p className="bg-white border border-primary text-primary mb-2 ms-5 me-5 p-3" style={{ borderRadius: "9px", fontFamily: "Roboto"}}>
                Iya, nanti interview ya, saya tunggu jam 1 siang.
              </p>
            </div>
          </div>
          <div className="row me-2">
            <div className="col-6" style={{ marginTop: "20px"}}>
              <p className="bg-primary border border-primary text-white mb-2 ms-5 me-5 p-3" style={{ borderRadius: "9px", fontFamily: "Roboto" }}>
                Baik pak, untuk interview. Bapak berkenan interview di mana?
              </p>
            </div>
            <div className="col-6" style={{ marginTop: "130px", position: "relative"}}>
              <p className="bg-white border border-primary text-primary  ms-5 me-5 p-3" style={{ borderRadius: "9px", fontFamily: "Roboto"}}>
                Untuk interview di kantor saja ya. Saya tunggu.
              </p>
            </div>
          </div>
          <div className="row me-2">
            <div className="col-6" style={{ marginTop: "4px"}}>
              <p className="bg-primary border border-primary text-white mb-2 ms-5 me-5 p-3" style={{ borderRadius: "9px", fontFamily: "Roboto" }}>
                Baik pak, terima kasih. Saya akan datang tepat waktu.
              </p>
            </div>
            </div>
          <div />
          <input type="text" class="form-control border border-secondary" placeholder="Message" style={{ marginTop: "63px", width: "500px", borderRadius: "15px" }} />
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
