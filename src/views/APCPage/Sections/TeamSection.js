import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/sarbani.jpg";
import team2 from "assets/img/ramprasad.jpg";
import team3 from "assets/img/faces/kendall.jpg";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Dr. Sarbani Banerjee Belur
                <br />
                <small className={classes.smallTitle}>Senior Research Scientist</small>
                <br />
                <small className={classes.smallTitle}>Gram Marg, IIT Bombay</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Dr. Sarbani Banerjee Belur holds a PhD in Demography 
                  from the University of Groningen, The Netherlands. 
                  She has a MA in Sociology from the University of Hyderabad. 
                </p>
                <p className={classes.description}>
                  Currently she is a senior research scientist in the 
                  Gram Marg Rural Broadband initiative at the 
                  Department of Electrical Engineering, IIT Bombay, Mumbai, India.
                </p>
                <Button
                  color="warning"
                  size="sm"
                  href="https://www.apc.org/en/users/sarbani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  APC Webpage
                </Button>
                <Button
                  color="info"
                  size="sm"
                  href="http://homepages.iitb.ac.in/~sarbanibelur/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Personal Homepage
                </Button>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ramprasad V
                <br />
                <small className={classes.smallTitle}>Associate Programme Manager</small>
                <br />
                <small className={classes.smallTitle}>BAIF Development Research Foundation</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Ramprasad V is a development pursuer working on 
                  ICT initiatives at BAIF Development Research Foundation (BAIF). 
                </p>
                <p className={classes.description}>
                  He has been working at BAIF in Pune, India, 
                  where he is working on different digital interventions 
                  such as the eDost model, digital village ecosystem, 
                  rural-focused women-run call centre, uptake of software systems 
                  in the organisation and different forms of digital empowerment. 
                  </p>
                <p className={classes.description}>
                  {/* You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site. */}
                </p>
                <Button
                  color="warning"
                  size="sm"
                  href="https://www.apc.org/en/users/ramprasad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  APC Webpage
                </Button>
                <Button
                  color="info"
                  size="sm"
                  href="https://www.linkedin.com/in/ramprasad07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Personal Homepage
                </Button>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kendall Jenner
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
