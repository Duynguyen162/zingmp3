import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Library.module.scss';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

export default function Library() {
    const listNavbar = [
        {
            id: 1,
            name: 'BÀI HÁT',
            path: '',
        },
        {
            id: 2,
            name: 'ALBUM',
            path: 'album',
        },
        {
            id: 3,
            name: 'MV',
            path: 'mv',
        },
    ];

    const location = useLocation();
    const activePaths = ['/library', '/library/upload'];
    const active = activePaths.includes(location.pathname);
    return (
        <div className={cx('wrapper')}>
            <h1>
                Thư viện
                <FontAwesomeIcon className={cx('circle-icon')} icon={faCirclePlay} />
            </h1>
            <div className={cx('body')}>
                <nav className={cx('navbar-menu')}>
                    <div className={cx('test')}>
                        {listNavbar.map((item) => {
                            return (
                                <NavLink
                                    to={item.path}
                                    end
                                    className={({ isActive }) =>
                                        cx('header-menu', {
                                            light: item.id === 1 ? active : isActive,
                                        })
                                    }
                                    
                                    key={item.id}
                                >
                                    {item.name}
                                </NavLink>
                            );
                        })}
                    </div>
                </nav>
                <Outlet /> {/* CHỖ HIỂN THỊ NỘI DUNG SONG/ALBUM/MV */}
            </div>
        </div>
    );
}
