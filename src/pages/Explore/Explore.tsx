import React from 'react';
import { useState } from 'react';
import { listMusic } from '~/assets/dataMusic';
import Media from '~/components/Media/Media';
import List from './List';
import ListAutoScroll from './ListAutoScroll';
import { listSummer } from '~/assets/listExplore';
import { listCard, listTop100, suggestPlaylist, hotMusic, albumHot, partner } from '~/assets/listExplore';

import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
const loopAlbum = [...albumHot, ...albumHot];
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
            {/* //gợi ý bài hát                    */}
            <div className={cx('suggest-music')}>
                <h3>Gợi Ý Bài Hát</h3>
                <div className={cx('list-music')}>
                    {listMusic.map((item) => (
                        <div key={item.id} className={cx('wrapper-item')}>
                            <Media className={cx('music-item')} music={item} hidden={false} />
                            <div className={cx('hover-item')}>
                                <FontAwesomeIcon className={cx('hover-item-heart')} icon={faHeart} />
                                <FontAwesomeIcon className={cx('hover-item-ellipsis')} icon={faEllipsis} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={cx('list')}>
                <h3>Giai Điệu Đón Hè</h3>
                <List list={listSummer} />
            </div>
            <div className={cx('list')}>
                <h3>Top 100</h3>
                <List list={listTop100} />
            </div>

            <div className={cx('list')}>
                <h3>Gợi Ý Playlist</h3>
                <List list={suggestPlaylist} />
            </div>
            <div className={cx('list')}>
                <h3>Nhạc Hot Thịnh Hành</h3>
                <List list={hotMusic} />
            </div>

            <div className={cx('photo-card')}>
                <div>
                    <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg" alt="" />
                </div>
                <div>
                    <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg" alt="" />
                </div>
                <div>
                    <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg" alt="" />
                </div>
            </div>

            <div className={cx('list')}>
                <h3>Album Hot</h3>
                {/* tách thành 1 component riêng để không re-render toàn bộ */}
                <ListAutoScroll list={loopAlbum} />
            </div>
            <div className={cx('partner')}>
                <h3>Đối Tác Âm Nhạc</h3>
                <div className={cx('partner-list')}>
                    {partner.map((item) => (
                        <div key={item.id} className={cx('partner-item')}>
                            <img className={cx('partner-img')} src={item.img} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={cx('line')}></div>

            <div className={cx('footer')}>
                <img
                    className={cx('footer-logo')}
                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
                    alt=""
                />

                <div className={cx('footer-item', 'mid')}>
                    <div className={cx('footer-tiltle')}>Doanh nghiệp quản lý</div>
                    <div className={cx('footer-content')}>
                        Công ty Cổ phần VNG. GCN ĐKDN: 0303490096 do sở KH & ĐT TP.HCM cấp ngày 9/9/2004.
                        <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, TPHCM.</p>
                    </div>

                    <div className={cx('footer-tiltle', 'people')}>Người chịu trách nghiệm nội dung</div>
                    <div className={cx('footer-content')}>Ông Lê Hồng Minh</div>
                </div>

                <div className={cx('footer-item')}>
                    <div className={cx('footer-tiltle')}>Thông tin dịch vụ</div>
                    <div className={cx('footer-content')}>
                        GPMXH: 157/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 24/4/2019.
                        <div className={cx('contact')}>
                            <p>CSKH/Liên hệ qua Zalo: 0934118443 </p>
                            <p>Email: zingmp3@vng.com.vn.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
