// custom listeners and inits

jQuery(document).ready(function ($) {
    let topNav = document.getElementById("top-nav");
    let navHome = document.getElementById("nav-home");
    let homeButton = document.getElementById("home-button");
    let resumeHeader = document.getElementById("resume-header");
    let resumeFrame = document.getElementById("resume-frame");
    let resumeProgress = document.getElementById("resume-progress");
    let resumeDropdown = document.getElementById("resume-dropdown");
    let awardHeader = document.getElementById("award-header");
    let awardDropdown = document.getElementById("award-dropdown");
    let row = document.getElementById("skillsRow");
    let row_activated = false;

    let progressOptions = {
        color: 'rgb(4, 83, 170)',
        trailColor: 'rgba(4, 83, 170, 0.2)',
        strokeWidth: 20,
        duration: 1000,
        easing: 'easeInOut',
        text: {
            value: 'Java',
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
        },
        from: {color: 'rgb(4, 83, 170)'},
        to: {color: 'rgb(4, 83, 170)'},
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    };

    // PROGRESS SKILLS
    function activateRow1() {
        progressOptions.text.value = 'Java';
        progressOptions.color = 'rgb(4, 83, 170)';
        progressOptions.trailColor = 'rgba(4, 83, 170, 0.2)';
        progressOptions.to.color = 'rgb(4, 83, 170)';
        progressOptions.from.color = 'rgb(4, 83, 170)';
        new ProgressBar.Circle('#progressJava', progressOptions).animate(0.925);

        progressOptions.text.value = 'HTML';
        progressOptions.color = 'rgb(239, 162, 50)';
        progressOptions.trailColor = 'rgba(239, 162, 50, 0.2)';
        progressOptions.to.color = 'rgb(239, 162, 50)';
        progressOptions.from.color = 'rgb(239, 162, 50)';
        new ProgressBar.Circle('#progressHTML', progressOptions).animate(0.9);

        progressOptions.text.value = 'C++';
        progressOptions.color = 'rgb(113, 128, 205)';
        progressOptions.trailColor = 'rgba(113, 128, 205, 0.2)';
        progressOptions.to.color = 'rgb(113, 128, 205)';
        progressOptions.from.color = 'rgb(113, 128, 205)';
        new ProgressBar.Circle('#progressCplusplus', progressOptions).animate(0.55);

        progressOptions.text.value = 'Python';
        progressOptions.color = 'rgb(75, 152, 90)';
        progressOptions.trailColor = 'rgba(75, 152, 90, 0.2)';
        progressOptions.to.color = 'rgb(75, 152, 90)';
        progressOptions.from.color = 'rgb(75, 152, 90)';
        new ProgressBar.Circle('#progressPython', progressOptions).animate(0.85);

        progressOptions.text.value = 'JS';
        progressOptions.color = 'rgb(207, 92, 56)';
        progressOptions.trailColor = 'rgba(207, 92, 56, 0.2)';
        progressOptions.to.color = 'rgb(207, 92, 56)';
        progressOptions.from.color = 'rgb(207, 92, 56)';
        new ProgressBar.Circle('#progressJavascript', progressOptions).animate(0.9);

        progressOptions.text.value = 'Scala';
        progressOptions.color = 'rgb(164, 222, 44)';
        progressOptions.trailColor = 'rgba(164, 222, 44, 0.2)';
        progressOptions.to.color = 'rgb(164, 222, 44)';
        progressOptions.from.color = 'rgb(164, 222, 44)';
        new ProgressBar.Circle('#progressScala', progressOptions).animate(0.65);

        progressOptions.text.value = 'C';
        progressOptions.color = 'rgb(92, 193, 176)';
        progressOptions.trailColor = 'rgba(92, 193, 176, 0.2)';
        progressOptions.to.color = 'rgb(92, 193, 176)';
        progressOptions.from.color = 'rgb(92, 193, 176)';
        new ProgressBar.Circle('#progressC', progressOptions).animate(0.5);

        progressOptions.text.value = 'CSS';
        progressOptions.color = 'rgb(136, 109, 155)';
        progressOptions.trailColor = 'rgba(136, 109, 155, 0.2)';
        progressOptions.to.color = 'rgb(136, 109, 155)';
        progressOptions.from.color = 'rgb(136, 109, 155)';
        new ProgressBar.Circle('#progressCSS', progressOptions).animate(0.9);
    }

    /*
     * LISTENERS
     */

    window.onscroll = function () {
        let scrollTop = window.scrollY;
        let scrollBot = scrollTop + window.innerHeight;
        if (scrollTop > 10) {
            topNav.classList.remove("nav-transparent");
            topNav.classList.add("nav-solid");
        } else {
            topNav.classList.remove("nav-solid");
            topNav.classList.add("nav-transparent");
        }

        if (!row_activated) {
            if (scrollBot > row.offsetTop && scrollTop < row.offsetTop + row.offsetHeight) {
                activateRow1();
                row_activated = true;
            }
        }
    };
    window.onscroll(null);

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
            awardDropdown.style.width = "230px";
            awardDropdown.style.background = "";
        } else {
            awardDropdown.style.width = "100%";
            awardDropdown.style.background = "#f87e57";
        }
    };

    navHome.onclick = function () {
        homeButton.click();
    };
});
