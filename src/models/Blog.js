import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true, required: true },
  description: String, // Short summary for cards
  content: String, // Full HTML content
  image: String, // Featured Image URL
  date: { type: Date, default: Date.now },
  lastModified: { type: Date, default: Date.now },

  // Author Details (E-E-A-T)
  author: String,
  authorImage: String,
  authorBio: String,
  authorLinkedIn: String, // For "sameAs"

  // Manual SEO Overrides
  manualSeo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String], // Stored as array
    canonicalUrl: String,
  },

  // Advanced Schema Specifics
  schemaData: {
    articleSection: String, // e.g., "Laptop Repair"
    videoUrl: String, // For VideoObject
    citations: [String], // Array of URLs
    mentions: [ // For connecting to Wikidata
      {
        name: String,
        url: String // Wikipedia or Wikidata URL
      }
    ],
    faqs: [ // For FAQPage Schema
      {
        question: String,
        answer: String
      }
    ]
  }
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);