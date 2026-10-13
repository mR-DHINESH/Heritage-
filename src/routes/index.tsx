import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  BusFront,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Computer,
  FlaskConical,
  GraduationCap,
  Heart,
  Landmark,
  LibraryBig,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UsersRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMobile from "../../Images/mobileview.png?url";

const photos = {
  crest: "/images/crest.jpeg",
  hero: "/images/hero.jpeg",
  heroMobile,
  classroom: "/images/classroom.jpeg",
  community: "/images/community.jpeg",
  about: "/images/about.jpeg",
  graduation: "/images/graduation.jpeg",
  schoolBus: "/images/school-bus.jpeg",
  outdoorPlay: "/images/outdoor-play.jpeg",
  schoolEvent: "/images/school-event.jpeg",
} as const;

const links = [
  ["Home", "home"],
  ["Our school", "about"],
  ["Academics", "academics"],
  ["Campus life", "facilities"],
  ["Gallery", "gallery"],
  ["Admissions", "admissions"],
  ["Contact", "contact"],
] as const;

const values = [
  { icon: Award, title: "Experienced faculty", detail: "Dedicated guidance at every stage" },
  { icon: ShieldCheck, title: "A safe campus", detail: "A welcoming place to learn and grow" },
  { icon: Computer, title: "Smart learning", detail: "Curiosity encouraged in every class" },
  { icon: Heart, title: "Whole-child growth", detail: "Character and confidence, together" },
];

const academics = [
  { icon: Sparkles, number: "01", title: "Primary school", years: "The early years", description: "A warm, encouraging start where young learners build confidence, curiosity and strong foundations." },
  { icon: BookOpen, number: "02", title: "Middle school", years: "Growing independence", description: "A wider world of ideas helps students develop their voice, their interests and a love of discovery." },
  { icon: GraduationCap, number: "03", title: "High school", years: "Ready for what’s next", description: "Focused teaching and steady guidance help every learner take their next steps with purpose." },
];

const facilities = [
  { icon: Computer, title: "Smart classrooms", detail: "Engaging lessons in welcoming learning spaces." },
  { icon: FlaskConical, title: "Science learning", detail: "Space to question, investigate and experiment." },
  { icon: Microscope, title: "Computer learning", detail: "Practical experiences for a changing world." },
  { icon: LibraryBig, title: "Library", detail: "A quiet corner for stories, study and discovery." },
  { icon: Trophy, title: "Sports & play", detail: "Room to move, play as a team and thrive." },
  { icon: BusFront, title: "School transport", detail: "School bus transport for the student community." },
  { icon: ShieldCheck, title: "A caring campus", detail: "A supportive atmosphere for children to flourish." },
  { icon: UsersRound, title: "Activities & arts", detail: "Creative expression and shared experiences." },
];

const gallery = [
  { src: photos.graduation, alt: "Heritage Academy young graduates with their teachers on stage", title: "Celebrating every milestone", label: "A proud day" },
  { src: photos.hero, alt: "The entrance to Heritage Academy Matriculation School", title: "A place to belong", label: "Our campus" },
  { src: photos.classroom, alt: "Students taking part in an interactive classroom lesson", title: "Learning together", label: "In the classroom" },
  { src: photos.schoolEvent, alt: "Students and staff gathered for a school celebration", title: "A community of learners", label: "School life" },
  { src: photos.schoolBus, alt: "Heritage Academy Matriculation School transport bus", title: "On the way to school", label: "Student transport" },
  { src: photos.outdoorPlay, alt: "Students enjoying outdoor games on the school grounds", title: "Room to play and grow", label: "Campus life" },
];

// Sample parent notes for the review demo. Replace these with approved parent testimonials before publication.
const testimonials = [
  { quote: "We are grateful for the kindness and encouragement our child receives. Every day brings something new to learn.", name: "A parent from the Heritage community", className: "Parent perspective" },
  { quote: "It means so much to see our child grow in confidence and feel at home in the classroom.", name: "A parent from the Heritage community", className: "Parent perspective" },
  { quote: "The teachers make learning feel personal. We appreciate the care they bring to every step.", name: "A parent from the Heritage community", className: "Parent perspective" },
];

