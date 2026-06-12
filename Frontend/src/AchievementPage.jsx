import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  Camera,
  GraduationCap,
  Handshake,
  Images,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const imagePath = (section, file) => `/media/achievements/${section}/${file}`;

const achievementSections = [
  {
    id: "global-impact-forum",
    eyebrow: "National recognition",
    title: "Global Impact Forum and Udyog Bharati recognition moments",
    location: "Sakal Global Impact Forum and Udyog Bharati program",
    date: "Recognition event",
    icon: Trophy,
    hero: imagePath("global-impact-forum", "global-impact-stage-handshake.jpg"),
    heroAlt: "Handshake moment on the Global Impact Forum stage",
    summary:
      "A first-priority recognition section featuring Aarya Innovtech and Smart Buddy moments from the Global Impact Forum stage and Udyog Bharati program.",
    highlights: ["Global Impact Forum", "Certificate presentation", "Udyog Bharati recognition"],
    images: [
      ["global-impact-certificate-presentation.jpg", "Certificate presentation on stage at the Global Impact Forum"],
      ["global-impact-award-moment.jpg", "Award exchange during the Global Impact Forum program"],
      ["udyog-bharati-recognition-group.jpg", "Udyog Bharati recognition group photograph"],
    ].map(([file, alt]) => ({ src: imagePath("global-impact-forum", file), alt })),
  },
  {
    id: "school-awards",
    eyebrow: "Education recognition",
    title: "Prize distribution and student recognition ceremony",
    location: "R. J. Chouhan Girls High School, Nashik Road",
    date: "School event",
    icon: GraduationCap,
    hero: imagePath("school-awards", "students-group-wide.jpeg"),
    heroAlt: "Group photograph with students during the school prize distribution ceremony",
    summary:
      "A school prize distribution program celebrating student achievement, discipline, and encouragement through public recognition.",
    highlights: ["Student awards", "Chief guest address", "School community"],
    images: [
      ["ganesh-prayer.jpeg", "Ganesh prayer before the school ceremony"],
      ["lamp-lighting.jpeg", "Lamp lighting ceremony"],
      ["chief-guest-award.jpeg", "Chief guest receiving an award on stage"],
      ["stage-speech-wide.jpeg", "Speaker addressing the audience from the stage"],
      ["school-group-stage.jpeg", "Group photo on the school stage"],
      ["student-award-plaque.jpeg", "Student receiving a plaque"],
    ].map(([file, alt]) => ({ src: imagePath("school-awards", file), alt })),
  },
  {
    id: "nashik-next",
    eyebrow: "Industry recognition",
    title: "Smart Buddy recognition at Nashik Next",
    location: "Sakal and Deepak Builders & Developers event",
    date: "7th anniversary recognition",
    icon: Trophy,
    hero: imagePath("nashik-next", "award-group-wide.jpeg"),
    heroAlt: "Smart Buddy recognition group photograph at Nashik Next",
    summary:
      "Recognition for Smart Buddy's journey, public-impact work, and the founder team behind Aarya Innovtech.",
    highlights: ["Smart Buddy brand recognition", "Certificate presentation", "Founder visibility"],
    images: [
      ["smart-buddy-recognition-poster.jpeg", "Smart Buddy recognition poster"],
      ["recognition-collage.jpeg", "Smart Buddy recognition collage"],
      ["stage-recognition-wide.jpeg", "Wide stage recognition photograph"],
    ].map(([file, alt]) => ({ src: imagePath("nashik-next", file), alt })),
  },
  {
    id: "moonje-institute",
    eyebrow: "Mentorship and institute connect",
    title: "Dr. Moonje Institute interaction and recognition",
    location: "Dr. Moonje Institute of Management and Computer Studies",
    date: "Student interaction",
    icon: BookOpen,
    hero: imagePath("moonje-institute", "auditorium-group.jpeg"),
    heroAlt: "Large student group photograph at Dr. Moonje Institute",
    summary:
      "A student-facing interaction covering entrepreneurship, leadership, and practical industry exposure through discussion and recognition.",
    highlights: ["Student mentoring", "Faculty interaction", "Award exchange"],
    images: [
      ["student-leaders-group.jpeg", "Student leaders with guest speaker"],
      ["meeting-certificates-wall.jpeg", "Meeting room with certificates wall"],
      ["conference-room-discussion.jpeg", "Discussion in the conference room"],
      ["mentor-sofa-talk.jpeg", "Mentor speaking from the sofa"],
      ["student-question.jpeg", "Student asking a question"],
      ["plaque-presentation.jpeg", "Plaque presentation at the institute"],
    ].map(([file, alt]) => ({ src: imagePath("moonje-institute", file), alt })),
  },
  {
    id: "networking",
    eyebrow: "Professional dialogue",
    title: "Roundtable discussion and stakeholder connect",
    location: "Business meeting",
    date: "Networking session",
    icon: Handshake,
    hero: imagePath("networking", "roundtable-discussion.jpeg"),
    heroAlt: "Roundtable discussion with stakeholders",
    summary:
      "A smaller professional meeting context that supports the wider achievement story through discussion, collaboration, and relationship building.",
    highlights: ["Stakeholder meeting", "Collaborative discussion", "Business connect"],
    images: [],
  },
];

const totalAchievementImages = achievementSections.reduce((total, section) => total + 1 + section.images.length, 0);

