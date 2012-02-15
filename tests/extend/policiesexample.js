define("jquery", function () {
  return {
    post: function (url, data, callback) {
      callback( {
        successful: true, 
        error: true, 
        message: "yo dawg!"
      });
    }
  };
});

define("messagebus", function () {
  return {
    publish : function (topic, data) {
      console.log(topic, data);
    }
  }
});

extend("policies", function () {
	return function (policies){
		var policy = {
			matches : function (context) {
				/* always execute */
				return true;
			},
			execute : function (data) {
				console.log("data:received", data);
			}
		}
		policies.push(policy);
		return policies;
	}; 
});

extend("policies",["messagebus"], function (bus) {
	return function (policies){
		var policy = {
			matches : function (context) {
				/* only execute when */
				return context.successful;
			},
			execute : function (data) {
				
				bus.publish("successful", data); 
			}
		}
		policies.push(policy);
		return policies;
	}; 
});
extend("policies",["messagebus"], function (bus) {
	return function (policies){
		var policy = {
			matches : function (context) {
				/* only execute when */
				return context.error;
			},
			execute : function (data) {
				
				bus.publish("failure", data); 
			}
		}
		policies.push(policy);
		return policies;
	}; 
});

define("policies", function () {
	return [];
});



define("fooModel",["jquery","policies"], function ($, policies) {
	return {
		save: function (attributes) {
			$.post("/foo", attributes,function (data) {
				policies.forEach(function(policy) {
					if(policy.matches(data)){
						policy.execute(data);
					}
				});
			});
		}
	};
});
