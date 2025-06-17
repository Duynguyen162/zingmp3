import classNames from 'classnames/bind';
import styles from './PopperSearch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Popper() {
    const data = [
        {
            id: 1,
            title: 'Phép màu',
        },
        {
            id: 2,
            title: 'Gác lại những âu lo',
        },
        {
            id: 3,
            title: 'Mình anh nơi này',
        },
        {
            id: 4,
            title: 'Như anh đã thấy em',
        },
        {
            id: 5,
            title: 'Nơi này có anh',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-suggest')}>Đề xuất cho bạn</div>
            <ul className={cx('suggest-list')}>
                {data.map((data) => (
                    <li key={data.id} className={cx('suggest-item')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faArrowTrendUp} />
                        <span className={cx('title')}>{data.title}</span></li>
                ))}
            </ul>
        </div>
    );
}
