const DateTime = luxon.DateTime;

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
              date: '20/03/2020 12:30:00',
              message: 'Hai finito gli allenamenti?',
              status: 'sent'
            },
            {
              date: '20/03/2020 12:35:55',
              message: `E' pronto il pranzo?`,
              status: 'received'
            },
            {
              date: '20/03/2020 12:37:00',
              message: 'Ci sto lavorando.',
              status: 'sent'
            },
            {
              date: '20/03/2020 12:38:00',
              message: 'Allora torno subito.',
              status: 'received'
            },
            {
              date: '20/03/2020 12:38:00',
              message: 'Sto morendo di fame!',
              status: 'received'
            },
            {
              date: '20/03/2020 12:40:00',
              message: `Questa non mi e' nuova`,
              status: 'sent'
            },
            {
              date: '20/03/2020 12:41:00',
              message: `Eheh`,
              status: 'received'
            },

          ]
        },

        {
          name: 'Toshiro',
          avatar: './img/Hitsugaya 4.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'Hai cambiato avatar?',
              status: 'sent'
            },
            {
              date: '28/03/2020 10:10:10',
              message: 'Non ti avevo riconosciuto.',
              status: 'sent'
            },
            {
              date: '28/03/2020 10:15:22',
              message: `E' il mio aspetto quando utilizzo il mio Bankai`,
              status: 'received'
            },
            {
              date: '28/03/2020 10:15:22',
              message: `Cresco di qualche anno.`,
              status: 'received'
            },
            {
              date: '28/03/2020 10:18:22',
              message: 'Decisamente!',
              status: 'sent'
            },
            {
              date: '28/03/2020 10:18:22',
              message: 'E, seppure l\'originale ha il suo perche\', questo non lo trovo affato male.',
              status: 'sent'
            },
            {
              date: '28/03/2020 10:20:22',
              message: 'Allora credo che terro\' il nuovo avatar per un po\'.',
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
              date: '10/01/2020 16:30:55',
              message: 'Hai visto Gon, per caso?',
              status: 'received'
            },
            {
              date: '10/01/2020 16:31:00',
              message: 'No! Cerchi un compagno per allenarti?',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:33:00',
              message: 'Esatto! Ho ideato una nuova tecnica.',
              status: 'received'
            },
            {
              date: '10/01/2020 16:35:00',
              message: 'Sempre sul pezzo.',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:35:00',
              message: 'Se lo vedo, lo avviso.',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:37:00',
              message: 'Grazie.',
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
              date: '10/01/2020 11:25:55',
              message: 'Partita a scacchi?',
              status: 'received'
            },
            {
              date: '10/01/2020 11:26:00',
              message: `Ci provo, ma penso andra' a finire come al solito.`,
              status: 'sent'
            },
            {
              date: '10/01/2020 11:28:00',
              message: `C'e' sempre margine per migliorare.`,
              status: 'received'
            },
            {
              date: '10/01/2020 11:29:00',
              message: `Ovviamente imparando dal migliore`,
              status: 'sent'
            },
            {
              date: '10/01/2020 11:30:00',
              message: `Lelouch Lamperouge`,
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
              date: '10/01/2020 14:30:55',
              message: `L'Hokage ha un po' di tempo libero oggi?`,
              status: 'sent'
            },
            {
              date: '10/01/2020 14:35:00',
              message: 'Temo di no.',
              status: 'received'
            },
            {
              date: '10/01/2020 14:35:00',
              message: 'Ho ancora un sacco di documenti in pila sulla scrivania',
              status: 'received'
            },
            {
              date: '10/01/2020 14:40:00',
              message: 'Allora non le faccio perdere altro tempo.',
              status: 'sent'
            },
            {
              date: '10/01/2020 14:42:00',
              message: 'Scusa.',
              status: 'received'
            },

          ]
        },

        {
          name: 'Soma',
          avatar: './img/Soma 1.png',
          visible: true,
          messages: [
            {
              date: '10/01/2020 17:15:55',
              message: 'Organizziamo una nuova Food War?',
              status: 'received'
            },
            {
              date: '10/01/2020 17:18:00',
              message: `Un'altra!? Ma ne abbiamo fatta una appena ieri!?`,
              status: 'sent'
            },
            {
              date: '10/01/2020 17:20:00',
              message: `Lo so, ma ho apportato delle modifiche alla ricetta.`,
              status: 'received'
            },
            {
              date: '10/01/2020 17:22:00',
              message: `Credo sia inutile provare a dirti di no.`,
              status: 'sent'
            },
            {
              date: '10/01/2020 17:22:00',
              message: `Dimmi dove e quando.`,
              status: 'sent'
            },
            {
              date: '10/01/2020 17:22:00',
              message: `Stasera, al solito posto!`,
              status: 'received'
            },
          ]
        },

        {
          name: 'Takumi',
          avatar: './img/Takumi 2.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 16:30:55',
              message: 'Ti va di mangiare pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 16:32:00',
              message: `Non si puo' rifiutare una buona pizza.`,
              status: 'sent'
            },
            {
              date: '10/01/2020 16:32:00',
              message: 'Soprattutto se preparata da una certa persona.',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:35:00',
              message: 'Perfetto, ci vediamo al mio ristorante.',
              status: 'received'
            },
            {
              date: '10/01/2020 16:37:00',
              message: `Ho gia' l'acquolina in bocca.`,
              status: 'sent'
            },
          ],
        },

      ],
      // Fine Contacts

      indexCurrent: 0,

      indexLastMessage: 0,

      textNewMessage: '',

      textSearchAccount: undefined,

      listSearchAccount: [],

    }
    // // Fine "return"
  },
  // Fine "data()""

  methods: {

    changeAccount(indexAccount){

      this.indexCurrent = indexAccount;

    },

    generateLocalDate(){

      const localDate = DateTime.now();
      
      const stringLocalDate = localDate.toFormat("dd/LL/yyyy HH:mm:ss");

      return stringLocalDate;

    },

    createNewMessage(){

      if (this.textNewMessage.trim() !== ''){

        const newDate = this.generateLocalDate();

        const newMessage = {

          date: newDate,
          message: this.textNewMessage,
          status: 'sent'
        }
  
        this.contacts[this.indexCurrent].messages.push(newMessage);
        this.textNewMessage = '';

        setTimeout(this.createNewMessageReceived,1000);

      }
      
    },

    createNewMessageReceived(){

      const newDate = this.generateLocalDate();

      const newMessage = {

        date: newDate,
        message: 'Ok!',
        status: 'received'
      }

      this.contacts[this.indexCurrent].messages.push(newMessage);

    },

    getTimeLastAccess(indexContact){

      let indexMessage = 0;
      timeLastAccess = '';

      this.contacts[indexContact].messages.forEach((mex,i) => {

        if(mex.status === 'received'){
          indexMessage = i;
        }
      });

      if (indexMessage === ''){

        timeLastAccess = '';

      } else {

        timeLastAccess = this.contacts[indexContact].messages[indexMessage].date.substring(11,16);

      }

      return timeLastAccess;

    },

    createListContactName(){

      let listNames = [];

      this.contacts.forEach(contact => {

        listNames.push(contact.name);

      });

      this.listSearchAccount = listNames;
    }
  },
  // Fine "methods"

  watch: {

    textSearchAccount(textNew, textOld){

      let indexSearch;

      let listAccountFound = [];

      this.contacts.forEach(contact => {

        indexSearch = contact.name.toLowerCase().indexOf(textNew.toLowerCase());

        if (indexSearch !== -1){
          listAccountFound.push(contact.name);
        }

        // console.log(contact.name, textNew, indexSearch, listAccountFound);

        this.listSearchAccount = listAccountFound;

      });

      
    }

  },
  // Fine "watch"

  mounted(){

    this.createListContactName();

  }

}).mount('#app')
