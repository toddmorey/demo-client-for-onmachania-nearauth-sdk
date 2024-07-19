import React, { useEffect, useState } from 'react';
import { authTokenFromWallet } from '@onmachina/nearauth-sdk-wallet';

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initiateLogin = async () => {
      try {
        const authToken = await authTokenFromWallet('testnet');
        console.log(authToken);
        setIsLoading(false);
        // You might want to redirect the user or update some global state here
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setIsLoading(false);
      }
    };

    initiateLogin();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Login Successful</h1>
      <p>Your near id is... </p>
    </div>
  );
};

export default Login;