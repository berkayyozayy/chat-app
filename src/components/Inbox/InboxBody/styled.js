import styled from 'styled-components';


export const InboxBodyContainer = styled.div`


    height: 100vh;
    background-color: #f4f6fc;

.main-header {
    margin-left: 2%;
    margin-top: 1%;
    display: flex;
    align-items: center;
    font-family: 'proxima-nova', sans-serif;
}
.text {
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: #4d4c4c;
}
.message-infos {
    margin-left: 2%;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: left;
    color: #8798ad;
}


.messages {
    height: 80vh;
    background-color: #ffffff;
    margin-left: 2%;
    margin-right: 5%;
    /* border: 1px solid red; */
    overflow: scroll;
}

.inbox-message {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    border: solid 1px rgba(46, 91, 255, 0.08);

}

.user-image {
    height: 30px;
    width: 30px;
    margin-left: 1%;
    margin-top: 2px;
    border-radius: 50%;
}
.user-image img {
    width: 30px;
    height: 30px;
    margin-top: 1px;
}

.user-name {
    margin-left: 2%;
}

.user-name p {
    font-family: 'Rubik';
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #282828;
}

.inbox-body-message {
    margin-left: 5%;
    width: 70%;
    height: 50px;
    /* border: 1px solid black; */
    overflow: hidden;
}

.inbox-body-message p {
    overflow: scroll;
    font-family: 'proxima-nova', sans-serif;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: left;
    color: #4d4c4c;
}
.time {
    /* margin-left: 1px; */
    justify-content: center;
}
.time p {
    font-family: 'proxima-nova', sans-serif;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: right;
    color: #43425d;
}
`;