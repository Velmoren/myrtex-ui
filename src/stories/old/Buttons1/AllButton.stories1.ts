import { Meta, Story } from "@storybook/angular/types-6-0";
import { moduleMetadata } from "@storybook/angular";
import { ButtonComponent, ButtonModule } from "myrtex-lib";
import themes from '../../assets/themes'

export default {
  title: 'MDX/Buttons/All-stories',
  component: ButtonComponent,
  name: 'All-stories',
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
    label: {
      table: {
        category: 'Content',
      },
    },
    iconHTML: {
      table: {
        category: 'Icon',
      },
    },
    size: {
      table: {
        category: 'Style',
      },
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    outline: {
      table: {
        category: 'Style'
      },
      control: 'boolean',
      description: "Only icon for button",
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
    revertIcon: {
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
    withIcon: {
      table: {
        category: 'Style'
      },
      control: 'boolean',
      description: "Only icon for button",
    },
    iconOnly: {
      table: {
        category: 'Style',
        type: {summary: 'type boolean'},
        defaultValue: {summary: 'false'},
      },
      control: 'boolean',
      description: "Only icon for button",
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

// export const Default: Story<ButtonComponent> = (args: ButtonComponent) => ({
//   props: {
//     label: 'Default'
//   },
// });

export const Default = Template.bind({});
Default.args = {
  label: 'Default'
};

// export const Large: Story<ButtonComponent> = (args: ButtonComponent) => ({
//   props: {
//     size: 'large',
//     label: 'Large'
//   },
// });
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large'
};

export const Medium: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    size: 'medium',
    label: 'Medium'
  },
});

export const Small: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    size: 'small',
    label: 'Small'
  },
});

export const Active: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    active: true,
    label: 'Active'
  },
});

export const Hover: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    active: true,
    label: 'Hover'
  },
});

export const Disabled: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    disabled: true,
    label: 'Disabled'
  },
});

export const Red: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    color: 'red',
    label: 'Red Button'
  },
});

export const Green: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    color: 'green',
    label: 'Green Button'
  },
});

export const Blue: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    color: 'blue',
    label: 'Blue Button'
  },
});

export const Loading: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    label: 'Loading',
    isLoading: true
  },
});

export const WithIcon: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    label: 'WithIcon',
    isLoading: false,
    icon: `
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='stroke'>
              <path d='M20 12H4' stroke='#282828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
              <path d='M12 4V20' stroke='#282828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
             </svg>
    `
  },
});

export const WithIconLoading: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    label: 'Loading',
    isLoading: true,
    icon: `
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='stroke'>
              <path d='M20 12H4' stroke='#282828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
              <path d='M12 4V20' stroke='#282828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
             </svg>
    `
  },
});
