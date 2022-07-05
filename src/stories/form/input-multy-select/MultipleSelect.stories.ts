import { Meta, Story } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { InputSelectModule, InputSelectComponent } from "myrtex-lib";
import { FormsModule } from "@angular/forms";

export default {
  title: 'FORM/Select',
  component: InputSelectComponent,
  name: 'Input',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [InputSelectModule, FormsModule],
    }),
    componentWrapperDecorator((story) => ` <div style="height: 250px" class="page-wrapper  default-theme">${story}</div>`)
  ],
  argTypes: {
    onChange: {
      action: `changed`,
      table: {
        category: 'Outputs',
        type: { summary: 'Function' },
        defaultValue: { summary: 'Function' },
      },
      control: {
        type: 'string',
      },
    },
  },
} as Meta;

const Template: Story<InputSelectComponent> = (args: InputSelectComponent) => ({
  props: {
    ...args
  },
  template: `<mrx-input-select
                [(ngModel)]="selected"
                (changed)="changed"
                label="${args.label}"
                [items]="items"
                bindLabel="${args.bindLabel}"
                bindValue="${args.bindValue}"
                [multiple]="true"
                [disabled]="${args.disabled}"
                [disabledFromDisplay]="${args.disabledFromDisplay}"
                [isBottomLabel]="${args.isBottomLabel}"
            ></mrx-input-select>`,
});

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  items: [
    {id: 0, name: 'first option'},
    {id: 1, name: 'second option'},
    {id: 2, name: 'third option'},
    {id: 3, name: 'fourth option'},
  ],
  selected: [{id: 0, name: 'first option'}],
  label: 'My label',
  bindLabel: "name",
  bindValue: "",
  disabled: false,
  disabledFromDisplay: false,
  isBottomLabel: false,
};

MultipleSelect.argTypes = {
  items: {
    table: {
      category: 'Properties',
      type: {summary: '[{id: \'number\', name: \'string\'}]'},
      defaultValue: {summary: 'Array'},
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
    defaultValue: 0
  },
  selected: {
    table: {
      category: 'Properties',
      type: {summary: 'Object'},
      defaultValue: {summary: 'Object'},
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
    defaultValue: [{id: 0, name: 'first option'}]
  },
  label: {
    table: {
      category: 'Inputs',
    },
    control: {
      type: 'text',
    },
    defaultValue: 'My label'
  },
  bindLabel: {
    table: {
      category: 'Inputs',
    },
    control: {
      type: 'text',
    },
    defaultValue: 'label'
  },
  bindValue: {
    table: {
      category: 'Inputs',
    },
    control: {
      type: 'text',
    },
    defaultValue: ''
  },
  disabled: {
    table: {
      category: 'Inputs',
    },
    control: {
      type: 'boolean',
    },
    defaultValue: ''
  },
  disabledFromDisplay: {
    table: {
      category: 'Inputs',
    },
    control: {
      type: 'boolean',
    },
    defaultValue: false
  },
  isBottomLabel: {
    table: {
      category: 'Inputs',
    },
    control: {
      type: 'boolean',
    },
    defaultValue: false
  },
  multiple: {
    table: {
      category: 'Inputs',
    },
    control: {
      type: 'radio',
      options: [true]
    },
    defaultValue: 'true'
  },
}
