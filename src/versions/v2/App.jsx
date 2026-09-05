import Desktop from '../../components/layout/Desktop';
import { OSProvider } from '../../context/OSContext';

export default function V2() {
  return (
    <div className="portfolio-v2">
      <OSProvider>
        <Desktop />
      </OSProvider>
    </div>
  );
}
