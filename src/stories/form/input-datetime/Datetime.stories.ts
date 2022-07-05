import { Meta, Story } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { InputDatetimeComponent, InputDatetimeModule } from "myrtex-lib";
import themes from '../../themes'

export default {
  title: 'FORM/Datetime',
  component: InputDatetimeComponent,
  name: 'Datetime',
  parameters: {
    themes: themes,
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [InputDatetimeModule],
    }),
    componentWrapperDecorator((story) => ` <div style="height: 400px">${story}</div>`)
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

const Template: Story<InputDatetimeComponent> = (args: InputDatetimeComponent) => ({
  props: args,
  template: `<mrx-input-datetime
                (changed)="changed"

                dateFormat="${args.dateFormat}"
                timeFormat="${args.timeFormat}"
                startDate="${args.startDate}"
                minDate="${args.minDate}"
                maxDate="${args.maxDate}"
                [timepicker]="${args.timepicker}"
                [rangeMode]="${args.rangeMode}"
                
                size="${args.size}"
                container="${args.container}"
                customClasses="${args.customClasses}"
                placeholder="${args.placeholder}"
                name="${args.name}"
                mask="${args.mask}"
                [required]="${args.required}"
                [disabled]="${args.disabled}"
                
                label="${args.label}"
                tooltip="${args.tooltip}"
                [isBottomLabel]="${args.isBottomLabel}"
             ></mrx-input-datetime>`
});

export const Datetime = Template.bind({});
Datetime.args = {
  // SETTINGS DATETIME PICKER
  dateFormat: '',
  timeFormat: '',
  startDate: '',
  minDate: '',
  maxDate: '',
  timepicker: false,
  rangeMode: false,

  // CONTENT
  size: 'lg',
  container: '',
  customClasses: '',
  placeholder: '',
  name: '',
  mask: '00.00.0000',
  required: false,
  disabled: false,

  // LABEL
  label: 'My Datetime picker',
  labelClass: '',
  extraClass: '',
  tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  requiredHidden: false,
  tooltipVisible: false,
  tooltipInitiallyVisible: false,
  isBottomLabel: false,
  labelRequiredHidden: false,
};
// SETTINGS DATETIME PICKER
// @Input() public dateFormat: string = 'dd.MM.yyyy';
// @Input() public timeFormat: string = 'HH:mm';
// @Input() public startDate: string = '';
// @Input() public minDate: string = '';
// @Input() public maxDate: string = '';
// @Input() public timepicker: boolean = false
// @Input() public rangeMode: boolean = false
//
// // CONTENT
// @Input() public container: string = 'div.page-wrapper';
// @Input() public size: 'xs' | 'sm' | 'md' | 'lg' = 'lg';
// @Input() public customClasses: string = '';
// @Input() public placeholder: string = '';
// @Input() public name: string = '';
// @Input() public mask: string = '';
// @Input() public disabled: boolean = false;
// @Input() public required: boolean = false;
//
// // LABEL
// @Input() public label = '';
// @Input() public labelClass = '';
// @Input() public extraClass: object | string = '';
// @Input() public tooltip: string | null = '';
// @Input() public requiredHidden: boolean = false;
// @Input() public tooltipVisible: boolean = false;
// @Input() public tooltipInitiallyVisible: boolean = false;
// @Input() public isBottomLabel = false;
// @Input() public labelRequiredHidden = false;
//
// @Output() public changed: EventEmitter<{ date: Date | Date[], formattedDate: string | string[], datepicker: AirDatepicker }> = new EventEmitter();
// @Output() public visibilityChanged: EventEmitter<boolean> = new EventEmitter();
