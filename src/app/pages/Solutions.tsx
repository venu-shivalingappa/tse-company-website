import { Link } from 'react-router';
import { Target, Network, Cloud, Shield, Cpu, Settings, FileCheck, ArrowRight } from 'lucide-react';

export default function Solutions() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Technology Solutions</h1>
            <p className="text-xl text-gray-600">Engineering the technology backbone businesses depend on.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 mb-3">Capabilities include:</p>
                  <ul className="space-y-2">
                    {solution.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Integrated Technology Stack</h2>
            <p className="text-lg text-gray-600 mb-12">Our solutions work together to create a comprehensive technology environment. From strategy and architecture to implementation and operations, every component is designed to support your business growth.</p>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-4">
                {connectionSteps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex-1 text-center py-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-gray-900">{step}</p>
                      </div>
                    </div>
                    {index < connectionSteps.length - 1 && (
                      <div className="flex justify-center my-2">
                        <ArrowRight className="text-blue-600 rotate-90" size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Outcomes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our solutions deliver tangible business value through improved efficiency, reduced risk, and scalable growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl font-bold text-blue-600 mb-4">{outcome.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{outcome.title}</h3>
                <p className="text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Discuss Your Technology Needs</h2>
          <p className="text-xl text-gray-300 mb-10">Every organization has unique requirements. We'll work with you to design the right solution for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
              Talk to Our Experts
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/case-studies" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium">View Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const solutions = [
  { icon: Target, title: 'Technology Strategy', description: 'Defining technology roadmaps aligned with business vision, scalability, and operational requirements.', capabilities: ['Technology roadmap development', 'Architecture planning', 'Vendor evaluation and selection', 'Technology investment optimization'] },
  { icon: Network, title: 'Infrastructure & Networking', description: 'Designing stable infrastructure environments that support reliable business operations.', capabilities: ['Enterprise networking', 'Office infrastructure', 'Connectivity architecture', 'Wireless infrastructure design', 'Multi-site environments'] },
  { icon: Cloud, title: 'Cloud Engineering', description: 'Building scalable cloud environments designed for performance and flexibility.', capabilities: ['Cloud architecture design', 'Hybrid cloud environments', 'Migration planning', 'Cloud optimization', 'Multi-cloud strategy'] },
  { icon: Shield, title: 'Cybersecurity', description: 'Protecting organizations with secure architecture and governance frameworks.', capabilities: ['Security architecture', 'Identity and access management', 'Endpoint protection', 'Risk and compliance alignment', 'Security operations'] },
  { icon: Cpu, title: 'DevOps', description: 'Improving technology operations through automation and modern engineering practices.', capabilities: ['CI/CD pipelines', 'Infrastructure automation', 'Deployment optimization', 'Containerization', 'Monitoring and observability'] },
  { icon: Settings, title: 'Managed Technology Operations', description: 'Operating technology environments so businesses can focus on growth.', capabilities: ['Monitoring and maintenance', 'Performance optimization', 'Lifecycle management', 'Incident response', 'Continuous improvement'] },
  { icon: FileCheck, title: 'Information Security & Compliance', description: 'Helping organizations build security governance aligned with international frameworks.', capabilities: ['ISO 27001 readiness', 'Governance frameworks', 'Compliance alignment', 'Risk management', 'Security policy development'] }
];

const connectionSteps = ['Technology Strategy', 'Architecture Design', 'Infrastructure & Cloud Implementation', 'Security & Compliance Integration', 'DevOps & Automation', 'Managed Operations'];

const outcomes = [
  { metric: '3-5 Years', title: 'Scalable Growth', description: 'Architecture designed to support multi-year business expansion' },
  { metric: '86%', title: 'Cost Optimization', description: 'Average infrastructure cost reduction through efficient design' },
  { metric: '99.9%', title: 'Operational Reliability', description: 'Enterprise-grade uptime and performance standards' }
];