const achievementStats = [
  { value: String(totalAchievementImages), label: "Curated images", icon: Camera },
  { value: String(achievementSections.length), label: "Achievement sections", icon: Images },
  { value: "2026", label: "Forum recognition", icon: Award },
  { value: "1st", label: "Priority feature", icon: Sparkles },
];

const featuredMoments = achievementSections.slice(0, 4).map((section) => ({
  title: section.title,
  label: section.eyebrow,
  image: section.hero,
  target: section.id,
}));

function AchievementPage({ onNavigateHome }) {
  const scrollToEvent = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="achievements-page">
      <section className="achievements-page-hero">
        <div className="achievements-page-hero-bg" aria-hidden="true" />
        <div className="container achievements-page-hero-grid">
          <div className="achievements-page-copy" data-reveal>
            <div className="product-breadcrumb" aria-label="Breadcrumb">
              <button type="button" onClick={() => onNavigateHome("home")}>Home</button>
              <ArrowRight size={14} />
              <strong>Achievements</strong>
            </div>
            <span className="eyebrow light">
              <Award size={15} /> Achievements
            </span>
            <h1>Recognitions, public programs, and community impact moments.</h1>
            <p>
              Aarya Innovtech and Smart Buddy's achievement story is organized here by context:
              forum recognition, student programs, industry awards, institute mentoring, and professional dialogue.
            </p>
            <div className="achievements-page-actions">
              <button className="button primary" type="button" onClick={() => scrollToEvent(achievementSections[0].id)}>
                Explore events <ArrowRight size={17} />
              </button>
              <button className="button glass" type="button" onClick={() => onNavigateHome("contact")}>
                Contact team
              </button>
            </div>
          </div>

          <aside className="achievements-page-panel" data-reveal>
            <div className="achievements-page-panel-top">
              <Sparkles size={20} />
              <span>Section-wise gallery</span>
            </div>
            <div className="achievements-page-proof">
              {achievementStats.map(({ value, label, icon: Icon }) => (
                <article key={label}>
                  <Icon size={20} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
            <div className="achievements-page-panel-note">
              <Building2 size={18} />
              <p>The strongest non-repeated images are grouped by event context for a cleaner Achievement page.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="achievement-featured section">
        <div className="container">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <span className="eyebrow">
                <BadgeCheck size={15} /> Featured moments
              </span>
              <h2>Achievement stories grouped by event context.</h2>
            </div>
            <p>
              Each section below uses the images from the matching program, so visitors can
              quickly understand what kind of recognition or interaction took place.
            </p>
          </div>

          <div className="achievement-feature-grid">
            {featuredMoments.map((moment, index) => (
              <button
                type="button"
                className={index === 0 ? "is-featured" : ""}
                onClick={() => scrollToEvent(moment.target)}
                data-reveal
                style={{ "--achievement-feature-image": `url(${moment.image})`, "--reveal-delay": `${index * 65}ms` }}
                key={moment.target}
              >
                <img src={moment.image} alt={moment.title} loading="eager" decoding="async" />
                <span>{moment.label}</span>
                <strong>{moment.title}</strong>
              </button>
            ))}
          </div>
        </div>
      </section>

      {achievementSections.map((section, sectionIndex) => {
        const Icon = section.icon;

        return (
          <section className={`achievement-event section ${sectionIndex % 2 ? "is-soft" : ""}`} id={section.id} key={section.id}>
            <div className="container">
              <div className="achievement-event-intro" data-reveal>
                <div>
                  <span className="eyebrow">
                    <Icon size={15} /> {section.eyebrow}
                  </span>
                  <h2>{section.title}</h2>
                  <p>{section.summary}</p>
                </div>
                <aside>
                  <strong>{section.location}</strong>
                  <span>{section.date}</span>
                </aside>
              </div>

              <div className="achievement-event-layout">
                <article className="achievement-event-hero" data-reveal>
                  <img src={section.hero} alt={section.heroAlt} loading={sectionIndex === 0 ? "eager" : "lazy"} decoding="async" />
                  <div>
                    <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                    <strong>{section.eyebrow}</strong>
                  </div>
                </article>

                <div className="achievement-event-facts" data-reveal>
                  {section.highlights.map((highlight) => (
                    <p key={highlight}>
                      <BadgeCheck size={15} />
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>

              {section.images.length > 0 ? (
                <div className="achievement-gallery" data-reveal>
                  {section.images.map((image, imageIndex) => (
                    <figure
                      className={imageIndex === 0 ? "is-wide" : ""}
                      data-reveal
                      style={{ "--achievement-image": `url(${image.src})`, "--reveal-delay": `${Math.min(imageIndex, 10) * 38}ms` }}
                      key={image.src}
                    >
                      <img src={image.src} alt={image.alt} loading={sectionIndex === 0 ? "eager" : "lazy"} decoding="async" />
                      <figcaption>{image.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        );
      })}

      <section className="achievements-page-cta">
        <div className="container achievements-page-cta-inner" data-reveal>
          <div>
            <span className="eyebrow light">
              <Users size={15} /> Next step
            </span>
            <h2>Share more event photos whenever you have them.</h2>
            <p>
              The Achievement page is now structured to accept new recognitions, public programs,
              and institute interactions without disturbing the existing layout.
            </p>
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

export default AchievementPage;
