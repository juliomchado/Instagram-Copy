import React from 'react'

import {Main} from './styles'

import SectionDiv from '../../components/SectionFeed'
import Header from '../../components/Header'

import Story from '../../components/Story'
import Posts from '../../components/Posts'

export default props => {

    return (
        <React.Fragment>
            <Header />
            <Main>
                <SectionDiv>
                    <Story/>
                    <Posts/>
                </SectionDiv>
            </Main>
        </React.Fragment>
    )
}