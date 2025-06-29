import classNames from 'classnames/bind';
import styles from './PopperSetting.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // Import CSS for Tippy.js
import { ReactElement } from 'react';

const cx = classNames.bind(styles);
interface childrenitem {
    firstIcon: React.ReactNode;
    title: string;
    lastIcon?: React.ReactNode;
    attribute?: string;
}
interface PopperSetting {
    children: ReactElement;
    listSetting: childrenitem[];
}
export default function PopperSetting({ children, listSetting }: PopperSetting) {
    //set class
    const selectClass = (item: childrenitem) => {
        return item.attribute ? cx('list-item-blur') : cx('list-item');
    };

    const renderResult = () => {
        return (
            <ul className={cx('setting-list')}>
                {listSetting.map((item: childrenitem, index: number) => (
                    <span key={index}>
                        <li className={selectClass(item)}>
                            <p>
                                <span className={cx('icon')}>{item.firstIcon}</span>
                                <span className={cx('title')}>{item.title}</span>
                            </p>
                            <span className={cx('last-icon')}>{item.lastIcon}</span>
                        </li>
                        {index === 1 && <div className={cx('line-seperator')}></div>}
                    </span>
                ))}
            </ul>
        );
    };

    return (
        <Tippy interactive trigger="click" placement="bottom-end" render={renderResult}>
            {children}
        </Tippy>
    );
}
