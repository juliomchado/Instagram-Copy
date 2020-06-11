import React from 'react'
import { Link } from 'react-router-dom'

import { Section } from './styles'
import storyTest from '../../assets/imgs/storyImg/test.jpg'

export default props => {

    return (
        <Section>
            <div className="feed">
                {props.children}
            </div>
            <div className="personal">
                <div className="userInfos">
                    <figure>
                        <img src={storyTest} alt="Pessoa" className="personal-Img" />
                    </figure>
                    <div className="personal-infos">
                        <label htmlFor="img" className="instaName">joaopedro</label>
                        <label htmlFor="img" className="userName">Joao Pedro</label>
                    </div>
                </div>
                <div className="suggestionDiv">
                    <div className="label">
                        <label>Sugestões para você</label>
                        <Link className="label-link">Ver Tudo</Link>
                    </div>
                    <div className="sugesstionUsers">
                        <div className="users">
                            <Link>
                                <img src={storyTest} alt="Pessoa" className="suggestionImg" />
                            </Link>
                            <div className="suggestion-names">
                                <Link className="instaName">name_test</Link>
                                <label htmlFor="users" className="suggestion-label">Novo no instagram</label>
                            </div>
                                <button>Seguir</button>
                        </div>
                        <div className="users">
                            <Link>
                                <img src={storyTest} alt="Pessoa" className="suggestionImg" />
                            </Link>
                            <div className="suggestion-names">
                                <Link className="instaName">name_test</Link>
                                <label htmlFor="users" className="suggestion-label">Sugestões para você</label>
                            </div>
                                <button>Seguir</button>
                        </div>
                        <div className="users">
                            <Link>
                                <img src={storyTest} alt="Pessoa" className="suggestionImg" />
                            </Link>
                            <div className="suggestion-names">
                                <Link className="instaName">name_test</Link>
                                <label htmlFor="users" className="suggestion-label">Novo no instagram</label>
                            </div>
                                <button>Seguir</button>
                        </div>
                        <div className="users">
                            <Link>
                                <img src={storyTest} alt="Pessoa" className="suggestionImg" />
                            </Link>
                            <div className="suggestion-names">
                                <Link className="instaName">name_test</Link>
                                <label htmlFor="users" className="suggestion-label">Novo no instagram</label>
                            </div>
                                <button>Seguir</button>
                        </div>
                        <div className="users">
                            <Link>
                                <img src={storyTest} alt="Pessoa" className="suggestionImg" />
                            </Link>
                            <div className="suggestion-names">
                                <Link className="instaName">name_test</Link>
                                <label htmlFor="users" className="suggestion-label">Sugestões para você</label>
                            </div>
                                <button>Seguir</button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

    )
}