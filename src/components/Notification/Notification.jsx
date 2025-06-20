import React from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';
const cx = classNames.bind(styles);
export default function Notification() {
    return (
        <div className={cx('wrapper')}>
            <p>Chức năng đang phát triển</p>
        </div>
    );
}
