/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Menu,
  X,
  MessageCircle,
  Mail,
  Phone,
  Search,
  Layers
} from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

// --- Constants ---
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdyLdpVehVwTIWU201K09VE9857kc7DLHfhVWY0tqzK4QTT8g/viewform?usp=header";
const WHATSAPP_URL = "https://wa.me/5548988730018";
const LOGO_URL = "/logo-ragu.jpg";

// --- Components ---

const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-6">
    <div className="h-px bg-preto/10 w-full"></div>
  </div>
);

const WhatsAppButton = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
  >
    <MessageCircle className="w-8 h-8" />
    <span className="absolute right-full mr-4 bg-preto text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Fale conosco no WhatsApp
    </span>
  </motion.a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-bege/95 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="/" className="block">
            <img src={LOGO_URL} alt="Ragù Logo" className="h-10 md:h-12 w-auto object-contain" referrerPolicy="no-referrer" />
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-display font-semibold uppercase tracking-widest text-preto">
          <a href="#metodo" className="hover:text-vermelho transition-colors relative group">
            O MÉTODO
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vermelho transition-all group-hover:w-full"></span>
          </a>
          <a href="#para-quem" className="hover:text-vermelho transition-colors relative group">
            PARA QUEM É
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vermelho transition-all group-hover:w-full"></span>
          </a>
          <a 
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-vermelho text-white px-8 py-2.5 rounded-full hover:bg-cereja transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-vermelho/20"
          >
            Começar
          </a>
        </div>

        <button className="md:hidden text-preto p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 right-0 bg-bege border-b border-preto/5 overflow-hidden md:hidden shadow-xl"
          >
            <div className="p-8 flex flex-col gap-6">
              <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-bold">O MÉTODO</a>
              <a href="#para-quem" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-bold">PARA QUEM É</a>
              <a 
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-vermelho text-white px-6 py-4 rounded-full text-center font-display font-bold text-lg shadow-lg shadow-vermelho/20"
              >
                Começar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden bg-bege">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-vermelho/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cereja/5 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-vermelho/10 text-vermelho rounded-full text-sm font-display font-bold uppercase tracking-widest mb-8"
          >
            Estratégia para Negócios Food
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-preto leading-[1.1] mb-8">
            Seu restaurante não tem <br />
            problema de marketing. <br />
            <span className="text-vermelho block mt-2">Tem problema de base.</span>
          </h1>
          <p className="text-lg md:text-xl text-preto/80 font-normal mb-12 max-w-3xl leading-relaxed">
            É por isso que você investe em posts, stories e anúncios e o movimento segue oscilando, a margem apertada e você continua trabalhando mais do que deveria para um resultado que não aparece.
          </p>
          <a 
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex bg-vermelho text-white px-10 py-5 rounded-full text-lg font-display font-bold items-center gap-3 hover:bg-cereja transition-all transform hover:translate-y-[-4px] shadow-2xl shadow-vermelho/30 active:scale-95"
          >
            Quero entender o que está travando meu negócio
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemGrid = () => {
  const problems = [
    {
      title: "Trabalhou com agência de marketing e não teve resultado",
      desc: "A agência entregou posts bonitos, mas sem entender seu negócio, público ou posicionamento. O resultado? Dinheiro foi e nada mudou."
    },
    {
      title: "Movimento sem consistência",
      desc: "Fim de semana cheio, semana vazia. Você não sabe de onde vêm os clientes bons e muito menos como trazer mais deles."
    },
    {
      title: "Vendo bem, mas sobra pouco no final",
      desc: "Faturamento razoável, margem apertada. Cardápio desorganizado, ticket médio baixo, produto errado em evidência."
    },
    {
      title: "Não se diferencia dos concorrentes",
      desc: "Você sabe que seu produto é bom. Mas na hora de falar sobre ele, ou cobrar mais, falta clareza. E o cliente compara só pelo preço."
    },
    {
      title: "Posta todo dia, mas não converte",
      desc: "Seguidores, likes, comentários, mas a mesa não lota. Conteúdo sem direção é barulho."
    },
    {
      title: "Preciso mudar, mas não sabe por onde começar",
      desc: "Todo mundo dá um conselho diferente. Cardápio, Instagram, Tik Tok, delivery, influencer... e você vai tentando tudo sem um fio condutor"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bege/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-preto mb-12 md:mb-16">
          Isso acontece hoje na sua operação?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-preto/5 flex flex-col gap-4 hover:border-vermelho/30 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-vermelho/10 flex items-center justify-center group-hover:bg-vermelho group-hover:text-white transition-colors">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-preto leading-tight">{problem.title}</h3>
              <p className="text-preto/70 leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 bg-preto text-white p-12 rounded-[40px] relative overflow-hidden text-center"
        >
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-display font-bold opacity-90">
              Não é falta de esforço. É esforço sem direção.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-vermelho/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </motion.div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  return (
    <section className="py-16 md:py-24 bg-bege">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-6xl font-display font-bold text-preto leading-tight mb-6 md:mb-8 max-w-[15ch]">
              O mercado está te fazendo olhar para o <span className="text-vermelho">lugar errado</span>
            </h2>
            <p className="text-lg md:text-xl text-preto/70 mb-8 md:mb-10 leading-relaxed">
              Enquanto você ajusta o criativo do Instagram, o problema real está na estrutura do seu negócio. Marketing amplifica o que já existe e se a base não é sólida, ele amplifica os problemas.
            </p>
            
            <div className="grid gap-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-preto/5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-vermelho/10 flex items-center justify-center shrink-0">
                  <Search className="text-vermelho w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-preto/40 uppercase tracking-widest mb-1">O mercado entrega</p>
                  <p className="text-lg font-bold text-preto">Posts, tráfego, reels e "estratégias" genéricas</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-vermelho text-white shadow-2xl shadow-vermelho/20"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Layers className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">A Ragù foca em</p>
                  <p className="text-lg font-bold">O que realmente sustenta e dá lucro ao seu negócio</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-vermelho/5 blur-3xl rounded-full"></div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Cardápio mal estruturado", icon: <XCircle className="text-vermelho" /> },
                { label: "Preço sem base real", icon: <XCircle className="text-vermelho" /> },
                { label: "Produtos que não dão lucro", icon: <XCircle className="text-vermelho" /> },
                { label: "Falta de controle financeiro", icon: <XCircle className="text-vermelho" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl border border-preto/5 flex flex-col gap-4 shadow-sm"
                >
                  {item.icon}
                  <span className="font-display font-bold text-preto text-lg leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IntroSection = () => (
  <section className="py-16 md:py-24 bg-cereja text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-6 md:mb-8">É aqui que entra a Ragù</h2>
          <p className="text-xl md:text-3xl font-display font-medium text-white/90 mb-8 md:mb-12 leading-tight">
            Não somos agência. <br />
            Não somos consultoria.
          </p>
          <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed">
            Somos o parceiro de negócio que senta junto e resolve. <br />
            Construímos base, geramos clareza e apontamos a direção.
          </p>
          <div className="text-white font-display font-bold text-xl md:text-2xl">
            A gente não começa pelo marketing.
          </div>
        </motion.div>
      </div>
    </div>
    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full"></div>
  </section>
);

const MethodSection = () => {
  const steps = [
    {
      number: "01",
      title: "Clareza",
      description: "Primeiro, você entende o que realmente está acontecendo.",
      details: [
        "Quanto cada produto realmente custa",
        "Quais itens dão lucro",
        "Onde está o vazamento financeiro",
        "Quanto custa manter o negócio aberto"
      ],
      result: "Resultado: Você deixa de operar no escuro."
    },
    {
      number: "02",
      title: "Direção",
      description: "Depois, você toma decisões com base em dados.",
      details: [
        "Precificação correta",
        "Ajuste de cardápio",
        "Foco nos produtos certos",
        "Definição de margens e metas"
      ],
      result: "Resultado: Seu negócio começa a fazer sentido."
    },
    {
      number: "03",
      title: "Movimento",
      description: "É aqui que o marketing entra.",
      details: [
        "Vender o que dá lucro",
        "Atrair o cliente certo",
        "Aumentar ticket e recorrência",
        "Crescer com consistência"
      ],
      result: "Resultado: O marketing deixa de ser custo e vira motor de crescimento."
    }
  ];

  return (
    <section id="metodo" className="py-20 md:py-32 bg-bege">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left md:text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-display font-bold text-preto mb-4"
          >
            O Método Ragù
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg md:text-xl font-medium text-preto/70 max-w-3xl md:mx-auto leading-relaxed"
          >
            Nosso método, assim como um bom ragu — prato que exige tempo, camadas e paciência para extrair todo o seu sabor — é construído em fases progressivas, onde cada etapa alimenta e sustenta a próxima.
          </motion.p>
        </div>

        <div className="space-y-8 md:space-y-16 flex flex-col items-center">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-start p-8 md:p-16 bg-white rounded-[40px] md:rounded-[64px] border border-preto/5 shadow-sm hover:shadow-2xl transition-all w-full max-w-5xl"
            >
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="text-6xl md:text-8xl font-display font-bold text-vermelho/10 leading-none">{step.number}</div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-preto tracking-tighter uppercase">{step.title}</h3>
                <p className="text-lg md:text-xl font-medium text-preto/80 leading-relaxed">{step.description}</p>
              </div>
              <div className="bg-bege/30 p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-preto/5">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-preto/40 mb-4 md:mb-6">O que você descobre:</p>
                <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 md:gap-4 text-preto/80 text-base md:text-lg">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-vermelho/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-vermelho" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 md:pt-8 border-t border-preto/5">
                  <p className="text-lg md:text-xl font-display font-bold text-vermelho">{step.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfterSection = () => (
  <section className="py-20 md:py-32 bg-preto text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12 md:mb-20">
        <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">O que muda na prática</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 p-8 md:p-12 rounded-[32px] md:rounded-[48px] border border-white/10"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-10 text-white flex items-center gap-4">
            <XCircle className="w-6 h-6 md:w-8 md:h-8 text-vermelho" /> Antes
          </h3>
          <ul className="space-y-4 md:space-y-6">
            {[
              "Gasta com marketing sem saber se funciona",
              "Posicionamento genérico — concorre por preço",
              "Clientes sem fidelidade, movimento irregular",
              "Você no centro de tudo, sem tempo para estratégia",
              "Decisões no feeling, sem dados claros",
              "Identidade de marca confusa ou inexistente"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 md:gap-4 text-base md:text-lg text-white/70">
                <span className="text-vermelho font-bold text-lg md:text-xl shrink-0">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-vermelho p-8 md:p-12 rounded-[32px] md:rounded-[48px] shadow-2xl shadow-vermelho/20"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-10 text-white flex items-center gap-4">
            <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" /> Depois
          </h3>
          <ul className="space-y-4 md:space-y-6">
            {[
              "Cada real investido tem um objetivo e uma métrica",
              "Posicionamento claro",
              "Clientes que voltam e indicam",
              "Decisões baseadas em dados e estratégia",
              "Marca que comunica valor"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 md:gap-4 text-base md:text-lg text-white">
                <span className="font-bold text-lg md:text-xl shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const items = [
    {
      name: "Ricardo M.",
      role: "Dono de Hamburgueria",
      text: "Eu achava que precisava de mais tráfego pago. A Ragù me mostrou que eu estava perdendo dinheiro em 30% do meu cardápio. Ajustamos a base e o lucro dobrou em 3 meses.",
      stat: "+42% de margem líquida"
    },
    {
      name: "Ana Paula",
      role: "Proprietária de Café",
      text: "A clareza que o método traz é assustadora. Pela primeira vez em 4 anos eu sei exatamente quanto custa cada café que sai da minha máquina.",
      stat: "Redução de 15% no CMV"
    }
  ];

  return (
    <section className="py-32 bg-bege overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-preto mb-6">Resultados Reais</h2>
            <p className="text-xl text-preto/70">O que acontece quando você para de chutar e começa a medir.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[48px] border border-preto/5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-5 h-5 bg-vermelho rounded-sm"></div>)}
                </div>
                <p className="text-2xl font-medium text-preto leading-relaxed mb-10 italic">"{item.text}"</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-display font-bold text-xl text-preto">{item.name}</p>
                  <p className="text-preto/50">{item.role}</p>
                </div>
                <div className="bg-vermelho/5 text-vermelho px-6 py-3 rounded-2xl font-display font-bold text-lg">
                  {item.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "A Ragù é uma agência de marketing?",
      a: "Somos parceiros de negócios food. Olhamos para o negócio e não só para o marketing."
    },
    {
      q: "Eu preciso ter um faturamento mínimo?",
      a: "Sim. Trabalhamos com negócios que já faturam a partir de R$60 mil/mês."
    },
    {
      q: "Quanto tempo demora para ver resultados?",
      a: "Depende do estágio do seu negócio, mas os primeiros sinais aparecem rápido. Na fase de Clareza, já identificamos vazamentos e ajustes imediatos em cerca de 15 a 30 dias. Mas o processo completo não é imediato."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-bege">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-6xl font-display font-bold text-preto mb-12 md:mb-16 text-left md:text-center">Dúvidas Comuns</h2>
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl md:rounded-3xl border border-preto/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 md:p-8 flex justify-between items-center text-left hover:bg-preto/[0.02] transition-colors"
              >
                <span className="text-lg md:text-xl font-display font-bold text-preto">{faq.q}</span>
                <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-vermelho/10 flex items-center justify-center transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <X className="w-3 h-3 md:w-4 md:h-4 text-vermelho" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 pt-0 text-base md:text-lg text-preto/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Qualification = () => {
  return (
    <section id="para-quem" className="py-20 md:py-32 bg-bege">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-20 rounded-[40px] md:rounded-[64px] border border-preto/5 shadow-sm"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-preto mb-8 md:mb-12 flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-green-600 w-6 h-6 md:w-8 md:h-8" />
              </div>
              PARA QUEM É
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {[
                "Você tem um restaurante, café, bar ou outro negócio gastronômico em operação",
                "Já tentou marketing mas não viu retorno real",
                "Sente que seu produto é melhor do que o movimento sugere",
                "Quer crescer de forma sustentável, não só aumentar o faturamento",
                "Está aberto a rever o posicionamento e a estrutura do negócio",
                "Busca uma parceria estratégica, não só entrega de conteúdo"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 md:gap-5 p-4 md:p-6 bg-bege/30 rounded-2xl font-display font-semibold text-base md:text-lg hover:bg-bege/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-vermelho mt-2.5 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-preto p-8 md:p-20 rounded-[40px] md:rounded-[64px] text-white shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 md:mb-12 flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <XCircle className="text-vermelho w-6 h-6 md:w-8 md:h-8" />
              </div>
              PARA QUEM NÃO É
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {[
                "Quer só post bonito nas redes sociais",
                "Busca resultado imediato sem mudança estrutural",
                "Não está disposto a ajustar o que não está funcionando",
                "Quer uma agência que execute sem questionar"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 md:gap-5 p-4 md:p-6 bg-white/5 rounded-2xl font-display font-semibold text-base md:text-lg opacity-80 hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-white/30 mt-2.5 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 md:mt-12 p-6 md:p-8 bg-vermelho/20 border border-vermelho/30 rounded-[24px] md:rounded-[32px]">
              <p className="text-base md:text-lg font-medium italic opacity-90 leading-relaxed">
                A Ragù não é para todo mundo. E isso é intencional. Focamos em quem quer construir um negócio de verdade.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 md:mt-20 text-center">
          <a 
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-vermelho text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:xl font-display font-bold hover:bg-cereja transition-all transform hover:scale-105 shadow-2xl shadow-vermelho/30"
          >
            Quero aplicar o método no meu negócio
          </a>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-40 bg-vermelho relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-10 leading-tight"
        >
          Seu negócio tem potencial para ir mais longe
        </motion.h2>
        <p className="text-2xl md:text-3xl font-display font-bold text-white/90 mb-16 max-w-3xl mx-auto leading-tight">
          Vamos juntos entender o que está travando o seu crescimento e resolver o que realmente importa. Sem promessas vazias, sem pacotinho de posts.
        </p>
        <a 
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex bg-white text-vermelho px-12 py-6 rounded-full text-2xl font-display font-bold items-center gap-4 mx-auto hover:bg-bege transition-all transform hover:scale-105 shadow-2xl active:scale-95"
        >
          Começar Diagnóstico Gratuito
          <ArrowRight className="group-hover:translate-x-2 transition-transform w-8 h-8" />
        </a>
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 border-[12px] border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] border-[4px] border-white rounded-full"></div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contato" className="py-16 md:py-24 bg-bege border-t border-preto/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-6xl font-display font-bold text-preto mb-6 md:mb-8">Seu negócio tem potencial para ir mais longe</h2>
          <p className="text-lg md:text-xl text-preto/70 mb-8 md:mb-12 leading-relaxed">
            Vamos juntos entender o que está travando o seu crescimento e resolver o que realmente importa. Sem promessas vazias, sem pacotinho de posts.
          </p>
          <div className="space-y-4 md:space-y-6">
            <a href="mailto:tem.ragu@gmail.com" className="flex items-center gap-3 md:gap-4 text-lg md:text-xl font-display font-bold text-preto hover:text-vermelho transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-vermelho/10 flex items-center justify-center shrink-0">
                <Mail className="text-vermelho w-5 h-5 md:w-6 md:h-6" />
              </div>
              tem.ragu@gmail.com
            </a>
            <a href="tel:+5548999010848" className="flex items-center gap-3 md:gap-4 text-lg md:text-xl font-display font-bold text-preto hover:text-vermelho transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-vermelho/10 flex items-center justify-center shrink-0">
                <Phone className="text-vermelho w-5 h-5 md:w-6 md:h-6" />
              </div>
              +55 48 99901-0848
            </a>
          </div>
        </div>
        <div className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-preto/5 shadow-xl">
          <h3 className="text-xl md:text-2xl font-display font-bold text-preto mb-4 md:mb-6">Pronto para o próximo nível?</h3>
          <p className="text-sm md:text-base text-preto/60 mb-6 md:mb-8">Preencha nosso diagnóstico e receba uma análise inicial do seu negócio.</p>
          <a 
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-vermelho text-white text-center py-4 md:py-5 rounded-full font-display font-bold text-base md:text-lg hover:bg-cereja transition-all shadow-lg shadow-vermelho/20"
          >
            Começar Diagnóstico
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  return (
    <footer className="bg-bege pt-20 pb-10 border-t border-preto/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 md:col-span-1">
          <img src={LOGO_URL} alt="Ragù Logo" className="h-12 w-auto object-contain mb-6" referrerPolicy="no-referrer" />
          <p className="text-sm text-preto/60 font-medium leading-relaxed italic">
            Cada marca tem seu molho.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-preto mb-6 uppercase text-xs tracking-widest">Método</h4>
          <ul className="space-y-4 text-sm text-preto/60 font-medium">
            <li><a href="#metodo" className="hover:text-vermelho">O MÉTODO</a></li>
            <li><a href="#para-quem" className="hover:text-vermelho">PARA QUEM É</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-preto mb-6 uppercase text-xs tracking-widest">Contato</h4>
          <ul className="space-y-4 text-sm text-preto/60 font-medium">
            <li><a href="mailto:tem.ragu@gmail.com" className="hover:text-vermelho">E-mail</a></li>
            <li><a href={WHATSAPP_URL} className="hover:text-vermelho">WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-preto mb-6 uppercase text-xs tracking-widest">Redes</h4>
          <ul className="space-y-4 text-sm text-preto/60 font-medium">
            <li><a href="#" className="hover:text-vermelho">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-preto/5 pt-10">
        <p className="text-sm text-preto/40 font-medium text-center md:text-left">© 2026 Ragù Food Marketing. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-bege font-sans selection:bg-vermelho selection:text-white">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-vermelho z-[60] origin-left" style={{ scaleX }} />
      
      <Navbar />
      
      <main>
        <Hero />
        <SectionDivider />
        <ProblemGrid />
        <SectionDivider />
        <ComparisonSection />
        <IntroSection />
        <MethodSection />
        <BeforeAfterSection />
        <SectionDivider />
        <Qualification />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
