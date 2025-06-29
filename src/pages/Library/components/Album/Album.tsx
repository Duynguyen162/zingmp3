import React from 'react';
import styles from './Album.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
export default function Album() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}></div>
            <p>Chưa có Album trong thư viện cá nhân</p>
        </div>
    );
}
