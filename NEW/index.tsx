
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from '@google/genai';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

import { Artifact, Session } from './types';
import { generateId } from './utils';

import ArtifactCard from './components/ArtifactCard';
import { 
    ThinkingIcon, 
    ArrowUpIcon
} from './components/Icons';

// --- Sub-components ---

const Fader = ({ label, initialValue = 0 }: { label: string, initialValue?: number }) => {
    const [val, setVal] = useState(initialValue);
    
    // Calculates color based on value (Green -> Amber -> Red)
    const getColor = (v: number) => {
        if (v > 80) return 'var(--eos-red)';
        if (v > 50) return 'var(--eos-amber)';
        return 'var(--eos-green)';
    };

    return (
        <div className="fader-slot">
            <div className="fader-track-container">
                <div className="fader-track"></div>
                <div 
                    className="fader-level-indicator" 
                    style={{ 
                        height: `${val}%`, 
                        background: getColor(val),
                        opacity: val > 0 ? 0.8 : 0 
                    }}
                ></div>
                <div 
                    className="fader-knob" 
                    style={{ bottom: `${val}%` }} 
                    onMouseDown={(e) => {
                        const startY = e.clientY;
                        const startVal = val;
                        const trackHeight = 140; // Approx height in pixels
                        const move = (moveEvent: MouseEvent) => {
                            const deltaY = startY - moveEvent.clientY;
                            const deltaPercent = (deltaY / trackHeight) * 100;
                            setVal(Math.min(100, Math.max(0, startVal + deltaPercent)));
                        };
                        const up = () => {
                            window.removeEventListener('mousemove', move);
                            window.removeEventListener('mouseup', up);
                        };
                        window.addEventListener('mousemove', move);
                        window.addEventListener('mouseup', up);
                    }}
                />
            </div>
            <div className="fader-label" style={{ color: getColor(val) }}>{Math.round(val)}%</div>
            <div className="fader-label">{label}</div>
        </div>
    );
};

const Encoder = ({ label }: { label: string }) => (
    <div className="encoder-item">
        <div className="encoder-wheel"></div>
        <div className="fader-label" style={{ marginTop: '5px' }}>{label}</div>
    </div>
);

// --- Main App ---

