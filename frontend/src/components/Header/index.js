import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from './styles'

import logoInsta from '../../assets/imgs/logo/logoInsta.png'
import { FiInstagram, FiUser } from 'react-icons/fi'

import { ReactComponent as Explore } from '../../assets/imgs/icons/Explore.svg'
import { ReactComponent as Inbox } from '../../assets/imgs/icons/Inbox.svg'
import { FaSearch } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'

export default props => {

    const [inputContent, setInputContent] = useState({ text: '', focus: false })

    function verifySearch() {
        inputContent.focus ? setInputContent({ ...setInputContent, focus: false }) : setInputContent({ ...setInputContent, focus: true })
        console.log(inputContent)
    }


    return (

        <Header>
            <div className="content">
                <div className="logo-div">
                    <FiInstagram style={{ width: 26, height: 26, color: '#262626' }} className="insta-icon" />
                    <hr />
                    <Link to="/">
                        <img src={logoInsta} alt="Instagram" className="logo" />
                    </Link>
                </div>
                <div className="input-div">
                    <FaSearch className={inputContent.focus ? 'search-active' : 'search-icon'} />
                    <input type="text" placeholder="Pesquisar"
                        value={inputContent.text}
                        onChange={e => setInputContent({ text: e.target.value, focus: true })}
                        onFocus={verifySearch}
                        onBlur={verifySearch} />
                </div>
                <div className="icons-div">
                    <Inbox style={{ width: 24, height: 24, cursor: 'pointer' }} />
                    <Explore style={{ width: 24, height: 24, cursor: 'pointer' }} />
                    <BsHeart style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626'}} />
                    <FiUser style={{ width: 24, height: 24, cursor: 'pointer', color: '#262626'}} />
                </div>
            </div>
        </Header>

    )
}