function AppViewModel () {
  this.name = 'Tabby';
  this.clickCount = ko.observable(0);
  this.imgSrc = 'img/22252709_010df3379e_z.jpg';

  this.incrementCounter = () => {
    this.clickCount(this.clickCount() + 1);
  }
}

ko.applyBindings(new AppViewModel());
