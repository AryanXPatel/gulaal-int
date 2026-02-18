# Gulaal International — Image Generation Prompts
> Generated using nano-banana-pro skill (6 core rules applied)
> Save outputs to: `public/gulaal/`

---

## Hero Section

### `hero-main.avif` — Main portrait (right column, large card)
```
Confident UAE businesswoman, late 20s, natural curly dark hair, wearing a crisp white linen shirt, looking slightly off-camera with a calm assured expression. Editorial portrait.

Visual Style:
Annie Leibovitz portrait aesthetics. Predominantly white and light grey tones with warm skin undertones. Shot with 90mm lens, f/1.8, Kodak Vision3 500T grain.

Lighting & Atmosphere:
Soft diffused natural window light from the left, gentle fill on shadow side. Clean white studio background. Airy, modern, professional confidence. The texture of the linen shirt feels tangible.

Composition:
Upper body portrait, slight 3/4 angle, generous negative space on right side. Subject occupies left 60% of frame.

Constraints:
Maintain realistic facial features. No text or watermarks. No harsh shadows. No cluttered background. No artificial studio flash look.
```

### `hero-secondary.avif` — Secondary card (right column, small card)
```
Floating smartphone showing a clean project management dashboard UI — task cards, progress indicators, team avatars. Minimal flat design, white background.

Visual Style:
Apple product aesthetics. Swiss International Style UI. Monochromatic palette — white background, black typography, subtle grey cards. Premium advertising photography.

Lighting:
Soft studio lighting, high-key. Floating device with subtle drop shadow.

Technical:
100mm macro lens, f/8, high dynamic range. White seamless background.

Constraints:
No text watermarks. No product distortion. No busy backgrounds. UI elements must be clean. No neon colors.
```

---

## Service Cards — Project Management Tab

### `pm-define.avif`
```
UAE professional woman reviewing project brief documents on a clean white desk, laptop open beside her, confident focused expression. Editorial lifestyle photography.

Visual Style:
Saul Leiter editorial aesthetics. Warm neutral tones — cream, off-white, warm grey. Shot with 85mm lens, f/2.0, Fujifilm Superia grain.

Lighting:
Soft overhead natural light, diffused. Clean minimal workspace. Professional warmth.

Constraints:
No text overlays. No cluttered desk. Maintain realistic proportions. No harsh shadows.
```

### `pm-assign.avif`
```
Two UAE professionals collaborating over a laptop in a modern bright office, one pointing at screen, both engaged. Editorial workplace photography.

Visual Style:
Christopher Doyle cinematography aesthetics. Clean, bright, airy. Warm skin tones against white walls. 85mm lens, f/1.8, shallow depth of field on subjects.

Lighting:
Large window natural light, soft fill. Bright, optimistic, collaborative energy.

Constraints:
No text. No cluttered background. Maintain realistic facial features. No stock photo stiffness.
```

### `pm-track.avif`
```
Close-up of a laptop screen showing a clean analytics dashboard with charts and progress metrics, hands on keyboard in foreground, soft bokeh background.

Visual Style:
Apple product aesthetics. Monochromatic UI — white, black, grey. 90mm macro lens, f/2.8, shallow depth of field on screen.

Lighting:
Soft ambient office light. Screen glow. Clean, focused, data-driven atmosphere.

Constraints:
No text watermarks. Screen content must be abstract/generic. No neon colors.
```

### `pm-deliver.avif`
```
UAE businessman in light grey suit shaking hands with a client, both smiling, modern Dubai office lobby background, soft bokeh.

Visual Style:
Annie Leibovitz editorial portrait aesthetics. Warm neutral tones. 90mm lens, f/1.8, Kodak Vision3 500T grain.

Lighting:
Soft natural light from large windows. Warm, confident, successful atmosphere.

Constraints:
Maintain realistic facial features. No text. No cluttered background. No harsh shadows.
```

---

## Service Cards — E-Commerce Tab

