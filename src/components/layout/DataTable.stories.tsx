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
