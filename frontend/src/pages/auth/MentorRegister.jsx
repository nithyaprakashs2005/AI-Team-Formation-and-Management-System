import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import AuthLayout from '../../components/auth/AuthLayout';
import { FormInput } from '../../components/ui/FormInput';
import { Button } from '../../components/ui/Button';
import { PasswordStrength } from '../../components/ui/PasswordStrength';
import { Briefcase } from 'lucide-react';
import { authApi } from '../../services/api';
import { apiErrorMessage, saveSession } from '../../services/authSession';

const mentorSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  organization: z.string().min(2, "Organization is required"),
  currentRole: z.string().min(2, "Current Role is required"),
  experience: z.string().min(1, "Years of Experience is required"),
  country: z.string().min(2, "Country is required"),
  city: z.string().min(2, "City is required"),
  linkedIn: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  githubUsername: z.string().optional(),
  technicalSkills: z.string().min(2, "Skills are required"),
  areaOfExpertise: z.string().min(2, "Area of expertise is required"),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" })
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function MentorRegister() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(mentorSchema)
  });
  
  const password = watch('password');

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError('');
    try {
      const session = await authApi.register({
        full_name: data.fullName, email: data.email, password: data.password, role: 'mentor',
        institution_or_company: data.organization, department_or_designation: `${data.currentRole} (${data.experience} years)`,
        country: data.country, city: data.city, github_username: data.githubUsername || null,
        linkedin_url: data.linkedIn || null, specialization: data.areaOfExpertise,
      });
      saveSession(session);
      navigate('/dashboard', { replace: true });
    } catch (error) {
      setApiError(apiErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const leftContent = (
    <div className="flex flex-col items-center text-center text-white">
      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 mb-6">
        <Briefcase className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-3xl font-bold mb-4">Become a Mentor</h2>
      <p className="text-lg text-white/80 max-w-sm">
        Guide the next generation of innovators, review cutting-edge projects, and share your expertise.
      </p>
      
      <div className="mt-12 space-y-4 text-left w-full max-w-sm">
        {[
          "Conduct mentoring sessions",
          "Provide technical guidance",
          "Review student projects",
          "Offer career support"
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <AuthLayout leftPanelContent={leftContent} maxWidth="max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Mentor Application</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm">
          Join our elite group of industry mentors and give back to the community.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {apiError && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">{apiError}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Full Name" placeholder="Dr. Alan Turing" error={errors.fullName} {...register('fullName')} />
            <FormInput label="Email Address" type="email" placeholder="alan@institute.edu" error={errors.email} {...register('email')} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <FormInput label="Password" type="password" placeholder="••••••••" error={errors.password} {...register('password')} />
              <PasswordStrength password={password} />
            </div>
            <FormInput label="Confirm Password" type="password" placeholder="••••••••" error={errors.confirmPassword} {...register('confirmPassword')} />
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Professional Background</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <FormInput label="Organization" placeholder="Tech Innovations Ltd" error={errors.organization} {...register('organization')} />
              <FormInput label="Current Role" placeholder="Principal Engineer" error={errors.currentRole} {...register('currentRole')} />
            </div>
            <FormInput label="Years of Experience" placeholder="10+" type="number" error={errors.experience} {...register('experience')} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Country" placeholder="Canada" error={errors.country} {...register('country')} />
            <FormInput label="City" placeholder="Toronto" error={errors.city} {...register('city')} />
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <FormInput label="LinkedIn URL" placeholder="https://linkedin.com/in/..." error={errors.linkedIn} {...register('linkedIn')} />
              <FormInput label="GitHub Username" placeholder="alanturing" error={errors.githubUsername} {...register('githubUsername')} />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Domain Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['AI', 'Cybersecurity', 'Cloud', 'Web Development', 'Mobile Development', 'Data Science', 'DevOps'].map((topic) => (
                <label key={topic} className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-300">
                  <input type="checkbox" value={topic} className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" {...register('expertise')} />
                  <span>{topic}</span>
                </label>
              ))}
            </div>
            {errors.expertise && <p className="text-red-500 text-xs mt-1">{errors.expertise.message}</p>}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Availability</h3>
            <FormInput label="Weekly Mentoring Hours" placeholder="e.g. 5 hours" error={errors.weeklyHours} {...register('weeklyHours')} />
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Open to Code Reviews', 'Open to Career Guidance', 'Open to Technical Discussions'].map((topic) => (
                <label key={topic} className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-300">
                  <input type="checkbox" value={topic} className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" {...register('availability')} />
                  <span>{topic}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-2">
            <label className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
              <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 mt-1" {...register('agreeToTerms')} />
              <span>
                I agree to the <a href="#terms" className="text-indigo-600 dark:text-indigo-400 hover:underline">Terms of Service</a> and <a href="#privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">Privacy Policy</a>
              </span>
            </label>
            {errors.agreeToTerms && (
              <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms.message}</p>
            )}
          </div>

          <Button type="submit" isLoading={isLoading} className="mt-6">
            Become a Mentor
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
