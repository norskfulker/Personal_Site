import { createContext, useContext, useEffect } from 'react';

// True once the intro curtain has lifted, so page heroes can start their entrance on time.
export const ReadyContext = createContext(true);
export const useReady = () => useContext(ReadyContext);

// One title and description per page (owner brief SEO rules).
export const usePageMeta = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
};
