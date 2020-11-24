import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Paper from '@material-ui/core/Paper';

import Icon from "@material-ui/core/Icon";
import Avatar from '@material-ui/core/Avatar';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Button from "components/CustomButtons/Button.js";

import apc from "assets/img/apc.png";
import grammarg from "assets/img/grammarg.png";
import baif from "assets/img/baif.png";
import apcjpg from "assets/img/apc_carousal_pic1.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import BgImage from 'assets/img/oldsite/landing.png'; // Import using relative path

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const apcIcon = (
    <Icon>
      <img alt="apc" src="apc.jpg" />
    </Icon>
  );
  const styles = {
    gridContainer: {
      // backgroundImage: `url(${BgImage})`,
      opacity: 0,
    }
  };
  const sectionStyle = {
    // height: "100vh",
    backgroundImage: `url(${BgImage})`,
    // backgroundColor: '#b2d9ea',
    // background: "linear-gradient(#E5FCC2, #9DE0AD, #45ADA8, #547980, #594F4F)",
    // https://digitalsynopsis.com/design/minimal-web-color-palettes-combination-hex-code/
    // background: "linear-gradient(#daded4, #a3bcb6)",
    // https://hookagency.com/website-color-schemes/
    // opacity: 0.7,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  const sectionStyle2 = {
    opacity: 1,
  };
  return (
    // <div className={classes.section} style={{backgroundColor: '#e91e63', opacity: 0.5}}>
    <div className={classes.section}>
    {/* <div className={classes.section}> */}
      <GridContainer justify="center" style={sectionStyle}>
        <GridItem xs={12} sm={12} md={8}>
          <a href="#mission">
            <h2 className={classes.title}>Mission</h2>
          </a>
          {/* <h5 className={classes.description} align="left">
            The Community Networks Learning Grant by the
            Association for Progressive Communications (APC)
            aims to contribute an enabling ecosystem for the 
            emergence and growth of community networks and 
            other community-based connectivity initiatives 
            in developing countries.
          </h5>
          <a align="center">Click here to know more</a>
          <h5 className={classes.description} align="left">         
            Gram Marg, IIT Bombay and BAIF Development Research 
            Foundation, Pune have been the recipients of the 
            APC Community Networks Learning Grant.
            Gram Marg's mission is to enable rural India digitally 
            through technology development, field implementation 
            and deployment of the technology solutions and 
            creating sustainable business models for connectivity.
          </h5>
          <a align="center">Click here to know more</a>
          <h5 className={classes.description} align="left">
            BAIF’s Mission is to create opportunities for gainful 
            self-employment for the rural families, ensuring 
            sustainable livelihood and improved quality of life.
          </h5>
          <a align="center">Click here to know more</a> */}
        </GridItem>
      {/* </GridContainer> */}
      {/* <GridContainer justify="center"> */}
        {/*  <GridItem xs={12} sm={12} md={4}>
            // <Avatar alt="APC" src="assets/img/apc_carousal_pic1.jpg" />
            <InfoArea
              title="APC"
              description="The Community Networks Learning Grant by the
                            Association for Progressive Communications (APC)
                            aims to contribute an enabling ecosystem for the 
                            emergence and growth of community networks and 
                            other community-based connectivity initiatives 
                            in developing countries."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              align="left"
              description="Gram Marg, IIT Bombay and BAIF Development Research 
                            Foundation, Pune have been the recipients of the 
                            APC Community Networks Learning Grant.
                            Gram Marg's mission is to enable rural India digitally 
                            through technology development, field implementation 
                            and deployment of the technology solutions and 
                            creating sustainable business models for connectivity."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="BAIF’s Mission is to create opportunities for gainful 
                            self-employment for the rural families, ensuring 
                            sustainable livelihood and improved quality of life."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem> */}
          <GridItem xs={12} sm={12} md={8}>
            <CustomTabs
              // headerColor="primary"
              tabs={[
                {
                  // tabName: "Profile",
                  // tabIcon: Face,
                  tabContent: (
                    <p className={classes.textCenter}>
                      The Community Networks Learning Grant 
                      by the <b>Association for Progressive Communications 
                      (APC)</b> aims to contribute an enabling ecosystem 
                      for the emergence and growth of community networks 
                      and other community-based connectivity initiatives 
                      in developing countries.
                    </p>
                  )
                }
              ]}
            />
            <Button 
              color="rose"
              href="https://www.apc.org/en/community-networks-learning-grant-initiatives"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to know more
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <CustomTabs
              // headerColor="primary"
              tabs={[
                {
                  // tabName: "Messages",
                  // tabIcon: Chat,
                  tabContent: (
                    <p className={classes.textCenter}>
                      <b>Gram Marg, IIT Bombay</b> and BAIF Development Research 
                      Foundation, Pune have been the recipients of the 
                      APC Community Networks Learning Grant.
                      Gram Marg's mission is to enable rural India digitally 
                      through technology development, field implementation 
                      and deployment of the technology solutions and 
                      creating sustainable business models for connectivity.
                    </p>
                  )
                }
              ]}
              />
              <Button 
                color="primary"
                href="http://grammarg.in/#!/mission"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to know more
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
            <CustomTabs
              // headerColor="primary"
              tabs={[
                {
                  // tabName: "Settings",
                  // tabIcon: Build,
                  tabContent: (
                    <p className={classes.textCenter}>
                      <b>BAIF’s</b> Mission is to create opportunities for gainful 
                      self-employment for the rural families, ensuring 
                      sustainable livelihood and improved quality of life.
                    </p>
                  )
                }
              ]}
            />
            <Button 
              color="info"
              href="https://baif.org.in/who-we-are/vision-and-mission"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to know more
            </Button>
          </GridItem>
        </GridContainer>
    </div>
    // </div>
  );
}
