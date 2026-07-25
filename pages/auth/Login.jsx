import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { GithubIcon } from '../../components/icons/GithubIcon';
import AuthLayout from '../../components/auth/AuthLayout';
import { FormInput } from '../../components/ui/FormInput';
import { Button } from '../../components/ui/Button';

// Mock social icons (or use lucide where possible)
const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
    <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
  </svg>
);

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  const leftContent = (
    <div className="flex flex-col items-center text-center text-white">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-indigo-600 font-bold text-2xl">T</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">TeamSync AI</h1>
      </div>
      
      {/* Decorative Image */}
      <div className="relative w-full aspect-square max-w-md mx-auto mb-8 rounded-3xl overflow-hidden glassmorphism shadow-2xl border border-white/20">
         <img 
           src="/placeholder_illustration.png" 
           alt="Global Collaboration" 
           className="w-full h-full object-cover opacity-90 mix-blend-overlay"
           onError={(e) => {
             e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
           }}
         />
      </div>

      <blockquote className="text-xl font-medium text-white/90 italic">
        "Connect. Collaborate. Innovate."
      </blockquote>
    </div>
  );

  return (
    <AuthLayout leftPanelContent={leftContent}>
      <div className="w-full">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Sign in to continue building projects with innovators around the world.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <FormInput
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            error={errors.email}
            {...register('email')}
          />
          
          <div className="space-y-1">
            <FormInput
              label="Password"
              type="password"
              placeholder="••••••••"
              error={errors.password}
              {...register('password')}
            />
            <div className="flex justify-between items-center px-1">
              <label className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <Button type="submit" isLoading={isLoading} className="mt-6">
            Login
          </Button>
        </form>

        <div className="mt-8 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-slate-200 dark:before:border-slate-800 after:mt-0.5 after:flex-1 after:border-t after:border-slate-200 dark:after:border-slate-800">
          <p className="mx-4 mb-0 text-center text-sm text-slate-500 dark:text-slate-400 font-medium">Or continue with</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button variant="secondary" type="button" className="flex items-center justify-center">
            <GoogleIcon />
            Google
          </Button>
          <Button variant="secondary" type="button" className="flex items-center justify-center">
            <GithubIcon className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          Don't have an account?{' '}
          <Link to="/choose-role" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
