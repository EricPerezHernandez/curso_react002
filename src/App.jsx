// Dependencies
import {createRoot} from 'react-dom/client';

//Components
import {Pet} from './Pet';

// Componente porque tiene la primera letra en mayúscula. olo devuelve un elemento de react. 
// A diferencia de una funcion, que devuelve lo que se defina dentro de ella
/*const App = () => {
    console.log('Hello');
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
};*/
// Si no se tiene lógica, se omite return
const App = () => (
    <div>
        <Pet name="Terry02" animal="Cotorro" breed="croquetas"/>
    </div>

);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);