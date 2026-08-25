'use client';
import { signIn } from 'next-auth/react';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  // Reads the original target page, or falls back to /blogadmin
  const callbackUrl = searchParams.get('callbackUrl') || '/blogadmin';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (res.ok) {
      router.push(callbackUrl); // Redirects to whichever page was requested
      router.refresh();
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input 
          className="w-full p-2 mb-4 border rounded" 
          placeholder="Username" 
          onChange={e => setUsername(e.target.value)} 
          required
        />
        <input 
          className="w-full p-2 mb-4 border rounded" 
          type="password" 
          placeholder="Password" 
          onChange={e => setPassword(e.target.value)} 
          required
        />
        <button type="submit" className="w-full bg-black text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

// Next.js requires useSearchParams to be wrapped in a Suspense boundary
export default function LoginPage() {
  return (
    <Suspense fallback={<p className="p-4 text-center">Loading login form...</p>}>
      <LoginForm />
    </Suspense>
  );
}