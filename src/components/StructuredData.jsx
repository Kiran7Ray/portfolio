import site from "../config/site";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: new URL(site.defaultImage, `${site.url}/`).href,
    description: site.description,
    sameAs: site.socialProfiles,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National College of Engineering, Tribhuvan University",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
