import classNames from 'classnames/bind';
import styles from './Media.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
export default function Media({ music, hidden = true, className }) {
    const [changeheart, setchangeheart] = useState(false);
    return (
        <div className={cx('wrapper', className)}>
            <img className={cx('thumb-music-img')} src={music.thumb} alt="" />
            <div className={cx('title')}>
                <p className={cx('music-title')}>{music.title}</p>
                <p className={cx('music-singer')}>{music.singer}</p>
            </div>
            {changeheart
                ? hidden && (
                      <FontAwesomeIcon
                          className={cx('heart')}
                          icon={faHeart}
                          onClick={() => setchangeheart(!changeheart)}
                      />
                  )
                : hidden && (
                      <FontAwesomeIcon
                          className={cx('heart')}
                          icon={heart}
                          onClick={() => setchangeheart(!changeheart)}
                      />
                  )}
            {hidden && <FontAwesomeIcon className={cx('more')} icon={faEllipsis} />}
        </div>
    );
}
