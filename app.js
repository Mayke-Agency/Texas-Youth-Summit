const TICKET_URL =
  "https://www.eventbrite.com/e/2026-texas-youth-summit-tickets-1986443174007";
const HOTEL_URL = "https://book.passkey.com/event/51254928/owner/17711/landing";
const SPONSOR_URL = TICKET_URL;

const cdn =
  "https://images.squarespace-cdn.com/content/v1/5e2a1229fe240214a3602681";
const asset = (id, file) => `${cdn}/${id}/${file}`;

const images = {
  hero: asset(
    "af98392a-8a0d-4d09-879c-e883be2163ed",
    "2025+crowd+size.jpg?format=2500w",
  ),
  about: asset(
    "33c91cc4-ecd8-490c-96ac-f7bc764d9534",
    "TYS_Website_AdditionalGraphics-08.jpg?format=1500w",
  ),
  final: asset(
    "57e006c8-ae49-42ba-87ec-d9709e4811b2",
    "TYS_Website_AdditionalGraphics-12.jpg?format=2500w",
  ),
  logo: asset(
    "84ab9314-fb40-4f29-97b2-b1eb5dabd138",
    "TYS+Logo+2.PNG?format=750w",
  ),
  fox: asset(
    "76de15f1-6b97-4f20-bc1a-91f53ee9e289",
    "Fox+News+Logo.png?format=500w",
  ),
  foxNation: asset(
    "c4a809c8-77bf-4cdf-b790-b9661cd2ed11",
    "fox_nation-min_1920x.png?format=500w",
  ),
  newsmax: asset(
    "914ae288-a47d-41d8-80ec-02eb25388f1c",
    "Newsmax_logo_white.png?format=500w",
  ),
  leadership: asset(
    "2127b68f-ce16-4fc1-ba68-966b6eca3e42",
    "Leadership+Institute.jpeg?format=750w",
  ),
  tpusa: asset("fa4290bb-9ec5-4e71-94c3-055c9d87df8b", "tpusa.png?format=750w"),
  lifeFirst: asset(
    "1b7c5d41-26ba-49fa-889a-e915471f9783",
    "life-first.png?format=750w",
  ),
  scripture: asset(
    "fc69d948-50e4-4c25-b83c-d97b2b1e9716",
    "Scripture+Awakening.jpeg?format=750w",
  ),
  everyLife: asset(
    "fd2f412c-8a25-43f9-9ed6-44e54f2e0194",
    "everylife-logo.jpg?format=750w",
  ),
};

