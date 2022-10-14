import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'listar-pensamento'
    },
    {
        path: 'criar-pensamento',
        component: CriarPensamentoComponent
    },
    {
        path: 'listar-pensamento',
        component: ListarPensamentoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
