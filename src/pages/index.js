import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardImgOverlay,
  Button,
} from "reactstrap";
import Layout from "../components/Layout";
import Map from "../components/Map";
import Helmet from 'react-helmet';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: repairCategories } = data.allMarkdownRemark;

    return (
      <Layout>
        <Helmet>
          <title>Leather Spa</title>
          <link rel="canonical" href="https://leatherspa.com" />
        </Helmet>
        <main>
          <section className="section section-introduction bg-beige z-15">
            <ul className="list-unstyled mb-0">
              <li>
                <Container className="text-center">
                  <Row>
                    <Col md="8" />
                    <Col md="4">
                      <div className="jumbotron bg-transparent text-center text-white">
                        <h2>
                          New!
                          <br />
                          Expanded Service Coverage
                        </h2>
                        <p>
                          Hello Brooklyn and Queens! Now we pick-up and deliver
                          to parts of Brooklyn and Long Island City, Queens.
                        </p>
                        <Button color="primary">Learn More</Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </li>
            </ul>
          </section>
          <section className="section section-repair-services bg-leather z-15">
            <Container>
              <div className="jumbotron bg-transparent text-center text-white">
                <h2>
                  <Link to="/" className="text-white text-uppercase">
                    Repair Services
                  </Link>
                </h2>
                <p className="text-white">
                  Leather Spa—the go-to resource for discerning clients seeking
                  the finest repair and care needs for their leather accessories
                  for more than 30 years. We take the ordinary and make it
                  extraordinary. Be inspired by the array of customized services
                  we offer for all your leather care needs.
                </p>
              </div>
              <CardDeck>
                {repairCategories.map(({ node: post }) => (
                  <Card inverse className="bg-brown mt-4 py-2" key={post.id}>
                    <CardImg width="100%" src={post.frontmatter.full_image} alt="Women's shoes" />
                    <CardImgOverlay className="h-100 d-flex flex-column">
                      <CardTitle className="text-uppercase">
                        {post.frontmatter.title}
                      </CardTitle>
                      <Button
                        outline
                        color="light"
                        className="text-uppercase text-left mt-auto"
                        to={post.fields.slug}
                      >
                        More
                      </Button>
                    </CardImgOverlay>
                  </Card>
                ))}
              </CardDeck>
            </Container>
          </section>
          <section className="section section-before-after bg-leather z-15">
            <Container className="pb-5">
              <Row>
                <div className="col-lg-12">
                  <div className="jumbotron bg-transparent text-center text-white">
                    <h2 className="text-uppercase">Before &amp; After</h2>
                    <p>
                      Our hand-crafted artistry is in a league of its own. View
                      our miraculous transformations below.
                    </p>
                    <Button color="primary">Start Repair</Button>
                  </div>
                  <article
                    className="carousel row"
                    data-carousel-mobile="orange"
                  >
                    <div className="col-xs-6 col-md-4">
                      <div className="card">
                        <img
                          className="card-img"
                          src="https://leatherspa.com/images/misc/08_Hover_Garments_option2.png"
                          alt="Garments"
                        />
                        <div className="card-img-overlay" />
                      </div>
                    </div>
                    <div className="col-xs-6 col-md-4">
                      <div className="card">
                        <img
                          className="card-img"
                          src="https://leatherspa.com/images/misc/08_Hover_Garments_option2.png"
                          alt="Garments"
                        />
                        <div className="card-img-overlay" />
                      </div>
                    </div>
                    <div className="col-xs-6 col-md-4">
                      <div className="card">
                        <img
                          className="card-img"
                          src="https://leatherspa.com/images/misc/08_Hover_Garments_option2.png"
                          alt="Garments"
                        />
                        <div className="card-img-overlay" />
                      </div>
                    </div>
                  </article>
                </div>
              </Row>
            </Container>
          </section>
          <hr className="hr hr-leather z-14" />
          <section className="section section-customer-service bg-brown z-13">
            <Container className="py-5">
              <Row>
                <div className="col-lg-12">
                  <div className="jumbotron bg-transparent text-center text-white mb-0">
                    <h2 className="text-uppercase">
                      <Link to="/" className="text-white">
                        Customer Service
                      </Link>
                    </h2>
                    <p>
                      As a state-of-the-art repair facility, Leather Spa aims to
                      service our clients needs whenever or wherever they may
                      arise. From pick-up and delivery for our New York City
                      clients, to mail-in orders worldwide, online payment and
                      order status updates, and tips from our experts, discover
                      all the ways Leather Spa can make your repair and care
                      needs easier.
                    </p>
                  </div>

                  <CardDeck>
                    <Card className="bg-transparent mt-4">
                      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white">Pick-Up Service</CardTitle>
                        <Button
                          outline
                          block
                          color="light"
                          className="mt-auto"
                        >
                          Schedule Now
                        </Button>
                      </CardBody>
                    </Card>
                    <Card className="bg-transparent mt-4">
                      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white">Delivery Service</CardTitle>
                        <Button
                          outline
                          block
                          color="light"
                          className="mt-auto"
                        >
                          Schedule Now
                        </Button>
                      </CardBody>
                    </Card>
                    <Card className="bg-transparent mt-4">
                      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white">Check Repair Status</CardTitle>
                        <Button
                          outline
                          block
                          color="light"
                          className="mt-auto"
                        >
                          Check Repair Status
                        </Button>
                      </CardBody>
                    </Card>

                    <Card className="bg-transparent mt-4">
                      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white">Pay For Services</CardTitle>
                        <Button
                          outline
                          block
                          color="light"
                          className="mt-auto"
                        >
                          Pay Now
                        </Button>
                      </CardBody>
                    </Card>
                    <Card className="bg-transparent mt-4">
                      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white">Tips From The Experts</CardTitle>
                        <Button
                          outline
                          block
                          color="light"
                          className="mt-auto"
                        >
                          Read More
                        </Button>
                      </CardBody>
                    </Card>
                    <Card className="bg-transparent mt-4">
                      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white">Operational Policies</CardTitle>
                        <Button
                          outline
                          block
                          color="light"
                          className="mt-auto"
                        >
                          Read More
                        </Button>
                      </CardBody>
                    </Card>
                  </CardDeck>
                </div>
              </Row>
            </Container>
          </section>
          <hr className="hr hr-brown z-12" />
          <section className="section section-locations bg-suede z-11 mt-5">
            <Container>
              <Row>
                <div className="col-lg-12">
                  <div className="jumbotron bg-transparent text-center">
                    <h2>
                      <Link to="/" className="text-dark">
                        Locations
                      </Link>
                    </h2>
                    <p>
                      Experience our expertise in-person at one of our
                      breathtaking Manhattan locations.
                    </p>
                    <Button color="primary">Contact Us</Button>
                  </div>
                </div>
              </Row>
            </Container>
            <Container fluid={true} className="px-0">
              <Map>
                <div lat={40.834960} lng={-73.942730}>AINT THIS SOME SHIT</div>
              </Map>
            </Container>
            <Container className="pb-5">
              <CardDeck>
                <Card body className="bg-transparent border-0 p-1">
                  <CardTitle className="text-uppercase">
                    <Link to="/" className="text-dark">
                      The Plaza Hotel
                    </Link>
                  </CardTitle>
                  <CardText>
                    1 West 58th Street, New York, NY 10019
                    <br />
                    <b>​Mon - Fri</b> 8am - 7pm
                    <br />
                    <b>Saturday</b> 9am - 6pm
                    <br />
                    <b>Sunday</b> 11am - 5pm
                  </CardText>
                  <Button color="primary" className="mt-auto">Map + Directions</Button>
                </Card>
                <Card body className="bg-transparent border-0 p-1">
                  <CardTitle className="text-uppercase">
                    <Link to="/" className="text-dark">
                      Midtown - 55th St.
                    </Link>
                  </CardTitle>
                  <CardText>
                    55 West 55th Street, New York, NY 10019
                    <br />
                    <b>​Mon - Fri</b> 8am - 7pm
                    <br />
                    <b>Saturday</b> 10am - 6pm
                    <br />
                    <b>Sunday</b> Closed
                  </CardText>
                  <Button color="primary" className="mt-auto">Map + Directions</Button>
                </Card>
                <Card body className="bg-transparent border-0 p-1">
                  <CardTitle className="text-uppercase">
                    <Link to="/" className="text-dark">
                      Grand Central Terminal
                    </Link>
                  </CardTitle>
                  <CardText>
                      89 East 42nd Street, New York, NY 10017 (Lower Level
                      Dining Concourse)
                      <br />
                      <b>​Mon - Fri</b> 8am - 6:30pm
                      <br />
                      <b>Saturday</b> 9am - 4pm
                      <br />
                      <b>Sunday</b> Closed
                  </CardText>
                  <Button color="primary" className="mt-auto">Map + Directions</Button>
                </Card>
                <Card body className="bg-transparent border-0 p-1">
                  <CardTitle className="text-uppercase">
                    <Link to="/" className="text-dark">
                      Downtown - FiDi
                    </Link>
                  </CardTitle>
                  <CardText>
                    28 John Street, New York, NY 10038
                    <br />
                    <b>​Mon - Fri</b> 8am - 6pm
                    <br />
                    <b>Saturday</b> 9am - 6pm
                    <br />
                    <b>Sunday</b> Closed
                  </CardText>
                  <Button color="primary" className="mt-auto">Map + Directions</Button>
                </Card>
              </CardDeck>
            </Container>
          </section>
        </main>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "repair-category" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            full_image
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
