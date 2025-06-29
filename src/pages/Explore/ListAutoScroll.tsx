import React from 'react';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './listAutoScroll.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlay, faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
export default function ListAutoScroll({ list }) {
    const [tym, setTym] = useState(false);
    const [scroll, setScroll] = useState(0);
    const listRef = useRef(null);
    //3 giây thì cuộn 1 lần
    useEffect(() => {
        const interval = setInterval(() => {
            setScroll((prevIndex) => prevIndex + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (scroll >= 2) {
                listRef.current.style.transition = 'none';
                setScroll(0);
            } else {
                listRef.current.style.transition = '0.8s ease-in-out';
            }
        }, 800); //cuộn xong thì nhảy về đàu luôn
        listRef.current.style.transform = `translateX(-${scroll * 1170}px)`;

        return () => clearTimeout(timeoutId);
    }, [scroll]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('track')} ref={listRef}>
                {list.map((item, index) => (
                    <div key={`${item.id}-${index}`} className={cx('list-item')}>
                        <div className={cx('wrapp-img')}>
                            <img className={cx('img')} src={item.img} alt="" />
                            <div className={cx('hover')}>
                                {tym ? (
                                    <FontAwesomeIcon
                                        className={cx('icon')}
                                        icon={faHeart}
                                        onClick={() => setTym(!tym)}
                                    />
                                ) : (
                                    <FontAwesomeIcon className={cx('icon')} icon={heart} onClick={() => setTym(!tym)} />
                                )}
                                <FontAwesomeIcon className={cx('icon', 'play')} icon={faCirclePlay} />
                                <FontAwesomeIcon className={cx('icon')} icon={faEllipsis} />
                            </div>
                        </div>
                        <div>
                            {item.header && <div className={cx('header')}>{item.header}</div>}
                            {item.name ? (
                                <div className={cx('name')}>{item.name}</div>
                            ) : (
                                <div className={cx('tiltle')}>{item.title}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
