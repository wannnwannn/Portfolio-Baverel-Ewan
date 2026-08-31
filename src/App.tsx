// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Projects from './Pages/Projects/Projects';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';

import './i18n';
import './index.css'; // Ton design system
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState("tous")
  return (
    <BrowserRouter>
      {/* On crée une grande grille pour séparer ton menu et ton contenu principal */}
      <div className="layout-grid"> 
        
        {/* Le menu est en dehors des routes : il restera TOUJOURS affiché sur le côté */}
        <Navigation />

        {/* C'est ici que React Router va "injecter" la bonne page selon l'URL */}
        <main className="content-area">
          <Routes>
            {/* Route 1 : architecture One-Page complète sur l'accueil */}
            <Route 
              path="/" 
              element={
                <>
                  <Home setFilter={setFilter} />
                  <Projects filter={filter} setFilter={setFilter}/>
                  <Profile />
                </>
              } 
            />

            {/* Route 2 : page dynamique isolée */}
            <Route path="/projet/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;