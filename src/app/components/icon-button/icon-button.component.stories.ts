import { Meta, IStory, moduleMetadata } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';


export default {
  title: 'NotificationIcon',
  component: IconButtonComponent,
  argTypes: {
        count: { control: 'number' },
      },
} as Meta;

const Template: any = (args: IconButtonComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  count: 0,
};

export const WithNotifications= Template.bind({});
WithNotifications.args = {
  count: 3,
};
