import styles from './Services.module.css'

const Services = () => {
    return (
        <section id="services"><h2>Website Packages</h2>
            <div className={styles.services_cards}>
                <div><h3>One Page Site</h3>
                    <p>from <span>€299</span></p>
                    <ul>
                        <li>Professional email</li>
                        <li>1 page with 5 sections</li>
                        <li>Unique custom design</li>
                        <li>Contact form</li>
                        <li>Responsive design -
                            adapted to laptops, tablets and phones</li>
                        <li>Backups</li>
                        <li>Analytics</li>
                    </ul></div>
                <div><h3>Multi-page Website</h3>
                    <p>from <span>€399</span></p>
                    <ul> <li>Professional email</li>
                        <li>From 5 pages</li>
                        <li>Unique custom design</li>
                        <li>Contact form</li>
                        <li>Responsive design -
                            adapted to laptops, tablets and phones</li>
                        <li>Backups</li>
                        <li>Analytics</li>
                    </ul></div>
                <div><h3>Ecommerce Website</h3>
                    <p>from <span>€599</span></p>
                    <ul> <li>Professional email</li>
                        <li>Unlimited products</li>
                        <li>Unique custom design</li>
                        <li>Discount codes</li>
                        <li>Up to 3 non-shop pages</li>
                        <li>Responsive design -
                            adapted to laptops, tablets and phones</li>
                        <li>Backups</li>
                        <li>Analytics</li>
                    </ul></div>
            </div>
        </section>
    )
}

export default Services