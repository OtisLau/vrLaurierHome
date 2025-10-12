import Navbar from './components/navbar'
function App() {
    return (
        <div className="px-5 py-2.5 bg-blue-900 h-screen w-screen">
            <Navbar />
            <section id="home"></section>
            <section id="events"></section>
            <section id="about"></section>
        </div>
    )
}

export default App
