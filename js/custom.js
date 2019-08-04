// custom listeners and inits
let topNav = document.getElementById("top-nav");
let navHome = document.getElementById("nav-home");
let homeButton = document.getElementById("home-button");
let resumeHeader = document.getElementById("resume-header");
let resumeFrame = document.getElementById("resume-frame");
let resumeProgress = document.getElementById("resume-progress");
let resumeDropdown = document.getElementById("resume-dropdown");
let awardHeader = document.getElementById("award-header");
let awardDropdown = document.getElementById("award-dropdown");
let skills = document.getElementById("skill-progresses");
let row_activated = false;
let is_mobile_display = false;

// PROGRESS SKILLS
let progresses = [];
function getProgressOptions(name, color, trailColor) {
    return {
        color: color,
        trailColor: trailColor,
        strokeWidth: 20,
        duration: 1000,
        easing: 'easeInOut',
        text: {
            value: name,
            style: {
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                fontSize: '1.75em',
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            }
        }
    }
}

function addProgress(id, options, percent) {
    new ProgressBar.Circle(`#${id}`, getProgressOptions(...options));
    const progress = document.getElementById(id);
    const progressHighlight = progress.children[0].children[1];
    progresses.push({
        elem: progressHighlight,
        percent: percent
    });
}

function activateProgresses() {
    for (const progress of progresses) {
        progress.elem.style.transition = 'stroke-dashoffset ease-in-out 750ms';
        progress.elem.style.strokeDashoffset = `${(1 - progress.percent) * 251.363}`;
    }
}

addProgress('progressJava', ['Java', 'rgb(4, 83, 170)', 'rgba(4, 83, 170, 0.2)'], 0.925);
addProgress('progressJavascript', ['JS', 'rgb(207, 92, 56)', 'rgba(207, 92, 56, 0.2)'], 0.9);
addProgress('progressHTML', ['HTML', 'rgb(239, 162, 50)', 'rgba(239, 162, 50, 0.2)'], 0.9);
addProgress('progressCSS', ['CSS', 'rgb(136, 109, 155)', 'rgba(136, 109, 155, 0.2)'], 0.9);
addProgress('progressPython', ['Python', 'rgb(75, 152, 90)', 'rgba(75, 152, 90, 0.2)'], 0.85);
addProgress('progressScala', ['Scala', 'rgb(164, 222, 44)', 'rgba(164, 222, 44, 0.2)'], 0.65);
addProgress('progressCplusplus', ['C++', 'rgb(113, 128, 205)', 'rgba(113, 128, 205, 0.2)'], 0.55);
addProgress('progressC', ['C', 'rgb(92, 193, 176)', 'rgba(92, 193, 176, 0.2)'], 0.5);

/*
 * LISTENERS
 */
function scroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollBot = scrollTop + windowHeight;
    if (scrollTop > 10) {
        if (!topNav.classList["nav-solid"]) {
            topNav.classList.remove("nav-transparent");
            topNav.classList.add("nav-solid");
        }
    } else {
        if (!topNav.classList["nav-transparent"]) {
            topNav.classList.remove("nav-solid");
            topNav.classList.add("nav-transparent");
        }
    }

    if (!row_activated) {
        if (scrollBot > skills.offsetTop && scrollTop < skills.offsetTop + skills.offsetHeight) {
            activateProgresses();
            row_activated = true;
        }
    }

    if (typeIt) {
        if(!typeIt.isFrozen && scrollTop >= windowHeight) {
            typeIt.freeze()
        } else if (typeIt.isFrozen && scrollTop < windowHeight) {
            typeIt.unfreeze()
        }
    }
}

const raf = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;
const $window = $(window);
let lastScrollTop = $window.scrollTop();

function loop() {
    const scrollTop = $window.scrollTop();
    if (lastScrollTop === scrollTop) {
        raf(loop);
        return;
    } else {
        lastScrollTop = scrollTop;
        scroll();
        raf(loop);
    }
}

loop();

// Resume Frame Loading
resumeFrame.onload = function () {
    resumeProgress.style.display = "none";
};

if (jQuery.browser.mobile) {
    resumeHeader.classList.remove("collapsible-header");
    resumeHeader.onclick = function () {
        window.location.href = "https://drive.google.com/file/d/1TwbRPB5kwk0cImEVROLfXprZDnHN9ryr/preview?rm=minimal";
    };
} else {
    resumeHeader.onclick = function () {
        if (resumeDropdown.style.width === "100%") {
            resumeFrame.setAttribute("src", "");
            resumeDropdown.style.width = "260px";
            resumeDropdown.style.background = "";
        } else {
            resumeFrame.setAttribute("src", "https://drive.google.com/file/d/1TwbRPB5kwk0cImEVROLfXprZDnHN9ryr/preview?rm=minimal");
            resumeProgress.style.display = "block";
            resumeDropdown.style.width = "100%";
            resumeDropdown.style.background = "#f87e57";
        }
    };
}

// Award Frame Loading
awardHeader.onclick = function () {
    if (awardDropdown.style.width === "100%") {
        awardDropdown.style.width = "250px";
        awardDropdown.style.background = "";
    } else {
        awardDropdown.style.width = "100%";
        awardDropdown.style.background = "#f87e57";
    }
};

navHome.onclick = function () {
    homeButton.click();
};

// Resizing Window Listener
window.onresize = function () {
    const windowWidth = window.innerWidth;
    if((is_mobile_display && windowWidth >= 750) || (!is_mobile_display && windowWidth < 750)) {
        let figures = [];
        figures.push(document.getElementById('checkers-figure'));
        figures.push(document.getElementById('connect4-figure'));
        figures.push(document.getElementById('neural-figure'));
        figures.push(document.getElementById('atari-figure'));
        figures.push(document.getElementById('virus-figure'));
        figures.push(document.getElementById('cube-figure'));

        let modalIds = [];
        modalIds.push('checkers-modal');
        modalIds.push('connect4-modal');
        modalIds.push('neural-modal');
        modalIds.push('atari-modal');
        modalIds.push('virus-modal');
        modalIds.push('cube-modal');

        let links = [];
        links.push("CheckersJS");
        links.push("game-ais");
        links.push("machine-learning");
        links.push("java-games");
        links.push("assembly-virus");
        links.push("WebGL-Draw");

        for (let i = 0; i < figures.length; i++) {
            let anchor1 = figures[i].children[0];
            let anchor2 = figures[i].children[1].children[1];
            if (windowWidth < 750) {
                let modal = M.Modal.getInstance(document.getElementById(modalIds[i]));
                if (modal) {
                    modal.close();
                }

                let link = "https://github.com/AlexPetrusca/" + links[i];
                anchor1.href = link;
                anchor2.href = link;

                anchor1.classList.remove("modal-trigger");
                anchor2.classList.remove("modal-trigger");

                is_mobile_display = true
            } else {
                anchor1.href = "#" + modalIds[i];
                anchor2.href = "#" + modalIds[i];

                anchor1.classList.add("modal-trigger");
                anchor2.classList.add("modal-trigger");

                is_mobile_display = false;
            }
        }
    }
};
window.onresize(null);