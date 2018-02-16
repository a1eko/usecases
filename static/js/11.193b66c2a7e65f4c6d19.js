webpackJsonp([11,14],{69:function(e,t){e.exports={ca1models:{raw:"https://raw.githubusercontent.com/lbologna/bsp_data_repository/master/optimizations/"},nmcportal:{raw:"https://bbp.epfl.ch/public/nmc-models/"},morphologyvisualization:{raw:"https://raw.githubusercontent.com/lbologna/bsp_data_repository/master/optimizations/"},morphologyanalysis:{raw:"https://raw.githubusercontent.com/lbologna/bsp_data_repository/master/optimizations/"},smallcircuitinsilicoexperiments:{configureandrunasmallcircuitusingpreconfiguredhbpmodelanddata:[{title:"Rat hippocampus CA1",species:"Rat",brain_structure:"hippocampus",cell_soma_location:"CA1",description:"A circuit of detailed neuron models based on the Ascoli atlas.",contributors:[{name:"Armando Romani",email:"armando.romani@epfl.ch"}],img:"https://github.com/antonelepfl/usecases/raw/dev/src/assets/images/hippocampusConnections.png"}]},circuitbuilding:{cellsplacement:[{title:"Rat Cerebellum volume",species:"Rat",brain_structure:"Cerebellum",cell_soma_location:"volume",description:"A volume of the cerebellum with detailed neuron models.",contributors:[{name:"Egidio d’Angelo",email:"egidiougo.dangelo@unipv.it"},{name:"Stefano Casali",email:"stefano.casali01@universitadipavia.it"}],img:"https://github.com/antonelepfl/usecases/raw/dev/src/assets/images/cerebellum.png"},{title:"Rat hippocampus CA1",species:"Rat",brain_structure:"hippocampus",cell_soma_location:"CA1",description:"A circuit of detailed neuron models based on the Ascoli atlas.",contributors:[{name:"Armando Romani",email:"armando.romani@epfl.ch"}],img:"https://github.com/antonelepfl/usecases/raw/dev/src/assets/images/hippocampusConnections.png"}],connectome:[{title:"Rat Cerebellum volume",species:"Rat",brain_structure:"Cerebellum",cell_soma_location:"volume",description:"A volume of the cerebellum with detailed neuron models.",contributors:[{name:"Egidio d’Angelo",email:"egidiougo.dangelo@unipv.it"},{name:"Stefano Casali",email:"stefano.casali01@universitadipavia.it"}],img:"https://github.com/antonelepfl/usecases/raw/dev/src/assets/images/cerebellum.png"},{title:"Rat hippocampus CA1",species:"Rat",brain_structure:"hippocampus",cell_soma_location:"CA1",description:"A circuit of detailed neuron models based on the Ascoli atlas.",contributors:[{name:"Armando Romani",email:"armando.romani@epfl.ch"}],img:"https://github.com/antonelepfl/usecases/raw/dev/src/assets/images/hippocampusConnections.png",disabled:!0}]}}},170:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(272),o=n(i),s=a(69),l=n(s);t.default={name:"modelContainer",components:{"model-item":o.default},props:["uc_name"],data:function(){return{modelsConfig:l.default,models:[],list_usecases:"smallcircuitinsilicoexperiments"}},methods:{selected:function(e){e.disabled||window.open("https://bbp.epfl.ch/public/simulationapp/index.html","_blank","toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes")}},created:function(){document.querySelector("title").innerHTML="Models";var e=this.modelsConfig[this.list_usecases];this.models=e[this.uc_name]}}},171:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(132),o=n(i);t.default={name:"modelItem",components:{"uc-description":o.default},data:function(){return{uc:{}}},props:{model:{type:Object}},created:function(){this.uc.title=this.model.title,this.uc.description=this.model.description,this.uc.contributors=this.model.contributors}}},219:function(e,t,a){t=e.exports=a(17)(),t.push([e.id,".model-container[data-v-07eaa885]{padding:10px;margin-top:50px}.model-container.no-title[data-v-07eaa885]{padding:10px;margin-top:0}.model-container .item-sections[data-v-07eaa885]{margin-top:20px;padding:10px;cursor:pointer}.model-container .selected[data-v-07eaa885]{background-color:#d3d3d3;transition:background-color .5s ease}.model-container>.title[data-v-07eaa885]{box-shadow:0 2px 5px rgba(0,0,0,.26);position:fixed;text-align:left;color:#fff;background-color:rgba(172,96,103,.95);padding:20px;font-size:20px;font-weight:600;top:0;left:0;width:100%;z-index:3}.model-container .disabled-tag[data-v-07eaa885]{position:absolute;top:15%;left:45%;font-weight:700;border:10px solid #bacfcb;background-color:#bacfcb;border-radius:5px;z-index:2}.model-container .disabled-item[data-v-07eaa885]{opacity:.5;background-color:rgba(63,58,58,.22);cursor:not-allowed}.model-container .disabled-item[data-v-07eaa885]:hover{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.model-container .disabled-container[data-v-07eaa885]{position:relative}@media screen and (max-width:751px){.model-container .disabled-tag[data-v-07eaa885]{left:35%}}","",{version:3,sources:["/./src/components/smallcircuitinsilicoexperiments/model-container.vue"],names:[],mappings:"AACA,kCACG,aAAc,AACd,eAAiB,CACnB,AACD,2CACG,aAAc,AACd,YAAc,CAChB,AACD,iDACG,gBAAiB,AACjB,aAAc,AACd,cAAgB,CAClB,AACD,4CACG,yBAA4B,AAC5B,oCAAuC,CACzC,AACD,yCACG,qCAAsC,AACtC,eAAgB,AAChB,gBAAiB,AACjB,WAAY,AACZ,sCAA2C,AAC3C,aAAc,AACd,eAAgB,AAChB,gBAAiB,AACjB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,SAAW,CACb,AACD,gDACG,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,gBAAiB,AACjB,0BAA2B,AAC3B,yBAA0B,AAC1B,kBAAmB,AACnB,SAAW,CACb,AACD,iDACG,WAAa,AACb,oCAAyC,AACzC,kBAAoB,CACtB,AACD,uDACG,4FAA4G,CAC9G,AACD,sDACG,iBAAmB,CACrB,AACD,oCACA,gDACM,QAAU,CACf,CACA",file:"model-container.vue",sourcesContent:["\n.model-container[data-v-07eaa885] {\n   padding: 10px;\n   margin-top: 50px;\n}\n.model-container.no-title[data-v-07eaa885] {\n   padding: 10px;\n   margin-top: 0;\n}\n.model-container .item-sections[data-v-07eaa885] {\n   margin-top: 20px;\n   padding: 10px;\n   cursor: pointer;\n}\n.model-container .selected[data-v-07eaa885] {\n   background-color: lightgray;\n   transition: background-color 0.5s ease;\n}\n.model-container > .title[data-v-07eaa885] {\n   box-shadow: 0 2px 5px rgba(0,0,0,.26);\n   position: fixed;\n   text-align: left;\n   color: #fff;\n   background-color: rgba(172, 96, 103, 0.95);\n   padding: 20px;\n   font-size: 20px;\n   font-weight: 600;\n   top: 0;\n   left: 0;\n   width: 100%;\n   z-index: 3;\n}\n.model-container .disabled-tag[data-v-07eaa885] {\n   position: absolute;\n   top: 15%;\n   left: 45%;\n   font-weight: 700;\n   border: 10px solid #bacfcb;\n   background-color: #bacfcb;\n   border-radius: 5px;\n   z-index: 2;\n}\n.model-container .disabled-item[data-v-07eaa885] {\n   opacity: 0.5;\n   background-color: rgba(63, 58, 58, 0.22);\n   cursor: not-allowed;\n}\n.model-container .disabled-item[data-v-07eaa885]:hover {\n   box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n.model-container .disabled-container[data-v-07eaa885] {\n   position: relative;\n}\n@media screen and (max-width: 751px) {\n.model-container .disabled-tag[data-v-07eaa885] {\n      left: 35%;\n}\n}\n"],sourceRoot:"webpack://"}])},225:function(e,t,a){t=e.exports=a(17)(),t.push([e.id,".item-picture[data-v-30c716bf]{width:18%;min-height:80px;min-width:140px;margin-right:3%}.uc-item[data-v-30c716bf]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.uc-description[data-v-30c716bf]{width:85%;text-align:start;padding-left:10px}.tags[data-v-30c716bf]{width:20%;padding:10px 0;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-wrap:wrap;flex-wrap:wrap}.model-item[data-v-30c716bf],.tags[data-v-30c716bf]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}","",{version:3,sources:["/./src/components/smallcircuitinsilicoexperiments/model-item.vue"],names:[],mappings:"AACA,+BACG,UAAW,AACX,gBAAiB,AACjB,gBAAiB,AACjB,eAAiB,CACnB,AACD,0BACG,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CAC1B,AACD,iCACG,UAAW,AACX,iBAAkB,AAClB,iBAAmB,CACrB,AACD,uBACG,UAAW,AACX,eAAkB,AAKlB,yBAA0B,AACtB,6BAA8B,AAClC,mBAAoB,AAChB,cAAgB,CACtB,AACD,oDATG,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CAW1B",file:"model-item.vue",sourcesContent:["\n.item-picture[data-v-30c716bf] {\n   width: 18%;\n   min-height: 80px;\n   min-width: 140px;\n   margin-right: 3%;\n}\n.uc-item[data-v-30c716bf] {\n   display: -ms-flexbox;\n   display: flex;\n   -ms-flex-align: center;\n       align-items: center;\n}\n.uc-description[data-v-30c716bf] {\n   width: 85%;\n   text-align: start;\n   padding-left: 10px;\n}\n.tags[data-v-30c716bf] {\n   width: 20%;\n   padding: 10px 0px;\n   display: -ms-flexbox;\n   display: flex;\n   -ms-flex-align: center;\n       align-items: center;\n   -ms-flex-pack: distribute;\n       justify-content: space-around;\n   -ms-flex-wrap: wrap;\n       flex-wrap: wrap;\n}\n.model-item[data-v-30c716bf] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n"],sourceRoot:"webpack://"}])},235:function(e,t,a){var n=a(219);"string"==typeof n&&(n=[[e.id,n,""]]);a(18)(n,{});n.locals&&(e.exports=n.locals)},242:function(e,t,a){var n=a(225);"string"==typeof n&&(n=[[e.id,n,""]]);a(18)(n,{});n.locals&&(e.exports=n.locals)},271:function(e,t,a){a(235);var n=a(16)(a(170),a(277),"data-v-07eaa885",null);e.exports=n.exports},272:function(e,t,a){a(242);var n=a(16)(a(171),a(283),"data-v-30c716bf",null);e.exports=n.exports},277:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"model-container"},[a("div",{staticClass:"title"},[e._v("Please select a model")]),e._v(" "),e._l(e.models,function(t){return a("div",{class:{"disabled-container":t.disabled},on:{click:function(a){e.selected(t)}}},[t.disabled?a("div",{staticClass:"disabled-tag"},[e._v("Coming Soon")]):e._e(),e._v(" "),a("md-whiteframe",{class:{"item-sections":!0,"disabled-item":t.disabled},attrs:{"md-elevation":"2"}},[a("model-item",{attrs:{model:t}})],1)],1)})],2)},staticRenderFns:[]}},283:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"model-item"},[a("div",{staticClass:"item-picture"},[a("img",{attrs:{src:e.model.img,alt:""}})]),e._v(" "),a("uc-description",{staticClass:"uc-description",attrs:{uc:e.uc}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.193b66c2a7e65f4c6d19.js.map