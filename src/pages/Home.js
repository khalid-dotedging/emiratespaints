import React, { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import Logo from "../components/Logo";

// steps
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import RightBar from "../components/RightBar";

export default function Home(props) {
  // tabing
  const activeStep = props.tabProps;
  const changingStep = (step) => {
    setShowLeftBar(false);
    setShowRightBar(false);
    props.setTabProps(step);
  };

  const [selectedColors, setSelectedColors] = useState([
    {
      id: 14,
      title: "Black",
      color_code: "#000000",
      color_type: "free",
    },
    {
      id: 15,
      title: "Orange",
      color_code: "#FFA500",
      color_type: "paid",
    },
  ]);

  const [showLeftBar, setShowLeftBar] = useState(false);
  const toggleLeftBar = () => {
    setShowRightBar(false);
    if (showLeftBar) {
      setShowLeftBar(false);
    } else {
      setShowLeftBar(true);
    }
  };
  const [showRightBar, setShowRightBar] = useState(false);
  const toggleRightBar = () => {
    setShowLeftBar(false);
    if (showRightBar) {
      setShowRightBar(false);
    } else {
      setShowRightBar(true);
    }
  };

  const [showBottomBar, setShowBottomBar] = useState(true);
  const toggleBottomBar = () => {
    if (showBottomBar) {
      setShowBottomBar(false);
    } else {
      setShowBottomBar(true);
    }
  };

  return (
    <Fragment>
      <Logo />
      <header>
        <div className="d-block d-md-none">
          <div className="mobile_header">
            <div className="navbar_left">
              <div onClick={toggleLeftBar}>
                <i className="fa fa-bars"></i>
                <span className="menu">Menu</span>
              </div>

              <div className="sidebar_container left_sidebar menu_left_bar ">
                <div
                  className={
                    "sidebar_area menu_left_bar " +
                    (showLeftBar ? "show_bar" : "")
                  }
                >
                  <div className="step_index">
                    <div className="step-indicator">
                      <div
                        onClick={() => changingStep(1)}
                        className={
                          "step step1 " + (activeStep >= 1 ? "active" : "")
                        }
                      >
                        <div
                          className={
                            activeStep > 1 ? "step-icon pass" : "step-icon"
                          }
                        >
                          1
                        </div>
                        <p>Select Photo</p>
                      </div>
                      <div
                        className={
                          "indicator-line " + (activeStep > 1 ? "active" : "")
                        }
                      ></div>
                      <div
                        onClick={() => changingStep(2)}
                        className={
                          "step step2 " + (activeStep >= 2 ? "active" : "")
                        }
                      >
                        <div
                          className={
                            activeStep > 2 ? "step-icon pass" : "step-icon"
                          }
                        >
                          2
                        </div>
                        <p>Select Colors</p>
                      </div>
                      <div
                        className={
                          "indicator-line " + (activeStep > 2 ? "active" : "")
                        }
                      ></div>
                      <div
                        onClick={() => changingStep(3)}
                        className={
                          "step step3 " + (activeStep >= 3 ? "active" : "")
                        }
                      >
                        <div
                          className={
                            activeStep > 3 ? "step-icon pass" : "step-icon"
                          }
                        >
                          3
                        </div>
                        <p>Visualize Room</p>
                      </div>
                      <div
                        className={
                          "indicator-line " + (activeStep > 3 ? "active" : "")
                        }
                      ></div>
                      <div
                        onClick={() => changingStep(4)}
                        className={
                          "step step4 " + (activeStep >= 4 ? "active" : "")
                        }
                      >
                        <div className="step-icon">4</div>
                        <p>Order Paint</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                activeStep === 2
                  ? "navbar_left right"
                  : "d-none" && activeStep === 3
                  ? "navbar_left right"
                  : "d-none" && activeStep === 4
                  ? "d-none"
                  : "navbar_left right" && activeStep === 1
                  ? "d-none"
                  : "navbar_left right"
              }
            >
              <div onClick={toggleRightBar} className="color_select_header">
                <div
                  className={
                    props.selectedColorProps.length > 0
                      ? "color_count active"
                      : "color_count"
                  }
                >
                  <i className="fas fa-palette text-white"></i>
                  <span className="count">
                    {props.selectedColorProps.length}
                  </span>
                </div>
                <div className="color_dsc">Saved Colors</div>
              </div>

              <div className="sidebar_container right_sidebar menu_right_bar ">
                <div
                  className={
                    "sidebar_area menu_right_bar " +
                    (showRightBar ? "show_bar" : "")
                  }
                >
                  <RightBar {...props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* sidebars */}

      <div className="row">
        <div className="col-12 col-sm-12 col-lg-10 col-xl-10 offset-lg-1 offset-xl-1">
          <div
            className={
              activeStep === 2
                ? "wrapper_box added_color_box"
                : "wrapper_box" && activeStep === 3
                ? "wrapper_box added_color_box"
                : "wrapper_box" && activeStep === 4
                ? "wrapper_box"
                : "wrapper_box added_color_box" && activeStep === 1
                ? "wrapper_box"
                : "wrapper_box added_color_box"
            }
          >
            <div className="wrapper_left">
              <div
                className={
                  activeStep === 2
                    ? "step_index border_right_none d-none d-md-block"
                    : "step_index d-none d-md-block" && activeStep === 3
                    ? "step_index border_right_none d-none d-md-block"
                    : "step_index d-none d-md-block"
                }
              >
                <div className="step-indicator">
                  <div
                    onClick={() => changingStep(1)}
                    className={
                      "step step1 " + (activeStep >= 1 ? "active" : "")
                    }
                  >
                    <div
                      className={
                        activeStep > 1 ? "step-icon pass" : "step-icon"
                      }
                    >
                      1
                    </div>
                    <p>Select Photo </p>
                  </div>
                  <div
                    className={
                      "indicator-line " + (activeStep > 1 ? "active" : "")
                    }
                  ></div>
                  <div
                    onClick={() => changingStep(2)}
                    className={
                      "step step2 " + (activeStep >= 2 ? "active" : "")
                    }
                  >
                    <div
                      className={
                        activeStep > 2 ? "step-icon pass" : "step-icon"
                      }
                    >
                      2
                    </div>
                    <p>Select Colors</p>
                  </div>
                  <div
                    className={
                      "indicator-line " + (activeStep > 2 ? "active" : "")
                    }
                  ></div>
                  <div
                    onClick={() => changingStep(3)}
                    className={
                      "step step3 " + (activeStep >= 3 ? "active" : "")
                    }
                  >
                    <div
                      className={
                        activeStep > 3 ? "step-icon pass" : "step-icon"
                      }
                    >
                      3
                    </div>
                    <p>Visualize Room</p>
                  </div>
                  <div
                    className={
                      "indicator-line " + (activeStep > 3 ? "active" : "")
                    }
                  ></div>
                  <div
                    onClick={() => changingStep(4)}
                    className={
                      "step step4 " + (activeStep >= 4 ? "active" : "")
                    }
                  >
                    <div className="step-icon">4</div>
                    <p>Order Paint</p>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
              <br />

              <div className="page_content">
                {activeStep === 1 && <StepOne {...props} />}
                {activeStep === 2 && <StepTwo {...props} />}
                {activeStep === 3 && <StepThree {...props} />}
                {activeStep === 4 && <StepFour {...props} />}
              </div>
              <br />
              <p className="copyright">Copyright 2022. All Rights Reserved.</p>
              <br />
            </div>

            {/* RightBar Area */}

            <div
              className={
                activeStep === 2
                  ? "right_sidebar_area"
                  : "d-none" && activeStep === 3
                  ? "right_sidebar_area"
                  : "d-none"
              }
            >
              <RightBar {...props} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
