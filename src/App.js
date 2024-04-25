import './App.css';
import Header from './components/Header/Header';

const sections = [
  { title: 'Главная', url: '/' },
  { title: 'Новости', url: '/news' },
  { title: 'Политика', url: '/about' },
  { title: 'Экономика', url: '/economy' },
  { title: 'Регионы', url: '/regional' },
  { title: 'Tech', url: '/tech' },
  { title: 'Интервью', url: '/interviews' },
  { title: 'Мнения', url: '/opinions' },
  { title: 'Мир', url: '/world' },
];

function App() {
  return (
    <>
      <Header title="Новости Израиля для Русскоговорящих" sections={sections} />
      <div className="App">
      </div>
    </>

  );
}

export default App;
