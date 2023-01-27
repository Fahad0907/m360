import React from "react";
import { useGetAllFlightQuery } from "../Redux/Api";
import { Card, Col, Row } from "antd";
import { Typography } from "antd";
const ShowAlldata = () => {
  const { data, isError, isLoading, isSuccess, error } = useGetAllFlightQuery(
    {}
  );
  const { Meta } = Card;
  const { Title } = Typography;
  console.log(data);
  return (
    <div>
      <div className="site-card-wrapper">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Title level={2}>All Launches</Title>
        </div>
        <Row gutter={16}>
          {data &&
            data.map((item: any, i: number) => (
              <Col span={8} key={item.flight_number}>
                <Card
                  hoverable
                  style={{ width: 440, marginBottom: 20 }}
                  cover={
                    <img alt="example" src={item.links.mission_patch_small} />
                  }
                >
                  <Meta title={item.mission_name} />
                  <Title level={5}>Launch year : {item.launch_year}</Title>
                  <Title level={5}>
                    Launch date : {item.launch_date_local}
                  </Title>
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
    </div>
  );
};

export default ShowAlldata;
