export const DEFAULT_OG_IMAGE = {
  url: "/images/Image-of-training-session.jpg",
  width: 1210,
  height: 1600,
  alt: "The Leadership Method leadership training session",
  type: "image/jpeg",
};

export const DEFAULT_TWITTER_IMAGE = {
  url: "/images/Image-of-training-session.jpg",
  alt: "Leadership training session facilitated by The Leadership Method",
};

export function createTwitterMetadata({ title, description }) {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_TWITTER_IMAGE],
  };
}
