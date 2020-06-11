import React from 'react'
import { Section } from './styles'

export default props => {

    return (
        <Section>
            <div className="feed">
                {props.children}
            </div>
            <div className="personal">

            </div>
        </Section>

    )
}