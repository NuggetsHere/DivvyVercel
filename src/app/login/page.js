'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (res.ok) router.push('/blogadmin');
    else alert("Invalid Credentials");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input 
          className="w-full p-2 mb-4 border rounded" 
          placeholder="Username" 
          onChange={e => setUsername(e.target.value)} 
        />
        <input 
          className="w-full p-2 mb-4 border rounded" 
          type="password" 
          placeholder="Password" 
          onChange={e => setPassword(e.target.value)} 
        />
        <button className="w-full bg-black text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}