import {Component, ElementRef, Input, Renderer2} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, of, take, tap} from "rxjs";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() set icon (value: string) {
    this.loadIcon(value);
  }
  @Input() iconColor: string = 'black';
  @Input() strokeColor: string | null = null;
  @Input() isClickable: boolean = false;
  @Input() id: string = '0';

  constructor(private http: HttpClient, private elementRef: ElementRef, private renderer: Renderer2) {}

  private loadIcon(icon: string): void {
    if (icon == null || icon === '')
      return;

    const iconPath = `assets/icons/${icon}.svg`;

    this.http
      .get(iconPath, { responseType: 'text' })
      .pipe(
        take(1),
        tap((svgText) => {
          const svgElement = this.renderer.createElement('div');
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
    this.renderer.setStyle(svgElement, 'width', '90%');
    this.renderer.setStyle(svgElement, 'height', '90%');
    this.renderer.setStyle(svgElement, 'fill', this.iconColor);
    this.renderer.setAttribute(svgElement, 'id', this.iconId);
    if (this.strokeColor != null)
      this.renderer.setStyle(svgElement, 'stroke', this.strokeColor);
    if (this.isClickable)
      this.renderer.setStyle(svgElement, 'cursor', 'pointer');
  }

  get iconId(): string {
    return `icon-${this.icon}-${this.id}`;
  }
}
