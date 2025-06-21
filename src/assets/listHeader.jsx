import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faCirclePlay,
    faBrush,
    faCircleInfo,
    faShieldHalved,
    faFileLines,
    faFlag,
    faPhone,
    faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
export const listSetting = [
    {
        id: 1,
        firstIcon: <FontAwesomeIcon icon={faCirclePlay} />,
        title: 'Trình  phát nhạc',
        lastIcon: <FontAwesomeIcon icon={faChevronRight} />,
    },
    {
        id: 2,
        firstIcon: <FontAwesomeIcon icon={faBrush} />,
        title: 'Giao diện',
        lastIcon: <FontAwesomeIcon icon={faChevronRight} />,
    },
    {
        id: 3,
        attribute: 'blur',
        firstIcon: <FontAwesomeIcon icon={faCircleInfo} />,
        title: 'Giới thiệu',
    },
    {
        id: 4,
        attribute: 'blur',
        firstIcon: <FontAwesomeIcon icon={faFileLines} />,
        title: 'Thỏa thuận sử dụng',
        lastIcon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
    },
    {
        id: 5,
        attribute: 'blur',
        firstIcon: <FontAwesomeIcon icon={faShieldHalved} />,
        title: 'Chính sách bảo mật',
        lastIcon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
    },
    {
        id: 6,
        attribute: 'blur',
        firstIcon: <FontAwesomeIcon icon={faFlag} />,
        title: 'Báo cáo vi phạm bản quyền',
        lastIcon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
    },
    {
        id: 7,
        attribute: 'blur',
        firstIcon: <FontAwesomeIcon icon={faFlag} />,
        title: 'Quảng cáo',
        lastIcon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
    },
    {
        id: 8,
        attribute: 'blur',
        firstIcon: <FontAwesomeIcon icon={faPhone} />,
        title: 'Liên hệ',
        lastIcon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
    },
];
