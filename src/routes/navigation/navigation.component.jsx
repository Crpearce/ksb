import data from './data';
import logo from '../../assets/ksb-logo.jpg'
import "./navigation.styles.css";

const Navigation = () => {
    return (
        <nav>
        <div className="nav-container">
          <a href="/" aria-label='link to home'>
            <img src={logo} alt='ksb main logo' className="logo"/>
          </a>
          <ul className="nav-menu">
            {data.map((category) => (
              <li key={category.id}>
                <a href={category.link} >{category.title}</a>
              </li>
            ))}
          </ul>
          {/* <button id="theme-icon" aria-label='darkmode toggle' onClick={showModalHandler}><MdOutlineDarkMode className="moon"/></button> */}
        </div>
      </nav>
    );
}

export default Navigation;
