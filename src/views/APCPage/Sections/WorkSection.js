import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import BgImage from 'assets/img/bgs/bg0003.jpg';

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const styles = {
    root: {
      background: "black"
    },
    input: {
      color: "white"
    }
  };
  const sectionStyle = {
    // height: "100vh",
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center" style={sectionStyle}>
      {/* <GridContainer justify="center" style={{ backgroundColor: "#69d2e7" }}> */}
        <GridItem cs={12} sm={12} md={8}>
          <h2 
            className={classes.title} 
            // style={{color: 'white'}}
          >
            Work with us
          </h2>
          <h4 
            className={classes.description} 
            // style={{color: 'white'}}
          >
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  style={{color: 'whitesmoke'}}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                // labelProps={{
                //   color: 'red',
                //   variant: 'outlined'
                // }}
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
