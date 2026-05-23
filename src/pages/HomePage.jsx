import SocialLinks from '../components/SocialLinks'
import FlowerSprite from '../components/FlowerSprite'
import { experiences, heroFlowers } from '../data/siteData'

function HomePage({ socialLinks }) {
  return (
    <>
      {/* Hero section พร้อมดอกไม้ลอยรอบข้อความแนะนำตัว */}
      <section className="relative mx-auto grid min-h-[510px] w-full max-w-[1020px] place-items-center overflow-hidden px-4 pb-[84px] pt-[72px] md:min-h-[470px] md:px-5 md:pb-[68px] md:pt-[58px]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {heroFlowers.map((flower, index) => (
            <FlowerSprite
              key={index}
              className={flower.size === 'lg' ? 'h-[74px] w-[74px] sm:h-[104px] sm:w-[104px]' : flower.size === 'md' ? 'h-[58px] w-[58px] sm:h-[82px] sm:w-[82px]' : 'h-[42px] w-[42px] sm:h-[58px] sm:w-[58px]'}
              style={flower}
            />
          ))}
        </div>
        <div className="relative z-[1] max-w-[610px] text-center">
          <p className="m-0 text-[clamp(2.35rem,5vw,4rem)] leading-none tracking-[-0.05em] text-[#211b1f]">
            Hi, I&apos;m <span className="text-[1.18em] font-semibold">Emmika</span>
          </p>
          <p className="mx-auto mb-[26px] mt-[22px] max-w-[530px] text-[0.94rem] leading-[1.5] text-[#5b5056] sm:text-[0.98rem]">
            I&apos;m a Software Developer and QA Engineer who loves building clean,
            user-friendly web applications from the inside out. With a solid
            foundation in React, Node.js, and Express, I don&apos;t just write code
            to make things work, I focus on robust validation, strict data
            handling, and flawless responsiveness. I love turning complex
            business logic into high-quality digital experiences that leave zero
            room for bugs.
          </p>
          <div className="flex justify-center">
            <SocialLinks items={socialLinks} />
          </div>
        </div>
      </section>

      {/* พื้นที่สำรองสำหรับ animation project ในอนาคต */}
      <section className="grid min-h-[300px] place-items-center bg-[#f8e9eb] sm:min-h-[420px]">
        <div className="mx-auto w-full max-w-[1020px] px-4 text-center md:px-5">
          <h2 className="m-0 text-[clamp(2rem,4vw,3.35rem)] font-bold tracking-[-0.04em] text-[#211b1f]">
            animation project
          </h2>
        </div>
      </section>

      {/* ส่วนแสดงประสบการณ์งานในรูปแบบคล้าย timeline แบบเรียบง่าย */}
      <section className="mx-auto w-full max-w-[1020px] px-4 pb-[92px] pt-[78px] md:px-5">
        <h2 className="mb-[26px] text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.04em] text-[#211b1f]">
          Experience
        </h2>
        <div className="grid gap-11">
          {experiences.map((item) => (
            <article
              key={`${item.title}-${item.year}`}
              className="grid grid-cols-1 items-start gap-2 md:gap-10 lg:grid-cols-[minmax(0,1fr)_auto]"
            >
              <div>
                <h3 className="m-0 text-[1.24rem] font-semibold text-[#211b1f]">
                  {item.title}
                </h3>
                <p className="m-0 text-base text-[#5b5056]">{item.org}</p>
                <p className="mt-2 max-w-[460px] text-base leading-[1.5] text-[#5b5056]">
                  {item.description}
                </p>
              </div>
              <p className="m-0 whitespace-nowrap font-bold text-[#211b1f]">
                {item.year}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
