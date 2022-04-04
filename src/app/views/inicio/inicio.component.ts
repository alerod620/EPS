import { Component, OnInit } from '@angular/core';
declare var GGBApplet: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var params = {"appName": "classic", "width": 900, "height": 450, "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true };
    var applet = new GGBApplet(params, true);
    window.addEventListener("load", function() { 
        applet.inject('ggb-element');
    });
  }

}
