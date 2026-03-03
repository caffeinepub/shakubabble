# ShakuBabble

## Current State
New project. No existing code or backend.

## Requested Changes (Diff)

### Add
- Multi-page website with navigation: Home, Videos, About, Blog, Contact
- Home page: hero section with channel branding, featured video embed, and quick links to sections
- Videos page: YouTube video gallery with embedded iframes (latest uploads), displayed in a responsive grid
- About page: introduces the animated ShakuBabble character, channel mission, and personality
- Blog section: list of blog posts with preview cards; individual post view with title, date, content; topics include mindfulness and lifestyle
- Contact form: fields for name, email, and message; submit saves to backend
- Navigation bar with links to all pages
- Footer with social/channel links

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Backend (Motoko):
   - Blog post data model: id, title, date, category, content, excerpt
   - Seed sample blog posts (mindfulness/lifestyle topics)
   - Contact message data model: id, name, email, message, timestamp
   - Query: get all blog posts, get single post by id
   - Update: submit contact form message

2. Frontend:
   - App shell with React Router navigation (Home, Videos, About, Blog, Contact)
   - Persistent top navbar with ShakuBabble branding and nav links
   - Home page: hero with channel tagline, featured YouTube embed, CTA buttons to Videos and Blog
   - Videos page: responsive grid of YouTube embeds (placeholder video IDs with real embed structure)
   - About page: character illustration/avatar placeholder, mission statement, personality traits
   - Blog page: post list with category tags, excerpt cards; single post detail view
   - Contact page: form with name/email/message inputs, submit to backend, success state
   - Footer with copyright and channel links
