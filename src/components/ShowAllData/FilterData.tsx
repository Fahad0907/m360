import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import MapData from "./Mapdata";
import { Alert, Col, Row, Typography } from "antd";
import { apiType } from "./Type";
import BackToHome from "../Reusable/BackToHome";
const FilterData = () => {
  const { Title } = Typography;
  const data: apiType[] = useLocation().state.data;
  const [searchParams, setSearchParams] = useSearchParams();
  const option: string | any = searchParams.get("option");
  const info = `No data found for ${option}`;
  const a = [];
  for (let i = 0; i < data.length; i++) {
    if (option === "Launch Status Failure" && data[i].launch_success == false)
      a.push(data[i]);
    else if (
      option === "Launch Status Success" &&
      data[i].launch_success == true
    )
      a.push(data[i]);
    else if (option === "Upcoming" && data[i].upcoming == true) a.push(data[i]);
    else {
      const date = new Date(data[i].launch_date_local.toString());
      const dataYear = date.getFullYear();
      const dataMonth = date.getMonth();
      const currentYear = new Date().getFullYear();
      const previousYear = currentYear - 1;
      console.log(dataMonth);
      if (option === "Last Year") {
        if (previousYear === dataYear) a.push(data[i]);
      }
      if (option === "Last Month") {
        const currentMonth = new Date().getMonth();
        const previousMonth = currentMonth - 1;
        if (previousYear === dataYear && dataMonth === previousMonth)
          a.push(data[i]);
      }
    }
  }
  return (
    <div>
      <BackToHome />
      {a.length > 0 ? (
        <>
          <Title style={{ marginLeft: 50, marginBottom: 30 }} level={5}>
            Filter Option : {option}
          </Title>
          <MapData data={a} />
        </>
      ) : (
        <Row>
          <Col span={8}></Col>
          <Col span={7}>
            <Alert message={info} type="info" />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default FilterData;
