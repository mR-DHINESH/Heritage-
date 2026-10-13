import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as BusFront, D as ArrowRight, E as ArrowUp, O as ArrowDown, S as Check, T as Award, _ as FlaskConical, a as Sparkles, b as ChevronRight, c as Phone, d as Menu, f as MapPin, g as GraduationCap, h as Heart, i as Star, l as Microscope, m as LibraryBig, n as UsersRound, o as ShieldCheck, p as Mail, r as Trophy, s as Quote, t as X, u as MessageCircle, v as Computer, w as BookOpen, x as ChevronLeft, y as Clock3 } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-hRqkA-VW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var photos = {
	crest: "/images/crest.jpeg",
	hero: "/images/hero.jpeg",
	classroom: "/images/classroom.jpeg",
	community: "/images/community.jpeg",
	about: "/images/about.jpeg",
	graduation: "/images/graduation.jpeg",
	schoolBus: "/images/school-bus.jpeg",
	outdoorPlay: "/images/outdoor-play.jpeg",
	schoolEvent: "/images/school-event.jpeg"
};
var links = [
	["Home", "home"],
	["Our school", "about"],
	["Academics", "academics"],
	["Campus life", "facilities"],
	["Gallery", "gallery"],
	["Admissions", "admissions"],
	["Contact", "contact"]
];
var values = [
	{
		icon: Award,
		title: "Experienced faculty",
		detail: "Dedicated guidance at every stage"
	},
	{
		icon: ShieldCheck,
		title: "A safe campus",
		detail: "A welcoming place to learn and grow"
	},
	{
		icon: Computer,
		title: "Smart learning",
		detail: "Curiosity encouraged in every class"
	},
	{
		icon: Heart,
		title: "Whole-child growth",
		detail: "Character and confidence, together"
	}
];
var academics = [
	{
		icon: Sparkles,
		number: "01",
		title: "Primary school",
		years: "The early years",
		description: "A warm, encouraging start where young learners build confidence, curiosity and strong foundations."
	},
	{
		icon: BookOpen,
		number: "02",
		title: "Middle school",
		years: "Growing independence",
		description: "A wider world of ideas helps students develop their voice, their interests and a love of discovery."
	},
	{
		icon: GraduationCap,
		number: "03",
		title: "High school",
		years: "Ready for what’s next",
		description: "Focused teaching and steady guidance help every learner take their next steps with purpose."
	}
];
var facilities = [
	{
		icon: Computer,
		title: "Smart classrooms",
		detail: "Engaging lessons in welcoming learning spaces."
	},
	{
		icon: FlaskConical,
		title: "Science learning",
		detail: "Space to question, investigate and experiment."
	},
	{
		icon: Microscope,
		title: "Computer learning",
		detail: "Practical experiences for a changing world."
	},
	{
		icon: LibraryBig,
		title: "Library",
		detail: "A quiet corner for stories, study and discovery."
	},
	{
		icon: Trophy,
		title: "Sports & play",
		detail: "Room to move, play as a team and thrive."
	},
	{
		icon: BusFront,
		title: "School transport",
		detail: "School bus transport for the student community."
	},
	{
		icon: ShieldCheck,
		title: "A caring campus",
		detail: "A supportive atmosphere for children to flourish."
	},
	{
		icon: UsersRound,
		title: "Activities & arts",
		detail: "Creative expression and shared experiences."
	}
];
var gallery = [
	{
		src: photos.graduation,
		alt: "Heritage Academy young graduates with their teachers on stage",
		title: "Celebrating every milestone",
		label: "A proud day"
	},
	{
		src: photos.hero,
		alt: "The entrance to Heritage Academy Matriculation School",
		title: "A place to belong",
		label: "Our campus"
	},
	{
		src: photos.classroom,
		alt: "Students taking part in an interactive classroom lesson",
		title: "Learning together",
		label: "In the classroom"
	},
	{
		src: photos.schoolEvent,
		alt: "Students and staff gathered for a school celebration",
		title: "A community of learners",
		label: "School life"
	},
	{
		src: photos.schoolBus,
		alt: "Heritage Academy Matriculation School transport bus",
		title: "On the way to school",
		label: "Student transport"
	},
	{
		src: photos.outdoorPlay,
		alt: "Students enjoying outdoor games on the school grounds",
		title: "Room to play and grow",
		label: "Campus life"
	}
];
var testimonials = [
	{
		quote: "We are grateful for the kindness and encouragement our child receives. Every day brings something new to learn.",
		name: "A parent from the Heritage community",
		className: "Parent perspective"
	},
	{
		quote: "It means so much to see our child grow in confidence and feel at home in the classroom.",
		name: "A parent from the Heritage community",
		className: "Parent perspective"
	},
	{
		quote: "The teachers make learning feel personal. We appreciate the care they bring to every step.",
		name: "A parent from the Heritage community",
		className: "Parent perspective"
	}
];
var stats = [
	{
		value: 15,
		suffix: "+",
		label: "Years of learning"
	},
	{
		value: 500,
		suffix: "+",
		label: "Young learners"
	},
	{
		value: 32,
		suffix: "+",
		label: "Caring educators"
	},
	{
		value: 100,
		suffix: "%",
		label: "Room to grow"
	}
];
function HeritageAcademyPage() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [activeSection, setActiveSection] = (0, import_react.useState)("home");
	const [selectedPhoto, setSelectedPhoto] = (0, import_react.useState)(null);
	const [testimonial, setTestimonial] = (0, import_react.useState)(0);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [numbers, setNumbers] = (0, import_react.useState)([
		0,
		0,
		0,
		0
	]);
	const formRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.add("motion-ready");
		const updateScroll = () => {
			const scrollable = document.documentElement.scrollHeight - window.innerHeight;
			setScrolled(window.scrollY > 24);
			setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
		};
		updateScroll();
		window.addEventListener("scroll", updateScroll, { passive: true });
		const sections = links.map(([, id]) => document.getElementById(id)).filter((section) => section !== null);
		const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) setActiveSection(entry.target.id);
		}), { rootMargin: "-26% 0px -62% 0px" });
		sections.forEach((section) => sectionObserver.observe(section));
		const revealObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		}), { threshold: .12 });
		document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
		const statElement = document.querySelector(".stats-grid");
		let statFrame = 0;
		let statObserver;
		if (statElement) {
			statObserver = new IntersectionObserver(([entry]) => {
				if (!entry?.isIntersecting) return;
				const start = performance.now();
				const duration = 1300;
				const animate = (now) => {
					const t = Math.min((now - start) / duration, 1);
					const eased = 1 - (1 - t) ** 3;
					setNumbers(stats.map(({ value }) => Math.round(value * eased)));
					if (t < 1) statFrame = requestAnimationFrame(animate);
				};
				statFrame = requestAnimationFrame(animate);
				statObserver?.disconnect();
			}, { threshold: .3 });
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
	(0, import_react.useEffect)(() => {
		if (selectedPhoto === null) return;
		const closeOnEscape = (event) => {
			if (event.key === "Escape") setSelectedPhoto(null);
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, [selectedPhoto]);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setTestimonial((current) => (current + 1) % testimonials.length), 6500);
		return () => window.clearInterval(timer);
	}, []);
	const goToTestimonial = (direction) => {
		setTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		formRef.current?.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "school-site",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reading-progress",
				style: { transform: `scaleX(${progress})` },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: `site-header${scrolled ? " is-scrolled" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "header-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "brand",
							href: "#home",
							"aria-label": "Heritage Academy Matriculation School home",
							onClick: () => setMobileOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photos.crest,
								alt: "Heritage Academy crest"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "brand-name",
								children: ["Heritage Academy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Matriculation School · Trichy" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "desktop-nav",
							"aria-label": "Main navigation",
							children: links.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: activeSection === id ? "nav-link active" : "nav-link",
								href: `#${id}`,
								children: label
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "header-cta",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#admissions",
								children: ["Admissions open ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "menu-toggle",
							"aria-label": mobileOpen ? "Close menu" : "Open menu",
							"aria-expanded": mobileOpen,
							onClick: () => setMobileOpen((open) => !open),
							children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mobile-nav",
					"aria-label": "Mobile navigation",
					children: [links.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${id}`,
						onClick: () => setMobileOpen(false),
						children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
					}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "mobile-nav-cta",
						href: "#admissions",
						onClick: () => setMobileOpen(false),
						children: ["Admissions open ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					id: "home",
					"aria-labelledby": "hero-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "hero-photo",
							src: photos.hero,
							alt: "Heritage Academy Matriculation School campus",
							fetchPriority: "high"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-content page-width",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-eyebrow",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow-mark" }), " A place to learn, belong & become"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										id: "hero-title",
										children: [
											"Nurturing minds.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Building character.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shaping futures." })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rooted in care. Inspired by possibility. Discover a welcoming matriculation school for your child in Ayikudi, Trichy." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-actions",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											className: "button-gold button-large",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#admissions",
												children: ["Explore admissions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											className: "hero-call",
											href: "tel:+919578709910",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "call-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" })
											}), "Talk to our school"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-caption",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "caption-line" }), " Ayikudi Village · Manachanallur · Trichy"]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-seal",
								"aria-label": "Admissions open",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "seal-ring",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NOW WELCOMING" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { "aria-hidden": "true" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "NEW LEARNERS" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "HERITAGE ACADEMY" })
									]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "scroll-cue",
							href: "#about",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discover our school" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { "aria-hidden": "true" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-bottom-rule" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "value-band",
					"aria-label": "What makes a Heritage education",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "value-grid page-width",
						children: values.map(({ icon: Icon, title, detail }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "value-item",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "value-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "value-copy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: detail })]
								}),
								index < values.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "value-divider",
									"aria-hidden": "true"
								})
							]
						}, title))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "section section-about",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-layout page-width",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-visual reveal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "about-image-frame",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: photos.about,
											alt: "Children and educators together at Heritage Academy",
											loading: "lazy"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "about-image-note",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "note-icon",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Every child belongs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Learning, with care at its heart" })] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "about-side-label",
										children: "A COMMUNITY THAT CARES"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-copy reveal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "section-kicker",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Welcome to Heritage Academy"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
										"A strong beginning",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"for a ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "bright tomorrow." })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "body-lead",
										children: "At Heritage Academy Matriculation School, we believe that a good education grows from a sense of belonging."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In our Ayikudi community, children are encouraged to ask questions, discover their strengths and treat one another with kindness. Together with families, our teachers make every school day a chance to take another confident step." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "text-link",
										href: "#academics",
										children: ["Get to know our approach ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "principal-signoff",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "signoff-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"With warm regards,",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "A. Manikandan, M.A., B.Ed." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Principal" })
										] })]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stats-strip page-width",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "stats-intro",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our school, in brief" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Growing together, year by year." })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "stats-grid",
								children: stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "stat",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [numbers[index], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stat.suffix })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stat.label })]
								}, stat.label))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "demo-note page-width",
							children: "School highlights shown for this review and awaiting the school's confirmation."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "principal-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "principal-inner page-width reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "principal-portrait",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photos.community,
									alt: "School staff and children gathered together",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "portrait-mark",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { "aria-hidden": "true" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "principal-message",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "section-kicker section-kicker-light",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " A message from our principal"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: "“Education is more than what a child learns. It is the confidence to be curious, the courage to be kind and the joy of growing together.”" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "principal-byline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "A. Manikandan, M.A., B.Ed." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Principal, Heritage Academy Matriculation School" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "principal-ornament",
								"aria-hidden": "true",
								children: "H"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section academics-section",
					id: "academics",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "page-width",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "section-kicker",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Learning at every age"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Every stage, a new",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "possibility." })
							] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "As children grow, so does their world. We meet each stage with thoughtful teaching and encouragement to keep asking, trying and discovering." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "academic-grid",
							children: academics.map(({ icon: Icon, number, title, years, description }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "academic-card reveal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "academic-number",
										children: number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "academic-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "academic-stage",
										children: years
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										"aria-label": `Ask us about ${title}`,
										children: ["Ask us about this stage ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
									})
								]
							}, title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "facilities",
					className: "section facilities-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "page-width",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "section-kicker",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Space to flourish"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"A campus for",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "every kind of curious." })
							] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Learning happens in many ways. From a thoughtful classroom to time outdoors, our school brings room to explore into each school day." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "facilities-grid",
							children: facilities.map(({ icon: Icon, title, detail }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "facility-item reveal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "facility-index",
										children: ["0", index + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "facility-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: detail }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "facility-underline" })
								]
							}, title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "why-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "why-layout page-width",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "why-copy reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "section-kicker section-kicker-light",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " More than the classroom"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
									"Confidence for",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "the whole journey." })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Children thrive when they feel known, supported and free to find their own strengths. That belief shapes our school community, one day at a time." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "why-link",
									href: "#contact",
									children: ["Come meet our community ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "why-points",
							children: [
								{
									icon: Heart,
									title: "Care that feels personal",
									detail: "A welcoming school community where every learner matters."
								},
								{
									icon: BookOpen,
									title: "Learning with purpose",
									detail: "Strong foundations built through curiosity and encouragement."
								},
								{
									icon: UsersRound,
									title: "Growing together",
									detail: "Families and educators working alongside one another."
								}
							].map(({ icon: Icon, title, detail }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "why-point reveal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "why-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
											"0",
											index + 1,
											" / OUR BELIEF"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: title }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: detail })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "why-arrow",
										"aria-hidden": "true"
									})
								]
							}, title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section gallery-section",
					id: "gallery",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "page-width",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery-heading reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "section-kicker",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Little moments, lasting memories"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Life at ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Heritage." })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A glimpse of the people and moments that make our school community feel like home." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery-grid",
							children: gallery.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: `gallery-tile gallery-tile-${index + 1} reveal`,
								type: "button",
								onClick: () => setSelectedPhoto(photo),
								"aria-label": `Open photo: ${photo.title}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photo.src,
									alt: photo.alt,
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "gallery-overlay",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "gallery-label",
											children: photo.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: photo.title }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "gallery-open",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })
										})
									]
								})]
							}, photo.src))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "voices-section",
					"aria-label": "Parent perspectives",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "voices-inner page-width reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "voices-side",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "section-kicker",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " From our school community"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
									"Shared with",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "care." })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every family brings a story to our school." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "voice-controls",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											size: "icon",
											onClick: () => goToTestimonial(-1),
											"aria-label": "Previous parent perspective",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"0",
											testimonial + 1,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
											"0",
											testimonials.length
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											size: "icon",
											onClick: () => goToTestimonial(1),
											"aria-label": "Next parent perspective",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "voice-quote",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
									className: "quote-mark",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "stars",
									"aria-label": "Sample testimonial rating, five out of five",
									children: Array.from({ length: 5 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { "aria-hidden": "true" }, index))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: testimonials[testimonial]?.quote }, testimonial),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "voice-author",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "voice-avatar",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: testimonials[testimonial]?.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [testimonials[testimonial]?.className, " · Sample review"] })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "voice-disclaimer",
									children: "Sample wording for review — replace with approved parent feedback."
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "admissions",
					className: "admissions-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admissions-inner page-width reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admissions-top",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "section-kicker section-kicker-light",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Your next chapter starts here"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
									"Admissions open",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"for a bright beginning."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We’d love to welcome your family to Heritage Academy. Start a conversation with us today." })
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "admissions-crest",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photos.crest,
									alt: "Heritage Academy crest",
									loading: "lazy"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "admissions-bottom",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "admission-steps",
								children: [
									{
										n: "01",
										title: "Enquire",
										icon: MessageCircle
									},
									{
										n: "02",
										title: "Visit",
										icon: MapPin
									},
									{
										n: "03",
										title: "Begin",
										icon: Check
									}
								].map(({ n, title, icon: Icon }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "admission-step",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "step-number",
											children: n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: title }),
										index < 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "step-rule" })
									]
								}, n))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "button-gold button-large",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									children: ["Take the first step ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
								})
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section contact-section",
					id: "contact",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-layout page-width",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-copy reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "section-kicker",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Let’s start a conversation"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
									"We’re here",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "help you begin." })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Questions about the school or admissions? Our team would be happy to hear from you." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "contact-list",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											className: "contact-item",
											href: "tel:+919578709910",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" }) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Give us a call" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "+91 95787 09910" })] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											className: "contact-item",
											href: "mailto:maniheritagehead@gmail.com",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { "aria-hidden": "true" }) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Write to us" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "maniheritagehead@gmail.com" })] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "contact-item",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Come and see us" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
												"Ayikudi Village, Manachanallur (Tk),",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Trichy – 621 105, Tamil Nadu"
											] })] })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "office-note",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "We look forward to hearing from your family." })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "enquiry-wrap reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "form-heading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "form-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "section-kicker",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " An enquiry for our team"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Tell us a little about your family." })] })]
							}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "form-success",
								role: "status",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": "true" }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Thank you for reaching out." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your message is ready. Please contact the school directly by phone or email so our team can respond." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										onClick: () => setSubmitted(false),
										children: "Send another enquiry"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								ref: formRef,
								className: "enquiry-form",
								onSubmit: handleSubmit,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Parent / guardian name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "parentName",
										type: "text",
										placeholder: "Your name",
										autoComplete: "name",
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "form-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Phone number", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "phone",
											type: "tel",
											placeholder: "Your phone number",
											autoComplete: "tel",
											pattern: "[+0-9 ()-]{8,18}",
											title: "Enter a valid phone number",
											required: true
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Class of interest", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "studentClass",
											defaultValue: "",
											required: true,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													disabled: true,
													children: "Select a class"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pre-KG" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "LKG" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "UKG" }),
												Array.from({ length: 12 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", { children: ["Class ", i + 1] }, i))
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["How can we help?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										placeholder: "Tell us what you’d like to know…",
										rows: 3,
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										className: "form-submit",
										type: "submit",
										children: ["Send an enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "form-privacy",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { "aria-hidden": "true" }), " We’ll use these details only to follow up on your enquiry."]
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "map-wrap page-width reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Map showing Ayikudi, Manachanallur, Trichy",
							src: "https://maps.google.com/maps?q=Ayikudi%2C%20Manachanallur%2C%20Trichy%20621105&t=&z=12&ie=UTF8&iwloc=&output=embed",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "map-label",
							href: "https://maps.google.com/?q=Ayikudi,+Manachanallur,+Trichy+621105",
							target: "_blank",
							rel: "noreferrer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Find Heritage Academy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Ayikudi Village, Trichy" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })
							]
						})]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "site-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-main page-width",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "brand brand-footer",
									href: "#home",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: photos.crest,
										alt: "Heritage Academy crest",
										loading: "lazy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "brand-name",
										children: ["Heritage Academy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Matriculation School · Trichy" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rooted in care. Inspired by possibility. A place where every child can grow." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "footer-mail",
									href: "mailto:maniheritagehead@gmail.com",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { "aria-hidden": "true" }), "maniheritagehead@gmail.com"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-links",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Explore" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: links.slice(0, 5).map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${id}`,
								children: label
							}, id)) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-links",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Get in touch" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919578709910",
									children: "+91 95787 09910"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:maniheritagehead@gmail.com",
									children: "Email the school"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									children: "Ayikudi Village, Manachanallur (Tk), Trichy – 621 105, Tamil Nadu"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "back-top",
							href: "#home",
							"aria-label": "Back to top",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { "aria-hidden": "true" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-bottom page-width",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Heritage Academy Matriculation School. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Made for curious minds, in Ayikudi, Trichy." })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "whatsapp-float",
				href: "https://wa.me/919578709910",
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Message Heritage Academy on WhatsApp",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Let’s talk" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "mobile-call-float",
				href: "tel:+919578709910",
				"aria-label": "Call Heritage Academy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" })
			}),
			selectedPhoto && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lightbox",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": selectedPhoto.title,
				onClick: () => setSelectedPhoto(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lightbox-content",
					onClick: (event) => event.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lightbox-close",
							onClick: () => setSelectedPhoto(null),
							"aria-label": "Close photo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: selectedPhoto.src,
							alt: selectedPhoto.alt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedPhoto.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: selectedPhoto.title })] })
					]
				})
			})
		]
	});
}
//#endregion
export { HeritageAcademyPage as component };
