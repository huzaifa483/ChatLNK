import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import './Search.scss';
const Search = () => {
    return <div className="search">
          <div className="S-img">
                <img alt="R" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            </div> 
             <div className="search-bar"> 
                <FontAwesomeIcon className="icon" icon={faSearch} />
                <input placeholder="Search for people!!" />
            </div> 
    </div>;
}

export default Search;