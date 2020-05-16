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
}
