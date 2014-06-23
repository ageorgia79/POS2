'use strict';

Parse.initialize("LFJ3QGbWShkk4EL9OPC9RBzsM1beJbuSzZ3m8F0f", "h9DNGD2Piozeww9Il1F9zS85gQh17uJXZnqf2l7V");

var Login = Parse.Object.extend({
  className: "Login"
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var LoginCollection = Parse.Collection.extend({

  model: Login,
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var collection = new LoginCollection();


var LoginView = Parse.View.extend({

  className: "cool",

  loginTemplate: _.template($('.login-template').text()),

  events: {

    "click .submit": "showLayoutView"
  },

  initialize: function(){
    $('.container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.loginTemplate();
    this.$el.html(renderedTemplate);
  },

  showLayoutView: function(){
    var layout = new LayoutView({model: this.model});
    $('.container').append(layout);
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var view = new LoginView();