const speakers = [
  [
    "Dan Patrick",
    "42nd Lt. Governor of Texas",
    "ec7a3978-f669-4bec-90ff-ef72bbc80892",
    "Headshot.jpeg",
  ],
  [
    "Tulsi Gabbard",
    "Former Director of National Intelligence and Combat Veteran",
    "bd90a3ef-0365-456e-add9-4b006390f918",
    "Screenshot+2026-07-14+at+1.26.49%E2%80%AFPM.png",
  ],
  [
    "Brandon Gill",
    "U.S. Representative, Texas District 26",
    "f7f4dd7a-5568-44a7-991a-dac8a8ecc792",
    "Digital+Media+Portraits.jpg",
  ],
  [
    "Riley Gaines",
    "12-Time NCAA All-American Swimmer and Women's Sports Advocate",
    "c82de728-8310-42a2-abf4-49eb71ea6eb8",
    "Riley+Gaines.jpg",
  ],
  [
    "Nick Shirley",
    "Independent Journalist and YouTuber",
    "8b5b8b82-7dc3-4ffc-b03a-6d2c4c103936",
    "Screenshot+2026-07-29+at+2.38.43%E2%80%AFPM.png",
  ],
  [
    "Christian Collins",
    "President & Founder of Texas Youth Summit",
    "43e9eb6d-faec-4e91-8b81-e35f28a6b611",
    "CC%27s+Headshot.PNG",
  ],
  [
    "Yeonmi Park",
    "North Korean Defector & Human Rights Activist",
    "fcdfd318-060b-4ce2-9de2-2340496035de",
    "Yeonmi%2BPark.jpg.webp",
  ],
  [
    "Chloe Cole",
    "“Detransitioner” & Activist Against Child Gender Modification",
    "64441511-2784-46dc-a520-b89632be9a7e",
    "image6.png",
  ],
  [
    "Alex Clark",
    "Host of Culture Apothecary",
    "a9a88237-dce6-46e8-8ca3-bc39869310f3",
    "alex+Clark.jpg",
  ],
  [
    "Mayes Middleton",
    "Texas State Sen., SD-11 & GOP Nominee for Attorney General",
    "cbb56a52-506c-4a99-9c0b-84e9901ec85e",
    "Mayes+Middleton.png",
  ],
  [
    "Nate Schatzline",
    "Pastor at Mercy Culture & CEO of For Liberty & Justice",
    "503f2aa8-2bdb-4b8f-b966-6b4bac49a06a",
    "Screenshot+2026-06-14+at+8.53.48%E2%80%AFAM.png",
  ],
  [
    "Jaco Booyens",
    "Lead Pastor of Mercy Culture DC and Anti-Human Trafficking Activist",
    "82b89bfc-5937-49d4-8f78-5297d175fd43",
    "Jaco+Booyens.jpg",
  ],
  [
    "David McIntosh",
    "President of Club For Growth",
    "e09e2f25-ac73-4c17-838d-b0182d46201f",
    "David+McinTosh.jpg",
  ],
  [
    "Rob McCoy",
    "“Charlie Kirk’s Pastor” & Co-Founder of TPUSA Faith",
    "9114d160-a739-449b-addb-c27d6e6e250e",
    "Rob+McCoy.jpg",
  ],
  [
    "Kenny Webster",
    "Host of The Pursuit of Happiness",
    "05d522d4-7e78-47a2-8d26-0656e6094c02",
    "Kenny+Webster+Headshot.jpg",
  ],
  [
    "Jon Bonck",
    "GOP Nominee for TX-38",
    "37f1f276-5e29-4144-956a-0df26d31e819",
    "Screenshot+2026-07-12+at+6.39.46%E2%80%AFAM.png",
  ],
  [
    "Jessica Steinmann",
    "GOP Nominee for TX-08",
    "e1497818-05bc-489f-a820-5bea5f129729",
    "Screenshot+2026-07-13+at+9.22.34%E2%80%AFAM.png",
  ],
  [
    "Jace Yarborough",
    "GOP Nominee for TX-32",
    "399fe46b-494e-46de-9453-653e05423020",
    "Jace+Yarborough.webp",
  ],
  [
    "Steve Toth",
    "GOP Nominee for TX-02",
    "41142808-f647-42b5-bb8d-2cb75c74978e",
    "Steve+Toth.jpg",
  ],
  [
    "Dr. Jincy Collins, PT, DPT",
    "Physical Therapist | MAHA Health & Wellness",
    "11c44102-1240-4ca1-922c-2aff1c346568",
    "Jincy+Arhtungal.png",
  ],
  [
    "Adam Lamb",
    "CEO of The One Percent Life",
    "470d2672-47cb-4845-b271-5ef3c294e000",
    "Adam+Lamb+Headshot.jpg",
  ],
  [
    "Sarah Huckabee Sanders",
    "47th Governor of Arkansas · Via video",
    "665fecab-47c7-48cd-b212-972d61a84a34",
    "Governor+Sanders.jpg",
  ],
  [
    "Anna Paulina Luna",
    "U.S. Rep., FL-13 · Via video",
    "97b108a2-a386-4d2b-9340-6377eb03d59d",
    "Rep%2BAna%2BPaulina%2BLuna.jpg",
  ],
].map(([name, title, id, file]) => ({
  name,
  title,
  image: asset(id, `${file}?format=1000w`),
}));

const featuredSpeakers = [speakers[1], speakers[3], speakers[2], speakers[4]];
const remainingSpeakers = speakers.filter((speaker) => !featuredSpeakers.includes(speaker));

const schedule = {
  friday: [
    ["1:00 PM", "VIP Registration Opens"],
    ["2:00 PM", "General Registration Opens"],
    ["3:00 PM", "Leadership Institute Workshop and Training"],
    [
      "5:00 PM",
      "VIP Reception with Riley Gaines, Nick Shirley, and Brandon Gill",
      "Available by invitation or qualifying ticket level",
    ],
    ["6:00-9:40 PM", "Main Program"],
  ],
  saturday: [
    ["7:00 AM", "Doors Open and Check-In"],
    [
      "8:00–9:15 AM",
      "Exclusive Breakfast with Tulsi Gabbard",
      "Separate ticket required. Limited to 20 guests",
    ],
    ["8:00 AM-5:00 PM", "Main Program with scheduled breaks"],
  ],
};

