# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a **Nextra-based blog/documentation site** built with Next.js. The architecture follows a content-driven approach:

### Core Structure
- **Content Management**: All content lives in `/content/` directory with MDX files
- **Dynamic Routing**: Uses Next.js App Router with `[[...mdxPath]]` catch-all route
- **Component System**: Extensive custom component library in `/components/`
- **State Management**: Uses Jotai for global state, Zustand for specific features
- **Styling**: Tailwind CSS with custom theme and 3D effects plugin

### Key Architectural Patterns
- **Date-based Content Organization**: Time-based folders (z202507/, z202506/, etc.) for chronological content
- **Custom Meta Generation**: Automated `_meta.ts` files for content organization
- **Component-driven MDX**: Rich interactive components embedded in markdown content
- **Multi-language Support**: Japanese and English content with proper font handling

## Development Commands

```bash
# Development server with HTTPS and Turbopack
pnpm dev

# Build the site (includes meta generation)
pnpm build

# Production server
pnpm start

# Generate meta files for content organization
pnpm generate-meta
```

## Build Process

1. **Pre-build**: `generate-meta` script automatically creates `_meta.ts` files for content organization
2. **Build**: Next.js builds the site with Nextra
3. **Post-build**: Pagefind generates search index for the site

## Code Writing Permission System

This project implements a strict permission-based development workflow:

### Permission Commands
- **"+x"** alone - Grant code writing permission (persistent until revoked)
- **"-x"** alone - Revoke code writing permission (return to explanation-only mode)
- **"+x [request]"** - Grant permission and immediately execute the code request
- **"-x [message]"** - Revoke permission and optionally respond to message

### Permission Rules
- **Default state**: Permission is revoked (-x) - Discussion mode
- **When permission is GRANTED (+x)**: Write code for any implementation requests
- **When permission is REVOKED (-x)**: Discussion mode - actively seek clarification and alignment
- **Persistence**: Permission state continues until explicitly changed

### Discussion Mode Behavior (-x)
When in discussion mode, Claude should:
1. **Ask clarifying questions** to understand requirements fully
2. **Gather context** about the user's project, constraints, and goals
3. **Suggest alternatives** and best practices during discussion
4. **Confirm alignment** before suggesting to switch to implementation mode
5. **Build comprehensive understanding** through progressive questioning

### Response Requirements
Always end responses with current permission status:
```
Permission status: +x
```
or
```
Permission status: -x
```

### Discussion Mode Guidelines
1. **Start broad, then narrow**: Begin with high-level questions, then drill into specifics
2. **Consider context**: Reference existing codebase and project structure when relevant
3. **Suggest best practices**: Offer guidance on architecture, patterns, and tools during discussion
4. **Identify dependencies**: Ask about related systems, APIs, or constraints
5. **Confirm understanding**: Summarize gathered requirements before suggesting implementation
6. **Number all questions**: Always use numbered lists (1, 2, 3...) for multiple questions
7. **Accept indexed responses**: Process user responses in format "1 answer 2 answer 3 answer"

## Content System

### Content Structure
- **Archives/**: Legacy content organized by categories (1project/, 2area/, 3resource/, 4archived/)
- **Monthly Folders**: Current content in `z{YYYYMM}` format (e.g., z202507/)
- **Feature Folders**: Specialized content (fedora/, japan/, tech/, etc.)

### Meta File Generation
The `generate-meta.js` script automatically manages `_meta.ts` files:
- Preserves existing manual entries
- Auto-generates entries for date folders in descending order
- Formats as "YYYY-MM" titles

## Component Architecture

### Base Components
- **Base*** components**: Fundamental UI building blocks (BaseButton, BaseText, etc.)
- **Rich*** components**: Feature-rich content components (RichImage, RichVideo)
- **Card*** components**: Various card layouts and presentations

### Specialized Systems
- **Drama Components**: Character-based dialogue system
- **Quiz App**: Interactive quiz functionality with hooks
- **Animation**: Custom animation components including 3D effects
- **Programming**: Code-related display components

## Typography & Fonts
- **Japanese Support**: KleeOne, YuKyokasho fonts
- **Chinese Support**: FZBIAOYSK, LXGWWenKai fonts
- **Accessibility**: Atkinson Hyperlegible font
- **Code**: Inconsolata Nerd Font

## Technical Stack

### Core Dependencies
- **Next.js 15**: App Router, TypeScript
- **Nextra**: Documentation framework with LaTeX support
- **Tailwind CSS 4**: Utility-first CSS with custom configuration
- **MDX**: Enhanced markdown with React components

### Data & State
- **Jotai**: Atomic state management
- **Zustand**: Store-based state management
- **Supabase**: Database and authentication (SSR setup)

### 3D & Interactive Elements
- **Three.js Integration**: @react-three/fiber and @react-three/drei
- **Particle Effects**: @tsparticles integration
- **Framer Motion**: Animation library
- **3D CSS**: tailwindcss-3d plugin

## Development Notes

### TypeScript Configuration
- **Strict mode disabled**: `"strict": false` for flexibility
- **Path aliases**: `"data"` alias points to `./data`
- **Bundler resolution**: Modern module resolution

### Content Development
- Use existing component patterns before creating new ones
- Follow established naming conventions for monthly folders
- Leverage the meta generation system for content organization
- Consider Japanese/Chinese typography requirements

### Testing & Quality
- No formal testing framework configured
- Relies on TypeScript checking and Next.js built-in validation
- Use `pnpm build` to verify production readiness