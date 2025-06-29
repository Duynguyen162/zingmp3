import Explore from '../pages/Explore/Explore';
import Library from '../pages/Library/Library';
import Song from '../pages/Library/components/Song/Song';
import Album from '../pages/Library/components/Album/Album';
import MV from '../pages/Library/components/Mv/Mv';
import MusicRoom from '../pages/MusicRoom/MusicRoom';
import Zingchart from '../pages/Zingchart/Zingchart';
import Like from '../pages/Library/components/Song/Like';
import Upload from '../pages/Library/components/Song/Upload';
import HeardRecently from '../pages/HeardRecently/HeardRecently';
import PlayList from '../pages/PlayList/PlayList';
import ThemeAndGenre from '../pages/ThemeAndGenre/ThemeAndGenre';
import TableRanking from '../pages/TableRanking/TableRanking';
import Top100 from '../pages/Top100/Top100';
const publicRoutes = [
    {
        path: '/',
        component: Explore,
    },
    {
        path: '/library',
        component: Library,
        children: [
            {
                path: '',
                component: Song,
                children: [
                    {
                        path: '',
                        component: Like,
                    },
                    {
                        path: '/library/upload',
                        component: Upload,
                    },
                ],
            },
            {
                path: '/library/album',
                component: Album,
            },
            {
                path: '/library/mv',
                component: MV,
            },
        ],
    },
    {
        path: '/musicRoom',
        component: MusicRoom,
    },
    {
        path: '/explore',
        component: Explore,
    },
    {
        path: '/zingchart',
        component: Zingchart,
    },
    {
        path: '/HeardRecently',
        component: HeardRecently,
    },
    {
        path: '/playList',
        component: PlayList,
    },
    {
        path: '/tableRanking',
        component: TableRanking,
    },
    {
        path: '/themeAndGenre',
        component: ThemeAndGenre,
    },
    {
        path: '/top100',
        component: Top100,
    },
];

export { publicRoutes };
