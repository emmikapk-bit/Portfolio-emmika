import { NavLink } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import { brandAssets } from '../data/siteData'

function SiteFooter({ navItems, socialLinks }) {
  return (
    // Footer ใช้เมนูและ brand mark ซ้ำตามดีไซน์ต้นฉบับ
    <footer className="mt-auto border-t border-[rgba(177,156,160,0.16)] bg-[#f8e9eb]">
      <div className="mx-auto flex w-full max-w-[1020px] flex-col items-center justify-center gap-[18px] px-4 pb-6 pt-[42px] md:px-5">
        <nav className="flex items-center justify-center gap-[18px] lg:gap-[30px]" aria-label="Footer">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={navClassName}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <img
            src={brandAssets.logoMark}
            alt=""
            className="h-[52px] w-[52px] object-contain"
          />
          <img
            src={brandAssets.signatureMark}
            alt="Emmika Pk."
            className="w-[170px] object-contain sm:w-[210px]"
          />
        </div>
        <SocialLinks items={socialLinks} />
        <p className="m-0 text-[0.9rem] text-[#5b5056]">Copyright © 2026 Emmika Pk.</p>
      </div>
    </footer>
  )
}

function navClassName({ isActive }) {
  // เติม class active เมื่อ route ปัจจุบันตรงกับลิงก์นั้น
  return `no-underline text-[1.04rem] text-[#5b5056] transition duration-200 hover:text-[#211b1f] focus-visible:text-[#211b1f] focus-visible:outline-none motion-reduce:transition-none ${isActive ? 'font-bold text-[#211b1f]' : ''}`
}

export default SiteFooter
