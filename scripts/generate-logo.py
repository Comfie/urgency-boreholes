from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import cairosvg

NAVY="#0A3D7A"; BLUE="#1C74D9"; WHITE="#FFFFFF"

def text_path(fontfile, text, size, x, y, tracking=0):
    f=TTFont(fontfile); gs=f.getGlyphSet(); cmap=f.getBestCmap(); upm=f['head'].unitsPerEm
    s=size/upm; pen=SVGPathPen(gs); cx=0
    for ch in text:
        g=cmap[ord(ch)]
        tp=TransformPen(pen,(s,0,0,-s,x+cx,y)); gs[g].draw(tp)
        cx+=gs[g].width*s+tracking
    return pen.getCommands(), cx-tracking

# Mark: droplet with a drill bit descending into it (drawn in a 100x120 box)
def mark(fill, cut, ox=0, oy=0, sc=1):
    return f'''<g transform="translate({ox} {oy}) scale({sc})">
  <path d="M50 2 C50 2 10 50 10 78 A40 40 0 0 0 90 78 C90 50 50 2 50 2 Z" fill="{fill}"/>
  <rect x="45.5" y="26" width="9" height="22" rx="1.5" fill="{cut}"/>
  <clipPath id="bit{id(fill)}{ox}"><path d="M40 50 H60 L50 108 Z"/></clipPath>
  <g clip-path="url(#bit{id(fill)}{ox})"><path d="M40 50 H60 L50 108 Z" fill="{cut}"/>
  <path d="M30 64 L70 50 V55.5 L30 69.5 Z M30 78 L70 64 V69.5 L30 83.5 Z M30 92 L70 78 V83.5 L30 97.5 Z" fill="{fill}"/></g>
</g>'''

def lockup(textcol, markfill, markcut, bg=None, sub=BLUE):
    p1,w1=text_path("BarlowCondensed-Bold.ttf","URGENCY",64,118,58,1)
    _,base=text_path("BarlowCondensed-Medium.ttf","BOREHOLES",34,0,0,0)
    tr=(w1-base)/8
    p2,w2=text_path("BarlowCondensed-Medium.ttf","BOREHOLES",34,119,104,tr)
    W=int(118+max(w1,w2)+8); H=120
    bgr=f'<rect width="{W}" height="{H}" fill="{bg}"/>' if bg else ''
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W*3}" height="{H*3}">{bgr}
{mark(markfill,markcut)}
<path d="{p1}" fill="{textcol}"/>
<path d="{p2}" fill="{sub}"/>
</svg>''', (w1,w2)

files={}
svg,ws=lockup(NAVY,BLUE,WHITE); files['logo-horizontal.svg']=svg; print(ws)
svg,_=lockup(WHITE,WHITE,NAVY,sub="#BFD9F6"); files['logo-horizontal-white.svg']=svg
files['logo-mark.svg']=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 110" width="300" height="330">{mark(BLUE,WHITE,0,0)}</svg>'
files['favicon.svg']=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="26" fill="{NAVY}"/>{mark(WHITE,NAVY,14,6,0.92)}</svg>'
files['logo-social.svg']=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="800" height="800"><rect width="400" height="400" fill="{NAVY}"/>{mark(WHITE,NAVY,80,62,2.4)}</svg>'
import os; os.makedirs("logo",exist_ok=True)
for n,s in files.items():
    open(f"logo/{n}","w").write(s)
    cairosvg.svg2png(bytestring=s.encode(), write_to=f"logo/{n[:-4]}.png")
