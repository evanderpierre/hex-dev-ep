import './App.css';  // Assuming it's a CSS file
import Pattern from './components/Pattern';
import CustomBanner from './components/CustomBanner';
import PageHeader from './components/PageHeader';

function AppBuilderElements() {
  return (
    <div>
      <Pattern />
      <PageHeader />
    </div>
  );
}

export default AppBuilderElements;
