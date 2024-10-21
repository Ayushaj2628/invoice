import { Meta, IStory } from '@storybook/angular';
import { ActionbuttonComponent } from './actionbutton.component';

export default {
    title: 'ActionButton',
    component: ActionbuttonComponent,
} as Meta;

const Template: any = (args: ActionbuttonComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};