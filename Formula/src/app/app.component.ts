import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parser } from 'expr-eval';
import { FormService } from '../form.service';
import { FormsModule } from '@angular/forms'; //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formula: string = '-b+(4*y-2)';
  b: number = null!;
  y: number = null!;
  resultado!: number;

  constructor(private calculadoraService: FormService,private snackBar: MatSnackBar) {

}

  calcular(): void {
 if (this.b === 0 && this.y === 0 || this.b==null || this.y==null)  {
      this.openSnackBar('Fórmula inválida. digite o valor de b ou y.');
      return; // Sai da função se a fórmula for inválida
    }
    const valoresVariaveis = {
      'b': this.b,
      'y': this.y
    };

    this.resultado = this.calculadoraService.calcularFormula(this.formula, valoresVariaveis);


    this.openSnackBar('Fórmula calculada com sucesso. Resultado: ' + this.resultado);
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000, // Duração do snackbar em milissegundos
     verticalPosition: 'top', // Posição vertical do snackbar (topo da tela)
      horizontalPosition: 'center' // Poter' // Posição vertical do snackbar
    });
  }
}