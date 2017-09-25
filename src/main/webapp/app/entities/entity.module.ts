import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SaotomeComandaModule } from './comanda/comanda.module';
import { SaotomeProdutoModule } from './produto/produto.module';
import { SaotomeEstoqueModule } from './estoque/estoque.module';
import { SaotomePedidoModule } from './pedido/pedido.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SaotomeComandaModule,
        SaotomeProdutoModule,
        SaotomeEstoqueModule,
        SaotomePedidoModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SaotomeEntityModule {}
