import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-sectio-header',
  templateUrl: './sectio-header.component.html',
  styleUrls: ['./sectio-header.component.scss']
})
export class SectioHeaderComponent implements OnInit {
  breadcrumb$: Observable<any[]>;
  constructor(private bcService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumb$ = this.bcService.breadcrumbs$;
  }

}
