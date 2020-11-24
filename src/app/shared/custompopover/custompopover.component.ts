import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-custompopover',
  templateUrl: './custompopover.component.html',
  styleUrls: ['./custompopover.component.scss'],
})
export class CustompopoverComponent implements OnInit {

  constructor(private popoverController: PopoverController, private router: Router) { }

  ngOnInit() {}
  async genre() {
    await this.popoverController.dismiss();
    this.router.navigateByUrl("welcome/subscriberLogin/subscribermovie/genre");
      }
   async language() {
        await this.popoverController.dismiss();
        this.router.navigateByUrl("welcome/subscriberLogin/subscribermovie/language");
          }
}
