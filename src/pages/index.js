import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import MySwiper from "../components/swiper/swiper"
import SampleForm from "../components/form/form"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import bsns from "../images/business.svg"
import finance from "../images/financial.svg"
import jigsaw from "../images/jigsaws.svg"
import report from "../images/report.svg"
import trophy from "../images/trophy.svg"
import BlockContent from "@sanity/block-content-to-react"

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = this.props.data.allSanityPost.edges
    const aboutPage = this.props.data.aboutPage
    const siteSettings = this.props.data.siteSettings

    const serializers = {
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
      },
    }

    console.log(posts)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <div class="hero-section bg-light">
          <Container>
            <div class="row justify-content-center">
              <div class="col-md-9">
                <h1 class="display-4 font-weight-bold flair">
                  {siteSettings.title}
                </h1>
                <p class="lead">{siteSettings.description}</p>
              </div>
            </div>
          </Container>
        </div>
        <div class="about-section">
          <div class="container">
            <div class="section-heading text-center">
              <h6 class="font-weight-bold text-uppercase flair">
                {aboutPage.title}
              </h6>
            </div>
            <div>
              <div class="row justify-content-between align-items-center pt-5">
                <BlockContent
                  blocks={aboutPage._rawBody || []}
                  serializers={serializers}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="services-section bg-light">
          <div class="container">
            <div class="section-heading text-center">
              <h6 class="font-weight-bold text-uppercase flair">Services</h6>
              <h2>
                <strong>How Can We Help You?</strong>
              </h2>
            </div>
            <div class="row justify-content-center pt-5">
              <div class="col-md-4 mb-5">
                <div class="p-3">
                  <LazyLoadImage src={bsns} width="100px" />
                  <h5 class="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div class="col-md-4 mb-5">
                <div class="p-3">
                  <LazyLoadImage src={finance} width="100px" alt="Finance" />
                  <h5 class="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div class="col-md-4 mb-5">
                <div class="p-3">
                  <LazyLoadImage src={jigsaw} width="100px" />
                  <h5 class="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div class="col-md-4 mb-5">
                <div class="p-3">
                  <LazyLoadImage src={report} width="100px" />
                  <h5 class="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div class="col-md-4 mb-5">
                <div class="p-3">
                  <LazyLoadImage src={trophy} width="100px" />
                  <h5 class="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="reviews-section">
          {/*<div class="review-nav">
            <div class="review-prev">
              <i class="fa fa-angle-left" />
            </div>
            <div class="review-next">
              <i class="fa fa-angle-right" />
            </div>
          </div>*/}
          <div class="container">
            <div class="section-heading text-center">
              <h6 class="font-weight-bold text-uppercase flair">Reviews</h6>
              <h2>What Our Clients Say</h2>
            </div>
          </div>
          <MySwiper slidesperview={1}>
            <div class="row justify-content-center">
              <div class="col-8 mx-auto">
                <div class="pt-5">
                  <div class="review-item text-center">
                    <div class="review-statement bg-light">
                      <p class="text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div class="pt-5">
                      <span class="stars">
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                      </span>
                      <h4 class="mb-0">Jane Doe</h4>
                      <span class="text-muted">CEO, Company.inc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-8 mx-auto">
                <div class="pt-5">
                  <div class="review-item text-center">
                    <div class="review-statement bg-light">
                      <p class="text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div class="pt-5">
                      <span class="stars">
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                      </span>
                      <h4 class="mb-0">Jane Doe</h4>
                      <span class="text-muted">CEO, Company.inc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-8 mx-auto">
                <div class="pt-5">
                  <div class="review-item text-center">
                    <div class="review-statement bg-light">
                      <p class="text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div class="pt-5">
                      <span class="stars">
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                      </span>
                      <h4 class="mb-0">Jane Doe</h4>
                      <span class="text-muted">CEO, Company.inc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MySwiper>
        </div>
        <div class="blog-section bg-light">
          <div class="container">
            <div class="section-heading text-center">
              <h6 class="font-weight-bold text-uppercase flair">blog</h6>
              <h2>Latest Posts</h2>
            </div>
            <div class="row justify-content-around py-5">
              {posts.map(post => (
                <div class="col-md-6 col-lg-4 mb-4" key={post.node.id}>
                  <div class="blog-item bg-white h-100">
                    <Link to={post.node.slug.current}>
                      <div
                        class="blog-image"
                        style={{
                          backgroundImage: `url(${
                            post.node.mainImage !== null
                              ? post.node.mainImage.asset.fluid.src
                              : "https://source.unsplash.com/user/joshhild/500x500"
                          })`,
                        }}
                      />
                    </Link>
                    <div class="blog-text">
                      <Link to={post.node.slug.current}>
                        <h4>{post.node.title}</h4>
                      </Link>
                      <p class="pt-2 text-muted">{post.node.excerpt}</p>
                      <span class="text-muted small">
                        <i class="fa fa-calendar-o pr-1" />
                        {post.node.publishedAt}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="text-center">
              <Link class="btn btn-primary" role="button" to="/blog">
                More from the Blog
              </Link>
            </div>
          </div>
        </div>
        <div class="contact-section">
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <div class="col-md-5">
                <div class="section-heading text-left">
                  <h6 class="font-weight-bold text-uppercase text-left flair">
                    Connect
                  </h6>
                  <h2>Get in Touch with Us</h2>
                  <p class="py-4">
                    Contact us using the following details below, or fill up the
                    form and we'll get back to you shortly.
                  </p>
                  <ul class="list-unstyled contact-details">
                    <li class="phone">
                      <a
                        class="link-unstyled"
                        href="tel:+1 234 5678 900"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +1 234 5678 900
                      </a>
                    </li>
                    <li class="email">
                      <a
                        class="link-unstyled"
                        href="mailto:info@yourdomain.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        info@yourdomain.com
                      </a>
                    </li>
                    <li class="address">
                      22 Street Name, City Name, United States 1234
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="py-4">
                  <SampleForm
                    form_name="Newsletter Form"
                    form_id="5bcd42f86b63453b251972bc"
                    form_classname="form-newsletter"
                  >
                    <div class="form-row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            type="text"
                            id="firstName"
                            required=""
                          />
                          <label htmlFor="firstName">First Name</label>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            type="text"
                            id="lastName"
                            required=""
                          />
                          <label htmlFor="lastName">Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="email"
                        id="homeEmail"
                        required=""
                      />
                      <label htmlFor="homeEmail">Email address</label>
                    </div>
                    <div class="form-group">
                      <input class="form-control" id="phone" type="tel" />
                      <label htmlFor="phone">Phone (optional)</label>
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control h-auto"
                        id="message"
                        required=""
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                    <div class="form-group">
                      <div className="webriq-recaptcha" />
                    </div>
                    <div class="form-group mb-4">
                      <button class="btn btn-primary" type="submit">
                        Send Message
                      </button>
                    </div>
                  </SampleForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    siteSettings: sanitySiteSettings {
      title
      description
    }
    aboutPage: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody
    }
    allSanityPost(sort: { order: ASC, fields: publishedAt }, limit: 3) {
      edges {
        node {
          id
          title
          mainImage {
            asset {
              fluid {
                src
              }
            }
          }
          slug {
            current
          }
          excerpt
          publishedAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
