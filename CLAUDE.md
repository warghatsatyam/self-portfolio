# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Satyam Warghat, an AI-focused developer with 3+ years of experience. The site is designed for personal brand building and showcasing AI/ML expertise alongside full-stack development capabilities.

## Architecture & Structure

### Single Page Application
- **Static HTML portfolio** with vanilla JavaScript and CSS
- **No build process required** - runs directly in browser
- **Responsive design** optimized for mobile-first approach

### File Organization
```
Portfolio/
├── index.html          # Main portfolio page with all sections
├── styles.css          # Complete styling with CSS custom properties
├── script.js           # Interactive features and animations
└── assets/             # Images and media files
    ├── hero-image.png
    ├── about-image.png
    └── og-image.png
```

### Key Sections Architecture
The single-page layout includes these main sections in order:
1. **Hero** - Personal branding with AI/ML positioning
2. **Work** - Project showcase (currently placeholder content)
3. **About** - Personal story emphasizing 3-year experience 
4. **Achievements** - Quantified metrics and results
5. **Services** - AI consulting, full-stack dev, strategic consulting
6. **Brand Building** - Personal brand roadmap with status badges
7. **Contact** - Multiple connection methods

### CSS Design System
Uses CSS custom properties in `:root` for consistent theming:
- **Color scheme**: Black/white with blue accent (#0066ff)
- **Typography**: Inter font with fluid scaling using `clamp()`
- **Spacing**: Consistent spacing scale from xs (0.5rem) to 3xl (8rem)
- **Responsive**: Mobile-first with breakpoints at 768px, 1024px

### JavaScript Features
- **Mobile navigation** with hamburger menu
- **Scroll-based animations** using Intersection Observer
- **Smooth scrolling** for anchor links with header offset
- **Dynamic navbar** that hides/shows on scroll
- **Custom cursor effect** (desktop only)
- **Form handling** for newsletter and contact forms
- **Performance optimizations** including lazy loading and debouncing

## Development Commands

### Local Development
```bash
# Start local development server
python3 -m http.server 8000

# View portfolio at http://localhost:8000
```

### Content Updates
When updating portfolio content:
1. **Personal information** - Update meta tags, hero content, and contact details
2. **Projects** - Replace placeholder project cards with real work examples
3. **Images** - Add images to `assets/` folder and update paths in HTML
4. **Achievements** - Update metrics with real, verifiable results

## Key Design Principles

### Personal Brand Strategy
- **Authentic positioning** for 3 years experience (not overselling)
- **AI specialization** focus while maintaining full-stack credibility
- **Growth trajectory** shown through brand building section
- **Multiple revenue streams** positioning (employment + consulting + content)

### SEO & ATS Optimization
- **Keyword-rich** meta descriptions for recruiter discovery
- **Structured data** markup for better search visibility
- **Social media** optimization with Open Graph and Twitter Card tags

### Performance Considerations
- **No external dependencies** except Google Fonts
- **Optimized images** should be compressed and properly sized
- **Lazy loading** implemented for images
- **Minimal JavaScript** for fast initial load

## Content Strategy Notes

### Current Status (Needs Improvement)
- **Placeholder projects** - Replace with real work examples
- **Generic metrics** - Need specific, verifiable achievements
- **Missing testimonials** - Add client/colleague recommendations
- **No real content** - Brand building section shows plans but no actual content

### Brand Building Roadmap
The portfolio includes a strategic brand building section with status badges:
- **Available**: AI Consulting (immediate revenue opportunity)
- **Coming Soon**: Technical Writing (thought leadership)
- **Future Goal**: Speaking & Workshops (long-term positioning)

Update these statuses as you progress through your brand building journey.

## Career Development Strategy

### Current Status
- **Current Role**: Software Developer at SPS (formerly Youtility Technologies)
- **Experience**: 3+ years (Jan 2021 - Present)
- **Current Salary**: 7 LPA (significantly underpaid for skillset)
- **Target Salary**: 15-25 LPA based on enterprise experience

### Key Projects & Achievements
1. **Intelliwiz** - Security operations management system for guards deployed at ICICI Bank sites pan-India, plus Capgemini, Brigade Group, WTC facilities
2. **JNPT Attendance System** - Reduced processing from 4hrs to 30sec for 200+ personnel
3. **Agreement Generator** - Automated ICICI Bank agreements for 82+ branches (3 days → 5 min)
4. **Enterprise LMS** - 93% video load time improvement, 50+ language support
5. **IT Infrastructure Migration** - Led 100+ employee migration from Windows to Ubuntu
6. **MindShift** (Personal Project) - NLP-powered self-help app in development

### Psychology + Tech Learning Path

#### Immediate Courses (Free/Low Cost)
- Yale's "Science of Well-being" - Coursera (Free audit)
- Stanford's "Introduction to Psychology" - Online free
- Harvard's "Managing Happiness" - edX

#### Certification Path (6 months)
1. **Month 1-2**: Foundation psychology courses
2. **Month 3-4**: NLP Practitioner certification
3. **Month 5-6**: CBT basics, beta testing MindShift app

#### Target Credentials
- Certified NLP Practitioner
- CBT Practitioner Certificate
- IGNOU PG Diploma in Counselling (optional, 2 years)

### Positioning Strategy
- **Current**: Software Developer
- **Target**: "AI-Focused Developer specializing in Psychology-informed Systems"
- **Long-term**: Technical Mental Health Innovator / Founder

### Job Search Strategy
**Target Companies**:
- Product startups (better pay than service companies)
- Mental health tech companies
- Companies with behavioral design teams (Google, Meta, Microsoft)

**Avoid**: Traditional service companies (TCS, Infosys, Wipro)

### Interview Preparation Notes
- Emphasize enterprise clients (ICICI, Capgemini)
- Highlight measurable impact (95% time reduction, 93% performance gains)
- Frame AI tool usage positively: "I leverage modern tools for rapid prototyping"
- Prepare for DSA rounds: 50 leetcode mediums minimum

### Salary Negotiation Points
- Serving ICICI Bank (banking experience commands premium)
- Pan-India deployment (architect-level work)
- Multiple Fortune 500 clients
- Building own product (entrepreneurial mindset)

### Personal Brand Building
- Portfolio site ready for Netlify deployment
- LinkedIn content strategy: "Building in public" updates
- GitHub activity to show consistent work
- Blog potential: AI + Mental Health intersection