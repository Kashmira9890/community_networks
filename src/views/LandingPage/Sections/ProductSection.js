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

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Mission</h2>
          <h5 className={classes.description} justify="left">
            <b>
              The Community Networks Learning Grant by the Association for 
              Progressive Communications (APC) aims to contribute 
              an enabling ecosystem for the emergence and growth of community networks 
              and other community-based connectivity initiatives in developing countries.
            </b>
            <p>For more click here.</p>
          </h5>
          <h5 className={classes.description}>
            <b>
              Gram Marg, IIT Bombay and BAIF Development Research Foundation, 
              Pune have been the recipients of the APC Community Networks Learning Grant.
              Gram Marg{"'"}s mission is to enable rural India digitally
              through technology development, field implementation and deployment
              of the technology solutions and creating sustainable business models
              for connectivity.
            </b>
            <p>For more click here.</p>
          </h5>
          <h5 className={classes.description}>
            <b>
              BAIF’s Mission is to create opportunities for gainful self-employment for the rural families, ensuring sustainable livelihood and improved quality of life.
            </b>
            <p>For more click here.</p>
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
