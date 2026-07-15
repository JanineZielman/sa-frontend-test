// import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? 'http://91.184.31.135:1338' + media.url
    : media.url;
  return imageUrl;
}