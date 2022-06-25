import React, { Fragment, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function StepOne(props) {
  const changingStep = (step) => {
    props.setTabProps(step);
  };

  const [file, setFile] = useState();
  const [getPhoto, setGetPhoto] = useState();
  const pickPhoto = (event) => {
    setFile(event.target.files[0]);
    setGetPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const [showImageUploadArea, setShowImageUploadArea] = useState(false);
  const openImageUploadArea = () => {
    setShowImageUploadArea(true);
  };
  const coloseImageUploadArea = () => {
    setShowImageUploadArea(false);
  };
  const [imagesCategory, setImagesCategory] = useState("");

  const selectImagesCategory = (category) => {
    setImagesCategory(category);
  };

  //policy
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const acceptPolicy = (ev) => {
    var target = ev.target;
    var value = target.value;
    var checkedStatus = ev.target.checked;
    if (checkedStatus) {
      setPolicyAccepted(true);
    } else {
      setPolicyAccepted(false);
    }
  };
  return (
    <Fragment>
      {showImageUploadArea ? (
        <Fragment>
          {getPhoto ? (
            <Fragment>
              <div className="section_headline">
                <div
                  onClick={() => {
                    setGetPhoto(null);
                    setPolicyAccepted(false);
                  }}
                  className="heading link"
                >
                  <span>
                    <i className="fas fa-angle-left"></i>
                  </span>
                  Change Your Photo
                </div>

                <div className="heading">Rotate or Crop Your Photo</div>
                <br />
                <Button
                  onClick={() => changingStep(2)}
                  className="next_btn fit_width"
                >
                  Next Step: Select Colors
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span>
                </Button>
              </div>

              <div className="photo_edit_frame">
                <div className="frame_header">
                <Button className="next_btn white_bg fit_width no_margin">
              <span className="pad_right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9C912 303 733.5 124.3 512.6 124C291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2c3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1c-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7c29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6c29.4 29.4 52.5 63.6 68.6 101.7c16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 0 0-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"
                  />
                </svg>
              </span>
              Rotate
            </Button>
            <Button className="next_btn white_bg fit_width no_margin">
              <span className="pad_right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9C912 303 733.5 124.3 512.6 124C291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2c3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1c-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7c29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6c29.4 29.4 52.5 63.6 68.6 101.7c16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 0 0-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"
                  />
                </svg>
              </span>
              Reset
            </Button>
                </div>

                <div className="uploaded_photo">
                  <img
                    className="profile_image"
                    alt="Profile"
                    src={getPhoto}
                  ></img>
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="section_headline">
                <div onClick={coloseImageUploadArea} className="heading link">
                  <span>
                    <i className="fas fa-angle-left"></i>
                  </span>
                  Explore Different Photos
                </div>
              </div>
              <br />
              <div className="policy_area">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="accept_policy check_area">
                      <input
                        onChange={acceptPolicy}
                        type="checkbox"
                        id="policy"
                      />
                      <div className="policy_text">
                        <label htmlFor="policy">
                          I Accept Emirates Paint's Terms of Use
                        </label>
                        <br />
                        <Link to="/about" target="blank">
                          View Full Terms of Use
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="upload_photo">
                      <input
                        name="profile_pic"
                        id="profilePicture"
                        type="file"
                        onChange={pickPhoto}
                        hidden
                        disabled={policyAccepted ? false : true}
                      />
                      <label htmlFor="profilePicture">
                        <div
                          className={
                            policyAccepted
                              ? "input_area_btn fit_width"
                              : "input_area_btn fit_width disabled"
                          }
                        >
                          <i className="fas fa-camera"></i>
                          <div className="text_area">
                            Select to Upload Photo
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="upload_tips">
                <div className="section_headline">
                  <div className="heading">
                    Select a Photo to Virtually Paint
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="tips_direction">
                      Your photo should be well-lit.
                    </div>
                    <div className="images_group border_right">
                      <img
                        className="img-responsive"
                        alt="direction photo"
                        src={require("../assets/images/good.jpg").default}
                      />
                      <img
                        className="img-responsive"
                        alt="direction photo"
                        src={require("../assets/images/dark.png").default}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="tips_direction">
                      Take your photo 5ft-8ft from your wall.
                    </div>
                    <div className="images_group">
                      <img
                        className="img-responsive"
                        alt="direction photo"
                        src={require("../assets/images/good.jpg").default}
                      />
                      <img
                        className="img-responsive"
                        alt="direction photo"
                        src={require("../assets/images/tooFar.png").default}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          )}

          <br />
          <br />
        </Fragment>
      ) : (
        <Fragment>
          {imagesCategory.length ? (
            <Fragment>
              <div className="section_headline">
                <div
                  onClick={() => setImagesCategory("")}
                  className="heading link"
                >
                  <span>
                    <i className="fas fa-angle-left"></i>
                  </span>
                  Explore Different Photos
                </div>
                <div className="heading">Select a Photo to Paint</div>
                <div className="heading sub gray">{imagesCategory}</div>
              </div>
              <br />

              <div className="images_list">
                <Fragment>
                  {imagesCategory === "Living Room" && (
                    <Fragment>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/1.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/2.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/3.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/4.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/5.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/6.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/7.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/8.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/9.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/10.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/11.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/12.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/13.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/14.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/15.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/16.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/17.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/18.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/19.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/20.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/21.jpg").default
                            }
                          />
                        </div>
                      </Link>

                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/23.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/24.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/25.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/26.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/27.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/28.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/29.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/30.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/31.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/32.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/living/33.jpg").default
                            }
                          />
                        </div>
                      </Link>
                    </Fragment>
                  )}

                  {imagesCategory === "Bedroom" && (
                    <Fragment>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/1.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/2.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/3.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/4.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/5.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/6.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/7.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/8.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/9.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/10.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/11.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/12.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/13.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/14.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/15.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/16.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/17.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/18.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/19.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/20.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/21.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/22.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/23.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/24.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/25.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/26.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/27.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/28.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/29.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/30.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/31.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/32.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/33.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/34.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/35.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/bed/36.jpg").default}
                          />
                        </div>
                      </Link>
                    </Fragment>
                  )}

                  {imagesCategory === "Dining Room" && (
                    <Fragment>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/1.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/2.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/3.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/4.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/5.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/6.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/7.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/8.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/9.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/10.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/11.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/12.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/13.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/14.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/15.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/16.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/17.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/18.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/19.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/20.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/dining/21.jpg").default
                            }
                          />
                        </div>
                      </Link>
                    </Fragment>
                  )}

                  {imagesCategory === "Kitchen" && (
                    <Fragment>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/1.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/2.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/3.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/4.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/5.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/6.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/7.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/8.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/9.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/10.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/11.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/12.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/kitchen/13.jpg").default
                            }
                          />
                        </div>
                      </Link>
                    </Fragment>
                  )}

                  {imagesCategory === "Bathroom" && (
                    <Fragment>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/1.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/2.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/3.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/4.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/5.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/6.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/7.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/8.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/9.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/10.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/11.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/12.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/13.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/14.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/15.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/bathroom/16.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                    </Fragment>
                  )}

                  {imagesCategory === "Exterior" && (
                    <Fragment>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/1.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/2.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/3.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/4.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/5.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/6.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/7.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/8.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/9.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/10.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/exterior/11.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                    </Fragment>
                  )}

                  {imagesCategory === "Commercial" && (
                    <Fragment>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/1.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/2.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/3.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/4.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/5.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/6.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/7.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/8.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/9.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/10.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/12.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/13.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/14.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/15.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/16.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/17.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/18.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/19.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/20.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/commercial/21.jpg")
                                .default
                            }
                          />
                        </div>
                      </Link>
                    </Fragment>
                  )}

                  {imagesCategory === "Front Door" && (
                    <Fragment>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/door/1.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/door/2.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/door/3.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/door/4.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/door/5.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/door/6.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/door/7.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/door/8.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={require("../assets/images/door/9.jpg").default}
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/door/10.jpg").default
                            }
                          />
                        </div>
                      </Link>
                      <Link
                        onClick={() => changingStep(2)}
                        to="#"
                        className="single_image no_border"
                      >
                        <div className="image">
                          <img
                            alt="categories_img"
                            src={
                              require("../assets/images/door/11.jpg").default
                            }
                          />
                        </div>
                      </Link>
                    </Fragment>
                  )}
                </Fragment>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="section_headline">
                <div className="heading">Select a Photo to Virtually Paint</div>
                <br />
                <div className="heading sub gray">
                  Explore Our Paintable Photos
                </div>
              </div>
              <br />
              <div className="images_list">
                <Link
                  onClick={() => selectImagesCategory("Living Room")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/living.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Living Room</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Bedroom")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/bedroom.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Bedroom</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Dining Room")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/dining.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Dining Room</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Kitchen")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/kitchen.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Kitchen</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Bathroom")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/bathroom.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Bathroom</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Exterior")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/exteritor.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Exterior</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Commercial")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/commercial.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Commercial</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Front Door")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/front-door.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Front Door</div>
                </Link>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="or_area">
                    <span className="dashed"></span>
                    <div className="or_text">Or</div>
                    <span className="dashed"></span>
                  </div>
                  <br />

                  <div className="upload_photo">
                    <label>
                      <div
                        onClick={openImageUploadArea}
                        className="input_area_btn"
                      >
                        <i className="fas fa-camera"></i>
                        <div className="text_area">
                          Upload Your Own Photo
                          <p>
                            Make your project come alive with a photo of your
                            own home.
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
          <br />
          <br />
        </Fragment>
      )}
    </Fragment>
  );
}
