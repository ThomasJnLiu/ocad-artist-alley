import { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import instance from "../../firebase/instance";
import ListingsList from "../ListingsList/ListingsList";
import {
  Box,
  Heading,
  InputGroup,
  InputLeftAddon,
  Tooltip,
} from "@chakra-ui/react";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const userId = localStorage.getItem("userId");

  const listingNameRef = useRef();
  const listingPriceRef = useRef();
  const listingImageRef = useRef();
  const listingUrlRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCI6Kybr7phuyB17qM9meL5at3e6BBKlVo",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application-json",
        },
      }
    ).then((res) => {
      //assumption always suceeds
      history.replace("/");
    });
  };

  const submitHandler2 = (event) => {
    event.preventDefault();
    const data = {
      listingUploader: "n/a",
      listingName: listingNameRef.current.value,
      listingPrice: listingPriceRef.current.value,
      listingImage: listingImageRef.current.value,
      listingUrl: listingUrlRef.current.value,
      listingAuthor: userId,
    };
    console.log("submitting...");

    instance.post("/listings.json", data).then((res) => {
      console.log(res);
      alert("Submission successful!");
    });
  };

  return (
    <>
      <Box
        Maxw="lg"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        padding={50}
      >
        <Heading size="2xl" textAlign="left">
          Submit a{" "}
          <span style={{ color: "#df1674", textAlign: "left" }}>Listing!</span>
        </Heading>
        <form className={classes.form} onSubmit={submitHandler2}>
          <div className={classes.control}>
            <label>Listing Name</label>
            <input type="text" ref={listingNameRef} />
            <label>Listing Price (CAD)</label>
            <InputGroup>
              <InputLeftAddon children="$" />
              <input type="number" ref={listingPriceRef} />
            </InputGroup>
            <label>Listing Url</label>
            <input type="text" ref={listingUrlRef} />
            <label>
              Listing Image Url<Tooltip label="testing">*</Tooltip>
            </label>
            <input type="text" ref={listingImageRef} />
          </div>
          <div className={classes.action}>
            <button>Submit</button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default ProfileForm;
