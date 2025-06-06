document.addEventListener("DOMContentLoaded", () => {
    const circleMenu = document.querySelector(".circle-menu");
    const centerIcon = circleMenu.querySelector(".center-icon");
    const menuItems = circleMenu.querySelectorAll(".menu-item");
    const bgParticles = document.querySelector(".bg-particles");

    function createBackgroundParticles() {
        // for (let i = 0; i < 50; i++) {
        //     const particle = document.createElement("div");
        //     particle.className = "particle";
        //     particle.style.left = Math.random() * 100 + "%";
        //     particle.style.top = Math.random() * 100 + "%";
        //     particle.style.animationDelay = Math.random() * 6 + "s";
        //     particle.style.animationDuration = (Math.random() * 3 + 3) + "s";
        //     bgParticles.appendChild(particle);
        // }
    }

    createBackgroundParticles();


    const numItems = menuItems.length;
    const radius = 140;
    let menuVisible = false;

    // Initialize menu items
    menuItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = `translate(-50%, -50%) scale(0)`;
        item.style.pointerEvents = "none";
    });

    centerIcon.addEventListener("click", () => {
        menuVisible = !menuVisible;

        createSparkles(centerIcon);

        if (menuVisible) {
            menuItems.forEach((item, i) => {
                const angle = (360 / numItems) * i - 90;
                const rad = angle * (Math.PI / 180);
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);

                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
                    item.style.pointerEvents = "auto";
                    item.classList.add("glow");

                    setTimeout(() => {
                        item.classList.remove("glow");
                    }, 1000);
                }, i * 100);
            });
        } else {
            menuItems.forEach((item, i) => {
                setTimeout(() => {
                    item.style.opacity = "0";
                    item.style.transform = `translate(-50%, -50%) scale(0)`;
                    item.style.pointerEvents = "none";
                }, i * 50);
            });
        }
    });

    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            createRipple(e, item);

            createSparkles(item);

            const link = item.querySelector("a");
            if (link && link.href) {
                setTimeout(() => {
                    window.open(link.href, "_blank");
                }, 400);
            }
        });

        item.addEventListener("mouseenter", () => {
            createMiniSparkles(item);
        });
    });

    function createRipple(event, element) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = size + "px";

        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        element.appendChild(circle);

        circle.addEventListener("animationend", () => {
            circle.remove();
        });
    }

    function createSparkles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 8; i++) {
            const sparkle = document.createElement("div");
            sparkle.className = "sparkle";

            const angle = (360 / 8) * i;
            const distance = 50 + Math.random() * 30;
            const x = centerX + Math.cos(angle * Math.PI / 180) * distance;
            const y = centerY + Math.sin(angle * Math.PI / 180) * distance;

            sparkle.style.left = x + "px";
            sparkle.style.top = y + "px";
            sparkle.style.animationDelay = Math.random() * 0.5 + "s";

            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }

    function createMiniSparkles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 3; i++) {
            const sparkle = document.createElement("div");
            sparkle.className = "sparkle";
            sparkle.style.width = "2px";
            sparkle.style.height = "2px";

            const x = centerX + (Math.random() - 0.5) * 60;
            const y = centerY + (Math.random() - 0.5) * 60;

            sparkle.style.left = x + "px";
            sparkle.style.top = y + "px";

            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }

    // document.addEventListener("mousemove", (e) => {
    //     const mouseX = e.clientX / window.innerWidth;
    //     const mouseY = e.clientY / window.innerHeight;
    //
    //     circleMenu.style.transform = `translate(${mouseX * 10 - 5}px, ${mouseY * 10 - 5}px) scale(1)`;
    // });
});


/**
 document.addEventListener("DOMContentLoaded", () => {
    const circleMenu = document.querySelector(".circle-menu");
    const centerIcon = circleMenu.querySelector(".center-icon");
    const menuItems = circleMenu.querySelectorAll(".menu-item");

    const numItems = menuItems.length;
    const radius = 100;

    menuItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = `translate(-50%, -50%) scale(0)`;
        item.style.pointerEvents = "none";
    });

    let menuVisible = false;

    centerIcon.addEventListener("click", () => {
        menuVisible = !menuVisible;

        if (menuVisible) {
            menuItems.forEach((item, i) => {
                const angle = (360 / numItems) * i;
                const rad = angle * (Math.PI / 180);
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);

                item.style.opacity = "1";
                item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
                item.style.pointerEvents = "auto";
            });
        } else {
            menuItems.forEach(item => {
                item.style.opacity = "0";
                item.style.transform = `translate(-50%, -50%) scale(0)`;
                item.style.pointerEvents = "none";
            });
        }
    });

    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // prevent immediate navigation for ripple effect
            createRipple(e, item);
            const link = item.querySelector("a");
            if (link && link.href) {
                setTimeout(() => {
                    window.open(link.href, "_blank");
                }, 300);
            }
        });
    });

    function createRipple(event, element) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = size + "px";

        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        element.appendChild(circle);

        circle.addEventListener("animationend", () => {
            circle.remove();
        });
    }
});
 */