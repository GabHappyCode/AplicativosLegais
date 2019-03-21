
import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, Platform} from "@ionic/angular";

@Component({
  selector:'page-home',
  templateUrl:'home.page.html'
})
export class HomePage{
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = "chicago, il";
  direcionsService = new google.maps.direcionsService;
  directionsService = new google.maps.DirectionRenderer;

  constructor(
    public navCtrl: NavController,
    private platform: Platform
  ){
    platform.ready().then(() => {
    })

  }

  initMap(){
    var happycode = (
      lat: -22.969933277,
      lng: -47.0649085
    );
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: happycode,
      disableDefaultUI: true
    });

    this.directionsDisplay.setMap(this.map);

    var marker = new google.maps.Marker({
      position: happycode,
      map: this.map,
      title: 'My Position!'
    });

    calculateAndDisplayRoute(){
      this.direcionsService.route({
        origin: this.start,
        destination: this.end,
        travelModel: 'DRIVING'
      }, (response, status)=>{
        if (status == 'OK'){
          this.directionsDisplay.setDirection(responce);
        } else{
          window.alert('Directions request failed due to'+ status)
        }
        }
      }
      });
    }
    

  }
}