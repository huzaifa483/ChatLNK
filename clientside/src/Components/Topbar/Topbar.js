import './Topbar.scss';
const Topbar = () => {
    return <div className='top-bar'>
            <div className="img-container">
                <img alt="R" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            </div>
            <div className="tag">ChatLNK</div>
            <div className="signout">
                Sign out
            </div>
        </div>;
}
export default Topbar;