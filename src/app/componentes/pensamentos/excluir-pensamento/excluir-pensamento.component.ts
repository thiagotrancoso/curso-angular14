import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
    selector: 'app-excluir-pensamento',
    templateUrl: './excluir-pensamento.component.html',
    styleUrls: ['./excluir-pensamento.component.scss']
})
export class ExcluirPensamentoComponent implements OnInit
{
    pensamento: Pensamento = {
        conteudo: '',
        autoria: '',
        modelo: ''
    }

    constructor(
        private pensamentoService: PensamentoService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = parseInt(this.route.snapshot.paramMap.get('id')!)

        this.pensamentoService.buscarPorId(id)
            .subscribe((pensamento) => {
                this.pensamento = pensamento
            })
    }

    excluirPensamento()
    {
        if (!this.pensamento.id) {
            return
        }

        this.pensamentoService.excluir(this.pensamento.id)
            .subscribe(() => {
                this.router.navigate(['/listar-pensamento'])
            })
    }

    cancelar()
    {
        this.router.navigate(['/listar-pensamento'])
    }
}
