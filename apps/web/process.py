import os
import re
from PIL import Image

images = {
    'mercury': '[3D] Sculpted Mercury.jpg',
    'saturn': '3D Models _ Over A Million Models For Download _ TurboSquid.jpg',
    'venus': 'Venus.jpg'
}

base_path = r'C:\Users\Bushra\OneDrive\Desktop\techfest\tech-shastra\apps\web\public\planets'

for planet, filename in images.items():
    filepath = os.path.join(base_path, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        continue
    try:
        img = Image.open(filepath).convert("RGBA")
        datas = img.getdata()
        newData = []
        
        for item in datas:
            if item[0] > 230 and item[1] > 230 and item[2] > 230:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        out_path = os.path.join(base_path, f'{planet}.png')
        img.save(out_path, "PNG")
        print(f"Saved {out_path}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

jsx_path = r'C:\Users\Bushra\OneDrive\Desktop\techfest\tech-shastra\apps\web\src\Pages\timeline.jsx'
with open(jsx_path, 'r', encoding='utf-8') as f:
    code = f.read()

code = re.sub(r'mercury:\s*"data[^"]+",?', 'mercury: "/planets/mercury.png",', code)
code = re.sub(r'venus:\s*"data[^"]+",?', 'venus: "/planets/venus.png",', code)
code = re.sub(r'saturn:\s*"data[^"]+",?', 'saturn: "/planets/saturn.png",', code)

with open(jsx_path, 'w', encoding='utf-8') as f:
    f.write(code)

print("Updated timeline.jsx")
