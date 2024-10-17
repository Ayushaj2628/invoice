import { Meta, IStory } from '@storybook/angular';
import { DatepickerComponent } from './datepicker.component';

export default {
  title: 'Invoice Date Picker',
  component: DatepickerComponent ,
} as Meta;

const Template: any = (args: DatepickerComponent) => ({
    props: args,
  });

export const Default = Template.bind({});
Default.args = {};
