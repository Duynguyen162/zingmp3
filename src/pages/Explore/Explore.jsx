import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { listMusic } from '../../assets/dataMusic';
import Media from '~/components/Media/Media';
const cx = classNames.bind(styles);

const listCard = [
    {
        id: 0,
        name: 'Em và tôi',
        singer: 'Hoàng Dũng, Hà Anh Tuấn,Phan Mạnh Quỳnh, Thịnh Suy',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/6/1/9/5/6195b8365a1ee9ccff7ac045a3fd59bd.jpg',
        backColor: 'linear-gradient(to right top, rgb(154, 154, 154), rgba(107, 255, 8, 0) 100%)',
    },
    {
        id: 1,
        name: 'Crush Ơi! Mình Yêu Nhau Đi',
        singer: 'Wren Evans, AMEE, SUNI,Thoại Nghi',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/f/5/f/b/f5fb504aab7d0ab6e62e6308432d19b5.jpg',
        backColor: 'linear-gradient(to top left, rgb(222, 164, 134), rgba(189, 175, 168, 0) 100%)',
    },
    {
        id: 2,
        name: 'Những Bản Hit Ngủ Quên',
        singer: 'buitruonglinh, SOOBIN, Sofia,Thanh Hưng',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/2/d/1/f/2d1f2cef5356c08aa99771f6a670ae93.jpg',
        backColor: 'linear-gradient(to right bottom, rgb(159, 160, 164), rgba(159, 160, 164, 0) 100%)',
    },
    {
        id: 3,
        name: 'Tình Yêu Đầu Tiên',
        singer: 'AMEE, Kai Đinh, Suni Hạ Linh,Tùng Maru',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/1/8/1/5/181583011aea7c56f91eaf92ed30cf70.jpg',
        backColor: 'linear-gradient(to right bottom, rgb(162, 179, 187), rgba(162, 179, 187, 0) 100%)',
    },
    {
        id: 4,
        name: 'Indie VIệt Kết Hợp',
        singer: '14 Casper, Bon Nghiêm, RIO,52Hz',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/f/6/c/e/f6ce6b9a4695b44db09d8b8d93cf3e74.jpg',
        backColor: 'linear-gradient(to right bottom, rgb(165, 159, 146), rgba(165, 159, 146, 0) 100%)',
    },
];

export default function Explore() {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index >= listCard.length - 3) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    };
    const handlePrevious = () => {
        if (index <= 0) {
            setIndex(listCard.length - 3);
            return;
        }
        setIndex(index - 1);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('full-card')}>
                <div className={cx('previous')} onClick={handlePrevious}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>

                <div className={cx('cover-card')}>
                    <div className={cx('trans-card')} style={{ transform: `translateX(-${index * 390}px)` }}>
                        {listCard.map((item, index) => (
                            <div key={item.id} className={cx('card')} style={{ background: item.backColor }}>
                                <img src={item.img} alt={item.name} className={cx('card-img')} />
                                <div className={cx('card-info')}>
                                    <div className={cx('tag')}>CÓ THỂ BẠN THÍCH</div>
                                    <h3 className={cx('card-name')}>{item.name}</h3>
                                    <p className={cx('card-singer')}>{item.singer}</p>
                                </div>
                                <div className={cx('background-end')}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cx('next')} onClick={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>

            <div className={cx('heardRecently')}>
                <div className={cx('heardRecently-header')}>
                    <h3 className={cx('tiltle')}>Nghe Gần Đây</h3>
                    <div className={cx('btn-openAll')}>
                        <p>TẤT CẢ</p>
                        <FontAwesomeIcon className={cx('ic-openAll')} icon={faChevronRight} />
                    </div>
                </div>
                <div className={cx('heardRecently-content')}>
                    <div className={cx('heardRecently-content-item')}>
                        <img
                            className={cx('heardRecently-img')}
                            src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/4/4/8/04484c301927ddfd6580bb9df0380682.jpg"
                            alt=""
                        />
                        <p>Nhạc trẻ gây nghiện</p>
                    </div>
                </div>
            </div>

            <div className={cx('suggest-music')}>
                <h3>Gợi Ý Bài Hát</h3>
                <div className={cx('list-music')}>
                    {listMusic.map((item) => (
                        <div className={cx('wrapper-item')}>
                            <Media className={cx('music-item')} music={item} hidden={false} />
                            <div className={cx('hover-item')}>
                                <FontAwesomeIcon className={cx('hover-item-heart')} icon={faHeart} />
                                <FontAwesomeIcon className={cx('hover-item-ellipsis')} icon={faEllipsis} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
