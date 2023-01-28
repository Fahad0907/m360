import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetByRocketNameQuery } from "../Redux/Api";
import MapData from "./Mapdata";
import { Spin, Typography } from "antd";
import BackToHome from "../Reusable/BackToHome";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useGetByRocketNameQuery(searchParams.get("rocket_name"));
  const { Title } = Typography;
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
      {data && (
        <>
          <Title style={{ marginLeft: 50, marginBottom: 30 }} level={5}>
            Search Filter : {searchParams.get("rocket_name")}
          </Title>
          <MapData data={data} />
        </>
      )}
    </div>
  );
};

export default Search;
