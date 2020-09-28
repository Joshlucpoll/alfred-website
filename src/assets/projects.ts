const projects = [
  {
    title: "Black Hole",
    model: false,
    titleImage: "/assets/black-hole/blackhole.png",
    images: [
      "/assets/black-hole/blackhole1.png",
      "/assets/black-hole/blackhole2.png"
    ],
    description: "Inspired by Interstellar's Gargantua Spinning Black Hole"
  },
  {
    title: "Wands",
    model: {
      path: "/assets/wands/wands.glb",
      cameraPosition: {
        x: 1,
        y: 4,
        z: 1
      },
      lightIntensity: 3,
    },
    titleImage: "/assets/wands/wands.png",
    images: [
      "/assets/wands/wands2.png",
      "/assets/wands/wands3.png"
    ],
    description: "Custom designed and made Harry Potter inspired Wands"
  },
  {
    title: "Sabers",
    model: {
      path: "/assets/sabers/sabers.glb",
      cameraPosition: {
        x: 1,
        y: 5,
        z: 1
      },
      lightIntensity: 1,
    },
    titleImage: "/assets/sabers/sabers.png",
    images: [
      "/assets/sabers/sabers1.png",
      "/assets/sabers/sabers2.png",
      "/assets/sabers/sabers3.png",
      "/assets/sabers/sabers4.png"
    ],
    description: "Lightsabers from the movie Star Wars."
  },
  {
    title: "Screw Drivers",
    model: {
      path: "/assets/screw-drivers/sonic.glb",
      cameraPosition: {
        x: 3,
        y: 3,
        z: 0
      },
      lightIntensity: 1,
    },
    titleImage: "/assets/screw-drivers/sonic.png",
    images: [
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
    description: "Sonic screwdrivers from the show 'Doctor Who'"
  },
  {
    title: "Catwalk",
    model: {
      path: "/assets/catwalk/catwalk.glb",
      cameraPosition: {
        x: 10,
        y: 3,
        z: 0
      },
      lightIntensity: 5,
    },
    titleImage: "/assets/catwalk/catwalk.png",
    images: [
      "/assets/catwalk/catwalk2.png",
      "/assets/catwalk/catwalk3.png"
    ],
    description: "Inspired by Star Wars 'I am your father' scene in Episode V: The Empire Strikes Back. Smoke simulation was used to recreate this iconic environment"
  },
  {
    title: "Sonic Gun",
    model: {
      path: "/assets/sonic-gun/sonicgun.glb",
      cameraPosition: {
        x: 2,
        y: 3,
        z: 2
      },
      lightIntensity: 50,
    },
    titleImage: "/assets/sonic-gun/sonicgun.png",
    images: [
      "/assets/sonic-gun/sonicgun1.png",
      "/assets/sonic-gun/sonicgun2.png",
      "/assets/sonic-gun/sonicgun3.png"
    ],
    description: "A combination of lightsaber, sonic screwdriver and sci-fi shit"
  },
  {
    title: "Sofa",
    model: false,
    titleImage: "/assets/sofa/sofa.png",
    images: [
      "/assets/sofa/sofa1.png",
      "/assets/sofa/sofa2.png"
    ],
    description: "Sofa model with cloth simulation and inflation algorithms"
  },
  {
    title: "Bulb Table",
    model: {
      path: "/assets/bulb-table/bulbtable.glb",
      cameraPosition: {
        x: 2,
        y: 2,
        z: 2
      },
      lightIntensity: 1,
    },
    titleImage: "/assets/bulb-table/bulbtable.png",
    images: [
      "/assets/bulb-table/bulbtable1.png",
      "/assets/bulb-table/bulbtable2.png",
      "/assets/bulb-table/bulbtable3.png",
      "/assets/bulb-table/bulbtable4.png"
    ],
    description: "Used in design ideas of A Level Design and Technology. Bulb table is a table made of reused bulbs"
  },
  {
    title: "Bic Pen",
    model: {
      path: "/assets/bic-pen/bicpen.glb",
      cameraPosition: {
        x: 3,
        y: 10,
        z: 3
      },
      lightIntensity: 1,
    },
    titleImage: "/assets/bic-pen/bicpen.png",
    images: [
      "/assets/bic-pen/bicpen1.png",
    ],
    description: "Recreation of Bic Pen in Blender. Includes pot and multi-coloured pens"
  },
  {
    title: "Bin",
    model: false,
    titleImage: "/assets/dt-bin/dtbin.png",
    images: [
      "/assets/dt-bin/dtbin1.png",
      "/assets/dt-bin/dtbin2.png"
    ],
    description: "Used in design ideas of A Level Design and Technology. Modular bin with expandable and contractable compartments along with magnetic slider for separation of ferrous metals"
  },
];

export default projects;