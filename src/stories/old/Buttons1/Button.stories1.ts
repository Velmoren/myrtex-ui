import { Meta, Story } from "@storybook/angular/types-6-0";
import { moduleMetadata } from "@storybook/angular";
import { ButtonComponent, ButtonModule } from "myrtex-lib";
import themes from '../../assets/themes'

export default {
  title: 'MDX/Buttons/Properties',
  name: 'Properties',
  component: ButtonComponent,
  parameters: {
    themes: themes,
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [ButtonModule],
    }),
  ],
  argTypes: {
    type: {
      table: {
        category: 'Style',
      },
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      table: {
        category: 'Style',
      },
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    active: {
      table: {
        category: 'Style'
      },
      control: 'boolean',
      description: "Only icon for button",
    },
    disabled: {
      table: {
        category: 'Style'
      },
      control: 'boolean',
      description: "Only icon for button",
    },
    isLoading: {
      table: {
        category: 'Style'
      },
      control: 'boolean',
      description: "Only icon for button",
    },
    label: {
      table: {
        category: 'Content',
      },
    },
    iconPosition: {
      table: {
        category: 'Content',
      },
      control: 'select',
      options: ['none', 'left', 'right'],
    },
    icon: {
      table: {
        category: 'Content',
      },
    },
    //   control: 'select',
    //   description: "Background color for button",
    //   options: ['default', 'green', 'red', 'yellow', 'blue'],
    //   mapping: {
    //     'default': '',
    //   },
    // },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args
});

export const Properties = Template.bind({});
Properties.args = {
  label: "Button Action",
  icon: `<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='stroke'>
              <path d='M20 12H4' stroke='#282828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
              <path d='M12 4V20' stroke='#282828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
             </svg>`,
  iconPosition: 'left'
};

