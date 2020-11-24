import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import SectionNavbars from "./Sections/SectionNavbars.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function APCPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [classicModal, setClassicModal] = React.useState(false);
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="APC India"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/apc_carousal_pic2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=DE4QJhy2E5o&feature=emb_logo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
              {/* <Button
                color="danger"
                size="lg"
                // block
                onClick={() => setClassicModal(true)}
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
              <Dialog
                classes={{
                  root: classes.center,
                  paper: classes.modal
                }}
                open={classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setClassicModal(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
              >
                <DialogTitle
                  id="classic-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                >
                  <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => setClassicModal(false)}
                  >
                    <Close className={classes.modalClose} />
                  </IconButton>
                  <h4 className={classes.modalTitle}>E-Dost</h4>
                </DialogTitle>
                <DialogContent
                  id="classic-modal-slide-description"
                  className={classes.modalBody}
                >
                  <p>
                    // Far far away, behind the word mountains, far from the
                    // countries Vokalia and Consonantia, there live the blind
                    // texts. Separated they live in Bookmarksgrove right at the
                    // coast of the Semantics, a large language ocean. A small
                    // river named Duden flows by their place and supplies it
                    // with the necessary regelialia. It is a paradisematic
                    // country, in which roasted parts of sentences fly into your
                    // mouth. Even the all-powerful Pointing has no control about
                    // the blind texts it is an almost unorthographic life One
                    // day however a small line of blind text by the name of
                    // Lorem Ipsum decided to leave for the far World of Grammar.
                    <iframe 
                      width="450" 
                      height="320" 
                      src="https://www.youtube.com/embed/DE4QJhy2E5o?autoplay=1">
                    </iframe>
                  </p>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                  <Button color="transparent" simple>
                    Nice Button
                  </Button>
                  <Button
                    onClick={() => setClassicModal(false)}
                    color="danger"
                    simple
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div id={'section1'}>
            <ProductSection/>
          </div>
          <div id={'section2'} style={{background: "linear-gradient(#f5f5f5, #e8cebf)"}}> 
            {/* #f5f5f5 */}
            <TeamSection />
          </div>
          <div>
            <WorkSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
