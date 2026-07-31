import React from 'react';
import zxcvbn from 'zxcvbn';

export function PasswordStrength({ password }) {
  const result = zxcvbn(password || '');
  const score = result.score; // 0 to 4
  
  const getStrengthColor = (score) => {
    switch (score) {
      case 0: return 'bg-slate-200 dark:bg-slate-700'; // none
      case 1: return 'bg-red-500'; // weak
      case 2: return 'bg-amber-500'; // fair
      case 3: return 'bg-emerald-400'; // good
      case 4: return 'bg-emerald-600'; // strong
      default: return 'bg-slate-200 dark:bg-slate-700';
    }
  };

  const getStrengthLabel = (score) => {
    switch (score) {
      case 0: return '';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  return (
    <div className="w-full mt-2">
      <div className="flex gap-1 h-1.5 w-full rounded-full overflow-hidden">
        {[1, 2, 3, 4].map((level) => (
          <div 
            key={level} 
            className={`flex-1 transition-colors duration-300 ${
              score >= level ? getStrengthColor(score) : 'bg-slate-200 dark:bg-slate-700'
            }`} 
          />
        ))}
      </div>
      {password && (
        <div className="flex justify-between items-center mt-1">
          <span className={`text-xs font-medium ${
            score < 2 ? 'text-red-500' : score < 4 ? 'text-amber-500' : 'text-emerald-500'
          }`}>
            {getStrengthLabel(score)}
          </span>
          {result.feedback.warning && (
            <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate ml-2">
              {result.feedback.warning}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
