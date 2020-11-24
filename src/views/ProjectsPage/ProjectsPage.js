import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function ProjectsPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Projects"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Pathfinder Grants</h4>
                  </CardHeader>
                  {/* <p className={classes.divider}>Or Be Classical</p> */}
                  <CardBody>
                    <p>
                      Pathfinder Grants are available for peer community members 
                      to cover strategic gaps that can affect community network 
                      sustainability. 
                    </p>
                    <p>
                      Some examples of strategic gaps include technological expertise, 
                      business planning, and feasibility studies. 
                    </p>
                    <p>
                      The use of these funds and the total amount of the grant per-peer 
                      community member will be decided collectively with the 
                      pathfinder coordinator, the gender coordinator, and 
                      the respective regional coordinator.
                    </p>
                    <p>
                      Gram Marg received the Pathfinder grant and worked 
                      on the project ' Women-first approach to community network: 
                      A study in Pathardi, Jawhar, Maharashtra'. 
                    </p>
                    <p> 
                      Gram Marg and BAIF Development Research Foundation 
                      worked on this project. 
                    </p>
                    <p>
                      The main aim of this project is to adopt a women-driven 
                      approach to bring about digital ecosystem in Pathardi village. 
                    </p>
                    <p>
                      The project objectives covered by Gram Marg and BAIf are as follows:
                      <ul>
                        <li>
                            To stabilise the network connectivity in Pathardi village 
                            comprising of 5 hamlets.
                        </li>
                        <li>
                          To train the women in the community about digital skills. 
                        </li>  
                      </ul>           
                    </p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    {/* <Button simple color="primary" size="lg">
                      Get started
                    </Button> */}
                  </CardFooter>
                </form>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={10}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Catalytic Intervention Grants</h4>
                  </CardHeader>
                  {/* <p className={classes.divider}>Or Be Classical</p> */}
                  <CardBody>
                    <p>
                      Catalytic intervention grants aim to support a more 
                      sustainable community network environment. 
                    </p>
                    <p>
                      To create such an environment, we have to explore ways 
                      to overcome the isolation of local community networks, 
                      improve their access to spectrum, actively foster their diversity 
                      and provide solutions for their resilience (e.g. alternative energy) 
                      as well as technological innovation. 
                    </p>
                    <p>
                      These grants are part of the project 'Connecting the unconnected: 
                      Supporting community networks and other community-based 
                      connectivity initiatives'.
                    </p>
                    <p>
                      BAIF Development Research Foundation was awarded this grant 
                      and worked on the project ' Digitising rural livelihoods 
                      based on local knowledge in indigenous communities: 
                      Building a connectivity-based platform enabling the 
                      economic empowerment of women in Pathardi, Jawhar, Maharashtra'. 
                    </p>
                    <p> 
                      BAIF collaborated in this project with Gram Marg, 
                      IIT Bombay, and Servelots, Bengaluru. 
                    </p>
                    <p>
                      The main aim of this study is to address the issue of 
                      sustainability of connectivity in community networks in a way 
                      that they can manage the network and economically sustain it 
                      by capacitating women to direct market their products 
                      in an online platform. 
                    </p>
                    <p>
                      Important research objectives of this project are as follows:
                      <ul>
                        <li>
                          To work along with the women in the tribal communities 
                          to digitise local knowledge related to local culture, 
                          wild food, seeds and vegetables and identify products 
                          that can be marketable.
                        </li>
                        <li>
                          To work on digital dissemination of product range 
                          available from the community eg paintings, art and crafts, 
                          herbal products. 
                        </li>  
                        <li>
                          To develop an online e-commerce platform where 
                          the products can be marketed to economically empower 
                          the women in these communities.
                        </li>
                      </ul>           
                    </p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    {/* <Button simple color="primary" size="lg">
                      Get started
                    </Button> */}
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
