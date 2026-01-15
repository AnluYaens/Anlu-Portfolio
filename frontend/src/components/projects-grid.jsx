import React, { useEffect, useMemo, useState } from "react";

const FILTERS = [
  { id: "featured", label: "Featured" },
  { id: "all", label: "All Projects" },
];

const ProjectCard = ({ project, variant }) => {
  const tags = project.tags
    ? project.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];
  const visibleTags = tags.slice(0, variant === "featured" ? 5 : 4);
  const isFeatured = variant === "featured";
  const imageHeight = isFeatured ? "h-56" : "h-full";
  const imagePosition = "object-top";
  const titleSize = isFeatured ? "text-2xl" : "text-xl";
  const padding = isFeatured ? "p-6" : "p-5";
  const cardShellClass =
    "group relative bg-white/5 rounded-2xl transition-all duration-300 flex flex-col backdrop-blur-sm overflow-hidden h-full shadow-[0_6px_18px_rgba(0,0,0,0.35)] hover:shadow-[0_0_18px_rgba(59,130,246,0.35)] focus-within:shadow-[0_0_18px_rgba(59,130,246,0.35)] hover:ring-1 hover:ring-blue-500/40 focus-within:ring-1 focus-within:ring-blue-500/40";

  const cardContent = (
    <>
      {isFeatured && (
        <span className="text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-3">
          Featured
        </span>
      )}
      <h2
        className={`${titleSize} font-bold text-white mb-3 group-hover:text-blue-400 transition-colors`}
      >
        {project.title}
      </h2>
      <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
        {project.description}
      </p>

      {visibleTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {visibleTags.map((tag, tagIndex) => (
            <span
              key={`${project.id}-tag-${tagIndex}`}
              className="bg-white/10 text-blue-200 text-xs font-medium px-3 py-1.5 rounded-full border border-white/5 hover:bg-white/15 hover:border-blue-500/30 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
        {project.link_github && (
          <a
            href={project.link_github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-2 transition-all hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
        )}
        {project.link_demo && (
          <a
            href={project.link_demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-2 transition-all hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </>
  );

  if (!isFeatured) {
    return (
      <article className={cardShellClass}>
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
          {project.image_url ? (
            <img
              src={project.image_url}
              alt={project.title}
              className={`w-full ${imageHeight} ${imagePosition} object-cover shadow-lg`}
            />
          ) : (
            <div
              className={`w-full ${imageHeight} bg-gradient-to-br from-gray-900/50 to-gray-800/50 flex items-center justify-center`}
            >
              <svg
                className="w-12 h-12 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 0 00-2 2v12a2 0 00-2 2z"
                ></path>
              </svg>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
        <div
          className={`relative z-10 h-full ${padding} flex flex-col opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto`}
        >
          {cardContent}
        </div>
      </article>
    );
  }

  return (
    <article className={cardShellClass}>
      <div className="relative w-full overflow-hidden">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className={`w-full ${imageHeight} ${imagePosition} object-cover border-b border-white/5 shadow-lg group-hover:scale-105 transition-transform duration-300`}
          />
        ) : (
          <div
            className={`w-full ${imageHeight} bg-gradient-to-br from-gray-900/50 to-gray-800/50 flex items-center justify-center border-b border-white/5 group-hover:border-white/10 transition-colors`}
          >
            <svg
              className="w-12 h-12 text-gray-600 group-hover:text-gray-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        )}
      </div>

      <div className={`relative z-10 flex flex-col ${padding} flex-1`}>
        {cardContent}
      </div>
    </article>
  );
};

const ProjectsGrid = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState("featured");
  const [page, setPage] = useState(1);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [projects]
  );

  const featuredList =
    featuredProjects.length > 0
      ? featuredProjects.slice(0, 2)
      : projects.slice(0, 2);

  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(projects.length / pageSize));
  const startIndex = (page - 1) * pageSize;
  const allPageProjects = projects.slice(startIndex, startIndex + pageSize);

  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const isFeatured = activeFilter === "featured";
  const visibleProjects = isFeatured ? featuredList : allPageProjects;
  const showPagination = !isFeatured && totalPages > 1;
  const gridRows = isFeatured ? "md:grid-rows-1" : "md:grid-rows-2";

  return (
    <section id="projects" className="max-w-6xl mx-auto mt-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white pl-2 border-l-4 border-blue-500">
          Projects
        </h3>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <div>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    isActive
                      ? "bg-white/10 text-blue-200 border-blue-500/40"
                      : "bg-white/5 text-gray-300 border-white/10 hover:border-blue-500/40 hover:text-blue-200"
                  }`}
                  aria-pressed={isActive}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {projects.length === 0 ? (
            <div className="text-center mt-10">
              <div className="inline-block p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                <p className="text-gray-400">Loading projects...</p>
                <p className="text-sm text-gray-500 mt-2">
                  (Make sure the backend is running on port 8000)
                </p>
              </div>
            </div>
          ) : (
            <>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 ${gridRows} md:auto-rows-fr md:h-[440px] lg:h-[480px] gap-6`}
              >
                {visibleProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variant={isFeatured ? "featured" : "compact"}
                  />
                ))}
              </div>

              {showPagination && (
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    const isActive = pageNumber === page;
                    return (
                      <button
                        key={pageNumber}
                        type="button"
                        onClick={() => setPage(pageNumber)}
                        className={`w-9 h-9 rounded-full text-sm font-medium transition-all border ${
                          isActive
                            ? "bg-white/10 text-blue-200 border-blue-500/40"
                            : "bg-white/5 text-gray-400 border-white/10 hover:border-blue-500/40 hover:text-blue-200"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
