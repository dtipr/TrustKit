import * as React from 'react';
import { cn } from '../../utils/cn';

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, label, description, error, required, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-1.5', className)} {...props}>
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        {children}
        {description && !error && (
          <p className="text-xs text-gray-500">{description}</p>
        )}
        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);
FormField.displayName = 'FormField';

export { FormField };
