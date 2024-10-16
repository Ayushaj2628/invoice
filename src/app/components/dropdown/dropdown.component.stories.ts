import { Meta, IStory } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

export default {
  title: 'Dropdown',
  component: DropdownComponent,
} as Meta;

const Template: any = (args: DropdownComponent) => ({
    props: args,
  });

export const Default = Template.bind({});
Default.args = {
  clients: ['Barry Cuda', 'Tressa Wexler'],
  selectedClient: '',
};
