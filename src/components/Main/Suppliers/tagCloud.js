import React from "react";
import { TagCloud } from "@appbaseio/reactivesearch";
import { Col } from "reactstrap";

const tagCloud = () => {
  return (
    <Col md={3} className='mt-5'>
      <TagCloud
        componentId="TagCloud"
        dataField="category.keyword"
        size={50}
        showCount={true}
        multiSelect={true}
        queryFormat="or"
        react={{
          and: ["search", "naz", "cat"]
        }}
        loader="Loading ..."
        title="Categorie"
        style={{ fontSize: ".6rem" }}
      />
    </Col>
  );
};

export default tagCloud;
