import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import { Book } from '@material-ui/icons';

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function PublicationsPage(props) {
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
            <GridItem xs={12} sm={12} md={6}>
              <NavPills
                color="warning"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Publication #1",
                    tabIcon: Book,
                    tabContent: (
                      <span>
                        <p>
                          <h4>
                            S. Banerjee Belur and R. Srivastava, New Age women 
                            and their approach towards internet connectivity 
                            in rural India, GenderIT, October 2019.
                          </h4>
                        </p>
                        <br />
                        <p>
                          <Button
                            color="default"
                            size="sm"
                            href="https://www.genderit.org/articles/new-age-women-women-and-their-approach-towards-internet-connectivity-rural-india"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link to article
                          </Button>
                        </p>
                        <br />
                        <p></p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Publication #2",
                    tabIcon: Book,
                    tabContent: (
                      <span>
                        <p>
                          <h4>
                            S. Banerjee Belur (2018), Addressing sustainability 
                            in rural connectivity: A case study of Gram Marg 
                            community-led networks, Book Title: Global Information 
                            Society Watch 2018, Community Networks, 
                            published by Association for Progressive Communications (APC).
                          </h4>
                        </p>
                        <br />
                        <p>
                          <Button
                            color="default"
                            size="sm"
                            href="https://www.giswatch.org/sites/default/files/gw2018_india2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link to article
                          </Button>
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Publication #3",
                    tabIcon: Book,
                    tabContent: (
                      <span>
                        <p>
                          <h4>
                            S. Banerjee Belur, M.Khaturia and N.P.Rao (2017), 
                            Community-led networks for sustainable rural 
                            broadband in India: The case study of Gram Marg, 
                            Book Title: Community Networks: the Internet 
                            by the people for the people, Official 2017 Outcome 
                            of the United Nations Internet Governance Forum (IGF) 
                            Dynamic Coalition on community connectivity (DC3).
                          </h4>
                        </p>
                        <br />
                        <p>
                          <Button
                            color="default"
                            size="sm"
                            href="http://bibliotecadigital.fgv.br/dspace/handle/10438/19401"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link to article
                          </Button>
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
