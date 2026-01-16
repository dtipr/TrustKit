import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Users, Mail, Phone, Calendar, Trash2 } from 'lucide-react';
import { Input } from '../primitives/Input';
import { Textarea } from '../primitives/Textarea';
import { Button } from '../primitives/Button';
import { Switch } from '../primitives/Switch';
import { MultiSelect } from '../forms/MultiSelect';
import { FormField } from '../forms/FormField';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../primitives/Select';

const meta: Meta = {
  title: 'Examples/CampaignForm',
};

export default meta;

export const CampaignInfo: StoryObj = {
  render: () => {
    const [channels, setChannels] = React.useState(['instagram', 'google-ads']);
    const [customers, setCustomers] = React.useState(['all']);

    return (
      <div className="w-[480px] rounded-lg border border-gray-200 bg-white shadow-lg">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Campaign Info</h2>
        </div>

        {/* Form Content */}
        <div className="max-h-[600px] overflow-y-auto px-6 py-4">
          <div className="space-y-5">
            {/* Campaign Name */}
            <FormField label="Campaign name">
              <Input placeholder="Enter campaign name" defaultValue="Taste the Future: Frozen Delights Delivered" />
            </FormField>

            {/* Brand & Channel Row */}
            <div className="grid grid-cols-2 gap-4">
              <FormField label="Brand">
                <Input defaultValue="Damory Food Indonesia" />
              </FormField>
              <FormField label="Channel">
                <MultiSelect
                  options={[
                    { value: 'instagram', label: 'Instagram' },
                    { value: 'google-ads', label: 'Google Ads' },
                    { value: 'facebook', label: 'Facebook' },
                    { value: 'tiktok', label: 'TikTok' },
                    { value: 'youtube', label: 'YouTube' },
                  ]}
                  value={channels}
                  onChange={setChannels}
                  placeholder="Select channels"
                />
              </FormField>
            </div>

            {/* Description */}
            <FormField label="Description">
              <Textarea
                rows={4}
                defaultValue="A social media and Google Ads campaign showcasing Damory Food Indonesia's frozen product line, highlighting convenience, taste, and halal certification. Targeted at busy professionals and families, the campaign will feature visually appealing content of the products being prepared quickly."
              />
            </FormField>

            {/* Audience Section */}
            <div className="pt-2">
              <h3 className="mb-3 text-sm font-medium text-gray-900">Audience</h3>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Target customers">
                  <Input icon={Users} defaultValue="10,000" />
                </FormField>
                <FormField label="Email only">
                  <Input icon={Mail} defaultValue="3,890" />
                </FormField>
                <FormField label="Sms only">
                  <Input icon={Phone} defaultValue="2,956" />
                </FormField>
                <FormField label="Customers">
                  <MultiSelect
                    options={[
                      { value: 'all', label: 'All customers' },
                      { value: 'professionals', label: 'Professionals' },
                      { value: 'students', label: 'College Students' },
                      { value: 'family', label: 'Family' },
                    ]}
                    value={customers}
                    onChange={setCustomers}
                    placeholder="Select customers"
                  />
                </FormField>
              </div>
            </div>

            {/* Time Management Section */}
            <div className="pt-2">
              <h3 className="mb-3 text-sm font-medium text-gray-900">Time Management</h3>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Check">
                  <Select defaultValue="every-hours">
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="every-hours">Every hours</SelectItem>
                      <SelectItem value="every-day">Every day</SelectItem>
                      <SelectItem value="every-week">Every week</SelectItem>
                    </SelectContent>
                  </Select>
                </FormField>
                <div />
                <FormField label="Run length">
                  <div className="flex items-center gap-3">
                    <Input
                      icon={Calendar}
                      defaultValue="23 Dec 2024 - 23 Mar 2025"
                      className="flex-1"
                    />
                  </div>
                </FormField>
                <div className="flex items-end pb-2">
                  <Switch label="Start now" />
                </div>
              </div>
            </div>

            {/* Create Rules Section */}
            <div className="pt-2">
              <h3 className="mb-3 text-sm font-medium text-gray-900">Create Rules</h3>
              <div className="space-y-3">
                {/* Rule Row 1 */}
                <div className="flex items-center gap-2">
                  <Select defaultValue="spend">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spend">Spend</SelectItem>
                      <SelectItem value="clicks">Clicks</SelectItem>
                      <SelectItem value="impressions">Impressions</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="equals">
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="equals">=</SelectItem>
                      <SelectItem value="greater">&gt;</SelectItem>
                      <SelectItem value="less">&lt;</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input defaultValue="$200" className="w-24" />
                  <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                {/* Rule Row 2 */}
                <div className="flex items-center gap-2">
                  <Select defaultValue="increase-budget">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="increase-budget">Increase budget</SelectItem>
                      <SelectItem value="decrease-budget">Decrease budget</SelectItem>
                      <SelectItem value="pause">Pause campaign</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="dollar">
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dollar">$</SelectItem>
                      <SelectItem value="percent">%</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input defaultValue="30" className="w-24" />
                  <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <button className="mt-3 text-sm font-medium text-primary-600 hover:text-primary-700">
                + Add new rules
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
          <Button variant="outline">Cancel</Button>
          <Button>Create Campaign</Button>
        </div>
      </div>
    );
  },
};

export const SimpleForm: StoryObj = {
  render: () => {
    return (
      <div className="w-96 rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Contact Information</h2>
        <div className="space-y-4">
          <FormField label="Full Name" required>
            <Input placeholder="Enter your name" />
          </FormField>
          <FormField label="Email" required>
            <Input type="email" icon={Mail} placeholder="you@example.com" />
          </FormField>
          <FormField label="Phone">
            <Input icon={Phone} placeholder="+1 (555) 000-0000" />
          </FormField>
          <FormField label="Message">
            <Textarea rows={3} placeholder="Tell us more..." />
          </FormField>
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    );
  },
};
