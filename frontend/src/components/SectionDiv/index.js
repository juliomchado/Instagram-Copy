import React from 'react'
import { Section } from './styles'

import Story from '../Story'
import Posts from '../Posts'


export default props => {

    return (
        <Section>
            <div className="feed">
                <Story />
                <Posts/>
            </div>
            <div className="personal">

            </div>
        </Section>

    )
}