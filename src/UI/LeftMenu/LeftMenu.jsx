import React from 'react';
import s from './css/LeftMenu.module.css';
import {NavLink} from "react-router-dom";

const LeftMenu = (props) => {
    return (
        <div className={s.LeftMenuContainer}>
            <div className={s.otherLeftMenuContainer}>
                <NavLink to={'/user/1'} activeClassName={s.active}>
                    <div className={s.leftMenuItem + ' flex1'}>
                        <div className={s.leftPartOfMenuItem + ' flex1'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={s.iconOfLeftMenu}>
                                <path
                                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                            </svg>
                            <h4 className={s.menuPointNavlink}>Мая старонка</h4>
                        </div>
                        <div className={s.rightPartOfLeftMenu + ' flex2'}>
                            <h3 className={s.navLinkNotifText}>
                                1
                            </h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={'/news'} activeClassName={s.active}>
                    <div className={s.leftMenuItem + ' flex1'}>
                        <div className={s.leftPartOfMenuItem + ' flex1'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={s.iconOfLeftMenu}>
                                <path
                                    d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path>
                            </svg>
                            <h4 className={s.menuPointNavlink}>Меркаванні</h4>
                        </div>
                        <div className={s.rightPartOfLeftMenu + ' flex2'}>
                            <h3 className={s.navLinkNotifText}>
                                1
                            </h3>
                        </div>
                    </div>
                </NavLink>
                {/*<NavLink to={'/friends/1/all'} activeClassName={s.active}>*/}
                {/*    <div className={s.leftMenuItem + ' flex1'}>*/}
                {/*        <div className={s.leftPartOfMenuItem + ' flex1'}>*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className={s.iconOfLeftMenu}>*/}
                {/*                <path*/}
                {/*                    d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path>*/}
                {/*            </svg>*/}
                {/*            <h4 to={'/news'} className={s.menuPointNavlink}>Мае сябры</h4>*/}
                {/*        </div>*/}
                {/*        <div className={s.rightPartOfLeftMenu + ' flex2'}>*/}
                {/*            <h3 className={s.navLinkNotifText}>*/}
                {/*                1*/}
                {/*            </h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</NavLink>*/}
                <NavLink to={'/events/1'} activeClassName={s.active}>
                    <div className={s.leftMenuItem + ' flex1'}>
                        <div className={s.leftPartOfMenuItem + ' flex1'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={s.iconOfLeftMenu}>
                                <path
                                    d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                            </svg>
                            <h4 to={'/news'} className={s.menuPointNavlink}>Мерапрыемствы</h4>
                        </div>
                        <div className={s.rightPartOfLeftMenu + ' flex2'}>
                            <h3 className={s.navLinkNotifText}>
                                1
                            </h3>
                        </div>
                    </div>
                </NavLink>
                {/*<NavLink to={'/about'} activeClassName={s.active}>*/}
                {/*    <div className={s.leftMenuItem + ' flex1'}>*/}
                {/*        <div className={s.leftPartOfMenuItem + ' flex1'}>*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={s.iconOfLeftMenu}>*/}
                {/*                <path*/}
                {/*                    d="M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"></path>*/}
                {/*            </svg>*/}
                {/*            <h4 to={'/news'} className={s.menuPointNavlink}>Аб праекце</h4>*/}
                {/*        </div>*/}
                {/*        <div className={s.rightPartOfLeftMenu + ' flex2'}>*/}
                {/*            <h3 className={s.navLinkNotifText}>*/}
                {/*                1*/}
                {/*            </h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</NavLink>*/}
            </div>
        </div>
    )
}

export default LeftMenu;