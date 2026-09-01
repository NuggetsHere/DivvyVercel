//src/app/blogadmin/page.js
'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [form, setForm] = useState({
    title: '', slug: '', description: '', content: '', image: '',
    author: '', authorImage: '', authorBio: '', authorLinkedIn: '',
    date: '',
    // Manual SEO
    metaTitle: '', metaDescription: '', keywords: '', 
    // Schema Data
    articleSection: '', videoUrl: '', citations: '',
    mentions: [], faqs: []
  });

  // Local state for adding items to arrays
  const [tempFaq, setTempFaq] = useState({ question: '', answer: '' });
  const [tempMention, setTempMention] = useState({ name: '', url: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Helper to handle Array inputs (FAQ, Mentions)
  const addFaq = () => {
    setForm({ ...form, faqs: [...form.faqs, tempFaq] });
    setTempFaq({ question: '', answer: '' });
  };
  
  const addMention = () => {
    setForm({ ...form, mentions: [...form.mentions, tempMention] });
    setTempMention({ name: '', url: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Formatting data for API
    const payload = {
      ...form,
      manualSeo: {
        metaTitle: form.metaTitle,
        metaDescription: form.metaDescription,
        keywords: form.keywords.split(',').map(k => k.trim()),
      },
      schemaData: {
        articleSection: form.articleSection,
        videoUrl: form.videoUrl,
        citations: form.citations.split('\n').filter(c => c),
        mentions: form.mentions,
        faqs: form.faqs
      }
    };

    const res = await fetch('/api/add-blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) alert('Blog added successfully!');
    else alert('Failed to add blog.');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-20 bg-gray-50 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Post a New Blog</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* --- Core Details --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="title" placeholder="Blog Title" value={form.title} onChange={handleChange} className="p-2 border rounded" required />
          <input name="slug" placeholder="URL Slug" value={form.slug} onChange={handleChange} className="p-2 border rounded" required />
          <input name="image" placeholder="Main Image URL" value={form.image} onChange={handleChange} className="p-2 border rounded" />
          <input type="date" name="date" value={form.date} onChange={handleChange} className="p-2 border rounded" />
        </div>

        {/* --- Author Details --- */}
        <div className="bg-white p-4 rounded border">
          <h3 className="font-bold mb-2">Author E-E-A-T</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="author" placeholder="Name" value={form.author} onChange={handleChange} className="p-2 border rounded" />
            <input name="authorImage" placeholder="Profile Image URL" value={form.authorImage} onChange={handleChange} className="p-2 border rounded" />
            <input name="authorLinkedIn" placeholder="LinkedIn URL (sameAs)" value={form.authorLinkedIn} onChange={handleChange} className="p-2 border rounded" />
            <textarea name="authorBio" placeholder="Short Bio" value={form.authorBio} onChange={handleChange} className="p-2 border rounded h-12" />
          </div>
        </div>

        {/* --- Content --- */}
        <textarea name="description" placeholder="Short Excerpt" value={form.description} onChange={handleChange} className="w-full p-2 border rounded h-20" required />
        <textarea name="content" placeholder="HTML Content" value={form.content} onChange={handleChange} className="w-full p-2 border rounded h-64 font-mono text-sm" required />

        {/* --- Manual SEO --- */}
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h3 className="font-bold mb-2 text-blue-800">Manual Metadata</h3>
          <input name="metaTitle" placeholder="Meta Title (Browser Tab)" value={form.metaTitle} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <textarea name="metaDescription" placeholder="Meta Description (Search Results)" value={form.metaDescription} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <input name="keywords" placeholder="Keywords (comma separated)" value={form.keywords} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* --- Advanced Schema Data --- */}
        <div className="bg-purple-50 p-4 rounded border border-purple-200">
          <h3 className="font-bold mb-2 text-purple-800">Advanced Schema Data</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="articleSection" placeholder="Category (e.g. MacBook Repair)" value={form.articleSection} onChange={handleChange} className="p-2 border rounded" />
            <input name="videoUrl" placeholder="Related Video URL (optional)" value={form.videoUrl} onChange={handleChange} className="p-2 border rounded" />
          </div>
          
          <textarea name="citations" placeholder="Citations URLs (one per line)" value={form.citations} onChange={handleChange} className="w-full p-2 border rounded h-20 mb-4" />

          {/* Mentions Builder */}
          <div className="mb-4 border-t pt-2">
            <label className="text-sm font-semibold">Mentions (Wikidata/Wikipedia)</label>
            <div className="flex gap-2 mb-2">
              <input placeholder="Concept Name" value={tempMention.name} onChange={(e)=>setTempMention({...tempMention, name: e.target.value})} className="border p-1 flex-1"/>
              <input placeholder="Wiki URL" value={tempMention.url} onChange={(e)=>setTempMention({...tempMention, url: e.target.value})} className="border p-1 flex-1"/>
              <button type="button" onClick={addMention} className="bg-gray-200 px-2 rounded">+</button>
            </div>
            <ul className="text-xs list-disc pl-4">{form.mentions.map((m,i) => <li key={i}>{m.name} - {m.url}</li>)}</ul>
          </div>

          {/* FAQ Builder */}
          <div className="mb-4 border-t pt-2">
            <label className="text-sm font-semibold">FAQs</label>
            <div className="flex gap-2 mb-2">
              <input placeholder="Question" value={tempFaq.question} onChange={(e)=>setTempFaq({...tempFaq, question: e.target.value})} className="border p-1 flex-1"/>
              <input placeholder="Answer" value={tempFaq.answer} onChange={(e)=>setTempFaq({...tempFaq, answer: e.target.value})} className="border p-1 flex-1"/>
              <button type="button" onClick={addFaq} className="bg-gray-200 px-2 rounded">+</button>
            </div>
            <ul className="text-xs list-disc pl-4">{form.faqs.map((f,i) => <li key={i}>{f.question}</li>)}</ul>
          </div>
        </div>

        <button type="submit" className="w-full bg-black text-white px-4 py-3 rounded font-bold hover:bg-gray-800">
          Publish Blog
        </button>
      </form>
    </div>
  );
}