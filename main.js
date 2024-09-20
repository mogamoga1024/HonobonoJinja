let synth1 = null;
let synth2 = null;

Tone.Transport.bpm.value = 76;

const t8n = Tone.Time("8n").toSeconds();
const t4n = t8n*2;

let timer1 = 0;
let timer2 = 0;

function playMelody1() {
    let time = Tone.now();
    const startTime = time;

    synth1.triggerAttackRelease("C5", "4n", time); time += t4n;
    synth1.triggerAttackRelease("G5", "8n", time); time += t4n;
    synth1.triggerAttackRelease("B4", "4n", time); time += t4n;
    synth1.triggerAttackRelease("G5", "8n", time); time += t4n;
    synth1.triggerAttackRelease("A4", "4n", time); time += t4n;
    synth1.triggerAttackRelease("F5", "8n", time); time += t4n;
    synth1.triggerAttackRelease("B4", "4n", time); time += t4n;
    synth1.triggerAttackRelease("G5", "8n", time); time += t4n;

    timer1 = setTimeout(playMelody2, (time - startTime) * 1000);
}

function playMelody2() {
    synth1.triggerRelease();
    synth2.triggerRelease();
    
    let time = Tone.now();
    const startTime = time;
    
    synth1.triggerAttackRelease("G5", "4n", time);
    synth2.triggerAttackRelease("C3", "4n", time); time += t4n; 

    synth1.triggerAttackRelease("G5", "8n", time + t8n);
    synth2.triggerAttackRelease("C3", "4n", time); time += t4n;

    synth2.triggerAttackRelease("F2", "8n", time); time += t8n;

    synth1.triggerAttackRelease("F5", "8n", time);
    synth2.triggerAttackRelease("C3", "8n", time); time += t8n;

    synth1.triggerAttackRelease("F5", "8n", time);
    synth1.triggerAttackRelease("A5", "8n", time + t8n);
    synth2.triggerAttackRelease("F3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("G5", "4n", time);
    synth2.triggerAttackRelease("C3", "8n", time);
    synth2.triggerAttackRelease("E3", "8n", time + t8n); time += t4n;

    synth1.triggerAttackRelease("C5", "8n", time + t8n);
    synth2.triggerAttackRelease("G3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("F5", "8n", time);
    synth2.triggerAttackRelease("F2", "8n", time); time += t8n;

    synth1.triggerAttackRelease("E5", "8n", time);
    synth2.triggerAttackRelease("C3", "8n", time); time += t8n;

    synth1.triggerAttackRelease("D5", "8n", time);
    synth1.triggerAttackRelease("E5", "8n", time + t8n);
    synth2.triggerAttackRelease("F3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("C5", "4n", time);
    synth2.triggerAttackRelease("C3", "8n", time);
    synth2.triggerAttackRelease("E3", "8n", time + t8n); time += t4n;

    synth1.triggerAttackRelease("G5", "8n", time + t8n);
    synth2.triggerAttackRelease("G3", "4n", time); time += t4n;

    synth2.triggerAttackRelease("G2", "8n", time); time += t8n;

    synth1.triggerAttackRelease("F5", "8n", time);
    synth2.triggerAttackRelease("D3", "8n", time); time += t8n;

    synth1.triggerAttackRelease("B5", "8n", time);
    synth1.triggerAttackRelease("C6", "8n", time + t8n);
    synth2.triggerAttackRelease("G3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("G5", "2n", time);
    synth2.triggerAttackRelease("E3", "8n", time);
    synth2.triggerAttackRelease("C3", "8n", time + t8n);
    synth2.triggerAttackRelease("E3", "8n", time + t8n*2);
    synth2.triggerAttackRelease("G3", "8n", time + t8n*3); time += t4n*2;

    synth2.triggerAttackRelease("E3", "8n", time); time += t4n;

    synth2.triggerAttackRelease("D3", "8n", time); time += t4n;

    synth1.triggerAttackRelease("G5", "4n", time);
    synth2.triggerAttackRelease("C3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("G5", "8n", time + t8n);
    synth2.triggerAttackRelease("C3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("F5", "8n", time + t8n);
    synth2.triggerAttackRelease("A2", "8n", time);
    synth2.triggerAttackRelease("C3", "8n", time + t8n); time += t4n;

    synth1.triggerAttackRelease("F5", "8n", time);
    synth1.triggerAttackRelease("A5", "8n", time + t8n);
    synth2.triggerAttackRelease("F3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("G5", "4n", time);
    synth2.triggerAttackRelease("C3", "8n", time);
    synth2.triggerAttackRelease("E3", "8n", time + t8n); time += t4n;

    synth1.triggerAttackRelease("C6", "8n", time + t8n);
    synth2.triggerAttackRelease("G3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("C6", "8n", time);
    synth2.triggerAttackRelease("A2", "8n", time); time += t8n;

    synth1.triggerAttackRelease("C6", "8n", time);
    synth2.triggerAttackRelease("C3", "8n", time); time += t8n;

    synth1.triggerAttackRelease("D6", "8n", time);
    synth1.triggerAttackRelease("E6", "8n", time + t8n);
    synth2.triggerAttackRelease("F3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("C6", "4n", time);
    synth2.triggerAttackRelease("C3", "8n", time);
    synth2.triggerAttackRelease("E3", "8n", time + t8n); time += t4n;

    synth1.triggerAttackRelease("G6", "8n", time + t8n);
    synth2.triggerAttackRelease("G3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("F6", "8n", time + t8n);
    synth2.triggerAttackRelease("B2", "8n", time);
    synth2.triggerAttackRelease("D3", "8n", time + t8n); time += t4n;

    synth1.triggerAttackRelease("D6", "8n", time);
    synth1.triggerAttackRelease("B5", "8n", time + t8n);
    synth2.triggerAttackRelease("G3", "4n", time); time += t4n;

    synth1.triggerAttackRelease("C6", "2n", time);
    synth2.triggerAttackRelease("E3", "8n", time);
    synth2.triggerAttackRelease("C3", "8n", time + t8n);
    synth2.triggerAttackRelease("E3", "8n", time + t8n*2);
    synth2.triggerAttackRelease("G3", "8n", time + t8n*3);
    synth2.triggerAttackRelease("C4", "4n", time + t8n*4); time += t8n*8;

    timer2 = setTimeout(playMelody2, (time - startTime) * 1000);
}

function stopMelody() {
    clearTimeout(timer1);
    clearTimeout(timer2);
    synth1?.triggerRelease();
    synth2?.triggerRelease();
    synth1?.dispose();
    synth2?.dispose();
    synth1 = null;
    synth2 = null;
}

document.getElementById("play").addEventListener("click", async () => {
    stopMelody();
    await Tone.start();
    const options = {volume: -3};
    synth1 = new Tone.Synth(options).toDestination();
    synth2 = new Tone.Synth(options).toDestination();
    playMelody1();
});

document.getElementById("stop").addEventListener("click", () => {
    stopMelody();
});
