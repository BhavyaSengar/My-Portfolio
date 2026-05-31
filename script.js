/* =========================
   TYPING ANIMATION
========================= */

const roles = [
    "Web Developer",
    "App Developer",
    "Computer Science Engineer",
    "Problem Solver",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect() {

    const typing =
        document.getElementById("typing");

    if (!typing) return;

    if (charIndex < roles[roleIndex].length) {

        typing.textContent +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(() => {

            typing.textContent = "";

            charIndex = 0;

            roleIndex =
                (roleIndex + 1) % roles.length;

            typeEffect();

        }, 2000);

    }

}

typeEffect();

/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

    } else {

        localStorage.setItem(
            "theme",
            "light"
        );

        themeToggle.innerHTML =
            '<i class="fas fa-moon"></i>';

    }

});

/* =========================
   SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {

    let scroll =
        document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (scroll / height) * 100;

    document.getElementById(
        "progress-bar"
    ).style.width =
        progress + "%";

});

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    const counter =
                        entry.target;

                    const target =
                        +counter.dataset.target;

                    let count = 0;

                    const update = () => {

                        const increment =
                            target / 100;

                        if (
                            count < target
                        ) {

                            count += increment;

                            counter.innerText =
                                Math.ceil(count);

                            requestAnimationFrame(
                                update
                            );

                        } else {

                            counter.innerText =
                                target;

                        }

                    };

                    update();

                    counterObserver.unobserve(
                        counter
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );

counters.forEach((counter) => {

    counterObserver.observe(counter);

});

/* =========================
   PROJECT SEARCH
========================= */

const projectSearch =
    document.getElementById(
        "projectSearch"
    );

if (projectSearch) {

    projectSearch.addEventListener(
        "keyup",
        () => {

            const value =
                projectSearch.value.toLowerCase();

            document
                .querySelectorAll(
                    ".project-card"
                )
                .forEach((card) => {

                    card.style.display =
                        card.innerText
                            .toLowerCase()
                            .includes(value)
                            ? "block"
                            : "none";

                });

        }
    );

}

/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle(
        "active"
    );

    if (
        navLinks.classList.contains(
            "active"
        )
    ) {

        menuBtn.innerHTML =
            '<i class="fas fa-times"></i>';

    } else {

        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

    }

});

document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "active"
                );

                menuBtn.innerHTML =
                    '<i class="fas fa-bars"></i>';

            }
        );

    });

/* =========================
   REVEAL ON SCROLL
========================= */

const hiddenElements =
    document.querySelectorAll(
        "section, .project-card, .skill-box, .service-card, .profile-card, .achievement-card"
    );

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

});

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );

hiddenElements.forEach((el) => {

    revealObserver.observe(el);

});

/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn =
    document.getElementById(
        "topBtn"
    );

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            topBtn.style.display =
                "flex";

        } else {

            topBtn.style.display =
                "none";

        }

    }
);

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);

/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            const name =
                contactForm
                    .querySelector(
                        'input[type="text"]'
                    )
                    .value
                    .trim();

            const email =
                contactForm
                    .querySelector(
                        'input[type="email"]'
                    )
                    .value
                    .trim();

            const message =
                contactForm
                    .querySelector(
                        "textarea"
                    )
                    .value
                    .trim();

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "Please fill all fields."
                );

                return;

            }

            alert(
                "Message Sent Successfully!"
            );

            contactForm.reset();

        }
    );

}

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll(
        "section"
    );

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop - 120;

                const sectionHeight =
                    section.clientHeight;

                if (
                    pageYOffset >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );

        navItems.forEach((link) => {

            link.classList.remove(
                "active-link"
            );

            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + current
            ) {

                link.classList.add(
                    "active-link"
                );

            }

        });

    }
);

/* =========================
   CERTIFICATE IMAGE ZOOM
========================= */

document
    .querySelectorAll(
        ".certificate-grid img"
    )
    .forEach((img) => {

        img.addEventListener(
            "click",
            () => {

                window.open(
                    img.src,
                    "_blank"
                );

            }
        );

    });

/* =========================
   HERO FLOAT EFFECT
========================= */

document.addEventListener(
    "mousemove",
    (e) => {

        const blobs =
            document.querySelectorAll(
                ".bg-blob"
            );

        blobs.forEach((blob) => {

            const x =
                e.clientX / 100;

            const y =
                e.clientY / 100;

            blob.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }
);

/* =========================
   PAGE LOADED
========================= */

window.addEventListener(
    "load",
    () => {

        document.body.style.opacity =
            "1";

    }
);