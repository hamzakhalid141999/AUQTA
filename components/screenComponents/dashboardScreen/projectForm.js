import React, { useState, useEffect } from "react";
import classes from "./forms.module.css";

function ProjectForm() {
  const [categorySelected, setCategorySelected] = useState("buy");
  const [featureArr, setFeatureArr] = useState([1]);
  const [amenityArr, setAmenityArr] = useState([1]);
  const handleCategorySelected = (value) => {
    setCategorySelected(value);
  };

  const handleAddField = () => {
    setFeatureArr((array) => [...array, featureArr.length + 1]);
  };

  const handleAddAmenity = () => {
    setAmenityArr((array) => [...array, amenityArr.length + 1]);
  };
  console.log(featureArr);

  return (
    <div className={classes.form_body}>
      <div className={classes.section}>
        <h1 className={classes.heading}>Project Information</h1>
        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Project Name</p>
            <input
              placeholder="City Name"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Price Range (PKR) </p>
            <div
              style={{ width: "35%" }}
              className={classes.input_field_with_label_top_container}
            >
              <p className={classes.top_label}>From</p>
              <input className={classes.input_field_single} />
            </div>
            <div
              style={{ width: "35%" }}
              className={classes.input_field_with_label_top_container}
            >
              <p className={classes.top_label}>To</p>
              <input className={classes.input_field_single} />
            </div>
          </div>
        </div>

        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>Project Description</p>
          <textarea
            style={{ height: "150px" }}
            className={classes.input_field_single}
          />
        </div>
        <div className={classes.single_row}>
          <p className={classes.label}>Project</p>
          <input
            placeholder="Write about your project"
            className={classes.input_field_single}
          />
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Since</p>
            <input
              placeholder="Type Year"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Projects Developed</p>
            <input className={classes.input_field_dual} />
          </div>
        </div>

        <div className={classes.single_row}>
          <div
            style={{ width: "100%", alignItems: "normal" }}
            className={classes.two_field_container}
          >
            <p style={{ marginTop: "17px" }} className={classes.label}>
              Features
            </p>
            <div className={classes.infinite_input_fields_container}>
              {featureArr?.map((feature, index) => (
                <div
                  key={index}
                  className={classes.looped_input_field_container}
                >
                  <input
                    style={{ width: "100%", marginBottom: "20px" }}
                    placeholder={
                      featureArr?.length === index + 1
                        ? "Add more"
                        : "Feature " + parseInt(index + 1)
                    }
                    className={classes.input_field_dual}
                  />
                  {featureArr?.length === index + 1 && (
                    <div className={classes.add_btn_border}>
                      <h3
                        onClick={() => {
                          handleAddField();
                        }}
                        className={classes.add_field}
                      >
                        +
                      </h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.single_row}>
          <div
            style={{ width: "100%", alignItems: "normal" }}
            className={classes.two_field_container}
          >
            <p style={{ marginTop: "17px" }} className={classes.label}>
              Amenities
            </p>
            <div className={classes.infinite_input_fields_container}>
              {amenityArr?.map((amenity, index) => (
                <div
                  key={index}
                  className={classes.looped_input_field_container}
                >
                  <input
                    style={{ width: "100%", marginBottom: "20px" }}
                    placeholder={
                      amenityArr?.length === index + 1
                        ? "Add more"
                        : "Amenity " + parseInt(index + 1)
                    }
                    className={classes.input_field_dual}
                  />
                  {amenityArr?.length === index + 1 && (
                    <div className={classes.add_btn_border}>
                      <h3
                        onClick={() => {
                          handleAddAmenity();
                        }}
                        className={classes.add_field}
                      >
                        +
                      </h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>City</p>
            <input
              placeholder="City Namw"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Location</p>
            <input
              placeholder="Location Area"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div style={{ width: "25%" }} className={classes.two_field_container}>
            <p
              style={{
                width: "95%",
                fontSize: "13px",
                color: "rgb(56, 56, 56)",
                fontWeight: "bolder",
              }}
            >
              Government Approved
            </p>
            <input
              style={{ width: "10%" }}
              type="checkbox"
              className={classes.checkbox}
            />
          </div>
          <div style={{ width: "60%" }} className={classes.two_field_container}>
            <p
              style={{
                width: "30%",
                fontSize: "13px",
                color: "rgb(56, 56, 56)",
                fontWeight: "bolder",
              }}
            >
              Approval Body
            </p>
            <input className={classes.input_field_dual} />
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Data Upload</h1>
        <div className={classes.single_row}>
          <div className={classes.data_tabs_container}>
            <div className={classes.data_input_container}>
              <input
                style={{ width: "100%", marginBottom: "20px" }}
                placeholder="Images"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>

            <div className={classes.data_input_container}>
              <input
                style={{ width: "100%", marginBottom: "20px" }}
                placeholder="Brochure"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>

            <div className={classes.data_input_container}>
              <input
                style={{ width: "100%", marginBottom: "20px" }}
                placeholder="Price Plan"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>

            <div className={classes.data_input_container}>
              <input
                style={{ width: "100%", marginBottom: "20px" }}
                placeholder="Floor Plan"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>

            <div className={classes.data_input_container}>
              <input
                style={{ width: "100%", marginBottom: "20px" }}
                placeholder="Shop Availability"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Project Timelines</h1>
        <div className={classes.single_row}>
          <div style={{ width: "65%" }} className={classes.two_field_container}>
            <p className={classes.label}>Start Date</p>
            <div
              style={{ marginBottom: "0px", width: "40%" }}
              className={classes.data_input_container}
            >
              <input
                style={{ width: "100%" }}
                placeholder="Image"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>
            <input
              style={{ width: "35%", paddingRight: "20px" }}
              type="date"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div style={{ width: "65%" }} className={classes.two_field_container}>
            <p className={classes.label}>End Date</p>
            <div
              style={{ marginBottom: "0px", width: "40%" }}
              className={classes.data_input_container}
            >
              <input
                style={{ width: "100%" }}
                placeholder="Image"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>
            <input
              style={{ width: "35%", paddingRight: "20px" }}
              type="date"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div style={{ width: "65%" }} className={classes.two_field_container}>
            <p className={classes.label}>
              1st <br /> Milestone
            </p>
            <div
              style={{ marginBottom: "0px", width: "40%" }}
              className={classes.data_input_container}
            >
              <input
                style={{ width: "100%" }}
                placeholder="Image"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>
            <input
              style={{ width: "35%", paddingRight: "20px" }}
              type="date"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div style={{ width: "65%" }} className={classes.two_field_container}>
            <p className={classes.label}>
              2nd <br /> Milestone
            </p>
            <div
              style={{ marginBottom: "0px", width: "40%" }}
              className={classes.data_input_container}
            >
              <input
                style={{ width: "100%" }}
                placeholder="Image"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>
            <input
              style={{ width: "35%", paddingRight: "20px" }}
              type="date"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div style={{ width: "65%" }} className={classes.two_field_container}>
            <p className={classes.label}>
              3rd <br /> Milestone
            </p>
            <div
              style={{ marginBottom: "0px", width: "40%" }}
              className={classes.data_input_container}
            >
              <input
                style={{ width: "100%" }}
                placeholder="Image"
                className={classes.input_field_dual}
              />
              <div className={classes.add_btn_border}>
                <h3 className={classes.add_field}>+</h3>
              </div>
            </div>
            <input
              style={{ width: "35%", paddingRight: "20px" }}
              type="date"
              className={classes.input_field_dual}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;

// {featureArr?.map((feature) => (
//     <>
//       <input
//         style={{ width: "100%", marginBottom: "20px" }}
//         placeholder={"Feature"+feature}
//         className={classes.input_field_dual}
//       />
//       <h3
//         onClick={() => {
//           handleAddField();
//         }}
//         className={classes.add_field}
//       >
//         +
//       </h3>
//     </>
//   ))}
