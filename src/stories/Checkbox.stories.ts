import { Meta, Story } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CheckboxComponent, CheckboxModule } from "myrtex-lib";

export default {
  title: 'Form/Checkbox',
  component: CheckboxComponent,
  name: 'Checkbox',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CheckboxModule],
    }),
    componentWrapperDecorator((story) => ` <div class="page-wrapper  default-theme">${story}</div>`)
  ],
  argTypes: {},
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
  template: `<mrx-checkbox placeholder="${args.placeholder}" label="${args.label}"></mrx-checkbox>`
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'My checkbox',
  placeholder: 'This placeholder',
};
