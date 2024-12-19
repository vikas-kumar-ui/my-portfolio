import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-topics',
    standalone: true,
    imports: [MatIconModule],
    templateUrl: './topics.component.html',
    styleUrl: './topics.component.scss'
})
export class TopicsComponent {
    slider!: HTMLElement | null;
    sliderContainer!: HTMLElement | null;
    sliderPrevBtn!: HTMLElement | null;
    sliderNextBtn!: HTMLElement | null;

    totalSliderVisibleItems: number = 0;
    totalSlidableItems: number = 0;
    currentSlidePos: number = 0;

    ngAfterViewInit(): void {
        // Get references to elements after the view initializes
        this.slider = document.querySelector('[data-slider]');
        this.sliderContainer = document.querySelector('[data-slider-container]');
        this.sliderPrevBtn = document.querySelector('[data-slider-prev]');
        this.sliderNextBtn = document.querySelector('[data-slider-next]');

        if (this.slider && this.sliderContainer) {
            this.totalSliderVisibleItems = Number(
                getComputedStyle(this.slider).getPropertyValue('--slider-items')
            );
            this.totalSlidableItems =
                this.sliderContainer.childElementCount - this.totalSliderVisibleItems;

            // Attach event listeners
            this.sliderNextBtn?.addEventListener('click', () => this.slideNext());
            this.sliderPrevBtn?.addEventListener('click', () => this.slidePrev());
        }
    }

    /**
     * Moves the slider to the current position
     */
    moveSliderItem(): void {
        if (this.sliderContainer) {
          const currentElement = this.sliderContainer.children[this.currentSlidePos];
          if (currentElement instanceof HTMLElement) {
            const offsetLeft = currentElement.offsetLeft;
            this.sliderContainer.style.transform = `translateX(-${offsetLeft}px)`;
          }
        }
      }

    /**
     * Moves to the next slide
     */
    slideNext(): void {
        if (this.currentSlidePos >= this.totalSlidableItems) {
            this.currentSlidePos = 0;
        } else {
            this.currentSlidePos++;
        }
        this.moveSliderItem();
    }

    /**
     * Moves to the previous slide
     */
    slidePrev(): void {
        if (this.currentSlidePos <= 0) {
            this.currentSlidePos = this.totalSlidableItems;
        } else {
            this.currentSlidePos--;
        }
        this.moveSliderItem();
    }

    /**
     * Handles window resize event to recalculate slider dimensions
     */
    @HostListener('window:resize', [])
    onResize(): void {
        if (this.slider && this.sliderContainer) {
            this.totalSliderVisibleItems = Number(
                getComputedStyle(this.slider).getPropertyValue('--slider-items')
            );
            this.totalSlidableItems =
                this.sliderContainer.childElementCount - this.totalSliderVisibleItems;

            this.moveSliderItem();
        }
    }
}
