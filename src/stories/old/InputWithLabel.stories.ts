import { Meta, Story } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { InputComponent, InputModule, InputWithLabelComponent, InputWithLabelModule } from "myrtex-lib";

export default {
  title: 'Components/Form/Input With Label',
  component: InputWithLabelComponent,
  name: 'Input With Label',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [InputWithLabelModule],
    }),
    componentWrapperDecorator((story) => ` <div class="page-wrapper  default-theme">${story}</div>`)
  ],
  argTypes: {},
} as Meta;

const Template: Story<InputWithLabelComponent> = (args: InputWithLabelComponent) => ({
  props: args,
  template: `<mrx-input-with-label
                placeholder="${args.placeholder}"
                label="${args.label}"
                [maxlength]="${args.maxlength}"
             ></mrx-input-with-label>`
});

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  placeholder: 'This placeholder',
  maxlength: 50,
  label: 'My label'
};
