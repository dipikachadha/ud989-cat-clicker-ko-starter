const initialCats = [
  {
    pic: "https://cdn.pixabay.com/photo/2015/02/09/15/55/cat-629821_960_720.jpg",
    clickCount: 0,
    name: "Kiki The Toy",
    nickNames: ['Kikee', 'Toy'],
    get alt () {
      return "The cutesy " + this.name + " shall appear here...";
      }
  }, {
    pic: "https://dianakhayyat.files.wordpress.com/2011/05/animals_cats_small_cat_005241_.jpg",
    clickCount: 0,
    name: "Kuku The Hypnotizer",
    nickNames: ['Cuckoo'],
    get alt () {
      return "The mighty " + this.name + " shall appear here...";
      }
  }, {
    pic: "http://images2.fanpop.com/image/photos/12900000/Cute-kittens-12929201-1600-1200.jpg",
    clickCount: 0,
    name: "Monu The Jubilant",
    nickNames: ['Happy'],
    get alt () {
      return "The eager " + this.name + " shall appear here...";
      }
  }, {
    pic: "http://2.bp.blogspot.com/-FhcPduq6qnQ/TkDcxjKKwEI/AAAAAAAABuo/jKRf89KmzgA/s1600/cute+cats.jpg",
    clickCount: 0,
    name: "Pokus The Twins",
    nickNames: ['Twins'],
    get alt () {
      return "The milky " + this.name + " shall appear here...";
      }
  }, {
    pic: "http://images2.fanpop.com/image/photos/9900000/so-cute-3-cute-kittens-9989494-1098-960.jpg",
    clickCount: 0,
    name: "Kattie The Small",
    nickNames: ['Smallie'],
    get alt () {
      return "The cute " + this.name + " shall appear here...";
      }
  }];

function Cat (data) {
  this.name = ko.observable(data.name);
  this.clickCount = ko.observable(data.clickCount);
  this.imgSrc = ko.observable(data.pic);
  this.nickNames = ko.observableArray(data.nickNames);
  this.alt = ko.observable(data.alt);

  // This does not need explicit data reference. It is actively computed as per
  // data.clickCount specification.
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
  this.catList = ko.observableArray(
    initialCats.map(catData => {console.log(new Cat(catData)); return new Cat(catData)}));
  this.currentCat = ko.observable(this.catList()[0]);

  console.log(this.currentCat(), this.catList());

  this.incrementCounter = _ => {
    // The HTML uses with: currentCat context, and calls incrementCounter in
    // that context, albeit with $parent. Hence, we need to act as per the
    // currentCat context, or explicitly specify the scope we are referring to.
    // I chose the latter with the statement below.
    that.currentCat().clickCount(that.currentCat().clickCount() + 1);
  };
}

$(
  ko.applyBindings(new AppViewModel())
);
