function FeaturedProjectSection({ project }) {
  return (
    <section className="bg-[#f8e9eb]">
      <div className="mx-auto grid min-h-[360px] w-full max-w-[1020px] place-items-center px-4 py-16 text-center sm:min-h-[420px] md:px-5">
        <div className="w-full">
          <h2 className="m-0 text-[clamp(20px,4vw,36px)] font-bold tracking-[-0.04em] text-[#211b1f]">
            Projects in Bootcamp Generation Thailand
          </h2>
          <p className="mx-auto mt-4 max-w-[580px] text-[0.98rem] leading-[1.6] text-[#5b5056]">
            Click the floating card to open the live group project. The motion
            is kept intentionally gentle so it feels playful without pulling too
            much attention from the rest of the page.
          </p>

          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="group mx-auto mt-10 block w-full max-w-[430px] rounded-[32px] text-left no-underline focus-visible:outline-none"
          >
            <div className="motion-reduce:animate-none motion-safe:animate-[floatY_4.4s_ease-in-out_infinite]">
              <article className="overflow-hidden rounded-[32px] border border-[#eadcdf] bg-[linear-gradient(180deg,#fffdfd_0%,#fff5f6_100%)] shadow-[0_20px_45px_rgba(64,46,53,0.12)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_60px_rgba(64,46,53,0.18)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_28px_60px_rgba(64,46,53,0.18)] motion-reduce:transition-none">
                <div className="border-b border-[#f0e4e7] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#e8b4bf]" />
                    <span className="h-3 w-3 rounded-full bg-[#f2d6a2]" />
                    <span className="h-3 w-3 rounded-full bg-[#b7d8c3]" />
                  </div>
                </div>

                <div className="border-b border-[#f0e4e7] bg-[#f7edef] p-3 sm:p-4">
                  <h3 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.03em] text-[#211b1f]">
                    {project.name}
                  </h3>
                  <div className="overflow-hidden rounded-[22px] bg-[#1d171a] shadow-[0_14px_30px_rgba(28,17,22,0.18)]">
                    <video
                      src={project.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="block aspect-[16/10] w-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className="space-y-4 px-5 py-6 sm:px-7 sm:py-7">
                  <div>
                    <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#8f707a]">
                      Live web app
                    </p>

                    <h3 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.03em] text-[#211b1f]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-[1.6] text-[#5b5056]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#eadcdf] bg-white px-3 py-1 text-[0.78rem] font-medium text-[#5b5056]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-[0.92rem] font-medium">
                    <a
                      href={project.repoHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#8f707a] underline decoration-[#d9bec5] underline-offset-4"
                    >
                      Frontend repo
                    </a>
                    <a
                      href={project.backendRepoHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#8f707a] underline decoration-[#d9bec5] underline-offset-4"
                    >
                      Backend repo
                    </a>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#f0e4e7] pt-4">
                    <span className="text-[0.94rem] font-medium text-[#211b1f]">
                      View project
                    </span>
                    <span className="text-[1.2rem] text-[#8f707a] transition duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectSection;
