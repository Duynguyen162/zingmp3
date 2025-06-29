import React from 'react';
import classNames from 'classnames/bind';
import styles from './MusicRoom.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { listMusicRoom } from '~/assets/listMusicRoom.jsx';

const cx = classNames.bind(styles);

export default function MusicRoom() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        if ((currentIndex + 7) * 2 < listMusicRoom.length) {
            setCurrentIndex((index) => index + 7);
        } else setCurrentIndex(listMusicRoom.length - 7);
    };
    const handlePrevious = () => {
        if (currentIndex > 7) {
            setCurrentIndex((index) => index - 7);
        } else setCurrentIndex(0);
    };
    return (
        <div className={cx(cx('wrapper'))}>
            <h1 className={cx('title')}>Phòng nhạc</h1>
            <div className={cx('wrap-list')}>
                <div className={cx('previous')} onClick={handlePrevious}>
                    <FontAwesomeIcon className={cx('ic-previous')} icon={faChevronLeft} />
                </div>
                <div className={cx('wrap-scroll')} style={{ transform: `translateX(-${currentIndex * (1170 / 7)}px)` }}>
                    {listMusicRoom.map((item) => (
                        <div key={item.id} className={cx('list-item')}>
                            <div className={cx('header')}>
                                <div className={cx('wrap-img')}>
                                    <div className={cx('cover')}>
                                        <FontAwesomeIcon className={cx('ic-cover')} icon={faCirclePlay} />
                                    </div>
                                    <img className={cx('img-large')} src={item.imgLarge} alt={item.tiltle} />
                                </div>
                                <img className={cx('img-small')} src={item.imgSmall} alt={item.tiltle} />
                                <img
                                    className={cx('live')}
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                                />
                            </div>
                            <h3>{item.tiltle}</h3>
                            <span>{item.listener} đang nghe</span>
                        </div>
                    ))}
                </div>
                <div className={cx('next')} onClick={handleNext}>
                    <FontAwesomeIcon className={cx('ic-next')} icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}
