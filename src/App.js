import Text from './components/textstyle/textstyled';
import './App.css';
import ButtonLabel from './components/button/button';

function App() {
  return (
    <>
      <Text title='Paragrafo Editado'
            text='Esse é um paragrafo que está estilizado'
            color='green'/>

      <ButtonLabel label='DEVQUEST'/>
    </>
  );
}

export default App;
