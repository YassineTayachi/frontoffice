import { Component, OnInit } from '@angular/core';
import { MenusService } from '../services/menus.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menus;
  items = [];
  constructor(private MenuService: MenusService) { }

  ngOnInit() {
    this.MenuService.getAll()
      .subscribe(resultMenu => {
        this.menus = resultMenu;
        this.menus.forEach(item => {
          this.MenuService.getMenuItems(item._id)
            .subscribe(resultItems => {
              item.items = resultItems;
            });
        });
      });
  }

}
