function App() {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex justify-center items-center">
      <form action="http://www.google.com/custom" target="_blank">
        <div className="search h-[110px] px-[20px] rounded-full flex items-center justify-between bg-neutral-700 overflow-hidden">
          <input type="text" placeholder="Pesquisar" name="q" className="text-search bg-transparent outline-none w-0 text-zinc-300 h-[110px] transition-all duration-300" />

          <button>
            <img src="https://img.icons8.com/ios-glyphs/512/ffffff/search.png" alt="" className="w-[70px] rounded-full p-4 hover:bg-blue-700 transition-colors duration-300" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
