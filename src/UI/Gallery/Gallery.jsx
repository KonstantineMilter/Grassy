import React from 'react';
import s from './css/Gallery.module.css';
import CentringPhoto from "../common/CentringPhoto/CentringPhoto";
import Avatar from "../common/RoundedAvatar/RoundedAvatar";


const Gallery = (props) => {
    return (
        <div className={s.galleryContainer}>
            <div id={s.galleryAll}>
                <div className={s.firstLineMenuUsersGallery}>
                    <div className={s.container_firstLineMenuUsersGallery + " flex1"}>
                        <div className={s.leftPart_firstLineMenuUsersGallery + " flex1"}>
                            <div className={s.avatarBox}>
                                <Avatar user="me" rounded={true} />
                            </div>
                            <div className={s.infoUserPartGalleryAll}>
                                <h3 className={s.userNameGalleryAl}>Kostya Milter</h3>
                                <h5 className={s.userStatusGalleryAll}>lox po zhizni</h5>
                            </div>
                        </div>
                        <div className={s.rightPart_firstLineMenuUsersGallery}>
                            <button type="button" className={s.sendMessGalleryAll + " grassyButton"}>Дабавіць</button>
                        </div>
                    </div>
                    <hr className="mainHr"/>
                </div>
                <div className={s.mainContentGalleryAll}>
                    <div className={s.headersBlockGallery + " flex1"}>
                        <h4 className={s.blockNameGalleryAll} >Усе фотаздымкі(13):</h4>
                    </div>
                    <div className={s.mainPhotoContentGrassyAll + " flex1"} >
                        <div className={s.container_mainPhotoContentGrassyAll + " flex1"} >
                            <div className={s.photoItemOfainPhotoBlockGalleryAll} >
                                <CentringPhoto src={"https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg"}
                                               rounded={false}/>
                            </div>
                            <div className={s.photoItemOfainPhotoBlockGalleryAll} >
                                <CentringPhoto src={"https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg"}
                                               rounded={false}/>
                            </div>
                            <div className={s.photoItemOfainPhotoBlockGalleryAll} >
                                <CentringPhoto src={"https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg"}
                                               rounded={false}/>
                            </div>
                            <div className={s.photoItemOfainPhotoBlockGalleryAll} >
                                <CentringPhoto src={"https://sun9-26.userapi.com/c855132/v855132565/4455a/jNKu6dXGAI0.jpg"}
                                               rounded={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

class UsersGalleryBlockContainer extends React.Component {
    render() {
        return <UsersGalleryBlock  {...this.props} />
    }
}
const UsersGalleryBlock = (props) => {
    return (
        <div className={s.usersGalleryBlock}>
            <hr className="mainHr"/>
        </div>
    )
}


export default Gallery;