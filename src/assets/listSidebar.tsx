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
} from '~/assets/icon/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { JSX } from 'react';
const iconEnd = <FontAwesomeIcon style={{ width: '100%', height: '100%' }} icon={faCirclePlay} />;

interface ListItemSidebar {
    id: number;
    icon: JSX.Element;
    tiltle: string;
    to: string;
    iconEnd?: JSX.Element;
}

export const listItemSidebar: ListItemSidebar[] = [
    {
        id: 1,
        icon: <LibraryIcon />,
        tiltle: 'Thư viện',
        to: '/library',
        iconEnd: iconEnd,
    },
    {
        id: 2,
        icon: <ExploreIcon />,
        tiltle: 'Khám phá',
        to: '/',
    },
    {
        id: 3,
        icon: <LibraryIcon />,
        tiltle: '#zingchart',
        to: '/zingchart',
        iconEnd: iconEnd,
    },
    {
        id: 4,
        icon: <MusicRoomIcon />,
        tiltle: 'Phòng nhạc',
        to: '/musicRoom',
        iconEnd: iconEnd,
    },
    {
        id: 5,
        icon: <BxhNhacMoiIcon />,
        tiltle: 'BXH Nhạc Mới',
        to: '/tableRanking',
        iconEnd: iconEnd,
    },
    {
        id: 6,
        icon: <ChuDeTheLoaiIcon />,
        tiltle: 'Chủ đề & Thể loại',
        to: '/themeAndGenre',
    },
    {
        id: 7,
        icon: <Top100Icon />,
        tiltle: 'Top 100',
        to: '/top100',
    },
    {
        id: 8,
        icon: <NghegandayIcon />,
        tiltle: 'Nghe gần đây',
        to: '/HeardRecently',
    },

    {
        id: 9,
        icon: <BaihatyeuthichIcon />,
        tiltle: 'Bài hát yêu thích',
        to: '/library',
        iconEnd: iconEnd,
    },
    {
        id: 10,
        icon: <PlaylistIcon />,
        tiltle: 'Playlist',
        to: '/playList',
    },
    {
        id: 11,
        icon: <AlbumIcon />,
        tiltle: 'Album',
        to: '/library/album',
    },
    {
        id: 12,
        icon: <DatailenIcon />,
        tiltle: 'Đã tải lên',
        to: '/library/upload',
    },
];
