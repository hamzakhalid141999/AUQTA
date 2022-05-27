import React, { useEffect, useState } from "react";
import classes from "./forms.module.css";
import {
  residential_subtypes,
  commercial_subtypes,
  plot_subtypes,
  unit_subtypes,
  landmarks,
} from "./dropdowns/dropdowns";

function PropertyForm() {
  const [type, setType] = useState("residential");
  const [subtype, setSubtype] = useState();
  const [purposeSelected, setPurposeSelected] = useState("sell");

  const handleType = (value) => {
    setType(value);
  };

  const handlePurposeSelected = (value) => {
    setPurposeSelected(value);
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
                  handlePurposeSelected("sell");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    purposeSelected === "sell"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  SELL
                </p>
              </div>
              <div className={classes.divider} />
              <div
                onClick={() => {
                  handlePurposeSelected("rent");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    purposeSelected === "rent"
                      ? classes.filter_panel_btn_label_selected
                      : classes.filter_panel_btn_label_unselected
                  }
                >
                  RENT
                </p>
              </div>
            </div>
          </div>
          <div className={classes.input_field}>
            <p className={classes.label}>Type</p>
            <div className={classes.btns_container}>
              <div
                onClick={() => {
                  handleType("residential");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    type === "residential"
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
                  handleType("commercial");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    type === "commercial"
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
                  handleType("plot");
                }}
                className={classes.filter_panel_btn}
              >
                <p
                  className={
                    type === "plot"
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
          <div className={classes.two_field_container}>
            <p className={classes.label}>Subtype</p>
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setSubtype(e.target.value);
              }}
              style={{ width: "100%" }}
              className={classes.input_field_single}
            >
              {type === "residential"
                ? residential_subtypes?.map((subtype, index) => (
                    <option key={index}>{subtype}</option>
                  ))
                : type === "commercial"
                ? commercial_subtypes?.map((subtype, index) => (
                    <option value={subtype} key={index}>
                      {subtype}
                    </option>
                  ))
                : type === "plot" &&
                  plot_subtypes?.map((subtype, index) => (
                    <option key={index}>{subtype}</option>
                  ))}
            </select>
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>City</p>
            <input
              placeholder="City Name"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Location</p>
            <input
              placeholder="Location Area"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Province</p>
            <select
              style={{ width: "100%" }}
              className={classes.input_field_single}
            >
              <option>Punjab</option>
              <option>Sindh</option>
              <option>KPK</option>
              <option>Baluchistan</option>
              <option>Gilgit Baltistan</option>
            </select>
          </div>
        </div>

        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>Address</p>
          <textarea
            style={{ height: "150px" }}
            className={classes.input_field_single}
          />
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Tell us more about your property</h1>

        <div className={classes.single_row}>
          <p className={classes.label}>Title</p>
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
              {unit_subtypes?.map((unit_subtype, index) => (
                <option key={index}>{unit_subtype}</option>
              ))}
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
            style={{ height: "150px", paddingTop: "10px" }}
            className={classes.input_field_single}
          />
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Salient Features</h1>

        {type === "residential" ? (
          <>
            <p style={{ marginTop: "40px" }} className={classes.label}>
              Main Features
            </p>

            <div className={classes.single_row}>
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
                    {landmarks?.map((landmark, index) => (
                      <option key={index}>{landmark}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Basement Included</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Parking Spaces</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Central Heating</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Central Cooling</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Furnished</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Semi Furnished</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>
                    Double Glazed Windows
                  </p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Electricity Backup</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Waste Disposal</p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p className={classes.top_label}>Other Features</p>
                <input
                  style={{ width: "30%" }}
                  className={classes.input_field_single}
                />
              </div>
            </div>

            <p className={classes.label}>Rooms</p>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>TV Longue</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Dining Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Drawing Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Kitchen</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Dirty Kitchen</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Storeroom</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Ironing Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Powder Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Laundry Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Study Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Home Theatre</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Gym</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Prayer Room</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Servant Quarter</p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p className={classes.top_label}>Other Features</p>
                <input
                  style={{ width: "30%" }}
                  className={classes.input_field_single}
                />
              </div>
            </div>

            <p className={classes.label}>Utilities</p>

            <div className={classes.single_row}>
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Electricity</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Gas</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Water</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Maintenance</p>
                </div>
              </div>
            </div>

            <p className={classes.label}>Communication</p>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Broadband Access</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>
                    Sattelite or TV Cable Access
                  </p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Intercom</p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p className={classes.top_label}>Other Features</p>
                <input
                  style={{ width: "30%" }}
                  className={classes.input_field_single}
                />
              </div>
            </div>

            <p className={classes.label}>Other Features/Facilities</p>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Security Staff</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Maintenance Staff</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>CCTV</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>
                    Accessibility for Special or Elderly Persons
                  </p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p className={classes.top_label}>Other Features</p>
                <input
                  style={{ width: "30%" }}
                  className={classes.input_field_single}
                />
              </div>
            </div>
          </>
        ) : type === "commercial" ? (
          <>
            <p style={{ marginTop: "40px" }} className={classes.label}>
              Main Features
            </p>

            <div className={classes.single_row}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {subtype !== "Factory" && subtype !== "Warehouse" ? (
                  <>
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
                      <p className={classes.top_label}>Floors in Building</p>
                      <input
                        type="number"
                        className={classes.input_field_single}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      style={{ width: "45%" }}
                      className={classes.input_field_with_label_top_container}
                    >
                      <p className={classes.top_label}>Build Year</p>
                      <input className={classes.input_field_single} />
                    </div>

                    <div
                      style={{ width: "45%" }}
                      className={classes.input_field_with_label_top_container}
                    >
                      <p className={classes.top_label}>Nearby Landmarks</p>
                      <select className={classes.input_field_single}>
                        {landmarks?.map((landmark, index) => (
                          <option key={index}>{landmark}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>
            {subtype !== "Factory" && subtype !== "Warehouse" && (
              <div className={classes.single_row}>
                <div
                  style={{ width: "100%" }}
                  className={classes.input_field_with_label_top_container}
                >
                  <p className={classes.top_label}>Nearby Landmarks</p>
                  <select className={classes.input_field_single}>
                    {landmarks?.map((landmark, index) => (
                      <option key={index}>{landmark}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div style={{flexDirection: 'column'}} className={classes.single_row}>
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Parking</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Electricity Backup</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Elevator/Lift</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>
                    Access to Nearby Public Transport
                  </p>
                </div>
           
              </div>
              <div
                    style={{ width: "100%" }}
                    className={classes.input_field_with_label_top_container}
                  >
                    <p style={{ width: "30%" }} className={classes.top_label}>
                      Other Features
                    </p>
                    <input className={classes.input_field_single} />
                  </div>
            </div>

            {subtype !== "Factory" && subtype !== "Warehouse" && (
              <>
                <p className={classes.label}>Rooms</p>

                <div
                  style={{ flexDirection: "column" }}
                  className={classes.single_row}
                >
                  <div className={classes.checkboxes_container}>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Conference Room</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Media Room</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Cabin Room</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Kitchen</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Bathroom</p>
                    </div>
                    <div className={classes.checkbox_container}>
                      <input className={classes.checkbox} type="checkbox" />
                      <p className={classes.checkbox_label}>Store Room</p>
                    </div>
                  </div>
                  <div
                    style={{ width: "100%" }}
                    className={classes.input_field_with_label_top_container}
                  >
                    <p style={{ width: "30%" }} className={classes.top_label}>
                      Other Features
                    </p>
                    <input className={classes.input_field_single} />
                  </div>
                </div>
              </>
            )}

            <p className={classes.label}>Utilities</p>

            <div className={classes.single_row}>
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Electricity</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Gas</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Water</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Maintenance</p>
                </div>
              </div>
            </div>

            <p className={classes.label}>Communication</p>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Broadband Access</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>
                    Sattelite or TV Cable Access
                  </p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Intercom</p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p style={{ width: "30%" }} className={classes.top_label}>
                  Other Features
                </p>
                <input className={classes.input_field_single} />
              </div>
            </div>

            <p className={classes.label}>Other Features/Facilities</p>

            <div
              style={{ flexDirection: "column" }}
              className={classes.single_row}
            >
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Security Staff</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Maintenance Staff</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>CCTV</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>
                    Accessibility for Special or Elderly Persons
                  </p>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                className={classes.input_field_with_label_top_container}
              >
                <p style={{ width: "30%" }} className={classes.top_label}>
                  Other Features
                </p>
                <input className={classes.input_field_single} />
              </div>
            </div>
          </>
        ) : (
          <>
            <p style={{ marginTop: "40px" }} className={classes.label}>
              Main Features
            </p>

            <div className={classes.single_row}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{ width: "100%" }}
                  className={classes.input_field_with_label_top_container}
                >
                  <p className={classes.top_label}>Nearby Landmarks</p>
                  <select className={classes.input_field_single}>
                    {landmarks?.map((landmark, index) => (
                      <option key={index}>{landmark}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div style={{flexDirection: 'column'}} className={classes.single_row}>
              <div className={classes.checkboxes_container}>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Possession</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Utilities Paid</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Solid Land</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Filled Land</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Corner</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Boulevard Facing</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Park Facing</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Extra Land</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Boundary Wall</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Water Supply</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>Gas Supply</p>
                </div>
                <div className={classes.checkbox_container}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p className={classes.checkbox_label}>
                    Access to Nearby Public Transport
                  </p>
                </div>
              
              </div>
              <div
                    style={{ width: "100%" }}
                    className={classes.input_field_with_label_top_container}
                  >
                    <p style={{ width: "30%" }} className={classes.top_label}>
                      Other Features
                    </p>
                    <input className={classes.input_field_single} />
                  </div>
            </div>
          </>
        )}

        <div style={{ marginTop: "80px" }} className={classes.single_row}>
          <p className={classes.label}>Images</p>

          <div className={classes.container_with_top_label}>
            <p className={classes.small_label}>
              Upload at least 570x570 resolution images
            </p>
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
