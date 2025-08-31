# Windows Phone Magnetic Tiles Implementation - Next Steps

## Current State
✅ **Database Migration Complete**
- Renamed table from `links` to `b_links`
- Added new columns: `tile_size`, `position`, `tile_color`, `live_content`
- Updated TypeScript interfaces with new fields
- Updated data fetching to use new table name

## Implementation Roadmap

### Phase 1: Tile Layout System (Priority: High)
Create the foundational grid system for Windows Phone-style tiles.

**1.1 Create New Tile Component**
```typescript
// components/HomeTile.tsx
- Accept tile_size prop ('small' | 'medium' | 'wide' | 'large')
- Map sizes to grid spans:
  - small: 1×1
  - medium: 2×1 (horizontal)
  - wide: 4×1 (full width)
  - large: 2×2 (square)
- Apply tile_color as background with opacity
- Display live_content if available
```

**1.2 Update HomeIconsClient Layout**
```typescript
// components/HomeIconsClient.tsx
- Replace uniform grid with dynamic CSS Grid
- Use CSS custom properties for responsive sizing
- Sort tiles by position field instead of weight
- Group tiles efficiently to minimize gaps
```

### Phase 2: Visual Design (Priority: High)
Implement the signature Windows Phone aesthetic.

**2.1 Tile Styling**
- Flat design with subtle shadows on hover
- Smooth color transitions
- Typography hierarchy (title, subtitle, live content)
- Icon positioning based on tile size
- Add pressed state animation (scale: 0.95)

**2.2 Color System**
- Default accent colors palette
- Semi-transparent overlays
- Dark/light theme support
- High contrast borders for accessibility

### Phase 3: User Interactions (Priority: Medium)
Enable customization without drag-and-drop initially.

**3.1 Edit Mode**
- Toggle button to enter/exit edit mode
- Tile size selector (appears on tile corners)
- Color picker for each tile
- Position adjustment controls (↑↓ arrows)
- Save changes to database

**3.2 Responsive Behavior**
- Mobile: 2-3 columns max
- Tablet: 4-6 columns
- Desktop: 8-10 columns
- Automatic reflow based on viewport

### Phase 4: Advanced Features (Priority: Low)
Future enhancements after core functionality.

**4.1 Live Content**
- Weather widget integration
- RSS feed snippets
- Recent blog post previews
- Dynamic counters/statistics

**4.2 Animations**
- Tile flip animations for live content
- Stagger animation on page load
- Parallax effects on scroll
- Magnetic snap feedback

## Technical Implementation Details

### Database Considerations
```sql
-- Consider adding these indexes for performance
CREATE INDEX idx_b_links_position ON b_links(position);
CREATE INDEX idx_b_links_tags ON b_links USING GIN(tags);
```

### Component Structure
```
components/
├── HomeTile.tsx           # Individual tile component
├── HomeTileGrid.tsx       # Grid container with layout logic
├── HomeTileEditor.tsx     # Edit mode controls
└── HomeIconsClient.tsx    # Updated to use new components
```

### State Management
- Use Zustand store for edit mode state
- Track tile positions locally before saving
- Optimistic updates for smooth UX
- Batch database updates

### CSS Grid Strategy
```css
.tile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-auto-flow: dense;
}

.tile-small { grid-column: span 1; grid-row: span 1; }
.tile-medium { grid-column: span 2; grid-row: span 1; }
.tile-wide { grid-column: span 4; grid-row: span 1; }
.tile-large { grid-column: span 2; grid-row: span 2; }
```

## Immediate Next Steps

1. **Create HomeTile Component** - Build the basic tile with size variants
2. **Update HomeIconsClient** - Implement dynamic grid layout
3. **Add Basic Styling** - Windows Phone flat design aesthetic
4. **Test Responsive Layout** - Ensure mobile-first experience
5. **Implement Position Sorting** - Use position field for ordering

## Testing Checklist
- [ ] Tiles render with correct sizes
- [ ] Colors apply properly with transparency
- [ ] Grid reflows on window resize
- [ ] Position sorting works correctly
- [ ] Fallback for missing tile_size values
- [ ] Performance with 20+ tiles
- [ ] Accessibility (keyboard navigation, screen readers)

## References
- [Windows Phone Design Guidelines](https://docs.microsoft.com/en-us/previous-versions/windows/apps/hh781237(v=win.10))
- [CSS Grid Dense Packing](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
- [Framer Motion Gestures](https://www.framer.com/motion/gestures/)