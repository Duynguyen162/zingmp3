import React, { use } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    LibraryIcon,
    ExploreIcon,
    MusicRoomIcon,
    BxhNhacMoiIcon,
    ChuDeTheLoaiIcon,
    Top100Icon,
    NghegandayIcon,
    BaihatyeuthichIcon,
    PlaylistIcon,
    DatailenIcon,
    AlbumIcon,
    AddplaylistIcon,
} from '../../../assets/icon/icons';
import MenuNavbar from '../../../components/MenuNavbar/MenuNavbar';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

export default function Sidebar({ className }) {
    const iconEnd = <FontAwesomeIcon style={{ width: '100%', height: '100%' }} icon={faCirclePlay} />;
    const listItemSidebar = [
        {
            id: 1,
            icon: <LibraryIcon />,
            title: 'Thư viện',
            to: '/',
            iconEnd: iconEnd,
        },
        {
            id: 2,
            icon: <ExploreIcon />,
            title: 'Khám phá',
            to: '/explore',
        },
        {
            id: 3,
            icon: <LibraryIcon />,
            title: '#zingchart',
            to: '/zingchart',
            iconEnd: iconEnd,
        },
        {
            id: 4,
            icon: <MusicRoomIcon />,
            title: 'Phòng nhạc',
            to: '/musicRoom',
            iconEnd: iconEnd,
        },
        {
            id: 5,
            icon: <BxhNhacMoiIcon />,
            title: 'BXH Nhạc Mới',
            to: '/tableRanking',
            iconEnd: iconEnd,
        },
        {
            id: 6,
            icon: <ChuDeTheLoaiIcon />,
            title: 'Chủ đề & Thể loại',
            to: '/themeAndGenre',
        },
        {
            id: 7,
            icon: <Top100Icon />,
            title: 'Top 100',
            to: '/top100',
        },
        {
            id: 8,
            icon: <NghegandayIcon />,
            title: 'Nghe gần đây',
            to: '/HeardRecently',
        },

        {
            id: 9,
            icon: <BaihatyeuthichIcon />,
            title: 'Bài hát yêu thích',
            to: '/',
            iconEnd: iconEnd,
        },
        {
            id: 10,
            icon: <PlaylistIcon />,
            title: 'Playlist',
            to: '/playList',
        },
        {
            id: 11,
            icon: <AlbumIcon />,
            title: 'Album',
            to: '/album',
        },
        {
            id: 12,
            icon: <DatailenIcon />,
            title: 'Đã tải lên',
            to: '/upload',
        },
    ];
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
