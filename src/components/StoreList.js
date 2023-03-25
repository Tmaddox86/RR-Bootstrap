import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerBlocks(){
    <h2>Browse stores in Houston</h2>

    return(
        <Container style={{ marginTop: "40px", textAlign: "center" }}>
            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
            <Row>
                <Col xs=".5" >
                    <Image src="[IMG SRC]" roundedCircle />
                </Col>
            
                <Col>
                    <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
                
                <Col sm="1"></Col>
            <Row >
                <Col xs=".5">
                    <Image src="[IMG SRC]" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
                <Col sm="1"></Col>
            <Row >
                <Col xs=".5" >
                    <Image src="[IMG SRC]" roundedCircle />
                </Col>
                <Col md="6">
                    <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                    <p>Delivery</p>
                </Col>
            </Row>
            </Row>
        </Container>
    )
}

export default ContainerBlocks