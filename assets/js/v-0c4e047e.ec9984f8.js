"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79416],{90861:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-0c4e047e",path:"/devices/DL15S-1BZ.html",title:"Leviton DL15S-1BZ control via MQTT",lang:"en-US",frontmatter:{title:"Leviton DL15S-1BZ control via MQTT",description:"Integrate your Leviton DL15S-1BZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-01-07T14:09:21.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/DL15S-1BZ.md",git:{updatedTime:1652887022e3}}},88555:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});const a=(0,i(66252).uE)('<h1 id="leviton-dl15s-1bz" tabindex="-1"><a class="header-anchor" href="#leviton-dl15s-1bz" aria-hidden="true">#</a> Leviton DL15S-1BZ</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>DL15S-1BZ</td></tr><tr><td>Vendor</td><td>Leviton</td></tr><tr><td>Description</td><td>Lumina RF 15A switch, 120/277V</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/DL15S-1BZ.jpg" alt="Leviton DL15S-1BZ"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair this device, hold the ON for few seconds until the red light is blinking. After that, simple tap once on the ON again to start the pairing process.</p><p>Note: This device doesn&#39;t support Zigbee channels 25 &amp; 26.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),o={},d=(0,i(83744).Z)(o,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);