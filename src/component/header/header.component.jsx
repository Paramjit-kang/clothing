import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';
import { ReactComponent as Logo} from '../../assets/original.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/Shop'>
                SHOP
            </Link>
            <Link className='option' to='/Shop'>
                CONTACTS
            </Link>
        </div>
    </div>
)

export default Header;