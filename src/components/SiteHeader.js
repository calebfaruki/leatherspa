import React from "react";
import {
  Container,
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
  Button,
  Form,
  Input
} from "reactstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faBuilding,
  faFileInvoice,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

library.add(faSignInAlt, faBuilding, faFileInvoice, faSearch);

export default class SiteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container fluid>
        <Navbar color="light" light expand="md" className="fixed-top py-0">
          <NavbarBrand href="/" title="Leather Spa">
            <img
              src="https://leatherspa.com/assets/svg/logo.svg"
              width="35"
              height="50"
              alt="Leather Spa logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mx-auto">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-primary" nav caret>
                  Repair Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="text-primary">
                    Women's Shoes
                  </DropdownItem>
                  <DropdownItem className="text-primary">
                    Women's Boots
                  </DropdownItem>
                  <DropdownItem className="text-primary">
                    Men's Shoes
                  </DropdownItem>
                  <DropdownItem className="text-primary">
                    Men's Boots
                  </DropdownItem>
                  <DropdownItem className="text-primary">Handbags</DropdownItem>
                  <DropdownItem className="text-primary">Wallets</DropdownItem>
                  <DropdownItem className="text-primary">Belts</DropdownItem>
                  <DropdownItem className="text-primary">Garments</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/" className="text-primary">
                  Start A Repair
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-primary" nav caret>
                  Shop
                </DropdownToggle>
                <DropdownMenu className="text-primary" right>
                  <DropdownItem className="text-primary">Care</DropdownItem>
                  <DropdownItem className="text-primary">Comfort</DropdownItem>
                  <DropdownItem className="text-primary">
                    Accessories &amp; Gifts
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/" className="text-primary">
                  Customer Service
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="text-primary">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="text-primary">
                  Locations
                </NavLink>
              </NavItem>
              <NavItem>
                <Form inline className="my-2 my-lg-0">
                  <Input
                    type="text"
                    name="searchField"
                    id="searchFIeld"
                    placeholder="Search"
                  />
                  <Button
                    type="submit"
                    outline
                    color="primary"
                    className="my-2 my-sm-0"
                  >
                    <FontAwesomeIcon icon="search" />
                    <span className="sr-only">Greetings</span>
                  </Button>
                </Form>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/"
                  className="text-primary"
                  title="Check Repair Status"
                >
                  <FontAwesomeIcon icon="file-invoice" />
                  <span className="sr-only">Check Repair Status</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/"
                  className="text-primary"
                  title="Corporate Accounts"
                >
                  <FontAwesomeIcon icon="building" />
                  <span className="sr-only">Corporate Accounts</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="text-primary" title="Sign In">
                  <FontAwesomeIcon icon="sign-in-alt" />
                  <span className="sr-only">Sign In</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}
