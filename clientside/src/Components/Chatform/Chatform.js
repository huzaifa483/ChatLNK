import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSmile,faPaperclip,faMicrophone} from '@fortawesome/free-solid-svg-icons';
import './Chatform.scss'
const Chatform = () => {
    return <div className="form">
<div className="act-btn">
<FontAwesomeIcon className="icon-block" icon={faSmile} />
<FontAwesomeIcon className="icon-block" icon={faPaperclip} />
</div>
<input className="Cinput" placeholder="Message...."/>
<FontAwesomeIcon className="icon-block" icon={faMicrophone} />
    </div>;
}
export default Chatform;