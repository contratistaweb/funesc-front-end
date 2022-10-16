import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./modules/core/shared/components/main-layout/main-layout.component";
import {ComingSoonComponent} from "./modules/core/shared/components/coming-soon/coming-soon.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: "full"
      },
      {
        path: 'coming-soon',
        component: ComingSoonComponent
      },
      {
        path: 'inicio',
        loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
