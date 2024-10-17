import { Meta, IStory } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

export default {
  title: 'text area',
  component: TextareaComponent,
} as Meta;

const Template: any = (args: TextareaComponent) => ({
    props: args,
  });

export const Default = Template.bind({});
Default.args = {};
