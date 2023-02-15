// let users = []

// const getData = function (callback) {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         displayData()
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }



// setTimeout(getData(displayData), 3000)



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Arrow Function 2~~~~~~~~~~~

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()


// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { //this is the change
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()



window.x = 100

const foo = {
    x: 5,
    friend: {
        x: 33,
        innerFoo: () => {
            console.log("foo in friend: ", this.x)
        }
    },
    boo: function(){
        setTimeout(()=>{
            console.log("x after boo timeout: ", this.x)
        }, 1000);
    }
}

foo.friend.innerFoo()
foo.boo()
