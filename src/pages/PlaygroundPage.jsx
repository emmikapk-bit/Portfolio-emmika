import { playgroundProjects } from "../data/siteData";

function PlaygroundPage() {
  return (
    <section className="mx-auto w-full max-w-[1020px] px-4 pb-[92px] pt-[40px] md:px-5">
      <div className="max-w-[680px]">
        <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#8f707a]">
          Experiments
        </p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.04em] text-[#211b1f]">
          Playground
        </h1>
        <p className="mt-4 text-[0.98rem] leading-[1.7] text-[#5b5056]">
          A collection of smaller front-end builds where I explored visual
          direction, interaction, and component-driven layouts.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {playgroundProjects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="group block rounded-[30px] text-inherit no-underline focus-visible:outline-none"
          >
            <article className="h-full overflow-hidden rounded-[30px] border border-[#e9dde0] bg-[#fffdfd] shadow-[0_14px_32px_rgba(64,46,53,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_48px_rgba(64,46,53,0.14)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_22px_48px_rgba(64,46,53,0.14)] motion-reduce:transition-none">
              <div
                className={`min-h-[220px] bg-gradient-to-br ${project.accent} p-6`}
              >
                <div className="flex h-full flex-col rounded-[24px] border border-[rgba(33,27,31,0.08)] bg-[rgba(255,255,255,0.55)] p-3 backdrop-blur-[4px] sm:p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#e8b4bf]" />
                    <span className="h-3 w-3 rounded-full bg-[#f2d6a2]" />
                    <span className="h-3 w-3 rounded-full bg-[#b7d8c3]" />
                  </div>
                  <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_14px_30px_rgba(64,46,53,0.12)]">
                    <img
                      src={project.imageSrc}
                      alt={`${project.title} preview`}
                      className="block aspect-[16/10] w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-[0.78rem] uppercase tracking-[0.22em] text-[#8f707a]">
                      Live playground
                    </p>
                    <h2 className="mt-2 text-[1.7rem] font-semibold tracking-[-0.04em] text-[#211b1f]">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="space-y-4 px-6 py-6">
                <p className="text-[0.98rem] leading-[1.65] text-[#5b5056]">
                  {project.description}
                </p>

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

                <div className="flex items-center justify-between border-t border-[#f0e4e7] pt-4">
                  <span className="text-[0.94rem] font-medium text-[#211b1f]">
                    Visit project
                  </span>
                  <span className="text-[1.2rem] text-[#8f707a] transition duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none">
                    →
                  </span>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}

export default PlaygroundPage;
