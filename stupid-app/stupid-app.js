Meteor.methods({
  callClarifai: function () {
        this.unblock();
        var response = Meteor.http.call("GET", "https://api.clarifai.com/v1/tag/?url=https://s3.amazonaws.com/rapgenius/1367448157_Papi.jpg",
        {headers: {Authorization: "Bearer jftVrJ6hG1v26OVFVKM5wNB9hyt2pL"}});
        // console.log("LOL");
        var m = JSON.parse(response.content);
        console.log(response.content);
        return m.results[0].result.tag.classes;
  }
});

if (Meteor.isClient) {
  // counter starts at 0

  Session.setDefault('counter', 0);
  console.log("calling callClarifai");
  Meteor.call("callClarifai", function(err, result) {
    Session.setDefault('result', result);
    debugger;
    console.log(result);
  });

  Template.hello.helpers({
    result: function () {
      return Session.get('result');
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

  });

}
