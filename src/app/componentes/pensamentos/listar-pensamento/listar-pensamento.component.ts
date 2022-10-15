import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-listar-pensamento',
    templateUrl: './listar-pensamento.component.html',
    styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

    listaPensamentos = [
        {
            conteudo: 'Descrição',
            autoria: 'Anônimo',
            modelo: 'modelo1'
        },
        {
            conteudo: 'Comunicação entre componentes',
            autoria: 'Angular',
            modelo: 'modelo3'
        }
    ]

    constructor() { }

    ngOnInit(): void {
    }
}