const stats = [
  // Sample figures for this principal-review demo; confirm and replace before publication.
  { value: 15, suffix: "+", label: "Years of learning" },
  { value: 500, suffix: "+", label: "Young learners" },
  { value: 32, suffix: "+", label: "Caring educators" },
  { value: 100, suffix: "%", label: "Room to grow" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heritage Academy Matriculation School | Ayikudi, Trichy" },
      { name: "description", content: "Discover Heritage Academy Matriculation School in Ayikudi, Trichy — a welcoming place for children to learn, grow and shape their future." },
      { property: "og:title", content: "Heritage Academy Matriculation School | Ayikudi, Trichy" },
      { property: "og:description", content: "Nurturing minds and building character at Heritage Academy Matriculation School, Ayikudi, Trichy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HeritageAcademyPage,
});

function HeritageAcademyPage() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof gallery)[number] | null>(null);
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    const sections = links.map(([, id]) => document.getElementById(id)).filter((section): section is HTMLElement => section !== null);
    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }),
      { rootMargin: "-26% 0px -62% 0px" },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver(
      (entries, observer) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const statElement = document.querySelector(".stats-grid");
    let statFrame = 0;
    let statObserver: IntersectionObserver | undefined;
    if (statElement) {
      statObserver = new IntersectionObserver(([entry]) => {
        if (!entry?.isIntersecting) return;
        const start = performance.now();
        const duration = 1300;
        const animate = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - t) ** 3;
          setNumbers(stats.map(({ value }) => Math.round(value * eased)));
          if (t < 1) statFrame = requestAnimationFrame(animate);
        };
        statFrame = requestAnimationFrame(animate);
        statObserver?.disconnect();
      }, { threshold: 0.3 });
      statObserver.observe(statElement);
    }

    return () => {
      window.removeEventListener("scroll", updateScroll);
      sectionObserver.disconnect();
      revealObserver.disconnect();
      statObserver?.disconnect();
      cancelAnimationFrame(statFrame);
    };
  }, []);

  useEffect(() => {
    if (selectedPhoto === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedPhoto]);

  useEffect(() => {
    const timer = window.setInterval(() => setTestimonial((current) => (current + 1) % testimonials.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const goToTestimonial = (direction: -1 | 1) => {
    setTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    formRef.current?.reset();
  };

  return (
    <div className="school-site">
      <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Heritage Academy Matriculation School home" onClick={() => setMobileOpen(false)}>
            <img src={photos.crest} alt="Heritage Academy crest" />
            <span className="brand-name">Heritage Academy<span>Matriculation School · Trichy</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, id]) => <a key={id} className={activeSection === id ? "nav-link active" : "nav-link"} href={`#${id}`}>{label}</a>)}
          </nav>
          <Button className="header-cta" asChild><a href="#admissions">Admissions open <ArrowRight aria-hidden="true" /></a></Button>
          <Button variant="ghost" size="icon" className="menu-toggle" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {mobileOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>{label}<ArrowRight aria-hidden="true" /></a>)}
          <a className="mobile-nav-cta" href="#admissions" onClick={() => setMobileOpen(false)}>Admissions open <ArrowRight aria-hidden="true" /></a>
        </nav>}
      </header>

      <main>
        <section className="hero school-banner" id="home" aria-labelledby="hero-title">
          <picture className="hero-photo-picture">
            <source media="(max-width: 768px)" srcSet={photos.heroMobile} />
            <img className="hero-photo" src={photos.hero} alt="Heritage Academy Matriculation School campus" fetchPriority="high" />
          </picture>
          <div className="hero-shade" />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <div className="hero-eyebrow"><span className="eyebrow-mark" /> A place to learn, belong & become</div>
              <h1 id="hero-title">Nurturing minds.<br />Building character.<br /><span>Shaping futures.</span></h1>
              <p>Rooted in care. Inspired by possibility. Discover a welcoming matriculation school for your child in Ayikudi, Trichy.</p>
              <div className="hero-actions">
                <Button className="button-gold button-large" asChild><a href="#admissions">Explore admissions <ArrowRight aria-hidden="true" /></a></Button>
                <a className="hero-call" href="tel:+919578709910"><span className="call-icon"><Phone aria-hidden="true" /></span>Talk to our school</a>
              </div>
              <div className="hero-caption"><span className="caption-line" /> Ayikudi Village · Manachanallur · Trichy</div>
            </div>
            <div className="hero-seal" aria-label="Admissions open"><div className="seal-ring"><span>NOW WELCOMING</span><GraduationCap aria-hidden="true" /><strong>NEW LEARNERS</strong><span>HERITAGE ACADEMY</span></div></div>
          </div>
          <a className="scroll-cue" href="#about"><span>Discover our school</span><ArrowDown aria-hidden="true" /></a>
          <div className="hero-bottom-rule" />
        </section>

        <section className="value-band" aria-label="What makes a Heritage education">
          <div className="value-grid page-width">{values.map(({ icon: Icon, title, detail }, index) => <article className="value-item" key={title}>
            <span className="value-icon"><Icon aria-hidden="true" /></span><span className="value-copy"><strong>{title}</strong><span>{detail}</span></span>
            {index < values.length - 1 && <span className="value-divider" aria-hidden="true" />}
          </article>)}</div>
        </section>

        <section id="about" className="section section-about">
          <div className="about-layout page-width">
            <div className="about-visual reveal"><div className="about-image-frame"><img src={photos.about} alt="Children and educators together at Heritage Academy" loading="lazy" /></div><div className="about-image-note"><span className="note-icon"><Heart aria-hidden="true" /></span><span><strong>Every child belongs</strong><small>Learning, with care at its heart</small></span></div><div className="about-side-label">A COMMUNITY THAT CARES</div></div>
            <div className="about-copy reveal">
              <span className="section-kicker"><span /> Welcome to Heritage Academy</span>
              <h2>A strong beginning<br />for a <em>bright tomorrow.</em></h2>
              <p className="body-lead">At Heritage Academy Matriculation School, we believe that a good education grows from a sense of belonging.</p>
              <p>In our Ayikudi community, children are encouraged to ask questions, discover their strengths and treat one another with kindness. Together with families, our teachers make every school day a chance to take another confident step.</p>
              <a className="text-link" href="#academics">Get to know our approach <ArrowRight aria-hidden="true" /></a>
              <div className="principal-signoff"><span className="signoff-rule" /><span>With warm regards,<br /><strong>A. Manikandan, M.A., B.Ed.</strong><small>Principal</small></span></div>
            </div>
          </div>
          <div className="stats-strip page-width"><div className="stats-intro"><span>Our school, in brief</span><strong>Growing together, year by year.</strong></div><div className="stats-grid">{stats.map((stat, index) => <div className="stat" key={stat.label}><strong>{numbers[index]}<span>{stat.suffix}</span></strong><span>{stat.label}</span></div>)}</div></div>
          <div className="demo-note page-width">School highlights shown for this review and awaiting the school's confirmation.</div>
        </section>

        <section className="principal-section">
          <div className="principal-inner page-width reveal">
            <div className="principal-portrait"><img src={photos.community} alt="School staff and children gathered together" loading="lazy" /><span className="portrait-mark"><Quote aria-hidden="true" /></span></div>
            <div className="principal-message"><span className="section-kicker section-kicker-light"><span /> A message from our principal</span><blockquote>“Education is more than what a child learns. It is the confidence to be curious, the courage to be kind and the joy of growing together.”</blockquote><div className="principal-byline"><strong>A. Manikandan, M.A., B.Ed.</strong><span>Principal, Heritage Academy Matriculation School</span></div></div>
            <div className="principal-ornament" aria-hidden="true">H</div>
          </div>
        </section>

        <section className="section academics-section" id="academics">
          <div className="page-width">
            <div className="section-heading reveal"><div><span className="section-kicker"><span /> Learning at every age</span><h2>Every stage, a new<br /><em>possibility.</em></h2></div><p>As children grow, so does their world. We meet each stage with thoughtful teaching and encouragement to keep asking, trying and discovering.</p></div>
            <div className="academic-grid">{academics.map(({ icon: Icon, number, title, years, description }) => <article className="academic-card reveal" key={title}><span className="academic-number">{number}</span><span className="academic-icon"><Icon aria-hidden="true" /></span><span className="academic-stage">{years}</span><h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={`Ask us about ${title}`}>Ask us about this stage <ArrowRight aria-hidden="true" /></a></article>)}</div>
          </div>
        </section>

        <section id="facilities" className="section facilities-section">
          <div className="page-width"><div className="section-heading reveal"><div><span className="section-kicker"><span /> Space to flourish</span><h2>A campus for<br /><em>every kind of curious.</em></h2></div><p>Learning happens in many ways. From a thoughtful classroom to time outdoors, our school brings room to explore into each school day.</p></div>
            <div className="facilities-grid">{facilities.map(({ icon: Icon, title, detail }, index) => <article className="facility-item reveal" key={title}><span className="facility-index">0{index + 1}</span><span className="facility-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{detail}</p><span className="facility-underline" /></article>)}</div>
          </div>
        </section>

        <section className="why-section">
          <div className="why-layout page-width"><div className="why-copy reveal"><span className="section-kicker section-kicker-light"><span /> More than the classroom</span><h2>Confidence for<br /><em>the whole journey.</em></h2><p>Children thrive when they feel known, supported and free to find their own strengths. That belief shapes our school community, one day at a time.</p><a className="why-link" href="#contact">Come meet our community <ArrowRight aria-hidden="true" /></a></div><div className="why-points">{[
            { icon: Heart, title: "Care that feels personal", detail: "A welcoming school community where every learner matters." },
            { icon: BookOpen, title: "Learning with purpose", detail: "Strong foundations built through curiosity and encouragement." },
            { icon: UsersRound, title: "Growing together", detail: "Families and educators working alongside one another." },
          ].map(({ icon: Icon, title, detail }, index) => <article className="why-point reveal" key={title}><span className="why-icon"><Icon aria-hidden="true" /></span><span><small>0{index + 1} / OUR BELIEF</small><strong>{title}</strong><span>{detail}</span></span><ArrowRight className="why-arrow" aria-hidden="true" /></article>)}</div></div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="page-width"><div className="gallery-heading reveal"><div><span className="section-kicker"><span /> Little moments, lasting memories</span><h2>Life at <em>Heritage.</em></h2></div><p>A glimpse of the people and moments that make our school community feel like home.</p></div>
            <div className="gallery-grid">{gallery.map((photo, index) => <button className={`gallery-tile gallery-tile-${index + 1} reveal`} key={photo.src} type="button" onClick={() => setSelectedPhoto(photo)} aria-label={`Open photo: ${photo.title}`}><img src={photo.src} alt={photo.alt} loading="lazy" /><span className="gallery-overlay"><span className="gallery-label">{photo.label}</span><strong>{photo.title}</strong><span className="gallery-open"><ArrowRight aria-hidden="true" /></span></span></button>)}</div>
          </div>
        </section>

        <section className="voices-section" aria-label="Parent perspectives">
          <div className="voices-inner page-width reveal"><div className="voices-side"><span className="section-kicker"><span /> From our school community</span><h2>Shared with<br /><em>care.</em></h2><p>Every family brings a story to our school.</p><div className="voice-controls"><Button variant="outline" size="icon" onClick={() => goToTestimonial(-1)} aria-label="Previous parent perspective"><ChevronLeft /></Button><span>0{testimonial + 1}<i />0{testimonials.length}</span><Button variant="outline" size="icon" onClick={() => goToTestimonial(1)} aria-label="Next parent perspective"><ChevronRight /></Button></div></div><div className="voice-quote"><Quote className="quote-mark" aria-hidden="true" /><div className="stars" aria-label="Sample testimonial rating, five out of five">{Array.from({ length: 5 }, (_, index) => <Star key={index} aria-hidden="true" />)}</div><blockquote key={testimonial}>{testimonials[testimonial]?.quote}</blockquote><div className="voice-author"><span className="voice-avatar"><Heart aria-hidden="true" /></span><span><strong>{testimonials[testimonial]?.name}</strong><small>{testimonials[testimonial]?.className} · Sample review</small></span></div><span className="voice-disclaimer">Sample wording for review — replace with approved parent feedback.</span></div></div>
        </section>

        <section id="admissions" className="admissions-section">
          <div className="admissions-inner page-width reveal"><div className="admissions-top"><div><span className="section-kicker section-kicker-light"><span /> Your next chapter starts here</span><h2>Admissions open<br />for a bright beginning.</h2><p>We’d love to welcome your family to Heritage Academy. Start a conversation with us today.</p></div><div className="admissions-crest"><img src={photos.crest} alt="Heritage Academy crest" loading="lazy" /></div></div><div className="admissions-bottom"><div className="admission-steps">{[{ n: "01", title: "Enquire", icon: MessageCircle }, { n: "02", title: "Visit", icon: MapPin }, { n: "03", title: "Begin", icon: Check }].map(({ n, title, icon: Icon }, index) => <div className="admission-step" key={n}><span className="step-number">{n}</span><Icon aria-hidden="true" /><strong>{title}</strong>{index < 2 && <span className="step-rule" />}</div>)}</div><Button className="button-gold button-large" asChild><a href="#contact">Take the first step <ArrowRight aria-hidden="true" /></a></Button></div></div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-layout page-width"><div className="contact-copy reveal"><span className="section-kicker"><span /> Let’s start a conversation</span><h2>We’re here<br />to <em>help you begin.</em></h2><p>Questions about the school or admissions? Our team would be happy to hear from you.</p><div className="contact-list"><a className="contact-item" href="tel:+919578709910"><span><Phone aria-hidden="true" /></span><span><small>Give us a call</small><strong>+91 95787 09910</strong></span><ArrowRight aria-hidden="true" /></a><a className="contact-item" href="mailto:maniheritagehead@gmail.com"><span><Mail aria-hidden="true" /></span><span><small>Write to us</small><strong>maniheritagehead@gmail.com</strong></span><ArrowRight aria-hidden="true" /></a><div className="contact-item"><span><MapPin aria-hidden="true" /></span><span><small>Come and see us</small><strong>Ayikudi Village, Manachanallur (Tk),<br />Trichy – 621 105, Tamil Nadu</strong></span></div></div><div className="office-note"><Clock3 aria-hidden="true" /><span>We look forward to hearing from your family.</span></div></div>
            <div className="enquiry-wrap reveal"><div className="form-heading"><span className="form-icon"><MessageCircle aria-hidden="true" /></span><span><span className="section-kicker"><span /> An enquiry for our team</span><h3>Tell us a little about your family.</h3></span></div>
              {submitted ? <div className="form-success" role="status"><span><Check aria-hidden="true" /></span><h3>Thank you for reaching out.</h3><p>Your message is ready. Please contact the school directly by phone or email so our team can respond.</p><Button variant="outline" onClick={() => setSubmitted(false)}>Send another enquiry</Button></div> : <form ref={formRef} className="enquiry-form" onSubmit={handleSubmit}>
                <label>Parent / guardian name<input name="parentName" type="text" placeholder="Your name" autoComplete="name" required /></label>
                <div className="form-row"><label>Phone number<input name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" pattern="[+0-9 ()-]{8,18}" title="Enter a valid phone number" required /></label><label>Class of interest<select name="studentClass" defaultValue="" required><option value="" disabled>Select a class</option><option>Pre-KG</option><option>LKG</option><option>UKG</option>{Array.from({ length: 12 }, (_, i) => <option key={i}>Class {i + 1}</option>)}</select></label></div>
                <label>How can we help?<textarea name="message" placeholder="Tell us what you’d like to know…" rows={3} required /></label><Button className="form-submit" type="submit">Send an enquiry <ArrowRight aria-hidden="true" /></Button><p className="form-privacy"><ShieldCheck aria-hidden="true" /> We’ll use these details only to follow up on your enquiry.</p>
              </form>}
            </div>
          </div>
          <div className="map-wrap page-width reveal"><iframe title="Map showing Ayikudi, Manachanallur, Trichy" src="https://maps.google.com/maps?q=Ayikudi%2C%20Manachanallur%2C%20Trichy%20621105&t=&z=12&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="map-label" href="https://maps.google.com/?q=Ayikudi,+Manachanallur,+Trichy+621105" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span><strong>Find Heritage Academy</strong><small>Ayikudi Village, Trichy</small></span><ArrowRight aria-hidden="true" /></a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-main page-width"><div className="footer-brand"><a className="brand brand-footer" href="#home"><img src={photos.crest} alt="Heritage Academy crest" loading="lazy" /><span className="brand-name">Heritage Academy<span>Matriculation School · Trichy</span></span></a><p>Rooted in care. Inspired by possibility. A place where every child can grow.</p><a className="footer-mail" href="mailto:maniheritagehead@gmail.com"><Mail aria-hidden="true" />maniheritagehead@gmail.com</a></div><div className="footer-links"><strong>Explore</strong><div>{links.slice(0, 5).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div></div><div className="footer-links"><strong>Get in touch</strong><div><a href="tel:+919578709910">+91 95787 09910</a><a href="mailto:maniheritagehead@gmail.com">Email the school</a><a href="#contact">Ayikudi Village, Manachanallur (Tk), Trichy – 621 105, Tamil Nadu</a></div></div><a className="back-top" href="#home" aria-label="Back to top"><ArrowUp aria-hidden="true" /></a></div><div className="footer-bottom page-width"><span>© 2026 Heritage Academy Matriculation School. All rights reserved.</span><span>Made for curious minds, in Ayikudi, Trichy.</span></div></footer>

      <a className="whatsapp-float" href="https://wa.me/919578709910" target="_blank" rel="noreferrer" aria-label="Message Heritage Academy on WhatsApp"><MessageCircle aria-hidden="true" /><span>Let’s talk</span></a>
      <a className="mobile-call-float" href="tel:+919578709910" aria-label="Call Heritage Academy"><Phone aria-hidden="true" /></a>

      {selectedPhoto && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedPhoto.title} onClick={() => setSelectedPhoto(null)}><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><Button variant="ghost" size="icon" className="lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Close photo"><X /></Button><img src={selectedPhoto.src} alt={selectedPhoto.alt} /><div><span>{selectedPhoto.label}</span><strong>{selectedPhoto.title}</strong></div></div></div>}
    </div>
  );
}