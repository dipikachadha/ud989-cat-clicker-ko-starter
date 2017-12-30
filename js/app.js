function AppViewModel () {
  this.name = 'Tabby';
  this.clickCount = ko.observable(0);
  this.imgSrc = 'img/22252709_010df3379e_z.jpg';

  this.incrementCounter = () => {
    this.clickCount(this.clickCount() + 1);
  };

  this.catLevel = ko.computed (_ => {
    const clicks = this.clickCount();
    switch (true) {
      case (clicks >= 0 && clicks < 10): return 'Newborn';
      case (clicks >= 10 && clicks < 20): return 'Teen';
      case (clicks >= 20): return 'Youth';
      default: return 'Error';
    };
  });

  this.nickNames = ['Timmy', 'Tabbu', 'Tiggy'];
}

ko.applyBindings(new AppViewModel());
