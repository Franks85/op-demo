import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import {
  ReactiveList,
  ResultList,
  SelectedFilters
} from "@appbaseio/reactivesearch";
import { Alert } from "reactstrap";

const { ResultListWrapper } = ReactiveList;

const sortOption = [
  {
    label: "Lotto",
    dataField: "title.keyword",
    sortBy: "asc"
  },
  {
    label: "Importo aggiudicato",
    dataField: "importoAgg",
    sortBy: "desc"
  },
  {
    label: "Importo liquidato",
    dataField: "importoLiq",
    sortBy: "desc"
  },
  {
    label: "Data di inizio",
    dataField: "dataInizio.keyword",
    sortBy: "desc"
  },
  {
    label: "Data di fine",
    dataField: "dataFine.keyword",
    sortBy: "desc"
  }
];

const style = {
  resultList: {
    padding: "20px 0"
  },
  title: {
    fontSize: "1.2rem !important"
  }
};

const Field = styled.span`
  color: #000;
  font-size: 1.1rem;
`;

const Item = styled.p`
  font-size: 1rem !important;
`;

class Results extends Component {
  render() {
    return (
      <Col md={{ size: 6 }}>
        <SelectedFilters />
        <ReactiveList
          componentId="result"
          dataField="_score"
          react={{
            and: ["search", "bando", "stato", "gruppo", "importo"]
          }}
          loader="Loading Results.."
          size={5}
          style={{
            marginBottom: 20
          }}
          renderResultStats={function(stats) {
            return `${stats.numberOfResults} Lotti trovati`;
          }}
          sortOptions={sortOption}
        >
          {({ data }) => (
            <ResultListWrapper>
              {data.map(item => (
                <ResultList key={item.id} style={style.resultList}>
                  <ResultList.Content>
                    <Row className="mb-1 text-center no-gutters">
                      <Col>
                        <Alert color="secondary">{item.dataInizio}</Alert>
                      </Col>
                      <Col>
                        {item.stato === "In corso" ? (
                          <Alert color="success">{item.stato}</Alert>
                        ) : item.stato === "Non iniziato" ? (
                          <Alert color="warning">{item.stato}</Alert>
                        ) : (
                          <Alert color="danger">{item.stato}</Alert>
                        )}
                      </Col>
                      <Col>
                        <Alert color="secondary" id="endDate">
                          {item.dataFine}
                        </Alert>
                      </Col>
                    </Row>
                    <ResultList.Title style={style.title}>
                      <a href="/lotti">{item.title}</a>
                    </ResultList.Title>
                    <ResultList.Description>
                      <div>
                        <Item>
                          <Field>Stazione appaltante: </Field>
                          <a href={item.stazAppHref}>{item.stazApp}</a>
                        </Item>
                        <Item>
                          <Field>importo aggiudicato: </Field>
                          {item.importoAgg}€
                        </Item>
                        <Item>
                          <Field>importo liquidato: </Field>
                          {item.importoLiq}€
                        </Item>
                        <Item>
                          <Field>Gruppo: </Field>
                          <a href={item.gruppohref}>{item.gruppo}</a>
                        </Item>
                        <Item>
                          <Field>Procedura: </Field>
                          Affidamento in economia - Affidamento diretto
                        </Item>
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
  }
}

export default Results;
