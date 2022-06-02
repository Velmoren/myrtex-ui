import { Meta, Story } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { SelectComponent, SelectModule } from "myrtex-lib";
import { FormsModule } from "@angular/forms";
import { action } from "@storybook/addon-actions";

export default {
  title: 'Form/Select',
  component: SelectComponent,
  name: 'Input',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SelectModule, FormsModule],
    }),
    componentWrapperDecorator((story) => ` <div style="height: 300px" class="page-wrapper  default-theme">${story}</div>`)
  ],
  argTypes: {
    items: {
      table: {
        category: 'Attributes',
      },
      control: {
        type: 'object',
        options: [
          { id: 0, name: 'first option' },
          { id: 1, name: 'second option' },
          { id: 2, name: 'third option' },
          { id: 3, name: 'fourth option' },
        ]
      },
    },
    selectedItems: {
      table: {
        category: 'Attributes',
      },
      control: {
        type: 'object',
        options: [
          { id: 0, name: 'first option' },
          { id: 1, name: 'second option' },
          { id: 2, name: 'third option' },
          { id: 3, name: 'fourth option' },
        ]
      },
      defaultValue: [{ id: 2, name: 'third option' }]
    },
    label: {
      table: {
        category: 'Attributes',
      },
      control: {
        type: 'text',
      },
      defaultValue: 'My label'
    },
    multiple: {
      table: {
        category: 'Attributes',
      },
      control: {
        type: 'check',
      },
      defaultValue: true
    },
    onChange: { action: `changed` }
  },
} as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  props: {
    ...args
  },
  template: `<mrx-select
              [(ngModel)]="selectedItems"
              (changed)="changed"
              label="${args.label}"
              [items]="items"
              bindLabel="${args.bindLabel}"
              [multiple]="${args.multiple}"
            ></mrx-select>`,
});

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  label: 'My label',
  items: [
    { id: 0, name: 'first option' },
    { id: 1, name: 'second option' },
    { id: 2, name: 'third option' },
    { id: 3, name: 'fourth option' },
  ],
  bindLabel: "name",
  multiple: true,
  // changed($event: { val: any; id: string }) {
  //
  // }
};
