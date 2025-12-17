import { useState, useEffect } from 'react';

const registrationCategories = [
  {
    title: "Individual Delegate",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScz1KIYSBKRldDVgayt591A-JdwAveK5ywjRnBUrX6l4kvALw/viewform",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    description: "Register as a solo participant and represent a nation independently"
  },
  {
    title: "Delegation",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeBAOAinkQWtICQpcllAetdyqfun0_jjxDJi9-rAW57jfSY_w/viewform",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
    description: "Bring your team and compete together as a unified delegation"
  }
];

const RegistrationPage = () => {
  const calculateTimeLeft = (deadline) => {
    const target = new Date(deadline).getTime();
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [earlyBirdTime, setEarlyBirdTime] = useState(
    calculateTimeLeft("2025-12-25T23:59:59")
  );

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft("2026-01-20T00:00:00")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setEarlyBirdTime(calculateTimeLeft("2025-12-25T23:59:59"));
      setTimeLeft(calculateTimeLeft("2026-01-20T00:00:00"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Registrations
          </h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-blue-200">
            Secure your spot at AKESPMUN IV - Where diplomacy meets excellence
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Early Bird Discount Section */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 mb-8 shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="text-2xl">⚡</span>
                <span className="text-white font-bold">EARLY BIRD SPECIAL</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Save 25% on Registration
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Limited time offer expires in:
              </p>

              <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                {Object.entries(earlyBirdTime).map(([unit, value], i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-white/30">
                    <div className="text-4xl font-bold text-white mb-1">
                      {String(value).padStart(2, '0')}
                    </div>
                    <div className="text-sm uppercase text-white/80 font-semibold">
                      {unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final Registration Deadline */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-700">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Registration Closes
              </h3>
              <p className="text-blue-400 text-lg">January 20, 2026</p>
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {Object.entries(timeLeft).map(([unit, value], i) => (
                <div key={i} className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
                  <div className="text-3xl font-bold text-white mb-1">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase text-slate-300 font-semibold">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Categories */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Register Now and get ready for a <span className="text-blue-400">remarkable</span> MUN experience!
            </h2>
            <p className="text-xl text-slate-300">
              Select the registration type that best fits your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {registrationCategories.map((category, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {category.description}
                  </p>
                  <a
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    <span>Begin Registration</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;