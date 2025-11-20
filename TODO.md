# TODO: Restructure UI to Zone-Based Cards with Image Modals

## Step 1: Restructure questsData in script.js
- Group quests by zone instead of sections (zoneDaily, developerH, monsterGuild).
- Combine Caballa Relics and Azteca into one zone "Caballa Relics (Azteca)".
- New structure: zones object with zone names as keys, arrays of quests as values.
- Remove old sections; keep byLocation and statistics as is.

## Step 2: Update index.html
- Replace tabs with a grid of zone cards.
- Each card shows zone name and list of quests.
- Add modal HTML: overlay div with image, zone name, and close button (X).

## Step 3: Modify renderSection in script.js
- Change to render quests within cards.
- Update link behavior: instead of external link, open modal with image for the zone.

## Step 4: Add modal functions in script.js
- Function to open modal: pass zone name, load image from assets/images/{zone}.png (placeholder).
- Function to close modal.

## Step 5: Update style.css
- Add styles for zone cards: grid layout, card appearance (background, padding, etc.).
- Add styles for modal: overlay, image display, close button.

## Step 6: Test the changes
- Verify card layout renders correctly.
- Test modal opens/closes with placeholder images.
- Ensure quest checkboxes still work.
