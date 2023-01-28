import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetByRocketNameQuery } from "../Redux/Api";
import MapData from "./Mapdata";
import { Spin } from "antd";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useGetByRocketNameQuery(searchParams.get("rocket_name"));
  console.log(data);
  return (
    <div>
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
