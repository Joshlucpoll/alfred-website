const urlify = function(a){return a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '')};

interface Project {
  title: string,
  path: () => string,
  model: false | {
    path: string,
    cameraPosition: {
      x: number,
      y: number,
      z: number
    },
  },
  titleImage: string,
  images: Array<string>,
  videos: Array<string>,
  description: string
}

interface Projects extends Array<Project> {};

//test

const projects: Projects = [
  {
    "title": "Single Cover for Charlie Hilton's 'CEREBRAL'",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/Cerebral/Cerebral11.png",
    "images": [
      "/assets/Cerebral/Cerebral3.png",
      "/assets/Cerebral/Cerebral4.png",
      "/assets/Cerebral/Cerebral5.png",
      "/assets/Cerebral/Cerebral9.png",
      "/assets/Cerebral/Cerebral6.png",
      "/assets/Cerebral/Cerebral7.png",
      "/assets/Cerebral/Cerebral8.png",
      "/assets/Cerebral/Cerebral10.png"
    ],
    "videos": [],
    "description": "A cover commisioned for Charlie Hilton for his single 'Cerebral'. Created using a Z-brush -> Blender -> Substance Painter -> Unreal 5 pipeline. I began by using a laser scanner to map Hilton's face. Using Z-brush, I sculpted the rest of his head, due to only having the face scan. I then baked the captured textures onto the model and matched the rest of his skin, creating pores. Once exported to Blender, I used the hair particle editor to create his hair. When exported to Unreal 5.1, I used the groom tools to make the hair look realistic. The environment was created with composited quixel assets. Bespoke models were designed in Blender and exported to Unreal, such as the conveyor flaps, that utilised cloth simulations. I used Nanite and Lumen, to create a realtime photorealistic style. I finalised the Scene with Niagra particle systems (sparks and dust) and volumetic fog. The final design was colour graded in Photoshop."
  },
  {
    "title": "R5 Astromech Droid",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/R5/R5 Astro.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/R5/R5_9.png",
    "images": [
      "/assets/R5/R5_10.png",
      "/assets/R5/R5_13.png",
      "/assets/R5/R5_12.png",
      "/assets/R5/R5_4.png",
      "/assets/R5/R5.png"
    ],
    "videos": [],
    "description": "R5 Astromech droid modelled in Blender and textured in Substance Painter. This was my first time using the Blender -> Substance pipeline. Notable uses of normal maps to create detail without additional poligons, with a high to low poly bake. Scenes were created and rendered in Blender. "
  },
  {
    "title": "Dalek",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/Dalek/Dalek.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/Dalek/Dalek 4.png",
    "images": [
      "/assets/Dalek/Dalek5.png",
      "/assets/Dalek/Dalek 3.png",
      "/assets/Dalek/Dalek 1.png",
      "/assets/Dalek/Dalek 2.png"
    ],
    "videos": [],
    "description": "The infamous antagonists of the Doctor Who franchise. Made using a Blender -> Substance -> Unreal 5 pipeline. Low and high poly models designed in blender, then exported to substance painter. Baked the high poly mesh to the low poly, to generate normals. Exported the textures to Unreal 5.1 and composed a scene using Quixel assets."
  },
  {
    "title": "Orcs",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/Orcs/orcs7.png",
    "images": [
      "/assets/Orcs/Shagflak.png",
      "/assets/Orcs/Flarg.png",
      "/assets/Orcs/Targul.png",
      "/assets/Orcs/Regrodz.png",
      "/assets/Orcs/Gorlog.png",
      "/assets/Orcs/Bolg.png"
    ],
    "videos": [],
    "description": "A group of orcs inspired by the Lord of the Rings trilogy and games. Sculpted and textured in Z-brush. Rendered and retopologized in Blender. Bolg is inspired by the character of the same name in the Hobbit trilogy."
  },
  {
    "title": "Everus Harbor",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/everus-harbor/everus harbor.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/everus-harbor/everus_harbor1.png",
    "images": [
      "/assets/everus-harbor/everus_harbor2.png",
      "/assets/everus-harbor/everus_harbor3.png"
    ],
    "videos": ["/assets/everus-harbor/everus_vid1.mp4"],
    "description": "Inspired by Everus Harbor spacestation from the Star Citizen MMO Videogame. The design utilizes a streamlined workflow, by using generated textures with alpha maps, to create the illusion of layered 3D modelling. This reduced the modelling time and poly count significantly"
  },
  {
    "title": "Battle of the Zomme",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/Zombies/zomme4.png",
    "images": [
      "/assets/Zombies/zomme1.png",
      "/assets/Zombies/zomme2.png",
      "/assets/Zombies/zomme3.png",
      "/assets/Zombies/zomme5.png"
    ],
    "videos": ["/assets/Zombies/Zombies.mp4"],
    "description": " This level was presented for Level Design Fundametals module, which scored a mark of 84%. The level is based around COD zombies and inspired by the Somme battlefield. Software used: Asset modelling - Maya, Blender ; Asset texturing - Sunstance Painter, Substance Designer ; Scene composition - Unreal Engine 4 ; Programming and blueprints - Unreal Engine 4 ; Cinematics - Unreal Engine 4."
  },
  {
    "title": "Fishing Fiasco",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/Fishing_Diorama/FishingFiasco10.png",
    "images": [
      "/assets/Fishing_Diorama/FishingFiasco7.png",
      "/assets/Fishing_Diorama/FishingFiasco5.png",
      "/assets/Fishing_Diorama/FishingFiasco4.png",
      "/assets/Fishing_Diorama/FishingFiasco1.png",
      "/assets/Fishing_Diorama/DNDelephant2.png"
    ],
    "videos": [],
    "description": "A Diorama of a scene from a Dungeons and Dragons campaign. The elephant character was sculpted in Z-brush, then retopologized and rigged in Blender. Modelling, texturing, cloth simulation, scene composition and rendering were done in Blender. The environment was created with some imported assets from Megascans. Humanoid character creations were created with MetaHuman and rigged in Blender. Postprocessing and colour grading were done in Photoshop. "
  },
  {
    "title": "Lancia Stratos",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/Lancia/Lancia Stratos.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/Lancia/Lancia.png",
    "images": [
      "/assets/Lancia/Lancia2.png",
      "/assets/Lancia/Lancia3.png"
    ],
    "videos": [],
    "description": "Replica of a Lancia Stratos, made for the Lighting and Texturing module. Given a First. A low poly 15k poly, that was created using a low to high poly workflow. Optimized for games Modelled in Maya and textured in Sunstance painter using the Unreal engine -> substance bridge. Rendered in Blender."
  },

  {
    "title": "Black Cabin Blunder",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/Cabin/BlackCabinBlunder8.png",
    "images": [
      "/assets/Cabin/BlackCabinBlunder5.png",
      "/assets/Cabin/BlackCabinBlunder4.png",
      "/assets/Cabin/BlackCabinBlunder.png"
    ],
    "videos": [],
    "description": "A Diorama of a scene from a Dungeons and Dragons campaign. The elephant character was sculpted in Z-brush, then retopologized and rigged in Blender. Modelling, texturing, cloth simulation, scene composition and rendering were done in Blender. Notable use of particle hair simulations for the trees. Humanoid character creations were created with MetaHuman and rigged in Blender. Postprocessing and colour grading were done in Photoshop.  "
  },
  {
    "title": "TIE Fighter",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/tie-fighter/tie-fighter.glb",
      "cameraPosition": {
        "x": 3,
        "y": 3,
        "z": 10
      }
    },
    "titleImage": "/assets/tie-fighter/tie-fighter.png",
    "images": [
      "/assets/tie-fighter/tie-fighter2.png",
      "/assets/tie-fighter/tie-fighter3.png",
      "/assets/tie-fighter/tie-fighter4.png"
    ],
    "videos": [],
    "description": "A 3D model of a TIE Fighter from the Star Wars franchise. Modelled and textured to a very high degree of acuracy in Blender. Uses colour ramp nodes in conjuction with edge detection to create the metal edgware effect"
  },
  {
    "title": "Bog Fisher (Bournemouth Modelling Competition Winner)",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/BogFisher/BogFisher.glb",
      "cameraPosition": {
        "x": 0,
        "y": 6,
        "z": 0
      }
    },
    "titleImage": "/assets/BogFisher/Bog Fisher3.png",
    "images": [
      "/assets/BogFisher/Bog Fisher5.png",
      "/assets/BogFisher/Bog Fisher1.png"
    ],
    "videos": [],
    "description": "Winning design for Bournemouth University first year game modelling competition. Descibed as:'An inpired design using great low poly modelling techniques'. The competition was to model a new mode of transport. I decided on a distopian stilt walker design that uses wind power to move. Modelled in Maya, with scene composition, texturing and rendering done in Blender"
  },
  {
    "title": "Spartan Helmet",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/Spartan/Spartan Vader.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/Spartan/Spartan Vader.png",
    "images": [
      "/assets/Spartan/Spartan Vader1.png",
      "/assets/Spartan/Spartan Vader2.png"
    ],
    "videos": [],
    "description": "Original design inspired by the Spartan helmet. Modelled in Blender and textured in Substance painter. particle hair simulation done in Blender."
  },
    {
    "title": "Black Hole",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/black-hole/blackhole.png",
    "images": [
      "/assets/black-hole/blackhole1.png",
      "/assets/black-hole/blackhole2.png"
    ],
    "videos": [],
    "description": "Inspired by Interstellar's Gargantua Spinning Black Hole. Uses volumetrics and some camera normals effects."
  },
  {
    "title": "DeLorean",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/DMC/DMC.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/DMC/DMC3.png",
    "images": [
      "/assets/DMC/DMC2.png",
      "/assets/DMC/DMC.png"
    ],
    "videos": [],
    "description": "Model of the DMC DeLorean, designed for the Game Modelling Fundamentals module. Received a First. Under 10k poly for game optimisation. Created using a low to high poly workflow with a high poly bake to the low poly. Modelled in Maya, textured in Substance Painter and rendered in Blender."
  },

  {
    "title": "Seismic Charge",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/Seismic/charge.glb",
      "cameraPosition": {
        "x": 0,
        "y": 4,
        "z": 0
      }
    },
    "titleImage": "/assets/Seismic/seismic charge4.png",
    "images": [
      "/assets/Seismic/seismic charge8.png",
      "/assets/Seismic/seismic charge.png"
    ],
    "videos": [],
    "description": "Replica of the siemic charge from Star Wars: Attack of The Clones. Modelled and textured in Blender"
  },
  {
    "title": "Tardis Console",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/Tardis/tardis42.png",
    "images": [
      "/assets/Tardis/lara's sonic.png",
      "/assets/Tardis/tardis.png",
      "/assets/Tardis/tardis2.png",
      "/assets/Tardis/tardis3.png"
    ],
    "videos": [],
    "description": " Renewed design of the original 1963 Tardis console from Dr who. Modelled and textured in Blender. Post processing and colour grading were done in Photoshop."
  },
  {
    "title": "Rings of Power",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/Rings/Rings of power7.png",
    "images": [
      "/assets/Rings/Rings of power6.png",
      "/assets/Rings/Rings of power.png"
    ],
    "videos": [],
    "description": " Rings inspired by the Lord of the Rings trilogy. Modelled and textured in Blender. Some testing with LOD creation with a high to low poly work flow."
  },
  {
    "title": "Man O' War",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/man-o'-war/Man o' war.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/man-o'-war/man-o'-war1.png",
    "images": [],
    "videos": [],
    "description": "A depiction of the Portuguese Man-O-War Siphonophore. Sculpted and Textured in Blender"
  },
  {
    "title": "Vader",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/vader/vader.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/vader/vader.png",
    "images": [
      "/assets/vader/vader2.png",
      "/assets/vader/vader3.png"
    ],
    "videos": [],
    "description": "Darth Vader's helmet from 'Star Wars: Episode III – Revenge of the Sith'. Modelled using primitive, box and edge modelling techniques, in Blender"
  },
  {
    "title": "Starkiller Base",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/StarKiller/starkiller_base3.png",
    "images": [
      "/assets/StarKiller/starkiller base2-4.png"
    ],
    "videos": ["/assets/StarKiller/0000-02805.mp4"],
    "description": "Origninal design inspired by Starkiller base from Starwars The Force Awakens. Modelled in Blender using alpha maps to produce low poly complicated designs to replicate complex extrusions. The postprocessing and colour grading were done in Photoshop.  "
  },
  {
    "title": "Sci-fi Mask Design",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/Custom_mask_design/Jegrah Fough helmet.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/Custom_mask_design/Jegrah_fough_helmet2.png",
    "images": [
    ],
    "videos": [
    ],
    "description": "Custom Designed Sci-fi helmet. Mostly using edge modelling methods"
  },
  {
    "title": "Ocean in a Box",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/ocean-diorama/oceandiorama.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/ocean-diorama/oceandiorama1.png",
    "images": [
      "/assets/ocean-diorama/oceandiorama2.png"
    ],
    "videos": [],
    "description": "A diorama of a raft lost at sea. The water effect was created with the ocean modifier; this was used in conjuction with caustic effects to show the refraction of light without increasing render time. Modelled. textured and lit in Blender. "
  },
  {
    "title": "The World is on the Corner",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/ricochet/Ricochet2.jpg",
    "images": [
    ],
    "videos": [
    ],
    "description": "Art render, depicting a Line from Ricochet-David Bowie. Uses volumetric raytracing and shot compositional techniques."
  },
  {
    "title": "Corridor",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/corridor/corridor.png",
    "images": [],
    "videos": ["/assets/corridor/corridor.mp4"],
    "description": "Infinite corridor animation made and rendered in Blender."
  },
  {
    "title": "Phasmophobia Lobby",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/phasmo/phasmo.png",
    "images": [
      "/assets/phasmo/phasmo2.png",
      "/assets/phasmo/phasmo3.png",
      "/assets/phasmo/phasmo4.png",
      "/assets/phasmo/phasmo5.png"
    ],
    "videos": [],
    "description": "A redesign of the lobby from the game Phasmophobia. As a fan of the game, I created a design of higher aesthetic fidelity, utilizing my level design skills. This was to see if I could make a more coherent design, enabling a chilling atmosphere."
  },
  {
    "title": "Mandalorian",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/mando/mando.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/mando/mando.png",
    "images": [
      "/assets/mando/mando2.png",
      "/assets/mando/mando3.png"
    ],
    "videos": [],
    "description": "The Mandolorian's helmet from 'Star Wars: The Mandalorian'"
  },
  {
    "title": "Bergmann",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/bergman/bergman.jpg",
    "images": [
      "/assets/bergman/bergman2.jpg"
    ],
    "videos": [],
    "description": "A digital replica of a Bergman pistol on a beach. Mostly using primitive and edge modelling techniques to achieve the iconic form  of the weapon. hair particle effects were used to make a realistic distribution for the grass."
  },
  {
    "title": "Wands",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/wands/wands.glb",
      "cameraPosition": {
        "x": 1,
        "y": 4,
        "z": 1
      }
    },
    "titleImage": "/assets/wands/wands.png",
    "images": [
      "/assets/wands/wands2.png",
      "/assets/wands/wands3.png"
    ],
    "videos": [],
    "description": "Custom designed and made Harry Potter inspired Wands. Modelled and textured in Blender"
  },
  {
    "title": "Sabers",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/sabers/sabers.glb",
      "cameraPosition": {
        "x": 1,
        "y": 5,
        "z": 1
      }
    },
    "titleImage": "/assets/sabers/sabers.png",
    "images": [
      "/assets/sabers/sabers1.png",
      "/assets/sabers/sabers2.png",
      "/assets/sabers/sabers3.png",
      "/assets/sabers/sabers4.png"
    ],
    "videos": [],
    "description": "Original designs based of the weapons from Star Wars. Modelled and textured in Blender"
  },
  {
    "title": "Sonic Screwdrivers",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/screw-drivers/sonic.glb",
      "cameraPosition": {
        "x": 3,
        "y": 3,
        "z": 0
      }
    },
    "titleImage": "/assets/screw-drivers/sonic.png",
    "images": [
      "/assets/screw-drivers/sonic1.png",
      "/assets/screw-drivers/sonic2.png",
      "/assets/screw-drivers/sonic3.png",
      "/assets/screw-drivers/sonic4.png",
      "/assets/screw-drivers/sonic5.png",
      "/assets/screw-drivers/sonic6.png",
      "/assets/screw-drivers/sonic7.png",
      "/assets/screw-drivers/sonic8.png",
      "/assets/screw-drivers/sonic9.png",
      "/assets/screw-drivers/sonic10.png",
      "/assets/screw-drivers/sonic11.png"
    ],
    "videos": [],
    "description": "Original Designs of Sonic screwdrivers from the show 'Doctor Who. Modelled and textured in Blender'"
  },
  {
    "title": "Catwalk",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/catwalk/catwalk.glb",
      "cameraPosition": {
        "x": 10,
        "y": 3,
        "z": 0
      }
    },
    "titleImage": "/assets/catwalk/catwalk.png",
    "images": [
      "/assets/catwalk/catwalk2.png",
      "/assets/catwalk/catwalk3.png"
    ],
    "videos": [],
    "description": "Inspired by Star Wars 'I am your father' scene in Episode V: The Empire Strikes Back. Smoke simulations were used to recreate this iconic environment"
  },
  {
    "title": "Sci-fi Gun",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/sonic-gun/sonicgun.glb",
      "cameraPosition": {
        "x": 2,
        "y": 3,
        "z": 2
      }
    },
    "titleImage": "/assets/sonic-gun/sonicgun.png",
    "images": [
      "/assets/sonic-gun/sonicgun1.png",
      "/assets/sonic-gun/sonicgun2.png",
      "/assets/sonic-gun/sonicgun3.png"
    ],
    "videos": [],
    "description": "A Sci-fi gun designed in Blender using primitive modelling methods."
  },
  {
    "title": "Sofa",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/sofa/sofa.png",
    "images": [
      "/assets/sofa/sofa1.png",
      "/assets/sofa/sofa2.png"
    ],
    "videos": [],
    "description": "High poly sofa model with cloth simulation and the inflate modifier to create organic looking cloth."
  },
  {
    "title": "Bulb Table",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/bulb-table/bulbtable.glb",
      "cameraPosition": {
        "x": 2,
        "y": 2,
        "z": 2
      }
    },
    "titleImage": "/assets/bulb-table/bulbtable.png",
    "images": [
      "/assets/bulb-table/bulbtable1.png",
      "/assets/bulb-table/bulbtable2.png",
      "/assets/bulb-table/bulbtable3.png",
      "/assets/bulb-table/bulbtable4.png"
    ],
    "videos": [],
    "description": "Used in design ideas of A Level Design and Technology. Bulb table is a table made of reused bulbs. Utilizes transparent materials to create refreactive light effects."
  },
  {
    "title": "Bic Pen",
    "path": function() {return "/" + urlify(this.title)},
    "model": {
      "path": "/assets/bic-pen/bicpen.glb",
      "cameraPosition": {
        "x": 3,
        "y": 10,
        "z": 3
      }
    },
    "titleImage": "/assets/bic-pen/bicpen.png",
    "images": [
      "/assets/bic-pen/bicpen1.png"
    ],
    "videos": [],
    "description": "Recreation of Bic Pen in Blender. Includes pot and multi-coloured pens"
  },
  {
    "title": "SandN UI Elements",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/SandN UI/SandN_Template.png",
    "images": [
      "/assets/SandN UI/Background 1 Intro.png",
      "/assets/SandN UI/Background 2 precinct.png",
      "/assets/SandN UI/Background 3 the Hub.png",
      "/assets/SandN UI/Background 4 Vicars' flashback.png",
      "/assets/SandN UI/Background 5 Car Chase.png",
      "/assets/SandN UI/Background 6 Casino.png",
      "/assets/SandN UI/Background 7 Ginger Factory.png",
      "/assets/SandN UI/Background 8 Gingerbread House.png",
      "/assets/SandN UI/Background 9 Gingerbread interior.png",
      "/assets/SandN UI/Boarder.png",
      "/assets/SandN UI/Character info 1 Vicars.png",
      "/assets/SandN UI/Character info 2 Witch.png",
      "/assets/SandN UI/Character info 3 Guy.png",
      "/assets/SandN UI/Character info 4 Nero.png",
      "/assets/SandN UI/Character info 5 Hunt.png",
      "/assets/SandN UI/Character info 6 Byrd.png",
      "/assets/SandN UI/Character info Deceased.png",
      "/assets/SandN UI/Character info Deceased2.png",
      "/assets/SandN UI/Character info Deceased3.png",
      "/assets/SandN UI/Player Gretel.png",
      "/assets/SandN UI/Player Hansel.png"
    ],
    "videos": [],
    "description": ""
  }
];

export default projects;
