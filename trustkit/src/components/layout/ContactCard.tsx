import * as React from 'react';
import { Mail, Phone, Building, MapPin } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Card, CardContent, CardHeader } from '../data-display/Card';
import { StatusBadge } from '../data-display/StatusBadge';

export interface ContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  location?: string;
  avatar?: string;
  status?: 'active' | 'inactive' | 'pending' | 'opened' | 'replied' | 'ignored' | 'booked';
  actions?: React.ReactNode;
}

const ContactCard = React.forwardRef<HTMLDivElement, ContactCardProps>(
  (
    {
      className,
      name,
      email,
      phone,
      company,
      location,
      avatar,
      status,
      actions,
      ...props
    },
    ref
  ) => {
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    return (
      <Card ref={ref} className={cn('', className)} {...props}>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-medium">{initials}</span>
                )}
              </div>
              <div>
                <h3 className="font-semibold">{name}</h3>
                {status && <StatusBadge status={status} className="mt-1" />}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {email && (
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a
                href={`mailto:${email}`}
                className="text-muted-foreground hover:text-foreground"
              >
                {email}
              </a>
            </div>
          )}
          {phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <a
                href={`tel:${phone}`}
                className="text-muted-foreground hover:text-foreground"
              >
                {phone}
              </a>
            </div>
          )}
          {company && (
            <div className="flex items-center gap-2 text-sm">
              <Building className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{company}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{location}</span>
            </div>
          )}
          {actions && <div className="flex gap-2 pt-2">{actions}</div>}
        </CardContent>
      </Card>
    );
  }
);
ContactCard.displayName = 'ContactCard';

export { ContactCard };
