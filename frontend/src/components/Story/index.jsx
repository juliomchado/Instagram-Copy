import React from 'react'

import { Story } from './styles'
import storyTest from '../../assets/imgs/storyImg/test.jpg'

import {IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from 'react-icons/io'

export default props => {

    return (
        <Story>
            <div className="storyDiv">
                <IoIosArrowDropleftCircle style={{width: 20, height: 20, color: '#ffff' }}/>
                <div className="person-story">
                    <figure className="storyFigure">
                        <img src={storyTest} alt="Pessoa" className="storyImg" />
                    </figure>
                    <label htmlFor="img">joaopedro</label>
                </div>
                <div className="person-story">
                    <figure className="storyFigure">
                        <img src={storyTest} alt="Pessoa" className="storyImg" />
                    </figure>
                    <label htmlFor="img">joaopedro</label>
                </div>
                <div className="person-story">
                    <figure className="storyFigure">
                        <img src={storyTest} alt="Pessoa" className="storyImg" />
                    </figure>
                    <label htmlFor="img">joaopedro</label>
                </div>
                <div className="person-story">
                    <figure className="storyFigure">
                        <img src={storyTest} alt="Pessoa" className="storyImg" />
                    </figure>
                    <label htmlFor="img">joaopedro</label>
                </div>
                <div className="person-story">
                    <figure className="storyFigure">
                        <img src={storyTest} alt="Pessoa" className="storyImg" />
                    </figure>
                    <label htmlFor="img">joaopedro</label>
                </div>
                <div className="person-story">
                    <figure className="storyFigure">
                        <img src={storyTest} alt="Pessoa" className="storyImg" />
                    </figure>
                    <label htmlFor="img">joaopedro</label>
                </div>
                <div className="person-story">
                    <figure className="storyFigure">
                        <img src={storyTest} alt="Pessoa" className="storyImg" />
                    </figure>
                    <label htmlFor="img">joaopedro</label>
                </div>
                <div className="person-story">
                    <figure className="storyFigure">
                        <img src={storyTest} alt="Pessoa" className="storyImg" />
                    </figure>
                    <label htmlFor="img">joaopedro</label>
                </div>
                <div className="person-story">
                    <figure className="storyFigure">
                        <img src={storyTest} alt="Pessoa" className="storyImg" />
                    </figure>
                    <label htmlFor="img">joaopedro</label>
                </div>
                <div>
                <IoIosArrowDroprightCircle style={{width: 20, height: 20, color: '#ffff' }}/>
                
                </div>
            </div>
        </Story>
    )
}

