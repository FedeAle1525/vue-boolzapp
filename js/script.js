const { createApp } = Vue

createApp({
  data() {
    return {
      // Inizio Contacts
      contacts: [
        {
          name: 'Pharaon Atem',
          avatar: './img/Atem 2.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Settimana prossima inizierà un nuovo duello di Duel Monster',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Parteciparai anche tu?',
              status: 'received'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Non sono così brava, ma verrò a fare il tifo per te!',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:18:22',
              message: 'Ci conto!',
              status: 'received'
            },
            {
              date: '10/01/2020 16:20:22',
              message: 'Sarò in prima fila!',
              status: 'sent'
            }

          ]
        },

        {
          name: 'Goku',
          avatar: './img/Goku 3.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ]
        },

        {
          name: 'Toshiro',
          avatar: './img/Hitsugaya 4.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ]
        },

        {
          name: 'Killua',
          avatar: './img/Killua 1.png',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ]
        },

        {
          name: 'Lelouch',
          avatar: './img/Lelouch 1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ]
        },

        {
          name: 'Minato',
          avatar: './img/Minato 1.png',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ]
        },

        {
          name: 'Soma',
          avatar: './img/Soma 1.png',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ]
        },

        {
          name: 'Takumi',
          avatar: './img/Takumi 2.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }

      ],
      // Fine Contacts

      indexCurrent: 0
    }
  }
}).mount('#app')
