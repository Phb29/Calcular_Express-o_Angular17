import { Injectable } from '@angular/core';
import { Parser } from 'expr-eval';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  calcularFormula(formula: string, valoresVariaveis: any): number {
    const parser = new Parser();
    const expr = parser.parse(formula);
    const result = expr.evaluate(valoresVariaveis);
    return result;
  }
}