### `ecom-launch.avif`
```
Elegant e-commerce product page displayed on a MacBook Pro, showing a clean fashion/lifestyle brand store, placed on a white marble desk.

Visual Style:
Apple product aesthetics. Premium advertising photography. White seamless background. 100mm lens, f/8, high dynamic range.

Lighting:
High-key studio lighting. Clean shadows. Premium, aspirational.

Constraints:
No text watermarks. No product distortion. Screen content must be clean and generic.
```

### `ecom-source.avif`
```
Neatly arranged product samples on a white surface — small boxes, fabric swatches, product tags — overhead flat lay, editorial style.

Visual Style:
Bon Appétit editorial aesthetics adapted for product. Clean, minimal, premium. 45-degree overhead angle, 85mm lens, f/4, high dynamic range.

Lighting:
Soft diffused natural light. No harsh shadows. Clean white background.

Constraints:
No text. No cluttered composition. Maintain clean product proportions.
```

### `ecom-campaigns.avif`
```
UAE woman holding a smartphone showing a social media feed with product posts, soft smile, modern minimal background. Lifestyle editorial photography.

Visual Style:
MUJI visual language aesthetics. Airy, minimal, warm. 85mm lens, f/1.8, Fujifilm Superia grain.

Lighting:
Soft natural window light. Warm, approachable, modern.

Constraints:
Maintain realistic facial features. No text watermarks. No cluttered background.
```

### `ecom-scale.avif`
```
Clean growth analytics chart on a tablet screen, upward trending line graph in black on white, placed on a minimal white desk with a coffee cup in soft bokeh.

Visual Style:
Swiss International Style. Monochromatic — black, white, grey. 90mm lens, f/2.8, shallow depth of field.

Lighting:
Soft ambient light. Clean, data-driven, optimistic.

Constraints:
No text watermarks. Chart must be abstract/generic. No neon colors.
```

---

## CTA Section Background Portraits

### `cta-portrait-1.avif`
```
UAE businesswoman, 30s, elegant minimal style, white top, looking directly at camera with quiet confidence. Tight editorial portrait.

Visual Style:
Annie Leibovitz aesthetics. High contrast black and white with warm skin undertones. 90mm lens, f/1.4, Kodak Vision3 500T grain.

Lighting:
Single soft side light. Deep shadow on opposite side. Dramatic yet approachable.

Constraints:
Maintain realistic facial features. No text. No background clutter.
```

### `cta-portrait-2.avif`
```
UAE businessman, 35s, minimal dark shirt, slight smile, looking off-camera. Editorial portrait, tight crop.

Visual Style:
Saul Leiter aesthetics. Muted warm tones. 90mm lens, f/1.8, Cinestill 800T grain.

Lighting:
Soft natural window light. Warm, professional, trustworthy.

Constraints:
Maintain realistic facial features. No text. No background clutter.
```

### `cta-portrait-3.avif`
```
UAE businesswoman, 25s, natural hair, casual smart style, looking down at phone with a slight smile. Lifestyle editorial.

Visual Style:
Christopher Doyle cinematography aesthetics. Warm neutral palette. 85mm lens, f/2.0, shallow depth of field.

Lighting:
Soft overhead natural light. Warm, modern, relatable.

Constraints:
Maintain realistic facial features. No text. No cluttered background.
```

---

## File Placement
Save all images to: `d:\tmp\gulaal-int\public\gulaal\`

Then update Hero.tsx slide paths:
- `heroSlides[0].main` → `/gulaal/hero-main.avif`
- `heroSlides[0].secondary` → `/gulaal/hero-secondary.avif`

Update Services.tsx card image paths:
- PM cards: `/gulaal/pm-define.avif`, `/gulaal/pm-assign.avif`, `/gulaal/pm-track.avif`, `/gulaal/pm-deliver.avif`
- Ecom cards: `/gulaal/ecom-launch.avif`, `/gulaal/ecom-source.avif`, `/gulaal/ecom-campaigns.avif`, `/gulaal/ecom-scale.avif`

Update ContactCTA.tsx background portrait paths:
- `/gulaal/cta-portrait-1.avif`, `/gulaal/cta-portrait-2.avif`, `/gulaal/cta-portrait-3.avif`
