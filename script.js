// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', false);
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = 'none';
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Observe project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// Observe service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
const newsletterForm = document.querySelector('.newsletter-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send the data to a server
        console.log('Contact form submitted:', data);
        
        // Show success message
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Message Sent!';
        button.style.background = '#10b981';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 3000);
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        console.log('Newsletter subscription:', email);
        
        // Show success message
        const button = newsletterForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Subscribed!';
        button.style.background = '#10b981';
        
        // Reset form
        newsletterForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 3000);
    });
}

// Typing animation for hero title
const titleLines = document.querySelectorAll('.title-line');
titleLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(20px)';
    setTimeout(() => {
        line.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
    }, index * 200);
});

// Parallax effect for hero image
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Count animation for stats (only for numeric values)
const stats = document.querySelectorAll('.stat-number');
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            const target = entry.target;
            const originalText = target.textContent;
            const finalNumber = parseInt(originalText);
            
            // Only animate if it's actually a number
            if (!isNaN(finalNumber)) {
                let currentNumber = 0;
                const increment = finalNumber / 50;
                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        target.textContent = finalNumber + '+';
                        clearInterval(timer);
                        target.dataset.counted = true;
                    } else {
                        target.textContent = Math.floor(currentNumber) + '+';
                    }
                }, 30);
            } else {
                // For text content like "AI/ML", just mark as counted
                target.dataset.counted = true;
            }
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => {
    countObserver.observe(stat);
});

// Cursor effect (optional premium feature)
const createCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    const animateCursor = () => {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.transform = `translate(${cursorX - 15}px, ${cursorY - 15}px)`;
        cursorDot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
        
        requestAnimationFrame(animateCursor);
    };
    
    animateCursor();
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.background = 'rgba(0, 102, 255, 0.1)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
            cursor.style.background = 'transparent';
        });
    });
};

// Add custom cursor styles to the page
const cursorStyles = document.createElement('style');
cursorStyles.textContent = `
    .custom-cursor {
        position: fixed;
        width: 30px;
        height: 30px;
        border: 2px solid rgba(0, 102, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: width 0.3s, height 0.3s, background 0.3s;
        mix-blend-mode: difference;
    }
    
    .cursor-dot {
        position: fixed;
        width: 6px;
        height: 6px;
        background: #0066ff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
    }
    
    @media (max-width: 768px) {
        .custom-cursor,
        .cursor-dot {
            display: none;
        }
    }
`;

document.head.appendChild(cursorStyles);

// Enable custom cursor only on desktop
if (window.innerWidth > 768) {
    createCursor();
}

// Lazy loading for images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
        }
    });
}, { rootMargin: '50px' });

images.forEach(img => {
    if (img.dataset.src) {
        imageObserver.observe(img);
    }
});

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll event listeners
const optimizedScroll = debounce(() => {
    // Your scroll logic here
}, 10);

window.addEventListener('scroll', optimizedScroll, { passive: true });

// Preload critical resources
const preloadResources = () => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/assets/hero-image.png';
    document.head.appendChild(link);
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    preloadResources();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Portfolio site initialized successfully!');

