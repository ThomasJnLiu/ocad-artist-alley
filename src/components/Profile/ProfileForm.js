import { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import instance from "../../firebase/instance";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();

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
    };
    console.log("submitting...");

    instance.post("/listings.json", data).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input type="password" id="new-password" ref={newPasswordInputRef} />
        </div>
        <div className={classes.action}>
          <button>Change Password</button>
        </div>
      </form>

      <form className={classes.form} onSubmit={submitHandler2}>
        <div className={classes.control}>
          <label>Listing Name</label>
          <input type="text" ref={listingNameRef} />
          <label>Listing Price</label>
          <input type="text" ref={listingPriceRef} />
          <label>Listing Image</label>
          <input type="text" ref={listingImageRef} />
          <label>Listing url</label>
          <input type="text" ref={listingUrlRef} />
        </div>
        <div className={classes.action}>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
