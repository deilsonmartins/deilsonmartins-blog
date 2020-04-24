import React, {Component} from 'react';

import logo from './logo.png';

import {Link} from 'gatsby';

import {HeaderMain, HeaderNav} from './styles';

import {SearchAlt2 as Search} from '@styled-icons/boxicons-regular/SearchAlt2';

class Header extends Component {
    render() {

        return(
            <HeaderMain>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>

                <HeaderNav>
                    <ul>
                        <li>
                            <h1>
                                <Link to="/search" activeClassName="active"><Search size={20}/></Link>
                            </h1>
                        </li>
                        <li>
                            <h1>
                                <Link to="/" activeClassName="active">Home</Link>
                            </h1>
                        </li>
                        <li>
                            <h1>
                                <Link to="/work" activeClassName="active">Work</Link>
                            </h1>
                        </li>
                        <li>
                            <h1>
                                <Link to="/about" activeClassName="active">Sobre</Link>
                            </h1>
                        </li>
                    </ul>
                </HeaderNav>
            </HeaderMain>
        )

    }
}

export default Header