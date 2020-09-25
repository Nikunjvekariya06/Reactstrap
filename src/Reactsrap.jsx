import React, { useState } from "react";
import Reactstrap2 from "./Reactstrap2";
import Rohit from "./rohit.jpg";
import {
  Button,
  Alert,
  UncontrolledAlert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  ButtonGroup,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  CardLink,
  UncontrolledCarousel,
  UncontrolledCollapse,
  Fade,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  ListGroupItem,
  ListGroup,
} from "reactstrap";

function Reactstrap() {
  const style = {
    margin: "20px",
  };
  const box = {
    background: "red",
    height: "100px",
    width: "200px",
  };
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  const items = [
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      key: "1",
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
      altText: "Slide 2",
      caption: "Slide 2",
      header: "Slide 2 Header",
      key: "2",
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
      altText: "Slide 3",
      caption: "Slide 3",
      header: "Slide 3 Header",
      key: "3",
    },
  ];

  const [fadeIn, setFadeIn] = useState(true);
  const toggle = () => setFadeIn(!fadeIn);
  return (
    <div style={style}>
      <Alert color="danger">This is a info alert — check it out!</Alert>
      <Alert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="pb-2">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
      <Alert color="secondary" isOpen={visible} toggle={onDismiss} fade={false}>
        This is a dark alert without fade and
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
      <UncontrolledAlert color="warning" fade={true}>
        I am an alert and I can be dismissed!
      </UncontrolledAlert>
      <Button color="danger">
        Notification <Badge color="success">1</Badge>
      </Button>{" "}
      <Badge color="info">Secondary</Badge>{" "}
      <Badge color="secondary" pill>
        Secondary
      </Badge>{" "}
      <Badge href="#" color="warning">
        Warning
      </Badge>
      <br />
      <br />
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Library
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Data
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Bootstrap
        </BreadcrumbItem>
      </Breadcrumb>
      <UncontrolledButtonDropdown>
        <DropdownToggle color="warning" size="lg" caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <ButtonGroup vertical className="ml-2">
        <Button color="dark">button</Button>
        <Button>gruop</Button>
        <Button color="success">vertical</Button>
      </ButtonGroup>{" "}
      <Button outline color="primary">
        primary
      </Button>{" "}
      <br></br>
      <br></br>
      <CardDeck>
        <Card>
          <CardImg
            top
            width="50%"
            height="50%"
            src={Rohit}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Rohit sharma</CardTitle>
            <CardSubtitle>Hit-man</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>SEND</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            height="50%"
            src={Rohit}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Rohit sharma</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>SEND</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            height="50%"
            src={Rohit}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Rohit sharma</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button color="success">SEND</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg height="50%" src={Rohit} alt="Card image cap" />
          <CardBody>
            <CardTitle>Rohit sharma</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </CardDeck>
      <br></br>
      <UncontrolledCarousel items={items} />
      <br></br>
      <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
        Toggle
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            magni, voluptas debitis similique porro a molestias consequuntur
            earum odio officiis natus, amet hic, iste sed dignissimos esse fuga!
            Minus, alias.
          </CardBody>
        </Card>
      </UncontrolledCollapse>
      <br></br>
      <br></br>
      <Button color="primary" onClick={toggle}>
        Toggle Fade
      </Button>
      <Fade in={fadeIn} tag="h5" className="mt-3">
        This content will fade in and out as the button is pressed
      </Fade>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" xs={1}>
            Email
          </Label>
          <Col sm={6}>
            <Input
              required
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={1}>
            Password
          </Label>
          <Col sm={6}>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </Col>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState" />
            </FormGroup>
          </Col>
        </Row>
        <Button>Sign in</Button>
      </Form>
      <br></br> <br></br>
      <Container>
        <Row>
          <Col xs="12" sm="6" md="3" lg="3">
            <div style={box}>Box 1</div>
          </Col>
          <Col xs="12" sm="6" md="12" lg="3">
            <div style={box}>Box 2</div>
          </Col>
          <Col xs="12" sm="6" md="3" lg="3">
            <div style={box}>Box 3</div>
          </Col>
          <Col xs="12" sm="6" md="6" lg="3">
            <div style={box}>Box 4</div>
          </Col>
        </Row>
      </Container>
      <br></br> <br></br>
      <ListGroup>
        <ListGroupItem className="justify-content-between">
          Cras justo odio <Badge pill>14</Badge>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between">
          Dapibus ac facilisis in{" "}
          <Badge pill color="warning">
            2
          </Badge>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between">
          Morbi leo risus <Badge pill>1</Badge>
        </ListGroupItem>
      </ListGroup>
      <br></br>
      <br></br>
      <Reactstrap2 />
    </div>
  );
}

export default Reactstrap;
