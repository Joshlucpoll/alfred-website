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
    "title": "R5 Astromech Droid",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/R5/R5_9.png",
    "images": [
      "/assets/R5/R5_10.png",
      "/assets/R5/R5_13.png",
      "/assets/R5/R5_12.png",
      "/assets/R5/R5_4.png",
      "/assets/R5/R5.png"
    ],
    "videos": [],
    "description": "R5 Astromech droid modelled in blender and textured in Substance Painter. This was my first time using the Blender -> Substance pipeline."
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
    "title": "Fishing Fiasco",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/Fishing_Diorama/FishingFiasco10.png",
    "images": [
      "/assets/Fishing_Diorama/FishingFiasco7.png",
      "/assets/Fishing_Diorama/FishingFiasco5.png",
      "/assets/Fishing_Diorama/FishingFiasco4.png",
      "/assets/Fishing_Diorama/FishingFiasco1.png",
      "/assets/Fishing_Diorama/FishingFiasco2.png"
    ],
    "videos": [],
    "description": "A Diorama of a scene from a Dungeons and Dragons campaign. The elephant character was sculpted in Z-brush, then retopologized and rigged in blender. Modelling, texturing, cloth simulation, scene composition and rendering were done in blender. The environment was created with some imported assets from Megascans. Humanoid character creations were created with MetaHuman and rigged in blender. Postprocessing and colour grading werre done in Photoshop. "
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
    "title": "Everus Harbor",
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
      "/assets/Spartan/Spartan Vader.png",
      "/assets/Spartan/Spartan Vader.png"
    ],
    "videos": [],
    "description": "Original design inspired by the Spartan helmet. Modelled in blender and textured in Substance painter"
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
    "description": "A depiction of the Portuguese Man-O-War Siphonophore. Sculpted and Textured in blender"
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
    "description": "A 3D model of a TIE Fighter from the Star Wars franchise. Modelled and textured to a very high degree of acuracy in blender. Uses colour ramp nodes in conjuction with edge detection to create the metal edgware effect"
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
    "description": "Darth Vader's helmet from 'Star Wars: Episode III – Revenge of the Sith'. Modelled using primitive, box and edge modelling techniques, in blender"
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
    "description": "A diorama of a raft lost at sea. The water effect was created with the ocean modifier; this was used in conjuction with caustic effects to show the refraction of light without increasing render time. Modelled. textured and lit in blender. "
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
    "description": "Infinite corridor animation"
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
    "description": "Custom designed and made Harry Potter inspired Wands. Modelled and textured in blender"
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
    "description": "Original designs based of the weapons from Star Wars. Modelled and textured in blender"
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
    "description": "Original Designs of Sonic screwdrivers from the show 'Doctor Who. Modelled and textured in blender'"
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
    "description": "A Sci-fi gun designed in blender using primitive modelling methods."
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
    "title": "Bin",
    "path": function() {return "/" + urlify(this.title)},
    "model": false,
    "titleImage": "/assets/dt-bin/dtbin.png",
    "images": [
      "/assets/dt-bin/dtbin1.png",
      "/assets/dt-bin/dtbin2.png"
    ],
    "videos": [],
    "description": "Used in design ideas of A Level Design and Technology. Modular bin with expandable and contractable compartments along with magnetic slider for separation of ferrous metals"
  }
];

export default projects;