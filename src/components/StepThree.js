import React, { useState, Fragment } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export default function StepThree(props) {
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
  return (
    <Fragment>
      <div className="section_headline">
        <div onClick={() => props.setTabProps(2)} className="heading link">
          <span>
            <i className="fas fa-angle-left"></i>
          </span>
          Find More Colors
        </div>
        <div className="heading">Visualize Your Room</div>
        <div className="heading sub gray">
          Click a wall to paint the selected color.
        </div>
      </div>
      <br />
      <div className="browse_color_list desktop_none">
        {props.selectedColorProps.length > 0
          ? props.selectedColorProps.map((color) => (
              <label key={color.id} htmlFor={"color_" + color.id}>
                <Fragment>
                  <div
                    className="single_color"
                    style={{
                      background: color.color_code,
                    }}
                  >
                    <span className="checkmark">
                      <i
                        className="fa fa-check"
                        style={{
                          color: color.color_code,
                        }}
                      ></i>
                    </span>
                  </div>
                </Fragment>
              </label>
            ))
          : ""}
      </div>
      <br />

      <div className="photo_edit_frame">
        <div className="frame_header">
          <ButtonGroup>
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
            <Button className="next_btn white_bg fit_width editor_btn border_radious_left_bottom">
              <span className="pad_right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
                  />
                </svg>
              </span>
              Undo
            </Button>
            <Button className="next_btn white_bg fit_width editor_btn">
              <span className="pad_right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M21 7v6h-6" />
                    <path d="M3 17a9 9 0 0 1 9-9a9 9 0 0 1 6 2.3l3 2.7" />
                  </g>
                </svg>
              </span>
              Redo
            </Button>
          </ButtonGroup>

          <Button
            onClick={() => props.setTabProps(2)}
            className="next_btn white_bg fit_width no_margin"
          >
            Change Your Photo
          </Button>
        </div>

        <div className="uploaded_photo no_bg">
          <img
            alt="Logo"
            src={require("../assets/images/categories/bedroom.jpg").default}
          />
        </div>
      </div>

      <div className="d-block d-md-none">
        {usedColors.length > 0 ? (
          <div className="bottom_bar">
            <Button
              onClick={() => props.setTabProps(4)}
              className="next_btn fit_width no_margin"
            >
              Order Paint
              <span>
                <i className="fas fa-angle-right"></i>
              </span>
            </Button>
            <Button className="next_btn gray fit_width no_margin">
              <span className="pad_right">
                <i className="fa fa-save"></i>
              </span>
              Save Project
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}
