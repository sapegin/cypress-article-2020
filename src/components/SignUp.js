import React from 'react';
import { SignUpForm } from './SignUpForm';

export function SignUp() {
  const [status, setStatus] = React.useState('editing');
  const [profile, setProfile] = React.useState({});

  const handleSubmit = (values) => {
    setProfile(values);
    setStatus('saved');
  };

  return status === 'editing' ? (
    <SignUpForm onSubmit={handleSubmit} />
  ) : (
    <>
      <h1>Thank you for signing up!</h1>
      <p>Here’s what you’ve told us:</p>
      <table>
        <tbody>
          {Object.entries(profile).map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{value.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
