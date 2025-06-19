


export const Hero = ({isDark}) => {
    return(
        <div className='flex justify-center items-center customContainerPages min-h-screen flex-col text-center gap-6 text-lg max-sm:px-5 max-sm:py-3' id="home">
            <h1 className={`text-5xl max-md:text-2xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>Hi, I'm <span className="text-violet-500">YERRIBOYINA TEJA</span></h1>
            <p className={`min-lg:w-3xl max-sm:text-[0.7rem] ${isDark ? 'text-white' : 'text-black'} text-xl`}>
                I am a passionate frontend React developer, always curious about how things work under the hood.
                I love asking deep, clear questions, especially about Tailwind, Vite, and dark mode handling.
            </p>
            <button className="px-7 py-1 bg-violet-500 text-white rounded-full text-lg">View My Work</button>
        </div>
    )
}