import { Meta, Story } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { ButtonComponent, ButtonModule } from "myrtex-lib";

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  name: 'Button',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [ButtonModule],
    }),
    componentWrapperDecorator((story) => ` <div class="page-wrapper  default-theme">${story}</div>`)
  ],
  argTypes: {
    size: {
      table: {
        category: 'Style',
      },
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
      defaultValue: 'lg'
    },
    outline: {
      table: {
        category: 'Style',
      },
    },
    iconOnly: {
      table: {
        category: 'Style',
      },
    },
    color: {
      table: {
        category: 'Style',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      control: 'select',
      description: "Background color for button",
      options: ['default', 'green', 'red', 'yellow', 'blue'],
      mapping: {
        'default': '',
      },
      defaultValue: ''
    },
    label: {
      table: {
        category: 'Content',
      },
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `<mrx-button
                size="${args.size}"
                label="${args.label}"
                color="${args.color}"
                [outline]="${args.outline}"
                [iconOnly]="${args.iconOnly}"
             >Click</mrx-button>`
});

export const Button = Template.bind({});
Button.args = {
  label: "",
  size: 'lg',
  outline: false,
  color: '',
  iconOnly: false
};
