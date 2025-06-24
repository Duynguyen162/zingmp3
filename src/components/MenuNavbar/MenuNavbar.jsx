import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MenuNavbar.module.scss';

const cx = classNames.bind(styles);

export default function MenuNavbar({ listItemSidebar }) {
    const fixedItems = listItemSidebar.filter((item) => item.id < 5);
    const scrollItems = listItemSidebar.filter((item) => item.id >= 5);

    return (
        <div className={cx('navbar-menu')}>
            {/* Các item không cuộn */}
            {fixedItems.map((item) => (
                <div key={item.id}>
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                            cx('navbar-menu-item', {
                                'navbar-menu-item-focus': isActive,
                            })
                        }
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className={cx('first-icon')}>{item.icon}</div>
                            <div className={cx('title')}>{item.title}</div>
                        </div>
                        <div className={cx('last-icon')}>{item.iconEnd}</div>
                    </NavLink>
                    {item.id === 4 && <div className={cx('line')}></div>}
                </div>
            ))}

            {/* Các item có cuộn */}
            <div className={cx('scrollable')}>
                {scrollItems.map((item) => (
                    <div key={item.id}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                cx('navbar-menu-item', {
                                    'navbar-menu-item-focus': isActive && item.id < 8,
                                })
                            }
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div className={cx('first-icon')}>{item.icon}</div>
                                <div className={cx('title')}>{item.title}</div>
                            </div>
                            <div className={cx('last-icon')}>{item.iconEnd}</div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}
