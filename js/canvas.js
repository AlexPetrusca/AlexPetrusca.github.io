/* UTILITY */
function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}

let neurons = [];

/* CLASSES */
class Neuron {
    static R() {
        return 15;
    }

    constructor(x, y) {
        this.x = x;
        this.y = 400 - y;
        this.r = Neuron.R();
        this.value = 0;
        this.connections = [];
        this.animating = false;
        neurons.push(this);
    }

    newNeuron(len, theta) {
        let x = this.x + len * Math.cos(Math.PI / 180 * theta);
        let y = this.y - len * Math.sin(Math.PI / 180 * theta);
        return new Neuron(x, 400 - y);
    }

    // Draw
    drawNeuron(g) {
        g.beginPath();
        g.lineWidth = 5;
        g.arc(this.x, this.y, this.r, this.r, 360);
        this.r = lerp(this.r, Neuron.R(), 0.1);
        g.fillStyle = "rgba(229, 91, 47," + this.value + ")";
        g.fill();
        g.stroke();
    }

    drawConnections(g) {
        let counter = 0;
        for (const connection of this.connections) {
            this.drawConnection(g, connection, counter);
            counter++;
        }
    }

    drawConnection(g, connection, counter) {
        let thatX = connection.neuron.x;
        let thatY = connection.neuron.y;
        let thatR = connection.neuron.r;

        let dx = thatX - this.x;
        let dy = thatY - this.y;
        let d = Math.sqrt(dx ** 2 + dy ** 2);

        let srcX = this.x + this.r * dx / d;
        let srcY = this.y + this.r * dy / d;
        let dstX = thatX - thatR * dx / d;
        let dstY = thatY - thatR * dy / d;

        g.beginPath();
        g.moveTo(srcX, srcY);
        g.lineTo(dstX, dstY);
        g.lineWidth = 4;
        g.stroke();
        g.beginPath();

        if (connection.pulsing) {
            g.arc(connection.sigX, connection.sigY, connection.r, connection.r, 360);
            g.fill();
            connection.sigX = lerp(connection.sigX, thatX, 0.1);
            connection.sigY = lerp(connection.sigY, thatY, 0.1);
            if (Math.abs(connection.sigX - thatX) < 1 && Math.abs(connection.sigY - thatY) < 1) {
                connection.pulsing = false;
                connection.dying = true;
            }
        } else if (connection.dying) {
            connection.neuron.animating = true;
            g.arc(connection.sigX, connection.sigY, connection.r, connection.r, 360);
            g.fill();
            connection.r = lerp(connection.r, 0, 0.1);
            let val = lerp(0, connection.weight, (7 - connection.r) / 7);
            connection.neuron.value += val - connection.lastAddition;
            connection.lastAddition = val;
            if (connection.r < 1) {
                connection.neuron.animating = false;
                connection.dying = false;
            }
        }

        // let textX = lerp(srcX, dstX, 0.5);
        // let textY = lerp(srcY, dstY, 0.5);
        // g.font = "20px Arial";
        // g.fillStyle = "red";
        // g.fillText("" + counter, textX, textY);
    }

    animate() {
        if (this.value >= 1 && !this.animating) {
            this.pulse();
        }
    }

    // Interaction
    connect(neuron, weight) {
        this.connections.push({neuron: neuron, weight: weight});
    }

    connectBackwards(neuron, weight) {
        neuron.connections.push({neuron: this, weight: weight});
    }

    addNeuron(len, theta, weight) {
        let neuron = this.newNeuron(len, theta);
        this.connect(neuron, weight);
        return neuron;
    }

    addNeuronBackwards(len, theta, weight) {
        let neuron = this.newNeuron(len, theta);
        this.connectBackwards(neuron, weight);
        return neuron;
    }

    getConnection(num) {
        return this.connections[num];
    }

    get(num) {
        return this.connections[num].neuron;
    }

    // Pulse
    pulse() {
        this.value = 0;
        this.r = Neuron.R() * 2;
        for (const connection of this.connections) {
            connection.pulsing = true;
            connection.r = Neuron.R() / 2 - 1;
            connection.sigX = this.x;
            connection.sigY = this.y;
            connection.weight = 0.5 * Math.random() + 0.25;
            connection.lastAddition = 0;
            connection.neuron.animating = true;
        }
    }

