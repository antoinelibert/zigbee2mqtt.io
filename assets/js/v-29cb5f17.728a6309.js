"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[19407],{16771:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-29cb5f17",path:"/devices/E1757.html",title:"IKEA E1757 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E1757 control via MQTT",description:"Integrate your IKEA E1757 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-11-09T18:37:38.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"End Position",slug:"end-position",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1757.md",git:{updatedTime:1652887022e3}}},90997:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var o=i(66252);const d=(0,o.uE)('<h1 id="ikea-e1757" tabindex="-1"><a class="header-anchor" href="#ikea-e1757" aria-hidden="true">#</a> IKEA E1757</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1757</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>FYRTUR roller blind</td></tr><tr><td>Exposes</td><td>cover (state, position), battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E1757.jpg" alt="IKEA E1757"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>It&#39;s recommend to first pair the included TRADFRI signal repeater in the room where you want to put the blinds. Now press both buttons on the blind (next to battery lid) for 5 seconds until a white light between both buttons is turned on. The device is now awake and ready to pair for 2 minutes. After that pair the blind by holding the blind battery lid very close to the TRADFRI signal repeater until the white light is turned off (this should mean the pairing is successful).</p><h3 id="end-position" tabindex="-1"><a class="header-anchor" href="#end-position" aria-hidden="true">#</a> End Position</h3><p>The roller blind maximum extension can be set by moving the blind to the desired position and then double pressing the up or down button on the blind itself. This cannot be set with the remote. To reset the end position so you can define a newer more extended end position, open the blind fully. Then double press the up or down button. You can now set the blind extension again.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',8),a=(0,o.Uk)("This device supports OTA updates, for more information see "),n=(0,o.Uk)("OTA updates"),r=(0,o.Uk)("."),s=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),l=(0,o.Uk)("How to use device type specific configuration"),h=(0,o.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),c={},u=(0,i(83744).Z)(c,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[d,(0,o._)("p",null,[a,(0,o.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[n])),_:1}),r]),s,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[l])),_:1})])]),h],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);