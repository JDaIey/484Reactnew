import styled from "styled-components";

const Container = styled.div``;
const Role = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  width: fit-content;
  background-image: linear-gradient(45deg, #e70046, #2576c6);
  background-clip: text;
  text-fill-color: transparent !important;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  background-size: cover;
  background-repeat: repeat;
`;
const Row = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ElementH4 = styled.h4`
  margin: 10px 40px;
  text-align: center;
  color: #ffffff80;
`;

const ElementP = styled.b`
  text-align: center;
  margin: 10px 70px;
  color: #ffffff50;
`;
const Background = styled.div`
  background-color: #000;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 400px;
`;

export default function RelatedField() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: "140px" }}>
        OUR COMPANY'S
      </h2>
      <Background>
        <Container className="container">
          <Row>
            <ElementP>484 MGMT</ElementP>
            <ElementP>484 INTL</ElementP>
            <ElementP>484 MEDIA</ElementP>
            <ElementP>484 STUDIOS</ElementP>
            <ElementP>484 LABS</ElementP>
          </Row>

          <Row>
            <ElementH4>484 GOV</ElementH4>
            <ElementH4>484 FOUNDATION</ElementH4>
            <ElementH4>484 Co</ElementH4>
          </Row>
          <Row>
            <Role className="text-center">484 LTD'S ECOSYSTEM</Role>
          </Row>
          <Row>
            <ElementH4>484 SPORTS</ElementH4>
            <ElementH4>PUCK WAVE</ElementH4>
          </Row>
          <Row>
            <ElementP>484 UWU</ElementP>
            <ElementP>CRYPTO AVE</ElementP>
            <ElementP>484 STORE</ElementP>
            <ElementP>LONDONS FIRST</ElementP>
          </Row>
        </Container>
      </Background>
    </>
  );
}
