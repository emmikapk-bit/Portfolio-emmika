import { brandAssets } from '../data/siteData'

function FlowerSprite({ className = '', style = {} }) {
  // แปลงค่าตำแหน่งและค่าการหมุนให้ใช้กับ Tailwind แบบ inline
  const wrapperStyle = {
    top: style.top,
    right: style.right,
    bottom: style.bottom,
    left: style.left,
    animationDuration: style.duration,
    animationDelay: style.delay,
    animationDirection: style.direction,
  }

  const imageStyle = {
    animationDuration: style.floatDuration ?? '4.8s',
    animationDelay: style.delay,
  }

  // รูปดอกไม้ตกแต่ง ใช้ซ้ำทั้งใน Hero และการ์ดหน้า About
  return (
    <div
      className={`absolute motion-reduce:animate-none motion-safe:animate-[spin_14s_linear_infinite] ${className}`.trim()}
      style={wrapperStyle}
      aria-hidden="true"
    >
      <img
        src={brandAssets.flowerMark}
        alt=""
        className="block h-full w-full drop-shadow-[0_10px_18px_rgba(47,39,43,0.08)] motion-reduce:animate-none motion-safe:animate-bounce [animation-timing-function:ease-in-out]"
        style={imageStyle}
      />
    </div>
  )
}

export default FlowerSprite
