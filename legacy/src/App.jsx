import React from 'react';
import Navbar from './components/Navbar';
import Story from './sections/Story';
import { GooeyTextDemo } from './components/GooeyTextDemo';
import SelectedWorks from './sections/SelectedWorks';
import Capabilities from './sections/Capabilities';
import Explorations from './sections/Explorations';
import FAQ from './sections/FAQ';
import Connect from './sections/Connect';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const handleOpenContact = () => {
    window.open('https://forms.gle/qtVcq7YDGg3kfZhT9', '_blank');
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-primary-light dark:text-primary-dark transition-colors duration-300">
        <Navbar onOpenContact={handleOpenContact} />
        <main>
          <Story />
          <GooeyTextDemo />
          <SelectedWorks />
          <Capabilities />
          <Explorations />
          <FAQ />
          <Connect onOpenContact={handleOpenContact} />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;
