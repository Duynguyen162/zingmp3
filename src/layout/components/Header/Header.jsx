import React from 'react';
import { useState } from 'react';
import Button from '../../../components/Button/Button';
import avatar from '../../../assets/img/avatar.png';
import { DownloadIcon } from '../../../assets/icon/icons.jsx';
import PopperSetting from '../../../components/PopperSetting/PopperSetting.jsx';
import { listSetting } from '../../../assets/listHeader.jsx';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass, faGear } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // CSS mặc định
import Popper from '../../../components/PopperSearch/PopperSearch.jsx';

const cx = classNames.bind(styles);

export default function Header({ className }) {
    const [isOpenSuggest, setIsOpenSuggest] = useState(false);
    return (
        <div className={className}>
            <div className={cx('column-1')}>
                <button className={cx('next')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className={cx('previous')}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>

                <HeadlessTippy
                    visible={isOpenSuggest}
                    interactive
                    offset={[0, 0]}
                    onClickOutside={() => setIsOpenSuggest(false)} // Đóng khi click ra ngoài
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs} onClick={() => setIsOpenSuggest(false)}>
                            <Popper />
                        </div>
                    )}
                >
                    <div className={cx('input-wrapper')}>
                        <input
                            onFocus={() => setIsOpenSuggest(true)} // Mở gợi ý khi focus vào input
                            className={cx('seach-input', { highlight: isOpenSuggest })}
                            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                        />
                        <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                    </div>
                </HeadlessTippy>
            </div>

            <div className={cx('column-2')}>
                <Button primary>
                    <a>Nâng cấp tài khoản</a>
                </Button>

                <Button icon={<DownloadIcon />}>
                    <a>Tải bản Windows</a>
                </Button>

                <div className={cx('wrapper-setting')}>
                    <PopperSetting listSetting={listSetting}>
                        <Tippy content="Cài đặt">
                            <span className={cx('btn-setting')}>
                                <Button setting>
                                    <FontAwesomeIcon icon={faGear} />
                                </Button>
                            </span>
                        </Tippy>
                    </PopperSetting>
                </div>

                <div className={cx('avatar')}>
                    <img src={avatar} alt="Avatar" />
                </div>
            </div>
        </div>
    );
}
