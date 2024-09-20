(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),c=(a(83),a(20)),o=function(e,t,a,n,r){return{type:"SEND_CARD",toWhichDeckControl:e,toWhichCardSection:t,card:a,fromWhichDeckControl:n,fromWhichCardSection:r}},d=function(e){return{type:"OPEN_ENLARGED_CARD_MODAL",cardImgUrl:e}},s=function(e){return e.main.cards},u=function(e){return e.side.cards},h=function(e){return e.extra.cards},m=function(e){return{main:s(e.deckControls.trunk),side:u(e.deckControls.trunk),extra:h(e.deckControls.trunk)}},C=function(e){return{main:s(e.deckControls.deck),side:u(e.deckControls.deck),extra:h(e.deckControls.deck)}},k=a(139),p=a(14),f=a.n(p),E=a(9),w=a.n(E),g=a(73),S=a.n(g),D=a(140),x=a(29),T=a.n(x),y=a(68),b=a.n(y),H=a(7),O=a.n(H),W=function(e){return r.a.createElement(T.a,null,r.a.createElement(O.a,{bg:"dark",text:"white"},r.a.createElement(O.a.Header,{className:"text-center"},r.a.createElement(b.a,{src:"https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg",fluid:!0})),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,"Yugioh Deck Builder App"),"Build a deck and do test draws!",r.a.createElement("div",{style:{marginTop:"6px"},className:"text-right"},r.a.createElement(D.a,{variant:"primary",onClick:e.clickedTestHand},"Test Hand")),r.a.createElement("hr",{style:{backgroundColor:"white"}}),r.a.createElement("h6",null,"Instructions"),r.a.createElement("ul",{style:{padding:"0"}},r.a.createElement("li",null,"You can search for any card on the far right panel and add it to your deck or trunk."),r.a.createElement("li",null,"Your trunk is where you can keep cards you're interested in putting in your deck, for later."),r.a.createElement("li",null,"Click a card name to view its info.")))))},v=function(e){return e.cardData?r.a.createElement(O.a,{style:{width:"100%",height:"100%",maxHeight:"450px"}},r.a.createElement(O.a.Img,{style:{cursor:"pointer"},onClick:function(){return e.onCardImgClick(e.cardData.card_images[0].image_url)},variant:"top",src:e.cardData.card_images[0].image_url}),r.a.createElement(O.a.Body,{style:{padding:"5px",position:"relative"}},r.a.createElement("div",{style:{overflowY:"auto",height:"46px"}},r.a.createElement("h6",{className:"text-center"},e.cardData.name)),r.a.createElement("div",null,r.a.createElement("i",null,"Description:")),r.a.createElement("div",{style:{overflowY:"auto",height:"88px"}},r.a.createElement("p",{style:{fontSize:"10px"}},e.cardData.desc)),r.a.createElement("div",{style:{fontSize:"14px",position:"absolute",bottom:"2px",maxHeight:"63px",overflowY:"auto"}},e.cardData.atk?r.a.createElement("span",null," ",r.a.createElement("strong",null,"ATK:")," "," "+e.cardData.atk," "):null,e.cardData.def?r.a.createElement("span",null," ",r.a.createElement("strong",null,"DEF:")," "," "+e.cardData.def," "):null,e.cardData.race?r.a.createElement("span",null," ",r.a.createElement("strong",null," ",e.cardData.race+" "+e.cardData.type," ")," "):null))):null},I=a(69),M=a.n(I),A=function(e){return r.a.createElement(M.a.Control,{style:e.style,size:"sm",onChange:function(t){return e.onFilter(e.inWhichDeckControl,e.inWhichCardsSection,t.target.value)},type:"text",placeholder:"Search",className:"mr-sm-2"})},_=a(12),N=a.n(_),V=function(e){return r.a.createElement(N.a,{onClick:function(){return e.onSortButtonClicked(e.inWhichDeckControl,e.inWhichCardsSection)},block:!0,size:"sm",style:e.style,variant:"light"},"Sort")},L=function(e){return r.a.createElement(N.a,{onClick:function(){return e.onClearButtonClicked(e.inWhichDeckControl,e.inWhichCardsSection)},size:"sm",style:e.style,variant:"danger"},"Clear")},j=a(42),F=a.n(j),P={Main:"primary",Side:"success",Extra:"secondary"},B=r.a.memo(function(e){for(var t=[],a=0,n=e.totalCardsShownLimit?e.totalCardsShownLimit:1/0,l=function(){var n=e.cards[a],l=a;if(n.name.toLowerCase().includes(e.searchFilterValue.toLowerCase())){var i=r.a.createElement(F.a.Item,{as:"button",onClick:function(){return e.onCardClick(n,l)},variant:"light",key:n.id+l,style:{padding:"4px"},action:!0},n.name);t.push(i)}a++};t.length<n&&a<e.cards.length;)l();return r.a.createElement(O.a,{style:e.style,bg:P[e.type],text:"white"},r.a.createElement(O.a.Header,{style:{fontSize:"15px"}},r.a.createElement(f.a,null,r.a.createElement(w.a,{xs:e.isClearable?5:12},e.type+" Deck Cards: "+t.length),e.isSearchable&&r.a.createElement(w.a,{xs:3},r.a.createElement(A,{inWhichDeckControl:e.inWhichDeckControl,inWhichCardsSection:e.type.toLowerCase(),onFilter:e.filterCardsInSectionHandler})),e.isSortable&&r.a.createElement(w.a,{xs:2},r.a.createElement(V,{inWhichDeckControl:e.inWhichDeckControl,inWhichCardsSection:e.type.toLowerCase(),onSortButtonClicked:e.sortCardsInSectionHandler})),e.isClearable&&r.a.createElement(w.a,{xs:2},r.a.createElement(L,{inWhichDeckControl:e.inWhichDeckControl,inWhichCardsSection:e.type.toLowerCase(),onClearButtonClicked:e.clearWarningModalOpenHandler})))),r.a.createElement(O.a.Body,{style:{padding:"10px",overflow:"scroll"}},r.a.createElement(F.a,null,t)))}),R=function(e){return r.a.createElement(N.a,{onClick:e.cardActionData.actionHandler,style:{minHeight:"44%",margin:"3px",width:"45%",fontSize:"10px"},variant:"Delete"===e.cardActionData.text?"danger":"dark"},e.cardActionData.text)},G=function(e){return r.a.createElement("div",{style:{width:"100%",height:"100px"}},e.cardActions.map(function(e){return r.a.createElement(R,{key:e.text,cardActionData:e})}))},U=["Synchro Monster","Fusion Monster","XYZ Monster","Link Monster"],J=r.a.memo(function(e){var t,a,l,i,c=Object(n.useCallback)(function(t,a){e.cardClicked(e.title.toLowerCase(),t,a,"main")}),o=Object(n.useCallback)(function(t,a){e.cardClicked(e.title.toLowerCase(),t,a,"side")}),d=Object(n.useCallback)(function(t,a){e.cardClicked(e.title.toLowerCase(),t,a,"extra")});return r.a.createElement(O.a,{border:"success",style:{width:"100%",height:"660px",marginTop:"10px"}},r.a.createElement(O.a.Header,null,e.title),r.a.createElement(O.a.Body,null,r.a.createElement(f.a,{style:{height:"575px"}},r.a.createElement(w.a,{style:{height:"100%"},xs:9},r.a.createElement(B,{inWhichDeckControl:e.title.toLowerCase(),cards:e.fullDeckData.main.cards,onCardClick:c,isSortable:!0,sortCardsInSectionHandler:e.sortCardsInSectionHandler,isSearchable:!0,filterCardsInSectionHandler:e.filterCardsInSectionHandler,searchFilterValue:e.fullDeckData.main.searchFilterValue,isClearable:!0,clearWarningModalOpenHandler:e.clearWarningModalOpenHandler,style:{width:"100%",height:"37%",marginTop:"2%"},type:"Main"}),r.a.createElement(B,{inWhichDeckControl:e.title.toLowerCase(),cards:e.fullDeckData.side.cards,onCardClick:o,isSortable:!0,sortCardsInSectionHandler:e.sortCardsInSectionHandler,isSearchable:!0,filterCardsInSectionHandler:e.filterCardsInSectionHandler,searchFilterValue:e.fullDeckData.side.searchFilterValue,isClearable:!0,clearWarningModalOpenHandler:e.clearWarningModalOpenHandler,style:{width:"100%",height:"27%",marginTop:"2%"},type:"Side"}),r.a.createElement(B,{inWhichDeckControl:e.title.toLowerCase(),cards:e.fullDeckData.extra.cards,onCardClick:d,isSortable:!0,sortCardsInSectionHandler:e.sortCardsInSectionHandler,isSearchable:!0,filterCardsInSectionHandler:e.filterCardsInSectionHandler,searchFilterValue:e.fullDeckData.extra.searchFilterValue,isClearable:!0,clearWarningModalOpenHandler:e.clearWarningModalOpenHandler,style:{width:"100%",height:"27%",marginTop:"2%"},type:"Extra"})),r.a.createElement(w.a,{style:{height:"100%"},xs:3},r.a.createElement(v,{onCardImgClick:e.enlargedCardModalOpenHandler,cardData:e.fullDeckData.currentViewedCard}),r.a.createElement(G,{cardActions:e.fullDeckData.inWhichCardSectionCurrentCardViewedIs?(t=e.title.toLowerCase(),a=e.fullDeckData.inWhichCardSectionCurrentCardViewedIs,l=e.sendToHandler,i=e.fullDeckData.currentViewedCard,"deck"===t?"main"===a?[{text:"To Side Deck",actionHandler:function(){return l("deck","side",i,"deck","main")}},{text:"To Main Trunk",actionHandler:function(){return l("trunk","main",i,"deck","main")}},{text:"To Side Trunk",actionHandler:function(){return l("trunk","side",i,"deck","main")}},{text:"Delete",actionHandler:function(){return l(null,null,i,"deck","main")}}]:"side"===a?[U.includes(i.type)?{text:"To Extra Deck",actionHandler:function(){return l("deck","extra",i,"deck","side")}}:{text:"To Main Deck",actionHandler:function(){return l("deck","main",i,"deck","side")}},U.includes(i.type)?{text:"To Extra Trunk",actionHandler:function(){return l("trunk","main",i,"deck","side")}}:{text:"To Main Trunk",actionHandler:function(){return l("trunk","main",i,"deck","side")}},{text:"To Side Trunk",actionHandler:function(){return l("trunk","side",i,"deck","side")}},{text:"Delete",actionHandler:function(){return l(null,null,i,"deck","side")}}]:[{text:"To Side Deck",actionHandler:function(){return l("deck","side",i,"deck","extra")}},{text:"To Extra Trunk",actionHandler:function(){return l("trunk","extra",i,"deck","extra")}},{text:"To Side Trunk",actionHandler:function(){return l("trunk","side",i,"deck","extra")}},{text:"Delete",actionHandler:function(){return l(null,null,i,"deck","extra")}}]:"main"===a?[{text:"To Side Trunk",actionHandler:function(){return l("trunk","side",i,"trunk","main")}},{text:"To Main Deck",actionHandler:function(){return l("deck","main",i,"trunk","main")}},{text:"To Side Deck",actionHandler:function(){return l("deck","side",i,"trunk","main")}},{text:"Delete",actionHandler:function(){return l(null,null,i,"trunk","main")}}]:"side"===a?[U.includes(i.type)?{text:"To Extra Trunk",actionHandler:function(){return l("trunk","extra",i,"trunk","side")}}:{text:"To Main Trunk",actionHandler:function(){return l("trunk","main",i,"trunk","side")}},U.includes(i.type)?{text:"To Extra Deck",actionHandler:function(){return l("deck","main",i,"trunk","side")}}:{text:"To Main Deck",actionHandler:function(){return l("deck","main",i,"trunk","side")}},{text:"To Side Deck",actionHandler:function(){return l("deck","side",i,"trunk","side")}},{text:"Delete",actionHandler:function(){return l(null,null,i,"trunk","side")}}]:[{text:"To Side Trunk",actionHandler:function(){return l("trunk","side",i,"trunk","extra")}},{text:"To Extra Deck",actionHandler:function(){return l("deck","extra",i,"trunk","extra")}},{text:"To Side Deck",actionHandler:function(){return l("deck","side",i,"trunk","extra")}},{text:"Delete",actionHandler:function(){return l(null,null,i,"trunk","extra")}}]):[]})))))}),Y={cardClicked:function(e,t,a,n){return{type:"SELECT_CARD",inWhichDeckControl:e,inWhichCardSection:n,card:t,cardIndex:a}},sortCardsInSectionHandler:function(e,t){return{type:"SORT_SECTION",inWhichDeckControl:e,inWhichCardSection:t}},filterCardsInSectionHandler:function(e,t,a){return{type:"FILTER_SECTION",inWhichDeckControl:e,inWhichCardSection:t,searchFilterValue:a}},clearWarningModalOpenHandler:function(e,t){return{type:"OPEN_CLEAR_WARNING_MODAL",inWhichDeckControl:e,inWhichCardSection:t}},enlargedCardModalOpenHandler:d,sendToHandler:o},z=Object(c.b)(function(e,t){return{fullDeckData:e.deckControls[t.title.toLowerCase()]}},Y)(J),K=a(70),q=a(71),X=a(75),Z=a(72),$=a(76),Q={id:"10000020",name:"Slifer the Sky Dragon",desc:"Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the Graveyard. This card gains 1000 ATK and DEF for each card in your hand. If a monster(s) is Normal or Special Summoned to your opponent's field in face-up Attack Position: That monster(s) loses 2000 ATK, then if its ATK has been reduced to 0 as a result, destroy it.",atk:"0",def:"0",type:"Effect Monster",level:"10",race:"Divine-Beast",attribute:"DIVINE",scale:null,linkval:null,linkmarkers:null,archetype:null,set_tag:"MVP1-EN057,CT13-EN001,LDK2-ENS01,MVP1-ENG57,BP02-EN127,PGLD-EN032,JMPS-EN005,JUMP-EN061,",setcode:"Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack,2016 Mega-Tins,Legendary Decks II,Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack: Gold Edition,Battle Pack 2: War of the Giants,Premium Gold,WSJ Jump Pack Fall 2017 promotional card,Weekly Shonen Jump Alpha July 2012 membership promotional card,",ban_tcg:null,ban_ocg:null,ban_goat:null,card_images:[{image_url:"https://ygoprodeck.com/pics/10000020.jpg"}]},ee=["Synchro Monster","Fusion Monster","XYZ Monster","Link Monster"],te=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(X.a)(this,Object(Z.a)(t).call(this,e))).handleCardClick=function(e,t){a.setState({currentViewedCard:e,inWhichCardSectionCurrentCardViewedIs:t})},a.handleMainCardClick=function(e){a.handleCardClick(e,"main")},a.handleExtraCardClick=function(e){a.handleCardClick(e,"extra")},a.handleFilter=function(e,t,n){a.setState({searchFilterValue:n})},a.showingSomeOfAllCardsTitle=function(e){return"Showing "+e+" of "+(a.state.main.length+a.state.extra.length)+" total cards."},a.state={main:[],extra:[],currentViewedCard:Q,searchFilterValue:"",inWhichCardSectionCurrentCardViewedIs:null},a}return Object($.a)(t,e),Object(q.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php").then(function(e){return e.json()}).then(function(t){var a=t.data,n=[],r=[];a.forEach(function(e){ee.includes(e.type)?r.push(e):n.push(e)}),e.setState({main:n,extra:r})})}},{key:"render",value:function(){var e,t=this;return e=ee.includes(this.state.currentViewedCard.type)?[{text:"To Extra Deck",actionHandler:function(){return t.props.sendToHandler("deck","extra",t.state.currentViewedCard)}},{text:"To Extra Trunk",actionHandler:function(){return t.props.sendToHandler("trunk","extra",t.state.currentViewedCard)}},{text:"To Side Deck",actionHandler:function(){return t.props.sendToHandler("deck","side",t.state.currentViewedCard)}},{text:"To Side Trunk",actionHandler:function(){return t.props.sendToHandler("trunk","side",t.state.currentViewedCard)}}]:[{text:"To Main Deck",actionHandler:function(){return t.props.sendToHandler("deck","main",t.state.currentViewedCard)}},{text:"To Main Trunk",actionHandler:function(){return t.props.sendToHandler("trunk","main",t.state.currentViewedCard)}},{text:"To Side Deck",actionHandler:function(){return t.props.sendToHandler("deck","side",t.state.currentViewedCard)}},{text:"To Side Trunk",actionHandler:function(){return t.props.sendToHandler("trunk","side",t.state.currentViewedCard)}}],r.a.createElement(O.a,{border:"warning",style:{width:"360px",height:"850px",position:"absolute",top:"20px",left:"970px"}},r.a.createElement(O.a.Header,null,"Search All Cards"),r.a.createElement(O.a.Body,{style:{padding:"9px"}},r.a.createElement(f.a,{style:{height:"110px",marginTop:"10px"}},r.a.createElement(w.a,{xs:6},r.a.createElement(A,{onFilter:this.handleFilter})),r.a.createElement(w.a,{xs:6},r.a.createElement(G,{cardActions:e}))),r.a.createElement(f.a,{style:{height:"450px"}},r.a.createElement(w.a,{style:{height:"100%"},xs:6},r.a.createElement(B,{totalCardsShownLimit:150,searchFilterValue:this.state.searchFilterValue,onCardClick:this.handleMainCardClick,cards:this.state.main,style:{width:"100%",height:"100%"},type:"Main",title:this.showingSomeOfAllCardsTitle})),r.a.createElement(w.a,{style:{height:"100%"},xs:6},r.a.createElement(v,{onCardImgClick:this.props.enlargedCardModalOpenHandler,cardData:this.state.currentViewedCard}))),r.a.createElement(f.a,null,r.a.createElement(w.a,null,r.a.createElement(B,{totalCardsShownLimit:150,searchFilterValue:this.state.searchFilterValue,onCardClick:this.handleExtraCardClick,cards:this.state.extra,style:{width:"100%",height:"200px",marginTop:"10px"},type:"Extra",title:this.showingSomeOfAllCardsTitle})))))}}]),t}(r.a.PureComponent),ae={enlargedCardModalOpenHandler:d,sendToHandler:o},ne=Object(c.b)(null,ae)(te),re=function(e){return e.map(function(e){return e.id})},le=function(e){return{main:re(e.main),side:re(e.side),extra:re(e.extra)}},ie=function(e){var t={deck:le(e.deck),trunk:le(e.trunk)};return r.a.createElement(T.a,null,r.a.createElement(O.a,{bg:"warning",text:"white"},r.a.createElement(O.a.Header,null,"Credits And Actions"),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,"Made with ReactJS"),r.a.createElement(N.a,{variant:"dark",block:!0,href:"https://github.com/AiyazN25/ygo-deckbuilder/tree/master"},"Source Code"),"Upload and download your deck+trunk data.",r.a.createElement(N.a,{as:"a",href:"data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(t)),download:"DeckAndTrunkData.txt",variant:"success",block:!0},"Download Data"),r.a.createElement("input",{style:{display:"inline-block",width:"100%",marginTop:"8px"},type:"file",onChange:e.onDataUpload,accept:".txt"}))))},ce=a(10),oe=a.n(ce),de=function(e){return r.a.createElement(oe.a,{show:e.show,onHide:e.onHide,size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(oe.a.Header,{closeButton:!0},r.a.createElement(oe.a.Title,{id:"contained-modal-title-vcenter"},"Confirm Clear")),r.a.createElement(oe.a.Body,null,r.a.createElement("p",null,"Are you sure you want to delete all cards from this section?")),r.a.createElement(oe.a.Footer,null,r.a.createElement(N.a,{variant:"secondary",onClick:e.onHide},"Cancel"),r.a.createElement(N.a,{variant:"danger",onClick:e.onClearButtonClick},"Clear")))},se=r.a.memo(function(e){for(var t=[],a=Math.min(e.cards.length,e.numCardsToShow),n=0;n<a;n++){var l=e.cards[n];t.push(r.a.createElement("img",{style:{width:"150px",margin:"10px"},key:n,alt:"card",src:l.card_images[0].image_url}))}return r.a.createElement(oe.a,{show:e.show,onHide:e.onHide,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(oe.a.Header,{closeButton:!0},r.a.createElement(oe.a.Title,{id:"contained-modal-title-vcenter"},"Sample Hand")),r.a.createElement(oe.a.Body,null,r.a.createElement("p",null,t)),r.a.createElement(oe.a.Footer,null,r.a.createElement(N.a,{variant:"secondary",onClick:e.onHide},"Close"),r.a.createElement(N.a,{onClick:e.onDraw,variant:"primary"},"Draw")))}),ue=function(e){return r.a.createElement(oe.a,{show:e.show,onHide:e.onHide,"aria-labelledby":"enlarged-card-modal"},r.a.createElement(oe.a.Header,{closeButton:!0},r.a.createElement(oe.a.Title,{id:"example-modal-sizes-title-lg"},"Enlarged Card")),r.a.createElement(oe.a.Body,null,r.a.createElement("img",{src:e.cardImg,alt:"cardImg",style:{width:"400px",display:"block",margin:"auto"}})))},he=(a(137),{drawCard:function(){return{type:"DRAW_CARD"}},closeTestHandModal:function(){return{type:"CLOSE_TESTHAND_MODAL"}},openTestHandModal:function(e){return{type:"OPEN_TESTHAND_MODAL",cards:e}},fetchAllCardsAndUploadData:function(e){return function(t){e.persist(),fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php").then(function(e){return e.json()}).then(function(a){var n=a.data,r=e.target.files[0],l=new FileReader;l.onload=function(e){t(function(e,t,a){return{type:"UPLOAD_DATA",allCards:e,e:t,uploadedFile:a}}(n,e,r))},r&&l.readAsText(r)})}},clearCards:function(){return{type:"CLEAR_SECTION"}},closeEnlargedCardModal:function(){return{type:"CLOSE_ENLARGED_CARD_MODAL"}},closeClearWarningModal:function(){return{type:"CLOSE_CLEAR_WARNING_MODAL"}},hideUploadFailAlert:function(){return{type:"HIDE_UPLOAD_FAIL_ALERT"}}}),me=Object(c.b)(function(e){var t=function(e){return{trunk:m(e),deck:C(e)}}(e),a=t.trunk,n=t.deck,r=function(e){return e.deckControls.whatWillBeCleared}(e),l=function(e){return e.deckControls.showClearWarningModal}(e),i=function(e){return e.sampleHand}(e),c=i.showTestHandModal,o=i.numCardsToShowInTestHand,d=i.sampleHand,s=function(e){return e.deckControls.showUploadFailAlert}(e),u=function(e){return e.enlargedCard}(e);return{trunk:a,deck:n,whatWillBeCleared:r,showClearWarningModal:l,showTestHandModal:c,numCardsToShowInTestHand:o,sampleHand:d,showUploadFailAlert:s,showEnlargedCardModal:u.showEnlargedCardModal,enlargedCardToShow:u.enlargedCardToShow}},he)(function(e){var t=Object(n.useCallback)(function(){e.openTestHandModal(e.deck.main)});return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{style:{width:"960px",display:"inline-block"}},r.a.createElement(f.a,null,r.a.createElement(w.a,{xs:3},r.a.createElement(W,{clickedTestHand:t})),r.a.createElement(w.a,{xs:9},r.a.createElement(z,{title:"Deck"}))),r.a.createElement(f.a,null,r.a.createElement(w.a,{xs:3},r.a.createElement(ie,{deck:e.deck,trunk:e.trunk,onDataUpload:e.fetchAllCardsAndUploadData}),r.a.createElement(k.a,null,r.a.createElement(S.a,{dismissible:!0,show:e.showUploadFailAlert,onClose:e.hideUploadFailAlert,variant:"danger"},"Something is wrong with the deck data you uploaded."))),r.a.createElement(w.a,{xs:9},r.a.createElement(z,{title:"Trunk"})))),r.a.createElement(ne,null),r.a.createElement(de,{show:e.showClearWarningModal,onHide:e.closeClearWarningModal,whatWillBeCleared:e.whatWillBeCleared,onClearButtonClick:e.clearCards}),r.a.createElement(se,{show:e.showTestHandModal,onHide:e.closeTestHandModal,cards:e.sampleHand,numCardsToShow:e.numCardsToShowInTestHand,onDraw:e.drawCard}),r.a.createElement(ue,{cardImg:e.enlargedCardToShow,show:e.showEnlargedCardModal,onHide:e.closeEnlargedCardModal}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=a(21),ke=a(74),pe=a(17),fe=a(13),Ee=a(4),we={trunk:{main:{cards:[],searchFilterValue:""},side:{cards:[],searchFilterValue:""},extra:{cards:[],searchFilterValue:""},currentViewedCard:{id:"10000000",name:"Obelisk the Tormentor",desc:"Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Cannot be targeted by Spells, Traps, or card effects. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the Graveyard. You can Tribute 2 monsters; destroy all monsters your opponent controls. This card cannot declare an attack the turn this effect is activated.",atk:"4000",def:"4000",type:"Effect Monster",level:"10",race:"Divine-Beast",attribute:"DIVINE",scale:null,linkval:null,linkmarkers:null,archetype:null,set_tag:"LDK2-ENS02,BP01-EN021,CT13-EN002,BP01-EN021,MVPC-EN001,MVPC-EN001,GLD4-EN030,BP02-EN125,JUMP-EN037,PGLD-EN030,JMPS-EN004,",setcode:"Legendary Decks II,Battle Pack: Epic Dawn,2016 Mega-Tins,Battle Pack: Epic Dawn,Yu-Gi-Oh! The Dark Side of Dimensions Theater distribution cards,Yu-Gi-Oh! The Dark Side of Dimensions Blu-ray & DVD promotional card,Gold Series 4: Pyramids Edition,Battle Pack 2: War of the Giants,Shonen Jump Vol. 8, Issue 1 promotional card,Premium Gold,WSJ Jump Pack Spring 2017 promotional card,",ban_tcg:null,ban_ocg:null,ban_goat:null,card_images:[{image_url:"https://ygoprodeck.com/pics/10000000.jpg"}]},inWhichCardSectionCurrentCardViewedIs:null,currentViewedCardIndex:null},deck:{main:{cards:[],searchFilterValue:""},side:{cards:[],searchFilterValue:""},extra:{cards:[],searchFilterValue:""},currentViewedCard:{id:"10000010",name:"The Winged Dragon of Ra",desc:"Cannot be Special Summoned. Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, other cards and effects cannot be activated. When this card is Normal Summoned: You can pay LP so that you only have 100 left; this card gains ATK and DEF equal to the amount of LP paid. You can pay 1000 LP, then target 1 monster on the field; destroy that target.",atk:"0",def:"0",type:"Effect Monster",level:"10",race:"Divine-Beast",attribute:"DIVINE",scale:null,linkval:null,linkmarkers:null,archetype:null,set_tag:"ORCS-ENSE2,JUMP-EN045,LDK2-ENS03,BP02-EN126,PGLD-EN031,JMPS-EN006,",setcode:"Order of Chaos: Special Edition,Shonen Jump Vol. 9, Issue 1 promotional card,Legendary Decks II,Battle Pack 2: War of the Giants,Premium Gold,WSJ Jump Pack Spring 2018 promotional card,",ban_tcg:null,ban_ocg:null,ban_goat:null,card_images:[{image_url:"https://ygoprodeck.com/pics/10000010.jpg"}]},inWhichCardSectionCurrentCardViewedIs:null,currentViewedCardIndex:null},showClearWarningModal:!1,whatWillBeCleared:{whichDeckControl:null,whichCardsSection:null},showUploadFailAlert:!1},ge={showTestHandModal:!1,numCardsToShowInTestHand:5,sampleHand:[]},Se={showEnlargedCardModal:!1,enlargedCardToShow:null},De=Object(Ce.c)({deckControls:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPLOAD_DATA":var a=t.allCards,n=t.e,r=t.uploadedFile;try{var l=JSON.parse(n.target.result);if(r.type.match(/text.*/)&&!r.type.match(/text.javascript/)){var i=Object(Ee.a)({},e),c=Object(Ee.a)({},e.trunk),o=Object(Ee.a)({},e.deck);return o.main.cards=l.deck.main.map(function(e){return a.find(function(t){return t.id===e})}),o.side.cards=l.deck.side.map(function(e){return a.find(function(t){return t.id===e})}),o.extra.cards=l.deck.extra.map(function(e){return a.find(function(t){return t.id===e})}),c.main.cards=l.trunk.main.map(function(e){return a.find(function(t){return t.id===e})}),c.side.cards=l.trunk.side.map(function(e){return a.find(function(t){return t.id===e})}),c.extra.cards=l.trunk.extra.map(function(e){return a.find(function(t){return t.id===e})}),i.deck=o,i.trunk=c,i}throw new Error("Invalid file format uploaded")}catch(Y){return console.log(Y),Object(Ee.a)({},e,{showUploadFailAlert:!0})}case"OPEN_CLEAR_WARNING_MODAL":return Object(Ee.a)({},e,{showClearWarningModal:!0,whatWillBeCleared:{whichDeckControl:t.inWhichDeckControl,whichCardsSection:t.inWhichCardSection}});case"CLEAR_SECTION":var d,s=e.whatWillBeCleared.whichDeckControl,u=e.whatWillBeCleared.whichCardsSection,h=Object(Ee.a)({},e[s]);return h[u].cards=[],h.inWhichCardSectionCurrentCardViewedIs===u&&(h.currentViewedCard=null,h.inWhichCardSectionCurrentCardViewedIs=null,h.currentViewedCardIndex=null),Object(Ee.a)({},e,(d={},Object(fe.a)(d,s,h),Object(fe.a)(d,"showClearWarningModal",!1),d));case"SORT_SECTION":var m=t.inWhichDeckControl,C=t.inWhichCardSection,k=Object(Ee.a)({},e[m]),p=Object(pe.a)(e[m][C].cards);return p.sort(function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}),k[C].cards=p,k.inWhichCardSectionCurrentCardViewedIs===C&&(k.currentViewedCard=null,k.inWhichCardSectionCurrentCardViewedIs=null,k.currentViewedCardIndex=null),Object(Ee.a)({},e,Object(fe.a)({},m,k));case"FILTER_SECTION":var f=t.inWhichDeckControl,E=t.inWhichCardSection,w=t.searchFilterValue,g=Object(Ee.a)({},e[f]);return g[E].searchFilterValue=w,Object(Ee.a)({},e,Object(fe.a)({},f,g));case"SEND_CARD":var S=t.toWhichDeckControl,D=t.toWhichCardSection,x=t.card,T=t.fromWhichDeckControl,y=t.fromWhichCardSection;if(T){if(null===S&&null===D){var b=Object(Ee.a)({},e[T]),H=Object(pe.a)(e[T][y].cards),O=b.currentViewedCardIndex;return H.splice(O,1),b[y].cards=H,b.currentViewedCard=null,b.inWhichCardSectionCurrentCardViewedIs=null,b.currentViewedCardIndex=null,Object(Ee.a)({},e,Object(fe.a)({},T,b))}if(S!==T){var W,v=Object(Ee.a)({},e[S]),I=Object(pe.a)(e[S][D].cards);I.push(x),v[D].cards=I;var M=Object(Ee.a)({},e[T]),A=Object(pe.a)(e[T][y].cards),_=M.currentViewedCardIndex;return A.splice(_,1),M[y].cards=A,M.currentViewedCard=null,M.inWhichCardSectionCurrentCardViewedIs=null,M.currentViewedCardIndex=null,Object(Ee.a)({},e,(W={},Object(fe.a)(W,S,v),Object(fe.a)(W,T,M),W))}if(S===T){var N=Object(Ee.a)({},e[S]),V=Object(pe.a)(e[S][D].cards);V.push(x),N[D].cards=V;var L=Object(pe.a)(e[T][y].cards),j=N.currentViewedCardIndex;return L.splice(j,1),N[y].cards=L,N.currentViewedCard=null,N.inWhichCardSectionCurrentCardViewedIs=null,N.currentViewedCardIndex=null,Object(Ee.a)({},e,Object(fe.a)({},S,N))}return e}var F=Object(Ee.a)({},e[S]),P=Object(pe.a)(e[S][D].cards);return P.push(x),F[D].cards=P,Object(Ee.a)({},e,Object(fe.a)({},S,F));case"SELECT_CARD":var B=t.inWhichDeckControl,R=t.inWhichCardSection,G=t.card,U=t.cardIndex,J=Object(Ee.a)({},e[B]);return J.currentViewedCardIndex=U,J.currentViewedCard=G,J.inWhichCardSectionCurrentCardViewedIs=R,Object(Ee.a)({},e,Object(fe.a)({},B,J));case"CLOSE_CLEAR_WARNING_MODAL":return Object(Ee.a)({},e,{showClearWarningModal:!1,whatWillBeCleared:{whichDeckControl:null,whichCardsSection:null}});case"HIDE_UPLOAD_FAIL_ALERT":return Object(Ee.a)({},e,{showUploadFailAlert:!1});default:return e}},sampleHand:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DRAW_CARD":return Object(Ee.a)({},e,{numCardsToShowInTestHand:e.numCardsToShowInTestHand+1});case"CLOSE_TESTHAND_MODAL":return Object(Ee.a)({},e,{showTestHandModal:!1});case"OPEN_TESTHAND_MODAL":return Object(Ee.a)({},e,{showTestHandModal:!0,numCardsToShowInTestHand:5,sampleHand:Object(pe.a)(t.cards).sort(function(){return.5-Math.random()})});default:return e}},enlargedCard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_ENLARGED_CARD_MODAL":return Object(Ee.a)({},e,{showEnlargedCardModal:!0,enlargedCardToShow:t.cardImgUrl});case"CLOSE_ENLARGED_CARD_MODAL":return Object(Ee.a)({},e,{showEnlargedCardModal:!1});default:return e}}}),xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ce.d,Te=Object(Ce.e)(De,xe(Object(Ce.a)(ke.a)));i.a.render(r.a.createElement(c.a,{store:Te}," ",r.a.createElement(me,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,a){e.exports=a(138)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.3deaaa53.chunk.js.map