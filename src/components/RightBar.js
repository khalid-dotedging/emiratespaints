import React, { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function RightBar(props) {
  const activeStep = props.tabProps;
  const changingStep = (step) => {
    props.setTabProps(step);
  };

  const selectedColors = props.selectedColorProps;

  // if (props.selectedColorProps) {
  //   setSelectedColors(props.selectedColorProps);
  // }

  const trashColor = (color) => {
    var dataArray = JSON.parse(JSON.stringify(props.selectedColorProps));
    var index = dataArray.indexOf(color);
    dataArray.splice(index, 1);
    props.setSelectedColorProps(dataArray);
  };
  const [usedColors, setUsedColors] = useState([
    {
      id: 1,
      title: "Red",
      color_code: "#FF0000	",
      color_type: "free",
    },
    {
      id: 2,
      title: "Cyan",
      color_code: "#00FFFF",
      color_type: "paid",
    },
    {
      id: 3,
      title: "Blue",
      color_code: "#0000FF",
      color_type: "free",
    },
    {
      id: 4,
      title: "DarkBlue",
      color_code: "#00008B",
      color_type: "free",
    },
    {
      id: 5,
      title: "LightBlue",
      color_code: "#ADD8E6",
      color_type: "paid",
    },
    {
      id: 6,
      title: "Purple",
      color_code: "#800080",
      color_type: "free",
    },
    {
      id: 7,
      title: "Yellow",
      color_code: "#FFFF00",
      color_type: "paid",
    },
    {
      id: 8,
      title: "Lime",
      color_code: "#00FF00",
      color_type: "free",
    },
    {
      id: 9,
      title: "Magenta",
      color_code: "#FF00FF",
      color_type: "free",
    },
    {
      id: 10,
      title: "Pink",
      color_code: "#FFC0CB",
      color_type: "paid",
    },
    {
      id: 12,
      title: "Silver",
      color_code: "#C0C0C0",
      color_type: "free",
    },
    {
      id: 13,
      title: "Gray or Grey",
      color_code: "#808080",
      color_type: "free",
    },
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

  // modal show hide
  const [showColorModal, setShowColorModal] = useState(false);

  const openColorModal = () => {
    setShowColorModal(true);
  };
  const closeColorModal = () => {
    setShowColorModal(false);
  };
  return (
    <div className="color_select_area">
      <div className="color_select_header mobile_none">
        <div
          className={
            selectedColors.length > 0 ? "color_count active" : "color_count"
          }
        >
          <i className="fas fa-palette text-white"></i>
          <span className="count">{selectedColors.length}</span>
        </div>
        <div className="color_dsc">Saved Colors</div>
      </div>

      <div className="selected_color_area">
        <div className="view_changing_area">
          {activeStep === 2 && (
            <Fragment>
              {selectedColors.length > 0 ? (
                <Button onClick={() => changingStep(3)} className="next_btn">
                  Paint Your Room{" "}
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span>
                </Button>
              ) : (
                <div className="primary_stage">
                  You haven't saved any colors yet.
                </div>
              )}
              <div className="selected_colors">
                {selectedColors.length > 0
                  ? selectedColors.map((color) => (
                      <div key={color.id} className="single_color">
                        <div onClick={openColorModal} className="color_dscrip">
                          <div
                            className="color_view"
                            style={{ background: color.color_code }}
                          ></div>
                          <div className="title">
                            {color.title}
                            <br />
                            <span className="color_ppg">
                              {color.color_code}
                            </span>
                          </div>
                        </div>
                        <div className="color_action">
                          <Button
                            onClick={() => trashColor(color.id)}
                            className="delete_btn"
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </Fragment>
          )}

          {activeStep === 3 && (
            <Fragment>
              {usedColors.length > 0 ? (
                <Fragment>
                  <Button onClick={() => changingStep(4)} className="next_btn">
                    Order Paint
                    <span>
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </Button>
                  <Button className="next_btn gray">
                    <span className="pad_right">
                      <i className="fa fa-save"></i>
                    </span>
                    Save Project
                  </Button>
                </Fragment>
              ) : (
                <div className="primary_stage">
                  Click a wall to paint the selected color.
                </div>
              )}

              <div onClick={() => changingStep(2)} className="add_more_color">
                <div className="plus_area">
                  <i className="far fa-plus"></i>
                </div>
                <div className="add_more_text">SAVE MORE COLORS</div>
              </div>
              <div className="selected_colors">
                {selectedColors.length > 0
                  ? selectedColors.map((color) => (
                      <div key={color.id} className="single_color">
                        <div className="color_dscrip">
                          <div
                            className="color_view"
                            style={{ background: color.color_code }}
                          ></div>
                          <div className="title">
                            {color.title}
                            <br />
                            <span className="color_ppg">
                              {color.color_code}
                            </span>
                          </div>
                        </div>
                        <div className="color_action">
                          <Button
                            onClick={() => trashColor(color.id)}
                            className="delete_btn"
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </Fragment>
          )}
        </div>
      </div>
      <Modal size="lg" show={showColorModal} onHide={closeColorModal}>
        <Modal.Header className="no_border" closeButton></Modal.Header>
        <Modal.Body>
          <div className="color_modal_container">
            <div className="single_modal_color">
              <div className="title"> Red</div>
              <div className="color_code">#57845448</div>
              <span className="checkmark">
                <i className="fa fa-check"></i>
              </span>
            </div>
            <br />

            <div className="row">
              <div className="col-12 col-md-6">
                <div className="modal_section_heading">Similar Shades</div>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="modal_section_heading">Coordinating Colors</div>
                <p>Trim & Ceiling</p>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <p>Accent</p>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="single_modal_color">
                  <div className="title"> Red</div>
                  <div className="color_code">#57845448</div>
                  <span className="checkmark">
                    <i className="fa fa-check"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
