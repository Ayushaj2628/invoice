import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';


const meta: Meta<IconButtonComponent> = {
  title: 'NotificationIcon',
  component: IconButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    count: { control: 'number' },
  },
};
export default meta;

type Story = StoryObj<IconButtonComponent>;

// Default story with no notifications
export const Default: Story = {
  args: {
    count: 0,
  },
};

// Story with 3 notifications
export const WithNotifications: Story = {
  args: {
    count: 3,
  },
};
