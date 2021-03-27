/*
1- Dado el siguiente array:
[['team1','dep1','tkt1'], ['team2','dep1','tkt2'], ['team2','dep3','tkt75'], ['team2','dep1','tkt10']] (donde el array interno siempre va a tener equipo, dependencia, tickets)
Generar una función que al tener como parámetro de entrada el array de arriba, genere la siguiente salida:
*/

/*
const salidaObj = {
    team1: {
        dep1: {
            tkt1
        }
    },
    team2: {
        dep1: {
            tkt2,
            tkt10
        },
        dep3: {
            tkt75
        }
    }
}
*/

export const output = JSON.stringify([
    {
        "dependencies": [
            {
                "name": "dep1",
                "tickets": [
                    {
                        "name": "tkt1"
                    }
                ]
            }
        ],
        "name": "team1"
    },
    {
        "dependencies": [
            {
                "name": "dep1",
                "tickets": [
                    {
                        "name": "tkt2"
                    },
                    {
                        "name": "tkt10"
                    }
                ]
            },
            {
                "name": "dep3",
                "tickets": [
                    {
                        "name": "tkt75"
                    }
                ]
            }
        ],
        "name": "team2"
    }
]);

/*
2- Implementar una función que pueda ser invocada de las siguientes maneras:
sum(2,8) y sum(2)(8). En ambos casos debe retornar el valor 10.
*/
