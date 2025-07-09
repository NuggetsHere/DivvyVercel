// ✅ 1. models/Blog.js
import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  description: String,
  content: String, // HTML content
  image: String,
  author: String,
  authorImage: String,
  authorBio: String,
  date: { type: Date },
  lastModified: { type: Date, default: null },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String],
    wordCount: Number,
    schema: Object,
  },
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
