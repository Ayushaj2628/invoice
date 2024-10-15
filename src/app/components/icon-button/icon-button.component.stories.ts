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




// const meta: Meta<IconButtonComponent> = {
//   title: 'NotificationIcon',
//   component: IconButtonComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [],
//     }),
//   ],
//   argTypes: {
//     count: { control: 'number' },
//   },
// };
// export default meta;

// 

// // Default story with no notifications
// export const Default: Story = {
//   args: {
//     count: 0,
//   },
// };

// // Story with 3 notifications
// export const WithNotifications: Story = {
//   args: {
//     count: 3,
//   },
// };
