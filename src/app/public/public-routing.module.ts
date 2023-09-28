import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GeneralInsustryComponent } from './pages/general-insustry/general-insustry.component';
import { HomeComponent } from './pages/home/home.component';
import { LogisticsServicesComponent } from './pages/logistics-services/logistics-services.component';
import { MechanicalWorksComponent } from './pages/mechanical-works/mechanical-works.component';
import { OilGasIndustryComponent } from './pages/oil-gas-industry/oil-gas-industry.component';
import { PetroleumRefineryComponent } from './pages/petroleum-refinery/petroleum-refinery.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PowerEnergyComponent } from './pages/power-energy/power-energy.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'general-insustry', component: GeneralInsustryComponent },
  { path: 'logistics-services', component: LogisticsServicesComponent },
  { path: 'mechanical-works', component: MechanicalWorksComponent},
  { path: 'oil-gas-industry', component: OilGasIndustryComponent},
  { path: 'petroleum-refinery', component: PetroleumRefineryComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'team', component: TeamComponent },
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'power-energy', component: PowerEnergyComponent},
];


@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] }) export class PublicRoutingModule { }
