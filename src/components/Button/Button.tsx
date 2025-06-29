import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ButtonProps {
    children: any;
    small?: boolean;
    primary?: boolean;
    setting?: boolean;
    icon?: any;
    className?: string;
}

export default function Button({ children, small, primary, setting, icon, className }: ButtonProps) {
    const classes = cx(
        'wrapper',
        {
            small,
            primary,
            setting,
            icon,
        },
        className,
    );

    return (
        <button className={classes}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span>{children}</span>
        </button>
    );
}
