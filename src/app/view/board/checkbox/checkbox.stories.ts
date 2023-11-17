import type {Meta, StoryObj} from '@storybook/angular/';
import {CheckboxComponent} from "./checkbox.component";


const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Primary: Story = {
  args: {
    props: {
      id: 'basic',
      title: 'Basic',
      checked: false
    }
  },
};
