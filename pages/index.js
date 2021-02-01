import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1 style={{ color: '#ffffff' }}>
              Sport Club Corinthians Paulista
            </h1>
          </Widget.Header>
          <Widget.Content>
            <Widget.Description>
              Vamos ver se você conhece mesmo o Timão. Divirta-se. Mas lembre...
              O Corinthians não é brincadeira
            </Widget.Description>

            <form
              onSubmit={(event) => {
                event.preventDefault();

                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="nomeDoUsuario"
                placeholder="Seu nome"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />

              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1 style={{ color: '#ffffff' }}>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/EnriqueIzel2/corinthians_quiz" />
    </QuizBackground>
  );
}
