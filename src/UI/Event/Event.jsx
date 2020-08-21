import React from 'react';
import s from './css/Event.module.css';

const Event = (props) => {
    return (
        <div className={s.newEventMainCardContainer + " flex1"}>
            <div className={s.topMenu_eventMainCard}>
                <hr className="mainHr"/>
                <div className={s.leftPartOfTopMenuEventCard}>
                    <div className={s.dateInfo + " flex1"}>
                        <h4 className={s.date_like_dayOfWeek}>Панядзелак,</h4>
                        <h4 className={s.date_like_dateOfYear}>1 марта</h4>
                        <h4 className={s.date_like_Year}>2020 г.</h4>
                    </div>
                    <div className={s.eventName}>
                        <h2 className={s.eventNameText}>Патрэбна прыбраць вул.Купала. Як магчыма жыць у такім
                            "срачы"?</h2>
                    </div>
                    <div className={s.creatorBlock + " flex1"}>
                        <div className={s.mainPart_creatorBlock + " flex1"}>
                            <div className={s.creatorAvatar}/>
                            <div className={s.creatorsInfoPart + " flex1"}>
                                <h4 className={s.hostedBy_creatorsInfoPart}>Загружана
                                    карыстальнікам:</h4>
                                <h4 className={s.name_creatorsInfoPart}>Kostya Milter</h4>
                            </div>
                        </div>
                        <div className={s.buttonsBlock + " flex1"}>
                            <button
                                className={s.iWillGoToEvent + " grassyButton"}>Удзельнічаю!
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 className={s.makeEventFavoriteButton_buttonsInEventPreviewBlock}>
                                <path
                                    d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <hr className="mainHr"/>
            </div>
            <div className={s.mainPartOfPage_eventCard + " flex1"}>
                <div className={s.leftPart_eventcard}>
                    <div className={s.mainPhotoBlock + " flex1"}>
                        <div className={s.mainPhoto}/>
                    </div>
                    <div className={s.mainInfoPart + " flex1"}>
                        <div className={s.descriptionPart}>
                            <h3 className={s.H_descriptionPart}>Падрабязнасці</h3>
                            <p className={s.allText_descriptionPart}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id dapibus erat. Donec
                                eu tellus mattis, luctus turpis eget, dictum mi. Integer vulputate odio in dui
                                malesuada varius. Nullam suscipit lectus augue, eget ornare dolor viverra ac. Nam a
                                rhoncus dolor, id feugiat ex. Phasellus fringilla congue efficitur. Pellentesque
                                lobortis mauris et condimentum rhoncus. Quisque dapibus lacus vel magna finibus,
                                convallis venenatis ex condimentum. Cras et augue convallis, convallis ante
                                ultrices, cursus metus. Sed commodo eros id dolor elementum blandit. Pellentesque
                                cursus interdum libero, sit amet varius ipsum convallis sed. Maecenas sed
                                sollicitudin diam, sit amet iaculis neque. Interdum et malesuada fames ac ante ipsum
                                primis in faucibus.
                                <br/><br/>
                                Morbi dapibus dignissim purus ac faucibus. Cras eget ante est. Sed eget aliquet
                                risus, ut pharetra elit. Nullam vitae orci lectus. Quisque quis elit ultrices,
                                pretium nibh sit amet, rhoncus nulla. Aenean malesuada malesuada scelerisque.
                                Vestibulum ultrices non orci nec sagittis. Donec sed iaculis turpis, eu gravida
                                est. Vivamus et cursus sem. Cras a tortor eleifend, auctor ligula in, sagittis
                                nulla. Pellentesque ut tincidunt ipsum. Donec fringilla lacus vitae urna cursus,
                                sit amet tincidunt nisi gravida. Sed tempor tempor neque, id dapibus dolor
                                semper at.
                                <br/><br/>
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                ac turpis egestas. Praesent molestie, metus eget laoreet facilisis, diam
                                nibh feugiat nibh, nec sagittis libero augue non nisi. Suspendisse vehicula
                                enim neque, vitae rhoncus neque malesuada sed. Nulla molestie odio eros, ut
                                tincidunt mauris hendrerit in. Curabitur in finibus orci, at finibus ante.
                                Etiam vel placerat orci. In eu nisl felis. Curabitur facilisis vulputate
                                mauris. Vivamus in bibendum dolor. Fusce cursus efficitur ullamcorper. Sed
                                imperdiet quam justo, non blandit elit eleifend sit amet. Donec finibus
                                risus dui, non molestie nunc sagittis non. Maecenas condimentum dapibus leo
                                vel sollicitudin. Cras sagittis nisi vel cursus rhoncus.
                                <br/><br/>
                                Donec ut pulvinar enim. Orci varius natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus. Quisque feugiat dapibus
                                massa, pulvinar posuere augue pharetra nec. Ut vitae erat in nisl mollis
                                euismod. Duis malesuada, magna ac consectetur malesuada, tortor velit
                                accumsan risus, sit amet faucibus ipsum ligula sit amet nisi. Morbi
                                ultrices consectetur turpis eget varius. Integer non libero quis leo
                                cursus porta ultrices et est. Sed gravida iaculis mollis. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. Vestibulum tristique
                                efficitur odio, eget ornare eros tempus a. Nullam ut turpis sapien.
                                Proin in est sed enim tempor suscipit non a turpis. Vestibulum venenatis
                                diam et viverra dignissim.
                                <br/><br/>
                                Vivamus commodo purus id mi fringilla, at tempus dui porta. In nec
                                felis quis odio bibendum sollicitudin eget nec lacus. Cras fringilla
                                scelerisque massa, quis molestie ligula molestie et. Ut posuere
                                felis ut elit fermentum interdum. Interdum et malesuada fames ac
                                ante ipsum primis in faucibus. Vivamus vitae felis enim. Etiam ut
                                sapien ac arcu tincidunt egestas. Curabitur iaculis massa risus, vel
                                accumsan risus condimentum ac. Curabitur a nisi diam.
                                <br/><br/>
                                Aenean eget risus nunc. Phasellus malesuada tortor a eleifend
                                dignissim. Pellentesque commodo lobortis erat, at varius sem
                                pretium vel. In in est feugiat, laoreet tellus ac, accumsan
                                erat. Vivamus non tempor massa, at venenatis justo. Fusce ac
                                justo nec quam condimentum vestibulum a et mauris. Morbi auctor
                                nulla consequat arcu aliquam, sit amet egestas velit auctor.
                                Proin id diam in felis sodales congue. Curabitur viverra orci
                                lectus, quis blandit urna molestie elementum. Sed ullamcorper
                                scelerisque massa congue malesuada. Vivamus non metus tellus.
                                Sed aliquam eleifend magna, a pharetra velit fermentum et.
                                Phasellus non tempor odio. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos himenaeos. Cras
                                malesuada, nunc non auctor luctus, arcu sapien accumsan sem,
                                eget condimentum sapien eros et neque.
                                <br/><br/>
                                Quisque ac malesuada magna. Nam accumsan metus sit amet
                                ligula volutpat scelerisque. Sed vel tincidunt orci. Quisque
                                viverra nunc quis odio posuere, ut fermentum urna rhoncus.
                                Nunc id arcu sem. Cras viverra semper accumsan. Nulla
                                facilisi. Cras tincidunt mattis libero sit amet ornare.
                                Vestibulum malesuada velit vulputate enim faucibus, rhoncus
                                dictum arcu lobortis. In erat est, faucibus non pulvinar
                                eget, pellentesque et metus.
                            </p>
                        </div>
                        <div className={s.membersBlock + " flex1"}>
                            <div className={s.HBlock_membersBlock + " flex1"}>
                                <h4 className={s.membersH}>Удзельнікі(4):
                                </h4>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     className={s.whatIsItIcon}>
                                    <path
                                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
                                </svg>
                            </div>
                            <div className={s.membersLoad + " flex1"}>
                                <div className={s.itemMember + " flex1"}>
                                    <div className={s.memberAvatarImg}></div>
                                    <h5 className={s.memberName}>Kostya</h5>
                                    <h6 className={s.memberStatus}>Арганізатар</h6>
                                </div>
                                <div className={s.itemMember + " flex1"}>
                                    <div className={s.memberAvatarImg}/>
                                    <h5 className={s.memberName}>Настасья</h5>
                                    <h6 className={s.memberStatus}>Удзельнік</h6>
                                </div>
                                <div className={s.itemMember + " flex1"}>
                                    <div className={s.memberAvatarImg}/>
                                    <h5 className={s.memberName}>Яўген</h5>
                                    <h6 className={s.memberStatus}>Удзельнік</h6>
                                </div>
                                <div className={s.itemMember + " flex1"}>
                                    <div className={s.memberAvatarImg}/>
                                    <h5 className={s.memberName}>Яўген</h5>
                                    <h6 className={s.memberStatus}>Удзельнік</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.informationAboutEventOneMoreTimeBlock}>
                    <hr className="mainHr"/>
                    <div
                        className={s.container_informationAboutEventOneMoreTimeBlock}>
                        <div className={s.whoMadeThisEventCard + " flex1"}>
                            <div className={s.creatorAvatar}/>
                            <div className={s.creatorsInfoPart + " flex1"}>
                                <h4 className={s.name_creatorsInfoPart}>Kostya Milter</h4>
                                <h5 className={s.ecostatus_creatorsInfoPart}>Актывіст</h5>
                            </div>
                        </div>
                        <div className={s.timeInfoEvent + " flex1 "}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 className={s.clock_timeInfoEvent}>
                                <path
                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                            </svg>
                            <div className={s.timeText + " flex1"}>
                                <h5 className={s.timeDayText_timeInfoEvent}>
                                    среда, 4 марта 2020 г.
                                </h5>
                                <h5 className={s.timeText_timeInfoEvent}>
                                    19:00
                                </h5>
                            </div>
                        </div>
                        <div className={s.locationInfoEvent + " flex1"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                 className={s.icon_eventMainCard}>
                                <path
                                    d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                            </svg>
                            <h5 className={s.locationText_locationInfoEvent + " " + s.timeText}>
                                вул. Карла Маркса, дом 14, кватэра 35
                            </h5>
                        </div>
                        <div className={s.buttonsAndHrefs + " flex1"}>
                            <button
                                className={s.iWillGoToEvent + " grassyButton"}>Удзельнічаю!
                            </button>
                            <h4 className={s.writeToAutherEvent}>Напісаць</h4>
                        </div>
                    </div>
                    <hr className="mainHr"/>
                </div>
            </div>
        </div>
    )
}


export default Event;