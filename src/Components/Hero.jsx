


export const Hero = ({isDark}) => {
    return(
        <div className='flex justify-center items-center customContainerPages min-h-screen flex-col text-center gap-6 text-lg max-sm:px-5 max-sm:py-3' id="home">
            <h1 className={`text-5xl max-md:text-2xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>Hi, I'm <span className="text-violet-500">YERRIBOYINA TEJA</span></h1>
            <p className={`min-lg:w-3xl max-sm:text-[0.7rem] ${isDark ? 'text-white' : 'text-black'} text-xl`}>
                I’m Teja — passionate about technology, problem-solving, and continuous learning.
My journey spans across DSA, Web Development, and Cybersecurity, with a strong interest in building impactful applications.
Always curious, always experimenting.
            </p>
            <button className="px-7 py-1 bg-violet-500 text-white rounded-full text-lg">View My Work</button>
        </div>
    )
}
