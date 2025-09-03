# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Satyam Warghat, a Software Engineer with 2+ years of experience delivering enterprise-grade Facility Management and Workforce Management solutions for Fortune 500 clients including ICICI Bank (82+ branches), Capgemini, BNP Paribas, and WTC. The site positions him as lead developer of the Intelliwiz platform and showcases real production systems with measurable business impact.

## Architecture & Structure

### Single Page Application
- **Static HTML portfolio** with vanilla JavaScript and CSS
- **No build process required** - runs directly in browser
- **Responsive design** optimized for mobile-first approach

### File Organization
```
Portfolio/
├── index.html              # Main portfolio page
├── blog.html              # Blog listing page with category filtering
├── styles.css             # Main portfolio styling
├── blog-styles.css        # Blog-specific modern styling
├── script.js              # Portfolio interactions
├── blog-script.js         # Blog functionality
├── blog/                  # Individual blog posts
│   └── django-day1-mvt-architecture.html
├── assets/                # Images and media files
├── newsletter-setup.html  # Email subscription implementation guide
├── email-templates.html   # Email marketing templates
├── enhanced-blog-template.md  # Blog post template for maximum impact
└── 90-day-job-hunt-plan.md    # Complete job search strategy
```

### Key Sections Architecture
The single-page layout includes these main sections in order:
1. **Hero** - Enterprise software engineer positioning with Fortune 500 experience
2. **Work** - Detailed project showcase with real enterprise clients (ICICI, Capgemini, Brigade, WTC)
3. **About** - Honest, authentic story emphasizing practical experience
4. **Blog** - 30-Day Django Interview Prep series + AI learning content
5. **Services** - Automation, web development, problem solving
6. **Learning** - Current skills development (ML, System Design, Psychology + Tech)
7. **Contact** - Multiple connection methods with clear CTAs

### Blog Architecture
- **Modern design** with dark hero section, glassmorphism effects
- **Category filtering** (Django, Python, AI/ML, Tutorials)
- **Code blocks** with copy-to-clipboard functionality
- **Newsletter signup** integration
- **SEO optimized** for technical content discovery

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
- **Blog category filtering** with smooth animations
- **Copy-to-clipboard** for all code snippets
- **Performance optimizations** including lazy loading and debouncing

## Development Commands

### Local Development
```bash
# Start local development server
python3 -m http.server 8000

# View portfolio at http://localhost:8000
```

### Resume Generation
```bash
# View HTML resume
open resume.html

# Generate PDF using LaTeX (Overleaf recommended)
# Upload resume_overleaf_improved.tex to https://overleaf.com
# Compile and download PDF

# Quick HTML-to-PDF helper
open generate-resume-pdf.html
```

### Content Updates
When updating portfolio content:
1. **Personal information** - Update meta tags, hero content, and contact details
2. **Blog posts** - Use enhanced-blog-template.md for maximum impact
3. **Project showcases** - All projects are real enterprise work with verified metrics
4. **Images** - Add images to `assets/` folder and update paths in HTML
5. **Newsletter content** - Use email-templates.html for subscriber communications

### Blog Post Creation Workflow
1. Use enhanced-blog-template.md structure
2. Include "Interview Questions You Can Now Answer" section
3. Add copy-to-clipboard code examples
4. Create accompanying GitHub repository
5. Cross-post to LinkedIn with strategic hashtags

## Key Design Principles

### Personal Brand Strategy
- **Enterprise positioning** as lead developer of Intelliwiz platform serving ICICI Bank, Capgemini, BNP, WTC
- **Technical credibility** through measurable impact metrics (99.7% processing reduction, 70% emergency response improvement)
- **Fortune 500 experience** prominently featured throughout resume and portfolio
- **AI-assisted development** experience highlighted as modern, efficient approach
- **Salary targeting** 15-20 LPA roles leveraging enterprise systems experience

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

### Content Marketing Strategy (Active Implementation)
- **Django 30-day series** - Daily technical content building interview credibility
- **AI tools learning** - Weekly posts showing future-ready mindset
- **Enterprise project showcases** - Real metrics from Fortune 500 deployments
- **Job search transparency** - Public documentation of career progression
- **Newsletter automation** - Email capture and nurturing system

