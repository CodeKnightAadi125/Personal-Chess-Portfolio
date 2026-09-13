import useChessStats from "../hooks/useChessStats";
import danyaImg from '../assets/danya.jpg'
import { Zap, Clock, Crosshair } from 'lucide-react'
import bulletIcon from '../assets/bullet.png'
function Home() {
  const { stats, profile, loading, error } = useChessStats("Scion_Of_Void");
  console.log("stats:", stats);
  console.log("profile:", profile);
  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Loading...
      </div>
    );
  if (error) return <div>Error:{error}</div>;
  return(
  <div className="bg-white min-h-screen text-gray-900">
    {/* Danya Tribute Banner */}
    <div className="bg-blue-50 border border-blue-100 py-5 px-6">
        <div className="max-w-3xl mx-auto flex items-center gap-6">
        {/* Danya's image */}
        <img
            src={danyaImg}
            alt="GM Daniel Naroditsky"
            className="w-36 h-36 rounded-full border-2 border-gray-600 flex-shrink-0"
            onError={(e)=> e.target.style.display='none'}
        />
<div>
            <p className="text-blue-700 font-bold text-xs uppercase tracking-widest mb-1">In Memory of</p>
            <p className="text-gray-900 font-bold text-lg">GM Daniel Naroditsky — Danya (1995–2025)</p>
            <p className="text-gray-500 text-lg italic mt-1">
                "Chess is not just a game. It is a mirror of who you are."
            </p>
             <p className="text-3xl ml-auto flex-shrink-0">🕯️</p>
             <p className="text-2xl font-bold italic">Thank You For Everything Danya,We Miss You!!</p>
        </div>
        </div>

    </div>
    {/*Hero Section*/}
<div className="flex flex-col items-center justify-center py-20 px-6 text-center">
  {/* Avatar */}
   <img
                    src={profile.avatar}
                    alt="avatar"
                    className="w-28 h-28 rounded-full border-4 border-blue-500 mb-6"
                />
                  {/* Name */}
                <h1 className="text-4xl font-bold mb-2">Scion_Of_Void</h1>

                {/* Tagline - update later */}
                <p className="text-blue-500 text-lg mb-6">Chess Player from India 🇮🇳</p>

                {/*Button*/}
                <a href="https://www.chess.com/member/Scion_Of_Void"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                    View Chess.com Profile
                </a>
</div>
{/* Stats Section */}
<div className="max-w-4xl mx-auto px-6 pb-20">
    
    <h2 className="text-2xl font-bold text-center mb-8">My Live Ratings</h2>

    <div className="grid grid-cols-3 gap-6">

        {/* Blitz */}
        <div className="bg-gray-100 rounded-xl p-6 text-center shadow">
            <h3 className="text-blue-500 font-bold text-lg mb-3">⚡ Blitz</h3>
            <p className="text-4xl font-bold">{stats.chess_blitz?.last?.rating ?? "N/A"}</p>
            <p className="text-gray-400 text-sm mt-2">Current Rating</p>
            <div className="mt-4 text-sm text-gray-600">
                <p>✅ Wins: {stats.chess_blitz?.record?.win}</p>
                <p>❌ Losses: {stats.chess_blitz?.record?.loss}</p>
                <p>🤝 Draws: {stats.chess_blitz?.record?.draw}</p>
            </div>
        </div>

        {/* Rapid */}
        <div className="bg-gray-100 rounded-xl p-6 text-center shadow">
            <h3 className="text-blue-500 font-bold text-lg mb-3">🕐 Rapid</h3>
            <p className="text-4xl font-bold">{stats.chess_rapid?.last?.rating ?? "N/A"}</p>
            <p className="text-gray-400 text-sm mt-2">Current Rating</p>
            <div className="mt-4 text-sm text-gray-600">
                <p>✅ Wins: {stats.chess_rapid?.record?.win}</p>
                <p>❌ Losses: {stats.chess_rapid?.record?.loss}</p>
                <p>🤝 Draws: {stats.chess_rapid?.record?.draw}</p>
            </div>
        </div>

        {/* Bullet */}
        <div className="bg-gray-100 rounded-xl p-6 text-center shadow">
           
           <h3 className="text-blue-500 font-bold text-lg mb-3 flex items-center justify-center gap-2">
        <img src={bulletIcon} className="w-6 h-6" />
        Bullet
    </h3>
            <p className="text-4xl font-bold">{stats.chess_bullet?.last?.rating ?? "N/A"}</p>
            <p className="text-gray-400 text-sm mt-2">Current Rating</p>
            <div className="mt-4 text-sm text-gray-600">
                <p>✅ Wins: {stats.chess_bullet?.record?.win}</p>
                <p>❌ Losses: {stats.chess_bullet?.record?.loss}</p>
                <p>🤝 Draws: {stats.chess_bullet?.record?.draw}</p>
            </div>
        </div>

    </div>
</div>
{/* Quote Section */}
<div className="bg-gray-100 py-20 px-6 text-center">
    <div className="max-w-2xl mx-auto">
        
        {/* Quote icon */}
        <p className="text-6xl text-blue-500 mb-4">"</p>
        
        {/* Quote */}
        <p className="text-xl text-gray-700 italic leading-relaxed">
            It's an entire world of just 64 squares. I feel safe in it. 
            I can control it; I can dominate it. And it's predictable. 
            So, if I get hurt, I only have myself to blame.
        </p>

        {/* Author */}
        <p className="text-blue-500 font-semibold mt-6">— Scion_Of_Void</p>

    </div>
</div>
  </div>
) 
}
export default Home;
