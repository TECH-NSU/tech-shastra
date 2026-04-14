const { Jimp } = require('C:\\\\temp_images\\\\node_modules\\\\jimp');
const fs = require('fs');
const path = require('path');

const basePath = 'C:\\\\Users\\\\Bushra\\\\OneDrive\\\\Desktop\\\\techfest\\\\tech-shastra\\\\apps\\\\web\\\\public\\\\planets';
const images = {
    'mercury': '[3D] Sculpted Mercury.jpg',
    'saturn': '3D Models _ Over A Million Models For Download _ TurboSquid.jpg',
    'venus': 'Venus.jpg'
};

async function processImages() {
    for (const [planet, filename] of Object.entries(images)) {
        const filepath = path.join(basePath, filename);
        if (!fs.existsSync(filepath)) continue;
        try {
            console.log("Processing " + filename);
            const img = await Jimp.read(filepath);
            img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
                const r = this.bitmap.data[idx + 0];
                const g = this.bitmap.data[idx + 1];
                const b = this.bitmap.data[idx + 2];
                // Make white background transparent
                if (r > 200 && g > 200 && b > 200) {
                    this.bitmap.data[idx + 3] = 0; 
                }
            });
            // Automatically crop out transparent edges
            const w = img.bitmap.width;
            let minX = w, maxX = 0, minY = img.bitmap.height, maxY = 0;
            img.scan(0, 0, w, img.bitmap.height, function(x, y, idx) {
                if (this.bitmap.data[idx + 3] > 0) {
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            });
            if (minX <= maxX && minY <= maxY) {
                img.crop({x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1});
            }
            const outPath = path.join(basePath, planet + '.png');
            await img.write(outPath);
            console.log("Saved " + outPath);
        } catch (e) {
            console.error("Error processing " + filename, e);
        }
    }
}
processImages();
