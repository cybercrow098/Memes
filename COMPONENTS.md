# 📦 Component Documentation

## Core Components

### `App.tsx`
**Purpose**: Main orchestrator and state management

**State**:
- `currentSide`: "trump" | "mamdani" | null
- `showModal`: boolean

**Props Passed**:
- `onChooseSide` → HeroSection
- `currentSide` → CharacterBattle
- `isOpen, onClose, side` → SideModal

**Features**:
- Team indicator badge (top-left)
- Switch sides button (top-right)
- Cursor trail effect (team colored)

---

## Section Components

### `NewsTicker.tsx`
**Purpose**: Rotating fake news banner

**Features**:
- 10 satirical headlines
- Auto-rotates every 4 seconds
- Pulsing LIVE indicator
- Animated transitions
- Sticky positioning

**No props required**

---

### `HeroSection.tsx`
**Purpose**: Main landing with team selection

**Props**:
- `onChooseSide: (side: "trump" | "mamdani") => void`

**Features**:
- Glitching $WARTOKEN logo
- Animated icons (Sparkles, Zap, Flame)
- Team selection buttons
- Floating particle background
- Pulsing text shadows

---

### `CharacterBattle.tsx`
**Purpose**: Trump vs Mamdani war zone with scroll animations

**Props**:
- `currentSide: "trump" | "mamdani" | null`

**Features**:
- Scroll-based parallax
- 5 quotes per character (rotating)
- Team highlighting
- Fake Twitter thread
- Character portraits (emoji)

**Quote Rotation**: Every 5 seconds

---

### `Tokenomics.tsx`
**Purpose**: Satirical token distribution breakdown

**Features**:
- 8 animated stat cards
- Color-coded categories
- Hover effects (scale + rotate)
- Animated pie chart
- Legal disclaimer box

**No props required**

**Cards**:
1. Total Supply
2. Burn Mechanism
3. Liquidity Lock
4. Community
5. Marketing
6. Team Tokens
7. Tax Rate
8. Chart Prediction

---

### `PollSection.tsx`
**Purpose**: Live (fake) voting system

**Features**:
- Random fluctuations every 2 seconds
- Animated percentage bars
- Smooth transitions
- Always adds to 100%
- Warning disclaimer

**State**:
- `trumpVotes`: number (20-80 range)
- `mamdaniVotes`: number (complementary)

---

### `Roadmap.tsx`
**Purpose**: Meme-based project phases

**Features**:
- 4 phases with icons
- Alternating left/right layout
- Status indicators
- Gradient backgrounds
- Connecting lines

**Phases**:
1. Chaos Initialization (Complete)
2. Maximum Confusion (In Progress)
3. Still No Utility (Coming Soon)
4. Moon (Maybe) (Delusion Level: Max)

---

### `MemeGenerator.tsx`
**Purpose**: Random meme quote generator

**Features**:
- 10 crypto meme variations
- 3D flip animation
- Click to generate
- Sparkle button icons
- Purple/pink gradient theme

**State**:
- `currentMeme`: number (index)

---

### `WhySection.tsx`
**Purpose**: Self-aware manifesto

**Features**:
- 4 value proposition cards
- Gradient backgrounds
- Staggered animations
- Rotating Sparkles icon
- Final disclaimer

**Themes**:
1. 100% Satire
2. Zero Fake Promises
3. Self-Aware Humor
4. For the Culture

---

### `SocialSection.tsx`
**Purpose**: Community links and contract address

**Features**:
- Contract copy-to-clipboard
- 3 social platform cards
- Fake live stats (4 metrics)
- Skewed hover effects
- Copy success animation

**State**:
- `copied`: boolean

**Social Links**:
- Twitter/X
- Telegram
- Discord

---

### `Footer.tsx`
**Purpose**: Legal disclaimers and closing

**Features**:
- 3-column layout
- Pulsing animations
- Multiple disclaimers
- Easter egg hint (scroll to find)
- Copyright notice

**No props required**

---

## Utility Components

### `GlitchText.tsx`
**Purpose**: Animated RGB glitch effect

**Props**:
- `children: string` (text to glitch)
- `className?: string`
- `intensity?: "low" | "medium" | "high"`

**Features**:
- Auto-glitches at intervals
- RGB split shadows
- Position jitter
- Configurable frequency

**Used in**:
- Hero section logo
- Section headers

---

### `SideModal.tsx`
**Purpose**: Team selection achievement modal

**Props**:
- `isOpen: boolean`
- `onClose: () => void`
- `side: "trump" | "mamdani" | null`

**Features**:
- Full-screen overlay
- 3D spin animation
- Floating team emoji background
- Achievement message
- Team-colored gradient

---

