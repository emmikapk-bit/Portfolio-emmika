import Icon from "./Icon";

function SocialLinks({ items }) {
  return (
    // ชุดลิงก์โซเชียลแบบใช้ซ้ำใน header, hero และ footer
    <div className="flex items-center gap-2.5" aria-label="Social links">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-full border border-transparent text-inherit transition duration-200 hover:-translate-y-0.5 hover:border-[#e9dde0] hover:bg-[rgba(255,230,236,0.45)] focus-visible:-translate-y-0.5 focus-visible:border-[#e9dde0] focus-visible:bg-[rgba(255,230,236,0.45)] focus-visible:outline-none motion-reduce:transition-none"
        >
          <Icon name={item.icon} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
