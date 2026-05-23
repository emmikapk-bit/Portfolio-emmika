import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { brandAssets } from "../data/siteData";

function SiteHeader({ navItems, socialLinks }) {
  return (
    // ส่วนหัวแบบ sticky เพื่อให้โครงสร้างใกล้เคียงภาพอ้างอิง
    <header className="sticky top-0 z-20 border-b border-[#e9dde0] bg-[rgba(255,252,252,0.95)] backdrop-blur-[14px]">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1020px] flex-wrap items-center justify-center gap-5 px-4 py-3 md:min-h-[68px] md:px-5 lg:flex-nowrap lg:justify-between lg:py-0">
        <NavLink
          to="/"
          className="order-1 text-inherit no-underline"
          aria-label="Emmika portfolio home"
        >
          <img
            src={brandAssets.logoMark}
            alt=""
            className="h-[45px] w-[45px] object-contain mb-3"
          />
        </NavLink>
        {/* เมนูกลางใช้ NavLink เพื่อจัดการสถานะ active ของแต่ละหน้า */}
        <nav
          className="order-3 flex w-full flex-1 items-center justify-center gap-[18px] lg:order-2 lg:w-auto lg:gap-[30px]"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={navClassName}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="order-3 hidden md:block">
          <SocialLinks items={socialLinks} />
        </div>
      </div>
    </header>
  );
}

function navClassName({ isActive }) {
  // เติม class active เมื่อ route ปัจจุบันตรงกับลิงก์นั้น
  return `no-underline text-[1.04rem] text-[#5b5056] transition duration-200 hover:text-[#211b1f] focus-visible:text-[#211b1f] focus-visible:outline-none motion-reduce:transition-none ${isActive ? "font-bold text-[#211b1f]" : ""}`;
}

export default SiteHeader;
