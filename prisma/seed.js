import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const games = [
{
    //Fase de Grupo 

    "gameTime": "2022-11-20T16:00:00Z",
    "homeTeam": "cat",
    "awayTeam": "equ"
    },
    {
    "gameTime": "2022-11-21T13:00:00Z",
    "homeTeam": "ing",
    "awayTeam": "ira"
    },
    {
    "gameTime": "2022-11-21T16:00:00Z",
    "homeTeam": "sen",
    "awayTeam": "hol"
    },
    {
    "gameTime": "2022-11-21T19:00:00Z",
    "homeTeam": "eua",
    "awayTeam": "gal"
    },
    {
    "gameTime": "2022-11-22T10:00:00Z",
    "homeTeam": "arg",
    "awayTeam": "ara"
    },
    {
    "gameTime": "2022-11-22T13:00:00Z",
    "homeTeam": "din",
    "awayTeam": "tun"
    },
    {
    "gameTime": "2022-11-22T16:00:00Z",
    "homeTeam": "mex",
    "awayTeam": "pol"
    },
    {
    "gameTime": "2022-11-22T19:00:00Z",
    "homeTeam": "fra",
    "awayTeam": "aus"
    },
    {
    "gameTime": "2022-11-23T10:00:00Z",
    "homeTeam": "mar",
    "awayTeam": "cro"
    },
    {
    "gameTime": "2022-11-23T13:00:00Z",
    "homeTeam": "ale",
    "awayTeam": "jap"
    },
    {
    "gameTime": "2022-11-23T16:00:00Z",
    "homeTeam": "esp",
    "awayTeam": "cos"
    },
    {
    "gameTime": "2022-11-23T19:00:00Z",
    "homeTeam": "bel",
    "awayTeam": "can"
    },
    {
    "gameTime": "2022-11-24T10:00:00Z",
    "homeTeam": "sui",
    "awayTeam": "cam"
    },
    {
    "gameTime": "2022-11-24T13:00:00Z",
    "homeTeam": "uru",
    "awayTeam": "cor"
    },
    {
    "gameTime": "2022-11-24T16:00:00Z",
    "homeTeam": "por",
    "awayTeam": "gan"
    },
    {
    "gameTime": "2022-11-24T19:00:00Z",
    "homeTeam": "bra",
    "awayTeam": "ser"
    },
    {
    "gameTime": "2022-11-25T10:00:00Z",
    "homeTeam": "gal",
    "awayTeam": "ira"
    },
    {

    "gameTime": "2022-11-25T13:00:00Z",
    "homeTeam": "cat",
    "awayTeam": "sen"
    },
    {
    "gameTime": "2022-11-25T16:00:00Z",
    "homeTeam": "hol",
    "awayTeam": "equ"
    },
    {
    "gameTime": "2022-11-25T19:00:00Z",
    "homeTeam": "ing",
    "awayTeam": "eua"
    },
    {
    "gameTime": "2022-11-26T10:00:00Z",
    "homeTeam": "tun",
    "awayTeam": "aus"
    },
    {

    "gameTime": "2022-11-26T13:00:00Z",
    "homeTeam": "pol",
    "awayTeam": "ara"
    },
    {
    "gameTime": "2022-11-26T16:00:00Z",
    "homeTeam": "fra",
    "awayTeam": "din"
    },
    {
    "gameTime": "2022-11-26T19:00:00Z",
    "homeTeam": "arg",
    "awayTeam": "mex"
    },
    {
    "gameTime": "2022-11-27T10:00:00Z",
    "homeTeam": "jap",
    "awayTeam": "cos"
    },
    {
    "gameTime": "2022-11-27T13:00:00Z",
    "homeTeam": "bel",
    "awayTeam": "mar"
    },
    {
    "gameTime": "2022-11-27T16:00:00Z",
    "homeTeam": "cro",
    "awayTeam": "can"
    },
    {
    "gameTime": "2022-11-27T19:00:00Z",
    "homeTeam": "esp",
    "awayTeam": "ale"
    },
    {
    "gameTime": "2022-11-28T10:00:00Z",
    "homeTeam": "cam",
    "awayTeam": "ser"
    },
    {
    "gameTime": "2022-11-28T13:00:00Z",
    "homeTeam": "cor",
    "awayTeam": "gan"
    },
    {
    "gameTime": "2022-11-28T16:00:00Z",
    "homeTeam": "bra",
    "awayTeam": "sui"
    },
    {
    "gameTime": "2022-11-28T19:00:00Z",
    "homeTeam": "por",
    "awayTeam": "uru"
    },
    {
    "gameTime": "2022-11-29T15:00:00Z",
    "homeTeam": "equ",
    "awayTeam": "sen"
    },
    {
    "gameTime": "2022-11-29T15:00:00Z",
    "homeTeam": "hol",
    "awayTeam": "cat"
    },
    {
    "gameTime": "2022-11-29T19:00:00Z",
    "homeTeam": "ira",
    "awayTeam": "eua"
    },
    {
    "gameTime": "2022-11-29T19:00:00Z",
    "homeTeam": "gal",
    "awayTeam": "ing"
    },
    {
    "gameTime": "2022-11-30T15:00:00Z",
    "homeTeam": "tun",
    "awayTeam": "fra"
    },
    {
    "gameTime": "2022-11-30T15:00:00Z",
    "homeTeam": "aus",
    "awayTeam": "din"
    },
    {
    "gameTime": "2022-11-30T19:00:00Z",
    "homeTeam": "pol",
    "awayTeam": "arg"
    },
    {
    "gameTime": "2022-11-30T19:00:00Z",
    "homeTeam": "ara",
    "awayTeam": "mex"
    },
    {
    "gameTime": "2022-12-01T15:00:00Z",
    "homeTeam": "cro",
    "awayTeam": "bel"
    },
    {
    "gameTime": "2022-12-01T15:00:00Z",
    "homeTeam": "can",
    "awayTeam": "mar"
    },
    {
    "gameTime": "2022-12-01T19:00:00Z",
    "homeTeam": "jap",
    "awayTeam": "esp"
    },
    {
    "gameTime": "2022-12-01T19:00:00Z",
    "homeTeam": "cos",
    "awayTeam": "ale"
    },
    {
    "gameTime": "2022-12-02T15:00:00Z",
    "homeTeam": "cor",
    "awayTeam": "por"
    },
    {
    "gameTime": "2022-12-02T15:00:00Z",
    "homeTeam": "gan",
    "awayTeam": "uru"
    },
    {
    "gameTime": "2022-12-02T19:00:00Z",
    "homeTeam": "ser",
    "awayTeam": "sui"
    },
    {
    "gameTime": "2022-12-02T19:00:00Z",
    "homeTeam": "cam",
    "awayTeam": "bra"
    },

    // Oitavas

    {
        "gameTime": "2022-12-03T15:00:00Z",
        "homeTeam": "hol",
        "awayTeam": "eua"
    },

    {
        "gameTime": "2022-12-03T19:00:00Z",
        "homeTeam": "arg",
        "awayTeam": "aus"
    },

    {
        "gameTime": "2022-12-04T19:00:00Z",
        "homeTeam": "ing",
        "awayTeam": "sen"
    },

    {
        "gameTime": "2022-12-04T15:00:00Z",
        "homeTeam": "fra",
        "awayTeam": "pol"
    },

    {
        "gameTime": "2022-12-05T15:00:00Z",
        "homeTeam": "jap",
        "awayTeam": "cro"
    },

    {
        "gameTime": "2022-12-05T19:00:00Z",
        "homeTeam": "bra",
        "awayTeam": "cor"
    },

    {
        "gameTime": "2022-12-06T15:00:00Z",
        "homeTeam": "mar",
        "awayTeam": "esp"
    },

    {
        "gameTime": "2022-12-06T19:00:00Z",
        "homeTeam": "por",
        "awayTeam": "sui"
    },

    // Quartas de final

    {
        "gameTime": "2022-12-09T19:00:00Z",
        "homeTeam": "hol",
        "awayTeam": "arg"
    },

    {
        "gameTime": "2022-12-09T15:00:00Z",
        "homeTeam": "cro",
        "awayTeam": "bra"
    },

    {
        "gameTime": "2022-12-10T19:00:00Z",
        "homeTeam": "ing",
        "awayTeam": "fra"
    },

    {
        "gameTime": "2022-12-10T15:00:00Z",
        "homeTeam": "mar",
        "awayTeam": "por"
    },

    // SemiFinal

    {
        "gameTime": "2022-12-13T19:00:00Z",
        "homeTeam": "arg",
        "awayTeam": "cro"
    },

    {
        "gameTime": "2022-12-14T19:00:00Z",
        "homeTeam": "fra",
        "awayTeam": "mar"
    },

    // Disputa do 3º lugar
    
    {
        "gameTime": "2022-12-17T15:00:00Z",
        "homeTeam": "cro",
        "awayTeam": "mar"
    },

    // Final

    {
        "gameTime": "2022-12-18T15:00:00Z",
        "homeTeam": "arg",
        "awayTeam": "fra"
    },
]

const main = () =>
    prisma.game.createMany({
        data: games
    })

main()
    .then(console.log)
    .catch(console.log)