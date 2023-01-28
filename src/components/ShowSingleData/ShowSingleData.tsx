import React from "react";
import { useParams } from "react-router-dom";
import { useGetFlightQuery } from "../Redux/Api";
import { Card, Col, Row, Spin } from "antd";
import { Typography } from "antd";
import BackToHome from "../Reusable/BackToHome";
const ShowSingleData = () => {
  const { id } = useParams();
  const { data } = useGetFlightQuery(id);
  const { Meta } = Card;
  const { Title } = Typography;
  return (
    <div>
      <div>
        <BackToHome />
        {data ? (
          <Row>
            <Col span={8}></Col>
            <Col span={8}>
              <Card
                hoverable
                style={{
                  width: 440,
                  marginTop: 50,
                }}
                cover={
                  <img alt="example" src={data.links.mission_patch_small} />
                }
              >
                <Meta title={data?.mission_name} />
                <Title level={5}>Launch year : {data.launch_year}</Title>
                <Title level={5}>Launch date : {data.launch_date_local}</Title>
                <Title level={5}>
                  Launch status : {data.launch_success ? "True" : "False"}
                </Title>

                <Title level={5}>
                  Upcoming status : {data.upcoming ? "True" : "False"}
                </Title>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col span={10}> </Col>
            <Col span={8} style={{ marginTop: 50 }}>
              <Spin size="large" />
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default ShowSingleData;
