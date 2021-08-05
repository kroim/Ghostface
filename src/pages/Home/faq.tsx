import React, {useState} from 'react';

interface Props {
  index: number,
  question: string,
  answer: string
}

const Faq: React.FC<Props> = ({index, question, answer}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="faq" onClick={() => setShow(!show)}>
        <span className="faq-mark">Q{index}:</span>
        {question}
      </button>
      {show && <div className="panel">
        <p>
          <span className="faq-mark">A:</span>
          <span dangerouslySetInnerHTML={{ __html: answer }}/>
        </p>
      </div>}
    </div>
  );
}

export default Faq;
