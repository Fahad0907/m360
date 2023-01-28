import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetByRocketNameQuery } from "../Redux/Api";
import MapData from "./Mapdata";
import { Spin } from "antd";
import BackToHome from "../Reusable/BackToHome";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useGetByRocketNameQuery(searchParams.get("rocket_name"));
  return (
    <div>
      <BackToHome />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        {!data && <Spin size="large" />}
      </div>
      {data && <MapData data={data} />}
    </div>
  );
};

export default Search;
