import { Meta, IStory } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'cancel'] },
  },
} as Meta;

const Template: any = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  type: 'secondary',
};

export const Cancel = Template.bind({});
Cancel.args = {
  label: 'Cancel Button',
  type: 'cancel',
};
