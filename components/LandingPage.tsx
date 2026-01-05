
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  MapPin, 
  Instagram, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  UserRound, 
  Heart,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';
import { EXPERT_DATA } from '../constants';

const LandingPage: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative">
      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2">
            <X size={32} />
          </button>
          <img src={selectedImg} className="max-w-full max-h-full object-contain" alt="Resultado ampliado" />
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end bg-neutral-900 overflow-hidden">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT_DATA.mainPhoto} 
            alt="Dra. Eduarda Costa" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 pb-16 pt-32 max-w-4xl mx-auto w-full">
          <motion.div {...fadeIn}>
            <span className="inline-block px-4 py-1.5 bg-[#d4af37] text-white text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-6">
              EXCLUSIVIDADE & NATURALIDADE
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Eu sou a <span className="text-[#d4af37]">Eduarda Costa</span>, e vou realçar sua melhor versão.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 leading-relaxed font-light">
              Especialista em Harmonização Orofacial focada em resultados que preservam sua identidade e trazem segurança.
            </p>
            
            <div className="space-y-4">
              <a 
                href={EXPERT_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full md:w-max px-8 py-5 bg-[#d4af37] text-white rounded-2xl font-bold text-lg shadow-2xl shadow-yellow-500/20 active:scale-95 transition-all"
              >
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                Agendar Consulta no WhatsApp
              </a>
              <p className="text-neutral-400 text-sm text-center md:text-left flex items-center justify-center md:justify-start gap-2 italic">
                <CheckCircle2 size={16} className="text-[#d4af37]" />
                Conversa inicial sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn} className="relative group">
            <div className="absolute -inset-4 bg-[#d4af37]/10 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <img 
              src={EXPERT_DATA.authorityPhotos[0]} 
              className="relative w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl" 
              alt="Dra. Eduarda Costa em atendimento"
            />
          </motion.div>
          <motion.div {...fadeIn} className="space-y-8">
            <h2 className="text-4xl font-bold text-neutral-800 leading-tight">
              Uma abordagem <span className="text-[#d4af37] italic">pessoal</span> e humanizada.
            </h2>
            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
              <p>
                Acredito que a estética deve ser um caminho para a autoconfiança, não para a padronização. Cada face conta uma história e meu papel é suavizar o tempo mantendo o que te torna única.
              </p>
              <div className="grid gap-4">
                {[
                  "Atendimento exclusivo e individualizado",
                  "Planejamento facial completo",
                  "Uso apenas das melhores tecnologias e produtos",
                  "Transparência total em cada etapa"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-neutral-50 rounded-full border border-neutral-100">
                      <Star size={16} className="text-[#d4af37] fill-[#d4af37]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800">Transformações Reais</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
              Resultados autênticos que devolvem o brilho e a harmonia ao rosto de minhas pacientes.
            </p>
          </motion.div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {EXPERT_DATA.resultsGallery.map((img, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.05 }}
                className="relative group cursor-zoom-in overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} alt={`Resultado ${i}`} className="w-full h-auto" />
                <div className="absolute inset-0 bg-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full text-[#d4af37] transform scale-0 group-hover:scale-100 transition-transform">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-sm text-neutral-400 italic">
            *Resultados podem variar de pessoa para pessoa. Fotos autorizadas por pacientes.
          </div>
        </div>
      </section>

      {/* 4. MAIS PROVAS (BASTIDORES) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-neutral-800">Bastidores & Especialista</h2>
              <p className="text-neutral-500 mt-2">Dedicando cada minuto à sua melhor experiência.</p>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="p-3 bg-neutral-50 rounded-full border border-neutral-200 text-neutral-300">
                <ChevronRight className="rotate-180" />
              </div>
              <div className="p-3 bg-neutral-50 rounded-full border border-neutral-200 text-[#d4af37]">
                <ChevronRight />
              </div>
            </div>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
            {EXPERT_DATA.lifestyleGallery.map((img, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="min-w-[280px] md:min-w-[350px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg snap-center bg-neutral-200"
              >
                <img src={img} alt="Bastidores" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POR QUE CONFIAR */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <ShieldCheck className="text-[#d4af37]" size={32} />, 
                title: "Segurança Absoluta", 
                desc: "Procedimentos seguros realizados com materiais de alta performance e técnica apurada." 
              },
              { 
                icon: <UserRound className="text-[#d4af37]" size={32} />, 
                title: "Olhar Individualizado", 
                desc: "Nada de resultados 'copia e cola'. Seu rosto é estudado para encontrar a harmonia ideal." 
              },
              { 
                icon: <Heart className="text-[#d4af37]" size={32} />, 
                title: "Acompanhamento Pós", 
                desc: "Estarei ao seu lado desde a primeira conversa até a cicatrização e revisão final." 
              }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[2rem] border border-neutral-100 hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                <div className="mb-6 p-4 bg-neutral-50 rounded-2xl w-max shadow-sm group-hover:shadow-md transition-shadow">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">{card.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA INTERMEDIARIO */}
      <section className="py-20 px-6">
        <motion.div 
          {...fadeIn}
          className="max-w-4xl mx-auto bg-neutral-900 rounded-[3rem] p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Sente que é o momento de cuidar de você?</h2>
            <p className="text-neutral-400 text-lg">Não deixe sua autoestima para depois. Vamos conversar hoje.</p>
            <a 
              href={EXPERT_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#d4af37] text-white rounded-2xl font-bold text-lg shadow-2xl shadow-yellow-500/30 active:scale-95 transition-all"
            >
              Falar com a Dra. Eduarda
            </a>
          </div>
        </motion.div>
      </section>

      {/* 7. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800">Sua jornada em 3 passos</h2>
          </motion.div>
          <div className="space-y-8">
            {[
              { step: "01", title: "Primeiro Contato", desc: "Clique no botão de WhatsApp e inicie uma conversa simples para tirar dúvidas básicas." },
              { step: "02", title: "Agendamento", desc: "Escolhemos o melhor horário para uma avaliação presencial detalhada em João Pessoa ou Paulista." },
              { step: "03", title: "Plano de Beleza", desc: "Realizamos a consulta de avaliação onde traçamos seu plano personalizado para o procedimento ideal." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                className="flex items-start gap-6 p-8 rounded-3xl border border-neutral-100 bg-neutral-50/50"
              >
                <span className="text-4xl font-bold text-[#d4af37]/20">{item.step}</span>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 bg-white text-center">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto space-y-10">
          <div className="w-24 h-24 rounded-full border-2 border-[#d4af37] p-1 mx-auto overflow-hidden">
            <img src={EXPERT_DATA.mainPhoto} alt="Dra Eduarda" className="w-full h-full object-cover rounded-full" />
          </div>
          <h2 className="text-5xl font-bold text-neutral-800 leading-tight">
            Pronta para elevar sua beleza e autoestima?
          </h2>
          <p className="text-xl text-neutral-500">
            Dê o primeiro passo agora. Estou ansiosa para te conhecer e planejar sua transformação.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a 
              href={EXPERT_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-12 py-6 bg-[#d4af37] text-white rounded-2xl font-bold text-xl shadow-2xl shadow-yellow-500/40 active:scale-95 transition-all"
            >
              <MessageCircle size={28} />
              Quero agendar agora
            </a>
            <span className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
              PRIMEIRA CONSULTA SEM COMPROMISSO
            </span>
          </div>
        </motion.div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-16 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left space-y-4">
            <h3 className="signature text-4xl text-[#d4af37]">{EXPERT_DATA.name}</h3>
            <p className="text-neutral-400 max-w-xs leading-relaxed">
              {EXPERT_DATA.role}<br />
              {EXPERT_DATA.location}
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href={EXPERT_DATA.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-white/5 rounded-2xl hover:bg-[#d4af37] transition-all group"
            >
              <Instagram size={24} className="group-hover:text-white" />
            </a>
            <a 
              href={EXPERT_DATA.whatsapp} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-2xl hover:bg-green-600 transition-all group"
            >
              <MessageCircle size={24} className="group-hover:text-white" />
            </a>
            <div className="p-4 bg-white/5 rounded-2xl">
              <MapPin size={24} />
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Dra. Eduarda Costa. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
