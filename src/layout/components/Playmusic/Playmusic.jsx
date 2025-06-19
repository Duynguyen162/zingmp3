import { useState, useRef, useEffect, useContext, use } from 'react';
import { ChooseMusic } from '../../../components/Media/Media';
import classNames from 'classnames/bind';
import styles from './Playmusic.module.scss';
import { listMusic } from '../../../assets/dataMusic';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause } from '@fortawesome/free-regular-svg-icons';
import { faShuffle, faBackwardStep, faForwardStep, faRepeat, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import Media from '../../../components/Media/Media';

const cx = classNames.bind(styles);

export default function Playmusic() {
    const [currentTime, setCurrentTime] = useState(0);
    const [time, setTime] = useState(0);
    const [volume, setVolume] = useState(1);
    const lengthMusic = listMusic.length;
    //bài nhạc trong list
    const { chooseId, setChooseId } = useContext(ChooseMusic);
    // nếu không có id thì lấy bài đầu tiên
    const music = listMusic[chooseId] || listMusic[0];

    //để làm nút bấm chạy, dừng
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();

    // nhận độ dài đoạn nhạc khi load xong
    const handleLoaded = () => setTime(audioRef.current.duration);

    //cập nhật liên tục thời gian đoạn nhạc đang phát
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };
    // hết nhạc thì set thời gian về 0
    const handleEnded = () => {
        audioRef.current.currentTime = 0;
        // nếu hết nhạc thì chuyển sang bài tiếp theo
        setChooseId((prev) => (prev + 1 > lengthMusic - 1 ? 0 : prev + 1));
        //cho thanh trượt về 0
        audioRef.current?.pause();
        setCurrentTime(0);
        audioRef.current.play();
        setIsPlaying(true);
    };

    useEffect(() => {
        // Dừng bài cũ nếu đang phát
        audioRef.current?.pause();
        //tạo audio mới mỗi khi chọn bài hát mới
        const audio = new Audio(music.music);
        //gắn bài mới vào ref
        audioRef.current = audio;
        // set volume cho audio
        audio.volume = volume;

        if (isPlaying) {
            audio.play();
        }
        //load time nhạc
        audio.addEventListener('loadedmetadata', handleLoaded);
        // cập nhật thời gian hiện tại của nhạc
        audio.addEventListener('timeupdate', handleTimeUpdate);
        // khi hết nhạc thì gọi hàm handleEnded
        audio.addEventListener('ended', handleEnded);
        return () => {
            //xóa sự kiện
            audio.removeEventListener('loadedmetadata', handleLoaded);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [chooseId]);

    //chạy nhạc
    const handlePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // set thời gian khi kéo thanh trượt
    const handleSetTime = (e) => {
        const newtime = parseFloat(e.target.value);
        audioRef.current.currentTime = newtime;
        setCurrentTime(newtime);
    };
    //set volum cho thanh trượt
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    //format thời gian chạy
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    return (
        <div className={cx('wrapper')}>
            <Media music={music} noneColorTiltle={true}/>
            <div className={cx('player-control')}>
                <div className={cx('player-control-top')}>
                    <FontAwesomeIcon className={cx('control-item')} icon={faShuffle} />
                    {/* nút quay lại bài hát trước */}
                    <div
                        className={cx('previoius')}
                        onClick={() => {
                            chooseId == 0 ? setChooseId(lengthMusic - 1) : setChooseId(chooseId - 1);
                        }}
                    >
                        <FontAwesomeIcon className={cx('control-item')} icon={faBackwardStep} />
                    </div>
                    {/* chạy nhạc */}
                    {!isPlaying ? (
                        <FontAwesomeIcon
                            className={cx('control-item-play')}
                            onClick={() => handlePlay()}
                            icon={faCirclePlay}
                        />
                    ) : (
                        <FontAwesomeIcon
                            className={cx('control-item-pause')}
                            onClick={() => handlePlay()}
                            icon={faCirclePause}
                        />
                    )}
                    {/* nút tiến tới bài hát tiếp theo */}
                    <HeadlessTippy
                        interactive={true}
                        appendTo={document.body}
                        render={(atrr) => (
                            <div className={cx('wrapper-tippy')} tabIndex="-1" {...atrr}>
                                <div className={cx('arrow')}></div>
                                <span className={cx('header-next-tippy')}>Bài tiếp theo</span>
                                <div className={cx('body-tippy')}>
                                    <img
                                        className={cx('avt-tippy')}
                                        src={listMusic[chooseId + 1]?.thumb || listMusic[0].thumb}
                                        alt="avt music"
                                    />
                                    <div>
                                        <p className={cx('title-tippy')}>
                                            {listMusic[chooseId + 1]?.title || listMusic[0].title}
                                        </p>
                                        <p className={cx('singer-tippy')}>
                                            {listMusic[chooseId + 1]?.singer || listMusic[0].singer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    >
                        <span>
                            <div
                                className={cx('next')}
                                onClick={() => {
                                    chooseId == lengthMusic - 1 ? setChooseId(0) : setChooseId(chooseId + 1);
                                }}
                            >
                                <FontAwesomeIcon className={cx('control-item')} icon={faForwardStep} />
                            </div>
                        </span>
                    </HeadlessTippy>
                    <div className={cx('loop')}>
                        <FontAwesomeIcon className={cx('control-item')} icon={faRepeat} />
                    </div>
                </div>
                {/* thời gian phát nhạc */}
                <div className={cx('player-control-bottom')}>
                    <p className={cx('time-start')}>{formatTime(currentTime)}</p>
                    <input
                        type="range"
                        min={0}
                        max={time}
                        value={currentTime}
                        onChange={handleSetTime}
                        className={cx('progress-bar')}
                    />
                    <p className={cx('time-end')}>{music.time}</p>
                </div>
            </div>

            <div className={cx('player-control-right')}>
                <Tippy content={<span style={{ fontSize: '10px' }}>MV</span>}>
                    <p className={cx('control-right-item')}>
                        <i className={cx('ic-base', 'ic-mv')}></i>
                    </p>
                </Tippy>

                <Tippy content={<span style={{ fontSize: '10px' }}>Xem lời bài hát</span>}>
                    <p className={cx('control-right-item')}>
                        <i className={cx('ic-base', 'ic-karaoke')}></i>
                    </p>
                </Tippy>
                <Tippy content={<span style={{ fontSize: '10px' }}>Chế độ cửa sổ</span>}>
                    <p className={cx('control-right-item')}>
                        <i className={cx('ic-base', 'ic-restore')}></i>
                    </p>
                </Tippy>
                <div className={cx('volume')}>
                    <FontAwesomeIcon className={cx('control-right-item')} icon={faVolumeHigh} />
                    {/* <FontAwesomeIcon className={cx('control-right-item')} icon={faVolumeXmark} /> */}

                    {/* volume */}
                    <input
                        type="range"
                        min={0}
                        step={0.01}
                        max={1}
                        value={volume}
                        onChange={handleVolumeChange}
                        className={cx('volume-bar')}
                    />
                </div>
                <div className={cx('left-border')}></div>
                <Tippy content={<span style={{ fontSize: '10px' }}>Danh sách phát nhạc</span>}>
                    <p className={cx('control-right-item')}>
                        <i className={cx('ic-base', 'ic-list-music')}></i>
                    </p>
                </Tippy>
            </div>
        </div>
    );
}
