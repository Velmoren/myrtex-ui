import { Meta, Story } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { InputComponent, InputModule, LabelComponent, LabelModule } from "myrtex-lib";

export default {
  title: 'Form/Label',
  component: LabelComponent,
  name: 'Label',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [LabelModule],
    }),
    componentWrapperDecorator((story) => ` <div class="page-wrapper  default-theme">${story}</div>`)
  ],
  argTypes: {},
} as Meta;

const Template: Story<LabelComponent> = (args: LabelComponent) => ({
  props: args,
  template: `<mrx-label [disabled]="${args.disabled}" extraClass="${args.extraClass}">My label</mrx-label>`
});

export const Label = Template.bind({});
Label.args = {
  disabled: false,
  extraClass: ''
};
