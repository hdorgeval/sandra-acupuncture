import { FC, useMemo } from 'react';

export interface QuestionOwnProps {
  className?: string;
  sentence: string;
  answer: string;
  answerClassname?: string;
}
function sentenceWithoutLastWords(words: string[]): string {
  const allWordsButLast = words.slice(0, words.length - 2);
  return allWordsButLast.join(' ');
}

function lastWords(words: string[]): string {
  const onlyLastWords = words.slice(-2);
  return onlyLastWords.join(' ');
}

export const Question: FC<QuestionOwnProps> = ({
  sentence,
  answer,
  className,
  answerClassname,
}) => {
  const words = useMemo(() => {
    return sentence
      .trim()
      .split(' ')
      .filter((w) => w.length > 0);
  }, [sentence]);

  return (
    <figure className="pt-3 rounded">
      <blockquote className="blockquote pb-0">
        <p>
          <span className={className}>{sentenceWithoutLastWords(words)}</span>
          <span className={`text-nowrap ${className}`}> {lastWords(words)}</span>
        </p>
      </blockquote>
      <figcaption className={`blockquote-footer mb-0 mt-2 ${answerClassname}`}>{answer}</figcaption>
    </figure>
  );
};

Question.displayName = 'Question';
