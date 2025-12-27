import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kasthuri Eswar | AI & Prompt Engineering Portfolio</title>
        <meta 
          name="description" 
          content="Kasthuri Eswar - AI & Prompt Engineering Intern specializing in machine learning, NLP, deep learning, and intelligent AI solutions. View projects and get in touch." 
        />
        <meta name="keywords" content="AI, Prompt Engineering, Machine Learning, NLP, Deep Learning, Python, Portfolio, Kasthuri Eswar" />
        <link rel="canonical" href="https://kasthurieswar.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default Index;
