##### Alessio Modonesi 4^F
# React

Per il mio progetto di fine anno ho scelto la libreria javascript [React]. 
Questo è un ambiente di sviluppo semplice da usare ma, allo stesso tempo, molto completo.

## Creare un progetto React
Per poter creare da zero un nuovo progetto con React, è innanzitutto necessario installare
[Node.js], che è alla base di molti framework js come, ad esempio, [Vue.js].
Per poter installare Node, accediamo alla pagina di [download] ufficiale del sito e scarichiamo
la versione corretta per il nostro SO.
Una volta scaricato Node sul nostro PC, aprimiamo un CMD e creiamo la nostra pagina React:

```sh
npx create-react-app react-app
cd react-app
npm start
```
Utilizzando questi comandi, apriremo anche la pagina appena creata in localhost all'interno
di una finestra sul nostro browser.

```sh
http://localhost:3000
```
Una volta aperta la nostra pagina, possiamo metterci al lavoro per creare quello che vogliamo.

## Come funziona
Da quel che ho potuto sperimentare, React si basa sull'implementazione di componenti che possono
essere aggiunti in ogni parte di una pagina.
Questi componenti possono essere importati in ogni pagina, con la seguente sintassi:

```sh
import Navbar from '../components/Navbar';
```
Da qui un altro passo fondamentale: all'inizio di ogni pagina.js, dobbiamo importare tutto quello
di cui abbiamo bisogno. Per esempio, nella pagina [App.js] del mio progetto, ho utilizzato la 
seguente sintassi:

```sh
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
```
La precedente sintassi è composta da funzioni o classi da importare e dal percorso in cui si trovano,
dopo la parola chiave "from".
Il primo import è il più importante, in quanto richiama in namespace "React" e la classe "Component" 
direttamente dal Node Module di nome 'react'.
Il secondo import inserisce invece le funzioni per inserire le route dei vari components, dal module "react-router-dom",
che va opportunamente scaricato.

```sh
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div className="App container-fluid d-flex justify-content-center">
            <Routes>
              <Route exact path="/" element={<ParallaxSection />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Shop" element={<Shop />} />
              <Route exact path="/Carrello" element={<Carrello />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
```
Da qui sopra possiamo vedere la classe App, che ritorna il component [Navbar] e da la rotta per tutte le pagine.
L'unica rotta a non avere un path è "ParallaxSection", in quanto va inserita direttamente nella schermata principale.
Alla fine della classe, si deve esportare quelle che si è creato precedentemente; in questo caso la classe.

> NB: è possibile fare solo un `export default` per ogni pagina.

## React-spring
Ho poi deciso di implementare la libreria [React-spring], che contiene diverse funzione interessanti.

```sh
npm install react-spring
```

## Il mio progetto
Per quanto riguarda il mio progetto, ho deciso di creare una pagina di e-commerce,
similare ad un comune [Amazon].
L'idea di base comprende una home page di presentazione del sito, una pagina di login e/o registrazione,
la pagina dedicata alla shopping e infine il carrello, dove poter rivedere gli oggetti prima di acquistarli.

| Page | Descrizione |
| ------ | ------ |
| [App.js] | Dove vado ad inserire la route dei vari components |
| [Carrello.js] | Dove poter rivedere gli oggetti prima di acquistarli |
| [Login.js] | Login e/o registrazione |
| [Shop.js] | Dove poter vedere tutti gli oggetti offerti dal sito |

Alessio Modonesi

[React]: <https://it.reactjs.org>
[Node.js]: <https://nodejs.org/it>
[Vue.js]: <https://vuejs.org>
[download]: <https://nodejs.org/it/download>
[Amazon]: <https://www.amazon.it>
[App.js]: <https://github.com/alessiomodonesi/ReactApp/blob/main/src/pages/App.js>
[Carrello.js]: <https://github.com/alessiomodonesi/ReactApp/blob/main/src/pages/carrello.js>
[Login.js]: <https://github.com/alessiomodonesi/ReactApp/blob/main/src/pages/login.js>
[Shop.js]: <https://github.com/alessiomodonesi/ReactApp/blob/main/src/pages/Shop.js>
[React-spring]: <https://react-spring.io>
[Navbar]: <https://github.com/alessiomodonesi/ReactApp/blob/main/src/components/navbar.js>
