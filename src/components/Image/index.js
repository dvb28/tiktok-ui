/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/accest/img';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        ></img>
    );
});

export default Image;
