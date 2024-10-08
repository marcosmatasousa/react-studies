import PropTypes from 'prop-types';

import styles from './Travel.module.css';

function Travel(props) {
    return (
        <section className={styles.section}>
            <img className={styles.image} src={props.imageUrl} alt="" />
            <div className={styles.info}>
                <div className={styles.location}>
                    <img className={styles.pin} src="traveljourney/Fill 219.png" alt="" />
                    <p className={styles.location}>{props.location.toUpperCase()}</p>
                    <a target='_blanket' href={props.googleMapsUrl} className={styles.mapsLink}>View on Google Maps</a>
                </div>
                <h1 className={styles.title}>{props.title}</h1>
                <h2 className={styles.date}>{`${props.startDate} - ${props.endDate}`}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>
        </section>
    )
}

Travel.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    googleMapsUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Travel;