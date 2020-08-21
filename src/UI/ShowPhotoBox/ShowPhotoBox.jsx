import React from 'react';
import s from './css/ShowPhotoBox.module.css';

const ShowPhotoBox = (props) => {
    return (
        <div className={s.showPhotoBox}>
            <div className={s.photoInGalleryAppearBlock}>
                <div className={s.grayFoneGallery} onClick={props.changeShowPhotoBoxStatus}>
                </div>
                <div className={s.getItIntoCenterBro}>
                    <div className={s.mainContent_photoInGalleryAppearBlock + " flex1"}>
                        <div className={s.leftPartObGalleryPostAppearing}>
                            <div className={s.mainPhotoInGalleryAppearing}>
                                <img
                                    src="https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg"
                                    alt=""
                                    className={s.mainPhotoInGalleryAppearing_img}/>
                            </div>
                            <div className={s.bottomPart_leftPartObGalleryPostAppearing + " flex1"}>
                                <h5 className={s.whatIsItTextGalleryAppearing}>
                                    Фотаздымак карыстальніка
                                </h5>
                                <ul className={s.actionWithPhotoGalleryAppearing + " flex1"}>
                                    <a href="#"
                                       className={s.link_actionWithPhotoGalleryAppearing}>Падзяліцца</a>
                                    <p className={s.link_actionWithPhotoGalleryAppearing}>Выдаліць</p>
                                    <a href="#"
                                       className={s.link_actionWithPhotoGalleryAppearing}>Адкрыць</a>
                                </ul>
                            </div>
                        </div>
                        <div className={s.rightPartOfGalleryPostAppearing}>
                            <div className={s.containerGalleryAppearingRight}>
                                <div className={s.topPart_rightPartOfGalleryPostAppearing}>
                                    <div className={s.usersPhotoInRoundGalleryAppearing + " photoCentring"}
                                         style={{backgroundImage: "url(https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg)"}}></div>
                                    <div className={s.infoBlockGalleryAppearing}>
                                        <a href="#"
                                           className={s.userNameGalleryAppearing}>Kostya Miltyer</a>
                                        <h4 className={s.dateGalleryAppearing}>13/-05/474</h4>
                                    </div>
                                </div>
                                <div className={s.mainContant_rightPartOfGalleryPostAppearing}>
                                    <div className={s.actionsWithPostBlockGalleryAppearing}>
                                        <div className={s.itemOfActionsWithPhoto + " flex1"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                 className={s.icon_itemOfActionsWithPostGalleryAppearing}>
                                                <path
                                                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                                            </svg>
                                            <h4 className={s.numberOfActionsOnItGalleryAppearing}>13</h4>
                                        </div>
                                        <div
                                            className={s.itemOfActionsWithPhoto}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                 className={s.icon_itemOfActionsWithPostGalleryAppearing}>
                                                <path
                                                    d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"></path>
                                            </svg>
                                            <h4 className={s.numberOfActionsOnItGalleryAppearing}>13</h4>
                                        </div>
                                    </div>

                                    <div className={s.commentsPartGalleryAppearing + " scrollbarGrassy"}>
                                        <div className={s.commentsBlocksPartGalleryAppearing}>
                                            <h3 className={s.postDescriptionGalleryAppearing}>
                                                Мистер джекет ор хайд. Донт вэйт, джаст чусс.
                                                <br/>
                                                Иц окей энд ит майт би зэр, би муфт.
                                            </h3>
                                            <div className={s.item_commentsBlocksPartGalleryAppearing}>
                                                <img
                                                    src="https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg"
                                                    alt="" className={s.userPhotoInRoundInCommGalleryAppearing}/>
                                                <div className={s.infoOfCommentGalleryAppearing}>
                                                    <div className={s.firstLine + " flex1"}>
                                                        <a href="#" className={s.userNameInCommGalleryAppearing}>Kostya
                                                            Milter</a>
                                                        <div className={s.helper} title="Выдаліць">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"
                                                                 className={s.icon_itemOfActionsWithCommGalleryAppearing}>
                                                                <path
                                                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <h4 className={s.usersCommTextgalleryApeearing}>
                                                        Красавчик!)) Всегда думала, что ты лох, но сегодня узнала,
                                                        что нет! Пока!))))
                                                    </h4>
                                                    <div className={s.firstLine + " flex1"}>
                                                        <div className={s.lastPoint_infoOfCommentGalleryAppearing}>
                                                            <div className={s.dateOfCommGalleryAppearing}>14 студ 2019</div>
                                                            <a href="#"
                                                               className={s.answerToUserCommGalleryAppearing}>Адказаць</a>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                             className={s.icon_itemOfActionsWithCommGalleryAppearing}>
                                                            <path
                                                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={s.item_commentsBlocksPartGalleryAppearing}>
                                                <img
                                                    src="https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg"
                                                    alt="" className={s.userPhotoInRoundInCommGalleryAppearing}/>
                                                <div className={s.infoOfCommentGalleryAppearing}>
                                                    <div className={s.firstLine + " flex1"}>
                                                        <a href="#" className={s.userNameInCommGalleryAppearing}>Kostya
                                                            Milter</a>
                                                        <div className={s.helper} title="Выдаліць">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"
                                                                 className={s.icon_itemOfActionsWithCommGalleryAppearing}>
                                                                <path
                                                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <h4 className={s.usersCommTextgalleryApeearing}>
                                                        Красавчик!)) Всегда думала, что ты лох, но сегодня узнала,
                                                        что нет! Пока!))))
                                                    </h4>
                                                    <div className={s.firstLine + " flex1"}>
                                                        <div className={s.lastPoint_infoOfCommentGalleryAppearing}>
                                                            <div className={s.dateOfCommGalleryAppearing}>14 студ 2019</div>
                                                            <a href="#"
                                                               className={s.answerToUserCommGalleryAppearing}>Адказаць</a>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                             className={s.icon_itemOfActionsWithCommGalleryAppearing}>
                                                            <path
                                                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={s.item_commentsBlocksPartGalleryAppearing}>
                                                <img
                                                    src="https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg"
                                                    alt="" className={s.userPhotoInRoundInCommGalleryAppearing}/>
                                                <div className={s.infoOfCommentGalleryAppearing}>
                                                    <div className={s.firstLine + " flex1"}>
                                                        <a href="#" className={s.userNameInCommGalleryAppearing}>Kostya
                                                            Milter</a>
                                                        <div className={s.helper} title="Выдаліць">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"
                                                                 className={s.icon_itemOfActionsWithCommGalleryAppearing}>
                                                                <path
                                                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <h4 className={s.usersCommTextgalleryApeearing}>
                                                        Красавчик!)) Всегда думала, что ты лох, но сегодня узнала,
                                                        что нет! Пока!))))
                                                    </h4>
                                                    <div className={s.firstLine + " flex1"}>
                                                        <div className={s.lastPoint_infoOfCommentGalleryAppearing}>
                                                            <div className={s.dateOfCommGalleryAppearing}>14 студ 2019</div>
                                                            <a href="#"
                                                               className={s.answerToUserCommGalleryAppearing}>Адказаць</a>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                             className={s.icon_itemOfActionsWithCommGalleryAppearing}>
                                                            <path
                                                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={s.writeYourCommentPartGaleryAppearing}>
                                            <div className={s.mainPartButtonsGalleryAppearing}>
                                                <img
                                                    src="https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg"
                                                    alt="" className={s.usersAvatarInRoundButtonsGalleryAppearing}/>
                                                <textarea className={s.inputOfButtonsGalleryAppearing}
                                                          placeholder="Напісаць каментарый..."></textarea>
                                            </div>
                                            <div className={s.otherPartButtonsGalleryAppearingBlock}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                     className={s.addPhotoIntoCommentGalleryAppearing}>
                                                    <path
                                                        d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path>
                                                </svg>
                                                <div className={s.buttons_writeYourCommentPartGaleryAppearing}>
                                                    <div className={s.dontSendCommentGalleryAppearing}>Адмена</div>
                                                    <button className={s.sendCommentGalleryAppearing}>Адаслаць</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowPhotoBox;