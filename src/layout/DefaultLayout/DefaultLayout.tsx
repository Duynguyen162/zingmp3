import React, { ReactNode, useState } from 'react';
import Header from '~/layout/components/Header/Header';
import Sidebar from '~/layout/components/Sidebar/Sidebar';
import Playmusic from '../components/Playmusic/Playmusic';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { ChooseMusicProvider } from '~/contexts/ChooseMusicContext';

const cx = classNames.bind(styles);

interface DefaultLayout {
    children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayout) {
    return (
        <>
            <ChooseMusicProvider>
                <div className={cx('wrapper')}>
                    <Sidebar className={cx('sidebar')} />

                    <div className={cx('container')}>
                        <Header className={cx('header')} />
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
                <div className={cx('play-music-wrapper')}>
                    <Playmusic />
                </div>
            </ChooseMusicProvider>
        </>
    );
}
