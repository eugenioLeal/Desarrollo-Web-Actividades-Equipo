const unitOfTime = .4 * 1000;
// test
trigger_bulb(unitOfTime);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function switch_bulb() {
    let image = document.getElementById('bulb');
    if (image.src.match("bulbon")) {
        image.src = "bulboff.gif";
    }
    else {
        image.src = "bulbon.gif";
    }
}
function trigger_bulb(millisec) {
    let image = document.getElementById('bulb');
    image.src = 'bulbon.gif';
    console.log('bulb on');
    setTimeout(() => {
        image.src = 'bulboff.gif';
    }, millisec);
}
function initialize_morse_map(morse_map) {
    let morse = ['._', '_...', '_._.', '_..', '.', '.._.', '__.', '....', '..', '.___', '_._', '._..', '__', '_.', '___', '.__.', '__._', '._.', '...', '_', '.._', '..._', '.__', '_.._', '_.__', '__..'];
    for (let i = 0; i < 26; i++) {
        morse_map.set(String.fromCharCode(i + 97), morse[i]);
    }
    morse_map.set(' ', 'space');
}
function trigger_code(char) {
    if (char == '.') {
        trigger_bulb(unitOfTime);
    }
    else if (char == '_') {
        trigger_bulb(unitOfTime * 3);
    }
}
function spell_morse_letter(str) {
    let i = 0;
    let char = str[i];
    trigger_code(char);
    let done = false;
    while (i < str.length) {
        setTimeout(() => { done = true; }, unitOfTime);
    }
}
function append_morse_letter(morse_letter) {
    let str = '';
    for (let char of morse_letter) {
        str += char + ' ';
    }
    return str;
}
function onConvert() {
    let morse_map = new Map();
    initialize_morse_map(morse_map);
    let message = document.getElementById('message').value;
    let answer = '';
    for (let char of message) {
        let morse_letter = morse_map.get(char.toLowerCase());
        if (morse_letter == 'space') {
            answer += '\n';
        }
        else {
            answer += append_morse_letter(morse_letter) + '  ';
        }
    }
    document.getElementById('answer').innerHTML = answer;
}
