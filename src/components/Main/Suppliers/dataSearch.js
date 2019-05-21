import React from "react";
import { SingleList, DataSearch } from "@appbaseio/reactivesearch";
import { Col } from "reactstrap";

const dataSearch = () => {
  return (
    <Col md={3} className='mt-5'>
      <DataSearch
        componentId="search"
        dataField={["company", "company.autosuggest", "company.keyword"]}
        fieldWeights={[1, 1, 1]}
        fuzziness={0}
        highlightField={["company"]}
        style={{
          marginBottom: 20
        }}
        title="Cerca Fornitori"
      />
      <SingleList
        componentId="naz"
        dataField="nationality.keyword"
        queryFormat="or"
        showSearch={false}
        size={100}
        style={{
          marginBottom: 10
        }}
        title="Nazionalità"
      />
      <SingleList
        componentId="cat"
        dataField="categoryType.keyword"
        queryFormat="or"
        showSearch={false}
        size={100}
        style={{
          marginBottom: 10
        }}
        title="Tipo di Categoria"
      />
    </Col>
  );
};

export default dataSearch;
