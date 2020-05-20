(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{238:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Tessera configuration varies by version as new features are added or changed. Below is a list of sample configurations that show a possible structure. There may be more features that are not included in the sample; a full list of features can be found "),a("a",{attrs:{href:"../Configuration%20Overview"}},[t._v("here")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"samples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#samples","aria-hidden":"true"}},[t._v("↳")]),t._v(" Samples")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Version")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"../Tessera%20v0.10.3%20sample%20settings"}},[t._v("0.10.3")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"../Tessera%20v0.10.2%20sample%20settings"}},[t._v("0.10.2")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"../Tessera%20v0.10.0%20sample%20settings"}},[t._v("0.10")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"../Tessera%20v0.9%20sample%20settings"}},[t._v("0.9")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"../Tessera%20v0.8%20sample%20settings"}},[t._v("0.8")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"../Tessera%20v0.7.3%20sample%20settings"}},[t._v("0.7.3")])])])])]),t._v(" "),a("h2",{attrs:{id:"changelist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelist","aria-hidden":"true"}},[t._v("↳")]),t._v(" Changelist")]),t._v(" "),a("h3",{attrs:{id:"_0-10-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-10-3","aria-hidden":"true"}},[t._v("↳")]),t._v(" 0.10.3")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("code",[t._v("keys.azureKeyVaultConfig")]),t._v(" and "),a("code",[t._v("keys.hashicorpKeyVaultConfig")]),t._v(" fields are now deprecated.  Instead, the generic "),a("code",[t._v("keys.keyVaultConfig")]),t._v(" should be used.  See "),a("a",{attrs:{href:"../Keys"}},[t._v("Keys Config")]),t._v(" for more info.")])]),t._v(" "),a("h3",{attrs:{id:"_0-10-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-10-2","aria-hidden":"true"}},[t._v("↳")]),t._v(" 0.10.2")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("The "),a("code",[t._v("keys.keyData.passwords")]),t._v(" field is no longer supported.  Instead, use "),a("code",[t._v("keys.keyData.passwordFile")]),t._v(" or utilise the "),a("a",{attrs:{href:"../Keys#providing-key-passwords-at-runtime"}},[t._v("CLI password prompt")]),t._v(" when starting the node.")])]),t._v(" "),a("li",[a("p",[t._v("Added configuration to choose alternative curves/symmetric ciphers. If no encryptor configuration is provided it will default to NaCl (see [Supporting alternative curves in Tessera](../Configuration Overview#supporting-alternative-curves-in-tessera) for more details).")]),t._v(" "),a("p",[t._v("e.g.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encryptor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"symmetricCipher"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AES/GCM/NoPadding"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ellipticCurve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secp256r1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nonceLength"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"24"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sharedKeyLength"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"32"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"_0-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-10","aria-hidden":"true"}},[t._v("↳")]),t._v(" 0.10")]),t._v(" "),a("ul",[a("li",[t._v("Added feature-toggle for remote key validation.  Disabled by default."),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"features"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enableRemoteKeyValidation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"_0-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-9","aria-hidden":"true"}},[t._v("↳")]),t._v(" 0.9")]),t._v(" "),a("ul",[a("li",[t._v("Collapsed server socket definitions into a single property "),a("code",[t._v("serverAddress")]),t._v(", e.g."),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serverConfigs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serverSocket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hostName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            ...\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v("becomes"),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serverConfigs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serverAddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:9001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            ...\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"_0-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-8","aria-hidden":"true"}},[t._v("↳")]),t._v(" 0.8")]),t._v(" "),a("ul",[a("li",[t._v("Added modular server configurations")])])])}),[],!1,null,null,null);s.default=r.exports}}]);