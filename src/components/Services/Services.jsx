import styles from './Services.module.css'

const Services = () => {
    return (
        <section id="services"><h2>Services</h2>
        <div className={styles.services_cards}>
            <div><h3>Service 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nisi luctus, malesuada sem et, porttitor magna. Nullam ullamcorper aliquam fringilla. Ut porta laoreet eros, eget elementum urna lacinia nec.</p></div>
            <div><h3>Service 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nisi luctus, malesuada sem et, porttitor magna. Nullam ullamcorper aliquam fringilla. Ut porta laoreet eros, eget elementum urna lacinia nec.</p></div>
            <div><h3>Service 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nisi luctus, malesuada sem et, porttitor magna. Nullam ullamcorper aliquam fringilla. Ut porta laoreet eros, eget elementum urna lacinia nec.</p></div>
                </div>
        </section>
    )
}

export default Services