const ticketTiers = [
  {
    name: "Youth & Young Adult General Admission",
    label: "",
    price: "$2",
    note: "Use promo code LONESTARYOUTH",
    button: "GET YOUTH GA TICKETS",
    className: "ticket-youth",
  },
  {
    name: "Adult General Admission",
    label: "",
    price: "$25",
    note: "General admission to the 2026 Texas Youth Summit",
    button: "GET ADULT GA TICKETS",
    className: "",
  },
  {
    name: "Youth & Young Adult VIP",
    label: "",
    price: "$200",
    note: "Includes expedited entry, priority seating, exclusive access to the VIP Reception with Riley Gaines, Nick Shirley, and Brandon Gill, plus additional VIP perks to be announced",
    button: "GET YOUTH VIP TICKETS",
    className: "",
  },
  {
    name: "Adult VIP",
    label: "",
    price: "$300",
    note: "Includes expedited entry, priority seating, and exclusive access to the VIP Reception with Riley Gaines, Nick Shirley, and Brandon Gill",
    button: "GET ADULT VIP TICKETS",
    className: "ticket-dark",
  },
];

const icon = (name) => ({ arrow: "→", plus: "+", close: "×" })[name];
const ticketLink = (label = "Get Tickets", extra = "") =>
  `<a class="button ${extra}" href="${TICKET_URL}" target="_blank" rel="noreferrer">${label} <span aria-hidden="true">${icon("arrow")}</span></a>`;

function speakerCard(speaker, featured = false) {
  return `<article class="speaker ${featured ? "speaker-featured" : ""}">
    <div class="speaker-image"><img src="${speaker.image}" alt="${speaker.name}" loading="lazy" /></div>
    <div class="speaker-copy"><h3>${speaker.name}</h3><p>${speaker.title}</p></div>
  </article>`;
}

function scheduleList(items) {
  return items
    .map(
      ([time, title, detail]) =>
        `<li><time>${time}</time><div><h3>${title}</h3>${detail ? `<p>${detail}</p>` : ""}</div></li>`,
    )
    .join("");
}

function faqItem(question, answer) {
  return `<details><summary>${question}<span aria-hidden="true">${icon("plus")}</span></summary><div class="faq-answer">${answer}</div></details>`;
}

