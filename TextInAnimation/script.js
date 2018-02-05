const canvas = document.querySelector('#title');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.lineWidth = 1;

ctx.strokeStyle = 'white';
ctx.font = "10rem sans-serif";

// Score
ctx.textAlign = 'left';
ctx.strokeText(`Jump Man II:`, 100, 300);