import './Projects.css';
import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
interface ProjectsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export const getProjectsData = (t: TFunction) => [
    { 
        id: "snake", 
        filtre: "dev",
        title: "Snake in the desert", 
        tags: ["HTML", "CSS", "JavaScript"], 
        date:"2023", 
        image:"/Images/snake/snakecover.webp", 
        category:t('jeu-video'), 
        goal:t('snakeGoal'), 
        demoLink:"https://egao-game.itch.io/snake-in-desert", 
        sourceCode:"", 
        video:"",
        picture: ["/Images/snake/snakecover.webp","/Images/snake/pic1.webp"],
        defi:t('snakeChallenge'), 
        solution:t('snakeSolution'), 
        impact:t('snakeImpact'), 
        language:"javascript",
        code:`//Ajout de la nouvelle tête du serpent
        switch(dirHead) {
            case 0: //Right
                xSnake.unshift(xSnake[0]+1);
                ySnake.unshift(ySnake[0]);
                break;
            case 1: //Up
                xSnake.unshift(xSnake[0]);
                ySnake.unshift(ySnake[0]-1);
                break;
            case 2: //Left
                xSnake.unshift(xSnake[0]-1);
                ySnake.unshift(ySnake[0]);
                break;
            case 3: //Down
                xSnake.unshift(xSnake[0]);
                ySnake.unshift(ySnake[0]+1);
                break;
        }
    //Suppression de la queue du serpent
            xSnake.pop();
            ySnake.pop();`
    },
    { 
        id: "Akasha", 
        filtre: "dev",
        title: "Akasha", 
        tags: ["React JS", "Typescript", "SQL", "Supabase", "Vercel", "Figma"], 
        date:"2026", 
        image:"/Images/akasha/akasha.jpg", 
        category:t('application-web'), 
        goal:t('akashaGoal'), 
        demoLink:"https://getakasha.vercel.app/", 
        sourceCode:"https://github.com/wannnwannn/akasha", 
        video:"",
        picture: ["/Images/akasha/akasha.jpg", "/Images/akasha/DFD.webp", "/Images/akasha/affinity.png",],
        defi:t('akashaChallenge'), 
        solution:t('akashaSolution'), 
        impact:t('akashaImpact'), 
        language:"tsx",
        code:`interface MediaItem {
      id: string;
    source: 'tmdb' | 'anilist' | 'shikimori' | 'openlibrary' | 'manual';
    title: string;
    cover: string | null;
    type: 'movie' | 'tv' | 'anime' | 'manga' | 'webtoon' | 'book';
    year: string | number;
    description: string;
    totalEpisodes?: number | null;
    total_episodes?: number | null;
    isAiring?: boolean;
    genres?: string[];
    runtime?: number;
    prod_status?: string;
    isAdult?: boolean;
    creator?: string;
    }

    const fetchAniList = async (query: string, isUpcoming = false): Promise<MediaItem[]> => {
     
      const statusFilter = isUpcoming ? ', status_in: [NOT_YET_RELEASED, RELEASING]' : '';
      const sortFilter = isUpcoming ? ', sort: POPULARITY_DESC' : '';
      const res = await fetch('https://graphql.anilist.co', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ query: \`query ($search: String) { Page(page: 1, perPage: 15) { media(search: $search, type: ANIME$\${statusFilter}$\${sortFilter}) { id title { romaji english native } coverImage { large } format startDate { year } description episodes status genres duration isAdult studios(isMain: true) { nodes { name } } } } }\`, variables: query ? { search: query } : {} }) });
      if (!res.ok) return [];
      const data = await res.json();
      return data.data.Page.media.map((item: any) => ({
        id: String(item.id), source: 'anilist', title: String(item.title.english || item.title.romaji || item.title.native), cover: item.coverImage.large,
        type: 'anime', year: String(item.startDate.year || 'N/A'), description: String(item.description?.replace(/<[^>]*>?/gm, '') || 'Aucune description disponible.'),
        totalEpisodes: item.episodes || null, isAiring: item.status === 'RELEASING' || item.status === 'NOT_YET_RELEASED', genres: item.genres, runtime: item.duration, prod_status: String(item.status), isAdult: item.isAdult === true, creator: item.studios?.nodes?.[0]?.name || null
      }));
    };`
    },
    { 
        id: "Portfolio", 
        filtre: "dev",
        title: t('portfolio'), 
        tags: ["React JS", "Typescript", "Vercel", "Figma"], 
        date:"2026", 
        image:"/Images/portfolio/cover.webp", 
        category:t('site-web'), 
        goal:t('portfolioGoal'), 
        demoLink:"", 
        sourceCode:"https://github.com/wannnwannn/akasha", 
        video:"",
        picture: ["/Images/portfolio/cover.webp","/Images/portfolio/figma.webp"],
        defi:t('portfolioChallenge'),
        solution:t('portfolioSolution'),
        impact:t('portfolioImpact'),
        language:"tsx",
        code:`<AnimatePresence mode='wait'>
        <motion.div key={filter} id="Projects" className="Projects-container" initial={{ opacity: 0, scale:'90%' }} animate={{ opacity: 1, scale:'100%' }} exit={{ opacity: 0, scale:'90%' }} transition={{ duration: 0.25, ease:'easeInOut' }}>
            
                {filteredProjects.map((project) => (
                <div key={project.id} className="Project-card" >
                    <Link className="LinkDiv" to={\`/projet/\${project.id}\`}>
                        {project.image && (<img src={project.image} alt={project.title} className="Project-image" />)}
                        <div className="Project-description">
                            <h2 key={project.id} className="Project-title">{project.title}</h2>
                            <div className="Project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="Project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>
                
                    </Link>
                </div>
                ))}  
        </motion.div>
        
    </AnimatePresence>`
    },

];



export default function Projects({filter, setFilter}: ProjectsProps) {
    const { t } = useTranslation();
    const projectsData = getProjectsData(t);
    
    const filteredProjects = projectsData.filter((project) => {
        if (filter === "tous") {
            return true; // On conserve l'élément dans le nouveau tableau
        }
        // Sinon, on vérifie si le filtre actuel correspond à l'un des tags du projet
        return project.filtre === filter; 
    });
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };
    return (
        <main id='Projects'>
            <div  className='filters'>
                <button className={filter === "dev" ? "filterButton active" : "filterButton"} onClick={() => setFilter('dev')}>{t('creation-web-and-design')}</button>
                <button className={filter === "tous" ? "filterButton active" : "filterButton"} onClick={() => setFilter('tous')}>{t('tous')}</button>
                <button className={filter === "AV" ? "filterButton active" : "filterButton"} onClick={() => setFilter('AV')} >{t('audiovisuel')}</button>
            </div>
            <AnimatePresence mode='wait'>
                <motion.div key={filter} id="Projects" className="Projects-container" initial={{ opacity: 0, scale:'90%' }} animate={{ opacity: 1, scale:'100%' }} exit={{ opacity: 0, scale:'90%' }} transition={{ duration: 0.25, ease:'easeInOut' }}>
                    
                        {filteredProjects.map((project) => (
                        <div key={project.id} className="Project-card" >
                            <Link className="LinkDiv" to={`/projet/${project.id}`} onClick={scrollToTop}>
                                {project.image && (<img src={project.image} alt={project.title} className="Project-image" />)}
                                <div className="Project-description">
                                    <h2 key={project.id} className="Project-title">{project.title}</h2>
                                    <div className="Project-tags">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="Project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                        
                            </Link>
                        </div>
                        ))}  
                </motion.div>
                
            </AnimatePresence>
            
        </main>
    
    );
}