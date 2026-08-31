// components/Hero.tsx
import './Hero.css';
import { useTranslation } from 'react-i18next';


interface HeroProps {
  setFilter: (filter: string) => void;
}

export default function Hero({ setFilter }: HeroProps) {
  const { t } = useTranslation();
  return (
    <nav className="Hero-container">
      <a href="../#Projects" className="menu-link" onClick={() => setFilter('dev')}>
        {t('creation-web-and-design')} <span className="Card-arrow">→</span>
      </a>
      <a href="../#Projects" className="menu-link" onClick={() => setFilter('AV')}>
        {t('audiovisuel')} <span className="Card-arrow">→</span>
      </a>
    </nav>
  );
}