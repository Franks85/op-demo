import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import {
  ReactiveList,
  ResultList,
  SelectedFilters
} from "@appbaseio/reactivesearch";
import AlerTip from '../../../UI/alert/alerTip'
import {sortOption} from './sortOption'

const { ResultListWrapper } = ReactiveList;

const style = {
  resultList: {
    margin: "20px 0"
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
            return `${stats.numberOfResults} Lotti trovati - Ordina per`;
          }}
          sortOptions={sortOption}
        >
          {({ data }) => (
            <ResultListWrapper>
              {data.map(item => (
                <ResultList key={item.id} style={style.resultList}>
                  <ResultList.Content>
                    <Row
                      className="mb-1 text-center no-gutters"
                      style={style.resultHeader}
                    >
                      <Col>
                        <AlerTip
                          placement="top"
                          tipText="Data di inizio"
                          target={`startDate-${item.id}`}
                          alertColor="secondary"
                          alertText={item.dataInizio}
                        />
                      </Col>

                      <Col>
                        <AlerTip
                          placement="top"
                          tipText="Data di fine"
                          target={`endDate-${item.id}`}
                          alertColor="secondary"
                          alertText={item.dataFine}
                        />
                      </Col>
                      <Col>
                        {item.stato === "In corso" ? (
                          <AlerTip
                            placement="top"
                            tipText="Stato procedura"
                            target={`statoInCorso-${item.id}`}
                            alertColor="success"
                            alertText={item.stato}
                          />
                        ) : item.stato === "Non iniziato" ? (
                          <AlerTip
                            placement="top"
                            tipText="Stato procedura"
                            target={`statoNonIniziato-${item.id}`}
                            alertColor="warning"
                            alertText={item.stato}
                          />
                        ) : (
                          <AlerTip
                            placement="top"
                            tipText="Stato procedura"
                            target={`statoTerminato-${item.id}`}
                            alertColor="danger"
                            alertText={item.stato}
                          />
                        )}
                      </Col>
                    </Row>
                    <ResultList.Title style={style.title}>
                      <a href="/contratti">{item.title}</a>
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