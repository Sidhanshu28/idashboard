import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.dropdown').hover(
      function() {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown('400');
        $(this).toggleClass('open');
      },
      function() {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp('400');
        $(this).toggleClass('open');
      }
    );

  }

}
