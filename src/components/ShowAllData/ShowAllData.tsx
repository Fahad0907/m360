import React, { useState } from "react";
import { useGetAllFlightQuery, useGetByRocketNameQuery } from "../Redux/Api";
import { useNavigate } from "react-router-dom";
import { Col, Row, Input, Typography, Spin } from "antd";
import MapData from "./Mapdata";
const ShowAlldata = () => {
  const {
    data: allData,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetAllFlightQuery({});
  const [rocketSeacrch, setRocketSeacrch] = useState<any>(null);
  const navigate = useNavigate();
  const { Title } = Typography;
  const { Search } = Input;
  const rocketSearch = () => {
    navigate(`/search?rocket_name=${rocketSeacrch}`);
  };
  return (
    <div>
      <div className="site-card-wrapper">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Title level={2}>All Launches</Title>
        </div>
        <Row gutter={16}>
          <Col span={8}></Col>
          <Col span={8}>
            <Search
              size="large"
              placeholder="input rocket name for search"
              enterButton
              allowClear
              onChange={(e) => setRocketSeacrch(e.target.value)}
              onSearch={rocketSearch}
            />
          </Col>
        </Row>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          {!allData && <Spin size="large" />}
        </div>
        <MapData data={allData} />
      </div>
    </div>
  );
};

export default ShowAlldata;
