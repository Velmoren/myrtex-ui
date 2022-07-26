import { Meta, Story } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { InputComponent, InputModule } from "myrtex-lib";

export default {
  title: 'Components/Form/Input',
  component: InputComponent,
  name: 'Input',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [InputModule],
    }),
    componentWrapperDecorator((story) => ` <div class="page-wrapper  default-theme">${story}</div>`)
  ],
  argTypes: {},
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
  template: `<mrx-input placeholder="${args.placeholder}" [maxlength]="${args.maxlength}"></mrx-input>`
});

export const Input = Template.bind({});
Input.args = {
  placeholder: 'This placeholder',
  maxlength: 50
};
