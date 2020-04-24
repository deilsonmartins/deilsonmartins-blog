import React from 'react'

import {graphql} from 'gatsby'

import Layout from '../components/Layout';

import SEO from '../components/seo';

import RecomendsPost from '../components/RecomendsPost';

import Comments from '../components/Comments';

import {Wrapper, MainContent} from '../styles/post.js';

const BlogPost = ({data, pageContext}) => {
    const post = data.markdownRemark
    const next = pageContext.nextPost
    const previous = pageContext.previousPost

    return (
        <Layout>
            <SEO 
                title={post.frontmatter.title}
                description={post.frontmatter.description}
            />
            
            <Wrapper>
                <span>{post.frontmatter.date} * {post.timeToRead} min de leitura</span>
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.description}</p>
            </Wrapper>

            <MainContent>
                <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </MainContent>
            <RecomendsPost next={next} previous={previous}/>

            <Comments url={post.fields.slug} title={post.frontmatter.title}/>

            
        </Layout>
    )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }

      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`

export default BlogPost