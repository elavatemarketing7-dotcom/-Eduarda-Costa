
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import { QUIZ_QUESTIONS, EXPERT_DATA } from '../constants';

interface QuizProps {
  onFinish: (answers: string[]) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6"
    >
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-2xl rounded-[3rem] shadow-2xl flex flex-col h-[90vh] md:h-auto border border-white/40 overflow-hidden relative">
        
        {/* Floating Expert Image - Persistent */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-lg rotate-3 bg-white"
          >
            <img src={EXPERT_DATA.mainPhoto} alt="Expert" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Header - Persistent Name */}
        <div className="p-6 pt-8 flex justify-between items-center relative z-10">
          <div className="flex-1 text-center">
             <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.3em]">DRA. {EXPERT_DATA.name.toUpperCase()}</span>
          </div>
          <button onClick={onCancel} className="absolute right-6 top-8 p-1 text-neutral-400 hover:text-neutral-800 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="px-8 pb-10 flex-1 flex flex-col justify-center mt-12">
          {/* Progress */}
          <div className="w-full h-1 bg-neutral-100 rounded-full mb-10 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-[#d4af37]"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-neutral-800 leading-tight text-center px-2">
                {QUIZ_QUESTIONS[currentStep].question}
              </h2>

              <div className="grid gap-3">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    className="group w-full p-4 text-left bg-white hover:bg-neutral-50 border border-neutral-100 rounded-2xl transition-all flex justify-between items-center active:scale-[0.98] shadow-sm"
                  >
                    <span className="text-md text-neutral-700 font-medium">{option}</span>
                    <ChevronRight className="text-[#d4af37] opacity-40 group-hover:opacity-100 transition-opacity" size={18} />
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-6 text-center text-[9px] text-neutral-400 uppercase tracking-widest border-t border-neutral-50">
          Avaliação Personalizada • {currentStep + 1}/{QUIZ_QUESTIONS.length}
        </div>
      </div>
    </motion.div>
  );
};

export default Quiz;
