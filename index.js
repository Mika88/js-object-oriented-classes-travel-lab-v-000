class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let streetsTravelled = Math.abs(endingLocation.vertical - beginningLocation.vertical)

    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    let endPoint = eastWest.indexOf(endingLocation.horizontal) + 1
    let startPoint = eastWest.indexOf(beginningLocation.horizontal) + 1

    let avenuesTravelled = Math.abs(endPoint - startPoint)

    return streetsTravelled + avenuesTravelled
  }
}
