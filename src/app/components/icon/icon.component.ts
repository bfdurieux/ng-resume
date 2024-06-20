import {Component, ElementRef, Input, Renderer2} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, of, tap} from "rxjs";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() set icon (value: string) {
    console.log(value)
    this.source = 'assets/icons/github.svg';
    this.loadIcon(value);
  }
  @Input() iconSize: string = '24px';
  @Input() iconColor: string = 'black';
  @Input() isClickable: boolean = false;
  source: string = '';

  constructor(private http: HttpClient, private elementRef: ElementRef, private renderer: Renderer2) {}

  private loadIcon(icon: string): void {
    const iconPath = `assets/icons/${icon}.svg`;

    this.http
      .get(iconPath, { responseType: 'text' })
      .pipe(
        tap((svgText) => {
          const svgElement = this.renderer.createElement('span');
          svgElement.innerHTML = svgText;
          const icon = svgElement.querySelector('svg');
          this.applyIconStyles(icon);
          this.elementRef.nativeElement.appendChild(icon);
        }),
        catchError((error: any) => {
          console.error(`Failed to load SVG icon '${icon}':`, error);
          return of(null);
        })
      )
      .subscribe();
  }

  private applyIconStyles(svgElement: HTMLElement): void {
    this.renderer.setStyle(svgElement, 'width', this.iconSize);
    this.renderer.setStyle(svgElement, 'height', this.iconSize);
    this.renderer.setStyle(svgElement, 'fill', this.iconColor);
  }
}
