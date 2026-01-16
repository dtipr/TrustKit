import * as React from 'react';
import { Lock, Mail, User, Building, Eye, EyeOff } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../primitives/Button';
import { Input } from '../primitives/Input';
import { Checkbox } from '../primitives/Checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../data-display/Card';

export interface RegisterFormProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  onSubmit?: (data: RegisterFormData) => void;
  onLogin?: () => void;
  loading?: boolean;
  error?: string;
  logo?: React.ReactNode;
  title?: string;
  description?: string;
  showOrganization?: boolean;
  termsLink?: string;
  privacyLink?: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  organization?: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const RegisterForm = React.forwardRef<HTMLDivElement, RegisterFormProps>(
  (
    {
      className,
      onSubmit,
      onLogin,
      loading = false,
      error,
      logo,
      title = 'Create an account',
      description = 'Enter your details to get started',
      showOrganization = true,
      termsLink = '#',
      privacyLink = '#',
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [formData, setFormData] = React.useState<RegisterFormData>({
      name: '',
      email: '',
      organization: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    });
    const [validationError, setValidationError] = React.useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setValidationError(null);

      if (formData.password !== formData.confirmPassword) {
        setValidationError('Passwords do not match');
        return;
      }

      if (formData.password.length < 8) {
        setValidationError('Password must be at least 8 characters');
        return;
      }

      if (!formData.acceptTerms) {
        setValidationError('You must accept the terms and conditions');
        return;
      }

      onSubmit?.(formData);
    };

    const displayError = error || validationError;

    return (
      <Card ref={ref} className={cn('w-full max-w-md', className)} {...props}>
        <CardHeader className="space-y-1 text-center">
          {logo && <div className="flex justify-center mb-4">{logo}</div>}
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {displayError && (
              <div className="rounded-md bg-destructive-50 p-3 text-sm text-destructive-700">
                {displayError}
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="pl-10"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="register-email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="register-email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            {showOrganization && (
              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm font-medium">
                  Organization{' '}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="organization"
                    type="text"
                    placeholder="Your Company Inc."
                    className="pl-10"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                  />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="register-password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="register-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  className="pl-10 pr-10"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Must be at least 8 characters
              </p>
            </div>
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  className="pl-10 pr-10"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, acceptTerms: checked === true })
                }
              />
              <label
                htmlFor="terms"
                className="text-sm leading-tight text-muted-foreground"
              >
                I agree to the{' '}
                <a href={termsLink} className="text-primary-600 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href={privacyLink} className="text-primary-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" loading={loading}>
              Create account
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onLogin}
                className="text-primary-600 hover:underline"
              >
                Sign in
              </button>
            </p>
          </CardFooter>
        </form>
      </Card>
    );
  }
);
RegisterForm.displayName = 'RegisterForm';

export { RegisterForm };
