import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Globe2,
  Images,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const galleryPath = (section, file) => `/media/gallery/${section}/${file}`;

const gallerySections = [
  {
    id: "public-sanitation",
    eyebrow: "Public sanitation",
    title: "Electronic ECO Toilet site installations",
    summary: "Installed Smart Buddy public sanitation blocks, civic site views, and official site-visit moments.",
    icon: Building2,
    images: [
      {
        src: galleryPath("public-sanitation", "eco-toilet-public-block.jpg"),
        title: "Public ECO Toilet block",
        alt: "Smart Buddy Electronic ECO Toilet block installed at a public site",
        size: "wide",
      },
      {
        src: galleryPath("public-sanitation", "eco-toilet-site-visit.jpg"),
        title: "Site visit at ECO Toilet block",
        alt: "Officials standing near a Smart Buddy Electronic ECO Toilet installation",
        size: "wide",
      },
    ],
  },
  {
    id: "sports-league",
    eyebrow: "Sports and community",
    title: "Smart Buddy team moments at Sakal Premier League Nashik",
    summary: "Brand visibility, team photographs, and kit handover moments from the Smart Buddy cricket team.",
    icon: Trophy,
    images: [
      {
        src: galleryPath("sports-league", "smart-buddy-cricket-team-wide.jpg"),
        title: "Smart Buddy cricket team",
        alt: "Smart Buddy cricket team group photograph at Sakal Premier League Nashik",
        size: "wide",
      },
      {
        src: galleryPath("sports-league", "smart-buddy-kit-handover.jpg"),
        title: "Team kit handover",
        alt: "Smart Buddy team kit handover at the Sakal Premier League Nashik event",
        size: "portrait",
      },
      {
        src: galleryPath("sports-league", "smart-buddy-team-stage.jpg"),
        title: "Team stage photograph",
        alt: "Smart Buddy team group photograph in front of the event sponsor wall",
        size: "large",
      },
    ],
  },
  {
    id: "leadership",
    eyebrow: "Leadership",
    title: "Leadership and global exposure",
    summary: "A personal leadership moment that complements the company story and founder visibility.",
    icon: Globe2,
    images: [
      {
        src: galleryPath("leadership", "leadership-global-moment.jpg"),
        title: "Founder global moment",
        alt: "Smart Buddy founder photographed during an international travel moment",
        size: "portrait",
      },
    ],
  },
];

const galleryItems = gallerySections.flatMap((section) =>
  section.images.map((image) => ({
    ...image,
    category: section.eyebrow,
    sectionId: section.id,
  })),
);

const galleryStats = [
  { value: String(galleryItems.length).padStart(2, "0"), label: "Photos", icon: Images },
  { value: String(gallerySections.length).padStart(2, "0"), label: "Sections", icon: BadgeCheck },
  { value: "ECO", label: "Site work", icon: Building2 },
  { value: "SPL", label: "Events", icon: Trophy },
];

function GalleryPage({ onNavigateHome, onOpenMedia }) {
  const openImage = (image) => {
    onOpenMedia?.({
      title: image.title,
      category: image.category,
      src: image.src,
      alt: image.alt,
    });
  };

  const scrollToGallerySection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="gallery-page">
      <section className="gallery-page-hero">
        <div className="gallery-page-hero-bg" aria-hidden="true" />
        <div className="container gallery-page-hero-grid">
          <div className="gallery-page-copy" data-reveal>
            <div className="product-breadcrumb" aria-label="Breadcrumb">
              <button type="button" onClick={() => onNavigateHome("home")}>Home</button>
              <ArrowRight size={14} />
              <strong>Gallery</strong>
            </div>
            <span className="eyebrow light">
              <Camera size={15} /> Gallery
            </span>
            <h1>Smart Buddy gallery.</h1>
            <p>
              A compact visual record of installations, community visibility, and leadership
              moments from the Smart Buddy journey.
            </p>
            <div className="gallery-page-actions">
              <button className="button primary" type="button" onClick={() => scrollToGallerySection(gallerySections[0].id)}>
                View gallery <ArrowRight size={17} />
              </button>
              <button className="button glass" type="button" onClick={() => onNavigateHome("contact")}>
                Contact team
              </button>
            </div>
          </div>

          <aside className="gallery-page-panel" data-reveal>
            <div className="gallery-page-panel-image">
              <img src={galleryItems[0].src} alt={galleryItems[0].alt} loading="eager" decoding="async" />
            </div>
            <div className="gallery-page-proof">
              {galleryStats.map(({ value, label, icon: Icon }) => (
                <article key={label}>
                  <Icon size={18} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="gallery-jump section">
        <div className="container">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <span className="eyebrow">
                <Sparkles size={15} /> Sections
              </span>
              <h2>Browse by section.</h2>
            </div>
            <p>
              Each section is grouped by its real context, making the page quick to scan without
              losing the story behind each photo.
            </p>
          </div>
          <div className="gallery-section-links">
            {gallerySections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  type="button"
                  onClick={() => scrollToGallerySection(section.id)}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 70}ms` }}
                  key={section.id}
                >
                  <Icon size={20} />
                  <span>{section.eyebrow}</span>
                  <strong>{section.title}</strong>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {gallerySections.map((section, sectionIndex) => {
        const Icon = section.icon;
        return (
          <section className={`gallery-section section ${sectionIndex % 2 ? "is-soft" : ""}`} id={section.id} key={section.id}>
            <div className="container">
              <div className="gallery-section-heading" data-reveal>
                <div>
                  <span className="eyebrow">
                    <Icon size={15} /> {section.eyebrow}
                  </span>
                  <h2>{section.title}</h2>
                  <p>{section.summary}</p>
                </div>
                <aside>
                  <strong>{String(section.images.length).padStart(2, "0")}</strong>
                  <span>Photos</span>
                </aside>
              </div>

              <div className="gallery-page-grid" data-reveal>
                {section.images.map((image, imageIndex) => (
                  <button
                    className={`gallery-page-card is-${image.size || "standard"}`}
                    type="button"
                    onClick={() => openImage({ ...image, category: section.eyebrow })}
                    data-reveal
                    style={{ "--reveal-delay": `${imageIndex * 45}ms`, "--gallery-image": `url(${image.src})` }}
                    key={image.src}
                  >
                    <img src={image.src} alt={image.alt} loading="eager" decoding="async" />
                    <span>{section.eyebrow}</span>
                    <strong>{image.title}</strong>
                  </button>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="gallery-page-cta">
        <div className="container gallery-page-cta-inner" data-reveal>
          <div>
            <span className="eyebrow light">
              <Users size={15} /> Keep building the visual record
            </span>
            <h2>Project photos, events, and team updates now have a clean place.</h2>
            <p>New visuals can be added section-wise as more Smart Buddy work is documented.</p>
          </div>
          <button className="button primary" type="button" onClick={() => onNavigateHome("contact")}>
            Contact team <ArrowRight size={17} />
          </button>
          <button className="button glass" type="button" onClick={() => onNavigateHome("home")}>
            <ArrowLeft size={17} /> Back home
          </button>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
