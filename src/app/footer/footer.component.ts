import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit, AfterViewInit {

  @ViewChild('footerImg') el: ElementRef;
  @ViewChild('row') container: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setImgHeight();
  }

  setImgHeight(): void {
    const height = this.container.nativeElement.outerHeight;
    this.el.nativeElement.style.height = height + 'px';
  }
}
