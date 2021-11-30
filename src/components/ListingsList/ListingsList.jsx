import { Grid } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import instance from "../../firebase/instance";
import ListingCard from "../ListingsCard/ListingCard";
import ProfileListingCard from "../ProfileListingCard/ProfileListingCard";

const ListingsList = (props) => {
  const [listings, setListings] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    instance.get("/listings.json").then((res) => {
      // console.log(res.data);

      const fetchedListings = [];

      // spread results and add them to array
      for (let key in res.data) {
        fetchedListings.push({ ...res.data[key], id: key });
      }
      setListings(fetchedListings);

      if (props.userProfile) {
        let userListings = fetchedListings.filter(
          (listing) => listing.listingAuthor === userId
        );
        setListings(userListings);
      }
    });
  }, []);

  const handleDelete = (id) => {
    instance.delete(`/listings/${id}.json`);
    console.log("deleting " + id);

    setListings(() => {
      let prevListings = [...listings];
      let updatedListings = prevListings.filter((listing) => listing.id !== id);
      return updatedListings;
    });
  };
  return (
    <div>
      {listings.length > 0 ? (
        <Grid templateColumns="repeat(3, 1fr)" gap={25}>
          {props.userProfile ? (
            <>
              {listings.map((listing) => {
                return (
                  <ProfileListingCard
                    listing={listing}
                    key={listing.key}
                    onUserProfile={props.userProfile}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </>
          ) : (
            <>
              {listings.map((listing) => {
                return (
                  <ListingCard
                    listing={listing}
                    key={listing.key}
                    onUserProfile={props.userProfile}
                  />
                );
              })}
            </>
          )}
        </Grid>
      ) : (
        <div>no listings...</div>
      )}
    </div>
  );
};

export default ListingsList;
