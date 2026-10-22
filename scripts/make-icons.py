# Draws the social share image (public/og-image.png, 1200x630) and the PNG app icons.
# Run again after changing the tagline or colours:  python scripts/make-icons.py
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

root = Path(__file__).resolve().parent.parent
public = root / 'public'
fonts = root / 'src' / 'assets' / 'fonts'
bold = str(fonts / 'HarmonyOS_Sans_Bold.ttf')
medium = str(fonts / 'HarmonyOS_Sans_Medium.ttf')

NIGHT = (5, 5, 7)
VIOLET, PINK, ORANGE = (109, 92, 255), (255, 79, 184), (255, 122, 26)


def blobs(size, spots):
    """Soft colour field like the site's hero mesh."""
    layer = Image.new('RGB', size, NIGHT)
    draw = ImageDraw.Draw(layer)
    for (x, y, r, colour) in spots:
        draw.ellipse((x - r, y - r, x + r, y + r), fill=colour)
    return layer.filter(ImageFilter.GaussianBlur(160))


def gradient_text(img, xy, text, font):
    """Paints text with the brand gradient (violet → pink → orange)."""
    mask = Image.new('L', img.size, 0)
    ImageDraw.Draw(mask).text(xy, text, font=font, fill=255)
    left, top, right, bottom = mask.getbbox()
    grad = Image.new('RGB', img.size)
    gd = ImageDraw.Draw(grad)
    for x in range(left, right + 1):
        t = (x - left) / max(1, right - left)
        a, b, u = (VIOLET, PINK, t / 0.55) if t < 0.55 else (PINK, ORANGE, (t - 0.55) / 0.45)
        gd.line([(x, top), (x, bottom)], fill=tuple(int(a[i] + (b[i] - a[i]) * u) for i in range(3)))
    img.paste(grad, (0, 0), mask)


def og_image():
    w, h = 1200, 630
    base = blobs((w, h), [(150, 40, 330, (56, 46, 140)), (1080, 120, 300, (120, 34, 90)), (700, 720, 320, (110, 52, 14))])
    shade = Image.new('RGB', (w, h), NIGHT)
    img = Image.blend(base, shade, 0.25)
    d = ImageDraw.Draw(img)

    # Hairline grid, as on the site.
    for x in range(0, w, 72):
        d.line([(x, 0), (x, h)], fill=(22, 22, 28))
    for y in range(0, h, 72):
        d.line([(0, y), (w, y)], fill=(22, 22, 28))

    small = ImageFont.truetype(medium, 30)
    big = ImageFont.truetype(bold, 128)
    d.rounded_rectangle((80, 74, 136, 130), radius=14, fill=(255, 255, 255))
    d.text((108, 102), 'SM', font=ImageFont.truetype(bold, 26), fill=NIGHT, anchor='mm')
    d.text((156, 102), 'Srikanta Magaji', font=small, fill=(255, 255, 255), anchor='lm')

    y = 190
    d.text((76, y), 'Market.', font=big, fill=(255, 255, 255))
    d.text((76, y + 132), 'Advise.', font=big, fill=(255, 255, 255))
    gap = d.textlength('Advise. ', font=big)
    gradient_text(img, (76 + gap, y + 132), 'Audit.', big)

    d = ImageDraw.Draw(img)
    d.line([(80, 540), (1120, 540)], fill=(48, 48, 56), width=1)
    d.text((80, 572), 'Marketing  ·  Advisory  ·  Software', font=small, fill=(200, 200, 210), anchor='lm')
    d.text((1120, 572), 'Book a free 30-min call', font=small, fill=(255, 255, 255), anchor='rm')
    img.save(public / 'og-image.png', optimize=True)


def icon(size, path):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((0, 0, size - 1, size - 1), radius=int(size * 0.2), fill=(255, 255, 255, 255))
    d.text((size / 2, size / 2), 'SM', font=ImageFont.truetype(bold, int(size * 0.5)), fill=NIGHT, anchor='mm')
    img.save(public / path, optimize=True)


og_image()
icon(32, 'favicon-32.png')
icon(180, 'apple-touch-icon.png')
icon(192, 'icon-192.png')
icon(512, 'icon-512.png')
print('icons written')
