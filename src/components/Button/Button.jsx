import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Button({ children, small, primary, setting, icon }) {
    const classes = cx('wrapper', {
        small,
        primary,
        children,
        setting,
        icon,
    });

    return (
        <button className={classes}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span>{children}</span>
        </button>
    );
}
