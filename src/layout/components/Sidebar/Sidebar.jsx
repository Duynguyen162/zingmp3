import React, { use } from 'react';

import { useState } from 'react';
import { AddplaylistIcon } from '../../../assets/icon/icons';
import MenuNavbar from '../../../components/MenuNavbar/MenuNavbar';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { listItemSidebar } from '../../../assets/listSidebar';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

export default function Sidebar({ className }) {
    
    return (
        <div className={className}>
            <NavLink to="/" className={cx('logo-navbar')} >
                <img
                    className={cx('logo')}
                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
                    alt="logo"
                />
            </NavLink>
            <MenuNavbar listItemSidebar={listItemSidebar}  />
            <div className={cx('add-playlist')}>
                <AddplaylistIcon />
                <p>Tạo playlist mới</p>
            </div>
        </div>
    );
}
