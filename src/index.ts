// Styles - consumers should import '@keystone/trustkit/styles.css'
import './styles/index.css';

// Utility functions
export { cn } from './utils/cn';

// Primitive Components
export {
  Button,
  buttonVariants,
  type ButtonProps,
} from './components/primitives';

export {
  Input,
  type InputProps,
} from './components/primitives';

export {
  Textarea,
  type TextareaProps,
} from './components/primitives';

export { Checkbox } from './components/primitives';

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from './components/primitives';

// Data Display Components
export {
  StatusBadge,
  statusBadgeVariants,
  type StatusBadgeProps,
} from './components/data-display';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './components/data-display';

export {
  StatCard,
  type StatCardProps,
} from './components/data-display';

export {
  MetricCard,
  type MetricCardProps,
} from './components/data-display';

// Navigation Components
export {
  Breadcrumbs,
  BreadcrumbLink,
  type BreadcrumbItem,
  type BreadcrumbsProps,
} from './components/navigation';

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  type TabsTriggerProps,
} from './components/navigation';

export {
  Sidebar,
  type SidebarItem,
  type SidebarSection,
  type SidebarUserProfile,
  type SidebarProps,
} from './components/navigation';

// Form Components
export {
  MultiSelect,
  type MultiSelectOption,
  type MultiSelectProps,
} from './components/forms';

export {
  DatePicker,
  Calendar,
  type DatePickerProps,
} from './components/forms';

export {
  DateRangeFilter,
  type DateRangeFilterProps,
  type DateRangePreset,
} from './components/forms';

export {
  FilterDropdown,
  type FilterOption,
  type FilterDropdownProps,
} from './components/forms';

// Layout Components
export {
  Modal,
  ModalPortal,
  ModalOverlay,
  ModalClose,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
} from './components/layout';

export {
  Grid,
  type GridProps,
} from './components/layout';

export {
  ContactCard,
  type ContactCardProps,
} from './components/layout';

export {
  DataTable,
  type Column,
  type DataTableProps,
} from './components/layout';

export {
  PageHeader,
  type PageHeaderProps,
} from './components/layout';

// Auth Components
export {
  LoginForm,
  type LoginFormProps,
  type LoginFormData,
} from './components/auth';

export {
  RegisterForm,
  type RegisterFormProps,
  type RegisterFormData,
} from './components/auth';