    sendPulse() {
        this.value += 0.5 * Math.random() + 0.25;
    }
}


/* MAIN CODE */
// let canvas = document.getElementById("hero-canvas");
// let g = canvas.getContext("2d");
// g.lineWidth = 4;
// g.strokeStyle = "#ffffff";

let origin = new Neuron(-50, 250);
let neu1 = neurons[neurons.length - 1].addNeuron(100, 40, .25);
let neu2 = neurons[neurons.length - 1].addNeuron(60, 10, .25);
let neu4 = neurons[neurons.length - 1].addNeuron(130, -25, .25);
let neu5 = neurons[neurons.length - 1].addNeuron(100, -50, .25);
let neu7 = neurons[neurons.length - 1].addNeuron(150, -15, .25);
let neu8 = neurons[neurons.length - 1].addNeuron(50, -30, .25);
let neu10 = neurons[neurons.length - 1].addNeuron(110, -15, .25);
let neu11 = neurons[neurons.length - 1].addNeuron(60, 5, .25);
let neu12 = neurons[neurons.length - 1].addNeuron(100, 40, .25);
let neu13 = neurons[neurons.length - 1].addNeuron(90, 10, .25);
let neu15 = neurons[neurons.length - 1].addNeuron(140, 0, .25);
let neu16 = neurons[neurons.length - 1].addNeuron(80, -35, .25);
let neu17 = neurons[neurons.length - 1].addNeuron(90, -5, .25);
let neu18 = neurons[neurons.length - 1].addNeuron(60, -50, .25);
let neu20 = neurons[neurons.length - 1].addNeuron(80, -17.5, .25);
let neu21 = neurons[neurons.length - 1].addNeuron(50, 20, .25);
let neu22 = neurons[neurons.length - 1].addNeuron(60, -25, .25);
let neu23 = neurons[neurons.length - 1].addNeuron(60, 40, .25);
let neu24 = neurons[neurons.length - 1].addNeuron(80, -30, .25);
let neu25 = neurons[neurons.length - 1].addNeuron(100, 25, .25);

let center1 = neu1.addNeuron(175, -75, .25);
let center2 = neu2.addNeuron(150, -60, .25);
let center3 = neu5.addNeuron(75, -120, .25);
let center4 = neu7.addNeuron(100, -105, .25);
let center5 = neu8.addNeuron(150, -45, .25);
let center6 = neu11.addNeuron(50, -60, .25);
let center7 = neu13.addNeuron(150, -30, .25);
let center8 = neu16.addNeuron(125, -120, .25);
let center9 = neu18.addNeuron(75, -60, .25);
let center10 = neu20.addNeuron(100, -75, .25);
let center11 = neu23.addNeuron(60, -75, .25);
let center12 = neu24.addNeuron(150, -100, .25);
let center13 = neu24.addNeuron(150, -60, .25);

origin.connect(center1, 0.25);
center1.connect(center2, 0.25);
center2.connect(center3, 0.25);
center3.connect(center4, 0.25);
center4.connect(center5, 0.25);
center5.connect(center6, 0.25);
// center6.connect(center7, 0.25);
center7.connect(center8, 0.25);
center8.connect(center9, 0.25);
center9.connect(center10, 0.25);
center10.connect(center11, 0.25);
center11.connect(center12, 0.25);

let bottom1 = center1.addNeuron(75, -75, .25);
let bottom2 = center1.addNeuron(225, -120, .25); // offscreen
let bottom3 = center2.addNeuron(75, -105, .25);
let bottom4 = center3.addNeuron(50, -90, .25);
let bottom5 = center5.addNeuron(100, -105, .25); //offscreen
let bottom6 = center6.addNeuron(150, -5, .25);
let bottom7 = bottom1.addNeuron(125, -60, .25); // offscreen

