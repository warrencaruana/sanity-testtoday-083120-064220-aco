import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlockContent from "@sanity/block-content-to-react"

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const ContactPage = ({ data }) => {
  const page = data && data.page

  return (
    <Layout>
      <SEO title={page.title} />
      <div className="page-headline">
        <div className="container">
          <div className="section-heading text-center">
            <h6 className="font-weight-bold text-uppercase text-white-50 flair">
              {page.title}
            </h6>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <BlockContent
              blocks={page._rawBody || []}
              serializers={serializers}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      id
      title
      _rawBody
    }
  }
`

export default ContactPage
