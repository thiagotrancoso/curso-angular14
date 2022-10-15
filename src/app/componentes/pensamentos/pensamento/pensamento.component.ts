import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-pensamento',
    templateUrl: './pensamento.component.html',
    styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {

    @Input() pensamento = {
        conteudo: 'Eu amo Angular',
        autoria: 'Thiago',
        modelo: 'modelo3'
    }

    constructor() { }

    ngOnInit(): void {
    }

    larguraPensamento(): string {
        if (this.pensamento.conteudo.length >= 250) {
            return 'pensamento-g'
        }

        return 'pensamento-p'
    }
}
