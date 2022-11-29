// import axios from 'axios'

let pizzaData = [
  {
    "name": "Margherita",
    "type": "Pizza",
    "veg": true,
    "price": 3,
    "description": "Cheese",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 3
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 5
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 8
      }

    }
  },
  {
    "name": "Tandoori Paneer",
    "type": "Pizza",
    "veg": true,
    "price": 7,
    "description": "Spiced paneeer, Onion,Green Capsicum & Red Paprika in Tandoori Sauce",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 7
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 9
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 12
      }

    }
  },
  {
    "name": "Veggie Supreme",
    "type": "Pizza",
    "veg": true,
    "price": 8,
    "description": "Black Olives,Green Capsicum, Mushroom, Onion,Red Paprika, Sweet Corn",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 8
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 9
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 10
      }

    }
  },
  {
    "name": "Double Paneer Supreme",
    "type": "Pizza",
    "veg": true,
    "price": 6,
    "description": "Spiced Paneer, Herbed Onion&Green Capsicum, Red Paprika",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.3cb382529b41d14d4a041b5cc5e64341.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 6
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 7
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 9
      }

    }
  },
  {
    "name": "Veggie Kebab Surprise",
    "type": "Pizza",
    "veg": true,
    "price": 4,
    "description": "Veg Kebab,Onion,Green Capsicum,Tomato & Sweet Corn in Tandoori Sauce",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veg-kebab-surprise.abab1dff179ab8cf95a59f30d6352297.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 5
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 6
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 8
      }

    }
  },
  {
    "name": "Chicken Supreme",
    "type": "Pizza",
    "veg": false,
    "price": 7,
    "description": "Herbed Chicken,Schezwan Chicken Meatball,Chicken Tikka",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.6d53f104f071d304a47440f2fffa7378.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 7
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 9
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 12
      }

    }
  },
  {
    "name": "Chicken Tikka Supreme",
    "type": "Pizza",
    "veg": false,
    "price": 6,
    "description": "Chicken Tikka,Chicken Malai Tikka,Onion,Red Paprika",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka-supreme.830de5a911ca95a30e4ca98e529f1b3a.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 7
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 9
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 11
      }

    }
  },
  {
    "name": "Triple Chicken Feast",
    "type": "Pizza",
    "veg": false,
    "price": 8,
    "description": "Schezwan Chicken Meatball Herbed Chicken,Chicken Sausage,Geen Capsicum, Onion,Red Paprika",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.e4a546e7a8581a60952b99e3fe22987e.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 8
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 10
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 13
      }

    }
  },
  {
    "name": "Chicken Tikka",
    "type": "Pizza",
    "veg": false,
    "price": 7,
    "description": "Chicken Tikka, Onion, Tomato",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka.6d441a65371e941db36c2754586119a8.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 7
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 8
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 9
      }

    }
  },
  {
    "name": "Double Chicken Sausage",
    "type": "Pizza",
    "veg": false,
    "price": 5,
    "description": "Chicken Sausage",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-chicken-sausage.f172dd6a365e90e655258b17555e74ad.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 5
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 6
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 7
      }

    }
  },
  {
    "name": "Spiced Chicken Meatballs",
    "type": "Pizza",
    "veg": false,
    "price": 4,
    "description": "Schezwan Chicken Meatball Onion",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/spiced-chicken-meatballs.abd238e81080106d181567a9b52844ae.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 4
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 5
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 6
      }

    }
  },
  {
    "name": "Double Cheese",
    "type": "Pizza",
    "veg": true,
    "price": 3,
    "description": "Extra Cheese on Cheese",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.3c8885f8bc6f18facedc7626368f5105.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 3
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 5
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 7
      }

    }
  },
  {
    "name": "Chicken Pepper Crunch",
    "type": "Pizza",
    "veg": false,
    "price": 5,
    "description": "Herbed Chicken, Onion, Green Capsicum, Red Capsicum ",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-pepper-crunch.624edb192601b73335e0100db5a6263a.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 5
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 6
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 7
      }

    }
  },
  {
    "name": "Italian Chicken Feast",
    "type": "Pizza",
    "veg": false,
    "price": 6,
    "description": "Herbed Chicken, Onion, Green Capsicum, Red Capsicum ",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/italian-chicken-feast.edad91a082e9a16d677722a071487a1c.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 6
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 7
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 9
      }

    }
  },
  {
    "name": "Corn & Cheese",
    "type": "Pizza",
    "veg": true,
    "price": 5,
    "description": "Cheese ,Sweet Corn",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.f8baa08ad7f607f1de30f96bb9245b50.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 5
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 7
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 9
      }

    }
  },
  {
    "name": "Tandoori Onion",
    "type": "Pizza",
    "veg": true,
    "price": 6,
    "description": "Cheese & Onion in Tandoori sause",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-onion.98e8cbd306a1166cedbbdbd2a97eade3.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 7
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 9
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 11
      }

    }
  },
  {
    "name": "Chicken Pepperoni",
    "type": "Pizza",
    "veg": false,
    "price": 5,
    "description": "Cheese ,Chicken pepperoni",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-pepperoni.6952ef03215b72477abff3574b4b881e.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 6
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 9
      },
      "medium stuffed crust kebab":
      {
        "price": 11
      }

    }
  },
  {
    "name": "Chicken N Corn Delight",
    "type": "Pizza",
    "veg": false,
    "price": 9,
    "description": "Cheese ,Chicken pepperoni",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-n-corn-delight.61cc42effb2de18e6625796c964dd92d.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 9
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 11
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 12
      }

    }
  },
  {
    "name": "Farmers Pick",
    "type": "Pizza",
    "veg": true,
    "price": 29,
    "description": "Onion Herbed & Green Capsicum, Red Capsicum, Mushroom, Baby Corn",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/farmers-pick.794695a631c14d4404057470020be703.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 5
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 6
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 8
      }

    }
  },
  {
    "name": "Classic Corn",
    "type": "Pizza",
    "veg": true,
    "price": 5,
    "description": "Pizza topped with our Classic Pan sauce, sweet corn and cheesy dressing. An all-time favorite.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-corn-pan-personal.7c80196383b32e2ad5715646c1b12df8.1.png?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 5
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 7
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 9
      }

    }
  },
  {
    "name": "Classic Onion Capsicum",
    "type": "Pizza",
    "veg": true,
    "price": 4,
    "description": "Pizza topped with our Classic Pan sauce, crunchy onion & capsicum and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-onion-capsicum-pan-personal.dad788ecbd3fcc57366462827e31ee05.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 4
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 5
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 7
      }

    }
  },
  {
    "name": "Italian Onion Tomato",
    "type": "Pizza",
    "veg": true,
    "price": 8,
    "description": "Pizza topped with our Chef's Special Italian sauce, crunchy onion, juicy tomatoes and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/italian-onion-tomato-pan-personal.cb37b0766ef3ba8844fa69b2d073c215.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 8
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 10
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 12
      }

    }
  },
  {
    "name": "Tandoori Mushroom & Sweet Corn",
    "type": "Pizza",
    "veg": true,
    "price": 5,
    "description": "Pizza topped with our signature tandoori sauce, juicy mushroom, sweet corn and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-mushroom-&-sweet-corn-pan-personal.49a1287d1cece07781c106e552979fa2.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 5
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 6
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 7
      }

    }
  },
  {
    "name": "Schezwan Corn & Capsicum",
    "type": "Pizza",
    "veg": true,
    "price": 6,
    "description": "Pizza topped with Spicy Schezwan sauce, sweet corn & crunchy capsicum and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/schezwan-corn-&-capsicum-pan-personal.23c83846270110a536b40ec74529e907.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 6
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 7
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 8
      }

    }
  },
  {
    "name": "Only Cheesy",
    "type": "Pizza",
    "veg": true,
    "price": 8,
    "description": "Pizza topped with cheesy dressing and mozzarella cheese for that extraaa cheesy flavor.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/only-cheesy-pan-personal.951dbe6ee07dafc48e04fe9a1bbe4ddb.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 8
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 9
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 11
      }

    }
  },
  {
    "name": "Classic Sausage",
    "type": "Pizza",
    "veg": false,
    "price": 8,
    "description": "Pizza topped with our Classic Pan sauce, flavorful chicken sausage and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-sausage-pan-personal.fbbfbce57f62a8d8b366db5f66798704.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 8
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 9
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 11
      }

    }
  },
  {
    "name": "Classic Paneer Capsicum & Onion",
    "type": "Pizza",
    "veg": true,
    "price": 6,
    "description": "Pizza topped with our Classic Pan sauce, flavorful paneer, crunchy onion & capsicum and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-paneer-capsicum-&-onion-pan-personal.ae2c5f3e3e5881af1f31e65cb9526289.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 6
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 7
      }
      ,
      "medium stuffed crust veg-kebab":
      {
        "price": 9
      }

    }
  },
  {
    "name": "Italian Pepperoni & Onion",
    "type": "Pizza",
    "veg": false,
    "price": 5,
    "description": "Pizza topped with our Chef's Special Italian sauce, crunchy onion, chicken pepperoni and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/italian-pepperoni-&-onion-pan-personal.b6c0c99c9241f2fce14493773f625dd3.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 5
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 6
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 7
      }

    }
  },
  {
    "name": "Schezwan Meatball & Capsicum",
    "type": "Pizza",
    "veg": false,
    "price": 10,
    "description": "Pizza topped with Spicy Schezwan sauce, crunchy capsicum, Schezwan meatballs and cheesy dressing making it spice lovers paradise.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/schezwan-meatball-&-capsicum-pan-personal.e27dd4520db7e81fbebeec8428a925bf.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 12
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 15
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 18
      }

    }
  },
  {
    "name": "Tandoori Tikka & Onion",
    "type": "Pizza",
    "veg": false,
    "price": 5,
    "description": "Pizza topped with our signature tandoori sauce, crunchy onion, flavorful chicken tikka and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-tikka-&-onion-pan-personal.e47a58535b3ef920e00d559d79defad4.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 6
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 7
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 9
      }

    }
  },
  {
    "name": "Classic Loaded Chicken Delight",
    "type": "Pizza",
    "veg": false,
    "price": 9,
    "description": "Pizza topped with our Classic Pan sauce, herbed chicken, flavorful sausages, juicy tomato and cheesy dressing.",
    "quantity": 1,
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-loaded-chicken-delight-pan-personal.8d0b6cb6bc34a734679ac40004edba10.1.jpg?width=550",
    "sizeandcrust":
    {
      "medium pan":
      {
        "price": 9
      }
      ,
      "medium stuffed crust cheese-max":
      {
        "price": 11
      }
      ,
      "medium stuffed crust kebab":
      {
        "price": 13
      }

    }
  }
]

