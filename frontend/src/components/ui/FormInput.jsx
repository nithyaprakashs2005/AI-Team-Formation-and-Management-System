import React, { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const FormInput = forwardRef(({ 
  label, 
  error, 
  type = 'text', 
  className = '', 
  ...props 
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          type={inputType}
          className={`
            w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 
            text-slate-900 dark:text-white transition-all duration-200 outline-none
            focus:ring-2 focus:ring-indigo-500/50
            ${error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' 
              : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-400'}
          `}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer p-1"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
      {error && (
        <span className="text-xs text-red-500 font-medium mt-1">
          {error.message || error}
        </span>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';
