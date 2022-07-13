import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/accest/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/accest/img/265297976_1298075467280886_1663868180763984556_n.jpg';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMessage,
    faCloudArrowUp,
    faPaperPlane,
    faUser,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currrentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: '/@vietbao',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin}></FontAwesomeIcon>,
            title: 'Get coins',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default}></img>
                </div>
                <HeadlessTippy
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Accounts</h3>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </HeadlessTippy>

                <div className={cx('action')}>
                    {currrentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Send" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Message" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text> Upload </Button>
                            <Button primary> Log in </Button>
                        </>
                    )}
                    <Menu items={currrentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currrentUser ? (
                            <img src={Image} className={cx('user-avatar')} alt="Đào Việt Bảo"></img>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
