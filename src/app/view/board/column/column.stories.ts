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

export const Lead: Story = {
  args: {
    props: {
      id: 'lead',
      title: 'Lead'
    }
  },
};

export const RFP: Story = {
  args: {
    props: {
      id: 'rfp',
      title: 'RFP in progress'
    }
  },
};

export const Submitted: Story = {
  args: {
    props: {
      id: 'submitted',
      title: 'Submitted'
    }
  },
};

export const Won: Story = {
  args: {
    props: {
      id: 'won',
      title: 'Won'
    }
  },
};

export const Lost: Story = {
  args: {
    props: {
      id: 'lost',
      title: 'Lost'
    }
  },
};

export const Closed: Story = {
  args: {
    props: {
      id: 'closed',
      title: 'Closed'
    }
  },
};
