import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import {
  Avatar,
  CustomLink,
  HEAD,
  Title,
  Layout,
  PostList,
  // ProjectList
} from '../components';

const info = css`
  margin-bottom: 100px;
`;
const profile = css`
  flex: 1;
`;
const mainTitle = css`
  display: flex;
  align-items: center;
`;
const avatar = css`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 10px;
`;
const linkContainer = css`
  width: 100%;
  margin: 2rem 0;
  text-align: center;
`;
const name = css`
margin-left: 10px;
`

// data가 뿌려지는 블로그글들 PostList에 edges라는 props로 전달 
// 근데 data는 어디서 나오는거지..?
export default ({ data }) => {
  console.log(data)
  const { edges: postEdges } = data.posts;
  // const { edges: projectEdges } = data.projects;
  return (
    <Layout>
      <HEAD />
      <div css={info}>
        <div css={profile}>
          <div css={mainTitle}>
            <Avatar css={avatar} />
            <h1 css={name}>Eunmi</h1>
          </div>
          <div>
            <p>
            안녕하세요 백은미입니다.
            </p>
          </div>
        </div>
      </div>
      <CustomLink to="/blog">
        <Title h2="Blogs" />
      </CustomLink>
      <PostList edges={postEdges} />
      <div css={linkContainer}>
        <CustomLink to="/blog">» 모든 글 보기</CustomLink>
      </div>

      {/* <CustomLink to="/project">
        <Title h2="Projects" />
      </CustomLink>
      <ProjectList edges={projectEdges} />
      <div css={linkContainer}>
        <CustomLink to="/project">» Read more on projects</CustomLink>
      </div> */}
    </Layout>
  );
};

export const query = graphql`
  query {
    posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 5) {
      edges {
        node {
          excerpt(truncate: true)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
// project 잠시 제외
// projects: allProjectsJson(sort: { order: DESC, fields: date }, limit: 9) {
//   edges {
//     node {
//       title
//       description
//       date
//       website
//       git
//       stacks
//     }
//   }
// }
