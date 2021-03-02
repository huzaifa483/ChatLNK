import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import './Headchat.scss';
const Headchat = () => {
    return <div className="headChat">
            <div className="imgCont">
                <img alt="R" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            </div>
            <div className="head-dtl">
                <h4 className="ttl">John Smith</h4>
                <p className="dsc">
                    Online
          </p>
            </div>
            <div className="act-icon">
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>

    </div>;
}


export default Headchat;