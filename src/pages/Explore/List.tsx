import React, { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './List.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faCirclePlay, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heart } from '@fortawesome/free-regular-svg-icons';
import { listItem } from '~/assets/listExplore'; // đường dẫn tới interface

const cx = classNames.bind(styles);

interface ListProps {
    list: listItem[];
}
export default function List({ list }: ListProps) {
    const [tym, setTym] = useState(false);

    return (
        <div className={cx('wrapper')}>
            {list.map((item) => (
                <div key={item.id} className={cx('list-item')}>
                    <div className={cx('wrapp-img')}>
                        <img className={cx('img')} src={item.img} alt="" />
                        <div className={cx('hover')}>
                            {tym ? (
                                <FontAwesomeIcon className={cx('icon')} icon={faHeart} onClick={() => setTym(!tym)} />
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
    );
}
