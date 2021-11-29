import React, { useState, useEffect } from "react";
import instance from "../../firebase/instance";
import ListingCard from "../ListingsCard/ListingCard";

const ListingsList = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    instance.get("/listings.json").then((res) => {
      console.log(res.data);

      const fetchedListings = [];

      // spread results and add them to array
      for (let key in res.data) {
        fetchedListings.push({ ...res.data[key], id: key });
      }
      setListings(fetchedListings);
    });
  }, []);

  return (
    <div>
      {listings.length > 0 ? (
        <ul>
          {listings.map((listing) => {
            return <ListingCard listing={listing} key={listing.key} />;
          })}
        </ul>
      ) : (
        <div>no listings...</div>
      )}
    </div>
  );
};

export default ListingsList;
