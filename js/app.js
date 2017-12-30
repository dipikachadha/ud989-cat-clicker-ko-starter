function Cat () {
  this.name = ko.observable('Tabby');
  this.clickCount = ko.observable(0);
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');

  this.catLevel = ko.computed (_ => {
    const clicks = this.clickCount();
    switch (true) {
      case (clicks >= 0 && clicks < 10): return 'Newborn';
      case (clicks >= 10 && clicks < 20): return 'Teen';
      case (clicks >= 20): return 'Youth';
      default: return 'Error';
    };
  }, this);

  this.nickNames = ko.observableArray(['Timmy', 'Tabbu', 'Tiggy']);
}

function AppViewModel () {
  const that = this; // save ViewModel context for use later on
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = () => {
    that.currentCat().clickCount(that.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new AppViewModel());
