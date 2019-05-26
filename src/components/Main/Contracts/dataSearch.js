import React from "react";
import { SingleList, DataSearch, SingleRange } from "@appbaseio/reactivesearch";
import { Col } from "reactstrap";

const dataSearch = () => {
  return (
    <Col md={3} className="mt-5">
      <DataSearch
        componentId="search"
        dataField={[
          "title",
          "title.autosuggest",
          "title.keyword",
          "stazApp",
          "gruppo"
        ]}
        fieldWeights={[1, 1, 1]}
        fuzziness={0}
        highlightField={["title"]}
        style={{
          marginBottom: 20
        }}
        title="Cerca in lotti"
      />
      <SingleList
        componentId="bando"
        dataField="bandoGara.keyword"
        queryFormat="or"
        showSearch={false}
        size={100}
        style={{
          marginBottom: 10
        }}
        title="Bando di gara"
      />
      <SingleList
        componentId="stato"
        dataField="stato.keyword"
        queryFormat="or"
        showSearch={false}
        size={100}
        style={{
          marginBottom: 10
        }}
        title="Stato"
      />

      <SingleRange
        componentId="importo"
        dataField="importoAgg"
        data={[
          { start: 0, end: 15000, label: "<= 15000" },
          { start: 0, end: 25000, label: "<= 25000" },
          { start: 0, end: 50000, label: "<= 50000" },
          { start: 50000, end: 1000000, label: ">= 50000" }
        ]}
        title="Importo Aggiudicato"
      />
    </Col>
  );
};

export default dataSearch;

