export default {
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
}
