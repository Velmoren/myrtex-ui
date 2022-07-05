import { Meta, Story } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { InputCheckboxModule, InputCheckboxComponent } from "myrtex-lib";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export default {
  title: 'FORM/Checkbox',
  component: InputCheckboxComponent,
  name: 'Checkbox',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [InputCheckboxModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator((story) => ` <div class="page-wrapper  default-theme">${story}</div>`)
  ],
  argTypes: {},
} as Meta;

const Template: Story<InputCheckboxComponent> = (args: InputCheckboxComponent) => ({
  props: args,
  template: `<mrx-input-checkbox placeholder="${args.placeholder}" label="${args.label}" tooltip="${args.tooltip}"></mrx-input-checkbox>`
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'My checkbox',
  placeholder: 'This placeholder',
  tooltip: 'this is tooltip checkbox'
};
