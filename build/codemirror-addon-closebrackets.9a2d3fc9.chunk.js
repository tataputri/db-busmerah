(self.webpackChunkdb_busmerah=self.webpackChunkdb_busmerah||[]).push([[5178],{82801:(z,D,E)=>{(function(s){s(E(4631))})(function(s){var w={pairs:`()[]{}''""`,closeBefore:`)]}'":;>`,triples:"",explode:"[]{}"},f=s.Pos;s.defineOption("autoCloseBrackets",!1,function(e,t,n){n&&n!=s.Init&&(e.removeKeyMap(B),e.state.closeBrackets=null),t&&(R(k(t,"pairs")),e.state.closeBrackets=t,e.addKeyMap(B))});function k(e,t){return t=="pairs"&&typeof e=="string"?e:typeof e=="object"&&e[t]!=null?e[t]:w[t]}var B={Backspace:K,Enter:L};function R(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),i="'"+n+"'";B[i]||(B[i]=F(n))}}R(w.pairs+"`");function F(e){return function(t){return j(t,e)}}function O(e){var t=e.state.closeBrackets;if(!t||t.override)return t;var n=e.getModeAt(e.getCursor());return n.closeBrackets||t}function K(e){var t=O(e);if(!t||e.getOption("disableInput"))return s.Pass;for(var n=k(t,"pairs"),i=e.listSelections(),a=0;a<i.length;a++){if(!i[a].empty())return s.Pass;var h=x(e,i[a].head);if(!h||n.indexOf(h)%2!=0)return s.Pass}for(var a=i.length-1;a>=0;a--){var l=i[a].head;e.replaceRange("",f(l.line,l.ch-1),f(l.line,l.ch+1),"+delete")}}function L(e){var t=O(e),n=t&&k(t,"explode");if(!n||e.getOption("disableInput"))return s.Pass;for(var i=e.listSelections(),a=0;a<i.length;a++){if(!i[a].empty())return s.Pass;var h=x(e,i[a].head);if(!h||n.indexOf(h)%2!=0)return s.Pass}e.operation(function(){var l=e.lineSeparator()||`
`;e.replaceSelection(l+l,null),b(e,-1),i=e.listSelections();for(var o=0;o<i.length;o++){var S=i[o].head.line;e.indentLine(S,null,!0),e.indentLine(S+1,null,!0)}})}function b(e,t){for(var n=[],i=e.listSelections(),a=0,h=0;h<i.length;h++){var l=i[h];l.head==e.getCursor()&&(a=h);var o=l.head.ch||t>0?{line:l.head.line,ch:l.head.ch+t}:{line:l.head.line-1};n.push({anchor:o,head:o})}e.setSelections(n,a)}function W(e){var t=s.cmpPos(e.anchor,e.head)>0;return{anchor:new f(e.anchor.line,e.anchor.ch+(t?-1:1)),head:new f(e.head.line,e.head.ch+(t?1:-1))}}function j(e,t){var n=O(e);if(!n||e.getOption("disableInput"))return s.Pass;var i=k(n,"pairs"),a=i.indexOf(t);if(a==-1)return s.Pass;for(var h=k(n,"closeBefore"),l=k(n,"triples"),o=i.charAt(a+1)==t,S=e.listSelections(),A=a%2==0,p,_=0;_<S.length;_++){var y=S[_],r=y.head,v,P=e.getRange(r,f(r.line,r.ch+1));if(A&&!y.empty())v="surround";else if((o||!A)&&P==t)o&&q(e,r)?v="both":l.indexOf(t)>=0&&e.getRange(r,f(r.line,r.ch+3))==t+t+t?v="skipThree":v="skip";else if(o&&r.ch>1&&l.indexOf(t)>=0&&e.getRange(f(r.line,r.ch-2),r)==t+t){if(r.ch>2&&/\bstring/.test(e.getTokenTypeAt(f(r.line,r.ch-2))))return s.Pass;v="addFour"}else if(o){var I=r.ch==0?" ":e.getRange(f(r.line,r.ch-1),r);if(!s.isWordChar(P)&&I!=t&&!s.isWordChar(I))v="both";else return s.Pass}else if(A&&(P.length===0||/\s/.test(P)||h.indexOf(P)>-1))v="both";else return s.Pass;if(!p)p=v;else if(p!=v)return s.Pass}var d=a%2?i.charAt(a-1):t,c=a%2?t:i.charAt(a+1);e.operation(function(){if(p=="skip")b(e,1);else if(p=="skipThree")b(e,3);else if(p=="surround"){for(var u=e.getSelections(),g=0;g<u.length;g++)u[g]=d+u[g]+c;e.replaceSelections(u,"around"),u=e.listSelections().slice();for(var g=0;g<u.length;g++)u[g]=W(u[g]);e.setSelections(u)}else p=="both"?(e.replaceSelection(d+c,null),e.triggerElectric(d+c),b(e,-1)):p=="addFour"&&(e.replaceSelection(d+d+d+d,"before"),b(e,1))})}function x(e,t){var n=e.getRange(f(t.line,t.ch-1),f(t.line,t.ch+1));return n.length==2?n:null}function q(e,t){var n=e.getTokenAt(f(t.line,t.ch+1));return/\bstring/.test(n.type)&&n.start==t.ch&&(t.ch==0||!/\bstring/.test(e.getTokenTypeAt(t)))}})}}]);
