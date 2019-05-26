import React from "react";
import { TagCloud } from "@appbaseio/reactivesearch";
import { Col } from "reactstrap";

const tagCloud = () => {
  return (
    <Col md={3} className='mt-5'>
      <TagCloud
        componentId="gruppo"
        dataField="gruppo.keyword"
        size={50}
        showCount={true}
        multiSelect={true}
        queryFormat="or"
        react={{
          and: ["search", "bando", "stato"]
        }}
        loader="Loading ..."
        title="Gruppo"
        style={{ fontSize: ".6rem" }}
      />
    </Col>
  );
};

export default tagCloud;