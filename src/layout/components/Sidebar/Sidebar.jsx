import React, { use } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AddplaylistIcon } from '../../../assets/icon/icons';
import MenuNavbar from '../../../components/MenuNavbar/MenuNavbar';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { listItemSidebar } from '../../../assets/listSidebar';
const cx = classNames.bind(styles);

export default function Sidebar({ className }) {
    const [gohome, setGohome] = useState(0);
    return (
        <div className={className}>
            <Link to="/" className={cx('logo-navbar')} onClick={() => setGohome(gohome++)}>
                <img
                    className={cx('logo')}
                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
                    alt="logo"
                />
            </Link>
            <MenuNavbar listItemSidebar={listItemSidebar} gohome={gohome} />
            <div className={cx('add-playlist')}>
                <AddplaylistIcon />
                <p>Tạo playlist mới</p>
            </div>
        </div>
    );
}
