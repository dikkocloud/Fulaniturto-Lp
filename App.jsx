import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhatYoullLearn from './components/WhatYoullLearn'
import Support from './components/Support'
import AnyQuestion from './components/AnyQuestion'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fulani-green focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <WhatYoullLearn />
        <Support />
        <AnyQuestion />
        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}