let dessertdata =[
  {
    "name": "Choco Sundae",
    'veg':true,
    'type':'Dessert',
    "price": 2,
    "description": "Choco Sundae Cup (100 ml)",
    "img": "https://www.havmor.com/sites/default/files/styles/502x375/public/gallery/Choco%20Sundae__0.webp?itok=Md5Ameuw",
    "quantity": 1
  },
  {
    "name": "Cornetto Double Chocolate",
    'veg':true,
    'type':'Dessert',
    "price": 2,
    "description": "Cornetto Double Chocolate Cone (105 ml)",
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/cornetto-double-chocolate.acc21849ac732f2f85998ad73e532d40.1.jpg?width=522",
    "quantity": 1
  },
  {
    "name": "Divine Chocolate(Tub)",
    'veg':true,
    'type':'Dessert',
    "price": 6,
    "description": "Divine Chocolate (700 ml)",
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/divine-chocolate-tub.1df6b11e6e5d510cd11ae0d6e475686d.1.jpg?width=522",
    "quantity": 1
  },
  {
    "name": "Choco Volcano Cake",
    'veg':true,
    'type':'Dessert',
    "price": 6,
    "description": "Choco Delight With A Gooey Chocolate Volcano Centre",
    "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.f829dc6e30a07b83f232b4880395162f.1.jpg",
    "quantity": 1
  }
]

