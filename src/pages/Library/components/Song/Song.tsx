import classNames from 'classnames/bind';
import styles from './Song.module.scss';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

export default function Song() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn-song')}>
                <NavLink to="/library" end className={({ isActive }) => cx('base', { pick: isActive })}>
                    YÊU THÍCH
                </NavLink>
                <NavLink to="upload" className={({ isActive }) => cx('base', { pick: isActive })}>
                    ĐÃ TẢI LÊN
                </NavLink>
            </div>
            <Outlet />
        </div>
    );
}
