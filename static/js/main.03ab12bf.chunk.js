(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/logo.6387c00b.svg"},16:function(e,t,n){e.exports=n(50)},21:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(4),o=n.n(i),r=(n(21),n(1));var l=[{question:'Where was the first "sit-in" at a segregated lunch counter?',answers:[{content:"Greensboro, North Carolina",type:!0},{content:"Jackson, Mississippi",type:!1},{content:"Charleston, South Carolina",type:!1},{content:"Atlanta, Georgia",type:!1}],postAnswer:"The Greensboro sit-ins were a series of nonviolent protests in February to July 1960, primarily in the Woolworth store, now the International Civil Rights Center and Museum, in Greensboro, North Carolina, which led to the F. W. Woolworth Company department store chain removing its policy of racial segregation in the Southern United States.",wikiLink:"https://en.wikipedia.org/wiki/Greensboro_sit-ins"},{question:"Which Supreme Court case ruled that the segregation of public schools was unconstitutional?",answers:[{content:"Plessy v. Ferguson",type:!1},{content:"Brown v. Board of Education",type:!0},{content:"Dred Scott v. Sandford",type:!1},{content:"Shelley v. Kraemer",type:!1}],postAnswer:"Brown v. Board of Education of Topeka, 347 U.S. 483 (1954),[1] was a landmark decision of the U.S. Supreme Court in which the Court ruled that U.S. state laws establishing racial segregation in public schools are unconstitutional, even if the segregated schools are otherwise equal in quality. Handed down on May 17, 1954, the Court's unanimous (9\xe2\u20ac\u201c0) decision stated that \"separate educational facilities are inherently unequal,\" and therefore violate the Equal Protection Clause of the Fourteenth Amendment of the U.S. Constitution. However, the decision's 14 pages did not spell out any sort of method for ending racial segregation in schools, and the Court's second decision in Brown II (349 U.S. 294 (1955)) only ordered states to desegregate \"with all deliberate speed.",wikiLink:"https://en.wikipedia.org/wiki/Brown_v._Board_of_Education"},{question:"What was the outcome of the murder trial of Emmet Till?",answers:[{content:"The two defendents were given life in prison",type:!1},{content:"The two defendents were given the death sentence",type:!1},{content:"The two defends were acquitted by an all white jury",type:!0},{content:"The two defendents were fled Mississippi before the trial",type:!1}],postAnswer:"In September 1955, an all-white jury found Bryant and Milam not guilty of Till's kidnapping and murder. Protected against double jeopardy, the two men publicly admitted in a 1956 interview with Look magazine that they had killed Till. Till's murder was seen as a catalyst for the next phase of the civil rights movement.",wikiLink:"https://en.wikipedia.org/wiki/Emmett_Till"},{question:"What event was the catalyst for the Montgomery Bus Boycott?",answers:[{content:"A segregated bus system was established in Montgomery, Alabama",type:!1},{content:"Bus drivers in Montgomery refused to pick up Black passengers",type:!1},{content:"Bus fairs were raised only for Black passengers",type:!1},{content:"Claudette Colvin and Rosa Parks refused to give up their seats to a white person on a public bus",type:!0}],postAnswer:'On December 1, 1955, nine months after a 15-year-old high school student, Claudette Colvin, refused to give up her seat to a white passenger on a public bus in Montgomery, Alabama, and was arrested, Rosa Parks did the same thing. Parks soon became the symbol of the resulting Montgomery Bus Boycott and received national publicity. She was later hailed as the "mother of the civil rights movement".',wikiLink:"https://en.wikipedia.org/wiki/Montgomery_Bus_Boycott"},{question:"How did Arkansas Governor Orval Faubus respond to the effort of the nine African Americans to attend Little Rock High School in 1957?",answers:[{content:"He urged the school to treat the students fairly",type:!1},{content:"He asked the president to intervene and block the school\xe2\u20ac\u2122s integration",type:!1},{content:"He called out the National Guard to block their way",type:!0},{content:"He called out the National Guard to arrest white supremacists",type:!1}],postAnswer:"A crisis erupted in Little Rock, Arkansas, when Governor of Arkansas Orval Faubus called out the National Guard on September 4 to prevent entry to the nine African-American students who had sued for the right to attend an integrated school, Little Rock Central High School.[60] Under the guidance of Daisy Bates, the nine students had been chosen to attend Central High because of their excellent grades.",wikiLink:"https://en.wikipedia.org/wiki/Little_Rock_Nine"}],c=n(5);var u=function(e){return a.a.createElement("h2",{className:"question"},e.content)};var h=function(e){return a.a.createElement("div",{className:"questionCount"},"Question ",a.a.createElement("span",null,e.counter)," of ",a.a.createElement("span",null,e.total))},d=n(15),w=n(13),p=n.n(w);var m=function(e){const t=Object(s.useState)({}),n=Object(d.a)(t,2),i=n[0],o=n[1];return a.a.createElement("li",{className:"answerOption",style:i},a.a.createElement("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answer&&e.isTrue,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:t=>{e.isTrue||o({background:"#B33A3A",color:"white"}),e.onAnswerSelected(e.isTrue,e.postAnswer,e.wikiLink,t)}}),a.a.createElement(p.a,{isOpen:e.answer&&e.isTrue&&!1,preferPlace:"left",body:[a.a.createElement("div",{style:{background:"white",width:"fit-content",padding:"2px",borderRadius:"20px"}},a.a.createElement("a",{key:"a",onClick:e.openLearnMore,className:"link"},"read more")),a.a.createElement("div",{key:"b",style:{width:"500px",padding:"10px",borderRadius:"20px",background:"rgba(0, 0, 0, 0.7)",color:"black"}},a.a.createElement("span",{style:{lineHeight:1.8,background:"white"}},e.postAnswer))]},a.a.createElement("label",{className:"radioCustomLabel",htmlFor:e.answerType},e.answerContent)))};var k=function(e){return a.a.createElement(c.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:400,transitionLeaveTimeout:100,transitionAppear:!0,transitionAppearTimeout:500},""!==e.learnMoreLink?a.a.createElement("div",{className:"quizzBox",style:{background:e.rightAnswer?"#4bb543":"#B33A3A"}},a.a.createElement(h,{counter:e.questionId,total:e.questionTotal}),a.a.createElement(u,{content:e.question}),a.a.createElement("div",{className:"answerExplanationContainer"},a.a.createElement("div",{className:"answerExplanation"},e.postAnswer),a.a.createElement("a",{key:"a",className:"learnMoreLink",style:{color:"white"},onClick:e.openLearnMore},"Learn more"))):a.a.createElement("div",{key:e.questionId},a.a.createElement(h,{counter:e.questionId,total:e.questionTotal}),a.a.createElement(u,{content:e.question}),a.a.createElement("ul",{className:"answerOptions"},e.answerOptions.map((function(t){return a.a.createElement(m,{key:t.content,answerContent:t.content,answerType:t.content,isTrue:t.type,postAnswer:e.postAnswer,wikiLink:e.wikiLink,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected,openLearnMore:e.openLearnMore})})))))};var g=function(e){return a.a.createElement(c.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},a.a.createElement("div",null,"Completed!"))},y=n(14),f=n.n(y);n(49);class v extends a.a.Component{constructor(e){super(e)}render(){const e=this.props,t=e.ref,n=e.url;return a.a.createElement("div",{className:"wikiContainer",ref:t},a.a.createElement("iframe",{className:"wikiIframe",title:"wiki-iframe",src:n}))}}var b=v;class A extends s.Component{constructor(e){super(e),this.state={counter:0,nextButton:!1,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},result:"",wikiLink:"",activeWikiLink:"",learnMoreContent:"",learnMoreLink:"",validAnswers:0,questionsAnswered:0,rightAnswer:!1},this.wikiEl=a.a.createRef(),this.setNextQuestion=this.setNextQuestion.bind(this),this.handleAnswerSelected=this.handleAnswerSelected.bind(this),this.openLearnMore=this.openLearnMore.bind(this)}componentDidMount(){const e=l.map(e=>this.shuffleArray(e.answers));this.setState({question:l[0].question,postAnswer:l[0].postAnswer,wikiLink:l[0].wikiLink,answerOptions:e[0]})}shuffleArray(e){for(var t,n,s=e.length;0!==s;)n=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[n],e[n]=t;return e}handleAnswerSelected(e,t,n,s){this.setUserAnswer(s.currentTarget.value);const a=this.state.validAnswers,i=e?Number(a+1):a;this.setState(Object(r.a)(Object(r.a)({},this.state),{},{learnMoreContent:t,learnMoreLink:n,rightAnswer:e,validAnswers:i,questionsAnswered:this.state.questionsAnswered+1})),this.state.questionId<l.length?this.setState({nextButton:!0}):setTimeout(()=>this.setResults(this.getResults()),8e3)}setUserAnswer(e){this.setState((t,n)=>({answersCount:Object(r.a)(Object(r.a)({},t.answersCount),{},{[e]:(t.answersCount[e]||0)+1}),answer:e}))}setNextQuestion(){const e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,nextButton:!1,question:l[e].question,answerOptions:l[e].answers,postAnswer:l[e].postAnswer,wikiLink:l[e].wikiLink,answer:"",learnMoreContent:"",learnMoreLink:""})}openLearnMore(){this.setState(Object(r.a)(Object(r.a)({},this.state),{},{activeWikiLink:this.state.wikiLink})),console.log(this.wikiEl.current),window.setTimeout(()=>{this.wikiEl.current.scrollIntoView({alignToTop:!0,behavior:"smooth"})},100)}getResults(){const e=this.state.answersCount,t=Object.keys(e),n=t.map(t=>e[t]),s=Math.max.apply(null,n);return t.filter(t=>e[t]===s)}setResults(e){this.setState({result:"completed"})}renderQuiz(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,postAnswer:this.state.postAnswer,wikiLink:this.state.wikiLink,questionTotal:l.length,onAnswerSelected:this.handleAnswerSelected,openLearnMore:this.openLearnMore,learnMoreContent:this.state.learnMoreContent,learnMoreLink:this.state.learnMoreLink,rightAnswer:this.state.rightAnswer}),this.state.nextButton?a.a.createElement("button",{onClick:this.setNextQuestion,className:"next-button"},"NEXT"):null,this.state.questionsAnswered>0&&a.a.createElement("div",{className:"validAnswersContainer"},a.a.createElement("div",{className:"title"},"You answered ",this.state.validAnswers.toString()," out of ",this.state.questionsAnswered,"   ",this.state.questionsAnswered>1?"questions":"question"," correctly")))}renderResult(){return a.a.createElement(g,{quizResult:this.state.result})}render(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-header"},a.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),a.a.createElement("h2",null,"Civil Rights Quiz")),this.state.result?this.renderResult():this.renderQuiz(),a.a.createElement("div",{ref:this.wikiEl},this.state.activeWikiLink&&a.a.createElement(b,{url:this.state.activeWikiLink})))}}var E=A;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.03ab12bf.chunk.js.map