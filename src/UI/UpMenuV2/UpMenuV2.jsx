import React from 'react';
import s from './css/UpMenuV2.module.css';
import Avatar from "../common/RoundedAvatar/RoundedAvatar";

const UpMenuV2 = (props) => {
    return (
        <div className={s.UpMenuContainer}>
            <div className={s.UpMenuContent + ' widthContainer flex1'}>
                <div className={s.logoBox + " flex2"}>
                    <h3 className={s.logoText}>Grassy</h3>
                </div>
                <div className={s.centralLocationPart + " flex2"}>
                    <div className={s.locationBox + " flex2"}>
                        <h5 className={s.locationText}>Мерапрыемствы</h5>
                        <div className={s.locationCircle}/>
                        <h5 className={s.moreLocationText}>Іўе</h5>
                    </div>
                </div>
                <div className={s.navigationPart}>
                    <div className={s.navigationBox}>
                        <div className={s.userAvatarBox}>
                            <Avatar user={"me"} rounded={true} />
                        </div>
                        <div className={s.navigationCircleItem + " flex2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={s.navigationItem}>
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67
                                0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33
                                32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>
                        </div>
                        <div className={s.navigationCircleItem + " flex2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={s.navigationItem}>
                                <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97
                            64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98
                            14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4
                            12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                            </svg>
                        </div>
                        <div className={s.navigationCircleItem + " flex2 " + s.bars}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={s.navigationItem}>
                                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837
                                7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0
                                8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0
                                8.837 7.163 16 16 16z"></path>
                            </svg>
                        </div>
                        <div className={s.navigationCircleItem + " flex2 " + s.moreOptionsForDesctops}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                                 className={s.navigationItem}>
                                <path
                                    d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4
                                96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2
                                9.4-24.4 9.4-33.8 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UpMenuV2;