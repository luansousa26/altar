import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientsService } from './clients.service';
import { GeneratorComponent } from './generator/generator.component';
import { PaymentsComponent } from './payments/payments.component';
import { YourCodeComponent } from './components/your-code/your-code.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
    declarations: [
        ClientsComponent,
        GeneratorComponent,
        PaymentsComponent,
        YourCodeComponent,
        PaymentFormComponent,
        ListComponent
    ],
    imports: [
        NgxMaskModule.forRoot(),
        FormsModule,
        ClientsRoutingModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        ClientsService
    ],
    bootstrap: []
})
export class ClientsModule { }
