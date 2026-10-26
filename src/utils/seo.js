export function setPageSeo({
  title,
  description,
  image = "/favicon.jpg",
  canonicalPath = "/",
  jsonLd = null,
}) {
  if (typeof document === "undefined") return;

  const siteUrl =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
    window.location.origin;

  document.title = title;

  const setMeta = (selector, attribute, value, content) => {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, value);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  const imageUrl = `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;
  const canonicalUrl = `${siteUrl}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

  setMeta('meta[name="description"]', "name", "description", description);
  setMeta('meta[property="og:title"]', "property", "og:title", title);
  setMeta('meta[property="og:description"]', "property", "og:description", description);
  setMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
  setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
  setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Abdullah Azeez | Geospatial Analyst");
  setMeta('meta[property="og:locale"]', "property", "og:locale", "en_US");
  setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
  setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
  setMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);

  const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement("link");
  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute("href", canonicalUrl);
  if (!document.querySelector('link[rel="canonical"]')) {
    document.head.appendChild(canonical);
  }

  let scriptTag = document.querySelector("script[data-seo-jsonld]");
  if (!scriptTag) {
    scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "application/ld+json");
    scriptTag.setAttribute("data-seo-jsonld", "true");
    document.head.appendChild(scriptTag);
  }

  if (jsonLd) {
    scriptTag.textContent = JSON.stringify(jsonLd);
  }
}
