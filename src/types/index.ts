// types.ts

export interface GjsComponent {
  type: string;
  components?: GjsComponent[]; // nested components
  attributes?: Record<string, any>;
  content?: string;
  classes?: string[];
  tagName?: string;
  name?: string;
  draggable?: boolean | string;
  droppable?: boolean | string;
  traits?: Array<Record<string, any>>;
  styles?: Record<string, any>;
  [key: string]: any; // for any custom GrapesJS data
}

export interface GjsStyle {
  selectors?: string[];
  style: Record<string, string>;
  atRuleType?: string; // e.g. 'media'
  atRuleParams?: string; // e.g. '(max-width: 768px)'
  [key: string]: any;
}
