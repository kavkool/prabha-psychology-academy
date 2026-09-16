export function IntroVideo() {
  return (
    <section
      id="intro-video"
      className="bg-cream py-14 sm:py-16"
      aria-labelledby="intro-video-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
            Meet Prabha
          </p>
          <h2
            id="intro-video-heading"
            className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl"
          >
            A quick introduction
          </h2>
          <p className="mt-3 text-sm text-ink-muted sm:text-base">
            Hear how I teach Psychology and what a lesson with me feels like.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-navy/10 bg-navy shadow-lift">
          <video
            className="aspect-video w-full bg-navy-deep"
            controls
            playsInline
            preload="metadata"
            poster="/video/prabha-intro-poster.jpg"
          >
            <source src="/video/prabha-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
