import React from 'react'

import { Link } from 'react-router-dom'

import { Posts } from './styled'

import storyTest from '../../assets/imgs/storyImg/test.jpg'
import FeedImg from '../../assets/imgs/feedImg/feed.jpg'

import { AiOutlineHeart } from 'react-icons/ai'
import { ReactComponent as Inbox } from '../../assets/imgs/icons/Inbox.svg'
import { ReactComponent as Comments } from '../../assets/imgs/icons/Comments.svg'
import { ReactComponent as Flag } from '../../assets/imgs/icons/Flag.svg'


export default props => {

    return (
        <Posts>
            <header className="header-post">
                <Link to="/" className="user-post">
                    <img src={storyTest} alt="Pessoa" className="feedPhoto" />
                </Link>
                <div >
                    <Link to="/" className="userName">João Pedro</Link>
                    <span>...</span>
                </div>
            </header>
            <figure>
                <img src={FeedImg} alt="Pessoa" className="feedImg" />
            </figure>
            <section>
                <AiOutlineHeart style={{ width: 25, height: 25, cursor: 'pointer', color: '#262626', marginRight: 10 }} className="heart" />
                <Comments style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626', marginRight: 10 }} />
                <Inbox style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626' }} />
                <Flag style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626'}} className="flag-ico" />
            </section>
        </Posts>

    )
}

