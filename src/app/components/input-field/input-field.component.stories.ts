import { Meta, IStory } from '@storybook/angular';
import { InputFieldComponent } from './input-field.component';

export default {
  title: 'InputField',
  component: InputFieldComponent,
} as Meta;

const Template: any = (args: InputFieldComponent) => ({
    props: args,
  });
  

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter your username',
  value: '',
};
