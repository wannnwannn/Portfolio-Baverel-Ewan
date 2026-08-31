import './Story.css'
import { useTranslation } from 'react-i18next';

export default function Story() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="person">
        <p className="name">BAVEREL Ewan</p>
        <p className="status">{t('etudiant')}</p>
      </div>
      <div className="cards-container">
        <div className='card'>
          <h3 className='card-title'>{t('methodologie')}</h3>
          <p className='card-content'>{t('MethodologieText')}</p>
        </div>
        <div className='card'>
          <h3 className='card-title'>{t('interface')}</h3>
          <p className='card-content'>{t('interfaceText')}</p>
        </div>
        <div className='card'>
          <h3 className='card-title'>{t('discipline')}</h3>
          <p className='card-content'>{t('disciplineText')}</p>
        </div>

      </div>
    </div>
  );
}