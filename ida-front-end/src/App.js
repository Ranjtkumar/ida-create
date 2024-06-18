import logo from './logo.svg';
import './App.css';
import './index.css'
import About from './components/About';

function App() {
  return (
    <div>
      <div className='bg-slate-200 grid grid-cols-12 px-20 py-20'>
        <div className="col-span-6">
          <img src="/assets/learn.jpeg" className="w-3/4 h-72 rounded-lg" />
          <button className="mt-3 bg-green-600 hover:bg-green-400 px-5 py-3 rounded-full text-lg text-white font-bold">
            Explore Now
          </button>

        </div>

        <div className="col-span-6">
          <div className="text-3xl font-bold text-blue-700">
            Bring Your Idea To Reality
          </div>

          <div className="text-gray-500 text-xl font-semibold w-3/4 pt-3">
            <em>
              "<sapn className="font-bold text-black">Creativity </sapn>
              is the language we use communicate the urgency of our dream for a better future"
            </em>

            <img src="/assets/inovate.png" className="h-40 w-full mt-4 rounded-lg" />
          </div>
        </div>

       
      </div>

      <About/>
    </div>
  );
}

export default App;
