import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, Column } from './DataTable';
import { StatusBadge } from '../data-display/StatusBadge';
import { Button } from '../primitives/Button';

const meta: Meta<typeof DataTable> = {
  title: 'Layout/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

interface Certificate {
  id: string;
  domain: string;
  type: string;
  status: 'active' | 'expired' | 'revoked' | 'pending';
  issuedDate: string;
  expiryDate: string;
}

const certificateData: Certificate[] = [
  {
    id: '1',
    domain: 'example.com',
    type: 'DV SSL',
    status: 'active',
    issuedDate: '2024-01-01',
    expiryDate: '2025-01-01',
  },
  {
    id: '2',
    domain: 'api.example.com',
    type: 'OV SSL',
    status: 'active',
    issuedDate: '2024-02-15',
    expiryDate: '2025-02-15',
  },
  {
    id: '3',
    domain: 'old.example.com',
    type: 'DV SSL',
    status: 'expired',
    issuedDate: '2023-01-01',
    expiryDate: '2024-01-01',
  },
  {
    id: '4',
    domain: 'secure.example.com',
    type: 'EV SSL',
    status: 'active',
    issuedDate: '2024-03-01',
    expiryDate: '2025-03-01',
  },
  {
    id: '5',
    domain: 'test.example.com',
    type: 'DV SSL',
    status: 'revoked',
    issuedDate: '2024-01-15',
    expiryDate: '2025-01-15',
  },
  {
    id: '6',
    domain: 'staging.example.com',
    type: 'DV SSL',
    status: 'pending',
    issuedDate: '2024-06-01',
    expiryDate: '2025-06-01',
  },
  {
    id: '7',
    domain: 'mail.example.com',
    type: 'OV SSL',
    status: 'active',
    issuedDate: '2024-04-01',
    expiryDate: '2025-04-01',
  },
  {
    id: '8',
    domain: 'cdn.example.com',
    type: 'Wildcard',
    status: 'active',
    issuedDate: '2024-05-01',
    expiryDate: '2025-05-01',
  },
  {
    id: '9',
    domain: 'blog.example.com',
    type: 'DV SSL',
    status: 'active',
    issuedDate: '2024-06-15',
    expiryDate: '2025-06-15',
  },
  {
    id: '10',
    domain: 'shop.example.com',
    type: 'EV SSL',
    status: 'active',
    issuedDate: '2024-07-01',
    expiryDate: '2025-07-01',
  },
  {
    id: '11',
    domain: 'docs.example.com',
    type: 'DV SSL',
    status: 'active',
    issuedDate: '2024-07-15',
    expiryDate: '2025-07-15',
  },
  {
    id: '12',
    domain: 'portal.example.com',
    type: 'OV SSL',
    status: 'pending',
    issuedDate: '2024-08-01',
    expiryDate: '2025-08-01',
  },
];

const columns: Column<Certificate>[] = [
  {
    id: 'domain',
    header: 'Domain',
    accessorKey: 'domain',
  },
  {
    id: 'type',
    header: 'Type',
    accessorKey: 'type',
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    cell: (row) => <StatusBadge status={row.status} />,
  },
  {
    id: 'issuedDate',
    header: 'Issued',
    accessorKey: 'issuedDate',
  },
  {
    id: 'expiryDate',
    header: 'Expires',
    accessorKey: 'expiryDate',
  },
];

export const Default: Story = {
  args: {
    data: certificateData,
    columns,
  },
};

export const WithRowClick: Story = {
  args: {
    data: certificateData,
    columns,
    onRowClick: (row: Certificate) => alert(`Clicked: ${row.domain}`),
  },
};

export const CustomPageSize: Story = {
  args: {
    data: certificateData,
    columns,
    pageSize: 5,
    pageSizeOptions: [5, 10, 15],
  },
};

export const WithActions: Story = {
  args: {
    data: certificateData,
    columns: [
      ...columns,
      {
        id: 'actions',
        header: 'Actions',
        sortable: false,
        cell: (row: Certificate) => (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                alert(`View: ${row.domain}`);
              }}
            >
              View
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                alert(`Renew: ${row.domain}`);
              }}
            >
              Renew
            </Button>
          </div>
        ),
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
    emptyMessage: 'No certificates found. Create your first certificate.',
  },
};

export const SmallDataset: Story = {
  args: {
    data: certificateData.slice(0, 3),
    columns,
  },
};

// Member/Opportunity table matching the design
interface Member {
  id: string;
  name: string;
  opportunity: string;
  status: 'active' | 'inactive';
  memberId: string;
}

const memberData: Member[] = [
  { id: '1', name: 'Alexander James Carter', opportunity: 'Business Expansion Loan', status: 'active', memberId: '#OM123AA' },
  { id: '2', name: 'Michael Anthony Johnson', opportunity: 'Social Media Campaign', status: 'inactive', memberId: '#AT456BB' },
  { id: '3', name: 'Sarah Miller Olivia', opportunity: 'Website Redesign', status: 'active', memberId: '#EA789CC' },
  { id: '4', name: 'Alexander Thompson Anderson', opportunity: 'CRM Implementation', status: 'inactive', memberId: '#BH101DD' },
  { id: '5', name: 'Benjamin Harrison Johnson', opportunity: 'E-commerce Setup', status: 'active', memberId: '#VJ234EE' },
  { id: '6', name: 'Christopher Taylor Richardson', opportunity: 'SEO Optimization', status: 'active', memberId: '#CT567FF' },
  { id: '7', name: 'Nicholas Thompson Peterson', opportunity: 'Lead Generation Strategy', status: 'active', memberId: '#SR890GG' },
  { id: '8', name: 'Jonathan Martinez Thompson', opportunity: 'Product Launch', status: 'inactive', memberId: '#NT102HH' },
  { id: '9', name: 'Theodore Harrison Williams', opportunity: 'Cybersecurity Audit', status: 'inactive', memberId: '#IP345II' },
  { id: '10', name: 'Elijah Robinson', opportunity: 'Branding and Rebranding', status: 'active', memberId: '#JM678JJ' },
];

const memberColumns: Column<Member>[] = [
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
  },
  {
    id: 'opportunity',
    header: 'Opportunity',
    accessorKey: 'opportunity',
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    cell: (row) => <StatusBadge status={row.status} />,
  },
  {
    id: 'memberId',
    header: 'Member ID',
    accessorKey: 'memberId',
  },
];

export const MemberTable: Story = {
  args: {
    data: memberData,
    columns: memberColumns,
    selectable: true,
    pageSize: 10,
  },
};

export const Selectable: Story = {
  args: {
    data: certificateData,
    columns,
    selectable: true,
  },
};
