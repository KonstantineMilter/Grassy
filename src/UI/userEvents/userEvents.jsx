import React from 'react';
import s from './css/userEvents.module.css';
import CentringPhoto from "../common/CentringPhoto/CentringPhoto";
import {Link} from "react-router-dom";

const UserEvents = (props) => {
    return (
        <div className={s.userEventsContainer}>
            <div className={s.leftPartEvents}>
                <div className={s.searchCreateMenu}>
                    <hr className="mainHr"/>
                        <div className={s.container_searchCreateMenu + " flex1"}>
                            <div className={s.leftPart_searchCreateMenu + " flex1"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     className={s.searchIconEvents}>
                                    <path
                                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                                <input type="text" className={s.searchForEventsInput + " grassyInput"} placeholder="Пошук мерапрыемстваў"/>
                            </div>
                            <Link to={"/events/create"} className={s.createOwnEventLink}>
                                <button className={s.createOwnEvent}>Стварыць сваё</button>
                            </Link>
                        </div>
                    <hr className="mainHr"/>
                </div>
                <div className={s.mainContentEvents}>
                    <div id={s.helpereinContainerEvents}>
                        <div className={s.item_mainContentEvents}>
                            <hr className="mainHr"/>
                                <div className={s.containerItemEvents + " flex1"}>
                                    <div className={s.mainPhotoItemEventsItems + " flex1"}>
                                        <CentringPhoto src={"https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg"} rounded={false}/>
                                    </div>
                                    <div className={s.infoPartEventItem}>
                                        <div className={s.firstlineBlockEvents + " flex1"}>
                                            <a href="#" className={s.userName_infoPartEventItem}>Kostya Milter</a>
                                            <h3 className={s.dateAndTimeOfCreation}>| Заўтра ў 10:00</h3>
                                        </div>
                                        <h2 className={s.mainTextOfEventsItem}>
                                            Патрэбна прыбраць вул.Купала. Як магчыма жыць у такім "срачы"?
                                        </h2>
                                        <div className={s.buttonsInEventPreviewBlock + " flex1"}>
                                            <Link to={"/event/1"} className={s.willGoDuttonBox}>
                                                <button type="button" className={s.iWillGoButton_buttonsInEventPreviewBlock}>
                                                    Інфармацыя
                                                </button>
                                            </Link>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                 className={s.makeEventFavoriteButton_buttonsInEventPreviewBlock}>
                                                <path
                                                    d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194
                                                    150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5
                                                    26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4
                                                    46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7
                                                    138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2
                                                    126 139 20.2-100.6 98z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            <hr className="mainHr"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.rightPartEvents}>
                <div className={s.rightMenuEvents}>
                    <hr className="mainHr"/>
                        <div className={s.container_rightMenuEvents}>
                            <div className={s.item_rightMenuEvents}>
                                <h3 className={s.textOfRightMenuEvents}>Усе мерапрыемства</h3>
                            </div>
                            <div className={s.item_rightMenuEvents}>
                                <h3 className={s.textOfRightMenuEvents}>Я удзельнічаю</h3>
                            </div>
                            <div className={s.item_rightMenuEvents}>
                                <h3 className={s.textOfRightMenuEvents}>Сахранённыя</h3>
                            </div>
                        </div>
                    <hr className="mainHr"/>
                </div>
            </div>
        </div>
    )
}


export default UserEvents;