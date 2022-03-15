import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

import { DiAndroid, DiJava, DiJavascript, DiReact, IconName } from 'react-icons/di'

function Footer() {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram /> 
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <DiJavascript />
                </li>
                <li>
                    <DiJava />
                </li>
                <li>
                    <DiReact />
                </li>
            </ul>
            <p>Nosso rodapé</p>
            
            
        </footer>
    )
}

export default Footer