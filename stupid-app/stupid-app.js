Meteor.methods({
  callClarifai: function () {
        this.unblock();
        response = Meteor.http.call("GET", "https://api.clarifai.com/v1/tag/?url=http://www.clarifai.com/img/metro-north.jpg",
        {headers: {Authorization: "Bearer jftVrJ6hG1v26OVFVKM5wNB9hyt2pL"}});
        console.log("LOL");
        console.log(response.content);
        return response.content;
  }
});

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  var result = Meteor.call("callClarifai");
    debugger;
  console.log(result);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    var response;

  });

}
