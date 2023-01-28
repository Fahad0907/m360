import React from "react";
import { Alert, Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";
const BackToHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Row style={{ marginTop: 50, marginBottom: 50 }}>
        <Col span={8}></Col>
        <Col span={7}>
          <Button onClick={() => navigate("/")} type="primary" block>
            Back to home
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default BackToHome;
