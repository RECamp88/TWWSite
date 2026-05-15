import { Component } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { WhatWeBuildSection } from '../what-we-build-section/what-we-build-section';
import { WorkshopSection } from '../workshop-section/workshop-section';
import { WhoWeAreSection } from '../who-we-are-section/who-we-are-section';
import { SiteHeader } from "../../layout/site-header/site-header";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSection,
    WhatWeBuildSection,
    WorkshopSection,
    WhoWeAreSection,
    SiteHeader
],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePage {}

