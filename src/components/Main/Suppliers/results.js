import React from "react";
import styled from "styled-components";
import { Col } from "reactstrap";
import {
  ReactiveList,
  ResultList,
  SelectedFilters
} from "@appbaseio/reactivesearch";

const { ResultListWrapper } = ReactiveList;

const sortOption = [
    {
      label: "Nome",
      dataField: "company.keyword",
      sortBy: "asc"
    },
    {
      label: "tasso di vittoria",
      dataField: "victoryPerc.keyword",
      sortBy: "asc"
    },
    {
      label: "Numero di partecipazioni a selezioni",
      dataField: "selectionsPartecipation",
      sortBy: "asc"
    },
    {
      label: "Numero di avvenute selezioni",
      dataField: "selectionsWin",
      sortBy: "asc"
    },
    {
      label: "Importo lotti vinti",
      dataField: "lotsAmount.keyword",
      sortBy: "asc"
    },
    {
      label: "Identificativo protocollo",
      dataField: "protocol",
      sortBy: "asc"
    },
    {
      label: "Data protocollo",
      dataField: "protocolDate.keyword",
      sortBy: "asc"
    }
  ]

const Field = styled.span`
  color: #000;
  font-size: 1.1rem;
`;

const results = () => {
  return (
    <Col md={{ size: 5, offset: 1 }}>
      <SelectedFilters />
      <ReactiveList
        componentId="result"
        dataField="_score"
        react={{
          and: ["search", "naz", "cat", "TagCloud"]
        }}
        loader="Loading Results.."
        size={5}
        style={{
          marginBottom: 20
        }}
        renderResultStats={function(stats) {
          return `${stats.numberOfResults} Fornitori trovati`;
        }}
        innerClass={{ resultsInfo: "result-list-info" }}
        sortOptions={sortOption}
      >
        {({ data }) => (
          <ResultListWrapper>
            {data.map(item => (
              <ResultList key={item.id} style={{ padding: "20px 0" }}>
                <ResultList.Content>
                  <ResultList.Title><a href={item.companyhref}>{item.company}</a></ResultList.Title>
                  <ResultList.Description>
                    <div>
                      <p>
                        <Field>P.Iva: </Field>
                        {item.pIva}
                      </p>
                      <p>
                        <Field>Identificativo protocollo: </Field>
                        {item.protocol}
                      </p>
                      <p>
                        <Field>Data protocollo: </Field>
                        {item.protocolDate}
                      </p>
                      <p>
                        <Field>Categorie: </Field>
                        {item.category[0]}, {item.category[1]},{" "}
                        {item.category[2]}
                      </p>
                    </div>
                  </ResultList.Description>
                </ResultList.Content>
              </ResultList>
            ))}
          </ResultListWrapper>
        )}
      </ReactiveList>
    </Col>
  );
};

export default results;
