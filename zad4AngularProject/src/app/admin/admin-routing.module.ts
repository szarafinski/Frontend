import { MainComponent } from './../meals/main/main.component';
import { AuthService } from './services/authentication-service';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from "./services/admin-guard-service";

const adminRoutes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '',
            children: [
                {path: 'database', component: MainComponent},
                {path: '', component: AdminDashboardComponent}
            ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class AdminRoutingModule { }