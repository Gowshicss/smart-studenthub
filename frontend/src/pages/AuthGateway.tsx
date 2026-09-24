// @ts-nocheck
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type RoleKey = 'student' | 'mentor' | 'tpo';

const roleProfiles = {
  student: {
    title: "STUDENT ACCESS",
    badge: "ROLE: UNDERGRADUATE",
    nodeId: "ACCESS POINT #STUDENT-AUTH",
    desc: "Access your academic progress, verified skills, and institutional placement opportunities.",
    label: "UNIVERSITY REGISTER NUMBER",
    format: "FORMAT: IT24A042",
    placeholder: "Enter Register Number",
    defaultVal: "IT24A042",
    btnText: "AUTHENTICATE & SIGN IN AS STUDENT"
  },
  mentor: {
    title: "FACULTY MENTOR VERIFICATION",
    badge: "ROLE: ACADEMIC AUDITOR",
    nodeId: "ACCESS POINT #MENTOR-PORTAL",
    desc: "Review student technical artifacts, validate project scores, and sign ledger attestations.",
    label: "FACULTY TEACHER ID",
    format: "FORMAT: MTR-CS-08",
    placeholder: "Enter Mentor / Teacher ID",
    defaultVal: "MTR-CS-08",
    btnText: "AUTHENTICATE AS FACULTY MENTOR"
  },
  tpo: {
    title: "TRAINING & PLACEMENT OFFICE",
    badge: "ROLE: TPO EXECUTIVE",
    nodeId: "ACCESS POINT #TPO-EXECUTIVE",
    desc: "Direct access to enterprise recruiter feeds, batch qualification metrics, and drive dispatchers.",
    label: "OFFICER IDENTIFIER ID",
    format: "FORMAT: TPO-DIR-01",
    placeholder: "Enter Officer Access Key",
    defaultVal: "TPO-DIR-01",
    btnText: "AUTHENTICATE AS TPO DIRECTOR"
  }
};

