import * as ejs from 'ejs';
import { TemplateData } from '../interfaces/template-interfaces';


export function render(content: string, data: TemplateData) {
   return ejs.render(content, data);
}