import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import PlaygroundPage from './pages/PlaygroundPage'
import { navItems, socialLinks } from './data/siteData'

function App() {
  return (
    // BrowserRouter ใช้จัดการการเปลี่ยนหน้าทั้งหมดของเว็บไซต์
    <BrowserRouter>
      {/* app-shell เป็นโครงหลักที่ใช้ร่วมกันทุกหน้า */}
      <div className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#fcfbfa_22%,#fcf8f9_100%)] font-['Avenir_Next','Trebuchet_MS','Segoe_UI',sans-serif] text-[#5b5056] antialiased">
        <SiteHeader navItems={navItems} socialLinks={socialLinks} />
        <main>
          {/* แต่ละ route จะเรียก page component ตาม path */}
          <Routes>
            <Route path="/" element={<HomePage socialLinks={socialLinks} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
          </Routes>
        </main>
        <SiteFooter navItems={navItems} socialLinks={socialLinks} />
      </div>
    </BrowserRouter>
  )
}

export default App