export default function AuthGateway() {
  const [role, setRole] = useState<RoleKey>('tpo');
  const [identity, setIdentity] = useState(roleProfiles['tpo'].defaultVal);
  const [password, setPassword] = useState('••••••••••••');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const activeProfile = roleProfiles[role];

  const handleRoleSwitch = (newRole: RoleKey) => {
    setRole(newRole);
    setIdentity(roleProfiles[newRole].defaultVal);
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Import the api service we just created
      const api = (await import('../services/api')).default;
      
      const response = await api.post('/auth/login', {
        identity,
        password,
        role
      });
      
      if (response.data && response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('role', role);
        localStorage.setItem('identity', identity);
        
        // alert("Institutional Credentials Verified: Handshake accepted for " + identity + ". Directing to secure workspace ledger.");
        navigate(`/${role}`);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Authentication failed. Please verify your credentials and network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-surface">
      <div className="flex flex-col w-full">
        <div className="w-full max-w-[1440px] mx-auto min-h-screen flex flex-col lg:flex-row">
          
          {/* LEFT PANEL */}
          <div className="w-full lg:w-7/12 p-6 sm:p-10 lg:p-14 flex flex-col justify-between bg-surface border-r border-[#111111] relative overflow-hidden">
            {/* Coordinate Grid Pattern */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.035]" 
              style={{
                backgroundImage: 'linear-gradient(to right, #111111 1px, transparent 1px), linear-gradient(to bottom, #111111 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }}
            ></div>
            
            <div className="relative z-10 flex flex-col space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary">school</span>
                  </div>
                </div>
                <div className="inline-flex items-center px-2 py-0.5 bg-surface-container border border-[#111111] font-label-code-sm text-label-code-sm uppercase tracking-wider text-on-surface">
                  SYS: GATEWAY_NODE//01.B
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <div className="inline-block px-2.5 py-1 bg-primary text-on-primary font-label-code-sm text-label-code-sm uppercase tracking-widest font-semibold">
                  INSTITUTIONAL PLACEMENT SUITE
                </div>
                <h1 className="font-headline-lg text-headline-lg lg:text-[34px] lg:leading-[42px] tracking-tight uppercase text-on-surface max-w-xl font-bold">
                  CENTRALIZED STUDENT CAREER & PLACEMENT INTELLIGENCE PLATFORM
                </h1>
                <p className="font-body-lg text-body-lg text-secondary max-w-lg">
                  From Verified Student Data to Better Career Opportunities. Built for precision verification, automated auditing, and frictionless talent pipelines.
                </p>
              </div>
            </div>
            
            <div className="relative z-10 pt-10 mt-8 border-t border-[#111111]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="block font-label-code-sm text-label-code-sm text-secondary font-semibold uppercase tracking-wider mb-1">
                    SYSTEM ARCHITECTS & ENGINEERING SQUAD
                  </span>
                  <div className="font-label-code-md text-label-code-md font-bold text-on-surface flex flex-wrap gap-x-2 gap-y-1">
                    <span>INDHU B</span>
                    <span className="text-secondary font-normal">•</span>
                    <span>DHEEPSHIKA G S</span>
                    <span className="text-secondary font-normal">•</span>
                    <span>ARESH M</span>
                    <span className="text-secondary font-normal">•</span>
                    <span>GOWSHIC S S</span>
                  </div>
                </div>
                <div className="font-label-code-sm text-label-code-sm px-2.5 py-1 bg-surface border border-[#111111] text-secondary">
                  BUILD // 2025.03-PROD
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT PANEL */}
          <div className="w-full lg:w-5/12 p-6 sm:p-10 lg:p-14 bg-surface-container-low flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-code-sm text-label-code-sm uppercase font-bold text-secondary tracking-wider">
                    AUTHORIZATION PROTOCOL
                  </span>
                  <span className="font-label-code-sm text-label-code-sm text-primary font-bold">
                    STEP 01 OF 01
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-0 border border-[#111111] bg-surface p-1 shadow-[2px_2px_0px_#111111]">
                  <button 
                    type="button"
                    onClick={() => handleRoleSwitch('student')}
                    className={`py-2.5 px-3 font-label-code-md text-label-code-md font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-none ${role === 'student' ? 'border border-[#111111] bg-primary text-on-primary shadow-[2px_2px_0px_#111111]' : 'border border-transparent text-secondary hover:text-on-surface hover:bg-surface-container'}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">school</span>
                    <span>STUDENT</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleRoleSwitch('mentor')}
                    className={`py-2.5 px-3 font-label-code-md text-label-code-md font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-none ${role === 'mentor' ? 'border border-[#111111] bg-primary text-on-primary shadow-[2px_2px_0px_#111111]' : 'border border-transparent text-secondary hover:text-on-surface hover:bg-surface-container'}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>MENTOR</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleRoleSwitch('tpo')}
                    className={`py-2.5 px-3 font-label-code-md text-label-code-md font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-none ${role === 'tpo' ? 'border border-[#111111] bg-primary text-on-primary shadow-[2px_2px_0px_#111111]' : 'border border-transparent text-secondary hover:text-on-surface hover:bg-surface-container'}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
                    <span>TPO DIR</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-surface border border-[#111111] p-6 sm:p-8 shadow-[4px_4px_0px_#111111]">
                <div className="border-b border-[#D0D5DD] pb-4 mb-6">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-label-code-sm text-label-code-sm font-bold uppercase px-2 py-0.5 bg-[#ECFDF3] border border-[#111111] text-[#078A4B]">
                      {activeProfile.badge}
                    </span>
                    <span className="font-label-code-sm text-label-code-sm text-secondary">
                      {activeProfile.nodeId}
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md font-bold uppercase tracking-tight text-on-surface">
                    {activeProfile.title}
                  </h2>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">
                    {activeProfile.desc}
                  </p>
                </div>
                
                <form className="space-y-5" onSubmit={handleAuthSubmit}>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="font-label-code-sm text-label-code-sm font-bold uppercase text-on-surface" htmlFor="user-identity">
                        {activeProfile.label}
                      </label>
                      <span className="font-label-code-sm text-label-code-sm text-secondary">
                        {activeProfile.format}
                      </span>
                    </div>
                    <div className="relative">
                      <input 
                        id="user-identity"
                        type="text"
                        required
                        value={identity}
                        onChange={(e) => setIdentity(e.target.value)}
                        placeholder={activeProfile.placeholder}
                        className="w-full px-3 py-2.5 bg-surface-container-lowest border border-[#111111] font-label-code-md text-label-code-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 focus:shadow-[2px_2px_0px_#155EEF]" 
                      />
                      <span className="absolute right-3 top-2.5 text-secondary material-symbols-outlined text-[18px]">badge</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="font-label-code-sm text-label-code-sm font-bold uppercase text-on-surface" htmlFor="user-password">
                        SYSTEM CREDENTIAL / PASSWORD
                      </label>
                      <a href="#reset" onClick={(e) => { e.preventDefault(); alert('Reset token generated.'); }} className="font-label-code-sm text-label-code-sm text-primary hover:underline">
                        FORGOT KEY?
                      </a>
                    </div>
                    <div className="relative">
                      <input 
                        id="user-password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full px-3 py-2.5 bg-surface-container-lowest border border-[#111111] font-label-code-md text-label-code-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 focus:shadow-[2px_2px_0px_#155EEF]" 
                      />
                      <span className="absolute right-3 top-2.5 text-secondary material-symbols-outlined text-[18px]">lock</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded-none border border-[#111111] text-primary focus:ring-0 cursor-pointer" />
                      <span className="font-label-code-sm text-label-code-sm text-secondary uppercase font-semibold">REMEMBER SECURE TERMINAL</span>
                    </label>
                    <span className="font-label-code-sm text-label-code-sm text-[#078A4B] flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 bg-[#078A4B] rounded-full inline-block"></span>
                      SSL VERIFIED
                    </span>
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full py-3 px-4 bg-primary text-on-primary border border-[#111111] font-label-code-md text-label-code-md font-bold uppercase tracking-wider shadow-[2px_2px_0px_#111111] hover:bg-[#104ECC] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
                          <span>VERIFYING SYSTEM KEY...</span>
                        </>
                      ) : (
                        <>
                          <span>{activeProfile.btnText}</span>
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
                
                <div className="mt-6 pt-5 border-t border-[#D0D5DD]">
                  <span className="block font-label-code-sm text-label-code-sm text-secondary font-bold uppercase tracking-wider mb-2.5">
                    PRESET EVALUATION PROFILES:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" onClick={() => handleRoleSwitch('mentor')} className="px-2.5 py-1.5 bg-surface-container border border-[#111111] text-left hover:bg-surface-container-highest flex items-center justify-between">
                      <div>
                        <span className="block font-label-code-sm text-[10px] text-secondary">FACULTY MENTOR</span>
                        <span className="font-label-code-sm text-label-code-sm font-bold text-on-surface">MTR-CS-08</span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[16px]">touch_app</span>
                    </button>
                    <button type="button" onClick={() => handleRoleSwitch('tpo')} className="px-2.5 py-1.5 bg-surface-container border border-[#111111] text-left hover:bg-surface-container-highest flex items-center justify-between">
                      <div>
                        <span className="block font-label-code-sm text-[10px] text-secondary">PLACEMENT DIRECTOR</span>
                        <span className="font-label-code-sm text-label-code-sm font-bold text-on-surface">TPO-DIR-01</span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[16px]">touch_app</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-[#D0D5DD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-secondary font-label-code-sm text-label-code-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                <span>Institutional Single Sign-On (SSO) Supported</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 bg-surface border border-[#111111] text-on-surface font-semibold text-[10px]">
                  ISO/IEC 27001
                </span>
                <span>Certified Academic Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
