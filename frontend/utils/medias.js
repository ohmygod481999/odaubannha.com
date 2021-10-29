import { config } from "../config";

/**
 *
 * @param {strapiImage} image
 * @param {string} imageType "LARGE","MEDIUM", "SMALL", "THUMBNAIL"
 */
export function getStrapiImage(image, imageType) {
    let imgUrl = image ? image.url : null;
    if (!image) return ""
    switch (imageType) {
        case "LARGE":
            if (image.formats.large) {
                imgUrl = image.formats.large.url;
            }
            break;
        case "MEDIUM":
            if (image.formats.medium) {
                imgUrl = image.formats.medium.url;
            }
            break;
        case "SMALL":
            if (image.formats.small) {
                imgUrl = image.formats.small.url;
            }
            break;
        case "THUMBNAIL":
            imgUrl = image.formats.thumbnail.url;
            break;
    }
    return getStrapiMedia(imgUrl);
}

export function getStrapiMedia(url) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith("http") || url.startsWith("//")) {
        return url;
    }

    // Otherwise prepend the URL path with the Strapi URL
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://bunrieucohuongbeo.longvb.tech"
    }${url}`;
}
