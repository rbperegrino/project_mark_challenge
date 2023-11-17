import type {Meta, StoryObj} from '@storybook/angular/';
import {componentWrapperDecorator} from "@storybook/angular/";
import {ColumnComponent} from "./column.component";


const meta: Meta<ColumnComponent> = {
  component: ColumnComponent,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="width: 222px; height: 600px">${story}</div>`
    )
  ]
};

export default meta;
type Story = StoryObj<ColumnComponent>;

export const Primary: Story = {
  args: {

  },
};
