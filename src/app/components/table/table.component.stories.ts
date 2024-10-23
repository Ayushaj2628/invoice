import { Meta, IStory } from '@storybook/angular';
import { TableComponent } from './table.component';

export default {
  title: 'Invoice Table',
  component: TableComponent,
} as Meta;

const Template: any = (args: TableComponent) => ({
    props: args,
  });

export const Default = Template.bind({});
Default.args = {};
