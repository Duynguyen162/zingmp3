import React from 'react';
import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);

export default function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon')}></div>
            <div className={cx('text')}>Chưa có bài nào trong thư viện cá nhân</div>
            <Button primary className={cx('btn')}>
                TẢI LÊN NGAY
            </Button>
        </div>
    );
}
