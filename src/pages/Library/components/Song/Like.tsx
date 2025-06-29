import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Like.module.scss';
import { listMusic } from '../../../../assets/dataMusic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Media from '../../../../components/Media/Media';
import { useChooseMusic } from '~/contexts/ChooseMusicContext';
const cx = classNames.bind(styles);
export default function Like() {
    const { chooseId, setChooseId } = useChooseMusic(); // sử dụng context để lấy id bài hát được chọn
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p className={cx('header-item-music')}>BÀI HÁT</p>
                <p className={cx('header-item-album')}>ALBUM</p>
                <p className={cx('header-item-time')}>THỜI GIAN</p>
            </div>
            <div className={cx('list-music')}>
                <ul>
                    {listMusic.map((item) => (
                        <li key={item.id} className={cx('item-music', { light: item.id == chooseId })}>
                            <p className={cx('icon')}>
                                <i className={cx('ic-song')}></i>
                            </p>
                            <Media music={item} hidden={false} small={true} className={cx('media')} />

                            <p className={cx('item-music-album')}>{item.album}</p>
                            <div className={cx('time')}>
                                <FontAwesomeIcon className={cx('heart')} icon={faHeart} />
                                <p>{item.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
