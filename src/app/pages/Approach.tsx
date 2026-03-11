import { Link } from 'react-router';
import { Target, Search, Layers, Code, Shield, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Approach() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Our Approach</h1>
            <p className="text-xl text-gray-600">Strategic technology architecture designed for long-term business growth.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Approach Matters</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>Technology decisions can determine whether an organization grows efficiently or struggles with operational complexity.</p>
              <p>Poorly designed technology environments lead to security risks, operational disruptions, and unnecessary costs.</p>
              <p className="text-gray-900 font-medium">Tech Solve Engine focuses on building technology environments that remain reliable, secure, and scalable over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">TSE Methodology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our methodology combines strategic thinking with disciplined engineering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">{index + 1}</div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Architecture Philosophy</h2>
            <p className="text-xl text-gray-600 mb-12">Technology architecture must support business growth without creating operational instability.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Long-Term Partnership Model</h2>
            <p className="text-xl text-blue-100 mb-8">We don't just build and walk away. Tech Solve Engine operates as a long-term technology partner, supporting your environment through continuous evolution and growth.</p>
            <p className="text-lg text-blue-100">Our architecture is designed to support 3–5 years of business growth without requiring disruptive overhauls.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Build the Right Foundation?</h2>
          <p className="text-xl text-gray-600 mb-10">Let's discuss how our approach can support your technology goals.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
            Talk to Our Experts
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

const methodology = [
  { icon: Target, title: 'Understand Business Vision', description: 'We begin by understanding your business objectives, growth plans, and operational requirements.' },
  { icon: Search, title: 'Evaluate Current Technology Environment', description: 'Assessing existing infrastructure, identifying gaps, and understanding constraints.' },
  { icon: Layers, title: 'Define Technology Strategy', description: 'Creating a technology roadmap aligned with business goals and scalability needs.' },
  { icon: Code, title: 'Design Architecture', description: 'Designing infrastructure, cloud, and security architecture for long-term scale.' },
  { icon: Shield, title: 'Implement Secure Infrastructure', description: 'Deploying solutions with engineering discipline and security-first principles.' },
  { icon: Settings, title: 'Support and Evolve Operations', description: 'Continuous monitoring, optimization, and evolution to maintain performance.' }
];

const philosophyPoints = [
  'Support business growth',
  'Minimize operational risk',
  'Remain secure and compliant',
  'Allow future expansion',
  'Reduce unnecessary complexity'
];
