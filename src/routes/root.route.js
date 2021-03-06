import {compose, mount, redirect, route, withView} from "navi";
import {View} from "react-navi";
import React from 'react'
import Dashboard from "../components/Dashboard/Dashboard";
import FeedBoard from "../components/FeedBoard/FeedBoard";
import Explore from "../components/Explore/Explore";
import Profile from "../components/Profile/Profile";
import {getDummyUser} from "../mock-generators/user.generator";


export default compose(
    withView(request => {
            return <Dashboard>
                <View/>
            </Dashboard>
        }
    ),

    mount({
        "/": redirect("/feed"),
        "/feed": route({
            view: <FeedBoard/>,
        }),
        "/explore": route({
            view: <Explore/>,
        }),
        "/profile": route({
            view: <Profile
                // TODO How to pass params here?
                user={getDummyUser()}
                postCount={3442}
                followerCount={404920}
                followingCount={2}
                following={true}
            />,
        }),
    })
);

