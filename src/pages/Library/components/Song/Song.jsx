import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Song.module.scss';
import { Link, Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Song() {
    const [active, setActive] = useState(true);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn-song')}>
                <Link to="" className={cx('base', { pick: active })} onClick={() => setActive(!active)}>
                    YÊU THÍCH
                </Link>
                <Link to="upload" className={cx('base', { pick: !active })} onClick={() => setActive(!active)}>
                    ĐÃ TẢI LÊN
                </Link>
            </div>
            <Outlet />
        </div>
    );
}
