import React, { useState } from "react";
import { useGetAllFlightQuery } from "../Redux/Api";
import { useNavigate } from "react-router-dom";
import { Col, Row, Input, Typography, Spin, Select, message } from "antd";
import MapData from "./Mapdata";
const ShowAlldata = () => {
  const { data: allData } = useGetAllFlightQuery({});
  const [rocketSeacrch, setRocketSeacrch] = useState<string>("");
  const navigate: any = useNavigate();
  const { Title } = Typography;
  const { Search } = Input;
  const rocketSearch = () => {
    if (rocketSeacrch.length === 0)
      message.info("Enter what you want to search");
    else navigate(`/search?rocket_name=${rocketSeacrch}`);
  };
  const handleChange = (value: string) => {
    navigate(`/filter?option=${value}`, { state: { data: allData } });
  };
  return (
    <div>
      <div className="site-card-wrapper">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Title level={2}>All Launches</Title>
        </div>
        <Row gutter={16}>
          <Col span={6}></Col>
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
          <Col span={8}>
            <Select
              defaultValue="Filter data"
              onChange={handleChange}
              style={{ width: 220 }}
              size="large"
              bordered={true}
              options={[
                {
                  value: "Launch Status Failure",
                  label: "Launch Status Failure",
                },
                {
                  value: "Launch Status Success",
                  label: "Launch Status Success",
                },
                { value: "Upcoming", label: "Upcoming" },
                { value: "Last Year", label: "Last Year" },
                { value: "Last Month", label: "Last Month" },
              ]}
            />
          </Col>
        </Row>

        <Row>
          <Col span={10}> </Col>
          <Col span={8} style={{ marginTop: 50 }}>
            {" "}
            {!allData && <Spin size="large" />}{" "}
          </Col>
        </Row>
        <MapData data={allData} />
      </div>
    </div>
  );
};

export default ShowAlldata;
