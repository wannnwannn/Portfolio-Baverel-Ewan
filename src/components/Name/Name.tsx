/* src/components/Name/Name.tsx */
import './Name.css';
import { useTranslation } from 'react-i18next';

export default function Name() {
    const { t } = useTranslation();
    return (
        <div className="Name">
            <div className="Name-container">
                <div className="Name-line">
                    <h1 className="Name-title">Baverel</h1>
                    <h2 className="Name-subtitle">Ewan</h2>
                </div>
            </div>
            <div className="Name-description">
                <p>{t('intro')}</p>
            </div>
        </div>
        
        
    )
}