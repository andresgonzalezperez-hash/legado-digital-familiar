import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/sections/Navbar'
import { Hero } from './components/sections/Hero'
import { CloudComparison } from './components/sections/CloudComparison'
import { DualSystemSection } from './components/sections/DualSystemSection'
import { MilitaryArchitecture } from './components/sections/MilitaryArchitecture'
import { RecoveryProtocol } from './components/sections/RecoveryProtocol'
import { FAQSection } from './components/sections/FAQSection'
import { Footer } from './components/sections/Footer'

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#090D16] text-[#F8FAFC]">
        <Navbar />
        <main>
          <Hero />
          <CloudComparison />
          <DualSystemSection />
          <MilitaryArchitecture />
          <RecoveryProtocol />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
