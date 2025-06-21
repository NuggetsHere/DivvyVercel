'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [form, setForm] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    image: '',
    author: '',
    authorImage: '',
    authorBio: '',
    date: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form:', form); // ✅ Add this for debugging

    const res = await fetch('/api/add-blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) alert('Blog added!');
    else alert('Failed to add blog.');
  };

  return (
    <div className="p-6 max-w-xl mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Post a New Blog</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="slug"
          placeholder="Slug"
          value={form.slug}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="author"
          placeholder="Author Name"
          value={form.author}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="authorImage"
          placeholder="Author Image URL"
          value={form.authorImage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="authorBio"
          placeholder="Author Bio"
          value={form.authorBio}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="date"
          placeholder="Date (e.g. May 12, 2023)"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="content"
          placeholder="Full content"
          value={form.content}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Post
        </button>
      </form>
    </div>
  );
}
