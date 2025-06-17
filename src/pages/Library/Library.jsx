import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Library.module.scss';
import { Link, Outlet } from 'react-router-dom';
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

    const [active, setActive] = useState(1);

    return (
        <div className={cx('wrapper')}>
            <h1>
                Thư viện
                <FontAwesomeIcon className={cx('circle-icon')} icon={faCirclePlay} />
            </h1>
            <div className={cx('body')}>
                <nav className={cx('navbar-menu')}>
                    <div className={cx('test')}>
                        {listNavbar.map((item) => (
                            <Link
                                className={cx('header-menu', {
                                    light: active === item.id,
                                })}
                                onClick={() => {
                                    setActive(item.id);
                                }}
                                key={item.id}
                                to={item.path}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
                <Outlet /> {/* CHỖ HIỂN THỊ NỘI DUNG SONG/ALBUM/MV */}
            </div>
        </div>
    );
}
