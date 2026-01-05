
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERT_DATA, QUIZ_QUESTIONS } from '../constants';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ResultProps {
  answers: string[];
  onContinue: () => void;
}

const Result: React.FC<ResultProps> = ({ answers, onContinue }) => {
  const quizSummary = QUIZ_QUESTIONS.map((q, i) => `*${q.question}*: ${answers[i]}`).join('\n');
  const whatsappMsgEvaluation = encodeURIComponent(
    `Olá Dra. Eduarda! Finalizei meu quiz de avaliação no seu site. Meus resultados:\n\n${quizSummary}\n\nGostaria de uma análise profissional.`
  );
  const whatsappMsgSimple = encodeURIComponent(`Olá Dra. Eduarda! Vim pelo site e gostaria de tirar algumas dúvidas sobre os procedimentos.`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] bg-white flex flex-col items-center justify-center p-4 md:p-6 overflow-y-auto"
    >
      <div className="max-w-md w-full flex flex-col items-center h-full max-h-[90vh] md:max-h-none">
        
        {/* Top Header Section */}
        <div className="text-center mb-6 space-y-2">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100 shadow-sm"
            >
              <ShieldCheck size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Perfil Compatível</span>
            </motion.div>
            <h2 className="text-3xl font-bold text-neutral-800">Você é a Paciente ideal.</h2>
        </div>

        {/* Hero Photo Section - Chest Up Style */}
        <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 border-4 border-white">
          <img 
            src={EXPERT_DATA.authorityPhotos[0]} 
            alt="Dra. Eduarda Costa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
             <p className="text-white text-lg font-medium leading-relaxed drop-shadow-md">
              "Com base nas suas respostas, o Método da <b>Dra. {EXPERT_DATA.name}</b> consegue entregar exatamente a naturalidade e segurança que você procura."
            </p>
          </div>
        </div>

        {/* Action Buttons - Compact Mobile First */}
        <div className="w-full flex flex-col gap-3 pb-8">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`${EXPERT_DATA.whatsapp}?text=${whatsappMsgEvaluation}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-5 bg-green-600 text-white rounded-2xl font-bold shadow-xl shadow-green-600/20"
          >
            <Sparkles size={20} />
            1 - ENVIAR MINHA AVALIAÇÃO À DRA.
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`${EXPERT_DATA.whatsapp}?text=${whatsappMsgSimple}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-5 bg-[#d4af37] text-white rounded-2xl font-bold shadow-xl shadow-yellow-500/10"
          >
            <MessageCircle size={20} />
            2 - CHAMAR NO WHATSAPP SEM COMPROMISSO
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContinue}
            className="flex items-center justify-center gap-2 w-full py-4 bg-neutral-100 text-neutral-600 rounded-2xl font-bold text-sm"
          >
            3 - NÃO ENVIAR E CONTINUAR NO SITE
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Result;