const app = document.querySelector("#app");
app.innerHTML = `
  <header class="site-header" data-header>
    <a class="nav-logo" href="#top" aria-label="Texas Youth Summit home"><img src="./assets/txys-logo.svg" alt="" /></a>
    <button class="nav-toggle" type="button" aria-controls="nav-menu" aria-expanded="false"><span></span><span></span><span class="sr-only">Open menu</span></button>
    <nav id="nav-menu" aria-label="Main navigation">
      <a href="#about">About</a><a href="#speakers">Speakers</a><a href="#schedule">Schedule</a><a href="#tickets">Tickets</a><a href="#hotel">Hotel</a><a href="#partners">Partners</a>
      ${ticketLink("Get Tickets", "nav-ticket")}
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top" style="--hero-image: url('${images.hero}')">
      <div class="hero-noise"></div>
      <div class="hero-inner frame">
        <p class="eyebrow"><span></span> JOIN US FOR THE 2026 TEXAS YOUTH SUMMIT</p>
        <h1>STRENGTHEN YOUR VALUES<br /><em>FIND YOUR COMMUNITY</em><br />LEAD WITH CONFIDENCE</h1>
        <p class="hero-subhead">Spend two days learning from national conservative leaders and connecting with students, families, pastors, and educators from across Texas.</p>
        <div class="hero-bottom">
          <div class="event-place"><strong>OCTOBER 9-10, 2026</strong><span>THE WOODLANDS WATERWAY MARRIOTT</span></div>
          <div class="hero-actions">${ticketLink("GET TICKETS BEFORE PRICES INCREASE")}<a class="text-link" href="#about">Explore the Summit <span>↓</span></a></div>
        </div>
        <div class="hero-urgency"><span>Buy early and save. Ticket prices increase as the Summit approaches</span><i>$25 Adult General Admission · $2 Youth & Young Adult General Admission with code LONESTARYOUTH</i></div>
      </div>
      <div class="hero-index" aria-hidden="true">TXYS <b>26</b></div>
    </section>

    <section class="credibility">
      <div class="frame credibility-grid">
        <div class="attendance"><span data-animated-counter data-counter-end="3500" data-counter-suffix="+">0+</span><p>ATTENDED IN 2025</p></div>
        <div class="largest"><p><strong>20+ 2026 SPEAKERS</strong><br />2 DAYS OF SPEAKERS, TRAINING, AND COMMUNITY</p></div>
        <div class="as-seen"><p>TICKETS FROM $2<br /><strong>BUY EARLY AND SAVE</strong></p></div>
      </div>
    </section>

    <section class="about section" id="about">
      <div class="frame about-grid">
        <div class="about-heading"><p class="eyebrow red"><span></span> About the summit</p><h2>IT'S HARD TO STAND FOR YOUR VALUES WHEN YOU FEEL LIKE YOU'RE STANDING ALONE</h2></div>
        <div class="about-copy"><p>The loudest voices online, in entertainment, and throughout culture often seem to push in the same direction.</p><p>That can leave students, parents, and families wondering whether anyone else sees the world the way they do.</p><p>Texas Youth Summit brings people together for two days of real conversations, trusted leaders, practical training, worship, and community.</p><p>Instead of watching the conversation from the sidelines, attendees become part of it.</p><ul class="benefit-list"><li><b>LISTEN</b>Hear directly from nationally recognized conservative leaders</li><li><b>LEARN</b>Explore faith, freedom, leadership, and the principles behind American exceptionalism</li><li><b>CONNECT</b>Meet students, families, educators, pastors, and community leaders who share your values</li><li><b>LEAD</b>Leave with practical ideas for making a difference in your school, church, workplace, or community</li></ul></div>
        <figure class="about-image"><img src="${images.about}" alt="Texas Youth Summit attendees gathered on stage" loading="lazy" /><figcaption>The Woodlands Waterway Marriott Hotel & Convention Center</figcaption></figure>
      </div>
    </section>

    <section class="video-section section"><div class="frame"><div class="section-heading"><p class="eyebrow red"><span></span> Texas Youth Summit</p><h2>RELIVE THE ENERGY OF TEXAS YOUTH SUMMIT</h2></div><div class="video-frame"><iframe src="https://www.youtube.com/embed/BESyTb2M5NA" title="Relive the Energy of Texas Youth Summit" referrerpolicy="strict-origin-when-cross-origin" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div></section>

    <section class="speakers section" id="speakers">
      <div class="frame">
        <div class="section-heading split-heading"><div><p class="eyebrow"><span></span> On the TXYS stage</p><h2>MEET THE CONSERVATIVE LEADERS TAKING THE STAGE IN 2026</h2></div><p>Hear directly from national leaders in government, sports, journalism, culture, and public life</p></div>
        <p class="mini-label">Featured</p>
        <div class="featured-speakers">${featuredSpeakers
          .map((speaker) => speakerCard(speaker, true))
          .join("")}</div>
        <div class="speaker-grid" id="speaker-lineup">${remainingSpeakers
          .map((speaker) => speakerCard(speaker))
          .join("")}</div>
      </div>
    </section>

    <section class="music-feature" style="--music-image: url('./assets/mcw.jpg')"><div class="music-row"><span class="star">★</span><p><b>Music by</b> Mercy Culture Worship</p><span class="star">★</span></div></section>

    <section class="ticket-banner" style="--banner-image: url('${images.final}')">
      <div class="frame"><p class="eyebrow"><span></span> OCTOBER 9-10, 2026</p><h2>STRENGTHEN YOUR VALUES<br /><em>FIND YOUR COMMUNITY</em><br />LEAD WITH CONFIDENCE</h2><div class="banner-bottom"><p><b>$2 Youth & Young Adult General Admission</b><br />Use code LONESTARYOUTH</p>${ticketLink("GET TICKETS BEFORE PRICES INCREASE")}</div></div>
    </section>

    <section class="schedule section" id="schedule">
      <div class="frame"><div class="section-heading"><p class="eyebrow red"><span></span> Program</p><h2>WHAT HAPPENS AT TEXAS YOUTH SUMMIT</h2></div>
        <div class="schedule-grid">
          <section class="schedule-day"><div class="day-heading"><p>FRIDAY, OCTOBER 9</p><h3>October <b>09</b></h3></div><ol>${scheduleList(schedule.friday)}</ol></section>
          <section class="schedule-day is-red"><div class="day-heading"><p>SATURDAY, OCTOBER 10</p><h3>October <b>10</b></h3></div><ol>${scheduleList(schedule.saturday)}</ol></section>
        </div>
      </div>
    </section>

    <section class="tickets section" id="tickets">
      <div class="frame"><div class="section-heading split-heading"><div><p class="eyebrow"><span></span> BUY EARLY & SAVE!</p><h2>CHOOSE YOUR TICKET</h2></div><p>Current prices increase as the Summit approaches. On-site registration may not be available if tickets sell out</p></div>
        <div class="ticket-grid">${ticketTiers.map((tier) => `<article class="ticket-tier ${tier.className}"><div>${tier.label ? `<p>${tier.label}</p>` : ""}<h3>${tier.name}</h3></div><strong>${tier.price}</strong><p class="tier-note">${tier.note}</p>${ticketLink(tier.button)}</article>`).join("")}</div>
        <article class="breakfast"><div class="breakfast-star">★</div><div><p class="eyebrow red"><span></span> EXCLUSIVE EXPERIENCE</p><h3>BREAKFAST WITH<br /><em>TULSI GABBARD</em></h3><p>$1,000 per guest<br />Limited to 20 guests<br />Saturday, October 10 at 8:00 AM<br />Separate ticket required</p></div><div class="breakfast-cta"><strong>$1,000</strong>${ticketLink("RESERVE YOUR SEAT")}</div></article>
      </div>
    </section>

    <section class="hotel" id="hotel">
      <div class="hotel-photo" style="--hotel-image: url('./assets/woodlands-hotel.avif')"><span>Stay at the center of it all.</span></div>
      <div class="hotel-info"><p class="eyebrow red"><span></span> Official host hotel</p><h2>STAY AT THE OFFICIAL EVENT HOTEL</h2><h3>THE WOODLANDS WATERWAY MARRIOTT</h3><p>Stay where the Summit happens and enjoy convenient access to the convention center, restaurants, shopping, and entertainment along The Woodlands Waterway</p><p class="hotel-rate">Discounted Texas Youth Summit room-block rates currently <br /><b>start at $219 per night</b></p><a class="button button-light" href="${HOTEL_URL}" target="_blank" rel="noreferrer">VIEW THE TXYS ROOM BLOCK <span>→</span></a></div>
    </section>

    <section class="partners section" id="partners"><div class="frame"><div class="section-heading split-heading"><div><p class="eyebrow red"><span></span> Support the work</p><h2>Partner with<br />Texas Youth Summit.</h2></div><div><a class="button" href="${SPONSOR_URL}" target="_blank" rel="noreferrer">Become a sponsor <span aria-hidden="true">→</span></a><p class="partner-copy">Support the mission of identifying, educating, and equipping the next generation of leaders.</p></div></div>
      <div class="partner-logos"><img src="${images.leadership}" alt="Leadership Institute" loading="lazy" /><img src="${images.tpusa}" alt="Turning Point USA" loading="lazy" /><img src="${images.lifeFirst}" alt="Life First" loading="lazy" /><img src="${images.scripture}" alt="Scripture Awakening" loading="lazy" /><img src="${images.everyLife}" alt="EveryLife" loading="lazy" /></div>
    </div></section>

    <section class="faq section" id="info"><div class="frame"><div class="section-heading split-heading"><div><p class="eyebrow red"><span></span> Know before you go</p><h2>FREQUENTLY ASKED QUESTIONS</h2></div></div>
      <div class="faq-list">
        ${faqItem("Who can attend?", "<p>Texas Youth Summit is open to people of all ages, including students, young adults, parents, educators, pastors, and community leaders. Attendees under 16 must attend with an adult</p>")}
        ${faqItem("Is youth admission really $2?", "<p>Yes. Youth & Young Adult General Admission is $2 when promo code LONESTARYOUTH is applied during registration</p>")}
        ${faqItem("Will tickets be available at the door?", "<p>On-site registration may not be available if tickets sell out. Purchase before traveling to the venue</p>")}
        ${faqItem("Are meals included?", "<p>Saturday lunch concessions will be available for purchase through the hotel. The exclusive breakfast with Tulsi Gabbard requires a separate ticket</p>")}
        ${faqItem("What is the refund policy?", "<p>No refunds will be issued after October 2, 2026. Approved refunds are processed within seven days</p>")}
        ${faqItem("What identification is required?", "<p>All attendees need a valid government-issued ID at check-in. Students should bring a valid student ID to receive the student rate. Elementary students and younger are exempt from the student ID requirement</p>")}
      </div>
    </div></section>

    <section class="final-cta" style="--final-image: url('${images.hero}')"><div class="frame"><p class="eyebrow"><span></span> OCTOBER 9-10, 2026</p><h2>JOIN US AT THE 2026 TEXAS YOUTH SUMMIT</h2><p>Strengthen your values, find your community, and leave ready to lead with confidence</p><p>Join students, families, educators, pastors, and leaders for two days at The Woodlands Waterway Marriott</p><p>Lock in today's ticket price before prices increase</p><div class="final-info"><strong>$25 Adult General Admission<br />$2 Youth & Young Adult General Admission with code LONESTARYOUTH</strong>${ticketLink("GET TICKETS NOW")}</div></div></section>
  </main>

  <footer><div class="frame"><div class="footer-top"><a class="footer-logo" href="#top" aria-label="Texas Youth Summit home"><img src="./assets/txys-logo.svg" alt="" /></a><div><h2>Don’t miss a Texas<br />Youth Summit event.</h2><form class="newsletter" data-newsletter><label class="sr-only" for="email">Email address</label><input id="email" type="email" name="email" placeholder="Email address" required /><button type="submit">Sign up <span>→</span></button></form><p class="newsletter-note">We respect your privacy. Email signup is not configured on this site yet.</p></div></div><div class="footer-bottom"><p>Texas Youth Summit is hosted by Texas Youth Foundation, a 501(c)(3) nonprofit, and co-hosted by Texas Youth Action, a 501(c)(4) nonprofit. Certain civic engagement and public policy programming is presented by Texas Youth Action.</p><nav aria-label="Footer navigation"><a href="#about">About</a><a href="#partners">Support</a><a href="https://www.texasyouthsummit.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></nav><p>© 2026 Texas Youth Summit</p></div></div></footer>
  <a class="mobile-ticket" href="${TICKET_URL}" target="_blank" rel="noreferrer">Get tickets <span>→</span></a>
`;

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav-menu");
const closeNav = () => {
  navToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
};
navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
});
nav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeNav));
window.addEventListener(
  "scroll",
  () => header.classList.toggle("is-scrolled", window.scrollY > 24),
  { passive: true },
);
document
  .querySelector("[data-newsletter]")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector(".newsletter-note").textContent =
      "Email notifications are not configured on this site yet.";
  });

