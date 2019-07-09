import { Book } from "../models/Book";
import {Cd} from "../models/Cd"

export class Services{
    booksList : Book[]= [
        {
          name:'L\'etranger',
          description:[
            'Auteur: Albert Camus',
            'Genre: Roman',
          ],
          isLend:false
        },
    
        {
            name:'Semailles à la moisson',
            description:[
              'Auteur: Ephraim K.A',
              'genre: Essai',
              'Details: Manuel sur le temps et le projet ',
            ],
            isLend:false
        },
    
        {
            name:'Père riche,père pauvre',
            description:[
              'Auteur: Robert Kiyosaki',
              'Genre: Essai',
            ],
            isLend:false
        },
    
        {
            name:'Stratégies face à la tentation',
            description:[
              'Auteur: Pst.Marcelo Tunas',
              'Genre: Essai',
          ],
          isLend:false
        },
    
        {
            name:'500 paroles de sagesses',
            description:[
              'Auteur: Pst.Marcello Tunasi',
              'Genre: Essai',
          ],
          isLend:false
        },

         {
          name:'L\'etranger',
          description:[
            'Auteur: Albert Camus',
            'Genre: Roman',
          ],
          isLend:false
        },
    
        {
            name:'Semailles à la moisson',
            description:[
              'Auteur: Ephraim K.A',
              'genre: Essai',
              'Details: Manuel sur le temps et le projet ',
            ],
            isLend:false
        },
    
        {
            name:'Père riche,père pauvre',
            description:[
              'Auteur: Robert Kiyosaki',
              'Genre: Essai',
            ],
            isLend:false
        },
    
        {
            name:'Stratégies face à la tentation',
            description:[
              'Auteur: Pst.Marcelo Tunas',
              'Genre: Essai',
          ],
          isLend:false
        },
    
        {
            name:'500 paroles de sagesses',
            description:[
              'Auteur: Pst.Marcello Tunasi',
              'Genre: Essai',
          ],
          isLend:false
        },
      ];
//==========================================================

      cdList: Cd[]=[
        {
          name:'Iron man 3',
          description:[
            'Réalisateur: Shane Black',
            'Date de sortie: 14 Avril 2013'
          ],
          isLend:false,
        },

        {
          name:'Avengers: Endgame',
          description:[
            'Réalisateur: Anthony Russo,Joe Russo',
            'Date de sortie: 22 Avril 2019'
          ],
          isLend:false,
        },

        {
          name:'Avengers: Infinity War',
          description:[
            'Réalisateur: Anthony Russo,Joe Russo',
            'Date de sortie: 23 Avril 2018'
          ],
          isLend:false,
        },

        {
          name:'Black Panther',
          description:[
            'Réalisateur: Ryan Coogler',
            'Date de sortie: 29 Janvier 2018'
          ],
          isLend:false,
        },

        {
          name:'Iron man 3',
          description:[
            'Réalisateur: Shane Black',
            'Date de sortie: 14 Avril 2013'
          ],
          isLend:false,
        },

        {
          name:'Avengers: Endgame',
          description:[
            'Réalisateur: Anthony Russo,Joe Russo',
            'Date de sortie: 22 Avril 2019'
          ],
          isLend:false,
        },

        {
          name:'Avengers: Infinity War',
          description:[
            'Réalisateur: Anthony Russo,Joe Russo',
            'Date de sortie: 23 Avril 2018'
          ],
          isLend:false,
        },

        {
          name:'Black Panther',
          description:[
            'Réalisateur: Ryan Coogler',
            'Date de sortie: 29 Janvier 2018'
          ],
          isLend:false,
        }

      
      ];


    
}