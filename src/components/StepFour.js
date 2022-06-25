import React, { useState, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import emailValidate from "../services/emailValidate";

export default function StepFour(props) {
  const [showUnusedColor, setShowUnusedColor] = useState(false);
  const toggleShowUnusedColor = () => {
    if (showUnusedColor) {
      setShowUnusedColor(false);
    } else {
      setShowUnusedColor(true);
    }
  };

  // buy Modal
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [buyModalTab, setBuyModalTab] = useState("");

  const openBuyModal = (tab) => {
    setBuyModalTab(tab);
    setShowBuyModal(true);
  };
  const closeBuyModal = () => {
    setShowBuyModal(false);
  };
  const [radioItem, setRadioItem] = useState("");

  const radioSelect = (ev) => {
    setRadioItem(ev.target.value);
  };

  // register Data

  const validateForm = () => {
    var valid = true;
    // return valid;
    var errorsTmp = {};
    if (
      registerData.first_name.length < 2 ||
      registerData.first_name.length > 250
    ) {
      errorsTmp = { ...errorsTmp, first_name: "Please enter your first name" };
      valid = false;
    }
    if (
      registerData.last_name.length < 2 ||
      registerData.last_name.length > 250
    ) {
      errorsTmp = { ...errorsTmp, last_name: "Please enter your last name" };
      valid = false;
    }

    if (registerData.email.length < 2 || registerData.email.length > 250) {
      errorsTmp = { ...errorsTmp, email: "Please enter your email" };
      valid = false;
    }
    if (!emailValidate(registerData.email)) {
      errorsTmp = { ...errorsTmp, email: "Your email not valid" };
      valid = false;
    }

    if (registerData.prefer.length < 2 || registerData.prefer.length > 250) {
      errorsTmp = { ...errorsTmp, prefer: "Please select your prefer" };
      valid = false;
    }
    if (
      registerData.user_type.length < 2 ||
      registerData.user_type.length > 250
    ) {
      errorsTmp = { ...errorsTmp, user_type: "Please select who you are" };
      valid = false;
    }
    if (registerData.country.length < 2 || registerData.country.length > 250) {
      errorsTmp = { ...errorsTmp, country: "Please select your country" };
      valid = false;
    }

    setErrors(errorsTmp);
    return valid;
  };

  const updateRegisterForm = (field, value) => {
    setRegisterData({ ...registerData, [field]: value });
  };

  const [acceptField, setAcceptField] = useState({
    first_name: false,
    last_name: false,
    email: false,
    prefer: false,
    user_type: false,
    country: false,
  });
  const [errors, setErrors] = useState({});

  const registerInput = (ev) => {
    var target = ev.target;
    var field = target.name;
    var value = target.value;

    if (field == "first_name") {
      if (value.length > 2) {
        setAcceptField({ ...acceptField, first_name: true });
        setErrors({ ...errors, first_name: "" });
      } else {
        setAcceptField({ ...acceptField, first_name: false });
        setErrors({ ...errors, first_name: "Please enter your first name" });
      }
    }

    if (field == "last_name") {
      if (value.length > 2) {
        setAcceptField({ ...acceptField, last_name: true });
        setErrors({ ...errors, last_name: "" });
      } else {
        setAcceptField({ ...acceptField, last_name: false });
        setErrors({ ...errors, last_name: "Please enter your last name" });
      }
    }

    if (field == "email") {
      if (emailValidate(value)) {
        setAcceptField({ ...acceptField, email: true });
        setErrors({ ...errors, email: "" });
      } else {
        setAcceptField({ ...acceptField, email: false });
        setErrors({ ...errors, email: "Your email not valid" });
      }
    }
    if (field == "prefer") {
      if (value.length > 2) {
        setAcceptField({ ...acceptField, prefer: true });
        setErrors({ ...errors, prefer: "" });
      } else {
        setAcceptField({ ...acceptField, prefer: false });
        setErrors({ ...errors, prefer: "Please select your prefer" });
      }
    }
    if (field == "user_type") {
      if (value.length > 2) {
        setAcceptField({ ...acceptField, user_type: true });
        setErrors({ ...errors, user_type: "" });
      } else {
        setAcceptField({ ...acceptField, user_type: false });
        setErrors({ ...errors, user_type: "Please select who you are" });
      }
    }
    if (field == "country") {
      if (value.length > 2) {
        setAcceptField({ ...acceptField, country: true });
        setErrors({ ...errors, country: "" });
      } else {
        setAcceptField({ ...acceptField, country: false });
        setErrors({ ...errors, country: "Please select your country" });
      }
    }

    updateRegisterForm(field, value);
  };

  const [registerData, setRegisterData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    prefer: "",
    user_type: "",
    country: "",
  });

  const submitRegisterData = () => {
    var valid = validateForm();

    if (valid) {
      alert("Success");
      setShowBuyModal(false);
    }
  };
  return (
    <Fragment>
      <div className="section_headline padding_left_right">
        <div onClick={() => props.setTabProps(3)} className="heading link">
          <span>
            <i className="fas fa-angle-left"></i>
          </span>
          Visualize Your Room
        </div>
        <div className="heading">Order Paint</div>
      </div>
      <br />
      <div className="section_ending_area">
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <div className="col-6">
                <Link
                  to="/"
                  target="_blank"
                  className="next_btn full_width no_margin line_height"
                >
                  <span className="pad_right">
                    <i className="fa fa-location-arrow"></i>
                  </span>
                  Where to Buy
                </Link>
              </div>
              <div className="col-6">
                <Button
                  onClick={() => openBuyModal("Save Your Project")}
                  className="next_btn gray full_width no_margin"
                >
                  <span className="pad_right">
                    <i className="fa fa-save"></i>
                  </span>
                  Save Project
                </Button>
              </div>
            </div>
            <br />
            <div className="used_color_list">
              {props.selectedColorProps.length > 0
                ? props.selectedColorProps.map((color) => (
                    <Fragment>
                      <div key={"color_" + color.id} className="used_color">
                        <div
                          className={
                            color.color_type === "paid"
                              ? "color_content undo_radious_bottom"
                              : "color_content"
                          }
                          style={{
                            background: color.color_code,
                          }}
                        >
                          <div className="title">{color.title}</div>
                          <div className="color_code">{color.color_code}</div>
                        </div>

                        {color.color_type === "paid" && (
                          <div className="buy_section">
                            <div className="buy_text">BUY NOW</div>

                            <Button
                              onClick={() =>
                                openBuyModal("Select Your Paint Sheen")
                              }
                              className="buy_btn"
                            >
                              <img
                                className="img-responsive"
                                alt="direction photo"
                                src={
                                  require("../assets/images/home-depot.png")
                                    .default
                                }
                              />
                            </Button>
                          </div>
                        )}
                      </div>
                    </Fragment>
                  ))
                : ""}
            </div>
            <br />

            <div onClick={toggleShowUnusedColor} className="show_unused_color">
              Show Unused Colors
              <span>
                <i className="fa fa-angle-down"></i>
              </span>
            </div>
            {showUnusedColor && (
              <div className="used_color_list">
                {props.selectedColorProps.length > 0
                  ? props.selectedColorProps.map((color) => (
                      <Fragment>
                        <div key={color.id} className="used_color">
                          <div
                            className={
                              color.color_type === "paid"
                                ? "color_content undo_radious_bottom"
                                : "color_content"
                            }
                            style={{
                              background: color.color_code,
                            }}
                          >
                            <div className="title">{color.title}</div>
                            <div className="color_code">{color.color_code}</div>
                          </div>

                          {color.color_type === "paid" && (
                            <div className="buy_section">
                              <div className="buy_text">BUY NOW</div>

                              <Button
                                onClick={() =>
                                  openBuyModal("Select Your Paint Sheen")
                                }
                                className="buy_btn"
                              >
                                <img
                                  className="img-responsive"
                                  alt="direction photo"
                                  src={
                                    require("../assets/images/home-depot.png")
                                      .default
                                  }
                                />
                              </Button>
                            </div>
                          )}
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            )}
          </div>
          <div className="col-md-7">
            <div className="final_photo">
              <div className="social_share">
                <div className="share_text">SHARE:</div>
                <Link to="#">
                  <svg viewBox="0 0 512 512" className="facebook">
                    <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
                  </svg>
                </Link>
                <Link to="#">
                  <svg viewBox="0 0 512 512" className="print">
                    <path d="M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2 0.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3 0.9-7.1-3-11.8 -8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1 -22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7 -22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-0.6 80.1 0.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5C400.1 134.7 347.1 76.5 266.6 76.5z"></path>
                  </svg>
                </Link>
                <Link className="mail" to="#">
                  <i className="fas fa-envelope"></i>
                </Link>
              </div>
              <div className="uploaded_photo">
                <img
                  alt="final photo"
                  src={
                    require("../assets/images/categories/bedroom.jpg").default
                  }
                />
              </div>

              <div className="visualy_paint_img">
                <img
                  className="img-responsive"
                  alt="direction photo"
                  src={require("../assets/images/visualy-paint.png").default}
                />
              </div>

              <div className="color_making_img">
                {props.selectedColorProps.length > 0
                  ? props.selectedColorProps.map((color) => (
                      <div className="item">
                        <div className="color_text">
                          <div className="title">{color.title}</div>
                          <div className="color_code">{color.color_code}</div>
                        </div>
                        <svg
                          width="275"
                          height="72"
                          viewBox="0 0 275 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 29L23 31L20 32L15 33.5L9.5 35.5L6.5 37L0 40.5L1 41.5L3.5 44L6 44.5L6.5 47.5L7 49L10.5 52H13L14.5 50L15.5 51L18.5 52.5L23 56L22 59H23.5L24.5 60.5H28.5L37.5 60V61L43.5 65L47.5 65.5L49.5 67.5L53 67V69L56 70.5L60.5 71L62.5 70L65 71.5L68 70.5L71.5 71.5H74.5H81L87 70L93 69.5L100.5 69L107.5 68.5L114 67H122L132 66.5L138 66H144L150 65.5L159 65L166.5 64L168 63.5L172 63H180H187.5H194.5L196 62H203.5L207 61L210 62.5H215H219L228.5 62H237L238 60.5L240 62L250 63L251 61L255 61.5V58.5L260.5 59.5L266 60.5L270 59.5L266 55.5L268 54L269 52.5L275 52L271 48.5L268 46.5L260.5 42L256 39L246.5 37.5L239 36.5L248 35L250 31L253 26L255 21L256 17.5L254 14L247 10L237.5 7L230 5.5L223.5 5L219 4.5L207 3L200.5 2L193.5 1.5L187.5 1L174 0L138 0.5L112.5 1L99.5 2L85 3L67.5 3.5L54 4.5L44 5H36.5L31 6.5H24.5L18 7.5L9.5 10.5L5 14L0 16.5L5 22L9 26L13.5 28L18 29Z"
                            fill={color.color_code}
                          />
                        </svg>
                      </div>
                    ))
                  : ""}
              </div>
              <br />
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <div className="bottom_bar">
          <Link
            to="/"
            target="_blank"
            className="next_btn fit_width no_margin line_height padding_10"
          >
            <span className="pad_right">
              <i className="fa fa-location-arrow"></i>
            </span>
            Where to Buy
          </Link>

          <Button
            onClick={() => openBuyModal("Save Your Project")}
            className="next_btn gray fit_width no_margin"
          >
            <span className="pad_right">
              <i className="fa fa-save"></i>
            </span>
            Save Project
          </Button>
        </div>
      </div>

      <Modal size="xs" show={showBuyModal} onHide={closeBuyModal}>
        <Modal.Body
          className={
            buyModalTab === "Select Your Paint Sheen" ? "no_padding_modal" : ""
          }
        >
          {buyModalTab === "Save Your Project" && (
            <form className="input_form">
              <div className="mb3 form_heading">{buyModalTab}</div>
              <div className="mb-3">
                <label className="form-label">First Name (required)</label>
                <input
                  className={
                    "form-control " +
                    (errors && errors.first_name ? "error" : "") +
                    (acceptField.first_name == true ? "accepted" : "")
                  }
                  type="text"
                  onChange={registerInput}
                  name="first_name"
                  value={registerData.first_name}
                />
                <div className="errorMsg">
                  {errors ? errors.first_name : ""}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name (required)</label>
                <input
                  className={
                    "form-control " +
                    (errors && errors.last_name ? "error" : "") +
                    (acceptField.last_name == true ? "accepted" : "")
                  }
                  type="text"
                  onChange={registerInput}
                  name="last_name"
                  value={registerData.last_name}
                />
                <div className="errorMsg">{errors ? errors.last_name : ""}</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Email (required)</label>
                <input
                  className={
                    "form-control " +
                    (errors && errors.email ? "error" : "") +
                    (acceptField.email == true ? "accepted" : "")
                  }
                  type="email"
                  onChange={registerInput}
                  name="email"
                  value={registerData.email}
                />
                <div className="errorMsg">{errors ? errors.email : ""}</div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Where do you prefer to buy Emirates Paints? (required)
                </label>
                <select
                  className={
                    "form-select " +
                    (errors && errors.prefer ? "error" : "") +
                    (acceptField.prefer == true ? "accepted" : "")
                  }
                  aria-label="Default select example"
                  name="prefer"
                  onChange={registerInput}
                  value={registerData.prefer}
                >
                  <option value="" selected="selected"></option>
                  <option label="Independent Dealer" value="independent dealer">
                    Independent Dealer
                  </option>
                  <option
                    label="Emirates Paint Store"
                    value="Emirates paint store"
                  >
                    Emirates Paint Store
                  </option>
                  <option label="The Home Depot" value="the home depot">
                    The Home Depot
                  </option>
                </select>
                <div className="errorMsg">{errors ? errors.prefer : ""}</div>
              </div>

              <div className="mb-3">
                <label className="form-label">Who are you? (required)</label>
                <select
                  className={
                    "form-select " +
                    (errors && errors.user_type ? "error" : "") +
                    (acceptField.user_type == true ? "accepted" : "")
                  }
                  aria-label="Default select example"
                  name="user_type"
                  onChange={registerInput}
                  value={registerData.user_type}
                >
                  <option value="" selected="selected"></option>
                  <option label="Homeowner" value="homeowner">
                    Homeowner
                  </option>
                  <option label="Professional" value="professional">
                    Professional
                  </option>
                </select>
                <div className="errorMsg">{errors ? errors.user_type : ""}</div>
              </div>

              <div className="mb-3">
                <label className="form-label">Country (required)</label>
                <select
                  className={
                    "form-select " +
                    (errors && errors.country ? "error" : "") +
                    (acceptField.country == true ? "accepted" : "")
                  }
                  aria-label="Default select example"
                  name="country"
                  onChange={registerInput}
                  value={registerData.country}
                >
                  <option value="" selected="selected"></option>
                  <option label="USA" value="usa">
                    USA
                  </option>
                  <option label="Canada" value="canada">
                    Canada
                  </option>
                  <option label="Mexico" value="mexico">
                    Mexico
                  </option>
                </select>
                <div className="errorMsg">{errors ? errors.country : ""}</div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input
                    id="privacyBox"
                    className="margin_top_10"
                    type="checkbox"
                    // onChange={registerInput}
                    value="yes"
                  />
                  <label htmlFor="privacyBox">
                    <span className="check_text">
                      Yes, I would like the opportunity to receive e-mails
                      containing information, product updates, e-newsletters,
                      samples, promotional offers and rebates from brands of PPG
                      Industries, Inc. and its subsidiaries. I understand that I
                      may later withdraw my consent to receive these materials
                      by following the message's opt out instructions.
                    </span>
                  </label>
                </div>
              </div>
              <br />
              <div className="mb-3">
                <div className="submit_area_btns">
                  <Button
                    onClick={closeBuyModal}
                    className="next_btn white_bg fit_width no_margin"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={submitRegisterData}
                    className="next_btn gray fit_width no_margin"
                  >
                    Save Project
                  </Button>
                </div>
              </div>
            </form>
          )}
          {buyModalTab === "Select Your Paint Sheen" && (
            <form className="input_form no_padding">
              <div className="mb3 form_heading padding_top_left_30">
                {buyModalTab}
              </div>

              <div className="mb-3">
                <div
                  className={
                    radioItem === "plan1"
                      ? "check_area form_checkbox form_radiobox active"
                      : "check_area form_checkbox form_radiobox"
                  }
                >
                  <input
                    id="plan1"
                    className="margin_top_10"
                    type="radio"
                    name="plan"
                    value="plan1"
                    onChange={radioSelect}
                  />
                  <label htmlFor="plan1">
                    <h3 className="radio_heading"> Interior - Flat </h3>
                    <div className="text_area uppercase">Best offer</div>
                    <div className="text_area">
                      Ceilings, Commercial, Dining Rooms, Offices
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div
                  className={
                    radioItem === "plan2"
                      ? "check_area form_checkbox form_radiobox active"
                      : "check_area form_checkbox form_radiobox"
                  }
                >
                  <input
                    id="plan2"
                    className="margin_top_10"
                    type="radio"
                    name="plan"
                    value="plan2"
                    onChange={radioSelect}
                  />
                  <label htmlFor="plan2">
                    <h3 className="radio_heading">Interior - Eggshell</h3>
                    <div className="text_area uppercase">Best offer</div>
                    <div className="text_area">
                      Bedrooms, Hallways, Living Rooms
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div
                  className={
                    radioItem === "plan3"
                      ? "check_area form_checkbox form_radiobox active"
                      : "check_area form_checkbox form_radiobox"
                  }
                >
                  <input
                    id="plan3"
                    className="margin_top_10"
                    type="radio"
                    name="plan"
                    value="plan3"
                    onChange={radioSelect}
                  />
                  <label htmlFor="plan3">
                    <h3 className="radio_heading">Interior - Satin</h3>
                    <div className="text_area uppercase">Best offer</div>
                    <div className="text_area">
                      Entryways, Exteriors, Kitchens, Nursery Rooms
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div
                  className={
                    radioItem === "plan4"
                      ? "check_area form_checkbox form_radiobox active"
                      : "check_area form_checkbox form_radiobox"
                  }
                >
                  <input
                    id="plan4"
                    className="margin_top_10"
                    type="radio"
                    name="plan"
                    value="plan4"
                    onChange={radioSelect}
                  />
                  <label htmlFor="plan4">
                    <h3 className="radio_heading">Interior - Semo-Gloss</h3>
                    <div className="text_area uppercase">Best offer</div>
                    <div className="text_area">Bathrooms, Trim</div>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div
                  className={
                    radioItem === "plan5"
                      ? "check_area form_checkbox form_radiobox active"
                      : "check_area form_checkbox form_radiobox"
                  }
                >
                  <input
                    id="plan5"
                    className="margin_top_10"
                    type="radio"
                    name="plan"
                    value="plan5"
                    onChange={radioSelect}
                  />
                  <label htmlFor="plan5">
                    <h3 className="radio_heading">Interior - Semo-Gloss</h3>
                    <div className="text_area uppercase">Best offer</div>
                    <div className="text_area">Exteriors</div>
                  </label>
                </div>
              </div>

              <br />
              <div className="mb-3">
                <div className="submit_area_btns margin_o_auto">
                  <Button
                    onClick={() => closeBuyModal()}
                    className={
                      radioItem.length ? "buy_btn" : "buy_btn disabled"
                    }
                  >
                    <img
                      className="img-responsive"
                      alt="direction photo"
                      src={require("../assets/images/home-depot.png").default}
                    />
                  </Button>
                </div>
              </div>
              <br />
            </form>
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
