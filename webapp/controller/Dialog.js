sap.ui.define([
	"sap/ui/base/Object"
],function(Object){
	"use strict";
	
	return Object.extend("znode.controller.Dialog",{
		constructor : function(oParentView){
			this._PV = oParentView;
			this._VM = this._PV.getModel("json");
			this._oController = oParentView.getController();
		},
		
		openDialog : function(){
			if(!this._dialog){
				this._dialog = sap.ui.xmlfragment(this._PV.getId(),"znode.view.Dialog",this);
			}
			console.log(this._PV.getId());
			this._PV.addDependent(this._dialog);
			this._dialog.open();
		},
		
		handleST : function(evt){
			var oContext = evt.getSource().getBindingContext("json");
			var title = evt.getSource().getProperty("title");
			var obj = this._VM.getProperty(oContext.sPath);
			
			console.log(title,obj);
		}
	});
});