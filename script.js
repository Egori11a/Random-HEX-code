const changeBtn = document.querySelector('.changeBtn');
const copyBtn = document.querySelector('.copyBtn');
const bodyBackground = document.querySelector('.main');
const hexText = document.querySelector('.hex');
const rgbText = document.querySelector('.rgb');

changeBtn.addEventListener('click', () => {
    const hex = getRandomHEX();
    const [r, g, b] = hexToRgb(hex);

    bodyBackground.style.backgroundColor = hex;
    hexText.textContent = hex;
    rgbText.textContent = `rgb: (${r}, ${g}, ${b})`;

    changeBtn.style.backgroundColor = hex;

    setTextColor([r, g, b]);
});

const getRandomHEX = () => {
    return '#' + Math.random().toString(16).slice(-6);
};

const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, '');

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return [r, g, b];
};

const setTextColor = (rgb) => {
    const color = checkLightBg(rgb) ? '#333' : '#fff';

    bodyBackground.style.color = color;

    changeBtn.style.color = color;
    copyBtn.style.color = color;
};

const checkLightBg = (rgb) => {
    return rgb.every((color) => color > 160);
};

copyBtn.addEventListener('click', () => {
    const hex = hexText.textContent;

    navigator.clipboard.writeText(hex)
    copyBtn.textContent = 'Copied!';
    copyBtn.style.backgroundColor = hex;
});

copyBtn.addEventListener('mouseout', () => {
    copyBtn.textContent = 'Click to copy color!';
    copyBtn.style.backgroundColor = ''
});