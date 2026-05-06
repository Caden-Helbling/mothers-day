# Mother's Day Site

A playful, kid-made-it Mother's Day website for mom. Built with HTML/CSS/JS, no build step. Deployed to GitHub Pages.

## Project Context

- **What**: A fun, cute Mother's Day website with an intro hero and a photo timeline.
- **For**: Our mom 💖
- **Who**: Built with my brother (both comfortable with Git/GitHub).
- **Deadline**: Mother's Day 2026-05-10 (May 10 is a Sunday).
- **Vibe**: Deliberately "made by a small kid" — running joke from our physical cards. The childishness comes from crayon-colored letters, wonky fonts, lowercase/exclamation-heavy copy, sticky-note captions, washi-tape photo corners, and stick-figure doodles. (We tried intentional misspellings early on but pulled them out — the rest of the design carries the kid vibe without making the page hard to read.)

## What's Done

### Design & Styling
- **Hero**: "Happy Mothers Day!" title in rainbow crayon letters (Gloria Hallelujah font), each letter wobbles independently. Subtitle "from your 2 boys 💕" in handwriting font.
- **Stick-figure family**: Mom (labeled "MOM ♡") with brown hair and side curls that flick up past her shoulders, two boys holding her hands — one with hair, one bald. Floating hearts.
- **Background**: Soft pink construction-paper texture with subtle fiber-dot pattern.
- **Timeline section**: "our favorite memories 💖" header. Dashed blue "spine" line with hand-drawn hearts at each entry.
- **Photo cards**: White polaroid-style cards tilted ±3°, taped on with washi tape corners (4 tape colors: yellow, blue, green, purple). Captions are sticky-note style (yellow background, handwriting font, rotated).
- **Closing**: "we LOVE u mom!!!" with a big drawn heart that beats. Signoff: "— your boys 💖💖💖".
- **Floating stickers**: Stars, rainbows, butterflies, smileys, hearts, flowers continuously float up the background.
- **Mobile-responsive**: Moves timeline to single-column layout on screens < 720px wide.

### Files
- `index.html` — structure + SVG stick-figure family + memory template
- `styles.css` — all styling (kid-craft aesthetic, animations, responsive)
- `script.js` — floating sticker spawner, scroll-reveal for timeline entries
- `media/` — folder for photos. Currently has `placeholder.svg` (a kid-doodle placeholder).
- `.gitignore` — standard (macOS junk, IDE files).
- `README.md` — collaborator-friendly instructions for adding memories.

## How to Add a Memory

### Step 1: Add the photo
Drop an image into `media/`. Keep filenames lowercase with dashes (e.g., `2008-beach-trip.jpg`, `2015-birthday.png`).

### Step 2: Edit the timeline
Open `index.html`. Find the timeline section. Copy one of the three `<article class="memory ...">` blocks. Update:
- `YEAR` → the year (e.g., `2008`, `2015`)
- `src="media/placeholder.svg"` → `src="media/your-file.jpg"`
- The caption text (currently "this is when u were the BEST mom ⭐", "remember this day??? so fun!!!", etc.)
- Alternate `class="memory left"` and `class="memory right"` to zigzag.
- The `tape-{a,b,c,d}` class on `.memory-card` picks a tape color. Vary them.

### Step 3: For videos
Replace the `<img>` tag with:
```html
<video controls playsinline src="media/your-video.mp4"></video>
```
Keep videos under ~30 MB for mobile load times.

## Preview Locally

```bash
cd /Users/chelblin/repos/mothers-day
python3 -m http.server 8000
```
Then open http://localhost:8000 in a browser.

## Deploy to GitHub Pages

1. **First time setup** (already done):
   - Repo is at https://github.com/Caden-Helbling/mothers-day
   - Remote is already configured

2. **To deploy**:
   - Commit your changes: `git add .` → `git commit -m "add memories"`
   - Push: `git push`
   - On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` (root)**
   - Wait ~1 minute. Site will be live at **https://caden-helbling.github.io/mothers-day/**

3. **To keep working**:
   - Always pull before starting: `git pull`
   - One person edits `index.html` at a time (to avoid merge conflicts). Photos can be added in parallel.
   - Push when done.

## Tone

Words are spelled correctly. The "kid" feel comes from the design (crayon letters, wonky fonts, sticky-note captions, stick figures) and the casual register of the copy — short sentences, lowercase, "u" for "you", lots of `!!!` and `💖`. Don't reintroduce misspellings; if a copy tweak feels off, lean on caps for emphasis (`BEST`, `LOVE`) or extra punctuation, not phonetic spelling.

## Fonts

- **Headers** (`Gloria Hallelujah`): Very kid-handwriting vibe. Used for title, section headers, year labels, sticky notes, button.
- **Body** (`Patrick Hand`): Readable handwriting. Used for paragraph text.
- **Accents** (`Schoolbell`): Cursive handwriting. Used for subtitle, captions.

All from Google Fonts, no downloads needed.

## Colors

| Use | Hex | Name |
|-----|-----|------|
| Main pink | `#ff4d8d` | Hot pink |
| Light pink | `#ff8ab8` | Light pink |
| Paper bg | `#ffd9e3` | Soft pink |
| Cream | `#fff7f0` | Off-white |
| Washi yellow | `#ffd84d` | Sunshine yellow |
| Washi blue | `#4dc3ff` | Sky blue |
| Washi green | `#5fd16b` | Grass green |
| Washi purple | `#b07dff` | Lavender |
| Orange accent | `#ff9c3d` | Tangerine |
| Ink/text | `#3b2a52` | Dark purple |

Update these in `:root` in `styles.css` to shift the palette.

## File Structure

```
mothers-day/
├── index.html          (main page — edit to add memories)
├── styles.css          (styling — edit for color/font tweaks)
├── script.js           (animations — usually leave alone)
├── .gitignore
├── README.md           (collaborator guide)
├── CLAUDE.md           (this file)
└── media/
    ├── placeholder.svg (template image)
    └── [your photos go here]
```

## Next Steps

1. Add your photos to `media/`.
2. Edit `index.html` to add memory entries.
3. Preview locally with `python3 -m http.server 8000`.
4. Commit & push.
5. Enable GitHub Pages (Settings → Pages).
6. Share the live link with mom on Mother's Day! 💖

## Notes

- This is a static site — no database, no backend. Everything is in HTML/CSS/JS.
- GitHub Pages serves it for free with a custom domain (or at `github.io/mothers-day`).
- All browsers support it. Mobile-friendly.
- The site is public, but GitHub Pages doesn't index in search engines by default for new repos.
