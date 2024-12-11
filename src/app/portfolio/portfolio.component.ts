import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { FeaturedComponent } from "./featured/featured.component";
import { PopularTagsComponent } from "./popular-tags/popular-tags.component";
import { RecentPostComponent } from "./recent-post/recent-post.component";
import { FooterComponent } from "./footer/footer.component";
import { BackToTopComponent } from "./back-to-top/back-to-top.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, FeaturedComponent, PopularTagsComponent, RecentPostComponent, FooterComponent, BackToTopComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
