import React from 'react';

import PropTypes from 'prop-types';

import {Wrapper, PostLink, PostItemInfo} from './styles';

export default function PostItem({slug, date, timeToRead, title, description}) {
    return (
        <Wrapper>
            <PostLink to={slug}>
                <PostItemInfo>
                    <h1>{title}</h1>
                    <span>{date} * {timeToRead} min de leitura</span>
                    <p>{description}</p>
                </PostItemInfo>
            </PostLink>
        </Wrapper>
    )
}

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
}