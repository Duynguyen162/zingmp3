import React from 'react';
import classNames from 'classnames/bind';
import styles from './MusicRoom.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);

const listMusicRoom = [
    {
        id: 0,
        tiltle: 'V-POP',
        listener: 40,
        imgLarge:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg',
        imgSmall:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg',
    },
    {
        id: 1,
        tiltle: 'Chạm',
        listener: 30,
        imgLarge:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg',
        imgSmall:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/7/8/d/778d152062edfbe0e4c4abf151858bf0.jpg',
    },
    {
        id: 2,
        tiltle: 'Bolero',
        listener: 39,
        imgLarge:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg',
        imgSmall:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg',
    },
    {
        id: 3,
        tiltle: 'US-UK',
        listener: 65,
        imgLarge:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg',
        imgSmall:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg',
    },
    {
        id: 4,
        tiltle: 'K-POP',
        listener: 415,
        imgLarge:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/f/2/4/cf2428f7e56a8c2a52d84cb106891de2.jpg',
        imgSmall:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/f/2/4/cf2428f7e56a8c2a52d84cb106891de2.jpg',
    },
    {
        id: 5,
        tiltle: 'Aucoustic',
        listener: 415,
        imgLarge:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/f/b/0/efb05fb9097a7057aecef6ecb62bff5a.jpg',
        imgSmall:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/9/9/3/0993b3110c60ba6518fceeba9913d20d.jpg',
    },
    {
        id: 6,
        tiltle: 'Rap Việt',
        listener: 415,
        imgLarge:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/f/3/b/bf3bf87a788a5d0b8719c6feee774a2e.jpg',
        imgSmall:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/f/3/b/bf3bf87a788a5d0b8719c6feee774a2e.jpg',
    },
    {
        id: 7,
        tiltle: 'EDM',
        listener: 415,
        imgLarge:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/7/f/3/e7f3098c8bc0e12444a9495900580ed5.jpg',
        imgSmall:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/7/f/3/e7f3098c8bc0e12444a9495900580ed5.jpg',
    },
    {
        id: 8,
        tiltle: 'C-POP',
        listener: 415,
        imgLarge:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/b/2/d/db2db7890510c26e76f32b885b1818cd.jpg',
        imgSmall:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/b/2/d/db2db7890510c26e76f32b885b1818cd.jpg',
    },
    {
        id: 9,
        tiltle: 'Nhạc không lời',
        listener: 415,
        imgLarge:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/9/1/1/a91125f46d6dc0eaa045587d2b9a4496.jpg',
        imgSmall:
            'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/9/1/1/a91125f46d6dc0eaa045587d2b9a4496.jpg',
    },
];
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
