import React, { useEffect } from 'react';
import { useState } from 'react';
import { AddplaylistIcon } from '../../../assets/icon/icons';
import MenuNavbar from '../../../components/MenuNavbar/MenuNavbar';
import { listItemSidebar } from '../../../assets/listSidebar';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

interface Sidebar {
    className: string;
    isSidebarOpen: boolean;
    setIsSidebarOpen?: any; //để tạm
    isCompact?: boolean;
}
export default function Sidebar({ className, isSidebarOpen, setIsSidebarOpen, isCompact }: Sidebar) {
    const [open, setOpen] = useState(false);
    return (
        <div className={className}>
            <NavLink to="/" className={cx('logo-navbar', { 'logo-navbar-fix': isSidebarOpen })}>
                {isSidebarOpen ? (
                    <div className={cx('logo-icon')}></div>
                ) : (
                    <img
                        className={cx('logo')}
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
                        alt="logo"
                    />
                )}
            </NavLink>

            <MenuNavbar listItemSidebar={listItemSidebar} isSidebarOpen={isSidebarOpen} />

            <div className={cx('add-playlist', { 'add-playlist-fix': isSidebarOpen })}>
                <AddplaylistIcon />
                <p>Tạo playlist mới</p>
                {isCompact &&
                    (!open ? (
                        <div
                            className={cx('btn-hide-sidebar')}
                            onClick={() => {
                                setIsSidebarOpen(!isSidebarOpen);
                                setOpen(!open);
                            }}
                        >
                            <div className={cx('next')}>
                                <FontAwesomeIcon className={cx('icon-next')} icon={faChevronRight} />
                            </div>
                        </div>
                    ) : (
                        <div
                            className={cx('btn-hide-sidebar')}
                            onClick={() => {
                                setIsSidebarOpen(!isSidebarOpen);
                                setOpen(!open);
                            }}
                        >
                            <div className={cx('next')}>
                                <FontAwesomeIcon className={cx('icon-next')} icon={faChevronLeft} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
