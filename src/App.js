import './App.css';  // Assuming it's a CSS file
import CustomBanner from './components/CustomBanner';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <div className='navy-bg'>
      <PageHeader />
      <CustomBanner />
    </div>
  );
}

export default App;
