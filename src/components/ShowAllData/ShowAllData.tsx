import React from "react";
import { useGetAllFlightQuery } from "../Redux/Api";
const ShowAlldata = () => {
  const { data, isError, isLoading, isSuccess, error } = useGetAllFlightQuery(
    {}
  );
  console.log(data);
  return <div>ShowAlldata</div>;
};

export default ShowAlldata;
