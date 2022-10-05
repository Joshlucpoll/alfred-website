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
    "description": "Inspired by Everus Harbor spacestation from the Star Citizen MMO Videogame"
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
    "description": "Inspired by Interstellar's Gargantua Spinning Black Hole"
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
    "description": "Inspired by Interstellar's Gargantua Spinning Black Hole"
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
    "description": "The TIE (Twin Ion Engine) fighter is the backbone of the Empire, where it lack in shields, it makes up in speed and maneuverability"
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
    "description": "Darth Vader's helmet from 'Star Wars: Episode III – Revenge of the Sith'"
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
    "description": "<description>"
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
    "description": "From the Phasmophobia game, this is the operations hub of your ghost hunting business, where you detect paranormal activity"
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
    "description": "The Bergmann was a 19th-century semi-automatic pistol developed by German designer Louis Schmeisser and sold by Theodor Bergmann's company."
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
    "description": "Custom designed and made Harry Potter inspired Wands"
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
    "description": "Lightsabers from the movie Star Wars."
  },
  {
    "title": "Screw Drivers",
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
    "description": "Sonic screwdrivers from the show 'Doctor Who'"
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
    "description": "Inspired by Star Wars 'I am your father' scene in Episode V: The Empire Strikes Back. Smoke simulation was used to recreate this iconic environment"
  },
  {
    "title": "Sonic Gun",
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
    "description": "A combination of lightsaber, sonic screwdriver and sci-fi shit"
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
    "description": "Sofa model with cloth simulation and inflation algorithms"
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
    "description": "Used in design ideas of A Level Design and Technology. Bulb table is a table made of reused bulbs"
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