// RSS Feed Integration for Blog Posts
const BlogFeedIntegration = {
    // Configuration for different platforms
    feeds: {
        medium: {
            url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourusername',
            platform: 'Medium'
        },
        devto: {
            url: 'https://dev.to/api/articles?username=yourusername',
            platform: 'Dev.to'
        }
    },
    
    // Initialize the blog feed
    init() {
        this.loadBlogPosts();
        // Refresh posts every 30 minutes
        setInterval(() => this.loadBlogPosts(), 30 * 60 * 1000);
    },
    
    // Load blog posts from feeds
    async loadBlogPosts() {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) return;
        
        try {
            // Show loading state
            this.showLoadingState(blogGrid);
            
            // Fetch posts from different sources
            const posts = await this.fetchAllPosts();
            
            // Sort by date (newest first)
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            // Display the posts (limit to 6)
            this.displayPosts(posts.slice(0, 6), blogGrid);
            
        } catch (error) {
            console.error('Error loading blog posts:', error);
            this.showErrorState(blogGrid);
        }
    },
    
    // Fetch posts from all configured sources
    async fetchAllPosts() {
        const allPosts = [];
        
        // Fetch from Medium (using RSS2JSON service)
        try {
            const mediumResponse = await fetch(this.feeds.medium.url);
            if (mediumResponse.ok) {
                const mediumData = await mediumResponse.json();
                if (mediumData.status === 'ok') {
                    const mediumPosts = mediumData.items.map(item => ({
                        title: item.title,
                        link: item.link,
                        excerpt: this.cleanExcerpt(item.description),
                        date: item.pubDate,
                        platform: 'Medium',
                        categories: item.categories || []
                    }));
                    allPosts.push(...mediumPosts);
                }
            }
        } catch (error) {
            console.warn('Could not fetch Medium posts:', error);
        }
        
        // Fetch from Dev.to
        try {
            const devtoResponse = await fetch(this.feeds.devto.url);
            if (devtoResponse.ok) {
                const devtoPosts = await devtoResponse.json();
                const formattedDevtoPosts = devtoPosts.map(post => ({
                    title: post.title,
                    link: post.url,
                    excerpt: post.description,
                    date: post.published_at,
                    platform: 'Dev.to',
                    categories: post.tag_list || []
                }));
                allPosts.push(...formattedDevtoPosts);
            }
        } catch (error) {
            console.warn('Could not fetch Dev.to posts:', error);
        }
        
        // If no posts fetched, return sample posts
        if (allPosts.length === 0) {
            return this.getSamplePosts();
        }
        
        return allPosts;
    },
    
    // Clean HTML from excerpt
    cleanExcerpt(html) {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        const text = temp.textContent || temp.innerText || '';
        return text.substring(0, 150) + '...';
    },
    
    // Display posts in the grid
    displayPosts(posts, container) {
        container.innerHTML = posts.map(post => this.createPostCard(post)).join('');
        
        // Add animation
        const cards = container.querySelectorAll('.blog-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    },
    
    // Create HTML for a single post card
    createPostCard(post) {
        const formattedDate = this.formatDate(post.date);
        const tags = post.categories.slice(0, 3).map(tag => 
            `<span class="blog-tag">${tag}</span>`
        ).join('');
        
        return `
            <article class="blog-card" style="opacity: 0; transform: translateY(20px); transition: all 0.5s ease;">
                <div class="blog-meta">
                    <span class="blog-date">${formattedDate}</span>
                    <span class="blog-platform">${post.platform}</span>
                </div>
                <h3 class="blog-title">
                    <a href="${post.link}" target="_blank" rel="noopener noreferrer">
                        ${post.title}
                        <svg class="external-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">${tags}</div>
            </article>
        `;
    },
    
    // Format date for display
    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
        
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    },
    
    // Show loading state
    showLoadingState(container) {
        container.innerHTML = `
            <div class="blog-loading" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div class="loading-spinner"></div>
                <p style="color: var(--color-gray-600); margin-top: 1rem;">Loading latest posts...</p>
            </div>
        `;
    },
    
    // Show error state
    showErrorState(container) {
        container.innerHTML = `
            <div class="blog-error" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <p style="color: var(--color-gray-600);">Unable to load posts. Showing sample content.</p>
            </div>
        `;
        
        // Show sample posts after error
        setTimeout(() => {
            this.displayPosts(this.getSamplePosts(), container);
        }, 1000);
    },
    
    // Get sample posts for fallback
    getSamplePosts() {
        return [
            {
                title: 'From Service to Product: My Journey in Tech',
                link: 'https://medium.com/@yourusername',
                excerpt: 'Lessons learned from 3 years in service companies and why I\'m transitioning to product development.',
                date: new Date().toISOString(),
                platform: 'Medium',
                categories: ['Career', 'Tech Journey']
            },
            {
                title: 'Building Enterprise Solutions with AI: ICICI Bank Case Study',
                link: 'https://dev.to/yourusername',
                excerpt: 'How we automated agreement generation for 82+ branches, reducing processing time from 3 days to 5 minutes.',
                date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
                platform: 'Dev.to',
                categories: ['AI', 'Automation', 'Case Study']
            },
            {
                title: 'Psychology Meets Code: Building Mental Health Tech',
                link: 'https://hashnode.com/@yourusername',
                excerpt: 'The intersection of psychology and technology: Building MindShift, an NLP-powered self-help application.',
                date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
                platform: 'Hashnode',
                categories: ['Mental Health', 'NLP', 'Product']
            }
        ];
    }
};

// Initialize blog feed when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if we're on a page with blog section
    if (document.querySelector('.blog-grid')) {
        // Uncomment the line below when you have your actual usernames configured
        // BlogFeedIntegration.init();
        
        // For now, show sample posts
        const blogGrid = document.querySelector('.blog-grid');
        BlogFeedIntegration.displayPosts(BlogFeedIntegration.getSamplePosts(), blogGrid);
    }
});