function playSound() {
    const audio = document.getElementById('birthdayAudio');
    audio.play();
}

window.addEventListener('load', playSound);

function startAnimation() {
    const lines = [
        "Menyalakan cahaya harapan...",
        "Membuka halaman baru dalam hidup...",
        "Mencari seseorang yang paling bersinar hari ini...",
        "",
        "✨ Selamat ulang tahun, Popo ✨",
        "Hari ini bukan hanya tentang bertambahnya usia,",
        "tapi tentang bertumbuhnya hati, harapan, dan impian.",
        "",
        "Semoga langkahmu selalu ringan,",
        "senyummu tak pernah pudar,",
        "dan setiap harimu dikelilingi oleh cinta yang tulus.",
        "",
        "Kamu berhak bahagia, dicintai, dan didengar.",
        "Jangan pernah ragu, dunia lebih indah karena hadirmu.",
        "TAPI BOONGGGGG ",
        "",
        "Dan terakhir...",
        "🎉 HAPPY BIRTHDAY PUTRI AYU LESTARI 🎉",
        "Semoga harimu dipenuhi dengan kebahagiaan,",
    ];

    const output = document.getElementById('terminalOutput');
    output.innerText = "";
    let i = 0;

    function showLine() {
        if (i < lines.length) {
            output.innerText += lines[i] + "\n";
            i++;
            setTimeout(showLine, 700);
        }
    }

    showLine();
}

// Canvas animation for flowers
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flowers = [];

document.addEventListener("click", (e) => {
    for (let i = 0; i < 20; i++) {
        flowers.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 10 + 5,
            speedX: (Math.random() - 0.5) * 4,
            speedY: Math.random() * -5 - 1,
            color: `hsl(${Math.random() * 360}, 70%, 70%)`
        });
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowers.forEach((f, index) => {
        f.x += f.speedX;
        f.y += f.speedY;
        f.size *= 0.97;
        f.speedY += 0.1; // gravity
        if (f.size < 0.5) flowers.splice(index, 1);
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fillStyle = f.color;
        ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();