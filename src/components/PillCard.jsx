import Icon from './Icon'

function PillCard({ icon, label }) {
  return (
    // การ์ดรูปแบบเดียวกัน ใช้ทั้งในส่วน Skills และ Tools
    <article className="flex min-h-[60px] w-full items-center justify-start gap-3 border border-[#e9dde0] bg-[#fffdfd] px-[18px] text-[#211b1f] shadow-[0_9px_20px_rgba(64,46,53,0.08)] sm:w-auto">
      <Icon name={icon} className="h-6 w-6 text-[#8f707a]" />
      <span className="text-[0.98rem] font-medium text-[#211b1f]">{label}</span>
    </article>
  )
}

export default PillCard
