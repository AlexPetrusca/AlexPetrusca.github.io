let nav = document.getElementById("top-nav");
let row1 = document.getElementById("skillsRow1");
let row2 = document.getElementById("skillsRow2");
let row1_activated = false;
let row2_activated = false;

// PROGRESS SKILLS
function activateRow1() {
    let options = {
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
    new ProgressBar.Circle('#progressJava', options).animate(0.9);

    options.text.value = 'HTML';
    options.color = 'rgb(239, 162, 50)';
    options.trailColor = 'rgba(239, 162, 50, 0.2)';
    options.to.color = 'rgb(239, 162, 50)';
    options.from.color = 'rgb(239, 162, 50)';
    new ProgressBar.Circle('#progressHTML', options).animate(0.9);

    options.text.value = 'C++';
    options.color = 'rgb(113, 128, 205)';
    options.trailColor = 'rgba(113, 128, 205, 0.2)';
    options.to.color = 'rgb(113, 128, 205)';
    options.from.color = 'rgb(113, 128, 205)';
    new ProgressBar.Circle('#progressCplusplus', options).animate(0.4);

    options.text.value = 'Python';
    options.color = 'rgb(75, 152, 90)';
    options.trailColor = 'rgba(75, 152, 90, 0.2)';
    options.to.color = 'rgb(75, 152, 90)';
    options.from.color = 'rgb(75, 152, 90)';
    new ProgressBar.Circle('#progressPython', options).animate(0.2);
}

function activateRow2() {
    let options = {
        color: 'rgb(207, 92, 56)',
        trailColor: 'rgba(207, 92, 56, 0.2)',
        strokeWidth: 20,
        duration: 1000,
        easing: 'easeInOut',
        text: {
            value: 'JS',
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
        from: {color: 'rgb(207, 92, 56)'},
        to: {color: 'rgb(207, 92, 56)'},
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    };
    new ProgressBar.Circle('#progressJavascript', options).animate(0.85);

    options.text.value = 'Scala';
    options.color = 'rgb(164, 222, 44)';
    options.trailColor = 'rgba(164, 222, 44, 0.2)';
    options.to.color = 'rgb(164, 222, 44)';
    options.from.color = 'rgb(164, 222, 44)';
    new ProgressBar.Circle('#progressScala', options).animate(0.4);

    options.text.value = 'C';
    options.color = 'rgb(92, 193, 176)';
    options.trailColor = 'rgba(92, 193, 176, 0.2)';
    options.to.color = 'rgb(92, 193, 176)';
    options.from.color = 'rgb(92, 193, 176)';
    new ProgressBar.Circle('#progressC', options).animate(0.5);

    options.text.value = 'CSS';
    options.color = 'rgb(136, 109, 155)';
    options.trailColor = 'rgba(136, 109, 155, 0.2)';
    options.to.color = 'rgb(136, 109, 155)';
    options.from.color = 'rgb(136, 109, 155)';
    new ProgressBar.Circle('#progressCSS', options).animate(0.85);
}

/*
 * LISTENERS
 */

window.onscroll = function () {
    let scrollTop = window.scrollY;
    let scrollBot = scrollTop + window.innerHeight;
    if (scrollTop > 10) {
        nav.classList.remove("nav-transparent");
        nav.classList.add("nav-solid");
    } else {
        nav.classList.remove("nav-solid");
        nav.classList.add("nav-transparent");
    }

    if (!row1_activated ) {
        if (scrollBot > row1.offsetTop && scrollTop < row1.offsetTop + row1.offsetHeight) {
            activateRow1();
            row1_activated = true;
        }
    }

    if (!row2_activated) {
        if (scrollBot > row2.offsetTop && scrollTop < row2.offsetTop + row2.offsetHeight) {
            activateRow2();
            row2_activated = true;
        }
    }
};
window.onscroll();

document.getElementById("nav-home").onclick = function() {
    document.getElementById("home-button").click();
};

document.getElementById("resume-header").onclick = function () {
    const dropdown = document.getElementById("resume-dropdown");
    if(dropdown.style.width === "80%") {
        dropdown.style.width = "260px";
        dropdown.style.background = "";
    } else {
        dropdown.style.width = "80%";
        dropdown.style.background = "#f87e57";
    }
};

document.getElementById("award-header").onclick = function () {
    const dropdown = document.getElementById("award-dropdown");
    if(dropdown.style.width === "400px") {
        dropdown.style.width = "230px";
        dropdown.style.background = "";
    } else {
        dropdown.style.width = "400px";
        dropdown.style.background = "#f87e57";
    }
};