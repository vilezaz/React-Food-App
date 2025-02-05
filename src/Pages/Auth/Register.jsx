import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, setUser } from '../../Store/Slices/Auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      return alert("Passwords do not match!");
    }
    dispatch(registerUser({ email, password }))
    .unwrap()
    .then(()=> {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    });
  }

  useEffect(() => {
    if(user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 pt-28">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-100">
        <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#ed3f36' }}>Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              disabled={loading}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed3f36]/50 transition duration-300"
              required
            />
          </div>
          <div>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              disabled={loading}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed3f36]/50 transition duration-300"
              required
            />
          </div>
          <div className="space-y-2">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              disabled={loading}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed3f36]/50 transition duration-300"
              required
            />
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm password"
              disabled={loading}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed3f36]/50 transition duration-300"
              required
            />
          </div>
          <button
            type="submit" 
            disabled={loading}
            className={`w-full p-2 rounded-lg text-white font-semibold text-lg transition duration-300 ${
              loading 
                ? "bg-[#ed3f36]/50 cursor-not-allowed" 
                : "bg-[#ed3f36] hover:bg-[#ed3f36]/90"
            }`}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
          
          <div className="flex items-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          <button 
            type="button" 
            className="w-full flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-3">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-1 7.28-2.69l-3.57-2.75c-.99.67-2.26 1.07-3.71 1.07-2.87 0-5.3-1.93-6.17-4.53H2.18v2.84C4 20.2 7.74 23 12 23z"/>
              <path fill="#FBBC05" d="M5.83 14.11c-.25-.67-.38-1.39-.38-2.11s.14-1.44.38-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.65-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.74 1 4 3.8 2.18 7.05l3.65 2.84c.87-2.6 3.3-4.51 6.17-4.51z"/>
            </svg>
            Continue with Google
          </button>

          {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?
            <Link to="/login" className="font-semibold text-[#ed3f36]">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;