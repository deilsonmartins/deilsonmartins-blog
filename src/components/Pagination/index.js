import React from 'react';

import {Link} from 'gatsby';

import propTypes from 'prop-types';

import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md'

import {Wrapper} from './styles';

export default function Pagination({isFirst, isLast, currentPage, numPages, prevPage, nextPage}) {
    return (
    
        <Wrapper>
            {!isFirst &&
                <Link direction="left" to={prevPage} ><MdNavigateBefore size={26} color="323232"/></Link>}

            <p>{currentPage} de {numPages}</p>

            {!isLast &&
                <Link direction="right" to={nextPage} ><MdNavigateNext size={26} color="323232"/></Link>}          
        </Wrapper>
    )
}

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string.isRequired,
    nextPage: propTypes.string.isRequired,
}