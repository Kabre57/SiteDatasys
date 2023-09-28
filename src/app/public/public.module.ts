import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GeneralInsustryComponent } from './pages/general-insustry/general-insustry.component';
import { LogisticsServicesComponent } from './pages/logistics-services/logistics-services.component';
import { MechanicalWorksComponent } from './pages/mechanical-works/mechanical-works.component';
import { OilGasIndustryComponent } from './pages/oil-gas-industry/oil-gas-industry.component';
import { PetroleumRefineryComponent } from './pages/petroleum-refinery/petroleum-refinery.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { PowerEnergyComponent } from './pages/power-energy/power-energy.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';




@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FaqComponent,
    GeneralInsustryComponent,
    LogisticsServicesComponent,
    MechanicalWorksComponent,
    OilGasIndustryComponent,
    PetroleumRefineryComponent,
    ProjectsComponent,
    ServicesComponent,
    TeamComponent,
    TestimonialsComponent,
    PowerEnergyComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: []

})
export class PublicModule { }
