import { useState } from 'react';
import Button from '../../../components/Button/Button';
import avatar from '../../../assets/img/avatar.png';
import { DownloadIcon } from '../../../assets/icon/icons';
import PopperSetting from '../../../components/PopperSetting/PopperSetting';
import { listSetting } from '../../../assets/listHeader';
import Popper from '../../../components/PopperSearch/PopperSearch';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faGear } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // CSS mặc định

const cx = classNames.bind(styles);

interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    const [isOpenSuggest, setIsOpenSuggest] = useState(false);

    return (
        <div className={className}>
            <div className={cx('column-1')}>
                <HeadlessTippy
                    visible={isOpenSuggest}
                    interactive
                    offset={[0, 0]}
                    onClickOutside={() => setIsOpenSuggest(false)} // Đóng khi click ra ngoài
                    render={(attrs) => (
                        <div tabIndex={-1} {...attrs} onClick={() => setIsOpenSuggest(false)}>
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
                    <span>Nâng cấp tài khoản</span>
                </Button>

                <Button icon={<DownloadIcon />}>
                    <span>Tải bản Windows</span>
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
