(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "paddingRight": 0,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D4B5465_9732_3E73_4182_95D69FECF360_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "overlays": [
  "this.overlay_A3DEBBC4_9978_F846_41B9_35E055E35EFC"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -164.71,
   "yaw": -18.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Kitchen",
 "id": "panorama_9D4AC368_9732_1A71_4197_82A72D25D64C",
 "thumbnailUrl": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "overlays": [
  "this.overlay_A9B207CB_98A8_E842_41DB_67035F1E876B",
  "this.overlay_A99784F2_98AF_E842_41DE_1D94E4F68A76",
  "this.overlay_DD722CAE_9968_D8C2_41E0_397E2A5E1419",
  "this.overlay_DC4D4FE3_9997_5842_41CF_DAB3A65280B9"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 89.82,
   "yaw": 53.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4"
  },
  {
   "backwardYaw": -18.4,
   "yaw": -164.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D4AC368_9732_1A71_4197_82A72D25D64C"
  },
  {
   "backwardYaw": 0.64,
   "yaw": -18.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D4B5465_9732_3E73_4182_95D69FECF360"
  },
  {
   "backwardYaw": 5.36,
   "yaw": -127.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D48174D_9732_1BB3_41DA_4251EE95C478"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Loung-01",
 "id": "panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA",
 "thumbnailUrl": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "overlays": [
  "this.overlay_AC0AE766_989B_6842_41D8_BE6D0903B95C",
  "this.overlay_AE746C9C_9899_F8C6_41E0_93AD6C937E3C",
  "this.overlay_DEA59D3A_9999_59C2_41C4_E18C9D33A200"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D475C6F_9732_6E4F_41C7_9262166E752B"
  },
  {
   "backwardYaw": 17.88,
   "yaw": -122.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E"
  },
  {
   "backwardYaw": -127.63,
   "yaw": 5.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Bed-01",
 "id": "panorama_9D48174D_9732_1BB3_41DA_4251EE95C478",
 "thumbnailUrl": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E183EAD2_F29D_76D8_41DB_C9819C7A0594",
 "initialPosition": {
  "yaw": 161.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "overlays": [
  "this.overlay_A1923516_9968_A9C2_41DC_061FEBE9C321",
  "this.overlay_A1BBEFCD_9969_B846_41DD_CFABE8C1B6B6"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA"
  },
  {
   "backwardYaw": 50.83,
   "yaw": -62.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Bed-03",
 "id": "panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A",
 "thumbnailUrl": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "overlays": [
  "this.overlay_B7FAAB79_98B9_584E_41CC_3C5859885949",
  "this.overlay_B66EF684_98B8_A8C6_41E1_3319330260A7"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.11,
   "yaw": -89.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1"
  },
  {
   "backwardYaw": 53.57,
   "yaw": 89.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Lobby-01",
 "id": "panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
 "thumbnailUrl": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "overlays": [
  "this.overlay_A46F1641_9979_6BBE_41DD_A91E8A50ADF5"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Shop",
 "id": "panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7",
 "thumbnailUrl": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "150%",
 "label": "789",
 "id": "panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64",
 "thumbnailUrl": "media/panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "overlays": [
  "this.overlay_D80584EC_996B_6846_41D7_6913E5C045EC",
  "this.overlay_D9A82F9F_9969_58C2_41C5_F34177D4609D",
  "this.overlay_D9D7705F_9969_A842_41C3_C71BC2162535"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -166.68,
   "yaw": 34.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D475C6F_9732_6E4F_41C7_9262166E752B"
  },
  {
   "backwardYaw": -62.24,
   "yaw": 50.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A"
  },
  {
   "backwardYaw": -122.64,
   "yaw": 17.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D48174D_9732_1BB3_41DA_4251EE95C478"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Bath",
 "id": "panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E",
 "thumbnailUrl": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E0114A07_F29D_7138_41AA_41AC304BC77D",
 "initialPosition": {
  "yaw": -129.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_camera",
 "initialPosition": {
  "yaw": 15.04,
  "class": "PanoramaCameraPosition",
  "pitch": -0.36
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E0274A46_F29D_7138_41E9_9C1506271F84",
 "initialPosition": {
  "yaw": 57.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E19EBAA4_F29D_717F_41E0_88C6A437E1FE",
 "initialPosition": {
  "yaw": -145.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "camera": "this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_camera",
   "media": "this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_camera",
   "media": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_camera",
   "media": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_camera",
   "media": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4B5465_9732_3E73_4182_95D69FECF360_camera",
   "media": "this.panorama_9D4B5465_9732_3E73_4182_95D69FECF360",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_camera",
   "media": "this.panorama_9D48174D_9732_1BB3_41DA_4251EE95C478",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_camera",
   "media": "this.panorama_9D475C6F_9732_6E4F_41C7_9262166E752B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_camera",
   "media": "this.panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_camera",
   "media": "this.panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_camera",
   "media": "this.panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_camera",
   "media": "this.panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_camera",
   "media": "this.panorama_9D4AC368_9732_1A71_4197_82A72D25D64C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_camera",
   "media": "this.panorama_9D491A23_9732_35F7_41D3_93A5EE521A29",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_camera",
   "media": "this.panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_camera",
   "media": "this.panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_camera",
   "media": "this.panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "overlays": [
  "this.overlay_A57AC2BE_9979_A8C2_41E0_8394453E7098"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "security",
 "id": "panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452",
 "thumbnailUrl": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E048AA65_F29D_71F8_41EB_C96E391298CC",
 "initialPosition": {
  "yaw": 52.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "overlays": [
  "this.overlay_8A3510CA_98A9_6842_41DD_65205E598616"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -163.52,
   "yaw": 12.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "01",
 "id": "panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA",
 "thumbnailUrl": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E06FEA94_F29D_7158_41EB_ABDE8F1870D8",
 "initialPosition": {
  "yaw": -126.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E01FF9F8_F29D_72D7_41B1_5CEE46A1682C",
 "initialPosition": {
  "yaw": 161.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E1A5AAF2_F29D_76DB_41D0_9D90A92A7AF5",
 "initialPosition": {
  "yaw": -174.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "overlays": [
  "this.overlay_A0BCF568_9977_E84E_41C6_7CAECAE26D76"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Cafe",
 "id": "panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A",
 "thumbnailUrl": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "overlays": [
  "this.overlay_B671170D_98B7_E9C6_41B7_F5F9D13DD27F",
  "this.overlay_B70D4767_98B8_A842_41E1_F852700236A1",
  "this.overlay_AB6E80F6_98B8_E842_41C5_EB104003FEDC"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 12.03,
   "yaw": -163.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA"
  },
  {
   "backwardYaw": -89.24,
   "yaw": -1.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Receotion",
 "id": "panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1",
 "thumbnailUrl": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E1B28AE2_F29D_76F8_41C8_7150C6B86D8A",
 "initialPosition": {
  "yaw": -179.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E0F429D9_F29D_72C9_41D4_90C726D2780B",
 "initialPosition": {
  "yaw": 16.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E0356A36_F29D_7158_41E8_C9CCAE246985",
 "initialPosition": {
  "yaw": 117.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "overlays": [
  "this.overlay_A3874080_989F_68BE_41DB_E8EAA9953348",
  "this.overlay_AC6F8814_9898_A7C6_41D1_4DB7BA10CEFB",
  "this.overlay_D16A4D56_999F_F842_41E0_271F52D2A9A6"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A"
  },
  {
   "backwardYaw": 34.29,
   "yaw": -166.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Bed-02",
 "id": "panorama_9D475C6F_9732_6E4F_41C7_9262166E752B",
 "thumbnailUrl": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "overlays": [
  "this.overlay_A275D2D1_997B_A85E_41C6_D3515F6BD5A9"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Parking ",
 "id": "panorama_9D491A23_9732_35F7_41D3_93A5EE521A29",
 "thumbnailUrl": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E0EBD9E8_F29D_72C8_41B4_B3746B01CA95",
 "initialPosition": {
  "yaw": 15.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "camera": "this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_camera",
   "media": "this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_camera",
   "media": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_camera",
   "media": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_camera",
   "media": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4B5465_9732_3E73_4182_95D69FECF360_camera",
   "media": "this.panorama_9D4B5465_9732_3E73_4182_95D69FECF360",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_camera",
   "media": "this.panorama_9D48174D_9732_1BB3_41DA_4251EE95C478",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_camera",
   "media": "this.panorama_9D475C6F_9732_6E4F_41C7_9262166E752B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_camera",
   "media": "this.panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_camera",
   "media": "this.panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_camera",
   "media": "this.panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_camera",
   "media": "this.panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_camera",
   "media": "this.panorama_9D4AC368_9732_1A71_4197_82A72D25D64C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_camera",
   "media": "this.panorama_9D491A23_9732_35F7_41D3_93A5EE521A29",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_camera",
   "media": "this.panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_camera",
   "media": "this.panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64_camera",
   "media": "this.panorama_F978F6E2_F29B_5EF8_41D3_15A947DA7E64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_camera",
 "initialPosition": {
  "yaw": -5.62,
  "class": "PanoramaCameraPosition",
  "pitch": 5.23
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E07ADA84_F29D_7138_41CB_CF8A2FB43315",
 "initialPosition": {
  "yaw": 178.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E0CA49B9_F29D_7348_41DB_A336E82AC318",
 "initialPosition": {
  "yaw": -167.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "overlays": [
  "this.overlay_A3AFE91A_9978_B9C2_41C8_3980254556C0"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Gym",
 "id": "panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0",
 "thumbnailUrl": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E059DA55_F29D_71D8_41EB_028C65028F49",
 "initialPosition": {
  "yaw": -162.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E0031A17_F29D_7158_41D5_E6E21C0D6BAE",
 "initialPosition": {
  "yaw": 13.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E1911AB3_F29D_7158_4198_D8F01D237641",
 "initialPosition": {
  "yaw": -90.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_E0C039C9_F29D_72C8_41C3_08B9D65CF217",
 "initialPosition": {
  "yaw": 90.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "overlays": [
  "this.overlay_ADC900A1_98A8_A8FE_41DF_5CD542B82153",
  "this.overlay_A909AC42_9898_B842_41DE_D8C3F849E98C",
  "this.overlay_AAD49D9C_9898_B8C6_41E2_AA2C6C6D38FB",
  "this.overlay_DCF97227_9998_ABC2_41C5_0FF50673A554"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4"
  },
  {
   "backwardYaw": -18.47,
   "yaw": 0.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D4AC368_9732_1A71_4197_82A72D25D64C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D48174D_9732_1BB3_41DA_4251EE95C478"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "Loung-02",
 "id": "panorama_9D4B5465_9732_3E73_4182_95D69FECF360",
 "thumbnailUrl": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Montserrat Medium",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "height": 641,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA, this.camera_E0EBD9E8_F29D_72C8_41B4_B3746B01CA95); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LOUNGE"
  }
 ],
 "items": [
  {
   "hfov": 3.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0_HS_0_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ]
   },
   "pitch": -74.86,
   "yaw": -18.4,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.95,
   "yaw": -18.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4AC368_9732_1A71_4197_82A72D25D64C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -74.86
  }
 ],
 "id": "overlay_A3DEBBC4_9978_F846_41B9_35E055E35EFC",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D48174D_9732_1BB3_41DA_4251EE95C478, this.camera_E1A5AAF2_F29D_76DB_41D0_9D90A92A7AF5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BEDROOM "
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF3E99A3_9968_B8C2_41B0_A7F126CAD002",
   "yaw": -127.63,
   "pitch": -22.02,
   "distance": 50,
   "hfov": 14.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.36,
   "yaw": -127.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.02
  }
 ],
 "id": "overlay_A9B207CB_98A8_E842_41DB_67035F1E876B",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4, this.camera_E1911AB3_F29D_7158_4198_D8F01D237641); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LOBBY"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF3EB9A3_9968_B8C2_41DF_C20D0BE9D0A5",
   "yaw": 53.57,
   "pitch": -18.59,
   "distance": 50,
   "hfov": 11.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.87,
   "yaw": 53.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.59
  }
 ],
 "id": "overlay_A99784F2_98AF_E842_41DE_1D94E4F68A76",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D4B5465_9732_3E73_4182_95D69FECF360, this.camera_E1B28AE2_F29D_76F8_41C8_7150C6B86D8A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LOUNGE 2"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D60142A0_9998_E8FE_417F_33DA4F95DBBC",
   "yaw": -18.47,
   "pitch": -17.8,
   "distance": 100,
   "hfov": 15.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.87,
   "yaw": -18.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.8
  }
 ],
 "id": "overlay_DD722CAE_9968_D8C2_41E0_397E2A5E1419",
 "data": {
  "label": "Info Red 06"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D4AC368_9732_1A71_4197_82A72D25D64C, this.camera_E183EAD2_F29D_76D8_41DB_C9819C7A0594); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "KITCHEN"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D601E2A0_9998_E8FE_4170_6B0CBD306A64",
   "yaw": -164.71,
   "pitch": 3.18,
   "distance": 100,
   "hfov": 13.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.26,
   "yaw": -164.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.18
  }
 ],
 "id": "overlay_DC4D4FE3_9997_5842_41CF_DAB3A65280B9",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BEDROOM 2"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF3FF9A3_9968_B8C2_41E2_3458F5CDFD2F",
   "yaw": 62.44,
   "pitch": -31.84,
   "distance": 50,
   "hfov": 9.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.28,
   "yaw": 62.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.84
  }
 ],
 "id": "overlay_AC0AE766_989B_6842_41D8_BE6D0903B95C",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E, this.camera_E059DA55_F29D_71D8_41EB_028C65028F49); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BATHROOM"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF3FA9A3_9968_B8C2_41E0_37A5B8FFAFBC",
   "yaw": -122.64,
   "pitch": -30.27,
   "distance": 50,
   "hfov": 14.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.01,
   "yaw": -122.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.27
  }
 ],
 "id": "overlay_AE746C9C_9899_F8C6_41E0_93AD6C937E3C",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA, this.camera_E048AA65_F29D_71F8_41EB_C96E391298CC); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LOUNGE "
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D60392A0_9998_E8FE_41DB_96E9F25DE046",
   "yaw": 5.36,
   "pitch": 12.13,
   "distance": 100,
   "hfov": 11.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.05,
   "yaw": 5.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.13
  }
 ],
 "id": "overlay_DEA59D3A_9999_59C2_41C4_E18C9D33A200",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E, this.camera_E0114A07_F29D_7138_41AA_41AC304BC77D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BATHROOM"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A7B3520D_997B_ABC6_41D6_8966659ADC5A",
   "yaw": -62.24,
   "pitch": -33.28,
   "distance": 50,
   "hfov": 7.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.92,
   "yaw": -62.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.28
  }
 ],
 "id": "overlay_A1923516_9968_A9C2_41DC_061FEBE9C321",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LOUNGE"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A7B3720D_997B_ABC6_41DD_25EAEF967D8A",
   "yaw": 119.17,
   "pitch": -28.81,
   "distance": 50,
   "hfov": 8.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.83,
   "yaw": 119.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.81
  }
 ],
 "id": "overlay_A1BBEFCD_9969_B846_41DD_CFABE8C1B6B6",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA, this.camera_E06FEA94_F29D_7158_41EB_ABDE8F1870D8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "APARTMENTS"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF3ED9A3_9968_B8C2_41DF_A6861186BAD7",
   "yaw": 89.82,
   "pitch": -36.47,
   "distance": 100,
   "hfov": 15.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.49,
   "yaw": 89.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.47
  }
 ],
 "id": "overlay_B7FAAB79_98B9_584E_41CC_3C5859885949",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1, this.camera_E07ADA84_F29D_7138_41CB_CF8A2FB43315); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "RECEPTION"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF3EF9A3_9968_B8C2_41C8_839CEF6D454C",
   "yaw": -89.24,
   "pitch": -38.92,
   "distance": 100,
   "hfov": 15.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.41,
   "yaw": -89.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.92
  }
 ],
 "id": "overlay_B66EF684_98B8_A8C6_41E1_3319330260A7",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": -1.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0_HS_0_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   },
   "pitch": -95.53,
   "yaw": 14.69,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": -1.82,
   "yaw": 14.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4CFC3A_9732_EDD6_41B5_1FF81C84E2C7_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -95.53
  }
 ],
 "id": "overlay_A46F1641_9979_6BBE_41DD_A91E8A50ADF5",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D48174D_9732_1BB3_41DA_4251EE95C478, this.camera_E0274A46_F29D_7138_41E9_9C1506271F84); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BEDROOM 1"
  }
 ],
 "items": [
  {
   "hfov": 15.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0_HS_0_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 60
     }
    ]
   },
   "pitch": -5.81,
   "yaw": 17.88,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.71,
   "yaw": 17.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.81
  }
 ],
 "id": "overlay_D80584EC_996B_6846_41D7_6913E5C045EC",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D475C6F_9732_6E4F_41C7_9262166E752B, this.camera_E0031A17_F29D_7158_41D5_E6E21C0D6BAE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BEDROOM 2"
  }
 ],
 "items": [
  {
   "hfov": 12.97,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0_HS_1_0.png",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 66
     }
    ]
   },
   "pitch": -5.56,
   "yaw": 34.29,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.97,
   "yaw": 34.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.56
  }
 ],
 "id": "overlay_D9A82F9F_9969_58C2_41C5_F34177D4609D",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A, this.camera_E0356A36_F29D_7158_41E8_C9CCAE246985); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BEDROOM 3"
  }
 ],
 "items": [
  {
   "hfov": 13.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0_HS_2_0.png",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 56
     }
    ]
   },
   "pitch": -5.25,
   "yaw": 50.83,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.12,
   "yaw": 50.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E_0_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.25
  }
 ],
 "id": "overlay_D9D7705F_9969_A842_41C3_C71BC2162535",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "RECEPTION"
  }
 ],
 "items": [
  {
   "hfov": 8.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0_HS_0_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ]
   },
   "pitch": -62.38,
   "yaw": 3.46,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.45,
   "yaw": 3.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B3561_9732_1E73_41E0_7460FEBFC452_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -62.38
  }
 ],
 "id": "overlay_A57AC2BE_9979_A8C2_41E0_8394453E7098",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1, this.camera_E0F429D9_F29D_72C9_41D4_90C726D2780B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "RECEPTION"
  }
 ],
 "items": [
  {
   "hfov": 6.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0_HS_2_0.png",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 61
     }
    ]
   },
   "pitch": -4.2,
   "yaw": 12.03,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.77,
   "yaw": 12.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA_0_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.2
  }
 ],
 "id": "overlay_8A3510CA_98A9_6842_41DD_65205E598616",
 "data": {
  "label": "Image"
 }
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "RECEPTION"
  }
 ],
 "items": [
  {
   "hfov": 4.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0_HS_0_0.png",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": -75.62,
   "yaw": 12.18,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.49,
   "yaw": 12.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4A2849_9732_75B2_41C9_C18F51952F6A_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -75.62
  }
 ],
 "id": "overlay_A0BCF568_9977_E84E_41C6_7CAECAE26D76",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4, this.camera_E0C039C9_F29D_72C8_41C3_08B9D65CF217); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LOBBY"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B38572E1_98B8_A87F_41D1_5D6435C8A38B",
   "yaw": -1.11,
   "pitch": -29.58,
   "distance": 50,
   "hfov": 13.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.47,
   "yaw": -1.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.58
  }
 ],
 "id": "overlay_B671170D_98B7_E9C6_41B7_F5F9D13DD27F",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "APARTMENTS"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B38512E1_98B8_A87F_41D6_2AA0D9B8C4DF",
   "yaw": -27.01,
   "pitch": -27.05,
   "distance": 50,
   "hfov": 13.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.56,
   "yaw": -27.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.05
  }
 ],
 "id": "overlay_B70D4767_98B8_A842_41E1_F852700236A1",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9C358D84_972D_EEB1_41C6_F88E8CD805EA, this.camera_E0CA49B9_F29D_7348_41DB_A336E82AC318); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXTERIOR"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF3E29A3_9968_B8C2_419A_EFBDB0242570",
   "yaw": -163.52,
   "pitch": -39.65,
   "distance": 50,
   "hfov": 12.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.14,
   "yaw": -163.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.65
  }
 ],
 "id": "overlay_AB6E80F6_98B8_E842_41C5_EB104003FEDC",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BEDROOM 3"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF4049A3_9968_B8C2_41BB_6DB9CBA08300",
   "yaw": -112.89,
   "pitch": -31.28,
   "distance": 50,
   "hfov": 15.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.08,
   "yaw": -112.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.28
  }
 ],
 "id": "overlay_A3874080_989F_68BE_41DB_E8EAA9953348",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D4C715E_9732_164E_41DC_FF7845B1E75E, this.camera_E19EBAA4_F29D_717F_41E0_88C6A437E1FE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BATHROOM"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF4079A3_9968_B8C2_41E1_4A75E6E8F051",
   "yaw": -166.68,
   "pitch": -52.18,
   "distance": 50,
   "hfov": 8.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.85,
   "yaw": -166.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.18
  }
 ],
 "id": "overlay_AC6F8814_9898_A7C6_41D1_4DB7BA10CEFB",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LOUNGE"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D63C42A0_9998_E8FE_41CC_8E4127410F07",
   "yaw": 0.5,
   "pitch": 4.97,
   "distance": 100,
   "hfov": 10.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.09,
   "yaw": 0.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.97
  }
 ],
 "id": "overlay_D16A4D56_999F_F842_41E0_271F52D2A9A6",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "RECEPTION"
  }
 ],
 "items": [
  {
   "hfov": 11.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ]
   },
   "pitch": -53.33,
   "yaw": -23.38,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.45,
   "yaw": -23.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D491A23_9732_35F7_41D3_93A5EE521A29_0_HS_0_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -53.33
  }
 ],
 "id": "overlay_A275D2D1_997B_A85E_41C6_D3515F6BD5A9",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "RECEPTION"
  }
 ],
 "items": [
  {
   "hfov": 8.52,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0_HS_0_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -55.16,
   "yaw": -54.56,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.52,
   "yaw": -54.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D499D9B_9732_6ED7_41BB_BED9E5447BA0_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -55.16
  }
 ],
 "id": "overlay_A3AFE91A_9978_B9C2_41C8_3980254556C0",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BEDROOM"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A7B0B20D_997B_ABC6_41C3_C24271F138C8",
   "yaw": 87.05,
   "pitch": -23.48,
   "distance": 50,
   "hfov": 12.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.73,
   "yaw": 87.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.48
  }
 ],
 "id": "overlay_ADC900A1_98A8_A8FE_41DF_5CD542B82153",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LOBBY"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF3F29A3_9968_B8C2_41DF_9282E2A1886E",
   "yaw": -85.06,
   "pitch": -44.01,
   "distance": 100,
   "hfov": 12.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.49,
   "yaw": -85.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.01
  }
 ],
 "id": "overlay_A909AC42_9898_B842_41DE_D8C3F849E98C",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA, this.camera_E01FF9F8_F29D_72D7_41B1_5CEE46A1682C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LOUNGE 1"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF3FD9A3_9968_B8C2_41CF_CC45D6E5BB1C",
   "yaw": 0.64,
   "pitch": -53.43,
   "distance": 100,
   "hfov": 11.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.36,
   "yaw": 0.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -53.43
  }
 ],
 "id": "overlay_AAD49D9C_9898_B8C6_41E2_AA2C6C6D38FB",
 "data": {
  "label": "Info Red 01"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "KITCHEN"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D602D2A0_9998_E8FE_41C3_1D1E47743E24",
   "yaw": 77.39,
   "pitch": -1.23,
   "distance": 100,
   "hfov": 6.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.62,
   "yaw": 77.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.23
  }
 ],
 "id": "overlay_DCF97227_9998_ABC2_41C5_0FF50673A554",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "height": 110,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "width": "91.304%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 3,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0,
 "height": "85.959%"
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false,
 "height": "100%"
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 330,
 "scrollBarWidth": 10,
 "right": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "height": "100%"
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "scrollBarOpacity": 0.5
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF3E99A3_9968_B8C2_41B0_A7F126CAD002",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF3EB9A3_9968_B8C2_41DF_C20D0BE9D0A5",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D60142A0_9998_E8FE_417F_33DA4F95DBBC",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0_HS_5_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D601E2A0_9998_E8FE_4170_6B0CBD306A64",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D490EA5_9732_2AF2_41B5_FCAD390E1DDA_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF3FF9A3_9968_B8C2_41E2_3458F5CDFD2F",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF3FA9A3_9968_B8C2_41E0_37A5B8FFAFBC",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D60392A0_9998_E8FE_41DB_96E9F25DE046",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D48174D_9732_1BB3_41DA_4251EE95C478_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A7B3520D_997B_ABC6_41D6_8966659ADC5A",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A7B3720D_997B_ABC6_41DD_25EAEF967D8A",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D48F28B_9732_7AB6_41D5_7F53A51CD78A_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF3ED9A3_9968_B8C2_41DF_A6861186BAD7",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF3EF9A3_9968_B8C2_41C8_839CEF6D454C",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D486964_9732_1671_41B0_CE3FA89AD8D4_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B38572E1_98B8_A87F_41D1_5D6435C8A38B",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B38512E1_98B8_A87F_41D6_2AA0D9B8C4DF",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF3E29A3_9968_B8C2_419A_EFBDB0242570",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D48F01F_9732_15CE_41D7_1D0D5273C7D1_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF4049A3_9968_B8C2_41BB_6DB9CBA08300",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF4079A3_9968_B8C2_41E1_4A75E6E8F051",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D63C42A0_9998_E8FE_41CC_8E4127410F07",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D475C6F_9732_6E4F_41C7_9262166E752B_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_A7B0B20D_997B_ABC6_41C3_C24271F138C8",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF3F29A3_9968_B8C2_41DF_9282E2A1886E",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_AF3FD9A3_9968_B8C2_41CF_CC45D6E5BB1C",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0_HS_2_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_D602D2A0_9998_E8FE_41C3_1D1E47743E24",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_9D4B5465_9732_3E73_4182_95D69FECF360_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 60,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 60,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 58,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0.4,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "maxHeight": 80,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 50,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "minHeight": 1,
 "top": "40%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "bottom": "40%",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "90%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "maxHeight": 50,
 "paddingBottom": 0,
 "right": 9,
 "propagateClick": true,
 "width": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "minHeight": 1,
 "top": "40%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "bottom": "40%",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 140,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "itemVerticalAlign": "top",
 "borderRadius": 5,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemMinWidth": 50,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "width": "100%",
 "paddingBottom": 70,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelGap": 7,
 "verticalAlign": "middle",
 "borderSize": 0,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "itemPaddingBottom": 3,
 "paddingRight": 70,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarColor": "#04A3E1",
 "itemThumbnailHeight": 125,
 "minWidth": 1,
 "itemLabelFontStyle": "italic",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemMaxWidth": 1000,
 "itemLabelHorizontalAlign": "center",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMode": "normal",
 "gap": 26,
 "height": "92%",
 "itemThumbnailWidth": 220,
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Oswald",
 "shadow": false,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "itemLabelPosition": "bottom",
 "itemPaddingLeft": 3,
 "rollOverItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadow": true,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "propagateClick": true,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "horizontalAlign": "center",
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "class": "ThumbnailGrid",
 "itemMinHeight": 50,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "paddingLeft": 70,
 "rollOverItemThumbnailShadow": true,
 "data": {
  "name": "ThumbnailList"
 },
 "itemHeight": 160,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MapViewer",
 "left": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "99.975%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Montserrat Medium",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 140,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0.7,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 40,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 40,
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "- Buttons set"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "propagateClick": true,
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "height": "36.14%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "propagateClick": true,
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "height": "36.14%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 30,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 40,
 "height": "25%",
 "class": "Image",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
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
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": "26%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "26%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 1"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "bottom",
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 130,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "class": "Container",
 "gap": 5,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container footer"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "25%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 2-1"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
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
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "middle",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "25%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 2-2"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
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
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "25%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 2-3"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
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
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "25%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 2-4"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
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
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "25%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 2-5"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
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
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "25%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 2-6"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "RECEPTION >",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "APARTMENTS >",
 "class": "Button",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Inserdt Text",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "GYMNASIUM",
 "class": "Button",
 "gap": 5,
 "click": "this.mainPlayList.set('selectedIndex', 10)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "CAFETERIA",
 "class": "Button",
 "gap": 5,
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Floorplan"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "PARKING",
 "class": "Button",
 "gap": 5,
 "click": "this.mainPlayList.set('selectedIndex', 12)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Photoalbum"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "SHOP",
 "class": "Button",
 "gap": 5,
 "click": "this.mainPlayList.set('selectedIndex', 14)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "width": 40,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 2,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "backgroundColor": [
  "#5CA1DE"
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 78,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "bottom",
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 56,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 7,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 7,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "rollOverFontFamily": "Oswald",
 "iconHeight": 30,
 "iconWidth": 30,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "rollOverFontSize": 18,
 "fontColor": "#FFFFFF",
 "label": "BACK",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.5,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 8,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "LOBBY",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 2)",
 "paddingLeft": 10,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "SECURITY",
 "class": "Button",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 13)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Reception",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "LOUNGE 2",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 4)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Meeting Area 1",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Meeting Area 2",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Bar",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Chill Out",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Terrace",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Garden",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 0,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 0,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "rollOverFontFamily": "Oswald",
 "iconHeight": 30,
 "iconWidth": 30,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "rollOverFontSize": 18,
 "fontColor": "#FFFFFF",
 "label": "BACK",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.5,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 8,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "BEDROOM 1",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 5)",
 "paddingLeft": 10,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "BEDROOM 2",
 "class": "Button",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 6)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Lorem Ipsum",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "BEDROOM 3",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 7)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "BEDROOM 4",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 15)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "LOUNGE 1",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 3)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "LOUNGE 2",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 4)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "KITCHEN",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 11)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "BATHROOM",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 8)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "rollOverFontFamily": "Oswald",
 "iconHeight": 30,
 "iconWidth": 30,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "rollOverFontSize": 18,
 "fontColor": "#FFFFFF",
 "label": "BACK",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.5,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 8,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "BEDROOM 1",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "BEDROOM 2",
 "class": "Button",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Lorem Ipsum",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "BEDROOM 3",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "LOUNGE",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "rollOverFontFamily": "Oswald",
 "iconHeight": 30,
 "iconWidth": 30,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "rollOverFontSize": 18,
 "fontColor": "#FFFFFF",
 "label": "BACK",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.5,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 8,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Lorem Ipsum",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "rollOverFontFamily": "Oswald",
 "iconHeight": 30,
 "iconWidth": 30,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "rollOverFontSize": 18,
 "fontColor": "#FFFFFF",
 "label": "BACK",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.5,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 8,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Lorem Ipsum",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "rollOverFontFamily": "Oswald",
 "iconHeight": 30,
 "iconWidth": 30,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundOpacity": 0.8,
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "rollOverFontSize": 18,
 "fontColor": "#FFFFFF",
 "label": "BACK",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0.5,
 "layout": "absolute",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 8,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Lorem Ipsum",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "height": 36,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "label": "Lorem Ipsum",
 "class": "Button",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundColor": [
  "#000000",
  "#000000"
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "maxHeight": 101,
 "paddingBottom": 0,
 "propagateClick": false,
 "width": 44,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Info"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "maxHeight": 101,
 "paddingBottom": 0,
 "propagateClick": false,
 "width": 44,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "maxHeight": 101,
 "paddingBottom": 0,
 "propagateClick": false,
 "width": 44,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Location"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "maxHeight": 101,
 "paddingBottom": 0,
 "propagateClick": false,
 "width": 44,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "maxHeight": 101,
 "paddingBottom": 0,
 "propagateClick": false,
 "width": 44,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Floorplan"
 },
 "shadow": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "maxHeight": 101,
 "paddingBottom": 0,
 "propagateClick": false,
 "width": 44,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Realtor"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "maxHeight": 101,
 "paddingBottom": 0,
 "propagateClick": false,
 "width": 44,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Video"
 },
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "cursor": "hand"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "maxHeight": 101,
 "paddingBottom": 0,
 "propagateClick": false,
 "width": 50,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 50,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton --"
 },
 "shadow": false,
 "visible": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "cursor": "hand"
}],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "existsKey": function(key){  return key in window; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "downloadEnabled": false,
 "vrPolyfillScale": 1,
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
