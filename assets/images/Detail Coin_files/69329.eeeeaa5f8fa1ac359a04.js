(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[69329],{167175:(e,t,i)=>{"use strict";i.d(t,{isAndroid:()=>p,isAnyMobile:()=>b,isBlackBerry:()=>h,isChrome:()=>o,isEdge:()=>c,isFF:()=>l,isIOS:()=>m,isIPad:()=>w,isLinux:()=>g,isMac:()=>_,isOperaMini:()=>f,isSafari:()=>u,isWindows:()=>d,mobiletouch:()=>a,touch:()=>s});const n="undefined"!=typeof window&&"undefined"!=typeof navigator,r=n&&"ontouchstart"in window,a=n&&r&&"onorientationchange"in window,s=n&&(r||!!navigator.maxTouchPoints),o=n&&window.chrome&&window.chrome.runtime,l=n&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1,c=n&&/\sEdge\/\d\d\b/.test(navigator.userAgent),u=n&&Boolean(navigator.vendor)&&navigator.vendor.indexOf("Apple")>-1&&-1===navigator.userAgent.indexOf("CriOS")&&-1===navigator.userAgent.indexOf("FxiOS"),_=n&&/mac/i.test(navigator.platform),d=n&&/Win32|Win64/i.test(navigator.platform),g=n&&/Linux/i.test(navigator.platform),p=n&&/Android/i.test(navigator.userAgent),h=n&&/BlackBerry/i.test(navigator.userAgent),m=n&&/iPhone|iPad|iPod/.test(navigator.platform),f=n&&/Opera Mini/i.test(navigator.userAgent),w=n&&("MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||/iPad/.test(navigator.platform)),b=p||h||m||f},23580:(e,t,i)=>{"use strict";function n(e,t){return e&&e.utm_campaign&&(e.utm_campaign+=`-${t}`),e}async function r(e,t,n,r){if("lentaru"===e){const{getLentaCopyrightData:e}=await Promise.all([i.e(12353),i.e(1523)]).then(i.bind(i,466672));return e()}if("cmoneycomtw"===e){const{getCmoneycomtwCopyrightData:e}=await Promise.all([i.e(6686),i.e(71903),i.e(42091)]).then(i.bind(i,20922));return e(t,n)}if("new"===r){const{getTradingViewCopyrightData:e}=await Promise.all([i.e(36498),i.e(36228)]).then(i.bind(i,703094));return e(t,n)}if("with_border"===r){const{getTradingViewCopyrightData:e}=await Promise.all([i.e(95563),i.e(37753)]).then(i.bind(i,513316));return e(t,n)}if("large_trade"===r){const{getTradingViewCopyrightData:e}=await Promise.all([i.e(5172),i.e(47259)]).then(i.bind(i,203515));return e(t,n)}{const{getTradingViewCopyrightData:e}=await Promise.all([i.e(6686),i.e(47243)]).then(i.bind(i,88136));return e(t,n)}}i.d(t,{addUtmCampaignSource:()=>n,getCustomerCopyrightData:()=>r})},650401:(e,t,i)=>{"use strict";i.d(t,{getWidgetSheriffActions:()=>c});var n=i(120780),r=i(201089),a=i(952598);const s=window.WIDGET_SHERIFF_HOST||"https://widget-sheriff.xstaging-widget.tv",o=(0,r.getLogger)("WidgetSheriff.Widget");let l=null;async function c(){return null===l&&(l=await async function(){const e=function(){if(document.location.ancestorOrigins&&document.location.ancestorOrigins.length)return document.location.ancestorOrigins[document.location.ancestorOrigins.length-1];try{return new URL(document.referrer).origin}catch(e){return document.location.origin||null}}();if(null===e)return o.logWarn("ancestorOrigin is undefined"),Promise.resolve([]);const t=new URL("/sheriff/api/v1/rules/search",s);t.searchParams.append("origin",e);return(await(0,n.fetch)(t.toJSON()).then((e=>{
if(!e.ok)throw new Error("Guard request error occured");return 204===e.status?Promise.resolve({actions:[]}):e.json()})).catch((e=>(o.logWarn(e.message),Promise.resolve({actions:[]}))))).actions.filter((e=>a.widgetSheriffActions.has(e)))}()),Promise.resolve(l)}},941285:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Spinner:()=>o,renderSpinnerTemplate:()=>a});i(128415);var n=i(571690),r=i(607436);function a(e=""){return`<div class="tv-spinner ${e}" role="progressbar"></div>`}const s=(0,n.parseHtmlElement)(a());class o{constructor(e){this._shown=!1,this._el=s.cloneNode(!0),this.setSize(r.spinnerSizeMap[e||r.DEFAULT_SIZE])}spin(e){return this._el.classList.add("tv-spinner--shown"),void 0===this._container&&(this._container=e,void 0!==e&&e.appendChild(this._el)),this._shown=!0,this}stop(e){return e&&void 0!==this._container&&this._container.removeChild(this._el),this._el&&this._el.classList.remove("tv-spinner--shown"),this._shown=!1,this}setStyle(e){return Object.keys(e).forEach((t=>{const i=e[t];void 0!==i&&this._el.style.setProperty(t,i)})),this}style(){return this._el.style}setSize(e){const t=void 0!==e?`tv-spinner--size_${e}`:"";return this._el.className=`tv-spinner ${t} ${this._shown?"tv-spinner--shown":""}`,this}getEl(){return this._el}destroy(){this.stop(),delete this._el,delete this._container}}},66974:(e,t,i)=>{"use strict";function n(e=location.host){return-1!==["i18n.tradingview.com","partial.tradingview.com","www.tradingview.com","wwwcn.tradingview.com"].indexOf(e)||-1!==["d33t3vvu2t2yu5.cloudfront.net","dwq4do82y8xi7.cloudfront.net","s.tradingview.com","s3.tradingview.com"].indexOf(e)||e.match(/^[a-z]{2}\.tradingview\.com/)||e.match(/prod-[^.]+.tradingview.com/)?"battle":e.includes("tradingview.com")||e.includes("staging")?"staging":e.match(/webcharts/)?"staging_local":(e.match(/^localhost(:\d+)?$/),"local")}function r(){return"local"===n()}function a(){return"battle"===n()}function s(){return!a()}i.r(t),i.d(t,{environment:()=>n,isDebug:()=>s,isLocal:()=>r,isProd:()=>a})},125226:(e,t,i)=>{"use strict";var n=i(49437).TVLocalStorage,r=i(707957).Delegate,a=i(855385);i(638456);var s=new r;TradingView.FeatureToggle={force_prefix:"forcefeaturetoggle.",onChanged:new r,enableFeature:function(e){n.setItem(this.force_prefix+e,"true"),s.fire(e)},disableFeature:function(e){n.setItem(this.force_prefix+e,"false"),s.fire(e)},resetFeature:function(e){n.removeItem(this.force_prefix+e),s.fire(e)},onFeaturesStateChanged:function(){return s}},TradingView.isFeatureEnabled=function(e){var t="featuretoggle_seed";function r(e){try{var i=a(e+function(){if(window.user&&window.user.id)return window.user.id;var e=n.getItem(t);return null!==e||(e=Math.floor(1e6*Math.random()),n.setItem(t,e)),e}());return new DataView(i).getUint32(0,!0)/4294967296}catch(e){return.5}}function o(t){return!("local"!==window.environment||!function(e){
var t=["skip_navigation_on_chart","tick_intervals","broker_TRADESTATION","broker_TRADOVATE_dev","black_friday_mainpage","black_friday_popup","datawindow","trading-fast-renew-oauth-token","switching_year_to_month_disabled","default_year_billing_cycle_switcher","marketing-analytics","visible_address_fields_by_default","slow-support-warning","hide-trading-floating-toolbar","save-short-streams","details_disable_bid_ask","vat_disabled","disable_recaptcha_on_signup","braintree-gopro-in-order-dialog","braintree-apple-pay","braintree-google-pay","braintree-apple-pay-trial","braintree-google-pay-trial","braintree-3ds-enabled","remove_order_ticket_cancel_button","trial_increased_monthly_discounts","checkout-tvcoins","checkout-3ds","razorpay-card-tvcoins","razorpay-card-subscriptions","razorpay-upi-tvcoins","razorpay-upi-subscriptions","razorpay-use-recurring-billing-scheduler","dlocal-payments","hide_gopro_popup_upgrade_button","tradestation_use_sync_mapper","broker_id_session","modular_broker_use_sync_mapper","multichart_replay","oanda-european-accounts-warning","mobile_show_bottom_panel","disable_save_settings","ignore_mobile_apps_distinguish_pro_full_name","desktop_version_notification_enabled","favorites-in-broker-dropdown","enable_toggle_streams_rtmp_url","hide_ecomonic_events","mobile_trading_web","mobile_trading_ios","mobile_trading_android","hide_real_brokers_on_mobile","disable_tradestation_country_block","enable_trading_server_logger","hide_ranges_label_colors","disable_user_specific_encryption","minds_widget_enabled","self-replacing-advanced-chart-widget","disable-calendar-advanced-chart-widget","disable-lse-data-screener-heatmap-widgets","paper_competition_banner","paper_competition_started_dialog","disable_pushstream_connections_for_anonymous_users","use_staging_verifier","account_verifier_maintenance","ally_use_new_sso_url","ibkr_use_new_init_session_api","tradestation_account_data_streaming","enable_eventsource_pushstream_transport","enable_eventsource_pushstream_mobile","performance_test_mode","ftx_request_server_logger","ibkr_request_server_logger","disallow_concurrent_sessions","check_ibkr_side_maintenance","tradestation_request_server_logger","trading_request_server_logger","hide_tweet_drawingtool","RU_SF_disable","RU_VOR_disable","enable_diff_decorations","disable_pine_v4","enable_profiler","pine_logs_in_detach","hide_find_in_header","enable_new_custom_public_chats","bottom_panel_track_events","ibkr_ws_account_summary","continuous_front_contract_trading","vertex-tax-included","enable_traded_context_linking","order_context_validation_in_instant_mode","show_data_problems_in_help_center","chart_storage_hibernation_delay_60min","chart_storage_hibernation_delay_10min","chart_storage_hibernation_delay_5min","force_disable_jsx_menu_items_rendering","hide_dom","enable_sign_in_popup_with_evercookie","start_replay_right_after_point_selection","switching_raf_toast","new_order_size_calculator","order_type_specific_settings_saving","hide_position_trade_value","paper_force_connect_pushstream","use_broker_logos_from_single_source","alerts-facade-use-permission-proxy","alerts-controller-use-permission-proxy","alerts-start-christmas","alerts-use-selected-source-context","alerts-labels-on-symbol-page","forexcom_session_v2","fxcm_server_logger","minds_comments_enable_for_free_users","fxcm_trailing_stop_bracket","mock_tweet_data_for_tests","replay_result_sharing","ibkr_ws_server_logger","options_strategy_analyzer_tab","options_details_widget","options_overlay","options_product_page","options_exchange_nse","options_exchange_cme","options_exchange_cbot","options_exchange_comex","options_exchange_nymex","options_exchange_bse","ibkr_subscribe_to_order_updates_first","rest_logout_on_429","amp_oauth_authorization","blueline_oauth_authorization","dorman_oauth_authorization","cqg_oauth_authorization","ironbeam_oauth_authorization","optimus_oauth_authorization","stonex_oauth_authorization","tickmill_oauth_authorization","ibkr_ws_account_ledger","force_max_allowed_pulling_intervals","fxcm_password_authorization_type","change_password_suggestion_popup","ibkr_disable_ws_connect_timeout","oanda_rest_api","launch-oanda-country-group-1","launch-oanda-country-group-2","launch-oanda-country-group-3","news_enable_streaming","news_screener_page","news_enable_streaming_hibernation","news_streaming_hibernation_delay_60min","news_streaming_hibernation_delay_10min","news_streaming_hibernation_delay_5min","news_enable_streaming_on_screener","replay_trading_brackets","cqg-realtime-bandwidth-limit","cityindex_spreadbetting","do_not_wait_meta_info","paper_use_new_auth","stack_trace_clickable","oauth2_code_flow_provider_server_logger","turn_off_ai","enable_binanceapis_base_url","unsibscribe_competition_for_participants","hide_field_last_release_date","enable_first_touch_is_selection","paper_delay_trading","static_dom","binance_disable_live_account_verification","enable_forced_email_confirmation","ibkr_use_new_subscriptions_url","ylg_oauth_authorization","show_replay_trading_panel","enable_toast_notifications_groupable"],i="[A-Z]+[a-zA-Z0-9_]+",n=new RegExp(`broker_${i}_dev`,"g"),r=new RegExp(`hide_${i}_on_ios`,"g"),a=new RegExp(`hide_${i}_on_android`,"g"),s=new RegExp(`hide_${i}_on_mobile_web`,"g")
;return-1===t.indexOf(e)&&-1===e.indexOf("-maintenance")&&!1===n.test(e)&&!1===r.test(e)&&!1===a.test(e)&&!1===s.test(e)}(t))||(!e[t]||-1!==e[t])&&(!!("true"===n.getItem(TradingView.FeatureToggle.force_prefix+t)||window.is_authenticated&&"undefined"!=typeof user&&user.settings&&"true"===user.settings[TradingView.FeatureToggle.force_prefix+t])||!("false"===n.getItem(TradingView.FeatureToggle.force_prefix+t)||window.is_authenticated&&"undefined"!=typeof user&&user.settings&&"false"===user.settings[TradingView.FeatureToggle.force_prefix+t])&&(!!e[t]&&(1===e[t]||r(t)<=e[t])))}return TradingView.onWidget()||Promise.all([i.e(5069),i.e(34604)]).then(i.bind(i,405069)).then((t=>{t.pushStreamMultiplexer.on("featuretoggle",(function(t){var i=o(t.name);e[t.name]=t.state,i!==o(t.name)&&s.fire(t.name)}))})),o}(window.featureToggleState||{}),TradingView.FeatureToggle,t.isFeatureEnabled=TradingView.isFeatureEnabled,t.onFeaturesStateChanged=TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)},588948:(e,t,i)=>{"use strict";i.d(t,{getFreshInitData:()=>l,getInitData:()=>o,updateInitData:()=>s});var n=i(650151);const r=(0,i(201089).getLogger)("Common.InitData"),a=window.initData||{};function s(){window.initData&&window.initData!==a&&(Object.assign(a,window.initData),window.initData=a);const e=document.querySelectorAll('script[type="application/prs.init-data+json"]');for(let t=0;t<e.length;t++){const i=e[t];try{const e=JSON.parse((0,n.ensureNotNull)(i.textContent));Object.assign(a,e)}catch(e){r.logWarn(`Failed to parse initData element. ${e}`)}finally{(0,n.ensureNotNull)(i.parentNode).removeChild(i)}}}function o(){return a}function l(){return s(),a}},314802:(e,t,i)=>{"use strict";i.d(t,{isOnMobileAppPage:()=>r});var n=i(16188);function r(e,t=!1){const{searchParams:i}=new URL(String(location));let r="true"===i.get("mobileapp_new"),a="true"===i.get("mobileapp");if(!t){const e=n.get("tv_app")||"";r||(r=["android","android_nps"].includes(e)),a||(a="ios"===e)}return!("new"!==e&&"any"!==e||!r)||!("new"===e||!a)}},439563:(e,t,i)=>{"use strict";async function n(){const e=(await Promise.all([i.e(70056),i.e(36683)]).then(i.bind(i,469449))).getTrackerInstance();return e||null}i.d(t,{getEmbedWidgetTracker:()=>n})},995683:(e,t,i)=>{"use strict";function n(e,t,i={}){return Object.assign({},e,function(e,t,i={}){const n=Object.assign({},t);for(const r of Object.keys(t)){const a=i[r]||r;a in e&&(n[r]=[e[a],t[r]].join(" "))}return n}(e,t,i))}i.d(t,{mergeThemes:()=>n})},223699:(e,t,i)=>{"use strict";i.d(t,{Interval:()=>u,ResolutionKind:()=>a,SpecialResolutionKind:()=>s});const n=/^(\d*)([TSHDWMR])$/,r=/^(\d+)$/;var a,s;!function(e){e.Ticks="ticks",e.Seconds="seconds",e.Minutes="minutes",e.Days="days",e.Weeks="weeks",e.Months="months",e.Range="range",e.Invalid="invalid"}(a||(a={})),function(e){e.Hours="hours"}(s||(s={}));const o={};o[a.Ticks]=1e3,o[a.Seconds]=1e3,o[a.Minutes]=60*o[a.Seconds],o[a.Days]=1440*o[a.Minutes],o[a.Weeks]=7*o[a.Days];const l={T:a.Ticks,S:a.Seconds,D:a.Days,W:a.Weeks,M:a.Months,R:a.Range
},c=new Set([a.Ticks,a.Seconds,a.Minutes]);class u{constructor(e,t){this._kind=a.Invalid,this._multiplier=0,e!==a.Invalid&&t>0&&(this._kind=e,this._multiplier=t)}kind(){return this._kind}multiplier(){return this._multiplier}isValid(){return this.kind()!==a.Invalid&&this.multiplier()>0}isDWM(){return this.isValid()&&!this.isRange()&&!this.isIntraday()&&!this.isTicks()}isIntraday(){const e=c.has(this.kind());return this.isValid()&&e}isSeconds(){return this.kind()===a.Seconds}isMinutes(){return this.kind()===a.Minutes}isMinuteHours(){return this.kind()===a.Minutes&&((e=this.multiplier())>=60&&!(e%60));var e}isDays(){return this.kind()===a.Days}isWeeks(){return this.kind()===a.Weeks}isMonths(){return this.kind()===a.Months}isRange(){return this.kind()===a.Range}isTicks(){return this.kind()===a.Ticks}is1Tick(){return this.isTicks()&&1===this.multiplier()}isTimeBased(){return!this.isRange()}letter(){return this.isValid()&&this.kind()!==a.Minutes?this.kind()[0].toUpperCase():""}value(){return this.isValid()?this.kind()===a.Minutes?this.multiplier()+"":this.multiplier()+this.letter():""}isEqualTo(e){if(!(e instanceof u))throw new Error("Argument is not an Interval");return!(!this.isValid()||!e.isValid())&&(this.kind()===e.kind()&&this.multiplier()===e.multiplier())}inMilliseconds(e=Date.now()){if(!this.isValid()||this.isRange())return NaN;if(this.isMonths()){const t=new Date(e);t.setUTCMonth(t.getUTCMonth()+(this.multiplier()||1));return+t-e}const t=this.multiplier();return o[this.kind()]*t}static isEqual(e,t){return e===t||u.parse(e).isEqualTo(u.parse(t))}static parseExt(e){e=(e+"").toUpperCase().split(",")[0];let t=n.exec(e);return null!==t?"H"===t[2]?{interval:new u(a.Minutes,60*_(t[1])),guiResolutionKind:s.Hours}:{interval:new u(l[t[2]],_(t[1])),guiResolutionKind:l[t[2]]}:(t=r.exec(e),null!==t?{interval:new u(a.Minutes,_(t[1])),guiResolutionKind:a.Minutes}:{interval:new u(a.Invalid,0),guiResolutionKind:a.Invalid})}static parse(e){return u.parseExt(e).interval}static kind(e){return u.parse(e).kind()}static isValid(e){return u.parse(e).isValid()}static isDWM(e){return u.parse(e).isDWM()}static isIntraday(e){return u.parse(e).isIntraday()}static isSeconds(e){return u.parse(e).isSeconds()}static isMinutes(e){return u.parse(e).isMinutes()}static isMinuteHours(e){return u.parse(e).isMinuteHours()}static isDays(e){return u.parse(e).isDays()}static isWeeks(e){return u.parse(e).isWeeks()}static isMonths(e){return u.parse(e).isMonths()}static isRange(e){return u.parse(e).isRange()}static isTicks(e){return u.parse(e).isTicks()}static isTimeBased(e){return u.parse(e).isTimeBased()}static normalize(e){const t=u.parse(e);return t.isValid()?t.value():null}}function _(e){return 0===e.length?1:parseInt(e,10)}},339315:(e,t,i)=>{"use strict";i.r(t),i.d(t,{SERIES_STATUS_TEXT:()=>v,STATUS_CALCULATION_ERROR:()=>m,STATUS_DELAYED:()=>_,STATUS_DELAYED_STREAMING:()=>d,STATUS_EOD:()=>c,STATUS_ERROR:()=>h,STATUS_INVALID_SYMBOL:()=>o,STATUS_LOADING:()=>a,STATUS_NO_BARS:()=>g,STATUS_OFFLINE:()=>n,STATUS_PULSE:()=>u,STATUS_READY:()=>s,
STATUS_REPLAY:()=>p,STATUS_RESOLVING:()=>r,STATUS_SNAPSHOT:()=>l,STATUS_UNSUPPORTED_RESOLUTION:()=>f,STYLE_AREA:()=>k,STYLE_BARS:()=>y,STYLE_BASELINE:()=>D,STYLE_CANDLES:()=>S,STYLE_COLUMNS:()=>C,STYLE_HEIKEN_ASHI:()=>R,STYLE_HILO:()=>I,STYLE_HLC_AREA:()=>U,STYLE_HOLLOW_CANDLES:()=>O,STYLE_KAGI:()=>x,STYLE_LINE:()=>T,STYLE_LINE_WITH_MARKERS:()=>P,STYLE_PB:()=>A,STYLE_PNF:()=>M,STYLE_RANGE:()=>L,STYLE_RENKO:()=>E,STYLE_SHORT_NAMES:()=>V,STYLE_STEPLINE:()=>F,SYMBOL_STRING_DATA:()=>N,chartStylesWithAttachedStudies:()=>B,seriesLoadingStatuses:()=>b,seriesReadyStatuses:()=>w});const n=0,r=1,a=2,s=3,o=4,l=5,c=6,u=7,_=8,d=9,g=10,p=11,h=12,m=13,f=14,w=new Set([3,6,7,8,9,11]),b=new Set([1,2]),v={[n]:"connecting",[r]:"loading",[a]:"loading",[s]:"realtime",[o]:"invalid",[l]:"snapshot",[c]:"endofday",[u]:"endofday",[_]:"delayed",[d]:"delayed_streaming",[g]:"forbidden",[p]:"replay",[h]:"error",[m]:"calculation_error",[f]:"unsupported_resolution"},y=0,S=1,T=2,k=3,E=4,x=5,M=6,A=7,R=8,O=9,D=10,L=11,I=12,C=13,P=14,F=15,U=16,V={0:"bar",1:"candle",9:"hollowCandle",2:"line",14:"lineWithMarkers",15:"stepline",3:"area",16:"hlcArea",4:"renko",7:"pb",5:"kagi",6:"pnf",8:"ha",10:"baseline",11:"range",12:"hilo",13:"column",17:"volFootprint",18:"tpo",19:"volCandles"},N={4:{type:"BarSetRenko@tv-prostudies",basicStudyVersion:73},7:{type:"BarSetPriceBreak@tv-prostudies",basicStudyVersion:34},5:{type:"BarSetKagi@tv-prostudies",basicStudyVersion:73},6:{type:"BarSetPnF@tv-prostudies",basicStudyVersion:73},8:{type:"BarSetHeikenAshi@tv-basicstudies",basicStudyVersion:60},11:{type:"BarSetRange@tv-basicstudies",basicStudyVersion:72},17:{type:"Footprint@tv-volumebyprice",basicStudyVersion:104},18:{type:"TPOPeriodic@tv-volumebyprice",basicStudyVersion:104}},B=[17,18]},9757:(e,t,i)=>{i(778785).setClasses();var n=i(49336).whenDocumentReady,r=i(663261).handleTVLinksClick;n((()=>{r()}))},255453:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CUSTOM_SUFFIX:()=>o,EA_SUFFIX:()=>s,TRIAL_SUFFIX:()=>a,billingCycleToMonth:()=>S,billingCycleToTimeUnit:()=>l,billingPeriodText:()=>_,countDiscountByBillingCycle:()=>v,countPriceIncludeExtraDays:()=>y,floor0:()=>E,getDiscountFromEarlyAccess:()=>h,getDiscountProductId:()=>m,getPlanName:()=>R,getProductForTrial:()=>p,getReadableCycle:()=>c,getReadableNumericCycle:()=>u,getRelativeAmountOfDaysFromBillingCycle:()=>b,humanizeCardPlan:()=>w,humanizeProPlan:()=>f,isEarlyAccess:()=>d,isOldUser:()=>O,isTrialProduct:()=>g,round0:()=>k,round1or0:()=>M,round2:()=>T,round2or0:()=>x,roundMinimal:()=>A});i(586463);var n=i(444372),r=i(746133);const a="_trial",s="_discount",o="_custom";function l(e){return{y:n.t(null,{plural:"years",count:1},i(870659)),m:n.t(null,{plural:"months",count:1},i(99062)),"3m":n.t(null,void 0,i(252656)),"2y":n.t(null,void 0,i(943350))}[e]}function c(e){return{m:n.t(null,void 0,i(438144)),y:n.t(null,void 0,i(739048)),"3m":n.t(null,void 0,i(490227)),"2y":n.t(null,void 0,i(565851))}[e]||""}function u(e){return{[r.BillingCycle.Monthly]:n.t(null,void 0,i(438144)),[r.BillingCycle.OneYear]:n.t(null,void 0,i(187534)),
[r.BillingCycle.ThreeMonths]:n.t(null,void 0,i(490227)),[r.BillingCycle.TwoYears]:n.t(null,void 0,i(122354))}[e]||""}function _(e){var t;return null!==(t={y:n.t(null,void 0,i(304183)),m:n.t(null,void 0,i(432950)),"2y":n.t(null,void 0,i(89571))}[e])&&void 0!==t?t:""}function d(e){return/\d{0,2}_discount$/.test(e)}function g(e){return new RegExp(a+"$").test(e)}function p(e){return e.split(a)[0]}function h(e){const t=e.match(new RegExp("^(d{0,2})"+s+"$"));return t?+t[1]||50:0}function m(e,t,i){return`${e}_${t}${i}`}function f(e,t){let r=e;switch(e){case"free":r="Basic";break;case"pro":r="Essential";break;case"pro_realtime":r="Plus";break;case"pro_premium":r="Premium";break;case"pro_expert":r="Expert";break;case"pro_realtime_expert":r="Elite";break;case"pro_premium_expert":r="Ultimate"}return t&&(r+=" "+n.t(null,void 0,i(679372))),r}function w(e){let t=e;switch(e){case"pro":t="Essential";break;case"pro_realtime":t="Plus";break;case"pro_premium":t="Premium";break;case"pro_expert":t="Expert";break;case"pro_realtime_expert":t="Elite";break;case"pro_premium_expert":t="Ultimate";break;case"free":t="Basic"}return t}function b(e,t){const i=t||new Date,n=S(e),r=i.getMonth()+n,a=new Date(new Date(i).setMonth(r));return a.getMonth()>r%12&&a.setDate(0),function(e,t){const i=t.getTime()-e.getTime();return Math.round(i/1e3/60/60/24)}(i,a)}function v(e,t,i){return Math.round((t-e)*S(i))}function y(e,t,i=0){return e/(30*S(t)+i)*(30*S(r.BillingCycle.Monthly))}function S(e){switch(e){case r.BillingCycle.TwoYears:return 24;case r.BillingCycle.OneYear:return 12;case r.BillingCycle.ThreeMonths:return 3;default:return 1}}function T(e){return(Math.round(100*e)/100).toFixed(2)}function k(e){const t=Math.round(100*e)/100;return Math.round(t).toFixed(0)}function E(e){return Math.floor(e).toString()}function x(e){const t=Math.round(100*e)/100,i=Math.round(t);return Math.abs(t-i)>0?t.toFixed(2):i.toFixed(0)}function M(e){return Number.isInteger(e)?e.toFixed(0):(Math.round(10*e)/10).toFixed(1)}function A(e){const t=Math.round(100*e)/100,i=Math.round(10*e)/10,n=Math.round(t);return Math.abs(t-n)>0?Math.abs(t-i)>0?t.toFixed(2):i.toFixed(1):n.toFixed(0)}function R(e){const t=n.t(null,void 0,i(133011));if(g(e)){const i=f(p(e));return t.format({proPlanName:i})}return f(e)}function O(){return!!window.user.date_joined&&new Date(window.user.date_joined).getTime()<new Date("2022-05-26").getTime()}},919476:(e,t,i)=>{"use strict";i.d(t,{decodeHTMLEntities:()=>l,htmlEscape:()=>c,removeTags:()=>u});const n=/[<"'&>]/g,r=e=>`&#${e.charCodeAt(0)};`,a={"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&","&#60;":"<","&#62;":">","&#34;":'"',"&#39;":"'","&#039;":"'","&#38;":"&"},s=Object.assign({},...Object.entries(a).map((([e,t])=>({[t]:e})))),o=new RegExp(Object.keys(a).join("|"),"g");new RegExp(Object.keys(s).join("|"),"g");function l(e){return e.replace(o,(e=>a[e]||e))}function c(e){return e.replace(n,r)}function u(e=""){return e.replace(/(<([^>]+)>)/gi,"")}},49336:(e,t,i)=>{"use strict";function n(e,t=!1){
"loading"!==document.readyState?t?setTimeout((()=>e()),1):e():document.addEventListener("DOMContentLoaded",(()=>e()))}i.d(t,{whenDocumentReady:()=>n});new Promise((e=>{n(e)}))},920093:(e,t,i)=>{"use strict";i.d(t,{extractWidgetSettings:()=>r});const n={whitelabel:!0,permissionOverrides:!0};function r(e,t=[],i){return function(e,t,i,r=[],a){const s=i.slice(1),o=decodeURIComponent(s);let l={};try{""!==o&&(l=JSON.parse(o),void 0!==a&&a(e,l),Object.keys(l).forEach((e=>{(n[e]||r.includes(e))&&delete l[e]})))}catch(e){l={},console.warn("Hash params parsing error! Hash params ignored.")}const c=t.slice(1),u=t.includes("%")?decodeURIComponent(c):t,_=new URLSearchParams(u);let d={};try{_.forEach(((e,t)=>{r.includes(t)||(d[t]=e)})),void 0!==a&&a(e,d)}catch(e){d={},console.warn("Search query params parsing error! Search query params ignored.")}return Object.assign({},e,l,d)}(e,location.search,location.hash,t,i)}}}]);