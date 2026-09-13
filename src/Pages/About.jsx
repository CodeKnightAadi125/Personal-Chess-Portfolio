function About(){
    return(
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="bg-gray-950 text-white py-16 px-6 text-center">
<h1 className="text-4xl font-bold mb-4">My Chess Journey</h1>
 <p className="text-gray-400 text-lg max-w-xl mx-auto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, quam cupiditate ad nulla molestiae recusandae tenetur culpa voluptate, cum aliquam pariatur eum, saepe doloribus quas.
                </p>
            </div>
            {/* My Journey Section*/ }
           {/* Journey Cards */}
<div className="max-w-4xl mx-auto px-6 py-16">
    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">How It Started</h2>
    
    <div className="grid grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow">
            <p className="text-3xl mb-3">🗓️</p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">January 2025</h3>
            <p className="text-gray-600 leading-relaxed">
                I picked up chess with zero experience. Like most beginners, 
                I started with tutorials — NM Robert Ramirez helped me understand 
                the fundamentals and get my footing in the game.
            </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow">
            <p className="text-3xl mb-3">📈</p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Discovering GM Daniel Naroditsky</h3>
            <p className="text-gray-600 leading-relaxed">
                When I crossed 1200, I discovered GM Daniel Naroditsky and his amazing speedrun. 
                Everything changed. The way Danya explained chess made it feel 
                less like a game and more like a language I was learning to speak.
                Finally i crossed 1600 in rapid.My current goal is to reach 2000 rapid.
            
            </p>
        </div>

    </div>
</div>
        </div>
    )

}
export default About;