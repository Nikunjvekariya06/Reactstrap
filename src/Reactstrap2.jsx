import React, { useState } from "react";
import {
  Media,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Progress,
  Spinner,
  Table,
  TabContent,
  TabPane,
  Card,
  CardTitle,
  CardText,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";
import classnames from "classnames";

function Reactstrap2() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [activeTab, setActiveTab] = useState("1");
  const toggles = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Row>
        <Col xs="12" lg="6" xl="7">
          <Media>
            <Media left href="#">
              <Media
                object
                src="http://place-puppy.com/200x150"
                alt="Generic placeholder image"
              />
            </Media>
            <Media body>
              <Media heading>Media heading</Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              <Media>
                <Media left href="#">
                  <Media
                    object
                    src="http://place-puppy.com/200x150"
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <Media heading>Nested media heading</Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </Media>
              </Media>
            </Media>
          </Media>
        </Col>
        <Col xs="12" lg="6" xl="5" md="12">
          <Media>
            <Media middle href="#">
              <Media
                object
                src="http://place-puppy.com/200x150"
                alt="Generic placeholder image"
              />
            </Media>
            <Media body className="ml-2">
              <Media heading>Media heading</Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
        </Col>
      </Row>
      <Navbar color="warning" light expand="lg">
        <NavbarBrand href="/">JNext</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Team
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Our Services
              </DropdownToggle>
              <DropdownMenu style={{ background: "#fff", margin: "10px" }}>
                <DropdownItem>Reactjs</DropdownItem>
                <DropdownItem>React-native</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Pagination
        size="lg"
        className="mt-3"
        aria-label="Page navigation example"
      >
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>{" "}
      <Button id="PopoverClick" color="success" type="button">
        Launch Popover (Click)
      </Button>{" "}
      <UncontrolledPopover
        style={{ background: "skyblue" }}
        trigger="click"
        placement="bottom"
        target="PopoverClick"
      >
        <PopoverHeader> Click Trigger</PopoverHeader>
        <PopoverBody>
          Clicking on the triggering element makes this popover appear. Clicking
          on it again will make it disappear. You can select this text, but
          clicking away (somewhere other than the triggering element) will not
          dismiss this popover.
        </PopoverBody>
      </UncontrolledPopover>{" "}
      <Row>
        <Col md={6} lg={6} xl={6}>
          <div className="text-center">75%</div>
          <Progress striped value={75} />
        </Col>
        <Col md={6} lg={6} xl={6}>
          <Progress value="25" className="mt-2">
            25%
          </Progress>
          <Progress animated value="50" className="mt-2">
            50%
          </Progress>
        </Col>
        <Col md={12} lg={12} xl={12}>
          <Spinner color="primary" />
          <Spinner color="secondary" />
          <Spinner type="grow" color="primary" />
        </Col>
        <Col md={6} lg={6} xl={6}>
          <Table dark hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={6} lg={6} xl={6}>
          <Table hover striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggles("1");
            }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggles("2");
            }}
          >
            More Tabs
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6" lg={3} md={3} xs={4}>
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6" lg={3} md={3} xl={3}>
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      <Row>
        <Col xl={4} md={4} ms={4}>
          <Toast className="p-3 bg-primary my-2 rounded">
            <ToastHeader icon={<Spinner size="sm" color="success" />}>
              Reactstrap
            </ToastHeader>
            <ToastBody>
              This is a toast with a primary icon — check it out!
            </ToastBody>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}

export default Reactstrap2;
