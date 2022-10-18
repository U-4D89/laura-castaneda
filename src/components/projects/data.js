const projects = [
    {
        id: 1,
        title:'Cuymmunity',
        technology: 'python, flask',
        cover:'https://i.postimg.cc/Cx6MY5Tq/cuymmunity-fl.png',
        repository:'https://github.com/U-4D89/cuymmunity_flask',
        description: 'My first web site, made for guinea pig lovers.'
    },

    {
        id: 2,
        title:'Cuymmunity',
        technology: 'python, django',
        cover:'https://i.postimg.cc/KYkGYbxs/fcuymmunity-dj.png',
        repository:'https://github.com/U-4D89/cuymmunity_django',
        description: `A web site made for guinea pig lovers. Where you can suggest or check services for your buddy.`
    }, 

    {
        id: 3,
        title:'Pokemon searcher',
        technology: 'javascript',
        cover:'https://i.postimg.cc/VN6SB21j/pksearch.png',
        repository:'https://github.com/U-4D89/pokemon_searcher',
        description: 'Search a pokemon of the first generation with help of the searcher and it creates a card with info about the pokemon searched.'
    }, 

    {
        id:4,
        title:'Yelpcamp',
        technology: 'javascript, mongo, express',
        cover:'https://i.postimg.cc/XJ5YsbPy/yelpcamp.png',
        repository:'https://github.com/U-4D89/Yelpcamp',
        description: 'Search, create, edit, delete or share your opinions about campsites.'
    },
    {
        id:5,
        title:'Tic tac toe',
        technology: 'python, zmq',
        cover:'https://i.postimg.cc/VvcLThyZ/ttt.png',
        repository:'https://github.com/U-4D89/tictactoe_zmq',
        description: `Let's play tic tac toe but is socket edition, go for a friend!`
    },
    {
        id:6,
        title:'Hangman',
        technology: 'python',
        cover:'https://i.postimg.cc/2yF8fxrk/hangman.png',
        repository:'https://github.com/U-4D89/hangmanpython',
        description: 'Another hangman game :P'
    },
    {
        id:7,
        title:'Pixel art',
        technology: 'react native',
        cover:'https://i.postimg.cc/L4BH5NFR/pixelart.png',
        repository:'',
        description: 'draw in pixel art from your mobile.'
    },
    {
        id:8,
        title:'30 days to code',
        technology:'python',
        cover:'https://i.postimg.cc/fbxPCqKR/30days.png',
        repository:'',
        description:'My solutions to the challenge of 30 days of code by Hacker Rank.'
    }


]

export function getProjects() {
    return projects
}

export function getProject(id) {
    return projects.find(
        (project) => project.id === id
    )
}