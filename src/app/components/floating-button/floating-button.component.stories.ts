import { Meta, IStory } from '@storybook/angular';
import { FloatingButtonComponent } from './floating-button.component';

export default {
  title: 'FloatingButton',
  component: FloatingButtonComponent,
} as Meta;

const Template: any = (args: FloatingButtonComponent) => ({
    props: args,
  });

export const Default = Template.bind({});
Default.args = {};