let drinksData = [
  {
    name:'Pepsi',
    type:'Drinks',
    description:'Contains Caffine',
    veg:true,
    price:2,
    quantitiy:1,
    img:'https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi.ebd77460b7e104a70753241ad502abca.1.jpg?width=600'
},
  {
    name:'Pepsi Black',
    type:'Drinks',
    description:'Contains Caffine',
    veg:true,
    price:2,
    quantitiy:1,
    img:'https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-black.05bd5ce9c59d6fea34befe77a4c5bdee.1.jpg?width=600'
},
  {
    name:'Miranda',
    type:'Drinks',
    description:'Contains Caffine',
    veg:true,
    price:2,
    quantitiy:1,
    img:'https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/mirinda.b67f0e29703e70fd5dfe91f900dc0046.1.jpg?width=600'
},
  {
    name:'Water Bottle',
    type:'Drinks',
    description:'Packaged Drinking Water',
    veg:true,
    price:1,
    quantitiy:1,
    img:'https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/water-bottle-1000ml.32f62c675717e68e9aa542fe84dff3ad.1.jpg?width=600'
},
]


for (let element of pizzaData) {
  try {
    //  axios.post('https://6383737b6e6c83b7a993f4e3.mockapi.io/PizzaData',element)
  } catch {
    console.log('err')
  }
}
for (let element of dessertdata) {
  try {
    //  axios.post('https://6383737b6e6c83b7a993f4e3.mockapi.io/DessertData',element)
  } catch {
    console.log('err')
  }
}
for (let element of drinksData) {
  try {
    //  axios.post('https://6383737b6e6c83b7a993f4e3.mockapi.io/DrinksData',element)
  } catch {
    console.log('err')
  }
}



