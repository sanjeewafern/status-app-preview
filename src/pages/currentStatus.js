import React from 'react'

import Layout from "../components/layout"

const CurrentStatusPage = ({ data }) => (
    <Layout>
        <h1 className="status-title">
            Sureway Service health status
        </h1>
        <p>We continuously monitor Sureway and all its services. If there are any performance or service interruptions,
            an update will be posted here.</p>

        <div style={{ marginTop: `10px`, marginBottom: `10px`,}}>
            <ul className="cloud-list">
                <li>
                    <span><em className="maintenance icon-circle"></em>Maintenance event in progress</span>
                </li>
                <li>
                    <span><em className="discovery icon-circle"></em>System down</span>
                </li>
                <li>
                    <span><em className="available icon-circle"></em>Available</span>
                </li>
                <li>
                    <span><em className="minor icon-circle"></em>Potential issue in progress</span>
                </li>
            </ul>
        </div>


        <div>
            {/* {data.markdownRemark.frontmatter.title} */}

            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
    </Layout>
)

export const pageQuery = graphql`
  query CurrentStatusPageQuery {
    markdownRemark(fileAbsolutePath: {regex: "/current-status-page.md/"}) {
        html
        frontmatter {
            path
            title
        }
    }
  }
`


export default CurrentStatusPage;