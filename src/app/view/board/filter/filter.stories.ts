import {action} from '@storybook/addon-actions';
import type {Meta, StoryObj} from '@storybook/angular/';
import {FilterComponent} from "./filter.component";


const meta: Meta<FilterComponent> = {
  component: FilterComponent,
  render: (args: FilterComponent) => ({
    props: {
      ...args,
      selectedFilterEvent: action('selectedFilter')
    }
  })
};

export default meta;
type Story = StoryObj<FilterComponent>;

export const Primary: Story = {
  args: {

  },
};
