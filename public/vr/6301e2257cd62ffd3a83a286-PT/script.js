(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_58244715_111F_2397_4179_E2EE36DFF54F.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_6233FD33_07E1_1D2F_418E_C6F77262A9D3"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "class": "Player",
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_166713B0_071F_EC13_4139_32FA3C91F400_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.71,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5DEDAA14_111F_2D95_41AA_BEEAAEFE4BDF"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_t.jpg",
 "overlays": [
  "this.overlay_1A191D4F_010F_3FFF_4163_B97341F84144",
  "this.overlay_1A4C4DBA_010D_1EA1_4164_4107D0014D63",
  "this.overlay_0655FEF3_1129_E293_419A_2F0EEEFCFAC1",
  "this.overlay_23E294A4_1129_E6B5_41A9_561D3B741A4A"
 ],
 "partial": false,
 "pitch": 0,
 "label": "Lobby-01",
 "id": "panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1",
   "backwardYaw": -31.13,
   "class": "AdjacentPanorama",
   "yaw": -116.7,
   "distance": 1
  },
  {
   "panorama": "this.panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A",
   "backwardYaw": 2.45,
   "class": "AdjacentPanorama",
   "yaw": 89.38,
   "distance": 1
  },
  {
   "panorama": "this.panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0",
   "backwardYaw": 112.74,
   "class": "AdjacentPanorama",
   "yaw": -67.79,
   "distance": 1
  },
  {
   "panorama": "this.panorama_161F6FAF_071E_540C_4186_EB947103F96E",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5AF1291A_111F_2F9D_413F_553D4573A34C"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_t.jpg",
 "overlays": [
  "this.overlay_329D1A21_0720_E72B_418F_A4B0735C9045",
  "this.overlay_313920B6_0723_6328_4194_A31E730FD95A",
  "this.overlay_31C8FA70_0723_2728_4192_AA915F17C053",
  "this.overlay_39731A40_0723_2769_4167_E6BE263A63D0"
 ],
 "partial": false,
 "pitch": 0,
 "label": "right bed 2",
 "id": "panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_165B1505_071E_D5FC_4195_E056A51A9988",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60",
   "backwardYaw": 50.05,
   "class": "AdjacentPanorama",
   "yaw": -58.95,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A82B90A_111F_2F7D_41AD_8864483ED807"
},
{
 "thumbnailUrl": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_t.jpg",
 "class": "Panorama",
 "label": "Receotion",
 "id": "panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA",
   "backwardYaw": 12.33,
   "class": "AdjacentPanorama",
   "yaw": -144.67,
   "distance": 1
  },
  {
   "panorama": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
   "backwardYaw": -116.7,
   "class": "AdjacentPanorama",
   "yaw": -31.13,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1702045A_011D_2DE1_415E_1F2CCD95F7ED",
  "this.overlay_162CF28E_0114_E560_4150_38EC56891AA3"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_t.jpg",
 "overlays": [
  "this.overlay_17C58195_0723_65EB_419A_665D62E25305",
  "this.overlay_1DD18519_0763_2D18_4191_B280BB0B13B0",
  "this.overlay_1D37BF8C_0763_3DF9_4182_F03AABDD7560"
 ],
 "partial": false,
 "pitch": 0,
 "label": "lounge 6",
 "id": "panorama_164187F6_071E_741C_4199_F4336C38AD75",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_151963D8_071E_6C13_419B_1D0FFE4F1892",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16D98604_071E_57FC_419B_391FE4D3C5BE",
   "backwardYaw": -55.28,
   "class": "AdjacentPanorama",
   "yaw": 149.05,
   "distance": 1
  },
  {
   "panorama": "this.panorama_161F6FAF_071E_540C_4186_EB947103F96E",
   "backwardYaw": 8.65,
   "class": "AdjacentPanorama",
   "yaw": 51.96,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -127.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5DD2DA33_111F_2D93_4186_816C7892BE71"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A5AF8DB_111F_2E93_41AD_36A013278F3F"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 148.87,
  "pitch": 0,
  "hfov": 120
 },
 "class": "PanoramaCamera",
 "id": "camera_5D7CB968_111F_2FBD_41AD_2A592E2CDD71"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B2777D2_111F_22ED_4193_43DED5D58D8D"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -115.69,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5C041A91_111F_2D6F_41B0_35435C76DBEE"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.33,
  "pitch": 0,
  "hfov": 120
 },
 "class": "PanoramaCamera",
 "id": "camera_5C905B0E_111F_2375_4196_7EFD116D18DB"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_t.jpg",
 "overlays": [
  "this.overlay_1A3974A7_0761_2328_4194_C474D350170B",
  "this.overlay_1AF1C439_0760_E31B_4189_D4829B0A88A4",
  "this.overlay_1AA0345B_0761_2318_4188_01F618325998",
  "this.overlay_1A140BCA_0761_2579_4186_429F8404571E"
 ],
 "partial": false,
 "pitch": 0,
 "label": "lobby  03",
 "id": "panorama_16C7D41B_071E_3415_4199_20E506130A47",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85",
   "backwardYaw": 122.43,
   "class": "AdjacentPanorama",
   "yaw": -85.69,
   "distance": 1
  },
  {
   "panorama": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_17E95D19_071E_3414_4191_49DD2AA1F86C",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_166FD91F_071E_3C0C_417F_E2148902B527_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.7,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5F44FB9A_111F_229D_419F_54CD5984DD2E"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -40.83,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5C6F9AB0_111F_22AD_41B0_66F586BBA000"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.26,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5D615987_111F_2F73_41A6_8CC504A8B772"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5AE7F91A_111F_2F9D_41A4_C35EAF85B56E"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 58.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B4AE820_111F_2DAD_41AF_D886D6B0B1C8"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.86,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5D28D949_111F_2FFF_41A2_BAA6851E1F53"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5CC86B4C_111F_23F5_4192_47CB97677BFD"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_t.jpg",
 "overlays": [
  "this.overlay_47A23F1A_0721_1D19_414F_273E3DA422EE",
  "this.overlay_46457C91_0721_23EB_4184_7D7083CBBE84",
  "this.overlay_46293788_0720_EDF9_4191_DE74A4831EBA"
 ],
 "partial": false,
 "pitch": 0,
 "label": "left bed 1",
 "id": "panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_17E95D19_071E_3414_4191_49DD2AA1F86C",
   "backwardYaw": 105.06,
   "class": "AdjacentPanorama",
   "yaw": 143.21,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16760FD2_071F_F414_418C_32424D70B55D",
   "backwardYaw": 144.05,
   "class": "AdjacentPanorama",
   "yaw": 16.95,
   "distance": 1
  },
  {
   "panorama": "this.panorama_166713B0_071F_EC13_4139_32FA3C91F400",
   "backwardYaw": 73.95,
   "class": "AdjacentPanorama",
   "yaw": -10.25,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5AAE88EB_111F_2EB3_41AB_8637D6F84AE4"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16760FD2_071F_F414_418C_32424D70B55D_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16E22D78_071E_D413_4179_8F54B0029004_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.04,
  "pitch": -0.36,
  "hfov": 120
 },
 "class": "PanoramaCamera",
 "id": "panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5C4DBACF_111F_22F3_41AC_B25C2165ED95"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_t.jpg",
 "overlays": [
  "this.overlay_3A8E7BC4_0721_2569_4188_F5D726F35100",
  "this.overlay_395CCEDC_0721_1F19_4197_E17CA3586D30",
  "this.overlay_393C2495_0721_63EB_418F_E26B66F4D591"
 ],
 "partial": false,
 "pitch": 0,
 "label": "right bath 2",
 "id": "panorama_1666C8FA_071E_DC14_4180_07B8769A38A3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_165F8ECF_071E_F40D_4192_142F38F76643",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_165B1505_071E_D5FC_4195_E056A51A9988",
   "backwardYaw": -8.89,
   "class": "AdjacentPanorama",
   "yaw": 67.88,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16E22D78_071E_D413_4179_8F54B0029004",
   "backwardYaw": -69.54,
   "class": "AdjacentPanorama",
   "yaw": -113.09,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_t.jpg",
 "overlays": [
  "this.overlay_4E7D3714_0723_6EE9_4181_5A092EB8B099",
  "this.overlay_4E0B175A_0723_2D19_4191_499DEC321048",
  "this.overlay_4EE22D87_0720_FDE8_4174_923C68FA2FF0",
  "this.overlay_4EBEBEC9_0721_1F7B_4183_C7AB0D6A1781",
  "this.overlay_4DF3912E_0721_2538_4193_0AF3E621CD33"
 ],
 "partial": false,
 "pitch": 0,
 "label": "left bed 5",
 "id": "panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16F33FDC_071F_D413_4160_087E2642BFAD",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_166713B0_071F_EC13_4139_32FA3C91F400",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1694C793_071F_D415_418D_A3146C97D5FB",
   "backwardYaw": -52.19,
   "class": "AdjacentPanorama",
   "yaw": 64.31,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -128.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5D46A9A7_111F_2EB4_41A8_845A1DB7AC55"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.86,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5FBB9BAA_111F_22BD_41B0_AB2C637DF4D7"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5F01DB7B_111F_2393_418E_72FD2C5CAB98"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_58844764_111F_23B4_417F_F5E03952AEA0"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_t.jpg",
 "overlays": [
  "this.overlay_0873BB4C_0721_2579_4186_64B8F7E699E5",
  "this.overlay_101F3C53_0763_236F_418B_468FBF5EBEF5",
  "this.overlay_12A682BA_0763_6719_416B_E35022220C02",
  "this.overlay_11EFEDF7_0763_3D16_4195_C874505B0BDD"
 ],
 "partial": false,
 "pitch": 0,
 "label": "lounge 3",
 "id": "panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA",
   "backwardYaw": 41.68,
   "class": "AdjacentPanorama",
   "yaw": -24.82,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16D98604_071E_57FC_419B_391FE4D3C5BE",
   "backwardYaw": 34.3,
   "class": "AdjacentPanorama",
   "yaw": -21.42,
   "distance": 1
  },
  {
   "panorama": "this.panorama_164187F6_071E_741C_4199_F4336C38AD75",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_161F6FAF_071E_540C_4186_EB947103F96E",
   "backwardYaw": -37.14,
   "class": "AdjacentPanorama",
   "yaw": 52.74,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5C151A72_111F_2DAC_4161_FD5D0E7C64FC"
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "camera": "this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_9D491A23_9732_35F7_41D3_93A5EE521A29",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16B8D710_071F_D414_419B_1621A6932E48_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_16B8D710_071F_D414_419B_1621A6932E48",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_167C5B19_071F_DC15_4192_57A29362BD86_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_167C5B19_071F_DC15_4192_57A29362BD86",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16716EB7_071F_D41C_4183_6E762367299C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_16716EB7_071F_D41C_4183_6E762367299C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16CEA6D4_071F_F413_4156_44FE2294C714_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_16CEA6D4_071F_F413_4156_44FE2294C714",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16760FD2_071F_F414_418C_32424D70B55D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_16760FD2_071F_F414_418C_32424D70B55D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_166713B0_071F_EC13_4139_32FA3C91F400_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_166713B0_071F_EC13_4139_32FA3C91F400",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1694C793_071F_D415_418D_A3146C97D5FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.panorama_1694C793_071F_D415_418D_A3146C97D5FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "media": "this.panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16F33FDC_071F_D413_4160_087E2642BFAD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "media": "this.panorama_16F33FDC_071F_D413_4160_087E2642BFAD",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16C7D41B_071E_3415_4199_20E506130A47_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "media": "this.panorama_16C7D41B_071E_3415_4199_20E506130A47",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "media": "this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "media": "this.panorama_17E95D19_071E_3414_4191_49DD2AA1F86C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "media": "this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "media": "this.panorama_16D98604_071E_57FC_419B_391FE4D3C5BE",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "media": "this.panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_161F6FAF_071E_540C_4186_EB947103F96E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "media": "this.panorama_161F6FAF_071E_540C_4186_EB947103F96E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "media": "this.panorama_151963D8_071E_6C13_419B_1D0FFE4F1892",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_164187F6_071E_741C_4199_F4336C38AD75_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "media": "this.panorama_164187F6_071E_741C_4199_F4336C38AD75",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "media": "this.panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "media": "this.panorama_1676D099_071E_6C15_4192_C1DBA77B55E1",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16686499_071E_5414_4190_5920383D49E2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "media": "this.panorama_16686499_071E_5414_4190_5920383D49E2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "media": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16B47D39_071E_5415_4157_686CAFB8196A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "media": "this.panorama_16B47D39_071E_5415_4157_686CAFB8196A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1626B11B_071E_2C15_4181_6448907DED83_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "media": "this.panorama_1626B11B_071E_2C15_4181_6448907DED83",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_169C44EE_071E_340C_4196_FAB80239034D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "media": "this.panorama_169C44EE_071E_340C_4196_FAB80239034D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_166FD91F_071E_3C0C_417F_E2148902B527_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "media": "this.panorama_166FD91F_071E_3C0C_417F_E2148902B527",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "media": "this.panorama_16CA2D23_071E_3434_417C_3615B71C4DFD",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16964134_071E_2C1C_4192_03D27D395FFD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "media": "this.panorama_16964134_071E_2C1C_4192_03D27D395FFD",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_165B1505_071E_D5FC_4195_E056A51A9988_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "media": "this.panorama_165B1505_071E_D5FC_4195_E056A51A9988",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "media": "this.panorama_1666C8FA_071E_DC14_4180_07B8769A38A3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16E22D78_071E_D413_4179_8F54B0029004_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42)",
   "media": "this.panorama_16E22D78_071E_D413_4179_8F54B0029004",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 43)",
   "media": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 43, 44)",
   "media": "this.panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 44, 45)",
   "media": "this.panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_165F8ECF_071E_F40D_4192_142F38F76643_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 45, 46)",
   "media": "this.panorama_165F8ECF_071E_F40D_4192_142F38F76643",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 46, 0)",
   "media": "this.panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_camera"
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_9D491A23_9732_35F7_41D3_93A5EE521A29",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16B8D710_071F_D414_419B_1621A6932E48_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_16B8D710_071F_D414_419B_1621A6932E48",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_167C5B19_071F_DC15_4192_57A29362BD86_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_167C5B19_071F_DC15_4192_57A29362BD86",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16716EB7_071F_D41C_4183_6E762367299C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_16716EB7_071F_D41C_4183_6E762367299C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16CEA6D4_071F_F413_4156_44FE2294C714_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_16CEA6D4_071F_F413_4156_44FE2294C714",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16760FD2_071F_F414_418C_32424D70B55D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_16760FD2_071F_F414_418C_32424D70B55D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_166713B0_071F_EC13_4139_32FA3C91F400_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_166713B0_071F_EC13_4139_32FA3C91F400",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1694C793_071F_D415_418D_A3146C97D5FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_1694C793_071F_D415_418D_A3146C97D5FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16F33FDC_071F_D413_4160_087E2642BFAD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_16F33FDC_071F_D413_4160_087E2642BFAD",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16C7D41B_071E_3415_4199_20E506130A47_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_16C7D41B_071E_3415_4199_20E506130A47",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_17E95D19_071E_3414_4191_49DD2AA1F86C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_16D98604_071E_57FC_419B_391FE4D3C5BE",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_161F6FAF_071E_540C_4186_EB947103F96E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_161F6FAF_071E_540C_4186_EB947103F96E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_151963D8_071E_6C13_419B_1D0FFE4F1892",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_164187F6_071E_741C_4199_F4336C38AD75_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_164187F6_071E_741C_4199_F4336C38AD75",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_1676D099_071E_6C15_4192_C1DBA77B55E1",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16686499_071E_5414_4190_5920383D49E2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_16686499_071E_5414_4190_5920383D49E2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16B47D39_071E_5415_4157_686CAFB8196A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "media": "this.panorama_16B47D39_071E_5415_4157_686CAFB8196A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1626B11B_071E_2C15_4181_6448907DED83_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "media": "this.panorama_1626B11B_071E_2C15_4181_6448907DED83",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_169C44EE_071E_340C_4196_FAB80239034D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "media": "this.panorama_169C44EE_071E_340C_4196_FAB80239034D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_166FD91F_071E_3C0C_417F_E2148902B527_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "media": "this.panorama_166FD91F_071E_3C0C_417F_E2148902B527",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "media": "this.panorama_16CA2D23_071E_3434_417C_3615B71C4DFD",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16964134_071E_2C1C_4192_03D27D395FFD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "media": "this.panorama_16964134_071E_2C1C_4192_03D27D395FFD",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_165B1505_071E_D5FC_4195_E056A51A9988_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "media": "this.panorama_165B1505_071E_D5FC_4195_E056A51A9988",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "media": "this.panorama_1666C8FA_071E_DC14_4180_07B8769A38A3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16E22D78_071E_D413_4179_8F54B0029004_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "media": "this.panorama_16E22D78_071E_D413_4179_8F54B0029004",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "media": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "media": "this.panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "media": "this.panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_165F8ECF_071E_F40D_4192_142F38F76643_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "media": "this.panorama_165F8ECF_071E_F40D_4192_142F38F76643",
   "class": "PanoramaPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 0)",
   "media": "this.panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_camera"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B3A97C2_111F_22ED_4199_82030C1F8704"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.96,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B33C7C2_111F_22ED_419A_7B12B7D48EA1"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_t.jpg",
 "overlays": [
  "this.overlay_0ADE7200_0721_26E9_410C_43F1F185C000",
  "this.overlay_319BD1AA_1127_3EBD_4194_18FCA18F00C5",
  "this.overlay_2D6F115B_1129_3F93_41A4_2470BDA4733B",
  "this.overlay_5770E0DD_111B_DE97_41A2_67FD734AA6AC"
 ],
 "partial": false,
 "pitch": 0,
 "label": "lounge 4",
 "id": "panorama_161F6FAF_071E_540C_4186_EB947103F96E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_17E95D19_071E_3414_4191_49DD2AA1F86C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA",
   "backwardYaw": 14.84,
   "class": "AdjacentPanorama",
   "yaw": 4.19,
   "distance": 1
  },
  {
   "panorama": "this.panorama_164187F6_071E_741C_4199_F4336C38AD75",
   "backwardYaw": 51.96,
   "class": "AdjacentPanorama",
   "yaw": 8.65,
   "distance": 1
  },
  {
   "panorama": "this.panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC",
   "backwardYaw": 52.74,
   "class": "AdjacentPanorama",
   "yaw": -37.14,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_t.jpg",
 "overlays": [
  "this.overlay_1815BA09_0114_E563_4169_4BE86BB4C1EA"
 ],
 "partial": false,
 "pitch": 0,
 "label": "01",
 "id": "panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1",
   "backwardYaw": -144.67,
   "class": "AdjacentPanorama",
   "yaw": 12.33,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5F677B8B_111F_2373_4150_0F6E50D8FE4A"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B01B7F1_111F_22AF_4194_5E674BA1B0DA"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_t.jpg",
 "overlays": [
  "this.overlay_52D3923E_07E1_E718_4192_65966A73B1A6"
 ],
 "partial": false,
 "pitch": 0,
 "label": "left balcony view 7",
 "id": "panorama_167C5B19_071F_DC15_4192_57A29362BD86",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1694C793_071F_D415_418D_A3146C97D5FB",
   "backwardYaw": -67.18,
   "class": "AdjacentPanorama",
   "yaw": -65.29,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5AD4D92A_111F_2FBC_417B_C9931F58AFF0"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_58E6C793_111F_2293_41AF_36DE3E0274D5"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16B47D39_071E_5415_4157_686CAFB8196A_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_t.jpg",
 "overlays": [
  "this.overlay_35499C6B_0721_233F_4189_25C368E1DB56",
  "this.overlay_3583A336_0721_6529_4197_C7A44F7CC9B6",
  "this.overlay_343EE12C_0721_2539_419D_07C46C4EBB4C"
 ],
 "partial": false,
 "pitch": 0,
 "label": "m bath 2",
 "id": "panorama_1676D099_071E_6C15_4192_C1DBA77B55E1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16686499_071E_5414_4190_5920383D49E2",
   "backwardYaw": -84.58,
   "class": "AdjacentPanorama",
   "yaw": 133.05,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16B47D39_071E_5415_4157_686CAFB8196A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967",
   "backwardYaw": -30.82,
   "class": "AdjacentPanorama",
   "yaw": 46.68,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_t.jpg",
 "overlays": [
  "this.overlay_30428F2E_0723_1D39_4190_D80844768516",
  "this.overlay_30FEE7E7_0721_2D37_4195_ED2E4FD5B8EC"
 ],
 "partial": false,
 "pitch": 0,
 "label": "right bed 3",
 "id": "panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_165F8ECF_071E_F40D_4192_142F38F76643",
   "backwardYaw": 78.55,
   "class": "AdjacentPanorama",
   "yaw": -28.06,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60",
   "backwardYaw": -28.38,
   "class": "AdjacentPanorama",
   "yaw": 37.09,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5ACBB939_111F_2F9F_4198_977BF43C7214"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -136.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5883C773_111F_2393_4196_3D3D27764C7B"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A7548BC_111F_2E95_41A1_A1643972ADE0"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.62,
  "pitch": 5.23
 },
 "class": "PanoramaCamera",
 "id": "panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -157.69,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A2C689D_111F_2E97_41AA_1ECAE499D47E"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5CA1AB0E_111F_2375_4187_432473783207"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -57.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5C5EAAC0_111F_22ED_4197_E4A93CF10A5E"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_t.jpg",
 "overlays": [
  "this.overlay_2493065D_0761_6F1B_419A_61CF4BFF019F"
 ],
 "partial": false,
 "pitch": 0,
 "label": "kitchen 2",
 "id": "panorama_16B8D710_071F_D414_419B_1621A6932E48",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209",
   "backwardYaw": -13.22,
   "class": "AdjacentPanorama",
   "yaw": -23.19,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_t.jpg",
 "overlays": [
  "this.overlay_1E78C907_013D_276F_4152_45E57FE2D8C6"
 ],
 "partial": false,
 "pitch": 0,
 "label": "Gym",
 "id": "panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
   "backwardYaw": -67.79,
   "class": "AdjacentPanorama",
   "yaw": 112.74,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 160.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5BA4383F_111F_2D93_41B0_CD156258114B"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_t.jpg",
 "overlays": [
  "this.overlay_4AC58749_07E3_2D7B_4197_15266FE74A4B",
  "this.overlay_4A7B172C_07E3_6D39_4196_8E0994F22676",
  "this.overlay_49C0189E_07E3_6319_4198_9027AF485AC2",
  "this.overlay_4912F7B9_07E3_2D18_4196_56DF286BF04C"
 ],
 "partial": false,
 "pitch": 0,
 "label": "left bed 6",
 "id": "panorama_16F33FDC_071F_D413_4160_087E2642BFAD",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_167C5B19_071F_DC15_4192_57A29362BD86",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_166713B0_071F_EC13_4139_32FA3C91F400",
   "backwardYaw": 3.07,
   "class": "AdjacentPanorama",
   "yaw": 125.03,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1694C793_071F_D415_418D_A3146C97D5FB",
   "backwardYaw": -7.04,
   "class": "AdjacentPanorama",
   "yaw": -101.42,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5DFE9A04_111F_2D75_41A9_E95FF3494055"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5BBE6830_111F_2DAC_4195_0BE2B8311EEA"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 114.71,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5C302A52_111F_2DED_4171_17FF8035918F"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.33,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5BE9986E_111F_2DB5_4190_5D8A7AFB9AA9"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_58C7B7B2_111F_22AD_41AB_ECBB7D108374"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_164187F6_071E_741C_4199_F4336C38AD75_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.13,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5CB32AFE_111F_2295_41AB_5A3A676D55BC"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_t.jpg",
 "overlays": [
  "this.overlay_3F8C1C9C_0720_E319_4194_E96AC944AB28",
  "this.overlay_3E5167AD_073F_2D3B_417D_FFA6C593332E",
  "this.overlay_3EFBD737_073F_2D17_4199_430B1EFFC3A5"
 ],
 "partial": false,
 "pitch": 0,
 "label": "right bed 4",
 "id": "panorama_165F8ECF_071E_F40D_4192_142F38F76643",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED",
   "backwardYaw": -28.06,
   "class": "AdjacentPanorama",
   "yaw": 78.55,
   "distance": 1
  },
  {
   "panorama": "this.panorama_165B1505_071E_D5FC_4195_E056A51A9988",
   "backwardYaw": 139.17,
   "class": "AdjacentPanorama",
   "yaw": 165.52,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_t.jpg",
 "overlays": [
  "this.overlay_47FCC4DB_0723_6318_417C_73DD4C590B8E",
  "this.overlay_43B8D429_0723_233B_419B_6C0DC357B74A"
 ],
 "partial": false,
 "pitch": 0,
 "label": "right bath 3",
 "id": "panorama_16E22D78_071E_D413_4179_8F54B0029004",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_169C44EE_071E_340C_4196_FAB80239034D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1666C8FA_071E_DC14_4180_07B8769A38A3",
   "backwardYaw": -113.09,
   "class": "AdjacentPanorama",
   "yaw": -69.54,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5F136B6C_111F_23B4_419C_8D3B0BBBDF41"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5BCEF87E_111F_2D95_4190_6481A56D65DE"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16F33FDC_071F_D413_4160_087E2642BFAD_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_t.jpg",
 "overlays": [
  "this.overlay_2EF58298_0721_6719_416B_F00260332ADE",
  "this.overlay_2E9F4BE2_0721_2528_4183_A3B0BC39148A",
  "this.overlay_2D5C5361_0721_E52B_4182_49BA4E8DFD80",
  "this.overlay_2EB2B090_0721_23E9_419B_69F9D4684C73"
 ],
 "partial": false,
 "pitch": 0,
 "label": "m bed 3",
 "id": "panorama_1626B11B_071E_2C15_4181_6448907DED83",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85",
   "backwardYaw": 43.26,
   "class": "AdjacentPanorama",
   "yaw": -50.72,
   "distance": 1
  },
  {
   "panorama": "this.panorama_169C44EE_071E_340C_4196_FAB80239034D",
   "backwardYaw": -48.78,
   "class": "AdjacentPanorama",
   "yaw": 52.77,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16CA2D23_071E_3434_417C_3615B71C4DFD",
   "backwardYaw": 116.7,
   "class": "AdjacentPanorama",
   "yaw": -33.54,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_t.jpg",
 "overlays": [
  "this.overlay_420868E0_0721_2329_4192_E364E7AC2CEB",
  "this.overlay_42C52CDC_0721_E319_4193_75AD01D607FC",
  "this.overlay_4288EA5B_0721_271F_4179_BD41AE1E8A7D",
  "this.overlay_412AE215_0721_26EB_4188_E1A67E26F272",
  "this.overlay_4C150742_07E1_6D69_415B_C6FFD2261321"
 ],
 "partial": false,
 "pitch": 0,
 "label": "left bed 3",
 "id": "panorama_166713B0_071F_EC13_4139_32FA3C91F400",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16F33FDC_071F_D413_4160_087E2642BFAD",
   "backwardYaw": 125.03,
   "class": "AdjacentPanorama",
   "yaw": 3.07,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16760FD2_071F_F414_418C_32424D70B55D",
   "backwardYaw": -69.82,
   "class": "AdjacentPanorama",
   "yaw": 78.56,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16716EB7_071F_D41C_4183_6E762367299C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1694C793_071F_D415_418D_A3146C97D5FB",
   "backwardYaw": 54.43,
   "class": "AdjacentPanorama",
   "yaw": -63.7,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A",
   "backwardYaw": -10.25,
   "class": "AdjacentPanorama",
   "yaw": 73.95,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1694C793_071F_D415_418D_A3146C97D5FB_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.48,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5C868B1D_111F_2397_418C_AB50E230A607"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -143.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5BD8387E_111F_2D95_4170_6D906F891A5F"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 33.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A11A8AD_111F_2EB4_4190_D1223D118A0D"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_167C5B19_071F_DC15_4192_57A29362BD86_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16686499_071E_5414_4190_5920383D49E2_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -35.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5AB808EB_111F_2EB3_419E_5FCFE44F58E7"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_165B1505_071E_D5FC_4195_E056A51A9988_camera"
},
{
 "thumbnailUrl": "media/map_6AAE1F12_07E0_FEE8_418B_33CA3258D028_t.jpg",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "image": {
  "levels": [
   {
    "url": "media/map_6AAE1F12_07E0_FEE8_418B_33CA3258D028.jpeg",
    "width": 1755,
    "class": "ImageResourceLevel",
    "height": 2482
   },
   {
    "url": "media/map_6AAE1F12_07E0_FEE8_418B_33CA3258D028_lq.jpeg",
    "width": 215,
    "class": "ImageResourceLevel",
    "height": 305,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Appartments Plan 28-1-2021-Model_page-0001",
 "initialZoomFactor": 1,
 "id": "map_6AAE1F12_07E0_FEE8_418B_33CA3258D028",
 "width": 1755,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "height": 2482,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_t.jpg",
 "overlays": [
  "this.overlay_44C1DC72_0721_2329_417C_85356FD4ADE4",
  "this.overlay_43731C78_0721_2319_4194_BA4E942BCDBD",
  "this.overlay_43381B5E_0720_E519_4197_C4EBB8784237"
 ],
 "partial": false,
 "pitch": 0,
 "label": "left bed 2",
 "id": "panorama_16760FD2_071F_F414_418C_32424D70B55D",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16F33FDC_071F_D413_4160_087E2642BFAD",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_166713B0_071F_EC13_4139_32FA3C91F400",
   "backwardYaw": 78.56,
   "class": "AdjacentPanorama",
   "yaw": -69.82,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A",
   "backwardYaw": 16.95,
   "class": "AdjacentPanorama",
   "yaw": 144.05,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5BB1D830_111F_2DAC_4186_A8568C368084"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_161F6FAF_071E_540C_4186_EB947103F96E_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1626B11B_071E_2C15_4181_6448907DED83_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1503985C_071E_3C13_4192_B1C41C9089D4_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A9D58FB_111F_2E93_4183_FE9619072FD4"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_58CCA7B2_111F_22AD_41AF_728A355756EF"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.58,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B74E801_111F_2D6F_4199_198638C1073A"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 132.13,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B9FA84F_111F_2DF3_41A2_F0A28DF129F9"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.94,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5D98C9E5_111F_2EB7_41A6_13B5938FC7C3"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 156.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5DAA59C6_111F_2EF5_4184_FB38B91F1A30"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_t.jpg",
 "overlays": [
  "this.overlay_15037CC2_0727_2368_4175_629A3DFC9BB9",
  "this.overlay_15D50919_0723_251B_417B_92AC53D81417",
  "this.overlay_15C4C5E9_0721_2D3B_4177_D947C210A8BF",
  "this.overlay_1D315C07_076F_62F7_4190_EEDB9A3F1D24",
  "this.overlay_1B8EF66E_0761_2F39_418A_87E08035CEAF",
  "this.overlay_1CE8143A_0761_6318_419D_12A25269B4E8",
  "this.overlay_1CDAA89C_0763_2319_417D_37210CC49A8C"
 ],
 "partial": false,
 "pitch": 0,
 "label": "lounge 1",
 "id": "panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16C7D41B_071E_3415_4199_20E506130A47",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_17E95D19_071E_3414_4191_49DD2AA1F86C",
   "backwardYaw": 1.12,
   "class": "AdjacentPanorama",
   "yaw": -174.36,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16D98604_071E_57FC_419B_391FE4D3C5BE",
   "backwardYaw": -146.53,
   "class": "AdjacentPanorama",
   "yaw": 34.77,
   "distance": 1
  },
  {
   "panorama": "this.panorama_161F6FAF_071E_540C_4186_EB947103F96E",
   "backwardYaw": 4.19,
   "class": "AdjacentPanorama",
   "yaw": 14.84,
   "distance": 1
  },
  {
   "panorama": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4",
   "backwardYaw": -83.68,
   "class": "AdjacentPanorama",
   "yaw": -121.77,
   "distance": 1
  },
  {
   "panorama": "this.panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC",
   "backwardYaw": -24.82,
   "class": "AdjacentPanorama",
   "yaw": 41.68,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_t.jpg",
 "overlays": [
  "this.overlay_3EC6BC4B_0720_E37F_4160_19EAF14ECA42",
  "this.overlay_3A98C78F_0723_2DF7_418E_BDB3C10EFE61",
  "this.overlay_394106D1_0720_EF6B_4180_40A2CDA3282C"
 ],
 "partial": false,
 "pitch": 0,
 "label": "right bed 6",
 "id": "panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_165B1505_071E_D5FC_4195_E056A51A9988",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60",
   "backwardYaw": 2.67,
   "class": "AdjacentPanorama",
   "yaw": 119.99,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5CF5AB2D_111F_23B7_41A4_E1B12ADADD7C"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_t.jpg",
 "overlays": [
  "this.overlay_28064F20_072F_1D29_4106_FF1FF6DA3C00",
  "this.overlay_3777C290_072F_27E9_419B_CABF7B004E92"
 ],
 "partial": false,
 "pitch": 0,
 "label": "m bath 1",
 "id": "panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16B47D39_071E_5415_4157_686CAFB8196A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1676D099_071E_6C15_4192_C1DBA77B55E1",
   "backwardYaw": 46.68,
   "class": "AdjacentPanorama",
   "yaw": -30.82,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -138.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5F55DB9A_111F_229D_41AF_465C3273A135"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_t.jpg",
 "overlays": [
  "this.overlay_2382EAE2_0133_FAA1_4146_76E00D78EBD0"
 ],
 "partial": false,
 "pitch": 0,
 "label": "Shop",
 "id": "panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B576810_111F_2D6D_417E_86C75AC722B2"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 65.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5F1C8B6C_111F_23B4_4168_3FB6491236C5"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_t.jpg",
 "overlays": [
  "this.overlay_574656B7_07E1_2F17_4148_FFC3589B6BE5",
  "this.overlay_576D3B9A_07E1_6519_4193_01E035406EE3",
  "this.overlay_54DF0AE4_07E3_6729_4184_F4CD102C8259"
 ],
 "partial": false,
 "pitch": 0,
 "label": "left bath 2",
 "id": "panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16716EB7_071F_D41C_4183_6E762367299C",
   "backwardYaw": -4.89,
   "class": "AdjacentPanorama",
   "yaw": -88.45,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16CEA6D4_071F_F413_4156_44FE2294C714",
   "backwardYaw": -18.47,
   "class": "AdjacentPanorama",
   "yaw": 88.02,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1694C793_071F_D415_418D_A3146C97D5FB",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B0E27E2_111F_22AC_4182_176808398983"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 66.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B1AF7E2_111F_22AC_4156_89AA796776B7"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16CEA6D4_071F_F413_4156_44FE2294C714_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 131.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_58FB5773_111F_2393_41A9_67D7F3C221F8"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5D500997_111F_2E93_41A0_40E5C5AE9E98"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_15EB4265_071E_2C3D_4193_79B693F03209_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_t.jpg",
 "overlays": [
  "this.overlay_2590606A_0767_2339_4182_06DA99BA9BC0",
  "this.overlay_2331A192_0767_25E9_4176_3D10E6B6D200"
 ],
 "partial": false,
 "pitch": 0,
 "label": "kitchen 1",
 "id": "panorama_15EB4265_071E_2C3D_4193_79B693F03209",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16B8D710_071F_D414_419B_1621A6932E48",
   "backwardYaw": -23.19,
   "class": "AdjacentPanorama",
   "yaw": -13.22,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4",
   "backwardYaw": 124.06,
   "class": "AdjacentPanorama",
   "yaw": 159.77,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.35,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5BFAA86E_111F_2DB5_41A7_7E0FB8539E3C"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.64,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5CBC0ADF_111F_2293_41A4_3155E8E79BCF"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.82,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5CE4AB2D_111F_23B7_41AA_D8C72F5831C5"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_t.jpg",
 "overlays": [
  "this.overlay_48FA0E63_07E7_1F2F_4142_FA6F1C7934B1",
  "this.overlay_486DCA19_07E7_271B_417D_5D9C43877705",
  "this.overlay_57482254_07E7_2768_4176_E3F775F0FE44"
 ],
 "partial": false,
 "pitch": 0,
 "label": "left bath 1",
 "id": "panorama_16716EB7_071F_D41C_4183_6E762367299C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4",
   "backwardYaw": -88.45,
   "class": "AdjacentPanorama",
   "yaw": -4.89,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1694C793_071F_D415_418D_A3146C97D5FB",
   "backwardYaw": -116.81,
   "class": "AdjacentPanorama",
   "yaw": 158.45,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16CEA6D4_071F_F413_4156_44FE2294C714",
   "backwardYaw": -28.14,
   "class": "AdjacentPanorama",
   "yaw": -2.87,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.31,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5CDB5B3D_111F_2394_416E_8D6563864D4C"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16B8D710_071F_D414_419B_1621A6932E48_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16964134_071E_2C1C_4192_03D27D395FFD_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_t.jpg",
 "overlays": [
  "this.overlay_135378AA_071F_2339_4195_7ADAEADECF24",
  "this.overlay_125EA448_0761_E379_4164_1DF18D7E763C",
  "this.overlay_10BABC1F_0761_6317_4194_64C921F20852",
  "this.overlay_10657033_0763_632F_419C_26EDB2D0E942",
  "this.overlay_1BEBA891_0760_E3E8_4190_E68271C76127"
 ],
 "partial": false,
 "pitch": 0,
 "label": "lounge 2",
 "id": "panorama_16D98604_071E_57FC_419B_391FE4D3C5BE",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA",
   "backwardYaw": 34.77,
   "class": "AdjacentPanorama",
   "yaw": -146.53,
   "distance": 1
  },
  {
   "panorama": "this.panorama_164187F6_071E_741C_4199_F4336C38AD75",
   "backwardYaw": 149.05,
   "class": "AdjacentPanorama",
   "yaw": -55.28,
   "distance": 1
  },
  {
   "panorama": "this.panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC",
   "backwardYaw": -21.42,
   "class": "AdjacentPanorama",
   "yaw": 34.3,
   "distance": 1
  },
  {
   "panorama": "this.panorama_161F6FAF_071E_540C_4186_EB947103F96E",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.19,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5D3A0939_111F_2F9F_41A3_A1EC247C5A9E"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_t.jpg",
 "overlays": [
  "this.overlay_1661FE6D_0721_3F38_4188_508682AB9FAE",
  "this.overlay_1ED18737_0761_6D17_419C_D23CC538036C"
 ],
 "partial": false,
 "pitch": 0,
 "label": "lounge 5",
 "id": "panorama_151963D8_071E_6C13_419B_1D0FFE4F1892",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_161F6FAF_071E_540C_4186_EB947103F96E",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "right balcony view 6",
 "id": "panorama_16964134_071E_2C1C_4192_03D27D395FFD",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16964134_071E_2C1C_4192_03D27D395FFD_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 127.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B93784F_111F_2DF3_4182_17EE984DA75F"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -127.26,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5DB599B6_111F_2E95_4183_5F5F8B19E3CE"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_t.jpg",
 "overlays": [
  "this.overlay_20558588_013D_6F60_4158_B353D23A45AC"
 ],
 "partial": false,
 "pitch": 0,
 "label": "security",
 "id": "panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_58244715_111F_2397_4179_E2EE36DFF54F",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_6AAE1F12_07E0_FEE8_418B_33CA3258D028",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.94,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5C793AA0_111F_22AD_4132_CB40F87BD740"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 33.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B63E810_111F_2D6D_41AB_81D837D30C25"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5C26FA62_111F_2DAD_4170_5DB438071339"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -125.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5F70BB7B_111F_2393_41AD_414008393383"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_t.jpg",
 "overlays": [
  "this.overlay_37BC4E89_0723_1FFB_4161_E3DE9702782D",
  "this.overlay_291AF42C_0723_6339_4196_C10AD992ACE8",
  "this.overlay_29C04735_0723_2D2B_4190_E6561C083316",
  "this.overlay_28488962_0720_E529_4190_98F9582F64A7"
 ],
 "partial": false,
 "pitch": 0,
 "label": "m bed 6",
 "id": "panorama_16CA2D23_071E_3434_417C_3615B71C4DFD",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85",
   "backwardYaw": 36.49,
   "class": "AdjacentPanorama",
   "yaw": -114.91,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1626B11B_071E_2C15_4181_6448907DED83",
   "backwardYaw": -33.54,
   "class": "AdjacentPanorama",
   "yaw": 116.7,
   "distance": 1
  },
  {
   "panorama": "this.panorama_169C44EE_071E_340C_4196_FAB80239034D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_58D99793_111F_2293_418F_AC36CA3561A7"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_t.jpg",
 "overlays": [
  "this.overlay_2A08D937_0721_6528_4199_14DB33370581",
  "this.overlay_2A85752F_0721_2D38_4199_B07218D6B8A9"
 ],
 "partial": false,
 "pitch": 0,
 "label": "m bed 5",
 "id": "panorama_166FD91F_071E_3C0C_417F_E2148902B527",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85",
   "backwardYaw": -19.96,
   "class": "AdjacentPanorama",
   "yaw": 60.57,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16B47D39_071E_5415_4157_686CAFB8196A",
   "backwardYaw": -47.87,
   "class": "AdjacentPanorama",
   "yaw": 22.31,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -163.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5D0DE958_111F_2F9D_41A1_3635E014A0DA"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 121.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5D8FE9F5_111F_2E94_417A_0E9AE64FD30D"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_t.jpg",
 "overlays": [
  "this.overlay_2C8CB8E5_0727_2328_4193_50D9257422FC",
  "this.overlay_2B59E5A3_0720_ED2F_4183_BB490B75DC7B"
 ],
 "partial": false,
 "pitch": 0,
 "label": "m bed 4",
 "id": "panorama_169C44EE_071E_340C_4196_FAB80239034D",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1626B11B_071E_2C15_4181_6448907DED83",
   "backwardYaw": 52.77,
   "class": "AdjacentPanorama",
   "yaw": -48.78,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -119.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5F3F2B4C_111F_23F5_41AD_0C30CF79D711"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5D72D978_111F_2F9C_41A9_7AEBE7372DFF"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.58,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5DC19A43_111F_2DF3_4194_E077D9C66037"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16716EB7_071F_D41C_4183_6E762367299C_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_t.jpg",
 "overlays": [
  "this.overlay_20DC7BC8_0721_E579_4153_1D50FEA35140",
  "this.overlay_2FC94576_0721_6D28_4196_D38CA6307DB4",
  "this.overlay_20D02A50_0721_2769_4191_CB3D3494B0B6",
  "this.overlay_2F64B6F7_0720_EF17_4174_E60F520ACF0A"
 ],
 "partial": false,
 "pitch": 0,
 "label": "m bed 2",
 "id": "panorama_16B47D39_071E_5415_4157_686CAFB8196A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85",
   "backwardYaw": 49.95,
   "class": "AdjacentPanorama",
   "yaw": -144.88,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1626B11B_071E_2C15_4181_6448907DED83",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_166FD91F_071E_3C0C_417F_E2148902B527",
   "backwardYaw": 22.31,
   "class": "AdjacentPanorama",
   "yaw": -47.87,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16CA2D23_071E_3434_417C_3615B71C4DFD",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -130.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A3DB88D_111F_2D77_4194_46B1C515C839"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_t.jpg",
 "overlays": [
  "this.overlay_1C6AA2C6_013C_EAE0_412F_16A00C04CE00"
 ],
 "partial": false,
 "pitch": 0,
 "label": "Cafe",
 "id": "panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
   "backwardYaw": 89.38,
   "class": "AdjacentPanorama",
   "yaw": 2.45,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.01,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5DDC2A24_111F_2DB4_41AA_3045E5A6A607"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_t.jpg",
 "overlays": [
  "this.overlay_3B7BFEBB_0727_1F1F_419B_5BEA8A29DD94",
  "this.overlay_3BEB278D_0727_2DFB_4187_92E2D54A31A7",
  "this.overlay_477A4E02_0727_FEE8_4167_100956CE2F77"
 ],
 "partial": false,
 "pitch": 0,
 "label": "right bath 1",
 "id": "panorama_165B1505_071E_D5FC_4195_E056A51A9988",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_165F8ECF_071E_F40D_4192_142F38F76643",
   "backwardYaw": 165.52,
   "class": "AdjacentPanorama",
   "yaw": 139.17,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1666C8FA_071E_DC14_4180_07B8769A38A3",
   "backwardYaw": 67.88,
   "class": "AdjacentPanorama",
   "yaw": -8.89,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16E22D78_071E_D413_4179_8F54B0029004",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A22D89D_111F_2E97_4199_E15C546BF804"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16C7D41B_071E_3415_4199_20E506130A47_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_169C44EE_071E_340C_4196_FAB80239034D_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A06E8BC_111F_2E95_4184_07A630D25B75"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_t.jpg",
 "overlays": [
  "this.overlay_566BF920_07E1_2529_418B_4AD9889869EA",
  "this.overlay_55B74C6C_07E1_6339_419B_001C6D51F86C"
 ],
 "partial": false,
 "pitch": 0,
 "label": "left bath 3",
 "id": "panorama_16CEA6D4_071F_F413_4156_44FE2294C714",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16716EB7_071F_D41C_4183_6E762367299C",
   "backwardYaw": -2.87,
   "class": "AdjacentPanorama",
   "yaw": -28.14,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4",
   "backwardYaw": 88.02,
   "class": "AdjacentPanorama",
   "yaw": -18.47,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_t.jpg",
 "overlays": [
  "this.overlay_250EC390_0760_E5E9_4185_C29289D478BC",
  "this.overlay_26215AEE_0763_E739_4195_F6DF874AC3CC",
  "this.overlay_26B38736_0763_6D29_4159_10C44D52DD18",
  "this.overlay_25701F05_0763_1EEB_419B_4F468FE766CD",
  "this.overlay_25B0A220_0760_E729_4166_AD412AB71AA8"
 ],
 "partial": false,
 "pitch": 0,
 "label": "lobby 2",
 "id": "panorama_17E95D19_071E_3414_4191_49DD2AA1F86C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A",
   "backwardYaw": 143.21,
   "class": "AdjacentPanorama",
   "yaw": 105.06,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA",
   "backwardYaw": -174.36,
   "class": "AdjacentPanorama",
   "yaw": 1.12,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.94,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A4948DB_111F_2E93_41A1_AEDC2F8D7804"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A93C90A_111F_2F7D_41A0_AA3A9294A524"
},
{
 "movementMode": "constrained",
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5A6BE8CC_111F_2EF5_4193_617769BFE5EE"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16686499_071E_5414_4190_5920383D49E2_t.jpg",
 "overlays": [
  "this.overlay_33DC98B5_0720_E32B_418C_4A567AFDD3CD"
 ],
 "partial": false,
 "pitch": 0,
 "label": "m bath 3",
 "id": "panorama_16686499_071E_5414_4190_5920383D49E2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16686499_071E_5414_4190_5920383D49E2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1676D099_071E_6C15_4192_C1DBA77B55E1",
   "backwardYaw": 133.05,
   "class": "AdjacentPanorama",
   "yaw": -84.58,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_t.jpg",
 "overlays": [
  "this.overlay_35E3C760_0720_ED29_4193_C65550C946B9",
  "this.overlay_3599ADD4_0721_7D69_4181_AFE63EFBE819",
  "this.overlay_34FFF6C8_0721_EF79_4181_AB8321322AC4",
  "this.overlay_34265FCF_0727_1D77_4179_CF37FADC0871"
 ],
 "partial": false,
 "pitch": 0,
 "label": "right bed 1",
 "id": "panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85",
   "backwardYaw": -58.95,
   "class": "AdjacentPanorama",
   "yaw": 50.05,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED",
   "backwardYaw": 37.09,
   "class": "AdjacentPanorama",
   "yaw": -28.38,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4",
   "backwardYaw": -155.29,
   "class": "AdjacentPanorama",
   "yaw": -146.07,
   "distance": 1
  },
  {
   "panorama": "this.panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30",
   "backwardYaw": 119.99,
   "class": "AdjacentPanorama",
   "yaw": 2.67,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_t.jpg",
 "overlays": [
  "this.overlay_4067483B_0720_E31F_419C_5AB23CD6CA33",
  "this.overlay_40C9BDA9_0721_3D3B_4195_DFF1A29169C0",
  "this.overlay_4F493997_0721_2517_4187_3B1018F4245A",
  "this.overlay_4EB75773_0723_2D2F_4185_358D08D8969B",
  "this.overlay_498CEF0F_07E1_1EF7_417F_B94FB313536D"
 ],
 "partial": false,
 "pitch": 0,
 "label": "left bed 4",
 "id": "panorama_1694C793_071F_D415_418D_A3146C97D5FB",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16F33FDC_071F_D413_4160_087E2642BFAD",
   "backwardYaw": -101.42,
   "class": "AdjacentPanorama",
   "yaw": -7.04,
   "distance": 1
  },
  {
   "panorama": "this.panorama_167C5B19_071F_DC15_4192_57A29362BD86",
   "backwardYaw": -65.29,
   "class": "AdjacentPanorama",
   "yaw": -67.18,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16716EB7_071F_D41C_4183_6E762367299C",
   "backwardYaw": 158.45,
   "class": "AdjacentPanorama",
   "yaw": -116.81,
   "distance": 1
  },
  {
   "panorama": "this.panorama_166713B0_071F_EC13_4139_32FA3C91F400",
   "backwardYaw": -63.7,
   "class": "AdjacentPanorama",
   "yaw": 54.43,
   "distance": 1
  },
  {
   "panorama": "this.panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2",
   "backwardYaw": 64.31,
   "class": "AdjacentPanorama",
   "yaw": -52.19,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5D1FB949_111F_2FFF_41A3_0374A4E3DB22"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_165F8ECF_071E_F40D_4192_142F38F76643_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_camera"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -63.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_58EC3783_111F_2373_4198_44429EDF746F"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5F2E3B5C_111F_2395_41A2_A40C5FF2EEF8"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_t.jpg",
 "overlays": [
  "this.overlay_24C4EDA3_0763_7D2F_4194_F09177DEF40E",
  "this.overlay_23008107_0763_E2E8_4185_8A9B71524482",
  "this.overlay_220A152A_0763_6D39_4188_6D06C9E5128C",
  "this.overlay_21276631_0761_2F2B_4194_087D57A78FF2",
  "this.overlay_210DE707_0761_2EF7_418B_631288F8EC67",
  "this.overlay_200AA8A8_071F_2338_419B_1F7E10E56DC5",
  "this.overlay_292BFEFC_0720_FF18_4190_9BDF0FEC0EFF"
 ],
 "partial": false,
 "pitch": 0,
 "label": "m bed 1",
 "id": "panorama_1669E937_071E_5C1D_4197_791ADB1DFE85",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16C7D41B_071E_3415_4199_20E506130A47",
   "backwardYaw": -85.69,
   "class": "AdjacentPanorama",
   "yaw": 122.43,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1626B11B_071E_2C15_4181_6448907DED83",
   "backwardYaw": -50.72,
   "class": "AdjacentPanorama",
   "yaw": 43.26,
   "distance": 1
  },
  {
   "panorama": "this.panorama_166FD91F_071E_3C0C_417F_E2148902B527",
   "backwardYaw": 60.57,
   "class": "AdjacentPanorama",
   "yaw": -19.96,
   "distance": 1
  },
  {
   "panorama": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_16B47D39_071E_5415_4157_686CAFB8196A",
   "backwardYaw": -144.88,
   "class": "AdjacentPanorama",
   "yaw": 49.95,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16CA2D23_071E_3434_417C_3615B71C4DFD",
   "backwardYaw": -114.91,
   "class": "AdjacentPanorama",
   "yaw": 36.49,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_t.jpg",
 "overlays": [
  "this.overlay_21050DA0_013F_FEA1_412B_D7B4E7E6D880"
 ],
 "partial": false,
 "pitch": 0,
 "label": "Parking ",
 "id": "panorama_9D491A23_9732_35F7_41D3_93A5EE521A29",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.21,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B685801_111F_2D6F_4185_67DF4525AE2C"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_5B87285E_111F_2D95_41B1_2A8D307BF608"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_t.jpg",
 "overlays": [
  "this.overlay_18B74D6B_076F_1D38_4197_64D509DADDD9",
  "this.overlay_19F3216C_076F_2539_4194_9AFB26A3E4FB",
  "this.overlay_18674B0B_076F_E6FF_415F_C62C5A76142A",
  "this.overlay_182FE924_076F_2529_4177_F3879C874D16",
  "this.overlay_275CDE63_076F_7F2F_4190_DB6ACB8C79DC"
 ],
 "partial": false,
 "pitch": 0,
 "label": "lobby 1",
 "id": "panorama_1503985C_071E_3C13_4192_B1C41C9089D4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60",
   "backwardYaw": -146.07,
   "class": "AdjacentPanorama",
   "yaw": -155.29,
   "distance": 1
  },
  {
   "panorama": "this.panorama_15EB4265_071E_2C3D_4193_79B693F03209",
   "backwardYaw": 159.77,
   "class": "AdjacentPanorama",
   "yaw": 124.06,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA",
   "backwardYaw": -121.77,
   "class": "AdjacentPanorama",
   "yaw": -83.68,
   "distance": 1
  },
  {
   "panorama": "this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 7,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Montserrat Medium",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "minHeight": 1,
 "width": 115.05,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 641,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "-- SETTINGS"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "width": 330,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "height": "100%",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "--PANORAMA LIST"
 },
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "--FLOORPLAN"
 },
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "27.473%",
 "id": "Container_6233FD33_07E1_1D2F_418E_C6F77262A9D3",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0.55%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "14.914%",
 "paddingRight": 0,
 "top": "1.83%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container130102"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AF06274_112B_FD94_41AC_F9131E6AD4A0",
   "pitch": -42.24,
   "yaw": 89.38,
   "hfov": 17.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A, this.camera_5D72D978_111F_2F9C_41A9_7AEBE7372DFF); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "CAFE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1A191D4F_010F_3FFF_4163_B97341F84144",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.24,
   "hfov": 17.02
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AF1D274_112B_FD94_4180_E45200802747",
   "pitch": -40.26,
   "yaw": -67.79,
   "hfov": 19.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0, this.camera_5D615987_111F_2F73_41A6_8CC504A8B772); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "GYM"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1A4C4DBA_010D_1EA1_4164_4107D0014D63",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.26,
   "hfov": 19.39
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AF10274_112B_FD94_41AB_9A6BCE613773",
   "pitch": -21.35,
   "yaw": -116.7,
   "hfov": 20.91,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1, this.camera_5D7CB968_111F_2FBD_41AD_2A592E2CDD71); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "RECEPTION"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_0655FEF3_1129_E293_419A_2F0EEEFCFAC1",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.35,
   "hfov": 20.91
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500C23D7_1119_E293_41A4_0B842528BF08",
   "pitch": -24.1,
   "yaw": 89.57,
   "hfov": 17.79,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "toolTip": "APARTMENT"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_23E294A4_1129_E6B5_41A9_561D3B741A4A",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.1,
   "hfov": 17.79
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E3A0AE_07E1_6339_419B_5D0E6F59D25C",
   "pitch": -25.78,
   "yaw": -58.95,
   "hfov": 13.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60, this.camera_5A5AF8DB_111F_2E93_41AD_36A013278F3F); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_329D1A21_0720_E72B_418F_A4B0735C9045",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.78,
   "hfov": 13.95
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67FCC0AE_07E1_6339_419C_E9228656833F",
   "pitch": -11.23,
   "yaw": 8.21,
   "hfov": 11.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_313920B6_0723_6328_4194_A31E730FD95A",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.23,
   "hfov": 11.13
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67FD50AE_07E1_6339_417F_4565FAA97ADA",
   "pitch": -12.33,
   "yaw": 28.09,
   "hfov": 12.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_31C8FA70_0723_2728_4192_AA915F17C053",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.33,
   "hfov": 12.65
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E3A0AE_07E1_6339_417B_92EA9C52D1D2",
   "pitch": -18.79,
   "yaw": -10.08,
   "hfov": 10.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 46)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_39731A40_0723_2769_4167_E6BE263A63D0",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.79,
   "hfov": 10.74
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_06071B91_1119_E36F_419E_3C1C4ADE1B74",
   "pitch": -40.54,
   "yaw": -144.67,
   "hfov": 20.75,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA, this.camera_5A82B90A_111F_2F7D_41AD_8864483ED807); this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "EXTERIOR"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1702045A_011D_2DE1_415E_1F2CCD95F7ED",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.54,
   "hfov": 20.75
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_06076B91_1119_E36F_4166_52C40FB11D6F",
   "pitch": -32.29,
   "yaw": -31.13,
   "hfov": 18.76,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4, this.camera_5AF1291A_111F_2F9D_413F_553D4573A34C); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_162CF28E_0114_E560_4150_38EC56891AA3",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.29,
   "hfov": 18.76
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_5079E3E7_1119_E2B3_4199_B318EC8CC631",
   "pitch": -36.99,
   "yaw": -97.05,
   "hfov": 16.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_17C58195_0723_65EB_419A_665D62E25305",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.99,
   "hfov": 16.77
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D0A0AE_07E1_6339_4197_AEDFB132949C",
   "pitch": -21.6,
   "yaw": 51.96,
   "hfov": 18.28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_161F6FAF_071E_540C_4186_EB947103F96E, this.camera_5BFAA86E_111F_2DB5_41A7_7E0FB8539E3C); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1DD18519_0763_2D18_4191_B280BB0B13B0",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.6,
   "hfov": 18.28
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D100AE_07E1_6339_4196_7FAF959B0234",
   "pitch": -39.34,
   "yaw": 149.05,
   "hfov": 15.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16D98604_071E_57FC_419B_391FE4D3C5BE, this.camera_5B87285E_111F_2D95_41B1_2A8D307BF608); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1D37BF8C_0763_3DF9_4182_F03AABDD7560",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.34,
   "hfov": 15.2
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AE39283_112B_FD73_417C_238D6181B568",
   "pitch": -56.69,
   "yaw": -85.69,
   "hfov": 18.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85, this.camera_5C5EAAC0_111F_22ED_4197_E4A93CF10A5E); this.mainPlayList.set('selectedIndex', 32)",
   "toolTip": "MAIN BED"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1A3974A7_0761_2328_4194_C474D350170B",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -56.69,
   "hfov": 18.57
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AE3F283_112B_FD73_41AF_B171A7235178",
   "pitch": -17.36,
   "yaw": 39.97,
   "hfov": 18.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "toolTip": "KITCHEN"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1AF1C439_0760_E31B_4189_D4829B0A88A4",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.36,
   "hfov": 18.64
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AE35283_112B_FD73_41A7_1A233FCB74F0",
   "pitch": -32.27,
   "yaw": 50.32,
   "hfov": 16.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1AA0345B_0761_2318_4188_01F618325998",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.27,
   "hfov": 16.74
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AE0A283_112B_FD73_41AF_B64849F2B524",
   "pitch": -28.39,
   "yaw": 11.39,
   "hfov": 18.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1A140BCA_0761_2579_4186_429F8404571E",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.39,
   "hfov": 18.39
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C6109E_07E1_6319_4199_046FC0981E52",
   "pitch": -62.51,
   "yaw": 143.21,
   "hfov": 12.82,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_17E95D19_071E_3414_4191_49DD2AA1F86C, this.camera_5A4948DB_111F_2E93_41A1_AEDC2F8D7804); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_47A23F1A_0721_1D19_414F_273E3DA422EE",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -62.51,
   "hfov": 12.82
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C6F09E_07E1_6319_4165_5932E0A5621C",
   "pitch": -51.49,
   "yaw": 16.95,
   "hfov": 13.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16760FD2_071F_F414_418C_32424D70B55D, this.camera_5AB808EB_111F_2EB3_419E_5FCFE44F58E7); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_46457C91_0721_23EB_4184_7D7083CBBE84",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -51.49,
   "hfov": 13.44
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C7509E_07E1_6319_4190_2A98B69A9CD0",
   "pitch": -24.58,
   "yaw": -10.25,
   "hfov": 15.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166713B0_071F_EC13_4139_32FA3C91F400, this.camera_5AAE88EB_111F_2EB3_41AB_8637D6F84AE4); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_46293788_0720_EDF9_4191_DE74A4831EBA",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.58,
   "hfov": 15.71
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E7D0AE_07E1_6339_4191_5A5D50695181",
   "pitch": -37.74,
   "yaw": 68.52,
   "hfov": 18.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 45)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3A8E7BC4_0721_2569_4188_F5D726F35100",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.74,
   "hfov": 18.13
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E7A0AE_07E1_6339_4198_5108677B3BF8",
   "pitch": -62.9,
   "yaw": 67.88,
   "hfov": 10.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_165B1505_071E_D5FC_4195_E056A51A9988, this.camera_5AE7F91A_111F_2F9D_41A4_C35EAF85B56E); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_395CCEDC_0721_1F19_4197_E17CA3586D30",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -62.9,
   "hfov": 10.44
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E0D0AE_07E1_6339_4197_0CC5B25CBA7F",
   "pitch": -45.16,
   "yaw": -113.09,
   "hfov": 16.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16E22D78_071E_D413_4179_8F54B0029004, this.camera_5AD4D92A_111F_2FBC_417B_C9931F58AFF0); this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_393C2495_0721_63EB_418F_E26B66F4D591",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.16,
   "hfov": 16.16
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C2E0A4_07E1_6329_419A_BEB00F4CD4F0",
   "pitch": -43.21,
   "yaw": 64.31,
   "hfov": 15.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1694C793_071F_D415_418D_A3146C97D5FB, this.camera_5B93784F_111F_2DF3_4182_17EE984DA75F); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4E7D3714_0723_6EE9_4181_5A092EB8B099",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.21,
   "hfov": 15.64
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C340A4_07E1_6329_4185_8A0B8DED2A09",
   "pitch": -70.63,
   "yaw": 150.44,
   "hfov": 7.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4E0B175A_0723_2D19_4191_499DEC321048",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -70.63,
   "hfov": 7.12
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C320A4_07E1_6329_4166_121F66A13625",
   "pitch": -29.21,
   "yaw": -3.91,
   "hfov": 15.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4EE22D87_0720_FDE8_4174_923C68FA2FF0",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.21,
   "hfov": 15.08
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C380A4_07E1_6329_4197_9C2EFDC09268",
   "pitch": -20.01,
   "yaw": -37,
   "hfov": 9.51,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4EBEBEC9_0721_1F7B_4183_C7AB0D6A1781",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.01,
   "hfov": 9.51
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67DC60A4_07E1_6329_419C_82F642DBFB4C",
   "pitch": -18.06,
   "yaw": 0.28,
   "hfov": 8.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4DF3912E_0721_2538_4193_0AF3E621CD33",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_1_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.06,
   "hfov": 8.35
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500703D7_1119_E293_4196_02BA9E2EDF4C",
   "pitch": -38.92,
   "yaw": -21.42,
   "hfov": 14.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16D98604_071E_57FC_419B_391FE4D3C5BE, this.camera_5F44FB9A_111F_229D_419F_54CD5984DD2E); this.mainPlayList.set('selectedIndex', 24)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_0873BB4C_0721_2579_4186_64B8F7E699E5",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.92,
   "hfov": 14.88
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500743E7_1119_E2B3_41A8_9DC3AE306F01",
   "pitch": -18.56,
   "yaw": -24.82,
   "hfov": 13.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA, this.camera_5F55DB9A_111F_229D_41AF_465C3273A135); this.mainPlayList.set('selectedIndex', 23)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_101F3C53_0763_236F_418B_468FBF5EBEF5",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.56,
   "hfov": 13.54
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500683E7_1119_E2B3_4187_C907FC72641B",
   "pitch": -28.26,
   "yaw": 19.11,
   "hfov": 14.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_12A682BA_0763_6719_416B_E35022220C02",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.26,
   "hfov": 14.46
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_5006B3E7_1119_E2B3_4173_5B8031E3BF0F",
   "pitch": -21.71,
   "yaw": 52.74,
   "hfov": 15.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_161F6FAF_071E_540C_4186_EB947103F96E, this.camera_5FBB9BAA_111F_22BD_41B0_AB2C637DF4D7); this.mainPlayList.set('selectedIndex', 26)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_11EFEDF7_0763_3D16_4195_C874505B0BDD",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.71,
   "hfov": 15.01
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_580BB725_111F_23B7_4155_39C9E8B30208",
   "pitch": -24.67,
   "yaw": -37.14,
   "hfov": 12.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC, this.camera_5DB599B6_111F_2E95_4183_5F5F8B19E3CE); this.mainPlayList.set('selectedIndex', 25)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_0ADE7200_0721_26E9_410C_43F1F185C000",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.67,
   "hfov": 12.3
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_580BC725_111F_23B7_4180_E46E16ADDCD4",
   "pitch": -31.55,
   "yaw": 8.65,
   "hfov": 18.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_164187F6_071E_741C_4199_F4336C38AD75, this.camera_5D46A9A7_111F_2EB4_41A8_845A1DB7AC55); this.mainPlayList.set('selectedIndex', 28)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_319BD1AA_1127_3EBD_4194_18FCA18F00C5",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.55,
   "hfov": 18.65
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_58045725_111F_23B7_4199_D300F47F1988",
   "pitch": -17.41,
   "yaw": 4.19,
   "hfov": 11.18,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA, this.camera_5D500997_111F_2E93_41A0_40E5C5AE9E98); this.mainPlayList.set('selectedIndex', 23)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2D6F115B_1129_3F93_41A4_2470BDA4733B",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.41,
   "hfov": 11.18
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_5804D725_111F_23B7_41A1_550F31ECF660",
   "pitch": -10.96,
   "yaw": -1.13,
   "hfov": 9.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_5770E0DD_111B_DE97_41A2_67FD734AA6AC",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.96,
   "hfov": 9.77
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_06079B91_1119_E36F_41AB_708AADC28286",
   "pitch": -9.88,
   "yaw": 12.33,
   "hfov": 13.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1, this.camera_5C905B0E_111F_2375_4196_7EFD116D18DB); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1815BA09_0114_E563_4169_4BE86BB4C1EA",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.88,
   "hfov": 13.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67CAA09E_07E1_6319_419A_973C377F7F02",
   "pitch": -31.67,
   "yaw": -65.29,
   "hfov": 14.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1694C793_071F_D415_418D_A3146C97D5FB, this.camera_5CE4AB2D_111F_23B7_41AA_D8C72F5831C5); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_52D3923E_07E1_E718_4192_65966A73B1A6",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.67,
   "hfov": 14.25
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D280AE_07E1_6339_4179_04BD8F0F67BF",
   "pitch": -33.83,
   "yaw": 49.51,
   "hfov": 18.69,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_35499C6B_0721_233F_4189_25C368E1DB56",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.83,
   "hfov": 18.69
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D310AE_07E1_6339_4178_4ACA2714535A",
   "pitch": -42.87,
   "yaw": 133.05,
   "hfov": 16.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16686499_071E_5414_4190_5920383D49E2, this.camera_5A9D58FB_111F_2E93_4183_FE9619072FD4); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3583A336_0721_6529_4197_C7A44F7CC9B6",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.87,
   "hfov": 16.49
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D3E0AE_07E1_6339_4198_CD928602CE8E",
   "pitch": -63.01,
   "yaw": 46.68,
   "hfov": 10.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967, this.camera_5A93C90A_111F_2F7D_41A0_AA3A9294A524); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_343EE12C_0721_2539_419D_07C46C4EBB4C",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -63.01,
   "hfov": 10.58
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67FCD0BE_07E1_6319_4198_CD6924B083BC",
   "pitch": -15.3,
   "yaw": 37.09,
   "hfov": 12.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60, this.camera_58C7B7B2_111F_22AD_41AB_ECBB7D108374); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_30428F2E_0723_1D39_4190_D80844768516",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.3,
   "hfov": 12.49
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67FD40BE_07E1_6319_4191_0C56B6BDA5C6",
   "pitch": -30.09,
   "yaw": -28.06,
   "hfov": 19.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_165F8ECF_071E_F40D_4192_142F38F76643, this.camera_58CCA7B2_111F_22AD_41AF_728A355756EF); this.mainPlayList.set('selectedIndex', 45)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_30FEE7E7_0721_2D37_4195_ED2E4FD5B8EC",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.09,
   "hfov": 19.59
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67CAF09E_07E1_6319_4153_344FD6CF044B",
   "pitch": -37.48,
   "yaw": -23.19,
   "hfov": 12.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15EB4265_071E_2C3D_4193_79B693F03209, this.camera_5B2777D2_111F_22ED_4193_43DED5D58D8D); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2493065D_0761_6F1B_419A_61CF4BFF019F",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.48,
   "hfov": 12.73
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AF63274_112B_FD94_41A9_D783A097FF93",
   "pitch": -33.45,
   "yaw": 112.74,
   "hfov": 24.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4, this.camera_5B685801_111F_2D6F_4185_67DF4525AE2C); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1E78C907_013D_276F_4152_45E57FE2D8C6",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.45,
   "hfov": 24.86
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67DCC0A4_07E1_6329_419B_4054A17E3DB0",
   "pitch": -32.64,
   "yaw": -55.94,
   "hfov": 14.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4AC58749_07E3_2D7B_4197_15266FE74A4B",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.64,
   "hfov": 14.1
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67DCA0A4_07E1_6329_4172_7593F4CCD470",
   "pitch": -39.42,
   "yaw": -101.42,
   "hfov": 12.93,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1694C793_071F_D415_418D_A3146C97D5FB, this.camera_5B33C7C2_111F_22ED_419A_7B12B7D48EA1); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4A7B172C_07E3_6D39_4196_8E0994F22676",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.42,
   "hfov": 12.93
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67DD00A4_07E1_6329_4191_9E943CF30A9F",
   "pitch": -27.16,
   "yaw": 56.97,
   "hfov": 14.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_49C0189E_07E3_6319_4198_9027AF485AC2",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 56.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.16,
   "hfov": 14.9
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67DD90A4_07E1_6329_4171_0751D41E2BF8",
   "pitch": -31.67,
   "yaw": 125.03,
   "hfov": 14.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166713B0_071F_EC13_4139_32FA3C91F400, this.camera_5B3A97C2_111F_22ED_4199_82030C1F8704); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4912F7B9_07E3_2D18_4196_56DF286BF04C",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.67,
   "hfov": 14.25
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AC272A3_112B_E2AC_4193_BEC63412393C",
   "pitch": -64.12,
   "yaw": 165.52,
   "hfov": 11.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_165B1505_071E_D5FC_4195_E056A51A9988, this.camera_5C6F9AB0_111F_22AD_41B0_66F586BBA000); this.mainPlayList.set('selectedIndex', 39)",
   "toolTip": "RIGHT BATH"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3F8C1C9C_0720_E319_4194_E96AC944AB28",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -64.12,
   "hfov": 11.76
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67FE70BE_07E1_6319_4197_84E2707EED0F",
   "pitch": -51.95,
   "yaw": 78.55,
   "hfov": 12.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED, this.camera_5C793AA0_111F_22AD_4132_CB40F87BD740); this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3E5167AD_073F_2D3B_417D_FFA6C593332E",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -51.95,
   "hfov": 12.13
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67FEF0BE_07E1_6319_4193_34E2C07838AB",
   "pitch": -19.5,
   "yaw": -7.75,
   "hfov": 12.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3EFBD737_073F_2D17_4199_430B1EFFC3A5",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.5,
   "hfov": 12.21
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E0A0AE_07E1_6339_418E_90B3E2010EBA",
   "pitch": -50.64,
   "yaw": -69.54,
   "hfov": 14.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1666C8FA_071E_DC14_4180_07B8769A38A3, this.camera_5B1AF7E2_111F_22AC_4156_89AA796776B7); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_47FCC4DB_0723_6318_417C_73DD4C590B8E",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -50.64,
   "hfov": 14.54
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E120AE_07E1_6339_419D_F30DA4299AE1",
   "pitch": -20.52,
   "yaw": -74.73,
   "hfov": 12.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_43B8D429_0723_233B_419B_6C0DC357B74A",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.52,
   "hfov": 12.39
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E870AE_07E1_6339_417D_AC1D727BA58A",
   "pitch": -30.17,
   "yaw": 52.77,
   "hfov": 15.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_169C44EE_071E_340C_4196_FAB80239034D, this.camera_58FB5773_111F_2393_41A9_67D7F3C221F8); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2EF58298_0721_6719_416B_F00260332ADE",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.17,
   "hfov": 15.25
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E8E0AE_07E1_6339_418C_3856D94C9059",
   "pitch": -20.3,
   "yaw": -50.72,
   "hfov": 14.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85, this.camera_5883C773_111F_2393_4196_3D3D27764C7B); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2E9F4BE2_0721_2528_4183_A3B0BC39148A",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.3,
   "hfov": 14.53
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E960AE_07E1_6339_417C_AD10F83C5030",
   "pitch": -27.94,
   "yaw": -71.31,
   "hfov": 13.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "toolTip": "MAIN BATH"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2D5C5361_0721_E52B_4182_49BA4E8DFD80",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.94,
   "hfov": 13.68
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E9C0AE_07E1_6339_4190_EFF059FD32CE",
   "pitch": -42.87,
   "yaw": -33.54,
   "hfov": 11.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16CA2D23_071E_3434_417C_3615B71C4DFD, this.camera_58EC3783_111F_2373_4198_44429EDF746F); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2EB2B090_0721_23E9_419B_69F9D4684C73",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.87,
   "hfov": 11.95
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C7409E_07E1_6319_4165_7C4F818E03BB",
   "pitch": -28.04,
   "yaw": 73.95,
   "hfov": 12.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A, this.camera_5F677B8B_111F_2373_4150_0F6E50D8FE4A); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_420868E0_0721_2329_4192_E364E7AC2CEB",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.04,
   "hfov": 12.87
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C7009E_07E1_6319_4177_EC601058C292",
   "pitch": -47.79,
   "yaw": 78.56,
   "hfov": 14.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16760FD2_071F_F414_418C_32424D70B55D, this.camera_5F01DB7B_111F_2393_418E_72FD2C5CAB98); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_42C52CDC_0721_E319_4193_75AD01D607FC",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.79,
   "hfov": 14.68
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C7E0A4_07E1_6329_418C_689EF0EC941E",
   "pitch": -35.86,
   "yaw": -63.7,
   "hfov": 17.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1694C793_071F_D415_418D_A3146C97D5FB, this.camera_5F70BB7B_111F_2393_41AD_414008393383); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4288EA5B_0721_271F_4179_BD41AE1E8A7D",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.86,
   "hfov": 17.71
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C040A4_07E1_6329_418C_EC0FFE5CB163",
   "pitch": -20.83,
   "yaw": -35.54,
   "hfov": 16.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_412AE215_0721_26EB_4188_E1A67E26F272",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.83,
   "hfov": 16.39
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C030A4_07E1_6329_4190_23C8DE82A47B",
   "pitch": -26.83,
   "yaw": 3.07,
   "hfov": 19.5,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16F33FDC_071F_D413_4160_087E2642BFAD, this.camera_5F136B6C_111F_23B4_419C_8D3B0BBBDF41); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4C150742_07E1_6D69_415B_C6FFD2261321",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_1_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.83,
   "hfov": 19.5
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C5B09E_07E1_6319_418A_E6C53BAD8391",
   "pitch": -54.71,
   "yaw": 144.05,
   "hfov": 12.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A, this.camera_5D0DE958_111F_2F9D_41A1_3635E014A0DA); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_44C1DC72_0721_2329_417C_85356FD4ADE4",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -54.71,
   "hfov": 12.47
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C6109E_07E1_6319_414C_C2463DC24D92",
   "pitch": -31.49,
   "yaw": -69.82,
   "hfov": 18.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166713B0_071F_EC13_4139_32FA3C91F400, this.camera_5D1FB949_111F_2FFF_41A3_0374A4E3DB22); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_43731C78_0721_2319_4194_BA4E942BCDBD",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.49,
   "hfov": 18.4
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C6F09E_07E1_6319_415F_A7A1DD7A3D25",
   "pitch": -25.04,
   "yaw": -0.14,
   "hfov": 19.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_43381B5E_0720_E519_4197_C4EBB8784237",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.04,
   "hfov": 19.55
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500503D7_1119_E293_41A4_11D3E87D2185",
   "pitch": -25.94,
   "yaw": 34.77,
   "hfov": 14.91,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16D98604_071E_57FC_419B_391FE4D3C5BE, this.camera_5A11A8AD_111F_2EB4_4190_D1223D118A0D); this.mainPlayList.set('selectedIndex', 24)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_15037CC2_0727_2368_4175_629A3DFC9BB9",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.94,
   "hfov": 14.91
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500523D7_1119_E293_41A3_17D6E1DBD719",
   "pitch": -9.83,
   "yaw": 14.84,
   "hfov": 9.82,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_161F6FAF_071E_540C_4186_EB947103F96E, this.camera_5A06E8BC_111F_2E95_4184_07A630D25B75); this.mainPlayList.set('selectedIndex', 26)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_15D50919_0723_251B_417B_92AC53D81417",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.83,
   "hfov": 9.82
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500553D7_1119_E293_4181_7E43AEBF7AF8",
   "pitch": -14.73,
   "yaw": 41.68,
   "hfov": 13.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC, this.camera_5A6BE8CC_111F_2EF5_4193_617769BFE5EE); this.mainPlayList.set('selectedIndex', 25)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_15C4C5E9_0721_2D3B_4177_D947C210A8BF",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.73,
   "hfov": 13.92
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500483D7_1119_E293_4171_5DC0393504DC",
   "pitch": -30.92,
   "yaw": 101.16,
   "hfov": 15.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1D315C07_076F_62F7_4190_EEDB9A3F1D24",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.92,
   "hfov": 15.85
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_5004B3D7_1119_E293_41A6_6171E9DFD5D9",
   "pitch": -35.58,
   "yaw": -121.77,
   "hfov": 16.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4, this.camera_5A7548BC_111F_2E95_41A1_A1643972ADE0); this.mainPlayList.set('selectedIndex', 21)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1B8EF66E_0761_2F39_418A_87E08035CEAF",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.58,
   "hfov": 16.99
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D410AE_07E1_6339_4190_15823943C847",
   "pitch": -23.46,
   "yaw": -174.36,
   "hfov": 16.94,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_17E95D19_071E_3414_4191_49DD2AA1F86C, this.camera_5A22D89D_111F_2E97_4199_E15C546BF804); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1CE8143A_0761_6318_419D_12A25269B4E8",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_1_HS_5_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.46,
   "hfov": 16.94
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500403D7_1119_E293_419F_2775F3A544B3",
   "pitch": -13.88,
   "yaw": -137.32,
   "hfov": 15.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "toolTip": "KITCHEN"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1CDAA89C_0763_2319_417D_37210CC49A8C",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_6_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.88,
   "hfov": 15.58
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67FF60BE_07E1_6319_419C_52C0607367DD",
   "pitch": -27.88,
   "yaw": 119.99,
   "hfov": 11.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60, this.camera_5BE9986E_111F_2DB5_4190_5D8A7AFB9AA9); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3EC6BC4B_0720_E37F_4160_19EAF14ECA42",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.88,
   "hfov": 11.45
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67FFF0BE_07E1_6319_419C_EED5327AB8EA",
   "pitch": -28.21,
   "yaw": -104.2,
   "hfov": 11.41,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3A98C78F_0723_2DF7_418E_BDB3C10EFE61",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.21,
   "hfov": 11.41
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67F860BE_07E1_6319_4190_B93FE05CA16E",
   "pitch": -31.43,
   "yaw": -69.69,
   "hfov": 11.05,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_394106D1_0720_EF6B_4180_40A2CDA3282C",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.43,
   "hfov": 11.05
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D190AE_07E1_6339_4199_8CE6D2FCC4D1",
   "pitch": -50.93,
   "yaw": 142.09,
   "hfov": 14.18,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_28064F20_072F_1D29_4106_FF1FF6DA3C00",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -50.93,
   "hfov": 14.18
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D210AE_07E1_6339_4199_BE1442095C36",
   "pitch": -43.83,
   "yaw": -30.82,
   "hfov": 16.23,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1676D099_071E_6C15_4192_C1DBA77B55E1, this.camera_58844764_111F_23B4_417F_F5E03952AEA0); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3777C290_072F_27E9_419B_CABF7B004E92",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.83,
   "hfov": 16.23
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AF70274_112B_FD94_4193_BBFB4C174EAC",
   "pitch": -43.25,
   "yaw": 157.61,
   "hfov": 22.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2382EAE2_0133_FAA1_4146_76E00D78EBD0",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.25,
   "hfov": 22.68
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C4D09E_07E1_6319_4191_1CED0838E537",
   "pitch": -55.37,
   "yaw": 88.02,
   "hfov": 11.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16CEA6D4_071F_F413_4156_44FE2294C714, this.camera_58D99793_111F_2293_418F_AC36CA3561A7); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_574656B7_07E1_2F17_4148_FFC3589B6BE5",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -55.37,
   "hfov": 11.81
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C4B09E_07E1_6319_4188_A11802476F3F",
   "pitch": -65.04,
   "yaw": -88.45,
   "hfov": 8.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16716EB7_071F_D41C_4183_6E762367299C, this.camera_58E6C793_111F_2293_41AF_36DE3E0274D5); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_576D3B9A_07E1_6519_4193_01E035406EE3",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -65.04,
   "hfov": 8.77
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C5709E_07E1_6319_4170_F06B5FEFD70E",
   "pitch": -44.96,
   "yaw": -90.89,
   "hfov": 13.56,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_54DF0AE4_07E3_6729_4184_F4CD102C8259",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.96,
   "hfov": 13.56
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AF74274_112B_FD94_41B0_BD9D7F26F5A6",
   "pitch": -29.9,
   "yaw": -13.22,
   "hfov": 20.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16B8D710_071F_D414_419B_1621A6932E48, this.camera_5DAA59C6_111F_2EF5_4184_FB38B91F1A30); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2590606A_0767_2339_4182_06DA99BA9BC0",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.9,
   "hfov": 20.68
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500FF3D7_1119_E293_41AB_09E417E28995",
   "pitch": -47.61,
   "yaw": 159.77,
   "hfov": 16.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4, this.camera_5D98C9E5_111F_2EB7_41A6_13B5938FC7C3); this.mainPlayList.set('selectedIndex', 21)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2331A192_0767_25E9_4176_3D10E6B6D200",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.61,
   "hfov": 16.98
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67CB209E_07E1_6319_4196_B6975121D46B",
   "pitch": -81.95,
   "yaw": 158.45,
   "hfov": 3.66,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1694C793_071F_D415_418D_A3146C97D5FB, this.camera_5D3A0939_111F_2F9F_41A3_A1EC247C5A9E); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_48FA0E63_07E7_1F2F_4142_FA6F1C7934B1",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -81.95,
   "hfov": 3.66
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67CB809E_07E1_6319_419C_A2B792B4D61C",
   "pitch": -50.21,
   "yaw": -4.89,
   "hfov": 13.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4, this.camera_5ACBB939_111F_2F9F_4198_977BF43C7214); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_486DCA19_07E7_271B_417D_5D9C43877705",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -50.21,
   "hfov": 13.3
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C4709E_07E1_6319_419D_FBC5BF48C565",
   "pitch": -34.37,
   "yaw": -2.87,
   "hfov": 15.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16CEA6D4_071F_F413_4156_44FE2294C714, this.camera_5D28D949_111F_2FFF_41A2_BAA6851E1F53); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_57482254_07E7_2768_4176_E3F775F0FE44",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.37,
   "hfov": 15.15
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500433D7_1119_E293_4191_10398534071B",
   "pitch": -39.8,
   "yaw": -55.28,
   "hfov": 17.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_164187F6_071E_741C_4199_F4336C38AD75, this.camera_5B01B7F1_111F_22AF_4194_5E674BA1B0DA); this.mainPlayList.set('selectedIndex', 28)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_135378AA_071F_2339_4195_7ADAEADECF24",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.8,
   "hfov": 17.49
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500463D7_1119_E293_41A9_360AEB9ADAF0",
   "pitch": -14.03,
   "yaw": -16.61,
   "hfov": 16.6,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_125EA448_0761_E379_4164_1DF18D7E763C",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.03,
   "hfov": 16.6
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_500793D7_1119_E293_419F_A89D9BAE80EB",
   "pitch": -22.57,
   "yaw": -146.53,
   "hfov": 17.07,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA, this.camera_5B0E27E2_111F_22AC_4182_176808398983); this.mainPlayList.set('selectedIndex', 23)",
   "toolTip": "LOUNGE"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_10BABC1F_0761_6317_4194_64C921F20852",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.57,
   "hfov": 17.07
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_5007B3D7_1119_E293_41AA_E69CC81BD0D1",
   "pitch": -27.75,
   "yaw": 34.3,
   "hfov": 17.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC, this.camera_5B74E801_111F_2D6F_4199_198638C1073A); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_10657033_0763_632F_419C_26EDB2D0E942",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.75,
   "hfov": 17.54
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D690AE_07E1_6339_4187_05DD50EA9B0A",
   "pitch": -8.2,
   "yaw": -159.03,
   "hfov": 10.28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "toolTip": "KITCHEN"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1BEBA891_0760_E3E8_4190_E68271C76127",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_1_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.2,
   "hfov": 10.28
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D7F0AE_07E1_6339_418D_AEB7290986A7",
   "pitch": -23.92,
   "yaw": 29,
   "hfov": 10.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1661FE6D_0721_3F38_4188_508682AB9FAE",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.92,
   "hfov": 10.04
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D050AE_07E1_6339_4195_2D1CBC2017EA",
   "pitch": -17.01,
   "yaw": -40.13,
   "hfov": 10.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1ED18737_0761_6D17_419C_D23CC538036C",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.01,
   "hfov": 10.64
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AF7C274_112B_FD94_419B_036B33A7A5D7",
   "pitch": -40.63,
   "yaw": -102.91,
   "hfov": 24.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_20558588_013D_6F60_4158_B353D23A45AC",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.63,
   "hfov": 24.64
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E440AE_07E1_6339_4197_30A808EA4A40",
   "pitch": -29.66,
   "yaw": -114.91,
   "hfov": 13.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85, this.camera_5BD8387E_111F_2D95_4170_6D906F891A5F); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_37BC4E89_0723_1FFB_4161_E3DE9702782D",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.66,
   "hfov": 13.47
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E4C0AE_07E1_6339_4161_422DA492F33A",
   "pitch": -29.66,
   "yaw": 51.86,
   "hfov": 13.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_291AF42C_0723_6339_4196_C10AD992ACE8",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.66,
   "hfov": 13.47
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E550AE_07E1_6339_4190_D63F1A639FA6",
   "pitch": -41.27,
   "yaw": 116.7,
   "hfov": 11.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1626B11B_071E_2C15_4181_6448907DED83, this.camera_5BCEF87E_111F_2D95_4190_6481A56D65DE); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_29C04735_0723_2D2B_4190_E6561C083316",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.27,
   "hfov": 11.65
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E520AE_07E1_6339_419B_8E7D2C468EA8",
   "pitch": -49.92,
   "yaw": 172.01,
   "hfov": 11.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_28488962_0720_E529_4190_98F9582F64A7",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.92,
   "hfov": 11.02
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67EB60AE_07E1_6339_4196_B3EC29AA0C42",
   "pitch": -28.04,
   "yaw": 60.57,
   "hfov": 13.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85, this.camera_5BA4383F_111F_2D93_41B0_CD156258114B); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2A08D937_0721_6528_4199_14DB33370581",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.04,
   "hfov": 13.68
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67EBE0AE_07E1_6339_4180_1EF3489516AE",
   "pitch": -22.48,
   "yaw": 22.31,
   "hfov": 12.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16B47D39_071E_5415_4157_686CAFB8196A, this.camera_5B9FA84F_111F_2DF3_41A2_F0A28DF129F9); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2A85752F_0721_2D38_4199_B07218D6B8A9",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.48,
   "hfov": 12.83
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67EA60AE_07E1_6339_4198_45C1A52ED07F",
   "pitch": -28.04,
   "yaw": -48.78,
   "hfov": 13.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1626B11B_071E_2C15_4181_6448907DED83, this.camera_5DD2DA33_111F_2D93_4186_816C7892BE71); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2C8CB8E5_0727_2328_4193_50D9257422FC",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.04,
   "hfov": 13.68
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67EAF0AE_07E1_6339_4131_D6A1CDDA447C",
   "pitch": -17.96,
   "yaw": -36.98,
   "hfov": 9.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "toolTip": "MAIN BATH"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2B59E5A3_0720_ED2F_4183_BB490B75DC7B",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.96,
   "hfov": 9.36
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67EFA0AE_07E1_6339_4191_C10428DF5F23",
   "pitch": -66.92,
   "yaw": -144.88,
   "hfov": 10.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1669E937_071E_5C1D_4197_791ADB1DFE85, this.camera_5A3DB88D_111F_2D77_4194_46B1C515C839); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_20DC7BC8_0721_E579_4153_1D50FEA35140",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -66.92,
   "hfov": 10.4
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E800AE_07E1_6339_419A_4DD8C94C1F5C",
   "pitch": -29.53,
   "yaw": -47.87,
   "hfov": 15.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166FD91F_071E_3C0C_417F_E2148902B527, this.camera_5A2C689D_111F_2E97_41AA_1ECAE499D47E); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2FC94576_0721_6D28_4196_D38CA6307DB4",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.53,
   "hfov": 15.35
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E880AE_07E1_6339_4184_85FCFF800BB7",
   "pitch": -43.72,
   "yaw": 23.42,
   "hfov": 12.75,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_20D02A50_0721_2769_4191_CB3D3494B0B6",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.72,
   "hfov": 12.75
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67EF90AE_07E1_6339_419B_5071F2F9865A",
   "pitch": -27.59,
   "yaw": 39.55,
   "hfov": 15.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2F64B6F7_0720_EF17_4174_E60F520ACF0A",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.59,
   "hfov": 15.64
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AF6C274_112B_FD94_4164_28025C12C909",
   "pitch": -42.79,
   "yaw": 2.45,
   "hfov": 22.79,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4, this.camera_5BB1D830_111F_2DAC_4186_A8568C368084); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1C6AA2C6_013C_EAE0_412F_16A00C04CE00",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.79,
   "hfov": 22.79
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E5A0AE_07E1_6339_415A_CA78E7A85714",
   "pitch": -59.35,
   "yaw": 139.17,
   "hfov": 11.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_165F8ECF_071E_F40D_4192_142F38F76643, this.camera_5C868B1D_111F_2397_418C_AB50E230A607); this.mainPlayList.set('selectedIndex', 45)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3B7BFEBB_0727_1F1F_419B_5BEA8A29DD94",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -59.35,
   "hfov": 11.68
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E620AE_07E1_6339_4192_31DE465FF6A0",
   "pitch": -54.19,
   "yaw": -8.89,
   "hfov": 13.41,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1666C8FA_071E_DC14_4180_07B8769A38A3, this.camera_5CF5AB2D_111F_23B7_41A4_E1B12ADADD7C); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3BEB278D_0727_2DFB_4187_92E2D54A31A7",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -54.19,
   "hfov": 13.41
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E6A0AE_07E1_6339_419D_30C9EBB3EAC8",
   "pitch": -27.11,
   "yaw": -22.08,
   "hfov": 15.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_477A4E02_0727_FEE8_4167_100956CE2F77",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.11,
   "hfov": 15.13
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C5C09E_07E1_6319_419D_46A7EC869DAA",
   "pitch": -33.75,
   "yaw": -28.14,
   "hfov": 17.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16716EB7_071F_D41C_4183_6E762367299C, this.camera_5CB32AFE_111F_2295_41AB_5A3A676D55BC); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_566BF920_07E1_2529_418B_4AD9889869EA",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.75,
   "hfov": 17.27
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C5A09E_07E1_6319_4144_3F17EF3E4DE2",
   "pitch": -57.3,
   "yaw": -18.47,
   "hfov": 11.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4, this.camera_5CA1AB0E_111F_2375_4187_432473783207); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_55B74C6C_07E1_6339_419B_001C6D51F86C",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -57.3,
   "hfov": 11.22
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D840A4_07E1_6329_417F_D071B0FABD02",
   "pitch": -58.75,
   "yaw": 105.06,
   "hfov": 11.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A, this.camera_5C4DBACF_111F_22F3_41AC_B25C2165ED95); this.mainPlayList.set('selectedIndex', 14)",
   "toolTip": "LEFT BED"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_250EC390_0760_E5E9_4185_C29289D478BC",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -58.75,
   "hfov": 11.81
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D8D0A4_07E1_6329_419D_9D3C6C4D406C",
   "pitch": -19.52,
   "yaw": 32.41,
   "hfov": 13.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "toolTip": "MAIN BED"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_26215AEE_0763_E739_4195_F6DF874AC3CC",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.52,
   "hfov": 13.09
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AE66283_112B_FD73_41AA_C98AA65FAF7B",
   "pitch": -28.77,
   "yaw": -30.73,
   "hfov": 15.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "toolTip": "RIGHT BED"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_26B38736_0763_6D29_4159_10C44D52DD18",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.77,
   "hfov": 15.72
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D920A4_07E1_6329_4199_1AB23F3A827C",
   "pitch": -26.94,
   "yaw": 1.12,
   "hfov": 12.38,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA, this.camera_5CBC0ADF_111F_2293_41A4_3155E8E79BCF); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_25701F05_0763_1EEB_419B_4F468FE766CD",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.94,
   "hfov": 12.38
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AE75283_112B_FD73_41A9_189D41C7CAAC",
   "pitch": -50.36,
   "yaw": -51.27,
   "hfov": 14.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "toolTip": "KITCHEN"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_25B0A220_0760_E729_4166_AD412AB71AA8",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -50.36,
   "hfov": 14.87
  }
 ]
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "left": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 1,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "99.975%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 7,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Montserrat Medium",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67EC10AE_07E1_6339_418A_173B0DD6C002",
   "pitch": -44.49,
   "yaw": -84.58,
   "hfov": 11.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1676D099_071E_6C15_4192_C1DBA77B55E1, this.camera_5BBE6830_111F_2DAC_4195_0BE2B8311EEA); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_33DC98B5_0720_E32B_418C_4A567AFDD3CD",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.49,
   "hfov": 11.25
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E250AE_07E1_6339_419B_93B6B102EF52",
   "pitch": -34.54,
   "yaw": 50.05,
   "hfov": 16.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85, this.camera_5D8FE9F5_111F_2E94_417A_0E9AE64FD30D); this.mainPlayList.set('selectedIndex', 43)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_35E3C760_0720_ED29_4193_C65550C946B9",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.54,
   "hfov": 16.54
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E2D0AE_07E1_6339_418A_3E79ACE5E622",
   "pitch": -24.81,
   "yaw": 2.67,
   "hfov": 14.07,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30, this.camera_5DDC2A24_111F_2DB4_41AA_3045E5A6A607); this.mainPlayList.set('selectedIndex', 46)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3599ADD4_0721_7D69_4181_AFE63EFBE819",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.81,
   "hfov": 14.07
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E2A0AE_07E1_6339_4192_ED7B5385C68E",
   "pitch": -41.41,
   "yaw": -146.07,
   "hfov": 17.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1503985C_071E_3C13_4192_B1C41C9089D4, this.camera_5DEDAA14_111F_2D95_41AA_BEEAAEFE4BDF); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_34FFF6C8_0721_EF79_4181_AB8321322AC4",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.41,
   "hfov": 17.88
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67E320AE_07E1_6339_417B_BE707D1ADFF5",
   "pitch": -19.31,
   "yaw": -28.38,
   "hfov": 14.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED, this.camera_5DFE9A04_111F_2D75_41A9_E95FF3494055); this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_34265FCF_0727_1D77_4179_CF37FADC0871",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.31,
   "hfov": 14.62
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C080A4_07E1_6329_416E_CAF08126EE6D",
   "pitch": -25.07,
   "yaw": 54.43,
   "hfov": 15.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166713B0_071F_EC13_4139_32FA3C91F400, this.camera_5C151A72_111F_2DAC_4161_FD5D0E7C64FC); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4067483B_0720_E31F_419C_5AB23CD6CA33",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.07,
   "hfov": 15.54
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C170A4_07E1_6329_418E_052DFFCD75D6",
   "pitch": -37.17,
   "yaw": -52.19,
   "hfov": 13.67,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2, this.camera_5C041A91_111F_2D6F_41B0_35435C76DBEE); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_40C9BDA9_0721_3D3B_4195_DFF1A29169C0",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.17,
   "hfov": 13.67
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AFFF283_112B_FD73_4153_35032F706DA0",
   "pitch": -52.15,
   "yaw": -116.81,
   "hfov": 16.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16716EB7_071F_D41C_4183_6E762367299C, this.camera_5C26FA62_111F_2DAD_4170_5DB438071339); this.mainPlayList.set('selectedIndex', 11)",
   "toolTip": "LEFT BATH"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4F493997_0721_2517_4187_3B1018F4245A",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -52.15,
   "hfov": 16.78
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C1A0A4_07E1_6329_418E_FDC07A3F5EA4",
   "pitch": -31.13,
   "yaw": -67.18,
   "hfov": 10.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_167C5B19_071F_DC15_4192_57A29362BD86, this.camera_5C302A52_111F_2DED_4171_17FF8035918F); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4EB75773_0723_2D2F_4185_358D08D8969B",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.13,
   "hfov": 10.12
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67C210A4_07E1_6329_418D_5CD34D0E8138",
   "pitch": -27.81,
   "yaw": -7.04,
   "hfov": 15.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16F33FDC_071F_D413_4160_087E2642BFAD, this.camera_5DC19A43_111F_2DF3_4194_E077D9C66037); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_498CEF0F_07E1_1EF7_417F_B94FB313536D",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_1_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.81,
   "hfov": 15.17
  }
 ]
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AD2A293_112B_E293_41AC_A1239F7DAD96",
   "pitch": -42.03,
   "yaw": 49.95,
   "hfov": 15.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16B47D39_071E_5415_4157_686CAFB8196A, this.camera_5F2E3B5C_111F_2395_41A2_A40C5FF2EEF8); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24C4EDA3_0763_7D2F_4194_F09177DEF40E",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.03,
   "hfov": 15.72
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67ED60AE_07E1_6339_419C_F2EAA9198CEF",
   "pitch": -20.79,
   "yaw": 43.26,
   "hfov": 11.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1626B11B_071E_2C15_4181_6448907DED83, this.camera_5CC86B4C_111F_23F5_4192_47CB97677BFD); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_23008107_0763_E2E8_4185_8A9B71524482",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.79,
   "hfov": 11.98
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67ED90AE_07E1_6339_4171_1076A5D600C1",
   "pitch": -33.93,
   "yaw": -19.96,
   "hfov": 13.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166FD91F_071E_3C0C_417F_E2148902B527, this.camera_5F3F2B4C_111F_23F5_41AD_0C30CF79D711); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_220A152A_0763_6D39_4188_6D06C9E5128C",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.93,
   "hfov": 13.31
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AD3F293_112B_E293_41A7_3F4E9FE09220",
   "pitch": -29.08,
   "yaw": 36.49,
   "hfov": 14.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16CA2D23_071E_3434_417C_3615B71C4DFD, this.camera_5F1C8B6C_111F_23B4_4168_3FB6491236C5); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_21276631_0761_2F2B_4194_087D57A78FF2",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.08,
   "hfov": 14.02
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67EEF0AE_07E1_6339_418B_F6E7AA2762B3",
   "pitch": -56.68,
   "yaw": 122.43,
   "hfov": 12.51,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16C7D41B_071E_3415_4199_20E506130A47, this.camera_5CDB5B3D_111F_2394_416E_8D6563864D4C); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_210DE707_0761_2EF7_418B_631288F8EC67",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_1_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -56.68,
   "hfov": 12.51
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67EF50AE_07E1_6339_4193_F35610C5EDC4",
   "pitch": -14.87,
   "yaw": 145.09,
   "hfov": 11.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_200AA8A8_071F_2338_419B_1F7E10E56DC5",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_1_HS_5_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.87,
   "hfov": 11.86
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67EF20AE_07E1_6339_4196_142021974993",
   "pitch": -19.31,
   "yaw": 164.18,
   "hfov": 9.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_292BFEFC_0720_FF18_4190_9BDF0FEC0EFF",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_1_HS_6_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.31,
   "hfov": 9.54
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_2AF79274_112B_FD94_41A8_FC1D06A6990A",
   "pitch": -26.76,
   "yaw": 128.44,
   "hfov": 24.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "LOBBY"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_21050DA0_013F_FEA1_412B_D7B4E7E6D880",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.76,
   "hfov": 24.04
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67DFF0A4_07E1_6329_4191_705290F3397D",
   "pitch": -35.07,
   "yaw": 124.06,
   "hfov": 14.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15EB4265_071E_2C3D_4193_79B693F03209, this.camera_5B576810_111F_2D6D_417E_86C75AC722B2); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_18B74D6B_076F_1D38_4197_64D509DADDD9",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.07,
   "hfov": 14.89
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67D850A4_07E1_6329_418B_826559C66508",
   "pitch": -32.81,
   "yaw": 46.64,
   "hfov": 15.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_19F3216C_076F_2539_4194_9AFB26A3E4FB",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.81,
   "hfov": 15.29
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67DE90A4_07E1_6329_4174_A94DA9AE3A8C",
   "pitch": -24.75,
   "yaw": -40.45,
   "hfov": 16.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_18674B0B_076F_E6FF_415F_C62C5A76142A",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.75,
   "hfov": 16.52
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67DF10A4_07E1_6329_4181_71D335FEF948",
   "pitch": -52.16,
   "yaw": -155.29,
   "hfov": 11.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60, this.camera_5B63E810_111F_2D6D_41AB_81D837D30C25); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_182FE924_076F_2529_4177_F3879C874D16",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -52.16,
   "hfov": 11.16
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_67DF90A4_07E1_6329_418E_5F9769CE5757",
   "pitch": -39.91,
   "yaw": -83.68,
   "hfov": 13.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA, this.camera_5B4AE820_111F_2DAD_41AF_D886D6B0B1C8); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_275CDE63_076F_7F2F_4190_DB6ACB8C79DC",
 "data": {
  "label": "Circle 03a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_1_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.91,
   "hfov": 13.95
  }
 ]
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 110,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "height": 110,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "85.959%",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "center",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "width": 66,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "height": "100%",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "- COLLAPSE"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "layout": "absolute",
 "minHeight": 1,
 "width": 330,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "height": "100%",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "10%",
 "paddingRight": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "10%",
 "paddingRight": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AF06274_112B_FD94_41AC_F9131E6AD4A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AF1D274_112B_FD94_4180_E45200802747",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AF10274_112B_FD94_41AB_9A6BCE613773",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500C23D7_1119_E293_41A4_0B842528BF08",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E3A0AE_07E1_6339_419B_5D0E6F59D25C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67FCC0AE_07E1_6339_419C_E9228656833F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67FD50AE_07E1_6339_417F_4565FAA97ADA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1694D58A_071E_F4F7_4189_EF836BFF5B85_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E3A0AE_07E1_6339_417B_92EA9C52D1D2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_06071B91_1119_E36F_419E_3C1C4ADE1B74",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_06076B91_1119_E36F_4166_52C40FB11D6F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5079E3E7_1119_E2B3_4199_B318EC8CC631",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D0A0AE_07E1_6339_4197_AEDFB132949C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_164187F6_071E_741C_4199_F4336C38AD75_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D100AE_07E1_6339_4196_7FAF959B0234",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AE39283_112B_FD73_417C_238D6181B568",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AE3F283_112B_FD73_41AF_B171A7235178",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AE35283_112B_FD73_41A7_1A233FCB74F0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16C7D41B_071E_3415_4199_20E506130A47_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AE0A283_112B_FD73_41AF_B64849F2B524",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C6109E_07E1_6319_4199_046FC0981E52",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C6F09E_07E1_6319_4165_5932E0A5621C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16BE3BD7_071F_FC1D_417F_DBC45CB6921A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C7509E_07E1_6319_4190_2A98B69A9CD0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E7D0AE_07E1_6339_4191_5A5D50695181",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E7A0AE_07E1_6339_4198_5108677B3BF8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1666C8FA_071E_DC14_4180_07B8769A38A3_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E0D0AE_07E1_6339_4197_0CC5B25CBA7F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C2E0A4_07E1_6329_419A_BEB00F4CD4F0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C340A4_07E1_6329_4185_8A0B8DED2A09",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C320A4_07E1_6329_4166_121F66A13625",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C380A4_07E1_6329_4197_9C2EFDC09268",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_169BCB66_071F_DC3C_4193_90917C8B0BE2_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67DC60A4_07E1_6329_419C_82F642DBFB4C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500703D7_1119_E293_4196_02BA9E2EDF4C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500743E7_1119_E2B3_41A8_9DC3AE306F01",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500683E7_1119_E2B3_4187_C907FC72641B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_163A9B03_071E_5DF5_4152_1498B37CD7DC_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5006B3E7_1119_E2B3_4173_5B8031E3BF0F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_580BB725_111F_23B7_4155_39C9E8B30208",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_580BC725_111F_23B7_4180_E46E16ADDCD4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_58045725_111F_23B7_4199_D300F47F1988",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_161F6FAF_071E_540C_4186_EB947103F96E_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5804D725_111F_23B7_41A1_550F31ECF660",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_06079B91_1119_E36F_41AB_708AADC28286",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_167C5B19_071F_DC15_4192_57A29362BD86_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67CAA09E_07E1_6319_419A_973C377F7F02",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D280AE_07E1_6339_4179_04BD8F0F67BF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D310AE_07E1_6339_4178_4ACA2714535A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1676D099_071E_6C15_4192_C1DBA77B55E1_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D3E0AE_07E1_6339_4198_CD928602CE8E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67FCD0BE_07E1_6319_4198_CD6924B083BC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16C5B9C2_071E_FC77_4193_8F82D6B469ED_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67FD40BE_07E1_6319_4191_0C56B6BDA5C6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16B8D710_071F_D414_419B_1621A6932E48_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67CAF09E_07E1_6319_4153_344FD6CF044B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AF63274_112B_FD94_41A9_D783A097FF93",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67DCC0A4_07E1_6329_419B_4054A17E3DB0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67DCA0A4_07E1_6329_4172_7593F4CCD470",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67DD00A4_07E1_6329_4191_9E943CF30A9F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16F33FDC_071F_D413_4160_087E2642BFAD_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67DD90A4_07E1_6329_4171_0751D41E2BF8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AC272A3_112B_E2AC_4193_BEC63412393C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67FE70BE_07E1_6319_4197_84E2707EED0F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_165F8ECF_071E_F40D_4192_142F38F76643_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67FEF0BE_07E1_6319_4193_34E2C07838AB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E0A0AE_07E1_6339_418E_90B3E2010EBA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16E22D78_071E_D413_4179_8F54B0029004_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E120AE_07E1_6339_419D_F30DA4299AE1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E870AE_07E1_6339_417D_AC1D727BA58A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E8E0AE_07E1_6339_418C_3856D94C9059",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E960AE_07E1_6339_417C_AD10F83C5030",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1626B11B_071E_2C15_4181_6448907DED83_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E9C0AE_07E1_6339_4190_EFF059FD32CE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C7409E_07E1_6319_4165_7C4F818E03BB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C7009E_07E1_6319_4177_EC601058C292",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C7E0A4_07E1_6329_418C_689EF0EC941E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C040A4_07E1_6329_418C_EC0FFE5CB163",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166713B0_071F_EC13_4139_32FA3C91F400_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C030A4_07E1_6329_4190_23C8DE82A47B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C5B09E_07E1_6319_418A_E6C53BAD8391",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C6109E_07E1_6319_414C_C2463DC24D92",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16760FD2_071F_F414_418C_32424D70B55D_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C6F09E_07E1_6319_415F_A7A1DD7A3D25",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500503D7_1119_E293_41A4_11D3E87D2185",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500523D7_1119_E293_41A3_17D6E1DBD719",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500553D7_1119_E293_4181_7E43AEBF7AF8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500483D7_1119_E293_4171_5DC0393504DC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5004B3D7_1119_E293_41A6_6171E9DFD5D9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D410AE_07E1_6339_4190_15823943C847",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166EA1DA_071E_2C17_4187_D4D471D3FDEA_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500403D7_1119_E293_419F_2775F3A544B3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67FF60BE_07E1_6319_419C_52C0607367DD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67FFF0BE_07E1_6319_419C_EED5327AB8EA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_169BC39E_071E_EC0C_4170_A3EB35BE4C30_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67F860BE_07E1_6319_4190_B93FE05CA16E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D190AE_07E1_6339_4199_8CE6D2FCC4D1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16B27C7B_071E_7414_4192_8FD1FE3CE967_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D210AE_07E1_6339_4199_BE1442095C36",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AF70274_112B_FD94_4193_BBFB4C174EAC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C4D09E_07E1_6319_4191_1CED0838E537",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C4B09E_07E1_6319_4188_A11802476F3F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16BF92C7_071F_EC7C_419B_6D2C48969CC4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C5709E_07E1_6319_4170_F06B5FEFD70E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AF74274_112B_FD94_41B0_BD9D7F26F5A6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15EB4265_071E_2C3D_4193_79B693F03209_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500FF3D7_1119_E293_41AB_09E417E28995",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67CB209E_07E1_6319_4196_B6975121D46B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67CB809E_07E1_6319_419C_A2B792B4D61C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16716EB7_071F_D41C_4183_6E762367299C_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C4709E_07E1_6319_419D_FBC5BF48C565",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500433D7_1119_E293_4191_10398534071B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500463D7_1119_E293_41A9_360AEB9ADAF0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_500793D7_1119_E293_419F_A89D9BAE80EB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5007B3D7_1119_E293_41AA_E69CC81BD0D1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16D98604_071E_57FC_419B_391FE4D3C5BE_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D690AE_07E1_6339_4187_05DD50EA9B0A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D7F0AE_07E1_6339_418D_AEB7290986A7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_151963D8_071E_6C13_419B_1D0FFE4F1892_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D050AE_07E1_6339_4195_2D1CBC2017EA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AF7C274_112B_FD94_419B_036B33A7A5D7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E440AE_07E1_6339_4197_30A808EA4A40",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E4C0AE_07E1_6339_4161_422DA492F33A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E550AE_07E1_6339_4190_D63F1A639FA6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16CA2D23_071E_3434_417C_3615B71C4DFD_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E520AE_07E1_6339_419B_8E7D2C468EA8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67EB60AE_07E1_6339_4196_B3EC29AA0C42",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_166FD91F_071E_3C0C_417F_E2148902B527_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67EBE0AE_07E1_6339_4180_1EF3489516AE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67EA60AE_07E1_6339_4198_45C1A52ED07F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_169C44EE_071E_340C_4196_FAB80239034D_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67EAF0AE_07E1_6339_4131_D6A1CDDA447C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67EFA0AE_07E1_6339_4191_C10428DF5F23",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E800AE_07E1_6339_419A_4DD8C94C1F5C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E880AE_07E1_6339_4184_85FCFF800BB7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16B47D39_071E_5415_4157_686CAFB8196A_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67EF90AE_07E1_6339_419B_5071F2F9865A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AF6C274_112B_FD94_4164_28025C12C909",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E5A0AE_07E1_6339_415A_CA78E7A85714",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E620AE_07E1_6339_4192_31DE465FF6A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_165B1505_071E_D5FC_4195_E056A51A9988_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E6A0AE_07E1_6339_419D_30C9EBB3EAC8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C5C09E_07E1_6319_419D_46A7EC869DAA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16CEA6D4_071F_F413_4156_44FE2294C714_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C5A09E_07E1_6319_4144_3F17EF3E4DE2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D840A4_07E1_6329_417F_D071B0FABD02",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D8D0A4_07E1_6329_419D_9D3C6C4D406C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AE66283_112B_FD73_41AA_C98AA65FAF7B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D920A4_07E1_6329_4199_1AB23F3A827C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_17E95D19_071E_3414_4191_49DD2AA1F86C_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AE75283_112B_FD73_41A9_189D41C7CAAC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16686499_071E_5414_4190_5920383D49E2_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67EC10AE_07E1_6339_418A_173B0DD6C002",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E250AE_07E1_6339_419B_93B6B102EF52",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E2D0AE_07E1_6339_418A_3E79ACE5E622",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E2A0AE_07E1_6339_4192_ED7B5385C68E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1685E1AD_071E_EC0C_4192_C7A73D46EF60_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67E320AE_07E1_6339_417B_BE707D1ADFF5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C080A4_07E1_6329_416E_CAF08126EE6D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C170A4_07E1_6329_418E_052DFFCD75D6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AFFF283_112B_FD73_4153_35032F706DA0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C1A0A4_07E1_6329_418E_FDC07A3F5EA4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1694C793_071F_D415_418D_A3146C97D5FB_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67C210A4_07E1_6329_418D_5CD34D0E8138",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AD2A293_112B_E293_41AC_A1239F7DAD96",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67ED60AE_07E1_6339_419C_F2EAA9198CEF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67ED90AE_07E1_6339_4171_1076A5D600C1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AD3F293_112B_E293_41A7_3F4E9FE09220",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67EEF0AE_07E1_6339_418B_F6E7AA2762B3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67EF50AE_07E1_6339_4193_F35610C5EDC4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1669E937_071E_5C1D_4197_791ADB1DFE85_1_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67EF20AE_07E1_6339_4196_142021974993",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AF79274_112B_FD94_41A8_FC1D06A6990A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67DFF0A4_07E1_6329_4191_705290F3397D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67D850A4_07E1_6329_418B_826559C66508",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67DE90A4_07E1_6329_4174_A94DA9AE3A8C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67DF10A4_07E1_6329_4181_71D335FEF948",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1503985C_071E_3C13_4192_B1C41C9089D4_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_67DF90A4_07E1_6329_418E_5F9769CE5757",
 "frameDuration": 41
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "minHeight": 1,
 "width": 60,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 60,
 "propagateClick": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "maxHeight": 60,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "height": "100%",
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "width": 36,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.4,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container black"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "minHeight": 1,
 "width": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 80,
 "top": "40%",
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "40%",
 "mode": "push",
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "maxHeight": 80,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "height": "100%",
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "90%",
 "paddingRight": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "minHeight": 1,
 "width": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "borderRadius": 0,
 "right": 9,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 50,
 "top": "40%",
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "40%",
 "mode": "push",
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "maxHeight": 50,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton collapse"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 140,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemLabelFontColor": "#666666",
 "minHeight": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "verticalAlign": "middle",
 "width": "100%",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "paddingRight": 70,
 "scrollBarColor": "#04A3E1",
 "itemMode": "normal",
 "itemOpacity": 1,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemMaxHeight": 1000,
 "itemLabelFontFamily": "Oswald",
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemThumbnailWidth": 220,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemHorizontalAlign": "center",
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemThumbnailShadow": false,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "backgroundOpacity": 0,
 "height": "92%",
 "itemPaddingTop": 3,
 "minWidth": 1,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "propagateClick": true,
 "itemBackgroundColor": [],
 "class": "ThumbnailGrid",
 "paddingLeft": 70,
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemThumbnailShadow": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList"
 },
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 16,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "layout": "absolute",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 140,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "- Buttons set"
 },
 "height": "100%",
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.7,
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 40,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 40,
 "width": "100%",
 "paddingRight": 40,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 40,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "mode": "push",
 "height": "36.14%",
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "mode": "push",
 "height": "36.14%",
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "minHeight": 30,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 40,
 "maxWidth": 1095,
 "top": "0%",
 "class": "Image",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "25%",
 "propagateClick": true,
 "maxHeight": 1095,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Image Company"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "data": {
  "name": "-Level 1"
 },
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "26%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "26%",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.Label_7E0AB563_73C7_FAD5_41CC_083DB22D8678",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "bottom": "0%",
 "height": 130,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 5,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "data": {
  "name": "-Container footer"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "-Level 2-1"
 },
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Container_1FABAFDA_111A_E29D_41AC_DD77556392D9",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Container_1E0001EB_111B_5EB3_418C_26AE0AD3FD9E",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "data": {
  "name": "-Level 2-2"
 },
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "data": {
  "name": "-Level 2-3"
 },
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "data": {
  "name": "-Level 2-4"
 },
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "data": {
  "name": "-Level 2-5"
 },
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "data": {
  "name": "-Level 2-6"
 },
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "left": "2.04%",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "bottom": "18.81%",
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setMediaBehaviour(this.playList_58244715_111F_2397_4179_E2EE36DFF54F, 0)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Tour Info"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "ENTRANCE >",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Panorama List"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "APARTMENT >",
 "shadowColor": "#000000",
 "gap": 23,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Location"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedLabel": "Inserdt Text",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "GYMNASIUM",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Floorplan"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "CAFETERIA",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 3)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Photoalbum"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "PARKING",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Contact"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "SHOP",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.mainPlayList.set('selectedIndex', 7)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 40,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 2,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "blue line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "backgroundColor": [
  "#5CA1DE"
 ]
},
{
 "fontFamily": "Montserrat Medium",
 "fontWeight": "normal",
 "data": {
  "name": "Label2794"
 },
 "id": "Label_7E0AB563_73C7_FAD5_41CC_083DB22D8678",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "text": "POWERED BY",
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Label",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "15.385%",
 "fontSize": "1.48vmin",
 "horizontalAlign": "center",
 "width": "47.166%",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "class": "HTMLText",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 78,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText47602"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.Image_7E1C05AE_73C6_E5AE_41D2_F7B6FE6202B0",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "layout": "horizontal",
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 56,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 7,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "-Container Icons 1"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "layout": "horizontal",
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 44,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 7,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "-Container Icons 2"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "minHeight": 1,
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 5,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "label": "BACK",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "layout": "absolute",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 8,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "LOBBY",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 2)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1FABAFDA_111A_E29D_41AC_DD77556392D9",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "SECURITY",
 "shadowColor": "#000000",
 "gap": 23,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 6)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1E0001EB_111B_5EB3_418C_26AE0AD3FD9E",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedLabel": "Reception",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "RECEPTION",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 1)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Meeting Area 1",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Meeting Area 2",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Bar",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Chill Out",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Terrace",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Garden",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "minHeight": 1,
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 5,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "label": "BACK",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "layout": "absolute",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 8,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "3 BEDROOM APARTMENT",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 26)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BEDROOM 2",
 "shadowColor": "#000000",
 "gap": 23,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BEDROOM 3",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BEDROOM 4",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "LOUNGE 1",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "LOUNGE 2",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "KITCHEN",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BATHROOM",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "minHeight": 1,
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 5,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "label": "BACK",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "layout": "absolute",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 8,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BEDROOM 1",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BEDROOM 2",
 "shadowColor": "#000000",
 "gap": 23,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BEDROOM 3",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "LOUNGE",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "minHeight": 1,
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 5,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "label": "BACK",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "layout": "absolute",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 8,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 23,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "minHeight": 1,
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 5,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "label": "BACK",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "layout": "absolute",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 8,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 23,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "minHeight": 1,
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 5,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "rollOverFontSize": 18,
 "label": "BACK",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "height": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "layout": "absolute",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 8,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 23,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "width": "100%",
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "layout": "horizontal",
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 10,
 "mode": "push",
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "left",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "id": "Image_7E1C05AE_73C6_E5AE_41D2_F7B6FE6202B0",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 2010,
 "propagateClick": false,
 "class": "Image",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "43.318%",
 "height": "100%",
 "url": "skin/Image_7E1C05AE_73C6_E5AE_41D2_F7B6FE6202B0.png",
 "maxHeight": 596,
 "horizontalAlign": "center",
 "data": {
  "name": "Image2648"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "minHeight": 1,
 "width": 50,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 50,
 "maxHeight": 101,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton --"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": false,
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
