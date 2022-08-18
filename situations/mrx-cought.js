// det red catch the mr x
const data = {
  "newGameId": 2,
  "games": [
    {
      "players": [
        {
          "username": "ak",
          "role": "Mr. X",
          "currentPosition": 19,
          "isHost": true,
          "color": "black",
          "tickets": {
            "taxi": 24,
            "bus": 24,
            "subway": 24,
            "black": 5,
            "twoX": 2
          },
          "log": []
        },
        {
          "username": "pk",
          "role": "Detective Red",
          "currentPosition": 19,
          "isHost": false,
          "color": "red",
          "tickets": {
            "taxi": 10,
            "bus": 8,
            "subway": 4,
            "black": 0,
            "twoX": 0
          },
          "log": []
        },
        {
          "username": "gk",
          "role": "Detective Green",
          "currentPosition": 74,
          "isHost": false,
          "color": "green",
          "tickets": {
            "taxi": 10,
            "bus": 8,
            "subway": 4,
            "black": 0,
            "twoX": 0
          },
          "log": []
        },
        {
          "username": "dk",
          "role": "Detective Purple",
          "currentPosition": 31,
          "isHost": false,
          "color": "purple",
          "tickets": {
            "taxi": 10,
            "bus": 8,
            "subway": 4,
            "black": 0,
            "twoX": 0
          },
          "log": []
        }
      ],
      "isGameStarted": true,
      "gameId": 1,
      "currentPlayerIndex": 0,
      "round": 0
    }
  ]
}

const fs = require('fs');

fs.writeFileSync('../data/games.json', JSON.stringify(data), 'utf8');