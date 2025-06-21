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
const iconEnd = <FontAwesomeIcon style={{ width: '100%', height: '100%' }} icon={faCirclePlay} />;
export const listItemSidebar = [
    {
        id: 1,
        icon: <LibraryIcon />,
        title: 'Thư viện',
        to: '/library',
        iconEnd: iconEnd,
    },
    {
        id: 2,
        icon: <ExploreIcon />,
        title: 'Khám phá',
        to: '/',
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
        to: '/library',
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
        to: '/library/album',
    },
    {
        id: 12,
        icon: <DatailenIcon />,
        title: 'Đã tải lên',
        to: '/library/upload',
    },
];
