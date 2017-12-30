function Cat () {
  this.name = ko.observable('Tabby');
  this.clickCount = ko.observable(0);
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.nickNames = ko.observableArray(['Timmy', 'Tabbu', 'Tiggy']);

  this.catLevel = ko.computed (_ => {
    const clicks = this.clickCount();
    switch (true) {
      case (clicks >= 0 && clicks < 10): return 'Newborn';
      case (clicks >= 10 && clicks < 20): return 'Teen';
      case (clicks >= 20): return 'Youth';
      default: return 'Error';
    };
  }, this);
}

function AppViewModel () {
  const that = this; // save ViewModel context for use later on

  // We make a currentCat KO observable object from raw cat data. The data
  // differs from the returned object since it has all it's properties as KO
  // observables and has added KO functions like catLevel.
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = _ => {
    // The HTML uses with: currentCat context, and calls incrementCounter in
    // that context, albeit with $parent. Hence, we need to act as per the
    // currentCat context, or explicitly specify the scope we are referring to.
    // I chose the latter with the statement below.
    that.currentCat().clickCount(that.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new AppViewModel());
