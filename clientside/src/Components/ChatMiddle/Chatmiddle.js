import './Chatmiddle.scss';
const Chatmiddle = () => {
    return <div className="chat-sec">
    <div className="chat me">
        <span className="namePer">John Smith</span>
        <p className="msgR">Hey buddy how's yoyr day going?</p>
        <span className="time">12:00pm</span>
    </div>
    <div className="chat you">
        <span className="namePer">John Smith</span>
        <p className="msgR">Hey buddy how's yoyr day going?</p>
        <span className="time">12:00pm</span>

    </div>
    </div>;
}


export default Chatmiddle;