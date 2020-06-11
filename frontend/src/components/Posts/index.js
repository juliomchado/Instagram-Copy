import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Posts } from './styled'

import storyTest from '../../assets/imgs/storyImg/test.jpg'
import FeedImg from '../../assets/imgs/feedImg/feed.jpg'

import { AiOutlineHeart } from 'react-icons/ai'
import { ReactComponent as Inbox } from '../../assets/imgs/icons/Inbox.svg'
import { ReactComponent as Comments } from '../../assets/imgs/icons/Comments.svg'
import { ReactComponent as Flag } from '../../assets/imgs/icons/Flag.svg'


export default props => {

    const [input, setInput] = useState()

    const CssClass = input && input !== ' ' ? 'buttonActive' : 'buttonDesactive'
    const buttonActiveOrNo = input && input !== ' ' ? false : true

    return (
        <React.Fragment>
            <Posts>
                <header className="header-post">
                    <Link to="/" className="user-post">
                        <img src={storyTest} alt="Pessoa" className="feedPhoto" />
                    </Link>
                    <div >
                        <Link to="/" className="userName">joaopedro</Link>
                        <span>...</span>
                    </div>
                </header>
                <figure>
                    <img src={FeedImg} alt="Pessoa" className="feedImg" />
                </figure>
                <section>
                    <div className="icons-post">
                        <AiOutlineHeart style={{ width: 25, height: 25, cursor: 'pointer', color: '#262626', marginRight: 10 }} className="heart" />
                        <Comments style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626', marginRight: 10 }} />
                        <Inbox style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626' }} />
                        <Flag style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626' }} className="flag-ico" />
                    </div>
                    <Link className="likes">239812 curtidas</Link>
                    <div className="textDiv">
                        <Link to="/" className="userName">joaopedro</Link>
                        <p className="text" >dsjkdasd adskjasdjhkad daskhjdasjkhda s dkajshdjkas</p>
                    </div>
                    <div className="qnt-commentsDiv">
                        <Link className="qnt-comments">Ver todos os 294 comentários</Link>
                    </div>
                    <div className="commentDiv">
                        <Link className="userName">lucas</Link>
                        <p className="text">Legaal</p>
                    </div>
                    <div className="commentDiv">
                        <Link className="userName">joaozinho</Link>
                        <p className="text">Atitude é o primeiro passo pra rejeição, e não importa oq vc faça, sempre vai ser um não</p>
                    </div>
                    <Link>
                        <time className="time-post">
                            HÁ 5 MINUTOS
                    </time>
                    </Link>
                </section>
                <form className="post-divInput">
                    <input type="text" placeholder="Adicione um comentário..." value={input} onChange={e => setInput(e.target.value)} />
                    <button className={CssClass} disabled={buttonActiveOrNo} onClick={e => e.preventDefault()}>Publicar</button>
                </form>
            </Posts>
            <Posts>
                <header className="header-post">
                    <Link to="/" className="user-post">
                        <img src={storyTest} alt="Pessoa" className="feedPhoto" />
                    </Link>
                    <div >
                        <Link to="/" className="userName">joaopedro</Link>
                        <span>...</span>
                    </div>
                </header>
                <figure>
                    <img src={FeedImg} alt="Pessoa" className="feedImg" />
                </figure>
                <section>
                    <div className="icons-post">
                        <AiOutlineHeart style={{ width: 25, height: 25, cursor: 'pointer', color: '#262626', marginRight: 10 }} className="heart" />
                        <Comments style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626', marginRight: 10 }} />
                        <Inbox style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626' }} />
                        <Flag style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626' }} className="flag-ico" />
                    </div>
                    <Link className="likes">239812 curtidas</Link>
                    <div className="textDiv">
                        <Link to="/" className="userName">joaopedro</Link>
                        <p className="text" >dsjkdasd adskjasdjhkad daskhjdasjkhda s dkajshdjkas</p>
                    </div>
                    <div className="qnt-commentsDiv">
                        <Link className="qnt-comments">Ver todos os 294 comentários</Link>
                    </div>
                    <div className="commentDiv">
                        <Link className="userName">lucas</Link>
                        <p className="text">Legaal </p>
                    </div>
                    <div className="commentDiv">
                        <Link className="userName">joaozinho</Link>
                        <p className="text">Atitude é o primeiro passo pra rejeição, e não importa oq vc faça, sempre vai ser um não</p>
                    </div>
                    <Link>
                        <time className="time-post">
                            HÁ 5 MINUTOS
                    </time>
                    </Link>
                </section>
                <form className="post-divInput">
                    <input type="text" placeholder="Adicione um comentário..." value={input} onChange={e => setInput(e.target.value)} />
                    <button className={input && input !== ' ' ? 'buttonActive' : 'buttonDesactive'} onClick={e => e.preventDefault()}>Publicar</button>
                </form>
            </Posts>
        </React.Fragment>

    )
}

