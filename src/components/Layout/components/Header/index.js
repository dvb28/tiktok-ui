import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/accest/img';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faSpinner, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default}></img>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false}></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cx('action')}>

                </div>
            </div>
        </header>
    );
}

export default Header;
