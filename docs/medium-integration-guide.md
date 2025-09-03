# Medium Integration Guide

## How to Add Your Medium Articles to Your Portfolio

### Quick Setup

1. **Edit the JSON file**: Open `/data/medium-posts.json`
2. **Add your Medium article** using this format:

```json
{
  "title": "Your Article Title",
  "url": "https://medium.com/@yourusername/article-url",
  "excerpt": "Brief 150-character description",
  "date": "2025-01-03",
  "readTime": 5,
  "imageUrl": "https://miro.medium.com/your-image.jpg",
  "tags": ["Python", "Django"],
  "categories": ["python", "django"],
  "featured": false
}
```

### Field Descriptions

- **title**: Exact title from your Medium article
- **url**: Full Medium article URL
- **excerpt**: Short description (max 150 chars)
- **date**: Publication date (YYYY-MM-DD format)
- **readTime**: Estimated reading time in minutes
- **imageUrl**: (Optional) Featured image URL from Medium
- **tags**: Display tags shown on the card
- **categories**: Filter categories (must match: python, django, ai, tutorial)
- **seriesName**: (Optional) If part of a series like "30-Day Django"
- **featured**: Set to `true` to show at the top of the page

### How It Works

1. **Automatic Display**: Medium posts appear alongside your local blog posts
2. **Visual Indicator**: Medium badge appears on cards
3. **External Links**: "Read on Medium" opens in new tab
4. **Category Filtering**: Works with existing blog filters
5. **SEO Friendly**: Maintains your portfolio's SEO while linking to Medium

### Benefits of This Approach

✅ **Write Once**: Publish on Medium, display on portfolio
✅ **Medium Stats**: Get views, claps, and followers on Medium
✅ **Portfolio Control**: Maintain your professional site
✅ **Best of Both**: Medium's reach + portfolio's customization
✅ **Easy Updates**: Just update the JSON file

### Example Workflow

1. Write and publish article on Medium
2. Copy the article URL and details
3. Add to `medium-posts.json`
4. Article automatically appears on your portfolio

### Tips

- Use Medium's featured image for better visual appeal
- Keep excerpts engaging but concise
- Use consistent categories for better filtering
- Feature your best articles with `"featured": true`