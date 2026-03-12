/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Activity, 
  ShieldCheck, 
  Briefcase, 
  Users, 
  Cpu, 
  Zap, 
  ChevronRight, 
  Menu, 
  X,
  Timer,
  BarChart3,
  Bell,
  Trophy,
  Layout,
  Hospital,
  ShoppingBag,
  Stethoscope,
  Store,
  Cloud,
  Eye,
  Search,
  Code,
  Settings,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('홈');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', href: '#' },
    { name: '제품', href: '#products' },
    { name: '서비스', href: '#services' },
    { name: '회사소개', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <Cloud size={24} />
            </div>
            <span className={`text-2xl font-display font-bold ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Vine<span className="text-emerald-600">Cloud</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-2 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setActiveLink(link.name)}
                className={`transition-all duration-300 px-5 py-2 rounded-full text-sm font-semibold ${
                  activeLink === link.name 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`block px-5 py-3 text-base font-semibold rounded-xl transition-all ${
                    activeLink === link.name
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-100/50 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-emerald-700 uppercase bg-emerald-50 rounded-full">
            Next-Gen IT Solutions
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-8 leading-[1.1]">
            비즈니스의 미래를 설계하는 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              최첨단 소프트웨어 솔루션
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            풍부한 업계 경험과 검증된 방법론을 바탕으로, 귀하의 비즈니스 요구사항에 최적화된 맞춤형 IT 솔루션을 제공합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ title, subtitle, description, features, icon: Icon, color, imageUrl, onClick }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className={`h-2 w-full ${color}`} />
      <div className="p-8 lg:p-10 flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-2xl ${color.replace('bg-', 'bg-opacity-10 text-')}`}>
            <Icon size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900">{title}</h3>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{subtitle}</p>
          </div>
        </div>
        <p className="text-slate-600 mb-8 leading-relaxed">
          {description}
        </p>
        <div className="space-y-4 mb-10">
          {features.map((f: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 bg-emerald-50 text-emerald-600 rounded-full p-0.5">
                <Zap size={14} />
              </div>
              <span className="text-slate-700 text-sm font-medium">{f}</span>
            </div>
          ))}
        </div>
        <div className="relative h-64 rounded-2xl overflow-hidden mb-8 bg-slate-50 flex items-center justify-center border border-slate-100 group">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        </div>
      </div>
      <div className="px-8 pb-8 lg:px-10 lg:pb-10">
        <button 
          onClick={onClick}
          className="w-full py-4 rounded-xl border-2 border-slate-100 font-bold text-slate-900 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
        >
          자세히 보기 <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

const Products = ({ gymImageUrl }: { gymImageUrl: string }) => {
  const [showHealthModal, setShowHealthModal] = useState(false);
  const [showVineModal, setShowVineModal] = useState(false);

  return (
    <section id="products" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">혁신적인 제품 라인업</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">관리자를 위한 전문 솔루션부터 개인의 건강한 삶을 위한 앱까지, 우리의 기술은 모든 곳에 닿아 있습니다.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <ProductCard 
            title="vineOps"
            subtitle="Server Log Analysis"
            description="관리자를 위한 실시간 서버 로그 탐색 및 지능형 분석 솔루션입니다. 복잡한 로그 데이터를 직관적으로 파악하고 AI를 통해 문제 해결을 자동화하세요."
            features={[
              "서버별 실시간 로그 탐색 및 필터링",
              "로그 분석을 위한 AI 코드 자동 생성",
              "장애 징후 탐지 및 분석 자동화 워크플로우",
              "대규모 분산 환경 최적화 대시보드"
            ]}
            icon={Server}
            color="bg-blue-600"
            imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            onClick={() => setShowVineModal(true)}
          />
          <ProductCard 
            title="HealthPangPang"
            subtitle="Health & Habit Management"
            description="개인 건강관리 및 습관 개선을 위한 올인원 앱입니다. 타이머 기반의 루틴 관리와 커뮤니티 동기부여를 통해 더 건강한 나를 만나보세요."
            features={[
              "타이머 기반 루틴 관리 및 집중 모드",
              "시각화된 분석 리포트 및 맞춤 피드백",
              "크루 커뮤니티 및 챌린지 동기부여",
              "병원, 약국 연계 헬스케어 통합 몰"
            ]}
            icon={Activity}
            color="bg-emerald-600"
            imageUrl={gymImageUrl}
            onClick={() => setShowHealthModal(true)}
          />
        </div>
      </div>

      <AnimatePresence>
        {showVineModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2.5rem] w-full max-w-6xl max-h-[95vh] overflow-y-auto lg:overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setShowVineModal(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    <Server size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-slate-900">vineOps 핵심 기능</h3>
                    <p className="text-slate-500">지능형 서버 로그 분석 및 자동화 솔루션</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { icon: Eye, title: "실시간 Live Stream Log 확인", desc: "서버에서 발생하는 로그를 지연 없이 실시간으로 스트리밍하여 즉각적인 모니터링이 가능합니다." },
                    { icon: Search, title: "키워드 하이라이팅 로그 감시", desc: "특정 키워드나 패턴을 설정하여 실시간 로그 흐름 속에서 중요한 이벤트를 시각적으로 강조합니다." },
                    { icon: Code, title: "AI 기반 데이터 분석 코드 생성", desc: "복잡한 로그 분석 요구사항을 자연어로 입력하면 AI가 분석 코드를 즉시 생성하고 실행합니다." },
                    { icon: Settings, title: "코드 모듈 순차 적용 자동화", desc: "생성된 분석 모듈을 워크플로우에 따라 순차적으로 실행하여 장애 대응 및 분석을 자동화합니다." },
                    { icon: Lock, title: "서버 및 로그 접근관리", desc: "민감한 로그 데이터와 서버 자원에 대한 세밀한 권한 제어 및 보안 감사를 제공합니다." }
                  ].map((item, i) => (
                    <div key={i} className={`flex flex-col gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all ${i >= 3 ? 'lg:col-span-1' : ''}`}>
                      <div className="shrink-0 w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {showHealthModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2.5rem] w-full max-w-6xl max-h-[95vh] overflow-y-auto lg:overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setShowHealthModal(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                  <div className="lg:col-span-3">
                    <h3 className="text-3xl font-display font-bold text-slate-900 mb-8">HealthPangPang 핵심 기능</h3>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                      {[
                        { icon: Timer, title: "타이머 루틴", desc: "특정 시간 동안 습관에만 집중" },
                        { icon: BarChart3, title: "시각화 분석", desc: "달성률과 통계 데이터 제공" },
                        { icon: Bell, title: "행동 촉진 알림", desc: "정해진 시간에 실천 유도" },
                        { icon: Trophy, title: "상호 응원 챌린지", desc: "타인과 공유하며 동기 부여" },
                        { icon: Layout, title: "심플 UI/UX", desc: "루틴에만 집중하는 간결함" },
                        { icon: ShoppingBag, title: "헬스케어 몰", desc: "제품 쇼핑부터 나눔장터까지" }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                          <div className="shrink-0 w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                            <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 grid grid-cols-2 gap-4">
                    {[
                      { icon: Hospital, label: "병원 연계" },
                      { icon: Stethoscope, label: "약국 찾기" },
                      { icon: Store, label: "쇼핑몰" },
                      { icon: Users, label: "나눔장터" }
                    ].map((m, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                        <div className="text-emerald-600"><m.icon size={32} /></div>
                        <span className="font-bold text-slate-700 text-sm">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">전문 컨설팅 서비스</h2>
            <p className="text-slate-600">단순한 기술 제공을 넘어, 비즈니스의 안정성과 성장을 위한 전략적 파트너가 되어드립니다.</p>
          </div>
          <button className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            모든 서비스 보기 <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-slate-900 p-10 rounded-[2rem] text-white hover:bg-slate-800 transition-all">
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">정보보호 컨설팅</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              기업의 소중한 자산을 지키기 위한 체계적인 보안 진단과 대응 전략을 수립합니다. 법적 규제 준수부터 실질적인 위협 방어까지 완벽하게 지원합니다.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Zap size={14} className="text-emerald-500" /> ISMS-P 인증 지원</li>
              <li className="flex items-center gap-2"><Zap size={14} className="text-emerald-500" /> 취약점 진단 및 모의해킹</li>
              <li className="flex items-center gap-2"><Zap size={14} className="text-emerald-500" /> 보안 거버넌스 수립</li>
            </ul>
          </div>

          <div className="group bg-white p-10 rounded-[2rem] border border-slate-200 hover:border-emerald-200 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Briefcase size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">IT 컨설팅</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              디지털 전환을 위한 최적의 기술 아키텍처를 설계합니다. 비즈니스 프로세스 혁신과 효율적인 시스템 도입을 위한 가이드를 제공합니다.
            </p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2"><Zap size={14} className="text-blue-500" /> 클라우드 전환 전략</li>
              <li className="flex items-center gap-2"><Zap size={14} className="text-blue-500" /> 엔터프라이즈 아키텍처 설계</li>
              <li className="flex items-center gap-2"><Zap size={14} className="text-blue-500" /> DX 프로세스 혁신</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    {
      icon: Users,
      title: "전문가 팀",
      desc: "풍부한 업계 경험을 보유한 베테랑 전문가들이 프로젝트를 직접 리드합니다."
    },
    {
      icon: Layout,
      title: "맞춤형 솔루션",
      desc: "고객의 특정 비즈니스 요구사항과 환경에 맞춘 최적의 솔루션을 제안합니다."
    },
    {
      icon: Cpu,
      title: "최첨단 기술",
      desc: "AI, 클라우드 등 최신 기술 트렌드와 검증된 방법론을 결합하여 구현합니다."
    },
    {
      icon: ShieldCheck,
      title: "지속적인 지원",
      desc: "구축 이후에도 안정적인 운영을 위한 전략적 가이드와 기술 지원을 제공합니다."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
              우리가 신뢰받는 <br />
              <span className="text-emerald-400">이유입니다</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              우리는 단순한 소프트웨어 개발사를 넘어, 고객의 성공을 함께 고민하는 전략적 파트너입니다. 검증된 실력과 열정으로 비즈니스의 가치를 높입니다.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-emerald-400"><f.icon size={28} /></div>
                  <h4 className="text-xl font-bold">{f.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Expert Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-emerald-500 p-8 rounded-3xl shadow-2xl">
              <span className="block text-4xl font-bold">15+</span>
              <span className="text-sm font-medium opacity-80 uppercase tracking-wider">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <Cloud size={18} />
              </div>
              <span className="text-2xl font-display font-bold text-slate-900">
                Vine<span className="text-emerald-600">Cloud</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
              최첨단 클라우드 기술과 전문가의 통찰력을 결합하여 귀하의 비즈니스를 혁신합니다. 
              지금 바로 전문가와 상담하고 미래를 준비하세요.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map(s => (
                <a key={s} href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                  <span className="sr-only">{s}</span>
                  <Zap size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">제품 & 서비스</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">vineOps</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">HealthPangPang</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">정보보호 컨설팅</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">IT 컨설팅</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">고객 지원</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">문의하기</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">자주 묻는 질문</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © 2026 VineCloud IT Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span>대전광역시 유성구 대학로 179번길 7-12, D동(궁동)</span>
            <span>support@vine-cloud.co.kr</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { GoogleGenAI } from "@google/genai";

export default function App() {
  const [gymImageUrl, setGymImageUrl] = useState<string>("https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80");

  useEffect(() => {
    const fetchGymImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A high-quality, realistic photo of 3-4 diverse men and women in a modern, bright gym. They are standing together, each holding a different smartphone (iPhone and Samsung Galaxy styles). The smartphones are held so that the screens are facing the users and are clearly visible to the camera. The screens display a vibrant health and fitness app dashboard with charts, activity rings, and the text "HealthPangPang". They are smiling and looking at the screens, showing a sense of community and achievement. The lighting is natural and energetic.',
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
            },
          },
        });

        for (const part of response.candidates![0].content.parts) {
          if (part.inlineData) {
            setGymImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Failed to generate gym image:", error);
      }
    };

    fetchGymImage();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Products gymImageUrl={gymImageUrl} />
        <Services />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
