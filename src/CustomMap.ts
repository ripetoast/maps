//Instructions to every other class on how they can be an argument to "addMarker"
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(containerId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(containerId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infowindow.open(this.googleMap, marker);
    });
  }
}
