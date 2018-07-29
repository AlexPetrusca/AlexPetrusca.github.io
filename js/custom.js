let nav = document.getElementById("top-nav");
let row1 = document.getElementById("skillsRow");
let row1_activated = false;

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
    new ProgressBar.Circle('#progressJava', progressOptions).animate(0.9);

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
    new ProgressBar.Circle('#progressCplusplus', progressOptions).animate(0.4);

    progressOptions.text.value = 'Python';
    progressOptions.color = 'rgb(75, 152, 90)';
    progressOptions.trailColor = 'rgba(75, 152, 90, 0.2)';
    progressOptions.to.color = 'rgb(75, 152, 90)';
    progressOptions.from.color = 'rgb(75, 152, 90)';
    new ProgressBar.Circle('#progressPython', progressOptions).animate(0.2);

    progressOptions.text.value = 'JS';
    progressOptions.color = 'rgb(207, 92, 56)';
    progressOptions.trailColor = 'rgba(207, 92, 56, 0.2)';
    progressOptions.to.color = 'rgb(207, 92, 56)';
    progressOptions.from.color = 'rgb(207, 92, 56)';
    new ProgressBar.Circle('#progressJavascript', progressOptions).animate(0.85);

    progressOptions.text.value = 'Scala';
    progressOptions.color = 'rgb(164, 222, 44)';
    progressOptions.trailColor = 'rgba(164, 222, 44, 0.2)';
    progressOptions.to.color = 'rgb(164, 222, 44)';
    progressOptions.from.color = 'rgb(164, 222, 44)';
    new ProgressBar.Circle('#progressScala', progressOptions).animate(0.4);

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
    new ProgressBar.Circle('#progressCSS', progressOptions).animate(0.85);
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