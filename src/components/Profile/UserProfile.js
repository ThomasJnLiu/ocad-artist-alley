import React from "react";
import ListingsList from "../ListingsList/ListingsList";
import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
