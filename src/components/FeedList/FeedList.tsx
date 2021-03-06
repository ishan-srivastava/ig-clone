import React, { useState } from "react";
import "./FeedList.scss";
import FeedItem from "../FeedItem/FeedItem";
import Masonry from "react-masonry-css";
import { UserModel } from "../../models/user.model";
import { useObservable } from "rxjs-hooks";
import { LoggedInUserStore } from "../../store/logged-in-user/logged-in-user.store";
import { switchMap } from "rxjs/operators";
import { PostsManager } from "../../managers/posts.manager";
import { PostsStore } from "../../store/posts/posts.store";
import { PostModel } from "../../models/post.model";
import { LoggedInUserManager } from "../../managers/logged-in-user.manager";
import { Layer } from "grommet";
import FeedItemDetail from "../FeedItemDetail/FeedItemDetail";

const FeedList: React.FC = () => {
    function shuffle(a: any[]) {
        if (!a?.length) {
            return a;
        }
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


    const [feedDetail, setFeedDetail] = useState<number>(0);
    const loggedInUserManager = new LoggedInUserManager(LoggedInUserStore.getInstance());
    const postsManager = new PostsManager(PostsStore.getInstance());

    const feeds: PostModel[] = useObservable(() => {
        return loggedInUserManager.getLoggedInUser()
          .pipe(switchMap((loggedInUser: UserModel) => {
              return postsManager.getFeedOfUser(loggedInUser.id);
          }));
    }) as PostModel[];

    return <div className="feed-list w-100 overflow-y-auto">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
            {shuffle(feeds)
              ?.map((feed, index) => {
                  return <FeedItem feedItem={feed} key={index} onClick={setFeedDetail}/>;
              })}
        </Masonry>
        {feedDetail ? <Layer
          onEsc={() => setFeedDetail(0)}
          onClickOutside={() => setFeedDetail(0)}
        >
            <FeedItemDetail postId={feedDetail}/>
        </Layer> : <></>}
    </div>;
};

export default FeedList;
