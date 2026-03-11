import { Link } from 'react-router';
import { Target, Cpu, TrendingUp, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              About Tech Solve Engine
            </h1>
            <p className="text-xl text-gray-600">
              Engineering the technology backbone of modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Tech Solve Engine is a strategic technology partner focused on designing, building, and operating reliable technology environments for organizations that understand technology as a business enabler, not just a cost center.
              </p>
              <p>
                We work with founders, CEOs, CTOs, and technology leaders who recognize that the right technology foundation is essential for sustainable business growth.
              </p>
              <p className="text-gray-900 font-medium">
                Our approach combines strategic business thinking with disciplined engineering to create technology environments that remain secure, scalable, and reliable over multi-year timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technology should enable business growth, not disrupt it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Over the past two decades, Tech Solve Engine has helped organizations build reliable technology foundations that support long-term growth.
              </p>
              <p>
                We've witnessed the evolution of technology from on-premise data centers to cloud-native architectures, from perimeter security to zero-trust frameworks, and from manual operations to infrastructure-as-code.
              </p>
              <p>
                Through this evolution, one principle has remained constant: <span className="text-gray-900 font-medium">technology must be designed with business outcomes in mind.</span>
              </p>
              <p>
                Our experience spans startups scaling rapidly, established enterprises modernizing infrastructure, and international organizations expanding into new markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">What Drives Us</h2>
            <div className="space-y-6 text-lg text-blue-100">
              <p>We are driven by the opportunity to solve complex technology challenges that enable business growth.</p>
              <p>Every organization we work with has unique goals, constraints, and opportunities. Our role is to design technology environments that align with these realities while maintaining security, reliability, and scalability.</p>
              <p className="text-white font-medium text-xl">When our clients succeed in their business objectives supported by solid technology foundations, we consider that the ultimate measure of our success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Commitment to Clients</h2>
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{commitment.title}</h3>
                    <p className="text-gray-600">{commitment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Reliable Together</h2>
          <p className="text-xl text-gray-300 mb-10">If you're looking for a technology partner that understands both business and engineering, let's talk.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
            Start a Conversation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

const philosophy = [
  { icon: Target, title: 'Responsible Engineering', description: 'We build technology environments with long-term thinking, not short-term shortcuts.' },
  { icon: TrendingUp, title: 'Long-Term Architecture', description: 'Our solutions are designed to support 3-5 years of growth without major disruptions.' },
  { icon: Cpu, title: 'Continuous Learning', description: 'Technology evolves rapidly. We stay current with best practices and emerging standards.' }
];

const commitments = [
  { title: 'Honest Assessment', description: 'We provide honest evaluations of technology needs, even when it means recommending less expensive solutions.' },
  { title: 'Engineering Excellence', description: 'Every solution is built on sound engineering principles with attention to security, reliability, and scalability.' },
  { title: 'Transparent Communication', description: 'We explain technical decisions in business terms and keep clients informed throughout every engagement.' },
  { title: 'Long-Term Partnership', description: 'We measure success by long-term client relationships, not short-term transactions.' },
  { title: 'Business Alignment', description: 'Every technology decision is evaluated against business objectives and operational requirements.' }
];
