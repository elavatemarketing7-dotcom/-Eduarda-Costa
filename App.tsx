
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { EXPERT_DATA } from './constants';

type AppState = 'ENTRY' | 'QUIZ' | 'ANALYZING' | 'RESULT' | 'SITE';

export default function App() {
  const [view, setView] = useState<AppState>('ENTRY');
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleStartQuiz = () => setView('QUIZ');
  const handleGoToSite = () => setView('SITE');
  
  const handleFinishQuiz = (answers: string[]) => {
    setQuizAnswers(answers);
    setView('ANALYZING');
    setLoadingProgress(0);
  };

  // Simulação da análise do perfil
  useEffect(() => {
    if (view === 'ANALYZING') {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setView('RESULT'), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [view]);

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden relative">
      {/* Landing Page is always the background for visual continuity */}
      <div className={`${view !== 'SITE' ? 'blur-md brightness-50 pointer-events-none' : ''} transition-all duration-700`}>
        <LandingPage />
      </div>

      <AnimatePresence mode="wait">
        {view === 'ENTRY' && (
          <motion.div
            key="entry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          >
            <div className="max-w-md w-full bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-10 text-center border border-white/20">
              <div className="mb-6 relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-[#d4af37] shadow-xl">
                <img src={EXPERT_DATA.mainPhoto} alt={EXPERT_DATA.name} className="w-full h-full object-cover" />
              </div>
              <h1 className="text-3xl font-bold text-neutral-800 mb-2">Bem-vinda</h1>
              <p className="text-neutral-500 mb-8 leading-relaxed">
                Escolha como deseja prosseguir para uma experiência exclusiva com a <b>Dra. {EXPERT_DATA.name}</b>.
              </p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={handleStartQuiz}
                  className="w-full py-5 bg-[#d4af37] text-white rounded-2xl font-bold shadow-xl shadow-yellow-500/20 active:scale-95 transition-all"
                >
                  Fazer Quiz de Avaliação
                </button>
                <button
                  onClick={handleGoToSite}
                  className="w-full py-4 text-neutral-600 font-medium active:scale-95 transition-all"
                >
                  Acessar site diretamente
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {view === 'QUIZ' && (
          <Quiz 
            key="quiz-overlay"
            onFinish={handleFinishQuiz} 
            onCancel={handleGoToSite} 
          />
        )}

        {view === 'ANALYZING' && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[115] flex items-center justify-center p-6"
          >
            <div className="max-w-md w-full text-center space-y-8">
               <div className="relative mx-auto w-24 h-24 rounded-3xl overflow-hidden border-2 border-[#d4af37] shadow-lg animate-pulse">
                  <img src={EXPERT_DATA.mainPhoto} alt="Analisando" className="w-full h-full object-cover" />
               </div>
               <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-white tracking-tight">Analisando...</h2>
                 <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div 
                      className="h-full bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                      style={{ width: `${loadingProgress}%` }}
                    />
                 </div>
                 <p className="text-neutral-300 text-sm font-medium animate-pulse">
                   Cruzando suas respostas com o Método da Dra. {EXPERT_DATA.name}
                 </p>
               </div>
            </div>
          </motion.div>
        )}

        {view === 'RESULT' && (
          <Result 
            key="result-overlay"
            answers={quizAnswers} 
            onContinue={handleGoToSite} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
