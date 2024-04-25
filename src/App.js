import './App.css';
import Header from './components/Header/Header';
import MainFeaturedPost from './components/MainFeaturedPost/MainFeaturedPost';

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

  const mainPost = {
    title: 'Example Post',
    description: 'This is an example post description',
    image: './images/20240425_150733.jpg',
    imageText: 'Image description',
    linkText: 'Read more',
  };


function App() {


  return (
    <>
      <Header title="Новости Израиля для Русскоговорящих" sections={sections} />
      <MainFeaturedPost post={mainPost} />
      <div className="App">
      </div>
    </>

  );
}

export default App;
