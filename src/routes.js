import React from 'react';
import { Router, Link } from '@reach/router';
import { SignUp } from './components/SignUp';
import { RemotePizza } from './components/RemotePizza';

const HomePage = () => (
  <ul>
    <li>
      <Link to="/signup">Sign up</Link>
    </li>
    <li>
      <Link to="/remote-pizza">RemotePizza</Link>
    </li>
  </ul>
);

const SignUpPage = () => <SignUp />;

const RemotePizzaPage = () => <RemotePizza />;

const TermsAndConfitionsPage = () => (
  <main>
    <h1>Terms and conditions</h1>
    <p>
      I'm baby ennui vice shabby chic, migas gochujang 90's retro gastropub
      knausgaard banh mi waistcoat. Keytar tumeric deep v, migas enamel pin
      occupy drinking vinegar poke. Fashion axe tousled master cleanse 3 wolf
      moon, humblebrag fixie brooklyn beard lumbersexual hell of small batch
      direct trade biodiesel wayfarers. Hot chicken umami tilde messenger bag.
      Bespoke sriracha craft beer, mixtape subway tile twee meditation cred wolf
      man braid taxidermy polaroid forage tofu hell of. Adaptogen viral selfies
      cold-pressed activated charcoal skateboard, ugh blog you probably haven't
      heard of them bitters cardigan four loko fam.
    </p>
  </main>
);

export function Routes() {
  return (
    <Router>
      <HomePage path="/" />
      <SignUpPage path="/signup" />
      <RemotePizzaPage path="/remote-pizza" />
      <TermsAndConfitionsPage path="/toc" />
    </Router>
  );
}
