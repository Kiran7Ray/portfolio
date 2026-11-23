import { Helmet } from "react-helmet-async";
import site from "../../config/site";

export default function SEO({
  title,
  description = site.description,
  path = "/",
  image = site.defaultImage,
  type = "website",
  noIndex = false,
}) {
  const pageTitle = title ? `${title} | ${site.name}` : site.title;
  const canonicalUrl = new URL(path, `${site.url}/`).href;
  const imageUrl = new URL(image, `${site.url}/`).href;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={site.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
