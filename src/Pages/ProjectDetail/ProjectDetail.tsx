import './ProjectDetail.css'
import { getProjectsData } from '../Projects/Projects';
import { useState } from 'react';

import { useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CodeXml } from 'lucide-react';
//imports partie code des projets
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
//imports des languages de code
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
//import du theme visuel
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('tsx', tsx);

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';



export default function ProjectDetail() {
    const { t } = useTranslation();
    const { id } = useParams(); // Récupère dynamiquement "Akasha" ou "portfolio"
  const projectsData = getProjectsData(t);
    const project = projectsData.find((p) => p.id === id); 
    const [cursor, setCursor] = useState(0); //curseur pour changer dynamiquement les images
    const [showCode, setShowCode] = useState(false); //usestate pour afficher le code sur mobile
    const [direction, setDirection] = useState(0); //usestate pour la direction du curseur
    const slideVariants = {
    entrer: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0
    }),
    centrer: {
      x: 0,
      opacity: 1
    },
    sortir: (direction: number) => ({
      x: direction < 0 ? 30 : -30,
      opacity: 0
    })
  };
    if (!project) {
    return <main><h1>{t('projet-introuvable')} ❌</h1></main>;
  }
  return (
    <main>
      <div className="header-container">
        <div className="header">
          <h1 className='category'>{project.category}</h1>
          <h1 className='title'>{project.title}</h1>
          <p className='goal'>{project.goal}</p>
          
          
        </div>
        <div className='link'>
          <a className='demoLink' href={project.demoLink} target='_blank'>{t('accessProject')}</a>
          {project.sourceCode && (<a className='demoLink' href={project.sourceCode} target='_blank'>{t('AccessCode')}</a>)}
        </div>
        <div className='gallery'>
          {project.video && (
            <video width="320" height="240" controls>
              <source src={project.video} type="video/mp4"></source>
            </video>
          )}
          {project.picture && (
            <>
              <AnimatePresence mode='wait' custom={direction}>
                <motion.img 
                  key={cursor} 
                  className='picture' 
                  src={project.picture[cursor]} 
                  custom={direction}
                  variants={slideVariants}
                  initial="entrer"
                  animate="centrer"
                  exit="sortir"
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                />
              </AnimatePresence>
              
              <button className='arrow-button' onClick={() => {
                setDirection(-1); //gauche
                setCursor(cursor === 0 ? project.picture.length - 1 : cursor - 1);
              }}>
                <ChevronLeft className='arrow'/>
              </button>
              
              <button className='arrow-button' onClick={() => {
                setDirection(1); //droite
                setCursor(cursor === project.picture.length - 1 ? 0 : cursor + 1);
              }}>
                <ChevronRight className='arrow'/>
              </button>
            </>
            )}
            
            


        </div>
        <div className='tag-container'>
          <span className='date'>{project.date}</span>
            {project.tags.map((tag, index) => (
              <span key={index} className="Project-tag">
                {tag}
              </span>
            ))}
        </div>
        
      </div>
      <button className='showCode' onClick={() => setShowCode(!showCode)} > <CodeXml />{showCode ? t('seeExplanation') : t('seeCode')}</button>
      <div className={showCode ? "content show-code" : "content"}>
        <div className='text'>
          <h1 className='step'>{t('defi')}</h1>
          <p className='explanation'>{project.defi}</p>
          <h1 className='step'>{t('solution')}</h1>
          <p className='explanation'>{project.solution}</p>
          <h1 className='step'>{t('impact')}</h1>
          <p className='explanation'>{project.impact}</p>

        </div>
        <div className='code'>
          <SyntaxHighlighter language={project.language} style={vscDarkPlus} wrapLongLines>
            {String(project.code)}
            
          </SyntaxHighlighter>

        </div>
        
      </div>
    </main>
  );
}
