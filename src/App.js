import React from 'react';
import {Route} from "react-router-dom";
import UserProfileContainer from "./UI/userProfile/userProfileContainer";
import UpMenuContainer from "./UI/UpMenu/UpMenuContainer";
import LeftMenuContainer from "./UI/LeftMenu/LeftMenuContainer";
import UserFriendsContainer from "./UI/userFriends/userFriendsContainer";
import UserEventsContainer from "./UI/userEvents/userEventsContainer";
import NewsContainer from "./UI/News/NewsContainer";
import {useHistory} from "react-router-dom";
import GlobalSearchContainer from "./UI/globalSearch/globalSearchContainer";
import ShowPhotoBoxContainer from "./UI/ShowPhotoBox/ShowPhotoBoxContainer";
import {Switch, useRouteMatch} from "react-router";
import GalleryContainer from "./UI/Gallery/GalleryContainer";
import EventContainer from "./UI/Event/EventContainer";
import EventCreationContainer from "./UI/EventCreation/EventCreationContainer";
import UpMenuV2Container from "./UI/UpMenuV2/UpMenuV2Container";
import LeftMenuV2Container from "./UI/LeftMenuV2/LeftMenuV2Container";


const App = () => {
    return (
        <div className='app-wrapper'>
            <ShowPhotoBoxContainer />
            <div className="app-line1">
                <UpMenuV2Container />
            </div>
            <div className="app-line2 widthContainer">
                <LeftMenuContainer/>
                <div className="app-changing-content">
                    <Switch>
                        <Route path='/user'
                               render={ () => <UserProfileContainer />}/>
                        <Route path={`/friends/:id/:type`}
                               children={<UserFriendsContainer />} />
                        <Route exact path='/friends'
                               render={ () => <UserFriendsContainer />}/>
                        <Route exact={true} path='/events/create'
                               render={ () => <EventCreationContainer />}/>
                        <Route path='/events'
                               render={ () => <UserEventsContainer />}/>
                        <Route path='/news'
                               render={ () => <NewsContainer />}/>
                        <Route path='/globalSearch'
                               render={ () => <GlobalSearchContainer />}/>
                        <Route path='/gallery'
                               render={ () => <GalleryContainer />}/>
                        <Route path='/event'
                               render={ () => <EventContainer />}/>
                        <Route exect path='/'
                               render={ () => <UserEventsContainer />}/>
                        <Route render={() => <h1>404: page not found</h1>} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App;