function App() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [viewMode, setViewMode] = useState<'HOME' | 'WORKS' | 'SHOP' | 'TECH'>('HOME');
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendMessage = useCallback(async (manualPrompt?: string) => {
    const promptToUse = manualPrompt || inputValue;
    const trimmedInput = promptToUse.trim();
    if (!trimmedInput || isLoading) return;
    if (!manualPrompt) setInputValue('');

    setIsLoading(true);
    // If sending a message, switch to TECH view to see the output
    setViewMode('TECH'); 
    
    const sessionId = generateId();
    const placeholderArtifacts: Artifact[] = [{
        id: `${sessionId}_0`,
        styleName: 'Analyzing Request...',
        html: '',
        status: 'streaming',
    }];

    const newSession: Session = {
        id: sessionId,
        prompt: trimmedInput,
        timestamp: Date.now(),
        artifacts: placeholderArtifacts
    };

    setSessions(prev => [newSession, ...prev]);

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = `
            Act as an expert ETC Eos programmer.
            User Request: "${trimmedInput}"
            
            Task: Create a visual, technical response. 
            - If asking for code, provide formatted Lua or Macro code.
            - If asking for info, provide a clean HTML summary using dark mode styles.
            - Use <code> tags for commands.
            - KEEP IT CONCISE.
            
            Return ONLY the raw HTML body content. No <html> or <head> tags.
            Style it with <style> block if needed, assuming a dark background.
        `.trim();

        const stream = await ai.models.generateContentStream({
            model: 'gemini-3-pro-preview',
            contents: [{ parts: [{ text: prompt }], role: "user" }],
        });

        let html = '';
        for await (const chunk of stream) {
            html += chunk.text || '';
            setSessions(prev => prev.map(sess => sess.id === sessionId ? {
                ...sess,
                artifacts: sess.artifacts.map(art => ({ ...art, html, styleName: 'LIVE DATA' }))
            } : sess));
        }
        setSessions(prev => prev.map(sess => sess.id === sessionId ? {
            ...sess,
            artifacts: sess.artifacts.map(art => ({ ...art, status: 'complete' }))
        } : sess));
    } catch (e) {
        console.error(e);
        // Add error artifact
    } finally {
        setIsLoading(false);
    }
  }, [inputValue, isLoading]);

  // --- View Renderers ---

  const renderHome = () => (
      <div style={{ textAlign: 'center', marginTop: '15%', opacity: 0.8 }}>
          <div style={{ fontSize: '3rem', fontFamily: 'var(--font-header)', color: 'var(--eos-cyan)' }}>LUMINA</div>
          <div style={{ fontSize: '1rem', letterSpacing: '4px', marginBottom: '20px' }}>VISUAL DESIGN CONSOLE</div>
          <div style={{ display: 'inline-block', border: '1px solid var(--eos-amber)', padding: '10px 20px', color: 'var(--eos-amber)' }}>
              SYSTEM READY
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#64748b' }}>
              SELECT A MODE FROM DIRECT SELECTS TO BEGIN
          </p>
      </div>
  );

  const renderWorks = () => (
      <div>
          <h3 style={{ color: 'var(--eos-green)', borderBottom: '1px solid #333', paddingBottom: '10px' }}>CUE LIST 1: PORTFOLIO</h3>
          <table className="eos-table">
              <thead>
                  <tr>
                      <th style={{ width: '10%' }}>Q</th>
                      <th style={{ width: '15%' }}>Time</th>
                      <th>Label / Project</th>
                      <th style={{ width: '20%' }}>Role</th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="eos-active-row">
                      <td>1</td>
                      <td>0.5</td>
                      <td>WORLD TOUR 2024 "NEON DREAMS"</td>
                      <td>Lead Programmer</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>3</td>
                      <td>METROPOLIS OPERA HOUSE</td>
                      <td>Systems Tech</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>0</td>
                      <td>CORP EVENT: G-TECH LAUNCH</td>
                      <td>Lighting Des.</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>2.5</td>
                      <td>INDIE BAND "ECHOES" MV</td>
                      <td>Gaffer</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>5</td>
                      <td>ART INSTALLATION: "VOID"</td>
                      <td>Interaction Dev</td>
                  </tr>
              </tbody>
          </table>
          <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#888' }}>
              > PENDING CUE: 6 (Next Project Loading...)
          </div>
      </div>
  );

  const renderShop = () => (
      <div>
           <h3 style={{ color: 'var(--eos-magenta)', borderBottom: '1px solid #333', paddingBottom: '10px' }}>PATCH: SOFTWARE STORE</h3>
           <table className="eos-table">
              <thead>
                  <tr>
                      <th style={{ width: '10%' }}>Chan</th>
                      <th>Type / Product Name</th>
                      <th style={{ width: '15%' }}>Address/Cost</th>
                      <th style={{ width: '15%' }}>Universe</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>101</td>
                      <td><span style={{color:'var(--eos-cyan)'}}>EOS_AUTO_PATCH_SCRIPT</span></td>
                      <td>$29.99</td>
                      <td>DOWNLOAD</td>
                  </tr>
                  <tr>
                      <td>102</td>
                      <td><span style={{color:'var(--eos-cyan)'}}>OSC_TOUCH_LAYOUT_V2</span></td>
                      <td>$15.00</td>
                      <td>DOWNLOAD</td>
                  </tr>
                  <tr>
                      <td>103</td>
                      <td><span style={{color:'var(--eos-cyan)'}}>MAGIC_SHEET_ICONS_PACK</span></td>
                      <td>$5.00</td>
                      <td>DOWNLOAD</td>
                  </tr>
                  <tr>
                      <td>104</td>
                      <td><span style={{color:'var(--eos-cyan)'}}>RESOLUME_BRIDGE_PLUGIN</span></td>
                      <td>$49.99</td>
                      <td>DOWNLOAD</td>
                  </tr>
              </tbody>
          </table>
          <div style={{ padding: '20px', background: '#111', marginTop: '20px', border: '1px dashed #444', textAlign: 'center' }}>
              <button 
                  onClick={() => handleSendMessage("Tell me more about the EOS Auto Patch Script")}
                  style={{ background: 'var(--eos-magenta)', border: 'none', padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                  QUERY SELECTED
              </button>
          </div>
      </div>
  );

  return (
    <div className="console-universe">
      <div className="perspective-container">
          <div className="grid-3d"></div>
      </div>

      <div className="console-chassis">
        {/* Header */}
        <div className="console-status-bar">
            <div style={{ display: 'flex', gap: '20px' }}>
                <span>USER: ONE_DOLLAR</span>
                <span style={{ color: '#64748b' }}>IP: 10.101.90.101</span>
            </div>
            <div style={{ color: 'var(--eos-amber)', fontWeight: 'bold' }}>SHOW: OMYGOD_PORTFOLIO</div>
            <div>{time}</div>
        </div>

        {/* Main Screens */}
        <div className="screen-area">
            {/* Left Screen: Navigation */}
            <div className="virtual-screen">
                <div className="screen-header">
                    <span className="screen-title">DS 1: NAVIGATION</span>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--eos-green)' }}></div>
                    </div>
                </div>
                <div className="screen-content" style={{ padding: '5px' }}>
                    <div className="magic-sheet-layout">
                        <div className={`direct-select amber ${viewMode === 'HOME' ? 'active-mode' : ''}`} onClick={() => setViewMode('HOME')}>
                            <span className="id-num">1</span>
                            <h4>HOME</h4>
                        </div>
                        <div className={`direct-select green ${viewMode === 'WORKS' ? 'active-mode' : ''}`} onClick={() => setViewMode('WORKS')}>
                            <span className="id-num">2</span>
                            <h4>WORKS (Q-LIST)</h4>
                        </div>
                        <div className={`direct-select magenta ${viewMode === 'SHOP' ? 'active-mode' : ''}`} onClick={() => setViewMode('SHOP')}>
                            <span className="id-num">3</span>
                            <h4>SHOP (PATCH)</h4>
                        </div>
                        <div className={`direct-select cyan ${viewMode === 'TECH' ? 'active-mode' : ''}`} onClick={() => setViewMode('TECH')}>
                            <span className="id-num">4</span>
                            <h4>AI TECH ASSIST</h4>
                        </div>
                        {/* Spacers or extra tools */}
                        <div className="direct-select" onClick={() => handleSendMessage("Explain DMX 512 basics")}>
                            <span className="id-num">5</span>
                            <h4>DMX GUIDE</h4>
                        </div>
                         <div className="direct-select" onClick={() => handleSendMessage("How to write a Macro for color chase?")}>
                            <span className="id-num">6</span>
                            <h4>MACRO HELP</h4>
                        </div>
                        <div className="direct-select" onClick={() => window.open('https://github.com/onedollar10', '_blank')}>
                            <span className="id-num">7</span>
                            <h4>GITHUB</h4>
                        </div>
                        <div className="direct-select" onClick={() => alert("System Message: Contact me at onedollar10@example.com")}>
                            <span className="id-num">8</span>
                            <h4>CONTACT</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Screen: Content */}
            <div className="virtual-screen">
                <div className="screen-header">
                    <span className="screen-title">LIVE: {viewMode}</span>
                    <span style={{ color: 'var(--eos-cyan)', fontSize: '0.6rem' }}>TAB 2.1</span>
                </div>
                <div className="screen-content">
                    {viewMode === 'HOME' && renderHome()}
                    {viewMode === 'WORKS' && renderWorks()}
                    {viewMode === 'SHOP' && renderShop()}
                    {viewMode === 'TECH' && (
                        <div style={{ paddingBottom: '40px' }}>
                            {sessions.length === 0 && (
                                <div style={{ opacity: 0.5, textAlign: 'center', marginTop: '50px' }}>
                                    [ Awaiting Command Line Input... ]
                                </div>
                            )}
                            {sessions.map(sess => (
                                <div key={sess.id}>
                                    <div style={{ borderBottom: '1px solid #333', marginBottom: '10px', paddingBottom: '5px', color: 'var(--eos-amber)', fontSize: '0.8rem' }}>
                                        CMD > {sess.prompt}
                                    </div>
                                    {sess.artifacts.map(art => (
                                        <ArtifactCard key={art.id} artifact={art} isFocused={false} onClick={() => {}} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Bottom Panel */}
        <div className="bottom-panels">
            {/* Fader Bank */}
            <div className="fader-bank">
                <Fader label="MASTER" initialValue={100} />
                <Fader label="CL 1" initialValue={0} />
                <Fader label="CL 2" initialValue={45} />
                <Fader label="CL 3" initialValue={0} />
                <Fader label="HAZE" initialValue={15} />
                <Fader label="WORK" initialValue={80} />
            </div>

            {/* Controls */}
            <div className="control-right">
                <div className="encoder-grid">
                    <Encoder label="PAN" />
                    <Encoder label="TILT" />
                </div>
                <div className="command-line-box">
                    <div className="command-line-prefix">Live:</div>
                    <input 
                        className="command-line-input" 
                        placeholder="Enter command..." 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <div 
                        style={{ paddingRight: '10px', cursor: 'pointer', color: isLoading ? 'var(--eos-amber)' : 'inherit' }}
                        onClick={() => handleSendMessage()}
                    >
                        {isLoading ? <ThinkingIcon /> : <ArrowUpIcon />}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
