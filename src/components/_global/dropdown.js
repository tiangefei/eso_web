import React from "react"
import { Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
function DropDown({funds, title}) {

    const listItems = funds.map((ind, i) => {
        let currentFund = ind.fund_name;
        let currentFundLink = ind.fund_link;
        return (<Col xs={{ size: 6 }} className="dropdownLink">
            <Link
            to={currentFundLink}
            >{currentFund}</Link>
          </Col>)
    }

  );
    return (
        <Col className="col-format">
            <Container className="col-details">
                <div className="title">{title}</div>
                <Row className="h-50">
                    {listItems}
                </Row>
            </Container>
            
        </Col>
            
    )
  }
  export default DropDown