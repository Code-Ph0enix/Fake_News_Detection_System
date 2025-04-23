import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

// Define an interface for each quiz question
interface QuizQuestion {
  title: string;
  isReal: boolean;
}

// Extend the Button variant type to include "success"
type ExtendedButtonVariant =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "success"
  | null
  | undefined;

// Extended dataset with 50 headlines
const fullQuizData: QuizQuestion[] = [
  { title: "Pope Francis Shocks World, Endorses Donald Trump for President", isReal: false },
  { title: "FBI Agent Suspected in Hillary Email Leaks Found Dead in Apparent Murder-Suicide", isReal: false },
  { title: "Supreme Court Rules in Favor of Marriage Equality", isReal: true },
  { title: "Scientists Discover New Species in Amazon Rainforest", isReal: true },
  { title: "WikiLeaks CONFIRMS Hillary Sold Weapons to ISIS", isReal: false },
  { title: "NASA Confirms Earth Will Experience 15 Days of Complete Darkness", isReal: false },
  { title: "Obama Signs Executive Order Banning The Pledge of Allegiance", isReal: false },
  { title: "SpaceX Successfully Lands Rocket at Sea", isReal: true },
  { title: "WHO Declares Global Health Emergency Over Zika Virus", isReal: true },
  { title: "Bigfoot DNA Study Confirms Novel Species", isReal: false },
  { title: "New Study Shows Coffee May Reduce Risk of Heart Disease", isReal: true },
  { title: "Ancient Ruins Discovered Under Antarctic Ice", isReal: false },
  { title: "Global CO2 Levels Reach Record High", isReal: true },
  { title: "Archaeologists Uncover Ancient Egyptian Tomb", isReal: true },
  { title: "Mermaids Found in Pacific Ocean", isReal: false },
  { title: "New Planet Discovered in Solar System", isReal: true },
  { title: "Time Travel Proof Found in Ancient Texts", isReal: false },
  { title: "Major Breakthrough in Cancer Research", isReal: true },
  { title: "Aliens Signal Received by SETI", isReal: false },
  { title: "New Technology Can Read Human Thoughts", isReal: false },
  { title: "World's First Lab-Grown Heart Transplant", isReal: true },
  { title: "Dragons Discovered in Remote Mountain Range", isReal: false },
  { title: "New Evidence of Water on Mars", isReal: true },
  { title: "Unicorn Fossil Found in Siberia", isReal: false },
  { title: "Renewable Energy Surpasses Coal Usage", isReal: true },
  { title: "Atlantis Ruins Found in Mediterranean", isReal: false },
  { title: "New Dinosaur Species Discovered", isReal: true },
  { title: "Telepathic Communication Device Invented", isReal: false },
  { title: "Record-Breaking Heat Wave Hits Europe", isReal: true },
  { title: "Fountain of Youth Found in Amazon", isReal: false },
  { title: "Electric Cars Outsell Gas Vehicles", isReal: true },
  { title: "Giant Sea Monster Found in Pacific", isReal: false },
  { title: "Breakthrough in Alzheimer's Treatment", isReal: true },
  { title: "Time Portal Opens in Desert", isReal: false },
  { title: "New Coral Reef Discovered", isReal: true },
  { title: "Invisible Cloak Technology Developed", isReal: false },
  { title: "Pandas No Longer Endangered", isReal: true },
  { title: "Living Dinosaurs Found in Congo", isReal: false },
  { title: "First Human Mission to Mars Announced", isReal: true },
  { title: "Mind Control Device Hits Market", isReal: false },
  { title: "Amazon Rainforest Recovery Success", isReal: true },
  { title: "Flying Cars Available Next Year", isReal: false },
  { title: "Ocean Cleanup Project Shows Results", isReal: true },
  { title: "Immortality Gene Discovered", isReal: false },
  { title: "New Clean Energy Breakthrough", isReal: true },
  { title: "Ghosts Proven Real by Scientists", isReal: false },
  { title: "Arctic Ice Recovery Observed", isReal: true },
  { title: "Teleportation Device Tested", isReal: false },
  { title: "New Species of Great Ape Found", isReal: true },
  { title: "Underwater City Discovery", isReal: false }
];

const QUESTIONS_PER_QUIZ = 10;

export function FakeNewsQuiz() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [lastAnswer, setLastAnswer] = useState<'correct' | 'incorrect' | null>(null);

  useEffect(() => {
    // Shuffle and select random questions for each quiz
    const shuffled = [...fullQuizData].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled.slice(0, QUESTIONS_PER_QUIZ));
  }, []);

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === quizQuestions[currentQuestion].isReal;
    setLastAnswer(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setLastAnswer(null);
      if (currentQuestion < QUESTIONS_PER_QUIZ - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    // Shuffle and get new questions for the next quiz
    const shuffled = [...fullQuizData].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled.slice(0, QUESTIONS_PER_QUIZ));
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setLastAnswer(null);
  };

  if (showResult) {
    return (
      <Card className="p-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
        <div className="mb-6">
          <p className="text-4xl font-bold text-primary mb-2">
            {score} / {QUESTIONS_PER_QUIZ}
          </p>
          <p className="text-muted-foreground">
            You got {score} out of {QUESTIONS_PER_QUIZ} questions correct!
          </p>
        </div>
        <Button onClick={restartQuiz}>Try Again</Button>
      </Card>
    );
  }

  if (quizQuestions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  return (
    <Card className="p-6">
      <div className="mb-4">
        <Progress value={(currentQuestion / QUESTIONS_PER_QUIZ) * 100} className="mb-2" />
        <p className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {QUESTIONS_PER_QUIZ}
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Is this headline real or fake?</h3>
          <p className="text-xl font-semibold">{quizQuestions[currentQuestion].title}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            variant={
              lastAnswer === 'correct' && quizQuestions[currentQuestion].isReal
                ? "success" as ExtendedButtonVariant
                : lastAnswer === 'incorrect' && !quizQuestions[currentQuestion].isReal
                ? "destructive"
                : "outline"
            }
            onClick={() => handleAnswer(true)}
            disabled={lastAnswer !== null}
            className="h-20"
          >
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Real News
          </Button>
          <Button
            variant={
              lastAnswer === 'correct' && !quizQuestions[currentQuestion].isReal
                ? "success" as ExtendedButtonVariant
                : lastAnswer === 'incorrect' && quizQuestions[currentQuestion].isReal
                ? "destructive"
                : "outline"
            }
            onClick={() => handleAnswer(false)}
            disabled={lastAnswer !== null}
            className="h-20"
          >
            <XCircle className="mr-2 h-5 w-5" />
            Fake News
          </Button>
        </div>

        {lastAnswer && (
          <div
            className={`p-4 rounded-lg ${
              lastAnswer === 'correct'
                ? 'bg-green-500/10 text-green-500'
                : 'bg-red-500/10 text-red-500'
            }`}
          >
            <p className="font-medium">
              {lastAnswer === 'correct' ? 'Correct!' : 'Incorrect!'} This is{' '}
              {quizQuestions[currentQuestion].isReal ? 'a real' : 'a fake'} news headline.
            </p>
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <HelpCircle className="h-4 w-4" />
            <span>Current Score: {score}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
