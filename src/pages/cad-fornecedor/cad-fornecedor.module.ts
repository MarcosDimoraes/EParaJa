import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadFornecedorPage } from './cad-fornecedor';

@NgModule({
  declarations: [
    CadFornecedorPage,
  ],
  imports: [
    IonicPageModule.forChild(CadFornecedorPage),
  ],
})
export class CadFornecedorPageModule {}
