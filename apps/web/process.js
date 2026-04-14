const Jimp = require("jimp");
const fs = require("fs");
const path = require("path");

const basePath =
  "C:\\\\Users\\\\Bushra\\\\OneDrive\\\\Desktop\\\\techfest\\\\tech-shastra\\\\apps\\\\web\\\\public\\\\planets";
const images = {
  mercury: "[3D] Sculpted Mercury.jpg",
  saturn: "3D Models _ Over A Million Models For Download _ TurboSquid.jpg",
  venus: "Venus.jpg",
};

async function processImages() {
  for (const [planet, filename] of Object.entries(images)) {
    const filepath = path.join(basePath, filename);
    if (!fs.existsSync(filepath)) continue;
    try {
      const img = await Jimp.read(filepath);
      img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        if (r > 230 && g > 230 && b > 230) {
          this.bitmap.data[idx + 3] = 0; // Alpha to 0
        }
      });
      img.autocrop();
      const outPath = path.join(basePath, planet + ".png");
      await img.writeAsync(outPath);
      console.log("Saved " + outPath);
    } catch (e) {
      console.error("Error processing " + filename, e);
    }
  }

  // Update timeline.jsx
  const jsxPath =
    "C:\\\\Users\\\\Bushra\\\\OneDrive\\\\Desktop\\\\techfest\\\\tech-shastra\\\\apps\\\\web\\\\src\\\\Pages\\\\timeline.jsx";
  let code = fs.readFileSync(jsxPath, "utf-8");
  code = code.replace(
    /mercury:\s*"data:[^"]+",?/,
    'mercury: "/planets/mercury.png",'
  );
  code = code.replace(
    /venus:\s*"data:[^"]+",?/,
    'venus: "/planets/venus.png",'
  );
  code = code.replace(
    /saturn:\s*"data[^"]+",?/,
    'saturn: "/planets/saturn.png",'
  );
  // Ensure saturn exists in IMG object if it was missing:
  if (!code.includes('saturn: "/planets/saturn.png"')) {
    code = code.replace(
      /jupiter:\s*"data:[^"]+",?/,
      'jupiter: "data...",\n    saturn: "/planets/saturn.png",'
    );
  }
  fs.writeFileSync(jsxPath, code, "utf-8");
  console.log("Updated timeline.jsx");
}
processImages();