### Brand Building Roadmap (Updated Status)
- **Active**: Daily Django content creation and LinkedIn posting
- **Active**: AI tools experimentation and documentation
- **Planning**: System Design Saturday series
- **Planning**: "Salary Transparency" content
- **Future**: Speaking at Python/Django meetups

### Content Calendar Strategy
- **60% Technical Foundation** (Django/Python) - maintains credibility
- **40% AI/Future-Tech** - positions for premium opportunities
- **Weekly transparency** updates on job search progress
- **Cross-platform distribution** (Blog → LinkedIn → Twitter → GitHub)

## Career Development Strategy

### Current Status
- **Current Role**: Software Developer at SPS (formerly Youtility Technologies)
- **Experience**: 2+ years (May 2022 - Present) - Enterprise facility & workforce management systems
- **Education**: BTech Computer Science, Mumbai University (2016-2020)
- **Target Salary**: 15-20 LPA leveraging Intelliwiz platform experience
- **Contact**: warghatsatyam33@gmail.com, +91-7045053925

### Key Projects & Achievements
1. **Intelliwiz Platform** - Multi-tenant facility management system serving ICICI Bank (82+ branches), Capgemini, Brigade Group, WTC
   - Managing 500+ security personnel across pan-India operations
   - 70% faster emergency response, 50% reduction in compliance violations
   - Django/GraphQL backend, Redis caching, RabbitMQ messaging, Flutter mobile app
   - 99.9% uptime, handling 10K+ daily transactions
2. **JNPT Attendance System** - 99.7% processing time reduction (4hrs → 30sec) for 200+ employees
3. **Enterprise LMS** - 93% video load time improvement with 50+ language support, AI-assisted development
4. **Infrastructure Migration** - Led 100+ employee migration, saved ₹15L annually

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
- **Current**: Software Developer (undervalued)
- **Target**: "Enterprise Software Engineer + AI Implementation Specialist"
- **Unique Value**: Fortune 500 workforce systems + AI-awareness + content creation
- **Long-term**: Technical Leadership / Senior Engineer at product companies

### Job Search Strategy (90-Day Plan Active)
**Tier 1 Target Companies** (Workforce/B2B SaaS):
- Darwinbox, Keka, GreyHR, Zoho, Freshworks

**Tier 2 Target Companies** (Product Companies):
- Razorpay, Cred, Swiggy, Zomato, Paytm

**Strategy**: Content marketing + networking + strategic applications
**Timeline**: 15-20 LPA offer within 6 months

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

### Personal Brand Building (Active Execution)
- ✅ Portfolio site with professional blog infrastructure
- 🔄 Django 30-day series (Day 1 complete, 29 to go)
- 🔄 AI tools documentation and learning posts
- 🔄 LinkedIn "building in public" strategy active
- 🔄 GitHub repositories for each blog post
- 📅 Planned: System Design content series
- 📅 Planned: Salary transparency and job search documentation

### Implementation Notes for Future Updates
- **Blog posts** should follow enhanced-blog-template.md structure
- **Code examples** must include copy-to-clipboard functionality  
- **Cross-platform posting** strategy: Blog → LinkedIn → GitHub → Email subscribers
- **Newsletter growth** target: 500 subscribers by end of Django series
- **Job applications** should reference blog content as demonstration of skills

### Success Metrics Tracking
- Blog subscribers: Target 500+ 
- LinkedIn followers: Target 1000+
- Interview calls per month: Target 5+
- Salary offers: Target 15-20 LPA range
- Content engagement: Track post views, shares, comments

### Hosting & Infrastructure
- **Current**: Local development with Python HTTP server
- **Portfolio**: https://harshadcharnia.netlify.app/ (live site)
- **GitHub**: https://github.com/warghatsatyam (source code)
- **LinkedIn**: https://www.linkedin.com/in/warghatsatyam/
- **Resume**: Both HTML (`resume.html`) and LaTeX (`resume_overleaf_improved.tex`) versions available