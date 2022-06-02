import { Meta, Story } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { SelectComponent, SelectModule } from "myrtex-lib";
import { FormsModule } from "@angular/forms";

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
  parameters: {
    controls: {sort: 'requiredFirst'},
    selectedItems: {id: 0, name: 'first option'},
  },
  argTypes: {
    selectedItems: {
      table: {
        category: 'Properties',
        type: { summary: '{id: \'number\', name: \'string\'}' },
        defaultValue: { summary: 'Object' },
      },
      control: {
        type: 'object',
        options: [
          {id: 0, name: 'first option'},
          {id: 1, name: 'second option'},
          {id: 2, name: 'third option'},
          {id: 3, name: 'fourth option'},
        ]
      },
      defaultValue: {id: 0, name: 'first option'}
    },
    onChange: {action: `changed`}
  },
} as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  props: args,
  template: `<mrx-select
                [(ngModel)]="selectedItems"
                label="${args.label}"
                [items]="items"
                bindLabel="${args.bindLabel}"
              ></mrx-select>`,
});

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  label: 'My label',
  items: [
    {id: 0, name: 'first option'},
    {id: 1, name: 'second option'},
    {id: 2, name: 'third option'},
    {id: 3, name: 'fourth option'},
  ],
  bindLabel: "name",
};
DefaultSelect.argTypes = {
  items: {
    table: {
      category: 'Properties',
      type: { summary: '[{id: \'number\', name: \'string\'}]' },
      defaultValue: { summary: 'Array' },
    },
    control: {
      type: 'object',
      options: [
        {id: 0, name: 'first option'},
        {id: 1, name: 'second option'},
        {id: 2, name: 'third option'},
        {id: 3, name: 'fourth option'},
      ]
    },
    defaultValue: {id: 0, name: 'first option'}
  },
  label: {
    table: {
      category: 'Content',
    },
    control: {
      type: 'text',
    },
    defaultValue: 'My label'
  },
}


