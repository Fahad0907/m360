import React from "react";
import { Card, Col, Row, Input, Typography, Spin } from "antd";
import { useNavigate } from "react-router-dom";
const MapData = ({ data }: any) => {
  const { Meta } = Card;
  const { Title } = Typography;
  const navigate = useNavigate();
  return (
    <div>
      <Row gutter={16}>
        {data &&
          data.map((item: any, i: number) => (
            <Col span={8} key={item.flight_number}>
              <Card
                onClick={() => navigate(`details/${item.flight_number}`)}
                hoverable
                style={{ width: 440, marginBottom: 20, marginLeft: 10 }}
                cover={
                  <img alt="example" src={item.links.mission_patch_small} />
                }
              >
                <Meta title={item.mission_name} />
                <Title level={5}>Launch year : {item.launch_year}</Title>
                <Title level={5}>Rocket Name : {item.rocket.rocket_name}</Title>
                <Title level={5}>Launch date : {item.launch_date_local}</Title>
                <Title level={5}>
                  Launch status : {item.launch_success ? "True" : "False"}
                </Title>

                <Title level={5}>
                  Upcoming status : {item.upcoming ? "True" : "False"}
                </Title>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MapData;
