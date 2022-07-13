import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';
const cx = classNames.bind(styles);

function Button({ to, href, primary = false, outline = false, text = false, disabled, rounded, small, large, iconLeft, iconRight, onClick, className, children, ...passProps }) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // Remove when button disable
    if(disabled) {
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        iconLeft,
        iconRight,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    );
}

export default Button;
