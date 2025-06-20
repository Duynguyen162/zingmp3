import Explore from '../pages/Explore/Explore.jsx';
import Library from '../pages/Library/Library.jsx';
import Song from '../pages/Library/components/Song/Song.jsx';
import Album from '../pages/Library/components/Album/Album.jsx';
import MV from '../pages/Library/components/Mv/Mv.jsx';
import MusicRoom from '../pages/MusicRoom/MusicRoom.jsx';
import Zingchart from '../pages/Zingchart/Zingchart.jsx';
import Like from '../pages/Library/components/Song/Like.jsx';
import Upload from '../pages/Library/components/Song/upload.jsx';
import HeardRecently from '../pages/HeardRecently/HeardRecently.jsx';
import PlayList from '../pages/PlayList/PlayList.jsx';
import ThemeAndGenre from '../pages/ThemeAndGenre/ThemeAndGenre.jsx';
import TableRanking from '../pages/TableRanking/TableRanking.jsx';
import Top100 from '../pages/Top100/Top100.jsx';
const publicRoutes = [
    {
        path: '/explore',
        component: Explore,
    },
    {
        path: '/',
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
                        path: 'upload',
                        component: Upload,
                    },
                ],
            },
            {
                path: 'album',
                component: Album,
            },
            {
                path: 'mv',
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
    }
    

];

export { publicRoutes };
