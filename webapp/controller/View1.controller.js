sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"./Dialog"
], function(Controller, Dialog) {
	"use strict";

	return Controller.extend("znode.controller.View1", {
		onInit: function() {
			this.oModel2 = this.getOwnerComponent().getModel("odataModel");
			this.JOSNModel = new sap.ui.model.json.JSONModel();
			var model = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZDEMOTREE_SRV/",{
				requestCompleted : this.request
			});
			this.oModel2.read("/ZNODE_V", {
				success: function(evt, response) {
					// console.log(response.data);
					var data = this.transformTreeData(response.data.results);
					var date = response.headers["sap-metadata-last-modified"];
					var date1 = new Date(date);
					console.log(Number(date1));
					this.JOSNModel.setData({
						nodeRoot: data
					});
					// console.log(JSON.stringify(response.data.results));
					this.getView().setModel(this.JOSNModel, "json");
				}.bind(this),
				error: function(evt) {

				}
			});
			this.oModel2.attachBatchRequestCompleted(function(evt){
				console.log(evt);	
			});
			// this.getView().setModel(this.oModel2);
		},
		
		request : function(evt){
			console.log(evt);	
		},
		onAfterRendering: function() {
			// var oTreeTable = this.getView().byId("treeTable");
			// var level = oTreeTable.getRootLevel();
			// oTreeTable.expandToLevel(level); //number of the levels of the tree table.
			// oTreeTable.attachBrowserEvent("click",function(evt){
			// 	console.log(evt);
			// });
		},
		handleToggle: function(evt) {
			console.log(evt.getSource());
			console.log(evt.getParameters("rowContext"));
		},
		onPress: function(evt) {
			// var oTreeTable = this.getView().byId("treeTable");
			// var index = oTreeTable.getSelectedIndex();
			// var context = oTreeTable.getContextByIndex(index);
			// this.oModel2.read(context.sPath,{
			// 	success : function(evt,response){
			// 		console.log(response);
			// 	},
			// 	error : function(error){

			// 	}
			// });
			if (!this._dialog) {
				this._dialog = new Dialog(this.getView());
			}
			// this.getView().addDependent(this._dialog);
			this._dialog.openDialog();
		},
		transformTreeData: function(nodesIn) {
			nodesIn.sort(function(a, b) {
				return a.parentnodeid - b.parentnodeid;
			}); //根据父节点排序，先把顶层放进nodeMap  
			var nodes = [];
			var nodeMap = {};
			if (nodesIn) {
				var nodeOut;
				var parentId;
				for (var i = 0; i < nodesIn.length; i++) {
					var nodeIn = nodesIn[i];
					nodeOut = nodeIn;
					nodeOut.children = [];
					parentId = nodeIn.parentnodeid;
					if (parentId > 0) {
						var parent = nodeMap[nodeIn.parentnodeid];
						if (parent) {
							parent.children.push(nodeOut);
						}
					} else {
						nodes.push(nodeOut);
					}
					nodeMap[nodeOut.nodeid] = nodeOut;
				}
			}
			var nodeData = {
				children: nodes
			};
			return nodeData;
		},

		handleST: function(evt) {
			var oContext = evt.getSource().getBindingContext("json");
			var title = evt.getSource().getProperty("title");
			var obj = this.JOSNModel.getProperty(oContext.sPath);

			console.log(title, obj);
		}
	});
});