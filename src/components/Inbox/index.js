import React, {useEffect, useState} from 'react'; 
import Header from './Header'
import InboxBody from './InboxBody'
import {InboxContainer} from './styled'

import {firebaseFunctions} from '../../utils';

const Inbox = ({data, history}) => {
    const [lastMessages, setLastMessages] = useState([]);
    console.log("history >>>>>>>>>", history.location);

    useEffect(() => {
        let coachId = history.location.state.coachId;
        firebaseFunctions.getLastMessages(coachId).then(lastMessagesArr => {
            lastMessagesArr = lastMessagesArr.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
            setLastMessages(lastMessagesArr)
        });
    }, []);

    function onLastMessagePressed(path){
        history.push('chat', {
            path,
            coachId: history.location.state.coachId
        })
    }

    // const PeerTOPeerIds = (path) => {
    //     history.push('GroupChat', {
    //         path,
    //         coachId: history.location.state.coachId
    //     })
    // }

    return (
        <InboxContainer>
            <Header />   
            <InboxBody data={lastMessages} onLastMessagePressed={path => onLastMessagePressed(path)} /> 
        </InboxContainer>
    )
}


export default Inbox; 