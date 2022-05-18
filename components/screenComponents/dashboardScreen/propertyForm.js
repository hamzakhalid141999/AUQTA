import React, { useEffect, useState } from "react";
import classes from "./forms.module.css";

function PropertyForm() {
  const [categorySelected, setCategorySelected] = useState("buy");
  const handleCategorySelected = (value) => {
    setCategorySelected(value);
  };

  return (
    <div className={classes.form_body}>
      <div className={classes.section}>
        <h1 className={classes.heading}>Basic Information</h1>
        <div className={classes.single_row}>
          <div className={classes.input_field}>
            <p className={classes.label}>Purpose</p>
            <div className={classes.btns_container}>
              <div
                onClick={() => {
                  handleCategorySelected("buy");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    categorySelected === "buy"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  BUY
                </p>
              </div>
              <div className={classes.divider} />
              <div
                onClick={() => {
                  handleCategorySelected("rent");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    categorySelected === "rent"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  RENT
                </p>
              </div>
              <div className={classes.divider} />
              <div
                onClick={() => {
                  handleCategorySelected("invest");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    categorySelected === "invest"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  INVEST
                </p>
              </div>
            </div>
          </div>
          <div className={classes.input_field}>
            <p className={classes.label}>Type</p>
            <div className={classes.btns_container}>
              <div
                onClick={() => {
                  handleCategorySelected("buy");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    categorySelected === "buy"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  COMMERCIAL
                </p>
              </div>
              <div className={classes.divider} />
              <div
                onClick={() => {
                  handleCategorySelected("rent");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    categorySelected === "rent"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  RESIDENTIAL
                </p>
              </div>
              <div className={classes.divider} />
              <div
                onClick={() => {
                  handleCategorySelected("invest");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    categorySelected === "invest"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  PLOT
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.single_row}>
          <p className={classes.label}>Subtype</p>
          <select className={classes.input_field_single}>
            <option></option>
          </select>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>City</p>
            <input
              placeholder="City Name"
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

        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>Address</p>
          <textarea
            placeholder="Type your address"
            style={{ height: "150px" }}
            className={classes.input_field_single}
          />
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Tell us more about your property</h1>

        <div className={classes.single_row}>
          <p className={classes.label}>Subtype</p>
          <input
            placeholder="Enter title"
            className={classes.input_field_single}
          />
        </div>

        <div className={classes.single_row}>
          <div className={classes.three_field_container}>
            <p className={classes.label_dual}>Price</p>
            <input
              placeholder="Price (PKR)  "
              className={classes.input_field_three}
            />
          </div>
          <div className={classes.three_field_container}>
            <p className={classes.label_dual}>Size</p>
            <input
              placeholder="City Name"
              className={classes.input_field_three}
            />
          </div>
          <div className={classes.three_field_container}>
            <p className={classes.label_dual}>Unit</p>
            <select className={classes.input_field_three}>
              <option></option>
            </select>
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Bedrooms</p>
            <input className={classes.input_field_dual} />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Bathrooms</p>
            <input className={classes.input_field_dual} />
          </div>
        </div>
        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>Description</p>
          <textarea
            placeholder="Enter description"
            style={{ height: "150px" }}
            className={classes.input_field_single}
          />
        </div>
        </div>

        <div className={classes.section}>
        <h1 className={classes.heading}>Salient Features</h1>

        <div className={classes.single_row}>
          <p className={classes.label}>Main Features</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{ width: "25%" }}
              className={classes.input_field_with_label_top_container}
            >
              <p className={classes.top_label}>Build Year</p>
              <input className={classes.input_field_single} />
            </div>

            <div
              style={{ width: "25%" }}
              className={classes.input_field_with_label_top_container}
            >
              <p className={classes.top_label}>Facing View</p>
              <input className={classes.input_field_single} />
            </div>

            <div
              style={{ width: "45%" }}
              className={classes.input_field_with_label_top_container}
            >
              <p className={classes.top_label}>Nearby Landmarks</p>
              <select className={classes.input_field_single}>
                <option></option>
              </select>
            </div>
          </div>
        </div>

        <div className={classes.single_row}>
          <p className={classes.label}></p>
          <div className={classes.checkboxes_container}>
            <div className={classes.checkbox_container}>
              <p className={classes.checkbox_label}>Basement Included</p>
              <input className={classes.checkbox} type="checkbox" />
            </div>
            <div className={classes.checkbox_container}>
              <p className={classes.checkbox_label}>Parking Spaces</p>
              <input className={classes.checkbox} type="checkbox" />
            </div>
            <div className={classes.checkbox_container}>
              <p className={classes.checkbox_label}>Central Heating</p>
              <input className={classes.checkbox} type="checkbox" />
            </div>
            <div className={classes.checkbox_container}>
              <p className={classes.checkbox_label}>Central Cooling</p>
              <input className={classes.checkbox} type="checkbox" />
            </div>
            <div className={classes.checkbox_container}>
              <p className={classes.checkbox_label}>Furnished</p>
              <input className={classes.checkbox} type="checkbox" />
            </div>
            <div className={classes.checkbox_container}>
              <p className={classes.checkbox_label}>Semi Furnished</p>
              <input className={classes.checkbox} type="checkbox" />
            </div>
            <div className={classes.checkbox_container}>
              <p className={classes.checkbox_label}>Double Glazed Windows</p>
              <input className={classes.checkbox} type="checkbox" />
            </div>
            <div className={classes.checkbox_container}>
              <p className={classes.checkbox_label}>Electricity Backup</p>
              <input className={classes.checkbox} type="checkbox" />
            </div>
            <div className={classes.checkbox_container}>
              <p className={classes.checkbox_label}>Waste Disposal</p>
              <input className={classes.checkbox} type="checkbox" />
            </div>
            <div className={classes.checkbox_container}>
              <p className={classes.checkbox_label}>
                Access to Nearby Public Transport
              </p>
              <input className={classes.checkbox} type="checkbox" />
            </div>
            <div
              style={{ width: "25%" }}
              className={classes.input_field_with_label_top_container}
            >
              <p className={classes.top_label}>Other Main Features</p>
              <input className={classes.input_field_single} />
            </div>
          </div>
        </div>
        <div className={classes.single_row}>
          <p className={classes.label}>Images</p>

          <div className={classes.container_with_top_label}>
            <p className={classes.small_label}>Upload at least 570x570 resolution images</p>
          <div className={classes.image_holder_container}>
          <div className={classes.image_holder}>
            <p>Add Images</p>
          </div>
          <div className={classes.image_holder}>
            <p>Add Images</p>
          </div>
          <div className={classes.image_holder}>
            <p>Add Images</p>
          </div>
          <div className={classes.image_holder}>
            <p>Add Images</p>
          </div>
          <div className={classes.image_holder}>
            <p>Add Images</p>
          </div>
          <div className={classes.image_holder}>
            <p>Add Images</p>
          </div>
          </div>
          </div>
          
         
        </div>
        </div>


      <div className={classes.section}>
        <h1 className={classes.heading}>Contact Details</h1>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Phone</p>
            <input
              placeholder="Phone (Work)"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Phone</p>
            <input
              placeholder="Phone (Home)"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Email</p>
            <input
              placeholder="Enter Email"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>CNIC#</p>
            <input
              placeholder="XXXXX XXX XXXX X"
              className={classes.input_field_dual}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default PropertyForm;
