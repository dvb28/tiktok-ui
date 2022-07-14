/* eslint-disable jsx-a11y/alt-text */
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "../Image";
import styles from './AccountItem.module.scss';
import images from '~/accest/img'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image src={images.avatar} className={cx('avatar')}></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Đào Việt Bảo</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;