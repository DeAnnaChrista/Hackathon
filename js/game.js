// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image: "",
    levels: {

        start: {
            message: "You are in the kitchen",
            choices: [{
                    text: "make a sandwhich",
                    nextLevel: "sandwhich",
                },

                {
                    text: "heat up some pizza",
                    nextLevel: "fridge",
                },
            ]
        },
        sandwhich: {
            background_image: "",
            music: "",
            message: "That was delicious ",
            choices: [{
                    text: "next",
                    nextLevel: "fooditem",
                }

            ]
        },

    fooditem: {
        background_image: "",
        music: "",
        message: "Drink",
        choices: [{
            text: "water",
            nextLevel: "someotherfood",
        },
        {
            text: "juice",
            nextLevel: "someotherfood",
            
        }
        
         ]
    },

    someotherfood: {
        background_image: "",
        music: "",
        message: "ei",
        choices: [{
            text: "hielo",
            nextLevel: "otherfood",
        }, ]
    },

    fridge: {
        background_image: "",
        music: "",
        message: "You come across a fire monster or something!",
        choices: [{
                text: "grab dominoes",
                nextLevel: "start",
            },
            {
                text: "pizza hut",
                nextLevel: "close",
            },
        ]
    },




close:{
   background_image:"",
   music:"",
    message:"hello",
    choices: [{
        text: "cookie",
        nextLevel:"start",
    },
    {
        text:"or get 2",
        NextLevel:"dish",
      
    }]

    
},
Evil:{
    field: {
        message: "Some adventurer you are...",
        choices: [{
            text: "Start over",
            nextLevel: "start",
        }, ]
    },


Good:{
    field: {
        message: "Some adventurer you are...",
        choices: [{
            text: "Start over",
            nextLevel: "start",
        }, ]
    },


}
};
