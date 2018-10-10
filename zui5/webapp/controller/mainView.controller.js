sap.ui.define([
	"ui5/controller/baseController"
], function(baseController) {
	"use strict";

	return baseController.extend("ui5.controller.mainView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 */
		onInit: function() {
			this._timer = null;
			console.log("Hello World");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 */
		onBeforeRendering: function() {

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 */
		onAfterRendering: function() {

		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 */
		onExit: function() {

		},

		onPress: function(evt) {
			var oLabelTimeLeft = this.getView().byId("label");
			var progressIndicator = this.getView().byId("pi");
			var p = progressIndicator.getPercentValue();
			var totalTime = 10000;
			var interval = 100;
			if (p == 0) {
				progressIndicator.setState("None");
				progressIndicator.setPercentValue(100);
			}
			var timer = setInterval(function() {
				var percent = progressIndicator.getPercentValue();
				var newPercent = percent - 1;
				var timePassed = (totalTime * newPercent) / 100;
				timePassed = Math.floor(timePassed / 1000);
				var seconds = (timePassed % 60);
				timePassed = Math.floor(timePassed / 60);
				var minutes = (timePassed % 60);
				timePassed = Math.floor(timePassed / 60);
				if (minutes.toString().length == 1) {
					minutes = "0" + minutes;
				}
				if (seconds.toString().length == 1) {
					seconds = "0" + seconds;
				}
				if (newPercent >= 0) {
					progressIndicator.setPercentValue(newPercent);
					//Change bar color to negative in last 30 seconds
					if (newPercent <= 25) {
						progressIndicator.setState("Error");
					}
					//Change bar color to critical in last 1 minute
					else if (newPercent <= 50) {
						progressIndicator.setState("Success");
					}
					//Update current time left
					oLabelTimeLeft.setText(minutes + ":" + seconds);
				} else {
					//Stop timer after 2 minutes

					clearInterval(timer);
				}
			}, 100);
			this._timer = timer;
		},
		onStop: function(evt) {
			clearInterval(this._timer);
		}
	});
});
