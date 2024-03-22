import React from "react";
import "./form.css";

const Form = () => {
  return (
    <section className="container-fluid bg-pink">
      <div className="cards mb-4">
        <div className="row">

          <div className="col-md-6">
            <div className="card-body">
              <p className="card-text form-about text-fallspa-p fw-semibold">
                GET IN TOUCH
              </p>
              <p className="card-text form-title fw-semibold">
                Get Appointment
              </p>
              <h5 className="card-title form-caption">
                Aenean ut enim vel lectus rutrum sodales. Aliquam consequat
                augue eget enim convallis, at maximus libero ullamcorper. Cras
                sit amet placerat nisi. <br />
                <br />
              </h5>
              <form action="">
                <div className="form-section">
                  <div className="f-input">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      id="firstname"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="f-input">
                    <select name="departmets" id="departments">
                      <optgroup>
                        <option value="Departmet">Department</option>
                        <option value="One">one</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                      </optgroup>
                    </select>
                    <input type="date" name="date" id="date" />
                  </div>
                  <textarea
                    placeholder="Write comments..."
                    cols={10}
                    rows={3}
                    className="form-control"
                    id="floatingTextarea2"
                  ></textarea>
                  <br />
                  <button className="card-btn bg-fallspa-v ">SUBMIT NOW</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="opening-hr-section">
              <div className="op-section">
                <img
                  src="https://mediacity.co.in/fallspa/static/media/open-box-img.1905f0f105ce7e96eff0.png"
                  alt="icon01"
                />
                <h3>Opening Hours</h3>
                <div className="op-text">
                  <div className="left-text">Monday to Friday:</div>
                  <div className="right-text">09:00 am - 10:00 pm</div>
                </div>
                <div className="op-text">
                  <div className="left-text">Saturday:</div>
                  <div className="right-text">09:00 am - 8:00 pm</div>
                </div>
                <div className="op-text">
                  <div className="left-text">Sunday:</div>
                  <div className="right-text">09:00 am - 5:00 pm</div>
                </div>
                <div className="seasonal-discount">
                  Check out seasonal discounts for best offers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