bottom1.connectBackwards(bottom2, 0.25);
bottom1.connect(bottom3, 0.25);
bottom3.connect(bottom4, 0.25);
bottom4.connect(bottom5, 0.25);
bottom5.connect(bottom6, 0.25);
bottom7.connect(bottom4, 0.25);
bottom1.connect(bottom4, 0.25);

neu2.connect(center1, 0.25);
neu4.connect(center2, 0.25);
neu8.connect(center4, 0.25);
neu10.connect(center5, 0.25);
neu11.connect(center5, 0.25);
neu12.connect(center6, 0.25);

center2.connect(neu5, 0.25);
center1.connect(bottom3, 0.25);
neu5.connect(center4, 0.25);
origin.get(1).get(3).connect(center3, 0.25);
bottom4.connect(center4, 0.25);
bottom5.connectBackwards(center4, 0.25);
bottom6.connect(center7, 0.25);
bottom5.connectBackwards(center6, 0.25);
bottom6.connect(center8, 0.25);
bottom6.connect(neu12, 0.25);
bottom6.connect(neu13, 0.25);
neu15.connect(center7, 0.25);
center7.connect(neu16, 0.25);

let bottom8 = bottom6.addNeuronBackwards(100, -60, 0.25); // offscreen
center8.connectBackwards(bottom8, 0.25);
center9.connectBackwards(bottom8, 0.25);
neu18.connect(center8, 0.25);
neu20.connectBackwards(center9, 0.25);
neu21.connect(center10, 0.25);
neu22.connect(center10, 0.25);
neu22.connect(center11, 0.25);
neu24.connect(center11, 0.25);

// window.requestAnimationFrame(drawNet);
// function drawNet() {
//     if (window.scrollY < 2*window.innerHeight ) {
//         g.clearRect(0, 0, canvas.width, canvas.height);
//         g.fillStyle = "rgb(229, 91, 47)";
//         for (const neuron of neurons) {
//             neuron.drawConnections(g);
//         }
//         for (const neuron of neurons) {
//             neuron.drawNeuron(g);
//         }
//         for (const neuron of neurons) {
//             neuron.animate();
//         }
//         window.requestAnimationFrame(drawNet);
//     } else {
//         setTimeout(window.requestAnimationFrame(drawNet), 1000);
//     }
// }
//
// setInterval(function () {
//     if (window.scrollY < window.innerHeight) {
//         origin.sendPulse();
//         bottom2.sendPulse();
//         bottom5.sendPulse();
//         bottom7.sendPulse();
//         bottom8.sendPulse();
//         center10.sendPulse();
//     }
// }, 1000);


/* MAIN CODE */
let canvasa = document.getElementById("skills-canvas");
let ga = canvasa.getContext("2d");
ga.lineWidth = 4;
ga.fillStyle = "rgb(229, 91, 47)";
ga.strokeStyle = "rgb(255, 255, 255)";
for (const neuron of neurons) {
    neuron.drawConnections(ga);
    neuron.drawNeuron(ga);
}


/* MAIN CODE */
let canvasb = document.getElementById("education-canvas");
let gb = canvasb.getContext("2d");
gb.lineWidth = 4;
gb.fillStyle = "rgb(229, 91, 47)";
gb.strokeStyle = "rgb(255, 255, 255)";
for (const neuron of neurons) {
    neuron.drawConnections(gb);
    neuron.drawNeuron(gb);
}


/* MAIN CODE */
let canvasc = document.getElementById("experience-canvas");
let gc = canvasc.getContext("2d");
gc.lineWidth = 4;
gc.fillStyle = "rgb(229, 91, 47)";
gc.strokeStyle = "rgb(255, 255, 255)";
for (const neuron of neurons) {
    neuron.drawConnections(gc);
    neuron.drawNeuron(gc);
}


/* MAIN CODE */
let canvasd = document.getElementById("projects-canvas");
let gd = canvasd.getContext("2d");
gd.lineWidth = 4;
gd.fillStyle = "rgb(229, 91, 47)";
gd.strokeStyle = "rgb(255, 255, 255)";
for (const neuron of neurons) {
    neuron.drawConnections(gd);
    neuron.drawNeuron(gd);
}
