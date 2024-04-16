import './App.css';  // Assuming it's a CSS file
import CustomBanner from './components/CustomBanner';
import PageHeader from './components/PageHeader';
import Pattern from './components/Pattern';

function App() {
  return (
    <div className='navy-bg'>
      <Pattern />
      <PageHeader />
      <CustomBanner />
    </div>
  );
}

export default App;
