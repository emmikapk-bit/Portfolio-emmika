import FlowerSprite from "../components/FlowerSprite";
import PillCard from "../components/PillCard";
import { brandAssets } from "../data/siteData";
import { infoCards, skills, workflows } from "../data/siteData";

function AboutPage() {
  return (
    // เนื้อหาหน้า About อยู่ภายใน container กลางหน้า
    <section className="mx-auto w-full max-w-[1020px] px-4 pb-[88px] pt-[34px] md:px-5">
      {/* avatar ชั่วคราว ใช้แทนรูปจริงจนกว่าจะใส่ไฟล์โปรไฟล์ */}
      <div
        className="mx-auto mb-7 grid h-[140px] w-[140px] place-items-center rounded-full border border-[rgba(135,120,125,0.12)] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(255,255,255,0.15)_48%),linear-gradient(145deg,#d3b3a8,#f0d6d8_54%,#f5efef)] shadow-[0_10px_30px_rgba(63,46,52,0.1)]"
        aria-label="Profile portrait"
      >
        <img
          src={brandAssets.logoMark}
          alt=""
          className="h-[106px] w-[106px] object-contain mb-8"
        />
      </div>

      {/* บทแนะนำตัวหลักของหน้า About */}
      <div className="mx-auto max-w-[690px]">
        <h2 className="mb-[18px] text-[clamp(1.85rem,4vw,2.8rem)] font-bold tracking-[-0.04em] text-[#211b1f]">
          A Little About Me
        </h2>
        <p className="m-0 leading-[1.7] text-[#5b5056]">
          My journey in the tech world started with a curiosity about how
          complex software works under the hood. This led me to dive deep into
          Full-Stack Development, mastering React, Node.js, Express, and
          MongoDB.
        </p>
        <p className="mt-[18px] leading-[1.7] text-[#5b5056]">
          What drives me as a developer is the perfect balance between creation
          and quality. I don&apos;t just love coding elegant user interfaces or
          building secure RESTful APIs. I also enjoy putting on my &apos;QA
          hat&apos; to think about edge cases, break code to find
          vulnerabilities, and rebuild it to be bulletproof. I believe that
          great software is built on clean logic and relentless attention to
          detail.
        </p>
      </div>

      {/* การ์ดข้อมูล 4 ใบ พร้อมดอกไม้ที่ขยับคนละจังหวะ */}
      <div className="mt-11 grid grid-cols-1 gap-x-[26px] gap-y-[14px] lg:grid-cols-2">
        {infoCards.map((card) => (
          <article
            key={card.title}
            className="flex items-center justify-between gap-4 border border-[#e9dde0] bg-[#fffdfd] px-[18px] pb-4 pt-[18px] shadow-[0_9px_20px_rgba(64,46,53,0.08)]"
          >
            <div>
              <p className="mb-1 text-[0.8rem] font-bold text-[#211b1f]">
                {card.title}
              </p>
              <p className="max-w-[180px] text-[0.95rem] font-semibold leading-[1.35] text-[#211b1f]">
                {card.value}
              </p>
            </div>
            <FlowerSprite
              className="static h-15 w-15 shrink-0"
              style={{
                duration: card.motion[0],
                delay: card.motion[1],
                direction: card.motion[2],
                floatDuration: "5.4s",
              }}
            />
          </article>
        ))}
      </div>

      {/* รายการสกิล แสดงเป็นการ์ดขนาดเล็กพร้อมไอคอน */}
      <section className="mt-[66px]">
        <p className="mb-1 text-[1.16rem] font-semibold text-[#211b1f]">
          What I know
        </p>
        <h2 className="mb-6 text-[clamp(1.9rem,4vw,2.55rem)] font-bold tracking-[-0.04em] text-[#211b1f]">
          Skills
        </h2>
        <div className="flex flex-wrap gap-[14px]">
          {skills.map((skill) => (
            <PillCard key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      </section>

      {/* ส่วน Tools & Workflow ใช้ระบบการ์ดเดียวกับสกิลเพื่อให้ภาพรวมสม่ำเสมอ */}
      <section className="mt-[66px]">
        <h3 className="mb-6 text-[1.24rem] font-semibold text-[#211b1f]">
          Tools &amp; Workflow
        </h3>
        <div className="flex max-w-[760px] flex-wrap gap-[14px]">
          {workflows.map((tool) => (
            <PillCard key={tool.label} icon={tool.icon} label={tool.label} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default AboutPage;
