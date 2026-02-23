import React, { useState, useEffect, useRef } from 'react';

// Inline SVGs to avoid dependency issues
const Download = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>);
const RefreshCw = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>);
const Type = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>);
const Palette = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.836-.437-1.124-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>);
const LayoutIcon = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>);
const Settings = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>);
const Sparkles = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>);
const Loader2 = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>);
const Sliders = ({ size = 24, className = "" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>);

const THEMES = [
  {
    name: 'Neural Dark (Default)',
    bg1: '#0f172a', // Slate 900
    bg2: '#020617', // Slate 950
    accent1: '#38bdf8', // Light Blue
    accent2: '#818cf8', // Indigo
    textMain: '#f8fafc',
    textMuted: '#94a3b8',
    nodeColor: 'rgba(56, 189, 248, 0.4)',
    lineColor: 'rgba(129, 140, 248, 0.15)',
    watermarkColor: '255, 255, 255'
  },
  {
    name: 'Cyberpunk AI',
    bg1: '#1e1b4b', // Indigo 950
    bg2: '#000000', // Black
    accent1: '#f0abfc', // Fuchsia 300
    accent2: '#c026d3', // Fuchsia 600
    textMain: '#ffffff',
    textMuted: '#cbd5e1',
    nodeColor: 'rgba(240, 171, 252, 0.4)',
    lineColor: 'rgba(192, 38, 211, 0.2)',
    watermarkColor: '240, 171, 252'
  },
  {
    name: 'Matrix Developer',
    bg1: '#064e3b', // Emerald 900
    bg2: '#022c22', // Emerald 950
    accent1: '#34d399', // Emerald 400
    accent2: '#059669', // Emerald 600
    textMain: '#ecfdf5',
    textMuted: '#a7f3d0',
    nodeColor: 'rgba(52, 211, 153, 0.3)',
    lineColor: 'rgba(5, 150, 105, 0.15)',
    watermarkColor: '52, 211, 153'
  },
  {
    name: 'Midnight Purple',
    bg1: '#2e1065', // Purple 950
    bg2: '#09090b', // Zinc 950
    accent1: '#c084fc', // Purple 400
    accent2: '#93c5fd', // Blue 300
    textMain: '#ffffff',
    textMuted: '#d8b4fe',
    nodeColor: 'rgba(192, 132, 252, 0.3)',
    lineColor: 'rgba(147, 197, 253, 0.15)',
    watermarkColor: '192, 132, 252'
  }
];

// Pre-generate nodes for the background so they don't jump around when typing
const generateNodes = (count, width, height) => {
  const nodes = [];
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.5,
      connections: []
    });
  }
  return nodes;
};

const CODE_SNIPPETS = ['< />', '{ }', '[ ]', 'AI', '() =>', 'SELECT *', 'import ai'];

// Helper to make API calls to Gemini securely
const fetchGemini = async (prompt, schema) => {
  // NOTE: For local development with Vite, change the line below to:
  // const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const apiKey = ""; 

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema
    }
  };

  for (let i = 0; i < 5; i++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`API Error ${res.status}: ${errText}`);
      }
      
      const data = await res.json();
      let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!text) {
         throw new Error('No valid response received from AI model.');
      }

      // Strip markdown formatting if the AI hallucinated it despite application/json setting
      text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      
      return JSON.parse(text);
    } catch (err) {
      console.error(`Fetch attempt ${i + 1} failed:`, err);
      if (i === 4) throw err;
      await new Promise(r => setTimeout(r, Math.pow(2, i) * 1000));
    }
  }
};

