import * as React from 'react';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
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

export interface LoginFormProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  onSubmit?: (data: LoginFormData) => void;
  onForgotPassword?: () => void;
  onRegister?: () => void;
  loading?: boolean;
  error?: string;
  logo?: React.ReactNode;
  title?: string;
  description?: string;
  showRememberMe?: boolean;
  showForgotPassword?: boolean;
  showRegisterLink?: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm = React.forwardRef<HTMLDivElement, LoginFormProps>(
  (
    {
      className,
      onSubmit,
      onForgotPassword,
      onRegister,
      loading = false,
      error,
      logo,
      title = 'Welcome back',
      description = 'Enter your credentials to access your account',
      showRememberMe = true,
      showForgotPassword = true,
      showRegisterLink = true,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [formData, setFormData] = React.useState<LoginFormData>({
      email: '',
      password: '',
      rememberMe: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.(formData);
    };

    return (
      <Card ref={ref} className={cn('w-full max-w-md', className)} {...props}>
        <CardHeader className="space-y-1 text-center">
          {logo && <div className="flex justify-center mb-4">{logo}</div>}
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive-50 p-3 text-sm text-destructive-700">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
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
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
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
            </div>
            <div className="flex items-center justify-between">
              {showRememberMe && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, rememberMe: checked === true })
                    }
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
              )}
              {showForgotPassword && (
                <button
                  type="button"
                  onClick={onForgotPassword}
                  className="text-sm text-primary-600 hover:underline"
                >
                  Forgot password?
                </button>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" loading={loading}>
              Sign in
            </Button>
            {showRegisterLink && (
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={onRegister}
                  className="text-primary-600 hover:underline"
                >
                  Sign up
                </button>
              </p>
            )}
          </CardFooter>
        </form>
      </Card>
    );
  }
);
LoginForm.displayName = 'LoginForm';

export { LoginForm };
