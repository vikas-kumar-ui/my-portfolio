import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-back-to-top',
    standalone: true,
    imports: [MatIconModule],
    templateUrl: './back-to-top.component.html',
    styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
    // To store references to elements
    header!: HTMLElement | null;
    backTopBtn!: HTMLElement | null;

    ngOnInit(): void {
        // Initialize element references
        this.header = document.querySelector('[data-header]');
        this.backTopBtn = document.querySelector('[data-back-top-btn]');
    }

    @HostListener('window:scroll', [])
    onScroll(): void {
        if (this.header && this.backTopBtn) {
            if (window.scrollY > 100) {
                this.header.classList.add('active');
                this.backTopBtn.classList.add('active');
            } else {
                this.header.classList.remove('active');
                this.backTopBtn.classList.remove('active');
            }
        }
    }
}

