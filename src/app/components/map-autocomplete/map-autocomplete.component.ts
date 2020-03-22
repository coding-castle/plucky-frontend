import {Component, OnInit, Output, EventEmitter, Input, NgModule, ElementRef, ViewChild, NgZone} from "@angular/core";
import {FormControl} from "@angular/forms";
import {AgmCoreModule,MapsAPILoader} from "@agm/core";
// @ts-ignore
import {  } from "googlemaps";
import { Farm } from "src/app/models/farm.model";
import * as firebase from "firebase";

@Component({
  selector: "app-map-autocomplete",
  templateUrl: "./map-autocomplete.component.html",
  styleUrls: ["./map-autocomplete.component.scss"],
})

export class MapAutocompleteComponent implements OnInit {
  @Input() farm: Farm;

  public lat: number;
  public lng: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //set google maps defaults
    this.zoom = 4;

    if(this.farm) {
      this.lat = this.farm.location.latitude;
      this.lng = this.farm.location.longitude;
    } else {
      this.lat = 39.8282;
      this.lng = -98.5795;
    }

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 15;
        });
      });

    });
  }

  async setPlace() {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      types: ["address"]
    });
    let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    if (place.geometry === undefined || place.geometry === null) {
      return;
    }
    let location = new firebase.firestore.GeoPoint(
      place.geometry.location.lat(),
      place.geometry.location.lng()
    )

    // TODO - Set place to farm
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
