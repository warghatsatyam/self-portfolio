// Medium Integration for Portfolio Blog
class MediumIntegration {
    constructor() {
        this.mediumPosts = [];
        this.initializeIntegration();
    }

    initializeIntegration() {
        // Initialize Medium post handling
        document.addEventListener('DOMContentLoaded', () => {
            this.loadMediumPosts();
            this.setupMediumEmbeds();
        });
    }

    // Create a Medium post card element
    createMediumCard(post) {
        const card = document.createElement('article');
        card.className = 'post-card medium-post';
        card.setAttribute('data-categories', post.categories.join(' '));
        
        card.innerHTML = `
            <div class="post-card-inner">
                <div class="medium-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    <span>Medium</span>
                </div>
                ${post.seriesName ? `<div class="post-series-badge">${post.seriesName}</div>` : ''}
                <div class="post-header">
                    <span class="post-date">${this.formatDate(post.date)}</span>
                    <div class="post-categories">
                        ${post.tags.map(tag => `<span class="category-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <h2 class="post-title">
                    <a href="${post.url}" target="_blank" rel="noopener noreferrer">${post.title}</a>
                </h2>
                <p class="post-excerpt">${post.excerpt}</p>
                ${post.imageUrl ? `<img class="post-image" src="${post.imageUrl}" alt="${post.title}" loading="lazy">` : ''}
                <div class="post-meta">
                    <span class="read-time">${post.readTime} min read</span>
                    <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="read-more">
                        Read on Medium 
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                    </a>
                </div>
            </div>
        `;
        
        return card;
    }

    // Format date for display
    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    // Load Medium posts configuration
    async loadMediumPosts() {
        try {
            // Check if there's a medium-posts.json file
            const response = await fetch('data/medium-posts.json');
            if (response.ok) {
                const data = await response.json();
                this.mediumPosts = data.posts;
                if (this.mediumPosts.length > 0) {
                    this.renderMediumPosts();
                } else {
                    this.showEmptyState();
                }
            }
        } catch (error) {
            console.log('No Medium posts configuration found');
            this.showEmptyState();
        }
    }

    // Show empty state when no posts are configured
    showEmptyState() {
        const postsGrid = document.querySelector('.posts-grid');
        if (!postsGrid) return;
        
        postsGrid.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <h3>No Articles Yet</h3>
                <p>Medium articles will appear here once configured.</p>
                <a href="https://medium.com/@warghatsatyam" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    Visit My Medium Profile
                </a>
            </div>
        `;
    }

    // Render Medium posts in the grid
    renderMediumPosts() {
        const postsGrid = document.querySelector('.posts-grid');
        if (!postsGrid || !this.mediumPosts.length) return;

        this.mediumPosts.forEach(post => {
            const card = this.createMediumCard(post);
            // Insert Medium posts at appropriate positions
            if (post.featured) {
                postsGrid.insertBefore(card, postsGrid.firstChild);
            } else {
                postsGrid.appendChild(card);
            }
        });
    }

    // Setup Medium embed functionality for individual posts
    setupMediumEmbeds() {
        const embedContainers = document.querySelectorAll('.medium-embed');
        embedContainers.forEach(container => {
            const url = container.getAttribute('data-url');
            if (url) {
                this.createEmbed(container, url);
            }
        });
    }

    // Create Medium embed iframe
    createEmbed(container, url) {
        // Convert Medium URL to embed URL
        const embedUrl = this.convertToEmbedUrl(url);
        
        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.width = '100%';
        iframe.height = '600';
        iframe.frameBorder = '0';
        iframe.scrolling = 'no';
        iframe.className = 'medium-embed-iframe';
        
        container.appendChild(iframe);
        
        // Add resize listener for responsive embeds
        this.makeEmbedResponsive(iframe);
    }

    // Convert Medium URL to embeddable format
    convertToEmbedUrl(url) {
        // Medium doesn't provide direct embed URLs, so we'll create a fallback
        return url;
    }

    // Make embeds responsive
    makeEmbedResponsive(iframe) {
        // Listen for messages from the iframe for dynamic height adjustment
        window.addEventListener('message', (e) => {
            if (e.data.type === 'resize' && e.data.height) {
                iframe.height = e.data.height;
            }
        });
    }
}

// Initialize Medium integration
const mediumIntegration = new MediumIntegration();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MediumIntegration;
}