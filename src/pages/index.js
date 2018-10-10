import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
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
import Link from "../components/Link";
import Layout from "../components/Layout";
import SectionCarousel from "../components/SectionCarousel";
import Map from "../components/Map";
import Helmet from 'react-helmet';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: repairCategories } = data.repairCategories;
    const { edges: businessLocations } = data.businessLocations;
    return (
      <Layout>
        <Helmet>
          <title>Leather Spa</title>
          <link rel="canonical" href="https://leatherspa.com" />
        </Helmet>
        <main>
          <SectionCarousel></SectionCarousel>
          <section className="section section-repair-services bg-leather z-15">
            <Container>
              <div className="jumbotron bg-transparent mb-0 text-center text-white">
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
                      <Link className="btn btn-outline-light text-uppercase text-left mt-auto"
                        to={post.fields.slug}
                      >
                        More
                      </Link>
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
                  <div className="jumbotron bg-transparent text-center">
                    <h2 className="text-uppercase text-white">Before &amp; After</h2>
                    <p className="text-white">
                      Our hand-crafted artistry is in a league of its own. View
                      our miraculous transformations below.
                    </p>
                    <Link class="btn btn-primary text-uppercase">
                      Start Repair
                    </Link>
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
                    <Card className="bg-transparent mt-4 text-center">
                      <CardImg className="mx-auto" width="80" src="https://leatherspa.com/assets/img/pick-up.png" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white text-uppercase">Pick-Up Service</CardTitle>
                        <Link
                          class="btn btn-outline-light btn-block mt-auto text-uppercase"
                        >
                          Schedule Now
                        </Link>
                      </CardBody>
                    </Card>
                    <Card className="bg-transparent mt-4 text-center">
                      <CardImg className="mx-auto" width="80" src="https://leatherspa.com/assets/img/Delivery_4.png" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white text-uppercase">Delivery Service</CardTitle>
                        <Link
                          class="btn btn-outline-light btn-block mt-auto text-uppercase"
                        >
                          Schedule Now
                        </Link>
                      </CardBody>
                    </Card>
                    <Card className="bg-transparent mt-4 text-center">
                      <CardImg className="mx-auto" width="80" src="https://leatherspa.com/assets/img/ticket-check.png" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white text-uppercase">Check Repair Status</CardTitle>
                        <Link
                          class="btn btn-outline-light btn-block mt-auto text-uppercase"
                        >
                          Check Repair Status
                        </Link>
                      </CardBody>
                    </Card>

                    <Card className="bg-transparent mt-4 text-center">
                      <CardImg className="mx-auto" width="80" src="https://leatherspa.com/assets/img/pay.png" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white text-uppercase">Pay For Services</CardTitle>
                        <Link
                          class="btn btn-outline-light btn-block mt-auto text-uppercase"
                        >
                          Pay Now
                        </Link>
                      </CardBody>
                    </Card>
                    <Card className="bg-transparent mt-4 text-center">
                      <CardImg className="mx-auto" width="80" src="https://leatherspa.com/assets/img/tips.png" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white text-uppercase">Tips From The Experts</CardTitle>
                        <Link
                          class="btn btn-outline-light btn-block mt-auto text-uppercase"
                        >
                          Read More
                        </Link>
                      </CardBody>
                    </Card>
                    <Card className="bg-transparent mt-4 text-center">
                      <CardImg className="mx-auto" width="80" src="https://leatherspa.com/assets/img/operational-policies.png" alt="Card image cap" />
                      <CardBody>
                        <CardTitle className="text-white text-uppercase">Operational Policies</CardTitle>
                        <Link
                          to="/legal/policies"
                          class="btn btn-outline-light btn-block mt-auto text-uppercase"
                        >
                          Read More
                        </Link>
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
                      <Link to="/" className="text-dark text-uppercase">
                        Locations
                      </Link>
                    </h2>
                    <p>
                      Experience our expertise in-person at one of our
                      breathtaking Manhattan locations.
                    </p>
                    <Link class="btn btn-primary text-uppercase">
                    Contact Us
                    </Link>
                  </div>
                </div>
              </Row>
            </Container>
            <Container fluid={true} className="px-0">
              <Map>
                {data.businessLocations.edges.map(({ node: post }) => (
                  <img key={post.id} lat={post.frontmatter.address.latitude} lng={post.frontmatter.address.longitude} text={post.id} src="https://leatherspa.com/assets/img/location.png" width="30"/>
                ))}
              </Map>
            </Container>
            <Container className="pb-5">
              <CardDeck>
                {businessLocations.map(({ node: post }) => (
                  <Card body className="bg-transparent border-0 p-1" key={post.id}>
                    <CardTitle className="text-uppercase">
                      <Link to={post.fields.slug} className="text-dark">
                        {post.frontmatter.title}
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
                    <Link to={post.fields.slug} className="btn btn-primary mt-auto">Map + Directions</Link>
                  </Card>
                ))}
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
    businessLocations: PropTypes.shape({
      edges: PropTypes.array
    }),
    repairCategories: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query HomePageQuery {
    businessLocations: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]},
      filter: {frontmatter: {templateKey: {eq: "business-location"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            address {
              street
              post_code
              city
              latitude
              longitude
            }
          }
        }
      }
    }
    repairCategories: allMarkdownRemark(
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
