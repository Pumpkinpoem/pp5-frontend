import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignInForm from './pages/auth/SignInForm';

test('log rendered SignInForm HTML', () => {
  const { container } = render(
    <Router>
      <Route path="/signin">
        <SignInForm />
      </Route>
    </Router>
  );

  console.log(container.innerHTML);
});
