import React from 'react';
import { css } from '@emotion/core';
import { Tags } from '.';
const info = css`
  font-size: 0.8rem;
`;
const tagList = css`
  margin-right: 0;
`;
const PostInfo = ({ date, tags }) => (
  <>
    {tags && (
      <div css={info}>
        <Tags tags={tags} css={tagList} />
      </div>
    )}
    <span css={info}>{date}</span>

  </>
);

export default PostInfo;
