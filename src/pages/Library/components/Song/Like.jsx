import React, { useState, useEffect, useContext } from 'react';
import { createContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Like.module.scss';
import { listMusic } from '../../../../assets/dataMusic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeart } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

export const ChooseMusic = createContext(); // tạo context

export default function Like() {
    const { chooseId, setChooseId } = useContext(ChooseMusic); // sử dụng context để lấy id bài hát được chọn
    const hadleChooseMusic = (id) => {
        setChooseId(id); // cập nhật id bài hát được chọn
    };
    return (
        <ChooseMusic.Provider value={{ chooseId, setChooseId }}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <p className={cx('header-item-music')}>BÀI HÁT</p>
                    <p className={cx('header-item-album')}>ALBUM</p>
                    <p className={cx('header-item-time')}>THỜI GIAN</p>
                </div>
                <div className={cx('list-music')}>
                    <ul>
                        {listMusic.map((item) => (
                            <li
                                key={item.id}
                                className={cx('item-music', { light: item.id == chooseId })}
                                onClick={() => hadleChooseMusic(item.id)}
                            >
                                <p className={cx('icon')}>
                                    <i className={cx('ic-song')}></i>
                                </p>
                                <div className={cx('item-music-sing')}>
                                    <img className={cx('thumb-music')} src={item.thumb} alt={item.title} />
                                    <div>
                                        <p className={cx('title')}>{item.title}</p>
                                        <p className={cx('singer')}>{item.singer}</p>
                                    </div>
                                </div>
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
        </ChooseMusic.Provider>
    );
}
