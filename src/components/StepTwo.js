import React, { useState, Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function StepTwo(props) {
  // colors

  const selectedColors = props.selectedColorProps;

  const [colorMatchFile, setColorMatchFile] = useState();
  const [getColorMatchPhoto, setGetColorMatchPhoto] = useState();
  const pickColorMatchPhoto = (event) => {
    setColorMatchFile(event.target.files[0]);
    setGetColorMatchPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const [colorsCategory, setColorsCategory] = useState("");
  const selectColorsCategory = (category) => {
    setColorsCategory(category);
  };
  const [parentsColor, setParentsColor] = useState([
    {
      id: 1,
      title: "Reds",
      color_code: "#c20d00",
    },
    {
      id: 2,
      title: "Oranges",
      color_code: "#E17433",
    },
    {
      id: 3,
      title: "Yellows",
      color_code: "#E9B133",
    },
    {
      id: 4,
      title: "Greens",
      color_code: "#33C439",
    },
    {
      id: 5,
      title: "Blues",
      color_code: "#0073C0",
    },
    {
      id: 6,
      title: "Aquas",
      color_code: "#56D9ED",
    },
    {
      id: 7,
      title: "Purples",
      color_code: "#9933CB",
    },
    {
      id: 8,
      title: "Neutrals",
      color_code: "#C5BAA9",
    },
    {
      id: 9,
      title: "Beiges",
      color_code: "#C5BAA9",
    },
    {
      id: 10,
      title: "Off-Whites",
      color_code: "#FDF1E5",
    },
    {
      id: 11,
      title: "Grays & Blacks",
      color_code: "#B5B4B2",
    },
  ]);

  const [selectedParentsColor, setSelectedParentsColor] = useState("Reds");

  const [colors, setColors] = useState([
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

  const selectColors = (ev) => {
    var target = ev.target;
    var value = target.value;

    var color = colors.find((color) => {
      return color.id == value;
    });
    var checkedStatus = ev.target.checked;
    var dataArray = JSON.parse(JSON.stringify(props.selectedColorProps));
    if (checkedStatus) {
      dataArray.push(color);
    } else {
      var index = dataArray.indexOf(color);
      dataArray.splice(index, 1);
    }
    props.setSelectedColorProps(dataArray);
  };

  // const selectColors = (ev) => {
  //   var target = ev.target;
  //   var value = target.value;
  //   var checkedStatus = ev.target.checked;
  //   var dataArray = JSON.parse(JSON.stringify(props.selectedColorProps));
  //   if (checkedStatus) {
  //     dataArray.push(value);
  //   } else {
  //     var index = dataArray.indexOf(value);
  //     dataArray.splice(index, 1);
  //   }
  //   props.setSelectedColorProps(dataArray);
  // };

  const [palettesSection, setPalettesSection] = useState("");

  const [searchValue, setSearchValue] = useState("");

  return (
    <Fragment>
      {palettesSection.length ? (
        <Fragment>
          <div className="section_headline">
            <div
              onClick={() => {
                setPalettesSection("");
              }}
              className="heading link"
            >
              <span>
                <i className="fas fa-angle-left"></i>
              </span>
              Back to Curated Palettes
            </div>

            <div className="heading">{palettesSection}</div>
          </div>
          <br />
          <div className="browse_color_list">
            {colors.length > 0
              ? colors.map((color) => (
                  <label key={color.id} htmlFor={"color_" + color.id}>
                    <Fragment>
                      <div
                        className="single_color"
                        style={{
                          background: color.color_code,
                        }}
                      >
                        {props.selectedColorProps.length > 0
                          ? props.selectedColorProps.map((check) => (
                              <>
                                {check.id === color.id && (
                                  <span className="checkmark">
                                    <i
                                      className="fa fa-check"
                                      style={{
                                        color: color.color_code,
                                      }}
                                    ></i>
                                  </span>
                                )}
                              </>
                            ))
                          : ""}

                        <input
                          id={"color_" + color.id}
                          type="checkbox"
                          onChange={selectColors}
                          // defaultChecked={false}
                          value={color.id}
                          hidden
                        />
                      </div>
                    </Fragment>
                  </label>
                ))
              : ""}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {colorsCategory.length ? (
            <Fragment>
              <div className="section_headline">
                <div
                  onClick={() => {
                    setColorsCategory("");
                  }}
                  className="heading link"
                >
                  <span>
                    <i className="fas fa-angle-left"></i>
                  </span>
                  Explore Different Colors
                </div>

                <div className="heading">{colorsCategory}</div>
              </div>

              {colorsCategory === "Browse All Colors" && (
                <Fragment>
                  <div className="section_headline">
                    <div className="heading sub gray">
                      {selectedParentsColor}
                    </div>
                    <br />
                  </div>
                  <div className="parent_color_list">
                    {parentsColor.length > 0
                      ? parentsColor.map((color) => (
                          <div
                            onClick={() => setSelectedParentsColor(color.title)}
                            key={color.id}
                            className={
                              selectedParentsColor === color.title
                                ? "single_parent active"
                                : "single_parent"
                            }
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
                        ))
                      : ""}

                    <div className="clear"></div>
                  </div>
                  <div className="clear"></div>
                  <br />
                  <br />
                  <div className="browse_color_list">
                    {colors.length > 0
                      ? colors.map((color) => (
                          <label key={color.id} htmlFor={"color_" + color.id}>
                            <Fragment>
                              <div
                                className="single_color"
                                style={{
                                  background: color.color_code,
                                }}
                              >
                                {props.selectedColorProps.length > 0
                                  ? props.selectedColorProps.map((check) => (
                                      <>
                                        {check.id === color.id && (
                                          <span className="checkmark">
                                            <i
                                              className="fa fa-check"
                                              style={{
                                                color: color.color_code,
                                              }}
                                            ></i>
                                          </span>
                                        )}
                                      </>
                                    ))
                                  : ""}

                                <input
                                  id={"color_" + color.id}
                                  type="checkbox"
                                  onChange={selectColors}
                                  // defaultChecked={false}
                                  value={color.id}
                                  hidden
                                />
                              </div>
                            </Fragment>
                          </label>
                        ))
                      : ""}
                  </div>
                </Fragment>
              )}

              {colorsCategory === "View Curated Palettes" && (
                <Fragment>
                  <br />
                  <div className="images_list color_list">
                    <Link
                      onClick={() => setPalettesSection("The Retreater")}
                      to="#"
                      className="single_image"
                    >
                      <div className="image">
                        <img
                          alt="categories_img"
                          src={
                            require("../assets/images/platers/retreater.png")
                              .default
                          }
                        />
                      </div>
                      <div className="img_title">The Retreater</div>
                    </Link>
                    <Link
                      onClick={() => setPalettesSection("The Dream Weaver")}
                      to="#"
                      className="single_image"
                    >
                      <div className="image">
                        <img
                          alt="categories_img"
                          src={
                            require("../assets/images/platers/dream_weaver.png")
                              .default
                          }
                        />
                      </div>
                      <div className="img_title">The Dream Weaver</div>
                    </Link>
                    <Link
                      onClick={() => setPalettesSection("The COMMoner")}
                      to="#"
                      className="single_image"
                    >
                      <div className="image">
                        <img
                          alt="categories_img"
                          src={
                            require("../assets/images/platers/commoner.png")
                              .default
                          }
                        />
                      </div>
                      <div className="img_title">The COMMoner</div>
                    </Link>
                    <Link
                      onClick={() => setPalettesSection("The Brave")}
                      to="#"
                      className="single_image"
                    >
                      <div className="image">
                        <img
                          alt="categories_img"
                          src={
                            require("../assets/images/platers/brave.png")
                              .default
                          }
                        />
                      </div>
                      <div className="img_title">The Brave</div>
                    </Link>
                  </div>
                </Fragment>
              )}

              {colorsCategory === "Match Colors from a Photo" && (
                <Fragment>
                  {getColorMatchPhoto ? (
                    <Fragment>
                      <div className="section_headline">
                        <div className="heading sub gray">
                          Save colors from your photos.
                        </div>
                        <br />
                      </div>

                      <div className="colllapse_color_list">
                        {colors.length > 0
                          ? colors.slice(0, 6).map((color) => (
                              <Button
                                key={color.id}
                                className="single_origin"
                                style={{
                                  background: color.color_code,
                                }}
                              >
                                {props.selectedColorProps.length > 0 ? (
                                  props.selectedColorProps.map((check) => (
                                    <>
                                      {check.id === color.id && (
                                        <label
                                          htmlFor={"color_" + color.id}
                                          className="add_btn danger"
                                        >
                                          <span className="checkmark">
                                            <i className="fa fa-trash"></i>
                                          </span>
                                         Trash
                                        </label>
                                      )}
                                    </>
                                  ))
                                ) : (
                                  <label
                                    htmlFor={"color_" + color.id}
                                    className="add_btn"
                                  >
                                    <span className="checkmark">
                                      <i className="fa fa-check"></i>
                                    </span>
                                    Add
                                  </label>
                                )}

                                <input
                                  id={"color_" + color.id}
                                  type="checkbox"
                                  hidden
                                  onChange={selectColors}
                                  value={color.id}
                                />
                              </Button>
                            ))
                          : ""}
                      </div>
                      <div className="clear"></div>

                      <div className="paragraph">
                        Click the area of the photo you want to match.
                      </div>
                      <div className="uploaded_photo_for_color">
                        <img
                          className="profile_image"
                          alt="Profile"
                          src={getColorMatchPhoto}
                        />
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className="upload_photo">
                        <input
                          name="profile_pic"
                          id="colorMatchPhoto"
                          type="file"
                          onChange={pickColorMatchPhoto}
                          hidden
                        />
                        <label htmlFor="colorMatchPhoto">
                          <div className="input_area_btn disabled max_size_photo">
                            <i className="fas fa-camera"></i>
                            <br />
                            <div className="text_area small">
                              Drag your photo here or
                            </div>
                            <div className="text_area small color">
                              click here to browse
                            </div>
                          </div>
                        </label>
                      </div>
                    </Fragment>
                  )}
                </Fragment>
              )}
              {colorsCategory === "Search by Color Name" && (
                <Fragment>
                  <div className="paragraph no_padding">
                    Search by color name or number and save it to your project.
                  </div>

                  <br />
                  <div className="searchbox">
                    <span className="search_icon">
                      <i className="fa fa-search"></i>
                    </span>
                    <input
                      onChange={(e) => setSearchValue(e.target.value)}
                      type="text"
                      value={searchValue}
                    />
                  </div>

                  <br />
                  <div className="selected_colors no_border_top">
                    <div className="row">
                      {colors
                        .filter((item) => {
                          if (!searchValue) return true;
                          if (
                            item.title.includes(searchValue) ||
                            item.color_code.includes(searchValue)
                          ) {
                            return true;
                          }
                        })

                        .map((item) => (
                          <div className="col-6">
                            <div key={item.id} className="single_color">
                              <input
                                id={"color_" + item.id}
                                type="checkbox"
                                onChange={selectColors}
                                // defaultChecked={false}
                                value={item.id}
                                hidden
                              />
                              <label htmlFor={"color_" + item.id}>
                                <div className="color_dscrip">
                                  <div
                                    className="color_view"
                                    style={{
                                      background: item.color_code,
                                    }}
                                  ></div>
                                  <div className="title">
                                    {item.title}
                                    <br />
                                    <span className="color_ppg">
                                      {item.color_code}
                                    </span>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </Fragment>
              )}
            </Fragment>
          ) : (
            <Fragment>
              <div className="section_headline">
                <div
                  onClick={() => {
                    // setGetPhoto(null);
                    props.setTabProps(1);
                    // setImagesCategory("");
                  }}
                  className="heading link"
                >
                  <span>
                    <i className="fas fa-angle-left"></i>
                  </span>
                  Select a Different Photo
                </div>

                <div className="heading">Find Colors for Your Photo</div>
                <br />
              </div>
              <div className="images_list color_list">
                <Link
                  onClick={() => selectColorsCategory("Browse All Colors")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/browseall.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Browse All Colors</div>
                </Link>
                <Link
                  onClick={() => selectColorsCategory("View Curated Palettes")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/palaters.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">View Curated Palettes</div>
                </Link>
                <Link
                  onClick={() =>
                    selectColorsCategory("Match Colors from a Photo")
                  }
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/matchcolor.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Match Colors from a Photo</div>
                </Link>
                <Link
                  onClick={() => selectColorsCategory("Search by Color Name")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/search.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Search by Color Name</div>
                </Link>
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
      <div className="d-block d-md-none">
        {selectedColors.length > 0 ? (
          <div className="bottom_bar align_center">
            <Button
              onClick={() => props.setTabProps(3)}
              className="next_btn no_margin"
            >
              Paint Your Room
              <span>
                <i className="fas fa-angle-right"></i>
              </span>
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}
