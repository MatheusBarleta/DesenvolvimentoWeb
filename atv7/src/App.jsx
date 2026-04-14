import Header from './Header';
import Sidebar from './Sidebar';
import Article from './Article';
import Footer from './Footer';
import './App.css'; // Importando o CSS

function App() {
  // Objeto contendo os dados dinâmicos do post
  const postData = {
    title: "Descobrindo o nordeste",
    date: "25 de Fevereiro de 2026",
    content: [
      "Descubra o nordeste junto conosco",
      "Paisagens incríveis aguardam por você nesta jornada."
    ],
    imageSrc: "/b956cab7-c413-4c2b-af84-9c9ae03357ad.png",
    imageCaption: "Vista aérea"
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main>
        {/* Passando os dados do objeto postData como props */}
        <Article 
          title={postData.title}
          date={postData.date}
          author={postData.author}
          content={postData.content}
          imageSrc={postData.imageSrc}
          imageCaption={postData.imageCaption}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;