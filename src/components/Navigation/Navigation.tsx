/* src/components/Navigation/Navigation.tsx */
import './Navigation.css';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import { useTranslation } from 'react-i18next';

export default function Navigation() {
    const { t , i18n} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [currentLang, setCurrentLang] = useState("Français");

    const toggleLang = (newLang: "fr" | "en" | "ja"): void => {
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang === "fr" ? "Français" : newLang === "en" ? "English" : "日本語");
    };
    

    useEffect(() => {
        // 2. La fonction de calcul (on s'en occupe juste après)
        const handleScroll = () => {
            const positionActuelle = window.scrollY;
            const sections = ['Home', 'Projects', 'Profile'];

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
    
                // On ajoute "section &&" pour éviter un crash si l'élément n'existe pas sur la page
                if (section && positionActuelle >= section.offsetTop) {
                setActiveSection(sectionId);
                }
            });
        };

        // 1. On attache l'écouteur à la fenêtre
        window.addEventListener('scroll', handleScroll);

        // 3. La phase de nettoyage exigée par React
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Le tableau vide indique que cet effet ne s'initialise qu'une seule fois au chargement

    return (
        <div className="Navigation-container">
            <nav className="Navigation">
                <ul className="Navigation-list">
                    <li className="Navigation-item">
                        <HashLink smooth to="/#Home" className="Navigation-link">
                            <span className={activeSection === 'Home' ? "Nav-Text active" : "Nav-Text"}>{t('accueil')}</span>
                            <svg className={activeSection === 'Home' ? "Nav-Icon active" : "Nav-Icon"} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="currentColor" d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573z"/></svg>

                            </HashLink>
                    </li>
                    <li className="Navigation-item">
                        <HashLink smooth to="/#Projects" className="Navigation-link">
                            <span className={activeSection === 'Projects' ? "Nav-Text active" : "Nav-Text"}>{t('projets')}</span>
                            <svg className={activeSection === 'Projects' ? "Nav-Icon active" : "Nav-Icon"} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h4.981l2 2h7.789q.69 0 1.153.463T21 8.616v8.769q0 .69-.462 1.153T19.385 19zm0-1h14.769q.269 0 .442-.173t.173-.442v-8.77q0-.269-.173-.442T19.385 8h-8.19l-2-2h-4.58q-.269 0-.442.173T4 6.616v10.769q0 .269.173.442t.443.173M4 18V6z"/></svg>
  
                        </HashLink>
                    </li>
                    <li className="Navigation-item">
                        <HashLink smooth to="/#Profile" className="Navigation-link">
                            <span className={activeSection === 'Profile' ? "Nav-Text active" : "Nav-Text"}>{t('profil')}</span>
                            <svg className={activeSection === 'Profile' ? "Nav-Icon active" : "Nav-Icon"} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240s240-107.452 240-240S388.548 16 256 16m147.078 387.078a207.253 207.253 0 1 1 44.589-66.125a207.3 207.3 0 0 1-44.589 66.125"/><path fill="currentColor" d="M128 192h40v40h-40zm208 0h40v40h-40zM232 306.948a5 5 0 0 1 .194-1.387L264 194.241V168h-32v21.759l-30.574 107.009A37.052 37.052 0 0 0 237.052 344H296v-32h-58.948a5.057 5.057 0 0 1-5.052-5.052"/></svg>
                        </HashLink>
                    </li>
                </ul>
            </nav>
            <div className="Language-switcher" onClick={() => setIsOpen(!isOpen)}>
                <a className="Language-current" >{currentLang}</a>
                <svg width="2rem" height="2rem" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='language-icon'>
                    <path d="M26.5 25.65C26.0667 24.3167 24.8167 23.3333 23.3333 23.3333H21.6667V18.3333C21.6667 17.8913 21.4911 17.4674 21.1785 17.1548C20.8659 16.8423 20.442 16.6667 20 16.6667H10V13.3333H13.3333C13.7754 13.3333 14.1993 13.1577 14.5118 12.8452C14.8244 12.5326 15 12.1087 15 11.6667V8.33333H18.3333C19.2174 8.33333 20.0652 7.98214 20.6904 7.35702C21.3155 6.7319 21.6667 5.88405 21.6667 5V4.31667C23.6608 5.12061 25.4304 6.39579 26.824 8.03306C28.2177 9.67033 29.1938 11.6209 29.6689 13.7179C30.144 15.8148 30.1039 17.9956 29.552 20.0737C29.0001 22.1517 27.9529 24.0651 26.5 25.65ZM15 29.8833C8.41667 29.0667 3.33333 23.4667 3.33333 16.6667C3.33333 15.6333 3.46667 14.6333 3.68333 13.6833L11.6667 21.6667V23.3333C11.6667 24.2174 12.0179 25.0652 12.643 25.6904C13.2681 26.3155 14.1159 26.6667 15 26.6667M16.6667 0C14.478 0 12.3107 0.431096 10.2886 1.26867C8.26652 2.10625 6.4292 3.33391 4.88155 4.88155C1.75595 8.00716 0 12.2464 0 16.6667C0 21.0869 1.75595 25.3262 4.88155 28.4518C6.4292 29.9994 8.26652 31.2271 10.2886 32.0647C12.3107 32.9022 14.478 33.3333 16.6667 33.3333C21.0869 33.3333 25.3262 31.5774 28.4518 28.4518C31.5774 25.3262 33.3333 21.0869 33.3333 16.6667C33.3333 14.478 32.9022 12.3107 32.0647 10.2886C31.2271 8.26652 29.9994 6.4292 28.4518 4.88155C26.9041 3.33391 25.0668 2.10625 23.0447 1.26867C21.0226 0.431096 18.8554 0 16.6667 0Z" />
                </svg>
                {isOpen && <div className="Language-dropdown">
                    <a className="Language" onClick={() =>toggleLang('fr')}>Français</a>
                    <a className="Language" onClick={() =>toggleLang('en')}>English</a>
                    <a className="Language" onClick={() =>toggleLang('ja')}>日本語</a>
                    
                </div>}

            </div>
        </div>
    )
}
