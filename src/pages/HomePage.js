import StartingPageContent from "../components/StartingPage/StartingPageContent";
import ListingsPage from "./ListingsPage";
import classes from "./HomePage.module.css";
import OAALogo from "../images/oaa.png";

const HomePage = () => {
  return (
    <>
      <div className={classes.banner}>
        <div className={classes.border}>
          <h1>OCAD ARTIST ALLEY</h1>
          <img src={OAALogo} />
        </div>
      </div>
      <ListingsPage />
    </>
  );
};

export default HomePage;
