import Image from "next/image";
import { photos, type Photo as PhotoData, type PhotoId } from "@/content/images";

type Props = {
  id: PhotoId;
  /** Sets the frame's size and shape, e.g. "aspect-[4/5] rounded-lg". The image fills it. */
  className?: string;
  /** Responsive sizes hint for next/image, so phones download small files. */
  sizes: string;
  /** Load immediately (the hero). Everything else lazy-loads. */
  priority?: boolean;
  /** Subtle zoom on hover. */
  hover?: boolean;
  /** Bottom (or left on desktop) scrim so type can sit on the photo. */
  scrim?: "bottom" | "left";
  children?: React.ReactNode;
};

/**
 * A photograph in a fixed frame. Uses next/image for modern formats, responsive sizes and
 * lazy loading. An empty slot (no photo yet) renders a marked placeholder with the shot brief.
 */
export function Photo({ id, className = "", sizes, priority, hover, scrim, children }: Props) {
  const photo: PhotoData = photos[id];
  const classes = [
    "photo",
    hover ? "photo-hover" : "",
    scrim === "bottom" ? "scrim" : scrim === "left" ? "scrim scrim-left" : "",
    className,
  ].join(" ");

  return (
    <div className={classes}>
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: photo.position ?? "center" }}
        />
      ) : (
        <div className="absolute inset-0 flex items-end p-4">
          <span className="placeholder-copy t-secondary">Photo needed: {photo.brief}</span>
        </div>
      )}
      {children}
    </div>
  );
}
