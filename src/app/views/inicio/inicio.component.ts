import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

declare var GGBApplet: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  materialForm = new FormGroup({
    material:new FormControl('',Validators.required),
    enlace:new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
    var params = {"appName": "classic", "width": 900, "height": 500, "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true };
    var applet = new GGBApplet(params, true);
    window.addEventListener("load", function() { 
        applet.inject('ggb-element');
    });
  }

}
