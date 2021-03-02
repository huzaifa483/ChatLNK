import Headchat from "./../Headchat/Headchat";
import ChatMiddle from './../ChatMiddle/Chatmiddle';
 import Chatform from './../Chatform/Chatform';
 import './chat.scss';
const Chatside = () => {
    return (
        <>
            <div className="hc"><Headchat /></div>
            <ChatMiddle />
            <Chatform /> 
        </>
    );
};

export default Chatside;