function initializeAnimatedCounter(counter) {
  const end = Number(counter.dataset.counterEnd);
  const suffix = counter.dataset.counterSuffix ?? "";
  const render = (value) => {
    counter.textContent = `${value.toLocaleString("en-US")}${suffix}`;
  };
  const finish = () => render(end);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    finish();
    return;
  }

  const run = () => {
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      render(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else finish();
    };
    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    run();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      run();
    },
    { threshold: 0.25 },
  );
  observer.observe(counter);
}

document
  .querySelectorAll("[data-animated-counter]")
  .forEach(initializeAnimatedCounter);

function initializeMobileTicketVisibility() {
  const mobileTicket = document.querySelector(".mobile-ticket");
  const heroTicket = document.querySelector(".hero-actions .button");
  const mobileViewport = window.matchMedia("(max-width: 620px)");

  if (!("IntersectionObserver" in window)) {
    mobileTicket.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => mobileTicket.classList.toggle("is-visible", !entry.isIntersecting),
    { threshold: 0 },
  );

  const update = () => {
    if (mobileViewport.matches) observer.observe(heroTicket);
    else {
      observer.unobserve(heroTicket);
      mobileTicket.classList.remove("is-visible");
    }
  };

  mobileViewport.addEventListener("change", update);
  update();
}

initializeMobileTicketVisibility();

function initializeBenefitReveals() {
  const benefits = document.querySelectorAll(".benefit-list li");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    benefits.forEach((benefit) => benefit.classList.add("is-visible"));
    return;
  }

  benefits.forEach((benefit) => benefit.classList.add("benefit-reveal"));
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      benefits.forEach((benefit, index) => {
        window.setTimeout(() => benefit.classList.add("is-visible"), index * 140);
      });
      observer.disconnect();
    },
    { threshold: 0.35 },
  );
  observer.observe(document.querySelector(".benefit-list"));
}

initializeBenefitReveals();
