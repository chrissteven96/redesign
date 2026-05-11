import React from "react"
import styles from "./clients.module.css"

const Clients = () => {
    return (
        <React.Fragment>
        <div className={styles.slider}>
            <div className={styles.sliderHeader}>
                <h1>Principales Clientes</h1>
            </div>
            <div className={styles.sliderContent}>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client1.png" alt="Client 1"  className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client2.png" alt="Client 2" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client3.png" alt="Client 3" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client4.png" alt="Client 4" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client5.png" alt="Client 5" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client6.png" alt="Client 6" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client7.png" alt="Client 7" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client8.png" alt="Client 8" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client9.png" alt="Client 9" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client10.png" alt="Client 10" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client11.png" alt="Client 11" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client12.png" alt="Client 12" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client13.png" alt="Client 13" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client14.png" alt="Client 14" className={styles.clientImage} />
                </div>

                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client15.png" alt="Client 15" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client16.png" alt="Client 16" className={styles.clientImage} />
                </div>
                <div className={styles.separator}></div>
                <div className={styles.sliderImg}>
                    <img src="/client17.png" alt="Client 17" className={styles.clientImage} />
                </div>
                
                
            </div>
        </div>
        </React.Fragment>   
    )
}

export default Clients