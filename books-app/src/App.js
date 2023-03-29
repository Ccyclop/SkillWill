
import './App.css';
import { BookInfoSection } from './bookInformationSection';


function App() {

  const books = [
    {
      title: 'ვეფხისტყაოსანი',
      author: 'შოთა რუსთაველი',
      describtion: 'ესე ამბავი სპარსული, ქართულად ნათარგმანები',
      stars: ['ავთანდილი', 'ტარიელი', 'ნესტანი', 'თინათინი'],
      img: 'https://www.sulakauri.ge/wp-content/uploads/2020/02/klasika-vephkhistqhaosani-tsitheli.jpg'
    },
    {
      title: 'ჯაყოს ხიზნები',
      author: 'მიხეილ ჯავახიშვილი',
      describtion: 'რომანში რეალისტური ხერხებით არის დახატული ის ფონი',
      stars: ['ჯაყო', 'თეიმურაზი', 'მარგო'],
      img: 'https://saba.com.ge/content/images/book/o/cec76a5962d643ddaf840c087faff064.png'
    }
  ]

  const onClickHandler = (title, stars) => {
    console.log(title + ' ' + stars.join(' '))
  }

  return (
    <BookInfoSection onClick={onClickHandler} data={books} />
  );
}

export default App;
