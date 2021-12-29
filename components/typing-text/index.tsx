import ReactTypingText from 'react-typing-effect';

const TypingText = () => {
  return (
    <section className="store-trend-categories mb-5">
      <div className="container">
        <p className="text-center mb-0">
          Belanja di <b>Aycashop.id</b>
        </p>
        <ReactTypingText
          text={[
            'Free gift minimal belanja Rp 0',
            'Gratis ongkir minimal belanja Rp 0',
            'Free double gift minimal belanja 100k',
          ]}
          speed={50}
          typingDelay={0}
          eraseSpeed={15}
          eraseDelay={2000}
          className={'d-block text-center'}
        />
      </div>
    </section>
  );
};

export default TypingText;
