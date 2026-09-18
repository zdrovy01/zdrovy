/** Accepts a full YouTube URL or a bare video id and returns the id. */
function youtubeId(input: string): string {
  const patterns = [
    /[?&]v=([\w-]{11})/, // watch?v=ID
    /youtu\.be\/([\w-]{11})/, // youtu.be/ID
    /\/embed\/([\w-]{11})/, // /embed/ID
    /\/shorts\/([\w-]{11})/, // /shorts/ID
  ];
  for (const p of patterns) {
    const m = input.match(p);
    if (m) return m[1];
  }
  return input.trim();
}

type FigureProps = {
  /** Image file in /public. Replaces the placeholder. */
  src?: string;
  /** YouTube URL or video id. Takes precedence over `src`. */
  youtube?: string;
  alt?: string;
  /** Shown under the media. */
  caption?: string;
  /** What to produce, shown in the placeholder while nothing is supplied. */
  spec?: string;
  /** Pixel size to hand the photographer or editor. */
  dimensions?: string;
  ratio?: "wide" | "portrait" | "square";
  /**
   * "cover" (default) fills the frame and crops — right for photographs.
   * "contain" fits the whole thing in — right for product shots and mockups,
   * where cropping would clip the device or the UI.
   */
  fit?: "cover" | "contain";
  /** Labels the placeholder so it is clear what is still missing. */
  kind?: "photo" | "video";
};

/**
 * A media slot. With `youtube` or `src` it renders the media; without either
 * it renders a labelled placeholder so the page reads as finished while the
 * shooting or editing is still pending.
 */
export default function Figure({
  src,
  youtube,
  alt = "",
  caption,
  spec,
  dimensions,
  ratio = "wide",
  fit = "cover",
  kind = "photo",
}: FigureProps) {
  const hasMedia = Boolean(youtube || src);

  return (
    <figure className="figure">
      <div
        className={`figure-frame${hasMedia ? "" : " figure-frame--empty"}`}
        data-ratio={ratio}
        {...(hasMedia
          ? {}
          : {
              role: "img",
              "aria-label": spec
                ? `${kind} placeholder: ${spec}`
                : `${kind} placeholder`,
            })}
      >
        {youtube ? (
          <iframe
            className="figure-embed"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId(youtube)}`}
            title={alt || caption || "Video"}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="figure-img" data-fit={fit} />
        ) : (
          <>
            <span className="figure-dim">
              {kind === "video" ? "Video" : null}
              {kind === "video" && dimensions ? " · " : null}
              {dimensions}
            </span>
            <span className="figure-spec">{spec}</span>
          </>
        )}
      </div>
      {caption && <figcaption className="figure-caption">{caption}</figcaption>}
    </figure>
  );
}
