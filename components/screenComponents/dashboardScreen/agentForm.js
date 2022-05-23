import React from "react";
import classes from "./forms.module.css";

function AgentForm() {
  return (
    <div className={classes.form_body}>
      <div className={classes.section}>
        <h1 className={classes.heading}>Agent Information</h1>
        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Name</p>
            <input
              placeholder="Enter name"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Since</p>
            <input
              placeholder="Type year"
              className={classes.input_field_dual}
            />
          </div>
        </div>

        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}>About Information</p>
          <textarea
            style={{ height: "150px" }}
            className={classes.input_field_single}
          />
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Contact Details</h1>
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
          <p className={classes.label}>Corporate Address</p>
          <textarea
            style={{ height: "150px" }}
            className={classes.input_field_single}
          />
        </div>
        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Website URL</p>
            <input
              placeholder="https://www.example.com"
              className={classes.input_field_dual}
            />
          </div>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Social Media</p>
            <select
              placeholder="Location Area"
              className={classes.input_field_dual}
            >
              <option>Facebook</option>
              <option>Twitter</option>
              <option>Instagram</option>

            </select>
          </div>
        </div>
        <div className={classes.single_row}>
          <div className={classes.two_field_container}>
            <p className={classes.label_dual}>Logo Attachment</p>
            <input
              placeholder="City Name"
              className={classes.input_field_dual}
            />
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <h1 className={classes.heading}>Add Project</h1>
        <div style={{ alignItems: "normal" }} className={classes.single_row}>
          <p className={classes.label}></p>
          <div style={{columnGap: '15px'}} className={classes.image_holder_container}>
          <div className={classes.project_holder}>
            <p>Add Project</p>
            <div className={classes.add_btn_border_without_absolute}>
                <h3 className={classes.add_field}>+</h3>
              </div>
          </div>

          <div className={classes.project_holder}>
            <p>Add Project</p>
            <div className={classes.add_btn_border_without_absolute}>
                <h3 className={classes.add_field}>+</h3>
              </div>
          </div>

          <div className={classes.project_holder}>
            <p>Add Project</p>
            <div className={classes.add_btn_border_without_absolute}>
                <h3 className={classes.add_field}>+</h3>
              </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default AgentForm;
