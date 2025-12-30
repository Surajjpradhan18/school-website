import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import Classes from '@/components/Classes';
import Admission from '@/components/Admission';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Taxila School - Excellence in Education from Nursery to 5th Grade</title>
        <meta name="description" content="Taxila School offers quality education from Nursery to 5th class with modern facilities, experienced faculty, and a nurturing environment. Apply for admission online today." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Facilities />
          <Classes />
          <Admission />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;