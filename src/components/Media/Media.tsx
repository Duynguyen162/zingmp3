import classNames from 'classnames/bind';
import styles from './Media.module.scss';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ReactNode } from 'react';
import { useChooseMusic } from '~/contexts/ChooseMusicContext';
const cx = classNames.bind(styles);

interface MusicItem {
    id: number;
    title: string;
    singer: string;
    thumb: string;
}

interface MediaProps {
    music: MusicItem;
    hidden?: Boolean;
    className?: String;
    small?: Boolean;
    noneColorTiltle?: Boolean;
}

export default function Media({ music, hidden = true, className, small = false, noneColorTiltle = false }: MediaProps) {
    const [changeheart, setchangeheart] = useState(false);

    const { chooseId, setChooseId } = useChooseMusic(); // sử dụng context để lấy id bài hát được chọn

    const handleChooseMusic = (id: number) => {
        setChooseId(id);
    };

    return (
        <div className={cx('wrapper', className, small && 'wrapper-small')} onClick={() => handleChooseMusic(music.id)}>
            <img className={cx('thumb-music-img', small && 'thumb-small')} src={music.thumb} alt="" />
            <div className={cx('title')}>
                <p className={cx(noneColorTiltle ? 'music-title-nohover' : 'music-title')}>{music.title}</p>
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
            {hidden && (
                <div className={cx('btn-more')}>
                    <div className={cx('background')}></div>
                    <FontAwesomeIcon className={cx('more')} icon={faEllipsis} />
                </div>
            )}
        </div>
    );
}
