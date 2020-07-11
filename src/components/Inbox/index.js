import React from 'react'; 
import Header from './Header'
import InboxBody from './InboxBody'
import {InboxContainer} from './styled'

const Inbox = ({data}) => {
    return (
        <InboxContainer>
            <Header />   
            <InboxBody data={data} /> 
        </InboxContainer>
    )
}


export default Inbox; 