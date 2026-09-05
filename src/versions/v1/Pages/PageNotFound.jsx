import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <p>Page not found.</p>
      <Link to="/v1">Back to home</Link>
    </div>
  );
}

export default PageNotFound;
