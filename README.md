# Mom's Mother's Day Site 💖

A little static site for Mom. No build step, no dependencies — just open `index.html`.

## Adding a memory to the timeline

1. Drop the photo (or video) into the `media/` folder. Keep filenames lowercase with dashes, e.g. `2008-beach-trip.jpg`.
2. Open `index.html` and copy one of the `<article class="memory">` blocks.
3. Update:
   - `YEAR` → the year the photo is from
   - `src="media/placeholder.svg"` → `src="media/your-file.jpg"`
   - the `<p class="memory-caption">` text
4. Alternate `class="memory left"` and `class="memory right"` to zigzag down the timeline.

### Using a video instead of a photo

Replace the `<img>` tag with:

```html
<video controls playsinline src="media/your-video.mp4"></video>
```

Tip: keep videos under ~30 MB so the page loads fast on mobile.

## Previewing locally

Just double-click `index.html`, or run a tiny local server from this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Commit and push to `main`.
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`**.
3. Wait ~1 minute. Site will be live at `https://caden-helbling.github.io/mothers-day/`.

## Working with your brother

- Pull before you start: `git pull`
- One person edits `index.html` at a time to avoid merge conflicts (or split sections).
- Photos can be added in parallel — just drop different filenames.