### `SoundToggle.tsx`
**Purpose**: Sound effects toggle (UI only)

**Features**:
- Floating button (bottom-right)
- Volume2/VolumeX icons
- Green/gray color states
- Hover animations
- Currently cosmetic

**State**:
- `soundEnabled`: boolean

---

### `EasterEgg.tsx`
**Purpose**: Hidden achievement system

**Triggers**:
1. Konami Code sequence
2. Triple-click center

**Features**:
- Full-screen takeover
- Rotating party emoji
- Achievement unlock
- Self-destructs after 5s
- Invisible clickable trigger

**State**:
- `showSecret`: boolean
- `clickCount`: number

---

## Component Tree

```
App
├── NewsTicker
├── HeroSection
│   └── GlitchText
├── CharacterBattle (receives currentSide)
├── Tokenomics
├── PollSection
├── Roadmap
├── MemeGenerator
├── WhySection
├── SocialSection
├── Footer
├── SideModal (receives isOpen, onClose, side)
├── SoundToggle
└── EasterEgg
```

---

## Shared Dependencies

### Animation Library
**Motion/React** (`motion/react`)
- All major components use it
- Common patterns:
  - `initial`, `animate`, `exit`
  - `whileInView` for scroll triggers
  - `whileHover`, `whileTap` for interactions

### Icon Library
**Lucide React**
- Verified exports used
- Common icons:
  - Zap, Flame, Sparkles (energy)
  - Twitter, MessageCircle, Users (social)
  - Lock, Shield, Target (security)
  - Copy, Volume2, VolumeX (actions)

### UI Components
**Radix UI + Custom**
- Button component used throughout
- Custom styling with Tailwind
- Accessible by default

---

## State Management

### Global State (App.tsx)
- `currentSide`: Flows to CharacterBattle, SideModal
- `showModal`: Controls SideModal visibility

### Local State (Component Level)
- `NewsTicker`: Current headline index
- `CharacterBattle`: Quote rotation indices
- `PollSection`: Vote percentages
- `MemeGenerator`: Current meme index
- `SocialSection`: Copy success state
- `SoundToggle`: Sound enabled state
- `EasterEgg`: Secret visibility + click count

### No Global Store Needed
- Simple prop drilling
- Minimal shared state
- Component autonomy

---

## Styling Strategy

### Tailwind Classes
- Gradient backgrounds
- Border styles
- Spacing and layout
- Responsive breakpoints
- Hover states

### Custom CSS
- Glitch keyframes
- Float animations
- Pulse glow effects
- Custom scrollbar
- Smooth scroll behavior

### Theme Colors
- **Red**: Trump team, warnings
- **Blue**: Mamdani team, info
- **Purple**: Neutral actions
- **Yellow**: Highlights, warnings
- **Black**: Primary background

---

## Performance Notes

### Optimization Techniques
1. **Viewport triggers**: `whileInView` instead of constant animation
2. **Conditional rendering**: Team badges only when side chosen
3. **Memo-free**: Simple enough without memoization
4. **CSS animations**: For simple loops (pulse, spin)
5. **No heavy images**: Emoji only, no raster graphics

### Animation Performance
- Hardware-accelerated transforms
- Opacity changes over display changes
- Staggered delays prevent simultaneous renders
- Exit animations for smooth removal

---

## Accessibility Considerations

### Screen Readers
- `sr-only` class for icon buttons
- Semantic HTML structure
- Proper heading hierarchy
- Alt text on important elements

### Keyboard Navigation
- All buttons keyboard accessible
- Focus states visible
- Modal close with Escape (built-in)
- Logical tab order

### Motion Sensitivity
- No required interactions with animations
- Core content readable without JS
- Animations enhance, don't obstruct

---

## File Size Breakdown

**Total Components**: 14 custom files
**Lines of Code**: ~1800 (excluding UI library)
**External Deps**: 
- motion/react
- lucide-react
- Radix UI components

**Bundle Impact**: Optimized
- Tree-shaking enabled
- No unnecessary imports
- Minimal external deps

---

## Testing Targets

### User Interactions
- [ ] Team selection works
- [ ] Switch sides button functions
- [ ] Contract copy-to-clipboard
- [ ] Meme generator click
- [ ] Easter egg triggers
- [ ] Sound toggle state

### Visual Checks
- [ ] Glitch effects fire
- [ ] Scroll parallax smooth
- [ ] Poll updates automatically
- [ ] News ticker rotates
- [ ] Quotes rotate
- [ ] Modals center properly

### Responsive Checks
- [ ] Mobile layout stacks
- [ ] Buttons touch-friendly
- [ ] Text readable at all sizes
- [ ] No horizontal scroll
- [ ] Animations less intense on mobile

---

**Component library built with chaos, documented with care** 📚