export default function App() {
  const canvasRef = useRef(null);
  const [name, setName] = useState('John Doe');
  const [title, setTitle] = useState('Full Stack Web Developer');
  const [subtitle, setSubtitle] = useState('Integrating Next-Gen AI into Scalable Web Applications');
  const [techStack, setTechStack] = useState('React, Node.js, Python, AWS');
  const [codeSnippets, setCodeSnippets] = useState(CODE_SNIPPETS);
  const [themeIndex, setThemeIndex] = useState(0);
  const [layout, setLayout] = useState('left'); // 'left', 'center', 'right'
  const [watermarkOpacity, setWatermarkOpacity] = useState(8); // Default to 8% opacity
  
  // LLM State
  const [isGeneratingSubtitles, setIsGeneratingSubtitles] = useState(false);
  const [suggestedSubtitles, setSuggestedSubtitles] = useState([]);
  const [isGeneratingSnippets, setIsGeneratingSnippets] = useState(false);
  const [apiError, setApiError] = useState('');

  // We keep the nodes in a ref so they remain consistent across typing re-renders
  const nodesRef = useRef([]);

  const width = 1584; // Standard LinkedIn Cover Width
  const height = 396; // Standard LinkedIn Cover Height

  useEffect(() => {
    // Initialize random nodes/watermarks only once or on manual refresh
    nodesRef.current = generateNodes(120, width, height);
    drawCanvas();
  }, []);

  useEffect(() => {
    drawCanvas();
  }, [name, title, subtitle, themeIndex, layout, codeSnippets, watermarkOpacity]);

  const handleGenerateSubtitles = async () => {
    if (!title) return;
    setIsGeneratingSubtitles(true);
    setSuggestedSubtitles([]);
    setApiError('');
    try {
      const prompt = `You are an expert LinkedIn profile optimizer. Generate exactly 3 short, punchy, professional slogans/subtitles for a LinkedIn cover image. The user's title is '${title}' and their tech stack is '${techStack}'. Keep them under 60 characters. Return JSON format.`;
      const schema = {
        type: "OBJECT",
        properties: { slogans: { type: "ARRAY", items: { type: "STRING" } } }
      };
      const result = await fetchGemini(prompt, schema);
      if (result && result.slogans) {
        setSuggestedSubtitles(result.slogans);
      }
    } catch (error) {
      console.error("Failed to generate subtitles:", error);
      setApiError(error.message);
    } finally {
      setIsGeneratingSubtitles(false);
    }
  };

  const handleGenerateSnippets = async () => {
    if (!techStack) return;
    setIsGeneratingSnippets(true);
    setApiError('');
    try {
      const prompt = `Generate exactly 5 very short code snippets or technical symbols (max 10 characters each) strictly related to this tech stack: '${techStack}'. These will be used as background watermarks on a tech banner. Examples: '< />', 'import ai', '{}', 'npm start'. Return JSON format.`;
      const schema = {
        type: "OBJECT",
        properties: { snippets: { type: "ARRAY", items: { type: "STRING" } } }
      };
      const result = await fetchGemini(prompt, schema);
      if (result && result.snippets && result.snippets.length > 0) {
        setCodeSnippets(result.snippets);
      } else {
        throw new Error("AI returned empty or invalid snippets array.");
      }
    } catch (error) {
      console.error("Failed to generate snippets:", error);
      setApiError(error.message);
    } finally {
      setIsGeneratingSnippets(false);
    }
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const theme = THEMES[themeIndex];

    // 1. Clear & Draw Background
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, theme.bg1);
    bgGradient.addColorStop(1, theme.bg2);
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Draw AI Neural Network Background
    ctx.lineWidth = 1;
    const nodes = nodesRef.current;
    
    // Draw lines between close nodes
    ctx.strokeStyle = theme.lineColor;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    ctx.fillStyle = theme.nodeColor;
    nodes.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // 3. Draw Tech/Code Watermarks
    ctx.fillStyle = `rgba(${theme.watermarkColor}, ${watermarkOpacity / 100})`;
    ctx.font = 'bold 120px monospace';
    ctx.textAlign = 'center';
    
    // Place generated code snippets randomly based on the fixed positions
    ctx.fillText(codeSnippets[0] || '< />', width * 0.8, height * 0.4);
    ctx.fillText(codeSnippets[1] || '{ }', width * 0.9, height * 0.8);
    ctx.fillText(codeSnippets[2] || 'AI', width * 0.1, height * 0.6);
    ctx.fillText(codeSnippets[3] || '() =>', width * 0.5, height * 0.9);
    if(codeSnippets[4]) ctx.fillText(codeSnippets[4], width * 0.2, height * 0.3);

    // 4. Draw Typography
    // Adjust layout safe zones (LinkedIn profile picture is on the bottom left)
    // Left layout pushes text to the right to avoid the avatar
    let startX = width / 2;
    let align = 'center';

    if (layout === 'left') {
      startX = 450; // Safely past the avatar
      align = 'left';
    } else if (layout === 'right') {
      startX = width - 100;
      align = 'right';
    }

    ctx.textAlign = align;

    // Glowing effect for text
    ctx.shadowColor = theme.accent1;
    ctx.shadowBlur = 15;
    
    // Name
    ctx.fillStyle = theme.textMain;
    ctx.font = 'bold 76px "Inter", "Segoe UI", sans-serif';
    ctx.fillText(name.toUpperCase(), startX, height * 0.40);
    
    // Reset shadow for subtitle to keep it clean
    ctx.shadowBlur = 0;

    // Title (Gradient Text Simulation)
    ctx.font = 'bold 44px "Inter", "Segoe UI", sans-serif';
    const textWidth = ctx.measureText(title).width;
    
    let gradStartX = startX;
    if (align === 'center') gradStartX = startX - textWidth / 2;
    if (align === 'right') gradStartX = startX - textWidth;

    const textGradient = ctx.createLinearGradient(gradStartX, 0, gradStartX + textWidth, 0);
    textGradient.addColorStop(0, theme.accent1);
    textGradient.addColorStop(1, theme.accent2);
    ctx.fillStyle = textGradient;
    ctx.fillText(title, startX, height * 0.58);

    // Subtitle
    ctx.fillStyle = theme.textMuted;
    ctx.font = '32px "Inter", "Segoe UI", sans-serif';
    ctx.fillText(subtitle, startX, height * 0.73);
  };

  const regenerateBackground = () => {
    nodesRef.current = generateNodes(120, width, height);
    drawCanvas();
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = `linkedin-cover-${name.replace(/\s+/g, '-').toLowerCase()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-3 sm:p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            LinkedIn Cover Generator
          </h1>
          <p className="text-gray-600">
            Tailored for Full Stack Developers & AI Enthusiasts. Adjust your details and export.
          </p>
        </header>

        {/* Canvas Preview Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Preview (1584 x 396)</span>
            <button 
              onClick={downloadImage}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm w-full sm:w-auto"
            >
              <Download size={16} />
              Download PNG
            </button>
          </div>
          
          <div className="p-4 md:p-8 flex justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gray-50">
            {/* The canvas renders internally at 1584x396 for high quality output, 
              but scales down via CSS to fit the user's screen.
            */}
            <div className="relative w-full max-w-[1584px] shadow-2xl rounded-lg overflow-hidden border border-gray-800/20">
              <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className="w-full h-auto block"
                style={{ aspectRatio: '4/1' }}
              />
              
              {/* Mock LinkedIn Profile Picture Overlay to help with framing */}
              {layout === 'left' && (
                <div className="absolute bottom-[-15%] left-[5%] w-[18%] pt-[18%] bg-gray-300 rounded-full border-2 sm:border-4 border-white shadow-lg opacity-50 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 flex items-center justify-center text-[8px] sm:text-xs text-gray-600 font-medium text-center leading-tight">
                    Profile<br className="sm:hidden" /> Pic
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Text Inputs */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800">
                <Type size={20} className="text-blue-500"/> Typography & Tech Stack
              </h2>
            </div>
            
            {apiError && (
              <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm border border-red-200 font-medium">
                {apiError}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                  placeholder="e.g. Jane Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                  placeholder="e.g. Full Stack Web Developer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tech Stack</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                    placeholder="e.g. React, Node, Python, AWS"
                  />
                  <button
                    onClick={handleGenerateSnippets}
                    disabled={isGeneratingSnippets || !techStack}
                    className="flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 border border-purple-200 w-full sm:w-auto shrink-0"
                    title="Generate custom background tech watermarks using AI"
                  >
                    {isGeneratingSnippets ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                    <span>✨ Magic Watermarks</span>
                  </button>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-1 gap-1 sm:gap-0">
                  <label className="block text-sm font-medium text-gray-700">Subtitle / Slogan</label>
                  <button
                    onClick={handleGenerateSubtitles}
                    disabled={isGeneratingSubtitles || !title}
                    className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors disabled:opacity-50 w-fit"
                  >
                    {isGeneratingSubtitles ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                    ✨ Auto-Suggest
                  </button>
                </div>
                <input
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                  placeholder="e.g. Integrating Next-Gen AI into Scalable Web Applications"
                />

                {/* AI Suggestions Box */}
                {suggestedSubtitles.length > 0 && (
                  <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-3 space-y-2">
                    <p className="text-xs font-semibold text-blue-800 uppercase tracking-wide">AI Suggestions (Click to apply):</p>
                    <div className="flex flex-col gap-2">
                      {suggestedSubtitles.map((slog, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSubtitle(slog);
                            setSuggestedSubtitles([]);
                          }}
                          className="text-left text-sm text-gray-700 hover:text-blue-700 hover:bg-white bg-white/50 px-3 py-2 rounded border border-blue-200/50 transition-colors"
                        >
                          "{slog}"
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Design Settings */}
          <div className="col-span-1 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 border-b pb-2">
              <Settings size={20} className="text-purple-500"/> Design
            </h2>

            {/* Themes */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Palette size={16} /> Color Theme
              </label>
              <div className="grid grid-cols-1 gap-2">
                {THEMES.map((theme, idx) => (
                  <button
                    key={idx}
                    onClick={() => setThemeIndex(idx)}
                    className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                      themeIndex === idx 
                        ? 'bg-gray-900 text-white ring-2 ring-blue-500 ring-offset-1' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {theme.name}
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.bg1 }}></div>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.accent1 }}></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Layout */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <LayoutIcon size={16} /> Text Alignment
              </label>
              <div className="flex bg-gray-100 p-1 rounded-lg">
                {['left', 'center', 'right'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLayout(l)}
                    className={`flex-1 py-1.5 text-sm font-medium capitalize rounded-md transition-colors ${
                      layout === l ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                *Left layout includes a safe-zone to prevent the LinkedIn profile picture from covering your text.
              </p>
            </div>

            {/* Watermark Opacity */}
            <div className="space-y-3">
              <label className="flex items-center justify-between text-sm font-medium text-gray-700">
                <span className="flex items-center gap-2"><Sliders size={16} /> Watermark Opacity</span>
                <span className="text-gray-500 font-normal">{watermarkOpacity}%</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={watermarkOpacity}
                onChange={(e) => setWatermarkOpacity(parseInt(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Refresh Background */}
            <div className="pt-2">
              <button
                onClick={regenerateBackground}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-200"
              >
                <RefreshCw size={16} />
                Regenerate AI Nodes
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}