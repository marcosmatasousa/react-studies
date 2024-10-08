import PropTypes from 'prop-types';

import styles from './Main.module.css';

function Main(props){

    const mainStyles = {
        backgroundColor: !props.darkTheme ?  "white" : "#282D35",
        color: !props.darkTheme ? "#2B283A" : "white",
        backgroundImage: !props.darkTheme ? 
            "url('/react-facts/react-logo-light.svg')" :
            "url('/react-facts/react-logo-dark.svg')"
    };

    return(
        <main style={mainStyles} className={styles.main}>
            <h1>Fun facts about React</h1>
            <ul className={styles.factsList}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

Main.propTypes = {
    darkTheme: PropTypes.bool.isRequired
}

export default Main