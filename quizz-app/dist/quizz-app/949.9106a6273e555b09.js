"use strict";(self.webpackChunkquizz_app=self.webpackChunkquizz_app||[]).push([[949],{2949:(Ht,z,c)=>{c.r(z),c.d(z,{AdminModule:()=>Et});var d=c(6895),p=c(6159),u=c(7155),h=c(727),t=c(4650),_=c(5412),A=c(7579);let w=(()=>{class i{constructor(){this.confirmation$=new A.x}setConfirmation(e){this.confirmation$.next(e)}getConfirmation(){return this.confirmation$.asObservable()}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var b=c(9101);let q=(()=>{class i{constructor(e,n){this.dialogRef=e,this._dialogService=n}onHandleClickConfirmation(e){this._dialogService.setConfirmation(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(_.so),t.Y36(w))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dialog"]],decls:9,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","",3,"click"],["mat-button","","mat-dialog-close","","cdkFocusInitial","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Delete Item"),t.qZA(),t.TgZ(2,"div",1),t._uU(3," Would you like to delete this item?\n"),t.qZA(),t.TgZ(4,"div",2)(5,"button",3),t.NdJ("click",function(){return n.onHandleClickConfirmation(!1)}),t._uU(6,"No"),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return n.onHandleClickConfirmation(!0)}),t._uU(8,"Yes"),t.qZA()())},dependencies:[b.lW,_.ZT,_.uh,_.xY,_.H8],styles:["button[_ngcontent-%COMP%]{margin-right:8px}"]}),i})();var N=c(7407),Z=c(6481);let g=(()=>{class i{constructor(e,n,s){this._fireStore=e,this._notificationService=n,this._router=s,this.uid="",this.titleQuizz="",this.descriptionQuizz="",this.numberQuestions=0,this.question$=new A.x}showError(){this._notificationService.showError("Please, complete all the fields","ERROR")}addQuestion(e){this.question$.next(e),this._notificationService.showInfo("","Added Question!")}getAddedQuestion(){return this.question$.asObservable()}createQuestionnaire(e){return this._fireStore.collection("questionnaires").add(e)}getQuestionnairesByIdUser(e){return this._fireStore.collection("questionnaires",n=>n.where("uid","==",e)).snapshotChanges()}getQuestionnaireById(e){return this._fireStore.collection("questionnaires").doc(e).get()}deleteQuestionnaire(e){return this._fireStore.collection("questionnaires").doc(e).delete()}getAnswerByIdQuestionnaire(e){return this._fireStore.collection("answers",n=>n.where("idQuestionnaire","==",e)).snapshotChanges()}deleteUserAnswer(e){return this._fireStore.collection("answers").doc(e).delete()}createQuizz(){this.validateData()?(this.setDataQuizz(),this.createQuestionnaire(this.questionnaire).then(()=>{this._notificationService.showSuccess("Quizz has been created","Success!"),this._router.navigate(["/admin"])}).catch(e=>{console.log(e),this._notificationService.showError("An error has occurred. It was not possible to save the quizz.","Ups!")}),console.log(this.questionnaire)):this._notificationService.showError("You must complete all the required fields","Incomplete Data")}showSuccessNotification(){this._notificationService.showInfo("","Saved")}generateCode(e){return((i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((o,e)=>o+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),""))(e).toUpperCase()}validateData(){return""!==this.uid&&""!==this.titleQuizz&&""!==this.descriptionQuizz&&0!==this.numberQuestions&&this.listQuestions.length>0}setDataQuizz(){this.questionnaire={uid:this.uid,title:this.titleQuizz,description:this.descriptionQuizz,numberQuestions:this.numberQuestions,listQuestions:this.listQuestions,code:this.generateCode(6),createDate:new Date}}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(N.ST),t.LFG(Z.g),t.LFG(p.F0))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var I=c(3824),C=c(430),S=c(266),T=c(4984),m=c(3546);let O=(()=>{class i{constructor(){this.title="",this.description=""}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-empty-msg"]],inputs:{title:"title",description:"description"},decls:6,vars:2,consts:[[1,"d-flex","justify-content-center","animate__animated","animate__fadeInLeft"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(n.title),t.xp6(2),t.Oqu(n.description))},dependencies:[m.a8,m.dk,m.n5,m.$j]}),i})();function Y(i,o){1&i&&(t.TgZ(0,"div",4),t._UZ(1,"app-spinner"),t.qZA())}function J(i,o){if(1&i&&t._UZ(0,"app-empty-msg",5),2&i){const e=t.oxw(2);t.Q6J("title",e.titleEmptyMsg)}}function L(i,o){if(1&i&&(t.TgZ(0,"th",16),t._uU(1),t.qZA()),2&i){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e("table.title"))}}function P(i,o){if(1&i&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.title)}}function F(i,o){if(1&i&&(t.TgZ(0,"th",16),t._uU(1),t.qZA()),2&i){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e("table.numberQuestions"))}}function R(i,o){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.numberQuestions)}}function j(i,o){if(1&i&&(t.TgZ(0,"th",16),t._uU(1),t.qZA()),2&i){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e("table.code"))}}function B(i,o){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.code)}}function $(i,o){if(1&i&&(t.TgZ(0,"th",16),t._uU(1),t.qZA()),2&i){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e("table.actions"))}}const V=function(i){return["view/",i]},E=function(i){return["statistics/",i]};function H(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"td",18),t._UZ(1,"i",19,20)(3,"i",21,20),t.TgZ(5,"i",22,20),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw(3);return t.KtG(l.selectItemToDelete(a.id))}),t.qZA()()}if(2&i){const e=o.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,V,e.id)),t.xp6(2),t.Q6J("routerLink",t.VKq(4,E,e.id))}}function G(i,o){1&i&&t._UZ(0,"tr",23)}function K(i,o){1&i&&t._UZ(0,"tr",24)}function W(i,o){if(1&i&&(t.TgZ(0,"table",6),t.ynx(1,7),t.YNc(2,L,2,1,"th",8),t.YNc(3,P,2,1,"td",9),t.BQk(),t.ynx(4,10),t.YNc(5,F,2,1,"th",8),t.YNc(6,R,2,1,"td",11),t.BQk(),t.ynx(7,12),t.YNc(8,j,2,1,"th",8),t.YNc(9,B,2,1,"td",11),t.BQk(),t.ynx(10,13),t.YNc(11,$,2,1,"th",8),t.YNc(12,H,7,6,"td",11),t.BQk(),t.YNc(13,G,1,0,"tr",14),t.YNc(14,K,1,0,"tr",15),t.qZA()),2&i){const e=t.oxw(2);t.Q6J("dataSource",e.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}function X(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,Y,2,0,"div",1),t.YNc(2,J,1,1,"app-empty-msg",2),t.YNc(3,W,15,3,"table",3),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.loading),t.xp6(1),t.Q6J("ngIf",e.noResults&&!e.loading),t.xp6(1),t.Q6J("ngIf",!e.noResults&&!e.loading)}}let tt=(()=>{class i{constructor(e,n,s,a,l,f){this.dialog=e,this._quizzService=n,this._authService=s,this._notificationService=a,this._dialogService=l,this._translocoService=f,this.loading=!1,this.noResults=!0,this.idQuestionnaire="",this.showDialog=!1,this.enterAnimationDuration="0ms",this.exitAnimationDuration="0ms",this.dataSource=new u.by,this.displayedColumns=["title","numberQuestions","code","actions"],this.subscriptionQuizz=new h.w0,this.subscriptionTranslation=new h.w0,this.subscriptionConfirmation=new h.w0,this.user=this._authService.getUserFromSessionStorage()}ngOnInit(){this.getQuestionnaires(),this.subscriptionTranslation=this._translocoService.selectTranslate("listQuestionnaires.emptyMsgTitle").subscribe(e=>this.titleEmptyMsg=e),this.subscriptionConfirmation=this._dialogService.getConfirmation().subscribe(e=>{e&&(this.deleteItem(),this.getQuestionnaires())})}ngOnDestroy(){this.subscriptionQuizz.unsubscribe(),this.subscriptionTranslation.unsubscribe(),this.subscriptionConfirmation.unsubscribe()}getQuestionnaires(){let e=[];this.subscriptionQuizz=this._quizzService.getQuestionnairesByIdUser(this.user.uid).subscribe({next:n=>{this.loading=!0,n.forEach(s=>{e.push({id:s.payload.doc.id,...s.payload.doc.data()})}),this.noResults=0===e.length,this.dataSource.data=e,this.loading=!1},error:n=>{console.log(n),this._notificationService.showError("We couldn't show the questionnaires data','Error"),this.loading=!1},complete:()=>{this.loading=!1}})}openDialog(e=this.enterAnimationDuration,n=this.exitAnimationDuration){this.dialog.open(q,{width:"250px",enterAnimationDuration:e,exitAnimationDuration:n})}selectItemToDelete(e){this.idQuestionnaire=e,this.openDialog()}deleteItem(){this.loading=!0,this._quizzService.deleteQuestionnaire(this.idQuestionnaire).then(()=>{this._notificationService.showSuccess("","Questionnaire Deleted")}).catch(e=>{console.log(e),this._notificationService.showError("This questionnaire could not be deleted.","Error")}),this.loading=!1}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(_.uw),t.Y36(g),t.Y36(I.e),t.Y36(Z.g),t.Y36(w),t.Y36(C.Vn))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-questionnaire"]],decls:1,vars:0,consts:[[4,"transloco"],["class","d-flex justify-content-center",4,"ngIf"],[3,"title",4,"ngIf"],["mat-table","","class","mat-elevation-z8 demo-table",3,"dataSource",4,"ngIf"],[1,"d-flex","justify-content-center"],[3,"title"],["mat-table","",1,"mat-elevation-z8","demo-table",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","capital",4,"matCellDef"],["matColumnDef","numberQuestions"],["mat-cell","",4,"matCellDef"],["matColumnDef","code"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",1,"capital"],["mat-cell",""],["matTooltip","View Details","matTooltipPosition","above",1,"fa-solid","fa-magnifying-glass","me-3",3,"routerLink"],["tooltip","matTooltip"],["matTooltip","View Statistics","matTooltipPosition","above",1,"fa-solid","fa-chart-line","me-3",3,"routerLink"],["matTooltip","Delete Quizz","matTooltipPosition","above",1,"fa-solid","fa-trash-can",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&t.YNc(0,X,4,3,"div",0)},dependencies:[d.O5,p.rH,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,S.gM,T.O,O,C.KI],styles:[".demo-table[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]{height:100vh}.mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{border-color:currentColor}.demo-row-is-clicked[_ngcontent-%COMP%]{font-weight:700}.fa-solid[_ngcontent-%COMP%]{cursor:pointer;font-size:25px;margin:0 2px}.fa-chart-line[_ngcontent-%COMP%]{color:#008b8b}.fa-trash-can[_ngcontent-%COMP%]{color:#bb1616}.fa-plus[_ngcontent-%COMP%]{font-size:17px}.custom-tooltip[_ngcontent-%COMP%]{--bs-tooltip-bg: var(--bs-primary)}"]}),i})();var Q=c(4850);function et(i,o){1&i&&(t.TgZ(0,"div",6),t._UZ(1,"app-spinner"),t.qZA())}function it(i,o){if(1&i&&t._UZ(0,"app-empty-msg",7),2&i){const e=t.oxw(2);t.Q6J("title",e.titleEmptyMsg)}}function nt(i,o){if(1&i&&(t.TgZ(0,"th",20),t._uU(1),t.qZA()),2&i){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e("table.playerName"))}}function ot(i,o){if(1&i&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.playerName)}}function st(i,o){if(1&i&&(t.TgZ(0,"th",20),t._uU(1),t.qZA()),2&i){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e("table.date"))}}function rt(i,o){if(1&i&&(t.TgZ(0,"td",22),t._uU(1),t.ALo(2,"date"),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.date.toDate(),"dd/mm/yyyy"))}}function at(i,o){if(1&i&&(t.TgZ(0,"th",20),t._uU(1),t.qZA()),2&i){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e("table.score"))}}function ct(i,o){if(1&i&&(t.TgZ(0,"td",22),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.score)}}function lt(i,o){if(1&i&&(t.TgZ(0,"th",20),t._uU(1),t.qZA()),2&i){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e("table.actions"))}}const ut=function(i){return["/admin/quizz-result-admin/",i]};function mt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"td",22),t._UZ(1,"i",23,24),t.TgZ(3,"i",25,24),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw(3);return t.KtG(l.selectItemToDelete(a.id))}),t.qZA()()}if(2&i){const e=o.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(1,ut,e.id))}}function dt(i,o){1&i&&t._UZ(0,"tr",26)}function pt(i,o){1&i&&t._UZ(0,"tr",27)}function _t(i,o){if(1&i&&(t.TgZ(0,"mat-card",8)(1,"div",9),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t._UZ(4,"mat-divider"),t.TgZ(5,"table",10),t.ynx(6,11),t.YNc(7,nt,2,1,"th",12),t.YNc(8,ot,2,1,"td",13),t.BQk(),t.ynx(9,14),t.YNc(10,st,2,1,"th",12),t.YNc(11,rt,3,4,"td",15),t.BQk(),t.ynx(12,16),t.YNc(13,at,2,1,"th",12),t.YNc(14,ct,2,1,"td",15),t.BQk(),t.ynx(15,17),t.YNc(16,lt,2,1,"th",12),t.YNc(17,mt,5,3,"td",15),t.BQk(),t.YNc(18,dt,1,0,"tr",18),t.YNc(19,pt,1,0,"tr",19),t.qZA()()),2&i){const e=t.oxw().$implicit,n=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,4,e("title"))),t.xp6(3),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns)}}const ft=function(){return["/admin"]};function gt(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,et,2,0,"div",1),t.YNc(2,it,1,1,"app-empty-msg",2),t.YNc(3,_t,20,6,"mat-card",3),t.TgZ(4,"div",4)(5,"button",5),t._uU(6),t.ALo(7,"uppercase"),t.qZA()()()),2&i){const e=o.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.loading),t.xp6(1),t.Q6J("ngIf",n.noResults&&!n.loading),t.xp6(1),t.Q6J("ngIf",!n.noResults&&!n.loading),t.xp6(2),t.Q6J("routerLink",t.DdM(7,ft)),t.xp6(1),t.Oqu(t.lcZ(7,5,e("buttonBack")))}}let ht=(()=>{class i{constructor(e,n,s,a,l,f){this._quizzService=e,this._aRoute=n,this._notificationService=s,this.dialog=a,this._dialogService=l,this._translocoService=f,this.loading=!1,this.noResults=!1,this.idQuestionnaire="",this.showDialog=!1,this.enterAnimationDuration="0ms",this.exitAnimationDuration="0ms",this.columnNames=[],this.dataSource=new u.by,this.displayedColumns=["playerName","date","score","actions"],this.susbcriptionResults=new h.w0,this.subscriptionTranslation=new h.w0,this.subscriptionConfirmation=new h.w0,this.idQuizz=this._aRoute.snapshot.paramMap.get("id")}ngOnInit(){this.getResults(),this.subscriptionTranslation=this._translocoService.selectTranslateObject("statistics").subscribe({next:e=>{this.titleEmptyMsg=e.emptyMsgTitle,this.itemDeleted=e.itemDeleted,this.errorDeleting=e.errorDeleting},error:e=>{console.log(e)}}),this.subscriptionConfirmation=this._dialogService.getConfirmation().subscribe({next:e=>{e&&(this.deleteItem(),this.getResults())},error:e=>{console.log(e)}})}ngOnDestroy(){this.susbcriptionResults.unsubscribe(),this.subscriptionTranslation.unsubscribe(),this.subscriptionConfirmation.unsubscribe()}getResults(){this.loading=!0;let e=[];this.susbcriptionResults=this._quizzService.getAnswerByIdQuestionnaire(this.idQuizz).subscribe({next:n=>{n.forEach(s=>{e.push({id:s.payload.doc.id,...s.payload.doc.data()})}),0===e.length&&(this.noResults=!0),this.dataSource.data=e,this.loading=!1},error:n=>{console.log(n)}})}openDialog(e=this.enterAnimationDuration,n=this.exitAnimationDuration){this.dialog.open(q,{width:"250px",enterAnimationDuration:e,exitAnimationDuration:n})}selectItemToDelete(e){this.idQuestionnaire=e,this.openDialog()}deleteItem(){this.loading=!0,this._quizzService.deleteQuestionnaire(this.idQuestionnaire).then(()=>{this._notificationService.showSuccess("",this.itemDeleted)}).catch(e=>{console.log(e),this._notificationService.showError(this.errorDeleting,"Oops")}),this.loading=!1}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g),t.Y36(p.gz),t.Y36(Z.g),t.Y36(_.uw),t.Y36(w),t.Y36(C.Vn))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-statistics"]],decls:1,vars:1,consts:[[4,"transloco","translocoRead"],["class","d-flex justify-content-center",4,"ngIf"],[3,"title",4,"ngIf"],["class","animate__animated animate__fadeInLeft",4,"ngIf"],[1,"text-center","mt-5"],[1,"btn","btn-lg","btn-dark",3,"routerLink"],[1,"d-flex","justify-content-center"],[3,"title"],[1,"animate__animated","animate__fadeInLeft"],[1,"fs-2","mb-5"],["mat-table","",1,"mat-elevation-z8","demo-table",3,"dataSource"],["matColumnDef","playerName"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","capital",4,"matCellDef"],["matColumnDef","date"],["mat-cell","",4,"matCellDef"],["matColumnDef","score"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",1,"capital"],["mat-cell",""],["matTooltip","View Details","matTooltipPosition","above",1,"fa-solid","fa-magnifying-glass","me-3",3,"routerLink"],["tooltip","matTooltip"],["matTooltip","Delete Quizz","matTooltipPosition","above",1,"fa-solid","fa-trash-can",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&t.YNc(0,gt,8,8,"div",0),2&e&&t.Q6J("translocoRead","statistics")},dependencies:[d.O5,p.rH,m.a8,Q.d,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,S.gM,T.O,O,C.KI,d.gd,d.rS,d.uU],styles:[".demo-table[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]{height:100vh}.mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{border-color:currentColor}.demo-row-is-clicked[_ngcontent-%COMP%]{font-weight:700}.fa-solid[_ngcontent-%COMP%]{cursor:pointer;font-size:25px;margin:0 2px}.fa-chart-line[_ngcontent-%COMP%]{color:#008b8b}.fa-trash-can[_ngcontent-%COMP%]{color:#bb1616}.fa-plus[_ngcontent-%COMP%]{font-size:17px}.custom-tooltip[_ngcontent-%COMP%]{--bs-tooltip-bg: var(--bs-primary)}"]}),i})();var r=c(4006),v=c(6257),Ct=c(9349),x=c(9549),y=c(284);let vt=(()=>{class i{constructor(e,n){this.fb=e,this._quizzService=n,this.nextStep=new t.vpe,this.user=JSON.parse(sessionStorage.getItem("user")||"{}"),this.form=this.fb.group({title:["",r.kI.required],description:["",r.kI.required]})}addQuestionnaire(){this._quizzService.uid=this.user.uid,this._quizzService.titleQuizz=this.form.get("title")?.value,this._quizzService.descriptionQuizz=this.form.get("description")?.value,this._quizzService.showSuccessNotification(),this.nextStep.emit(!0)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.qu),t.Y36(g))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-create-questionnaire"]],outputs:{nextStep:"nextStep"},decls:13,vars:2,consts:[[3,"formGroup"],[1,"d-flex","flex-column","align-items-center"],["appearance","fill",1,"w-75"],["matInput","","formControlName","title","required","",1,"input-title"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","8","formControlName","description","required","",1,"input-description"],[1,"text-center"],["mat-flat-button","","color","accent",1,"me-3",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),t._uU(4,"Title Questionnaire"),t.qZA(),t._UZ(5,"input",3),t.qZA(),t.TgZ(6,"mat-form-field",2)(7,"mat-label"),t._uU(8,"Description Questionnaire"),t.qZA(),t._UZ(9,"textarea",4),t.qZA(),t.TgZ(10,"div",5)(11,"button",6),t.NdJ("click",function(){return n.addQuestionnaire()}),t._uU(12,"Save"),t.qZA()()()()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(11),t.Q6J("disabled",n.form.invalid))},dependencies:[b.lW,Ct.IC,x.KE,x.hX,y.Nt,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u],styles:[".input-title[_ngcontent-%COMP%], .input-description[_ngcontent-%COMP%]{font-size:18px;text-transform:capitalize}.mat-form-field[_ngcontent-%COMP%]{margin-top:16px}.notVisible[_ngcontent-%COMP%]{display:none}"]}),i})();var xt=c(7314),bt=c(1948);const wt=function(i){return{"correct-answer":i}};function Zt(i,o){if(1&i&&(t.TgZ(0,"li",14),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("ngClass",t.VKq(2,wt,!0===e.isCorrect)),t.xp6(1),t.hij(" ",e.description," ")}}function Qt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",3)(1,"mat-card",4)(2,"mat-card-title",5),t._uU(3),t.ALo(4,"titlecase"),t.qZA(),t.TgZ(5,"div",6)(6,"span",7),t._uU(7),t.qZA(),t.TgZ(8,"span",7),t._uU(9),t.qZA()(),t.TgZ(10,"mat-card-content",8)(11,"ul",9),t.YNc(12,Zt,2,4,"li",10),t.qZA(),t.TgZ(13,"div",11)(14,"button",12),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.openDialog())}),t.TgZ(15,"i",13),t.NdJ("click",function(){const a=t.CHM(e).index,l=t.oxw();return t.KtG(l.setIndexToDeleteItem(a))}),t.qZA()()()()()()}if(2&i){const e=o.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,4,e.title)),t.xp6(4),t.hij("",e.seconds,"s"),t.xp6(2),t.hij("",e.score,"pts"),t.xp6(3),t.Q6J("ngForOf",e.listAnswers)}}function qt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",5)(2,"button",15),t._uU(3,"Back"),t.qZA(),t.TgZ(4,"button",16),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.createQuestionnaire())}),t._uU(5,"Save"),t.qZA()()()}}let Tt=(()=>{class i{constructor(e,n,s){this._quizzService=e,this._dialogService=n,this.dialog=s,this.showDialog=!1,this.listQuestions=[],this.enterAnimationDuration="0ms",this.exitAnimationDuration="0ms",this.indexSelectedToDelete=0,this.nextStep=new t.vpe,this._quizzService.getAddedQuestion().subscribe(a=>{this.listQuestions.push(a)}),this.confirmation=this._dialogService.getConfirmation().subscribe(a=>{a&&this.deleteItem()})}ngOnDestroy(){this.confirmation.unsubscribe()}createQuestionnaire(){this._quizzService.listQuestions=this.listQuestions,this._quizzService.numberQuestions=this.listQuestions.length,this.nextStep.emit(!0)}setIndexToDeleteItem(e){this.indexSelectedToDelete=e}deleteItem(){this.listQuestions.splice(this.indexSelectedToDelete,1)}openDialog(e=this.enterAnimationDuration,n=this.exitAnimationDuration){this.dialog.open(q,{width:"250px",enterAnimationDuration:e,exitAnimationDuration:n})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g),t.Y36(w),t.Y36(_.uw))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-questions"]],outputs:{nextStep:"nextStep"},decls:3,vars:2,consts:[[1,"d-flex","flex-column"],["class","mb-3 d-flex justify-content-center",4,"ngFor","ngForOf"],["class","mt-3 text-center",4,"ngIf"],[1,"mb-3","d-flex","justify-content-center"],[1,"w-75"],[1,"text-center"],[1,"d-flex","justify-content-around"],[1,"badge","badge-main"],[1,"mt-3"],[1,"list-group"],["class","list-group-item list-group-item-dark",3,"ngClass",4,"ngFor","ngForOf"],[1,"mt-3","text-center"],["mat-button","",3,"click"],[1,"fas","fa-trash",3,"click"],[1,"list-group-item","list-group-item-dark",3,"ngClass"],["mat-stroked-button","","matStepperPrevious","",1,"me-3"],["mat-flat-button","","type","submit","color","accent","matStepperNext","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Qt,16,6,"div",1),t.YNc(2,qt,6,0,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.listQuestions),t.xp6(1),t.Q6J("ngIf",n.listQuestions.length>0))},dependencies:[d.mk,d.sg,d.O5,m.a8,m.dn,m.n5,b.lW,v.Ic,v.fd,d.rS],styles:[".btn-finish[_ngcontent-%COMP%]{font-weight:600;letter-spacing:.5rem}.btn-finish[_ngcontent-%COMP%]:hover{background-color:#7b1fa2}.correct-answer[_ngcontent-%COMP%]{background-color:#35c962;color:#fff;font-size:17px}.card[_ngcontent-%COMP%]{background-color:#f8f8f5;text-transform:capitalize}.fa-trash[_ngcontent-%COMP%]{font-weight:900;font-size:25px;color:#ad3333;cursor:pointer}.fa-trash[_ngcontent-%COMP%]:hover{color:#e05353}.list-group[_ngcontent-%COMP%]{text-transform:capitalize;font-size:16px}"]}),i})();const zt=function(){return{standalone:!0}};let At=(()=>{class i{constructor(e,n,s){this._quizzService=e,this._notificationService=n,this.formBuilder=s,this.canContinue=!1,this.nextStep=new t.vpe,this.disabled=!1,this.max=1e3,this.min=0,this.step=50,this.sliderValue=500,this.form=this.formBuilder.group({title:["",r.kI.required],seconds:[15,r.kI.required],score:[500,r.kI.required],answer1:this.formBuilder.group({title:["",r.kI.required],isCorrect:[!1,r.kI.required]}),answer2:this.formBuilder.group({title:["",r.kI.required],isCorrect:[!1,r.kI.required]}),answer3:this.formBuilder.group({title:"",isCorrect:!1}),answer4:this.formBuilder.group({title:"",isCorrect:!1})})}get seconds(){return this.form.get("seconds")?.value}get score(){return this.form.get("score")?.value}addSubstractSeconds(e){this.seconds<=5&&5==this.seconds&&e<0||60==this.seconds&&e>0||this.form.patchValue({seconds:this.seconds+e})}reset(){this.form.patchValue({title:"",seconds:15,points:500,answer1:{title:""},answer2:{title:""},answer3:{title:""},answer4:{title:""}})}getAnswersFromForm(){let e=[],n={description:this.form.get("answer1")?.get("title")?.value,isCorrect:this.form.get("answer1")?.get("isCorrect")?.value},s={description:this.form.get("answer2")?.get("title")?.value,isCorrect:this.form.get("answer2")?.get("isCorrect")?.value},a={description:this.form.get("answer3")?.get("title")?.value,isCorrect:this.form.get("answer3")?.get("isCorrect")?.value},l={description:this.form.get("answer4")?.get("title")?.value,isCorrect:this.form.get("answer4")?.get("isCorrect")?.value};return e.push(n),e.push(s),""!==a.description&&e.push(a),""!==l.description&&e.push(l),e}getQuestionWithCompleteData(e){return{title:this.form.get("title")?.value,seconds:this.form.get("seconds")?.value,score:this.form.get("score")?.value,listAnswers:e}}allAnswersFalses(){const e=["answer1","answer2","answer3","answer4"];for(let n=0;n<e.length;n++)if(1==this.form.get(e[n])?.get("isCorrect")?.value)return!1;return!0}setFalseOtherAnswers(e){const n=["answer1","answer2","answer3","answer4"];for(let s=0;s<n.length;s++)n[s]!==e&&this.form.get(n[s])?.patchValue({isCorrect:!1})}getStatusAnswer(e){return this.form.get(e)?.get("isCorrect")?.value}markAsCorrect(e){let s="answer".concat(e);this.setFalseOtherAnswers(s);const a=this.getStatusAnswer(s);this.form.get(s)?.patchValue({isCorrect:!a})}addQuestion(){if(this.form.invalid||this.allAnswersFalses())return void this._notificationService.showError("","Complete all the fields");const e=this.getAnswersFromForm(),n=this.getQuestionWithCompleteData(e);this._quizzService.addQuestion(n),this.reset()}saveQuestions(){this.nextStep.emit(!0)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g),t.Y36(Z.g),t.Y36(r.qu))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-create-questions"]],outputs:{nextStep:"nextStep"},decls:83,vars:16,consts:[[3,"formGroup"],[1,"d-flex","flex-column","align-items-center"],["appearance","fill",1,"w-75"],["matInput","","formControlName","title","required","",1,"input-title"],[1,"d-flex","flex-wrap","flex","w-75","justify-content-around"],[1,"secondsScore"],[1,"justify-content-center"],[1,"card-subtitle","text-center"],["mat-stroked-button","","type","button",3,"click"],[1,"fa-solid","fa-minus","minus-plus"],[1,"fa-solid","fa-plus","minus-plus"],["formControlName","score","discrete","","thumbLabel","",3,"disabled","max","min","step"],["matSliderThumb","",3,"ngModel","ngModelOptions","ngModelChange"],["inset","",1,"mt-5","w-100"],[1,"mt-3","w-75","justify-content-between"],[1,"text-center"],[1,"row"],["formGroupName","answer1",1,"col-lg-11"],[1,"w-100"],["formControlName","title","matInput","","maxlength","50","placeholder","Write answer 1...","required","",1,"text-answers"],["message1",""],["align","end"],[1,"col-lg-1","d-flex","align-items-center"],["matSuffix","",3,"click"],["formGroupName","answer2",1,"col-lg-11"],["formControlName","title","matInput","","maxlength","50","placeholder","Write answer 2...","required","",1,"text-answers"],["message2",""],[1,"mt-5","text-center"],["formGroupName","answer3",1,"col-lg-11"],["formControlName","title","matInput","","maxlength","50","placeholder","Write answer 3...",1,"text-answers"],["message3",""],["matSuffix","",3,"disabled","click"],["formGroupName","answer4",1,"col-lg-11"],["formControlName","title","matInput","","maxlength","50","placeholder","Write answer 4...",1,"text-answers"],["message4",""],[1,"mt-3","text-center"],["mat-flat-button","","color","accent","type","button",1,"btn","btn-lg",3,"click"],[1,"mt-5","w-100"],[3,"nextStep"]],template:function(e,n){if(1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),t._uU(4,"Question"),t.qZA(),t._UZ(5,"input",3),t.qZA(),t.TgZ(6,"div",4)(7,"mat-card",5)(8,"mat-card-header",6)(9,"mat-card-title"),t._uU(10,"SECONDS"),t.qZA(),t.TgZ(11,"mat-card-subtitle",7),t._uU(12),t.qZA()(),t.TgZ(13,"mat-card-actions")(14,"button",8),t.NdJ("click",function(){return n.addSubstractSeconds(-5)}),t._UZ(15,"i",9),t.qZA(),t.TgZ(16,"button",8),t.NdJ("click",function(){return n.addSubstractSeconds(5)}),t._UZ(17,"i",10),t.qZA()()(),t.TgZ(18,"mat-card",5)(19,"mat-card-header",6)(20,"mat-card-title"),t._uU(21,"SCORE"),t.qZA(),t.TgZ(22,"mat-card-subtitle",7),t._uU(23),t.qZA()(),t.TgZ(24,"mat-card-content")(25,"mat-slider",11)(26,"input",12),t.NdJ("ngModelChange",function(a){return n.sliderValue=a}),t.qZA()()()()(),t._UZ(27,"mat-divider",13),t.TgZ(28,"mat-card",14)(29,"mat-card-title",15),t._uU(30,"Required Answers"),t.qZA(),t.TgZ(31,"div",16)(32,"div",17)(33,"mat-form-field",18)(34,"mat-label"),t._uU(35,"Answer 1"),t.qZA(),t._UZ(36,"input",19,20),t.TgZ(38,"mat-hint",21),t._uU(39),t.qZA()()(),t.TgZ(40,"div",22)(41,"mat-radio-button",23),t.NdJ("click",function(){return n.markAsCorrect("1")}),t.qZA()()(),t.TgZ(42,"div",16)(43,"div",24)(44,"mat-form-field",18)(45,"mat-label"),t._uU(46,"Answer 2"),t.qZA(),t._UZ(47,"input",25,26),t.TgZ(49,"mat-hint",21),t._uU(50),t.qZA()()(),t.TgZ(51,"div",22)(52,"mat-radio-button",23),t.NdJ("click",function(){return n.markAsCorrect("2")}),t.qZA()()(),t.TgZ(53,"mat-card-title",27),t._uU(54,"Optional Answers"),t.qZA(),t.TgZ(55,"div",16)(56,"div",28)(57,"mat-form-field",18)(58,"mat-label"),t._uU(59,"Answer 3"),t.qZA(),t._UZ(60,"input",29,30),t.TgZ(62,"mat-hint",21),t._uU(63),t.qZA()()(),t.TgZ(64,"div",22)(65,"mat-radio-button",31),t.NdJ("click",function(){return n.markAsCorrect("3")}),t.qZA()()(),t.TgZ(66,"div",16)(67,"div",32)(68,"mat-form-field",18)(69,"mat-label"),t._uU(70,"Answer 4"),t.qZA(),t._UZ(71,"input",33,34),t.TgZ(73,"mat-hint",21),t._uU(74),t.qZA()()(),t.TgZ(75,"div",22)(76,"mat-radio-button",31),t.NdJ("click",function(){return n.markAsCorrect("4")}),t.qZA()()(),t.TgZ(77,"div",35)(78,"button",36),t.NdJ("click",function(){return n.addQuestion()}),t._uU(79,"+ Add Question"),t.qZA()()(),t._UZ(80,"mat-divider",13),t.TgZ(81,"div",37)(82,"app-list-questions",38),t.NdJ("nextStep",function(){return n.saveQuestions()}),t.qZA()()()()),2&e){const s=t.MAs(37),a=t.MAs(48),l=t.MAs(61),f=t.MAs(72);t.Q6J("formGroup",n.form),t.xp6(12),t.Oqu(n.seconds),t.xp6(11),t.hij(" ",n.score," "),t.xp6(2),t.Q6J("disabled",n.disabled)("max",n.max)("min",n.min)("step",n.step),t.xp6(1),t.Q6J("ngModel",n.sliderValue)("ngModelOptions",t.DdM(15,zt)),t.xp6(13),t.hij("",s.value.length," / 50"),t.xp6(11),t.hij("",a.value.length," / 50"),t.xp6(13),t.hij("",l.value.length," / 50"),t.xp6(2),t.Q6J("disabled",0===l.value.length),t.xp6(9),t.hij("",f.value.length," / 50"),t.xp6(2),t.Q6J("disabled",0===f.value.length)}},dependencies:[m.a8,m.dk,m.dn,m.n5,m.$j,m.hq,b.lW,x.KE,x.bx,x.hX,x.R9,y.Nt,Q.d,xt.pH,bt.U0,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.nD,r.On,r.sg,r.u,r.x0,Tt],styles:[".input-title[_ngcontent-%COMP%], .input-description[_ngcontent-%COMP%]{font-size:18px;text-transform:capitalize}.mat-form-field[_ngcontent-%COMP%]{margin-top:16px}.text-answers[_ngcontent-%COMP%]{text-transform:capitalize}.btn[_ngcontent-%COMP%]:hover{background-color:#69f0ae}mat-divider[_ngcontent-%COMP%]{margin-left:0!important}.secondsScore[_ngcontent-%COMP%]{background-color:#5a3c70}.card-subtitle[_ngcontent-%COMP%]{font-size:15px}.example-h2[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.example-section[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:center;align-items:center}"]}),i})();function St(i,o){if(1&i&&(t._uU(0),t.ALo(1,"titlecase")),2&i){const e=t.oxw().$implicit;t.Oqu(t.lcZ(1,1,e("step1")))}}function Ot(i,o){if(1&i&&(t._uU(0),t.ALo(1,"titlecase")),2&i){const e=t.oxw().$implicit;t.Oqu(t.lcZ(1,1,e("step2")))}}function yt(i,o){if(1&i&&(t._uU(0),t.ALo(1,"titlecase")),2&i){const e=t.oxw().$implicit;t.Oqu(t.lcZ(1,1,e("step3")))}}const Mt=function(i){return{"correct-answer":i}};function kt(i,o){if(1&i&&(t.TgZ(0,"li",23),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("ngClass",t.VKq(2,Mt,!0===e.isCorrect)),t.xp6(1),t.hij(" ",e.description," ")}}function Ut(i,o){if(1&i&&(t.TgZ(0,"div",15)(1,"mat-card",16)(2,"mat-card-title",17),t._uU(3),t.qZA(),t.TgZ(4,"div",18)(5,"span",19),t._uU(6),t.qZA(),t.TgZ(7,"span",19),t._uU(8),t.qZA()(),t.TgZ(9,"mat-card-content",20)(10,"ul",21),t.YNc(11,kt,2,4,"li",22),t.qZA()()()()),2&i){const e=o.$implicit;t.xp6(3),t.Oqu(e.title),t.xp6(3),t.hij("",e.seconds,"s"),t.xp6(2),t.hij("",e.score,"pts"),t.xp6(3),t.Q6J("ngForOf",e.listAnswers)}}function Dt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"mat-stepper",1,2)(3,"mat-step",3),t.YNc(4,St,2,3,"ng-template",4),t.TgZ(5,"div",5)(6,"app-create-questionnaire",6),t.NdJ("nextStep",function(s){t.CHM(e);const a=t.MAs(2),l=t.oxw();return t.KtG(l.next(s,a))}),t.qZA()()(),t.TgZ(7,"mat-step",3),t.YNc(8,Ot,2,3,"ng-template",4),t.TgZ(9,"div",5)(10,"app-create-questions",6),t.NdJ("nextStep",function(s){t.CHM(e);const a=t.MAs(2),l=t.oxw();return t.KtG(l.next(s,a))}),t.qZA()()(),t.TgZ(11,"mat-step"),t.YNc(12,yt,2,3,"ng-template",4),t.TgZ(13,"form")(14,"div",7)(15,"div",8),t._uU(16),t.qZA(),t.TgZ(17,"div",9),t._uU(18),t.qZA(),t._UZ(19,"mat-divider"),t.YNc(20,Ut,12,4,"div",10),t.qZA(),t.TgZ(21,"div",11)(22,"button",12),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.createQuestionnaire())}),t._uU(23),t.ALo(24,"uppercase"),t.qZA()(),t.TgZ(25,"div",13)(26,"button",14),t._uU(27),t.ALo(28,"uppercase"),t.qZA()()()()()()}if(2&i){const e=o.$implicit,n=t.oxw();t.xp6(1),t.Q6J("linear",n.isLinear),t.xp6(2),t.Q6J("stepControl",n.firstForm),t.xp6(4),t.Q6J("stepControl",n.secondForm),t.xp6(9),t.Oqu(n.titleQuizz),t.xp6(2),t.Oqu(n.descriptionQuizz),t.xp6(2),t.Q6J("ngForOf",n.listQuestions),t.xp6(3),t.Oqu(t.lcZ(24,8,e("buttonCreate"))),t.xp6(4),t.Oqu(t.lcZ(28,10,e("buttonBack")))}}let Nt=(()=>{class i{constructor(e,n){this.formBuilder=e,this._quizzService=n,this.isLinear=!1,this.titleQuizz="",this.descriptionQuizz="",this.listQuestions=[],this.secondForm=this.formBuilder.group({title:["",r.kI.required],seconds:[15,r.kI.required],points:[500,r.kI.required],answer1:this.formBuilder.group({title:["",r.kI.required],isCorrect:[!1,r.kI.required]}),answer2:this.formBuilder.group({title:["",r.kI.required],isCorrect:[!1,r.kI.required]}),answer3:this.formBuilder.group({title:"",isCorrect:!1}),answer4:this.formBuilder.group({title:"",isCorrect:!1})})}createQuestionnaire(){this._quizzService.createQuizz()}next(e,n){e&&(this.titleQuizz=this._quizzService.titleQuizz,this.descriptionQuizz=this._quizzService.descriptionQuizz,this._quizzService.listQuestions?.length>0&&(this.listQuestions=this._quizzService.listQuestions),n.next())}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.qu),t.Y36(g))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-create"]],decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[3,"linear"],["stepper",""],[3,"stepControl"],["matStepLabel",""],[1,"w-100"],[3,"nextStep"],[1,"w-100","text-center","mt-5"],[1,"quizz-title","capital","mb-5"],[1,"quizz-description","capital","mb-5"],["class","mb-5 d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"w-100","text-center","mt-3","mb-5"],["mat-flat-button","","color","primary",1,"btn","btn-lg","btn-finish",3,"click"],[1,"text-center"],["mat-stroked-button","","matStepperPrevious","",1,"me-3"],[1,"mb-5","d-flex","justify-content-center"],[1,"w-75"],[1,"text-center","capital"],[1,"d-flex","justify-content-around"],[1,"badge","badge-main"],[1,"mt-3"],[1,"list-group"],["class","list-group-item list-group-item-dark",3,"ngClass",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-dark",3,"ngClass"]],template:function(e,n){1&e&&t.YNc(0,Dt,29,12,"div",0),2&e&&t.Q6J("translocoRead","create")},dependencies:[d.mk,d.sg,m.a8,m.dn,m.n5,b.lW,Q.d,v.C0,v.VY,v.Vq,v.fd,r._Y,r.JL,r.F,C.KI,vt,At,d.gd,d.rS],styles:[".mat-stepper-horizontal[_ngcontent-%COMP%]{margin-top:8px}.btn-finish[_ngcontent-%COMP%]{font-weight:600;letter-spacing:.5rem}.btn-finish[_ngcontent-%COMP%]:hover{background-color:#7b1fa2}.correct-answer[_ngcontent-%COMP%]{background-color:#35c962;color:#fff;font-size:17px}.card[_ngcontent-%COMP%]{background-color:#f8f8f5;text-transform:capitalize}.list-group[_ngcontent-%COMP%]{text-transform:capitalize;font-size:16px}"]}),i})();function It(i,o){1&i&&(t.TgZ(0,"div",2),t._UZ(1,"app-spinner"),t.qZA())}const Yt=function(i){return{"correct-answer":i}};function Jt(i,o){if(1&i&&(t.TgZ(0,"li",17),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("ngClass",t.VKq(2,Yt,!0===e.isCorrect)),t.xp6(1),t.hij(" ",e.description," ")}}function Lt(i,o){if(1&i&&(t.TgZ(0,"div",9)(1,"mat-card",10)(2,"mat-card-title",11),t._uU(3),t.qZA(),t.TgZ(4,"div",12)(5,"span",13),t._uU(6),t.qZA(),t.TgZ(7,"span",13),t._uU(8),t.qZA()(),t.TgZ(9,"mat-card-content",14)(10,"ul",15),t.YNc(11,Jt,2,4,"li",16),t.qZA()()()()),2&i){const e=o.$implicit;t.xp6(3),t.Oqu(e.title),t.xp6(3),t.hij("",e.seconds,"s"),t.xp6(2),t.hij("",e.score,"pts"),t.xp6(3),t.Q6J("ngForOf",e.listAnswers)}}const Pt=function(){return["/admin"]};function Ft(i,o){if(1&i&&(t.TgZ(0,"div")(1,"mat-card")(2,"div",3)(3,"div",4),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t._uU(6),t.qZA(),t._UZ(7,"mat-divider"),t.YNc(8,Lt,12,4,"div",6),t.qZA()(),t.TgZ(9,"div",7)(10,"button",8),t._uU(11,"BACK"),t.qZA()()()),2&i){const e=t.oxw();t.xp6(4),t.Oqu(e.questionnaire.title),t.xp6(2),t.Oqu(e.questionnaire.description),t.xp6(2),t.Q6J("ngForOf",e.questionnaire.listQuestions),t.xp6(2),t.Q6J("routerLink",t.DdM(4,Pt))}}const Bt=[{path:"",component:tt,data:{title:"Dashboard",description:"Here you can see all your questionnaires created."}},{path:"view/:id",component:(()=>{class i{constructor(e,n){this._quizzService=e,this._aRoute=n,this.loading=!1}ngOnInit(){this.id=this._aRoute.snapshot.paramMap.get("id"),this.getQuizzById()}getQuizzById(){this.loading=!0,this._quizzService.getQuestionnaireById(this.id).subscribe({next:e=>{this.questionnaire=e.data()},error:e=>{console.log(e)},complete:()=>{this.loading=!1}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g),t.Y36(p.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-questionnaire"]],decls:3,vars:2,consts:[["class","d-flex justify-content-center",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"w-100","text-center","mt-5"],[1,"quizz-title","capital","mb-5"],[1,"quizz-description","capital","mb-5"],["class","mb-5 d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"text-center","mt-5"],[1,"btn","btn-lg","btn-dark",3,"routerLink"],[1,"mb-5","d-flex","justify-content-center"],[1,"w-75"],[1,"text-center","capital"],[1,"d-flex","justify-content-around"],[1,"badge","badge-main"],[1,"mt-3"],[1,"list-group"],["class","list-group-item list-group-item-dark",3,"ngClass",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-dark",3,"ngClass"]],template:function(e,n){1&e&&(t.TgZ(0,"div"),t.YNc(1,It,2,0,"div",0),t.YNc(2,Ft,12,5,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.loading),t.xp6(1),t.Q6J("ngIf",void 0!==n.questionnaire))},dependencies:[d.mk,d.sg,d.O5,p.rH,m.a8,m.dn,m.n5,Q.d,T.O],styles:[".correct-answer[_ngcontent-%COMP%]{background-color:#35c962;color:#fff;font-size:17px}.list-group[_ngcontent-%COMP%]{text-transform:capitalize;font-size:16px}"]}),i})(),pathMatch:"full"},{path:"create",component:Nt,pathMatch:"full"},{path:"statistics/:id",component:ht,pathMatch:"full"},{path:"quizz-result-admin/:id",component:c(2060).f,pathMatch:"full"}];let $t=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(Bt),p.Bz]}),i})();var Vt=c(9913);let Et=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez,$t,Vt.m,C.y4]}),i})()}}]);